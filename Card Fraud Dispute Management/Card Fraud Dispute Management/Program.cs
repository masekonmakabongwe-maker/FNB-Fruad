using CardFraudDisputeApp.Services;

var builder = WebApplication.CreateBuilder(args);

// 1. Add services to the container (Razor Pages + Controllers)
builder.Services.AddRazorPages();
builder.Services.AddControllers(); // Required for FraudApiController

// 2. Register HttpClient and FraudApiIntegrationService
builder.Services.AddHttpClient<FraudApiIntegrationService>();

var app = builder.Build();

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