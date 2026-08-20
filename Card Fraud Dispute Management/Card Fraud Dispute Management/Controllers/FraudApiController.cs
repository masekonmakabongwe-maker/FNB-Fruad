using System;
using System.Collections.Generic;
using System.IO;
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

                string pdfFileName = $"contact-note-{caseNum}.pdf";

                // Locate file in webroot/evidence or root/evidence
                string filePath = !string.IsNullOrEmpty(_env.WebRootPath)
                    ? Path.Combine(_env.WebRootPath, "evidence", pdfFileName)
                    : Path.Combine(_env.ContentRootPath, "evidence", pdfFileName);

                if (!System.IO.File.Exists(filePath))
                {
                    filePath = Path.Combine(_env.ContentRootPath, "evidence", pdfFileName);
                }

                byte[] fileBytes;
                if (System.IO.File.Exists(filePath))
                {
                    fileBytes = await System.IO.File.ReadAllBytesAsync(filePath);
                    _logger.LogInformation("📄 Loaded physical PDF evidence file: {Path} ({Size} bytes)", filePath, fileBytes.Length);
                }
                else
                {
                    fileBytes = Encoding.UTF8.GetBytes($"Synthetic PDF Evidence Stream for {request.CaseId} - {pdfFileName}");
                    _logger.LogWarning("⚠️ Physical PDF not found at {Path}. Using synthetic fallback stream.", filePath);
                }

                var result = await _integrationService.InvokeAgentAsync(
                    request.AgentKey,
                    request.UpstreamOutputs ?? new Dictionary<string, string>(),
                    fileBytes,
                    pdfFileName,
                    apiKey,
                    username,
                    password
                );

                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "❌ Error executing agent '{AgentKey}' for case '{CaseId}'", request.AgentKey, request.CaseId);
                return StatusCode(500, new { success = false, message = ex.Message });
            }
        }
    }

    public class AgentRunRequest
    {
        public string CaseId { get; set; } = string.Empty;
        public string AgentKey { get; set; } = string.Empty;
        public Dictionary<string, string> UpstreamOutputs { get; set; } = new();
    }
}