using CardFraudDisputeApp.Services;
using Microsoft.AspNetCore.HttpOverrides;

var builder = WebApplication.CreateBuilder(args);

// Containers on Vercel (and most container hosts) are told which port to
// listen on via the PORT environment variable - Vercel's own docs specify
// it defaults to 80 if unset. Locally, this falls through to whatever
// launchSettings.json / ASPNETCORE_URLS already configures, so this only
// changes behavior when PORT is actually present (i.e. when deployed).
var port = Environment.GetEnvironmentVariable("PORT");
if (!string.IsNullOrEmpty(port))
{
    builder.WebHost.UseUrls($"http://+:{port}");
}

// 1. Add services to the container (Razor Pages + Controllers)
builder.Services.AddRazorPages();
builder.Services.AddControllers(); // Required for FraudApiController

// 2. Register HttpClient and FraudApiIntegrationService
builder.Services.AddHttpClient<FraudApiIntegrationService>();

var app = builder.Build();

// Vercel terminates TLS at the edge and forwards plain HTTP to the
// container, setting X-Forwarded-Proto/X-Forwarded-For to say so. Without
// this, UseHttpsRedirection()/UseHsts() below would see every request as
// insecure HTTP and try to redirect it to HTTPS again internally - since
// the container only ever listens on HTTP, that becomes a redirect loop.
// This tells the app to trust those forwarded headers and treat the
// request as the HTTPS request it actually was. KnownNetworks/KnownProxies
// are cleared because ASP.NET Core only trusts forwarded headers from
// known local proxy IPs by default - Vercel's edge isn't one of those, so
// without clearing these lists the headers would just be silently ignored
// and the redirect loop would still happen.
var forwardedHeadersOptions = new ForwardedHeadersOptions
{
    ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto
};
// KnownNetworks/KnownProxies default to loopback-only, and object-initializer
// syntax like `KnownNetworks = { }` would just add zero entries to that
// existing default rather than clearing it - .Clear() is required to
// actually remove the default entries so headers from Vercel's edge (an
// unknown, non-loopback address) are trusted instead of silently ignored.
forwardedHeadersOptions.KnownNetworks.Clear();
forwardedHeadersOptions.KnownProxies.Clear();
app.UseForwardedHeaders(forwardedHeadersOptions);

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

// 3. Map Razor Pages and API Controllers
app.MapRazorPages();
app.MapControllers(); // Required to route requests to /api/fraud/...

app.Run();