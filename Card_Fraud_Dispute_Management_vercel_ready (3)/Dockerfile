# syntax=docker/dockerfile:1
#
# Standard Dockerfile - works on Render, and on most other container
# platforms that look for a file literally named "Dockerfile" (unlike
# Vercel, which specifically wants "Dockerfile.vercel" - see that file if
# you're deploying there instead). The only hard requirement most of these
# platforms share: the server must listen on the port given in the PORT
# environment variable. Program.cs already reads PORT and binds Kestrel to
# it, and also trusts forwarded headers from the platform's edge proxy -
# see the comments there for why both are needed.

# ---- Build stage ----
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# Restore first, with just the project file, so dependency restore is
# cached separately from source changes and doesn't re-run on every code
# edit. Quoted throughout because the project name contains spaces.
COPY ["Card Fraud Dispute Management.csproj", "./"]
RUN dotnet restore "Card Fraud Dispute Management.csproj"

# Now bring in everything else and publish a Release build.
COPY . .
RUN dotnet publish "Card Fraud Dispute Management.csproj" -c Release -o /app/publish --no-restore

# ---- Runtime stage ----
# aspnet (not sdk) - the runtime-only image, much smaller than carrying the
# whole SDK into production.
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
WORKDIR /app
COPY --from=build /app/publish .

ENV ASPNETCORE_ENVIRONMENT=Production
# Documentation only - the platform sets the real PORT value at runtime,
# and Program.cs binds to whatever that is.
EXPOSE 80

ENTRYPOINT ["dotnet", "Card Fraud Dispute Management.dll"]
