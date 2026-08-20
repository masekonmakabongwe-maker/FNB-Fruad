namespace CardFraudDisputeApp.Models
{
    public class RoleModel
    {
        public string Id { get; set; } = string.Empty;
        public string Name { get; set; } = string.Empty;
        public string Title { get; set; } = string.Empty;
        public string Initials { get; set; } = string.Empty;
        public int Rank { get; set; }
        public string Scope { get; set; } = string.Empty;
        public string Username { get; set; } = string.Empty;
    }

    public class AgentData
    {
        public string AgentKey { get; set; } = string.Empty;
        public double? Conf { get; set; }
        public string Finding { get; set; } = string.Empty;
        public string Tone { get; set; } = string.Empty; // clean, flag, block
        public string Desc { get; set; } = string.Empty;
        public List<string> Reasoning { get; set; } = new();
        public string Feeds { get; set; } = string.Empty;
        public bool Blocked { get; set; }
        public bool Policy { get; set; }
        public bool Injection { get; set; }
    }

    public class PersonaModel
    {
        public string Id { get; set; } = string.Empty;
        public string Tag { get; set; } = string.Empty;
        public string Customer { get; set; } = string.Empty;
        public string Urgency { get; set; } = string.Empty;
        public string Amount { get; set; } = string.Empty;
        public string Channel { get; set; } = string.Empty;
        public string Product { get; set; } = string.Empty;
        public string Headline { get; set; } = string.Empty;
        public bool Recognised { get; set; }
        public string? Classification { get; set; }
        public bool Mule { get; set; }
        public bool Casp { get; set; }
        public bool Str { get; set; }
        public bool Vulnerable { get; set; }
        public Dictionary<string, AgentData> A { get; set; } = new();
    }
}