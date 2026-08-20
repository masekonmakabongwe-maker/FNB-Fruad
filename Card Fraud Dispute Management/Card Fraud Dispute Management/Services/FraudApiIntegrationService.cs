using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.IO;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace CardFraudDisputeApp.Services
{
    public class FraudApiIntegrationService
    {
        private readonly HttpClient _httpClient;
        private readonly ILogger<FraudApiIntegrationService> _logger;

        private const string BASE_URL = "https://api.intellectseecstag.com/";

        // Agent Asset ID Registry — updated against the live Purple Fabric "Run" screens
        // (screenshots + fresh OpenAPI specs, all agents). All 9 wired agents now have
        // confirmed real asset IDs; the earlier transactionClassification placeholder
        // is gone, replaced by its actual ID below.
        private static readonly Dictionary<string, string> AssetIds = new()
        {
            ["caseIntake"] = "4855b431-b9ac-4c28-81d5-c800dda76c0f",
            ["recognitionCheck"] = "5625d820-0a52-4229-8cff-39f62ece8892",
            ["fraudAssessment"] = "68bf5a0b-a498-4a91-812b-bb41d6502528",
            ["transactionClassification"] = "90cfdf7f-baa3-4250-a46d-b4c93a911ba2",
            ["fundsTrace"] = "1c9613a9-3074-44df-9ec2-8d4b152aaecc",
            ["shadowCredit"] = "baa98bb4-bb5a-405a-a04b-72fe1e01e7df",
            ["chargebackPreparation"] = "b87bdd53-de89-47f9-b384-697c4db1823e",
            ["recallRepatriation"] = "a58999c2-653d-45e6-8fda-de4d372aea82",
            ["obligationCheck"] = "f4c01899-68de-4f7c-aca6-ad6d1cee0cbd"
        };

        public FraudApiIntegrationService(HttpClient httpClient, ILogger<FraudApiIntegrationService> logger)
        {
            _httpClient = httpClient;
            _logger = logger;
        }

        public async Task<string> GetAccessTokenAsync(string apiKey, string username, string password)
        {
            _logger.LogInformation("🔑 Authenticating with Purple Fabric API as user '{Username}'...", username);

            var request = new HttpRequestMessage(HttpMethod.Get, $"{BASE_URL}accesstoken/idxpdemo");
            request.Headers.ExpectContinue = false;

            request.Headers.Add("apikey", apiKey);
            request.Headers.Add("username", username);
            request.Headers.Add("password", password);

            var response = await _httpClient.SendAsync(request);
            var responseString = await response.Content.ReadAsStringAsync();

            if (!response.IsSuccessStatusCode)
            {
                _logger.LogError("❌ Authentication failed ({Status}): {Response}", response.StatusCode, responseString);
                throw new Exception($"Authentication failed: {responseString}");
            }

            using var doc = JsonDocument.Parse(responseString);
            return doc.RootElement.GetProperty("access_token").GetString() ?? string.Empty;
        }

        public async Task<object> InvokeAgentAsync(
            string agentKey,
            Dictionary<string, string> upstreamOutputs,
            byte[] fileBytes,
            string pdfFileName,
            string apiKey,
            string username,
            string password)
        {
            try
            {
                if (!AssetIds.TryGetValue(agentKey, out var assetId))
                {
                    return new { success = false, message = $"Unknown agent key: {agentKey}" };
                }

                // 1. Acquire bearer token
                string token = await GetAccessTokenAsync(apiKey, username, password);

                // 2. Build multipart payload
                using var content = new MultipartFormDataContent();

                // Add allowed upstream text fields only
                if (upstreamOutputs != null)
                {
                    foreach (var kvp in upstreamOutputs)
                    {
                        if (!string.IsNullOrWhiteSpace(kvp.Value))
                        {
                            _logger.LogInformation("📎 Attaching upstream text entity: '{Key}' ({Length} chars)", kvp.Key, kvp.Value.Length);
                            content.Add(new StringContent(kvp.Value, Encoding.UTF8), kvp.Key);
                        }
                    }
                }

                // Add PDF binary file
                if (fileBytes != null && fileBytes.Length > 0)
                {
                    var fileContent = new ByteArrayContent(fileBytes);
                    fileContent.Headers.ContentType = new MediaTypeHeaderValue("application/pdf");
                    content.Add(fileContent, "CASE_FILES_TEXT", pdfFileName);
                    _logger.LogInformation("📄 Attaching PDF entity: 'CASE_FILES_TEXT' ({FileName}, {Size} bytes)", pdfFileName, fileBytes.Length);
                }

                // 3. Initiate agent execution
                string postUrl = $"{BASE_URL}magicplatform/v1/invokeasset/{assetId}/genai";
                var request = new HttpRequestMessage(HttpMethod.Post, postUrl);
                request.Headers.ExpectContinue = false;

                request.Headers.Add("apikey", apiKey);
                request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", token);
                request.Content = content;

                _logger.LogInformation("🚀 [POST] Invoking agent '{AgentKey}' (Asset: {AssetId})...", agentKey, assetId);
                var response = await _httpClient.SendAsync(request);
                var responseString = await response.Content.ReadAsStringAsync();

                if (!response.IsSuccessStatusCode)
                {
                    _logger.LogError("❌ Agent invocation failed ({Status}): {Response}", response.StatusCode, responseString);
                    return new { success = false, message = $"API HTTP {(int)response.StatusCode}: {responseString}" };
                }

                using var doc = JsonDocument.Parse(responseString);
                string traceId = doc.RootElement.GetProperty("trace_id").GetString();
                _logger.LogInformation("⏳ Agent initiated. Trace ID: {TraceId}. Polling result...", traceId);

                // 4. Poll trace ID for output
                string outputText = await PollTraceResultAsync(assetId, traceId, apiKey, token);
                return new { success = true, outputText };
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "❌ Exception during execution of agent '{AgentKey}'", agentKey);
                return new { success = false, message = ex.Message };
            }
        }

        private async Task<string> PollTraceResultAsync(string assetId, string traceId, string apiKey, string token)
        {
            // Extended window: 40 attempts x 3000ms = 120 seconds total
            int maxAttempts = 40;
            int delayMs = 3000;

            for (int i = 0; i < maxAttempts; i++)
            {
                await Task.Delay(delayMs);

                var pollMessage = new HttpRequestMessage(HttpMethod.Get, $"{BASE_URL}magicplatform/v1/invokeasset/{assetId}/{traceId}");
                pollMessage.Headers.ExpectContinue = false;

                pollMessage.Headers.Add("apikey", apiKey);
                pollMessage.Headers.Authorization = new AuthenticationHeaderValue("Bearer", token);

                var pollResponse = await _httpClient.SendAsync(pollMessage);
                if (pollResponse.IsSuccessStatusCode)
                {
                    var pollString = await pollResponse.Content.ReadAsStringAsync();
                    _logger.LogInformation("🔍 Poll [{Attempt}/{Max}]: {PollString}", i + 1, maxAttempts, pollString);

                    using var doc = JsonDocument.Parse(pollString);
                    var root = doc.RootElement;

                    if (root.TryGetProperty("status", out var statusProp))
                    {
                        string status = statusProp.GetString() ?? "";

                        // Handle agent failure/error
                        if (status.Equals("FAILED", StringComparison.OrdinalIgnoreCase) ||
                            status.Equals("ERROR", StringComparison.OrdinalIgnoreCase))
                        {
                            throw new Exception($"Server reported agent failure: {pollString}");
                        }

                        // Handle agent completion
                        if (status.Equals("COMPLETED", StringComparison.OrdinalIgnoreCase) ||
                            status.Equals("SUCCESS", StringComparison.OrdinalIgnoreCase))
                        {
                            string result = ExtractOutputFromJson(root);

                            // Fallback: If no nested string field matched, return raw payload
                            if (string.IsNullOrWhiteSpace(result))
                            {
                                result = pollString;
                            }

                            _logger.LogInformation("✅ Agent completed successfully on poll attempt {Attempt}!", i + 1);
                            return result;
                        }
                    }

                    // Fallback check if 'status' field is omitted but output payload exists
                    string fallbackResult = ExtractOutputFromJson(root);
                    if (!string.IsNullOrWhiteSpace(fallbackResult))
                    {
                        _logger.LogInformation("✅ Output received successfully on poll attempt {Attempt}!", i + 1);
                        return fallbackResult;
                    }
                }
            }

            throw new TimeoutException($"Agent execution timed out after {maxAttempts * delayMs / 1000}s while polling trace ID '{traceId}'.");
        }

        private string ExtractOutputFromJson(JsonElement root)
        {
            // The real Purple Fabric COMPLETED payload nests the actual agent output two
            // levels deep: root.response.output.output (a string), with an identical,
            // simpler copy conveniently available at root.response.beautified_output.
            // Check those exact, confirmed paths first, before falling back to the
            // generic heuristic scan (which stops one level too shallow and was
            // returning the entire response blob — traces, metrics, sources and all —
            // whenever response.output turned out to be an object rather than a string).

            if (root.TryGetProperty("response", out var responseEl) && responseEl.ValueKind == JsonValueKind.Object)
            {
                // Preferred: response.beautified_output (string, one level deep)
                if (responseEl.TryGetProperty("beautified_output", out var beautifiedEl) &&
                    beautifiedEl.ValueKind == JsonValueKind.String)
                {
                    var beautified = beautifiedEl.GetString();
                    if (!string.IsNullOrWhiteSpace(beautified)) return beautified!;
                }

                // Fallback: response.output.output (string, two levels deep)
                if (responseEl.TryGetProperty("output", out var outputObjEl) && outputObjEl.ValueKind == JsonValueKind.Object)
                {
                    if (outputObjEl.TryGetProperty("output", out var innerOutputEl) &&
                        innerOutputEl.ValueKind == JsonValueKind.String)
                    {
                        var inner = innerOutputEl.GetString();
                        if (!string.IsNullOrWhiteSpace(inner)) return inner!;
                    }
                }
                // response.output itself as a plain string (some assets may return it flatter)
                if (responseEl.TryGetProperty("output", out var outputStrEl) && outputStrEl.ValueKind == JsonValueKind.String)
                {
                    var s = outputStrEl.GetString();
                    if (!string.IsNullOrWhiteSpace(s)) return s!;
                }
            }

            // Some assets may return output.output at the root, without a "response" wrapper.
            if (root.TryGetProperty("output", out var rootOutputEl) && rootOutputEl.ValueKind == JsonValueKind.Object)
            {
                if (rootOutputEl.TryGetProperty("output", out var rootInnerEl) && rootInnerEl.ValueKind == JsonValueKind.String)
                {
                    var s = rootInnerEl.GetString();
                    if (!string.IsNullOrWhiteSpace(s)) return s!;
                }
            }

            // Last resort: the original generic heuristic scan, for genuinely unknown shapes.
            string[] topLevelKeys = { "output", "result", "response", "data", "payload", "content", "text" };

            foreach (var key in topLevelKeys)
            {
                if (root.TryGetProperty(key, out var element))
                {
                    if (element.ValueKind == JsonValueKind.String && !string.IsNullOrWhiteSpace(element.GetString()))
                    {
                        return element.GetString()!;
                    }

                    if (element.ValueKind == JsonValueKind.Object)
                    {
                        string[] nestedKeys = { "output", "text", "result", "response", "content", "data", "message" };
                        foreach (var nestedKey in nestedKeys)
                        {
                            if (element.TryGetProperty(nestedKey, out var val) && val.ValueKind == JsonValueKind.String)
                            {
                                string text = val.GetString() ?? "";
                                if (!string.IsNullOrWhiteSpace(text)) return text;
                            }
                        }
                        // Do NOT fall back to dumping the whole object's raw text here —
                        // that's exactly what produced the traces/metrics/sources blob bug.
                        // If nothing string-shaped was found, keep looking at the next top-level key.
                    }
                }
            }

            return string.Empty;
        }
    }
}