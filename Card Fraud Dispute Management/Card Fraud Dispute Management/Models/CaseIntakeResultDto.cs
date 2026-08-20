using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace CardFraudDisputeApp.Models
{
    public class CaseIntakeResultDto
    {
        [JsonPropertyName("caseRef")]
        public string CaseRef { get; set; } = string.Empty;

        [JsonPropertyName("status")]
        public string Status { get; set; } = string.Empty;

        [JsonPropertyName("customer")]
        public CustomerDto Customer { get; set; } = new();

        [JsonPropertyName("reportedEvent")]
        public ReportedEventDto ReportedEvent { get; set; } = new();

        [JsonPropertyName("urgency")]
        public UrgencyDto Urgency { get; set; } = new();

        [JsonPropertyName("materialGaps")]
        public List<string> MaterialGaps { get; set; } = new();

        [JsonPropertyName("recommendation")]
        public RecommendationDto Recommendation { get; set; } = new();

        [JsonPropertyName("humanGate")]
        public HumanGateDto HumanGate { get; set; } = new();

        // Nested child DTOs prevent collisions with other agent models
        public class CustomerDto
        {
            [JsonPropertyName("fullName")]
            public string FullName { get; set; } = string.Empty;

            [JsonPropertyName("cardEnding")]
            public string CardEnding { get; set; } = string.Empty;
        }

        public class ReportedEventDto
        {
            [JsonPropertyName("customerPosition")]
            public string CustomerPosition { get; set; } = string.Empty;

            [JsonPropertyName("reportedTotal")]
            public ReportedTotalDto ReportedTotal { get; set; } = new();
        }

        public class ReportedTotalDto
        {
            [JsonPropertyName("amount")]
            public decimal Amount { get; set; }

            [JsonPropertyName("currency")]
            public string Currency { get; set; } = "ZAR";
        }

        public class UrgencyDto
        {
            [JsonPropertyName("level")]
            public string Level { get; set; } = string.Empty;

            [JsonPropertyName("reason")]
            public string Reason { get; set; } = string.Empty;
        }

        public class RecommendationDto
        {
            [JsonPropertyName("action")]
            public string Action { get; set; } = string.Empty;

            [JsonPropertyName("reason")]
            public string Reason { get; set; } = string.Empty;
        }

        public class HumanGateDto
        {
            [JsonPropertyName("required")]
            public bool Required { get; set; }

            [JsonPropertyName("status")]
            public string Status { get; set; } = string.Empty;
        }
    }
}