using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Text.Json;

namespace CardFraudDisputeApp.Pages
{
    public class IndexModel : PageModel
    {
        public string InitialDataJson { get; set; } = string.Empty;

        public void OnGet()
        {
            var data = new
            {
                Roles = new[]
                {
                    new { id = "investigator", name = "N. Dlamini", title = "Fraud Investigator", initials = "ND", rank = 1, scope = "Approves gates 1, 2, 3, 4, 5", username = "n.dlamini@cfd-demo.bank" },
                    new { id = "fraudmanager", name = "T. Naidoo", title = "Fraud Manager", initials = "TN", rank = 2, scope = "Approves gates 1–5, senior authority", username = "t.naidoo@cfd-demo.bank" },
                    new { id = "accountable", name = "K. Adebayo", title = "Accountable Person", initials = "KA", rank = 3, scope = "Approves all gates, incl. Closure", username = "k.adebayo@cfd-demo.bank" }
                }
            };
            InitialDataJson = JsonSerializer.Serialize(data);
        }
    }
}