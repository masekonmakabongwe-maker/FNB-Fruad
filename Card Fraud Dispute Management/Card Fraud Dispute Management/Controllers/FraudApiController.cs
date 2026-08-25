using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CardFraudDisputeApp.Services;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace CardFraudDisputeApp.Controllers
{
    [ApiController]
    [Route("api/fraud")]
    public class FraudApiController : ControllerBase
    {
        private readonly FraudApiIntegrationService _integrationService;
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;
        private readonly ILogger<FraudApiController> _logger;

        public FraudApiController(
            FraudApiIntegrationService integrationService,
            IConfiguration configuration,
            IWebHostEnvironment env,
            ILogger<FraudApiController> logger)
        {
            _integrationService = integrationService;
            _configuration = configuration;
            _env = env;
            _logger = logger;
        }

        // Which evidence-file categories each agent actually consults, per the
        // FNB reference spec (Card Fraud Details for UI, 21 Aug). Every real
        // case's evidence lives in /evidence, matched by keyword + case number
        // appearing anywhere in the filename (not a strict prefix/suffix) -
        // real files turned out to use inconsistent separators (hyphens, spaces,
        // or none at all) and the case number isn't always right before the
        // extension, e.g. "customer-profile 51204.pdf", "counterparty-chain51890.pdf",
        // "RPL-51890-01-counterparty-bank-a..pdf". See GetCaseFiles for the
        // actual matching logic. A persona simply won't have every category
        // (e.g. only P4's SIM-swap case has a transfer log) - missing ones are
        // skipped, not fabricated, so this list is deliberately the union of
        // everything any persona might need for that agent.
        //
        // "counterparty-reply" is a catch-all bucket: real counterparty-reply
        // files don't share one consistent name across personas (P2 uses
        // RPL-{case}-NN-{who}.pdf, P4 uses {who}-response-{case}.pdf) - any of
        // these keywords appearing in a filename is treated as a counterparty
        // reply for whichever agents need those replies.
        private static readonly string[] CounterpartyReplyKeywords = new[]
        {
            "counterparty-bank", "licensed-casp", "payment-acquirer", "case-admin",
            "acquirer-delivery-receipt", "rpl-"
        };

        private static readonly Dictionary<string, string[]> AgentEvidenceCategories = new()
        {
            ["caseIntake"] = new[] { "auth-log", "contact-note", "customer-profile", "viya-case", "transfer-log" },
            ["recognitionCheck"] = new[] { "auth-log", "contact-note", "statement-history", "transfer-log", "mandate-register", "merchant-descriptors" },
            ["fraudAssessment"] = new[] { "contact-note", "customer-profile", "auth-log", "profile-event-log", "transfer-log", "mno-feed-log", "fraud-policy" },
            ["transactionClassification"] = new[] { "auth-log", "statement-history", "contact-note", "transfer-log", "merchant-descriptors" },
            ["fundsTrace"] = new[] { "auth-log", "counterparty-chain", "acquirer-delivery-receipt" },
            ["shadowCredit"] = new[] { "statement-history", "contact-note", "customer-profile", "mandate-register" },
            ["chargebackPreparation"] = new[] { "auth-log", "contact-note", "statement-history" },
            ["recallRepatriation"] = new[] { "auth-log", "counterparty-chain" }, // + CounterpartyReplyKeywords, always included - see GetCaseFiles
            ["obligationCheck"] = new[] { "auth-log", "contact-note", "profile-event-log", "viya-case", "fraud-policy" },
            ["documentGenerator"] = new[] { "auth-log", "contact-note", "customer-profile", "viya-case", "statement-history", "profile-event-log", "transfer-log", "counterparty-chain", "fraud-policy", "mandate-register", "merchant-descriptors" },
        };

        [HttpPost("run-agent")]
        public async Task<IActionResult> RunAgent([FromBody] AgentRunRequest request)
        {
            if (request == null || string.IsNullOrWhiteSpace(request.AgentKey))
            {
                return BadRequest(new { success = false, message = "Invalid request payload. AgentKey is required." });
            }

            _logger.LogInformation("📥 [HTTP POST] Received request to run agent '{AgentKey}' for case '{CaseId}'", request.AgentKey, request.CaseId);

            try
            {
                string? apiKey = _configuration["PurpleFabric:ApiKey"];
                string? username = _configuration["PurpleFabric:Username"];
                string? password = _configuration["PurpleFabric:Password"];

                if (string.IsNullOrWhiteSpace(apiKey) || string.IsNullOrWhiteSpace(username) || string.IsNullOrWhiteSpace(password))
                {
                    _logger.LogError("❌ PurpleFabric credentials are not configured. Set them via 'dotnet user-secrets' in development, or environment variables / a secret store in any deployed environment. Never commit real values into appsettings.json.");
                    return StatusCode(500, new { success = false, message = "PurpleFabric API credentials are not configured on this server. See appsettings.json comment / README for setup." });
                }

                // Extract numeric identifier from Case ID (e.g., FNB-51204 -> 51204)
                string caseNum = !string.IsNullOrEmpty(request.CaseId)
                    ? request.CaseId.Replace("FNB-", "").Replace("CFD-", "").Trim()
                    : "51204";

                var caseFiles = GetCaseFiles(request.AgentKey, caseNum, request.CaseId ?? caseNum);

                var result = await _integrationService.InvokeAgentAsync(
                    request.AgentKey,
                    request.UpstreamOutputs ?? new Dictionary<string, string>(),
                    caseFiles,
                    apiKey,
                    username,
                    password
                );

                // Merge the real filenames actually sent into whatever shape the
                // service returned (success/timeout/error each look different) -
                // JsonNode lets this add one field without needing to know or
                // reconstruct the exact shape of `result`. This is what lets the
                // UI show the real evidence files an agent used, not a guess.
                var resultNode = System.Text.Json.JsonSerializer.SerializeToNode(result) as System.Text.Json.Nodes.JsonObject;
                if (resultNode != null)
                {
                    resultNode["filesUsed"] = System.Text.Json.Nodes.JsonValue.Create(caseFiles.Select(f => f.FileName).ToArray());
                    return Ok(resultNode);
                }

                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "❌ Error executing agent '{AgentKey}' for case '{CaseId}'", request.AgentKey, request.CaseId);
                return StatusCode(500, new { success = false, message = ex.Message });
            }
        }

        // Loads every evidence file this agent needs for this case, matching by
        // keyword + case number appearing anywhere in the filename (case-
        // insensitive) rather than a strict prefix/suffix - real files use
        // inconsistent separators and the case number isn't always right
        // before the extension. A missing category (a file that doesn't exist
        // yet for this persona) is logged and skipped, not fabricated - the
        // same graceful-degradation pattern the original single-file fallback
        // used, just per-category now.
        private List<(byte[] Bytes, string FileName)> GetCaseFiles(string agentKey, string caseNum, string caseId)
        {
            var files = new List<(byte[] Bytes, string FileName)>();

            if (!AgentEvidenceCategories.TryGetValue(agentKey, out var categories))
            {
                _logger.LogWarning("⚠️ No evidence-category mapping defined for agent '{AgentKey}' - sending no case files.", agentKey);
                return files;
            }

            string evidenceDir = !string.IsNullOrEmpty(_env.WebRootPath)
                ? Path.Combine(_env.WebRootPath, "evidence")
                : Path.Combine(_env.ContentRootPath, "evidence");
            if (!Directory.Exists(evidenceDir))
            {
                evidenceDir = Path.Combine(_env.ContentRootPath, "evidence");
            }

            if (!Directory.Exists(evidenceDir))
            {
                _logger.LogWarning("⚠️ Evidence directory not found at {Dir}.", evidenceDir);
                return files;
            }

            // Every real file for this case, read once rather than re-listing
            // the directory per category.
            var allFilesForCase = Directory.GetFiles(evidenceDir)
                .Where(p => Path.GetFileName(p).IndexOf(caseNum, StringComparison.OrdinalIgnoreCase) >= 0)
                .ToList();

            // Recall & Repatriation (and Funds Trace, which shares counterparty
            // context) always also pull in whatever counterparty-reply-style
            // files exist for this case, on top of their normal category list -
            // these never share one consistent name across personas.
            var effectiveCategories = new List<string>(categories);
            if (agentKey == "recallRepatriation" || agentKey == "fundsTrace")
            {
                effectiveCategories.AddRange(CounterpartyReplyKeywords);
            }

            var addedPaths = new HashSet<string>(StringComparer.OrdinalIgnoreCase);

            foreach (var category in effectiveCategories)
            {
                var matches = allFilesForCase
                    .Where(p => Path.GetFileName(p).IndexOf(category, StringComparison.OrdinalIgnoreCase) >= 0)
                    .ToList();

                if (matches.Count == 0)
                {
                    _logger.LogInformation("ℹ️ No '{Category}' file found for case {CaseId} - skipping, not fabricating one.", category, caseId);
                    continue;
                }

                foreach (var path in matches)
                {
                    if (!addedPaths.Add(path)) continue; // already picked up via another keyword - don't send it twice
                    try
                    {
                        var bytes = System.IO.File.ReadAllBytes(path);
                        files.Add((bytes, Path.GetFileName(path)));
                        _logger.LogInformation("📄 Loaded evidence file: {FileName} ({Size} bytes)", Path.GetFileName(path), bytes.Length);
                    }
                    catch (Exception ex)
                    {
                        _logger.LogWarning(ex, "⚠️ Failed to read evidence file {Path} - skipping.", path);
                    }
                }
            }

            if (files.Count == 0)
            {
                // Same synthetic fallback the app has always used when no real
                // file exists yet - clearly labelled as such, never dressed up
                // as real evidence content.
                var placeholder = Encoding.UTF8.GetBytes($"Synthetic evidence placeholder for {caseId} - no real files found yet for agent '{agentKey}'.");
                files.Add((placeholder, $"placeholder-{caseNum}.txt"));
                _logger.LogWarning("⚠️ No real evidence files found at all for case {CaseId} / agent {AgentKey}. Using a single synthetic placeholder.", caseId, agentKey);
            }

            return files;
        }
    }

    public class AgentRunRequest
    {
        public string CaseId { get; set; } = string.Empty;
        public string AgentKey { get; set; } = string.Empty;
        public Dictionary<string, string> UpstreamOutputs { get; set; } = new();
    }
}