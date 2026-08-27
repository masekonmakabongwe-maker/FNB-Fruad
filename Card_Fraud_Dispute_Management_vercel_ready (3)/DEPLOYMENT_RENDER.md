# Deploying to Render (free tier)

## Why Render, and what "free" actually means here

Checked this against current sources rather than assuming: **Fly.io removed
its free tier in 2024** (new accounts get a 2-hour trial, then it's paid).
**Railway has no permanent free tier either** (one-time $5 trial credit,
then $5/month minimum). Render is the platform that consistently comes up
as genuinely free for a real backend - no credit card, no trial expiry,
supports Docker.

The real tradeoff: Render's free web services **spin down after 15 minutes
of inactivity** and take **30-50 seconds to wake up** on the next request.
This app already has a 120-second timeout on calls to Purple Fabric, so a
cold start plus a slow upstream call could take a while on the first
request after idle time. For a demo/POC this is a reasonable price for
actually-free hosting - just don't expect instant response on a cold visit.

## Files already in place for this

- **`Dockerfile`** - same build as the earlier `Dockerfile.vercel`, just
  under the standard filename Render (and most other platforms) expect
- **`render.yaml`** - lets Render create the service with the right
  settings automatically, instead of clicking through dashboard options
  that can be easy to get subtly wrong (this is exactly what went wrong
  with the Vercel attempt - a settings mismatch that took several rounds
  to diagnose)
- `Program.cs`, `.dockerignore` - unchanged, already platform-agnostic

## 1. Flatten the repo structure - not optional this time

The nested `Card Fraud Dispute Management/Card Fraud Dispute Management/`
folder structure was a real source of confusion in the Vercel attempt.
`render.yaml` as written assumes a flat repo: the `.csproj`, `Dockerfile`,
and `render.yaml` all sitting at the true repo root, not nested.

If you haven't already pushed to GitHub, or are starting a fresh push:

```bash
# From inside the actual project folder (the one with the .csproj in it)
cd "Card Fraud Dispute Management/Card Fraud Dispute Management"
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

The key difference from before: `cd` into the actual project folder
*first*, so everything you push lands at the repo root with nothing
wrapping it. If you already have the nested repo pushed from the Vercel
attempt, easiest fix is a fresh repo done this way rather than trying to
restructure the existing one in place.

Before pushing, double check `appsettings.json` still has blank values for
`PurpleFabric:ApiKey/Username/Password` - real values go into Render's
environment variables (step 3), never into the repo.

## 2. Create the service on Render

1. Go to [render.com](https://render.com) and sign up (GitHub login is
   fine, no card required for the free tier)
2. Click **New +** → **Blueprint**
3. Connect the GitHub repo
4. Render will read `render.yaml` and show you the service it's about to
   create - confirm it shows `runtime: docker` and the free plan
5. It'll prompt you to fill in the three environment variables (see next
   step) before creating the service

If you'd rather not use the Blueprint flow, **New +** → **Web Service** →
select the repo → set **Runtime** to **Docker** manually works too, but the
Blueprint path is less error-prone.

## 3. Environment variables

Same three as before, same reasoning: ASP.NET Core reads
`Section__Key`-style environment variables (double underscore) as
`Section:Key` config paths, so these map onto `PurpleFabric:ApiKey` etc.
from `appsettings.json`, overriding the blank checked-in values.

| Name | Value |
|---|---|
| `PurpleFabric__ApiKey` | your real Purple Fabric API key |
| `PurpleFabric__Username` | your real Purple Fabric username |
| `PurpleFabric__Password` | your real Purple Fabric password |

If you used the Blueprint flow, Render prompts for these during setup
because of `sync: false` in `render.yaml`. If you created the service
manually, add them under the service's **Environment** tab.

## 4. Deploy and verify

Render builds automatically once the service is created. Watch the build
log - you should see real Docker build output (pulling
`mcr.microsoft.com/dotnet/sdk:8.0`, `dotnet restore`, `dotnet publish`),
taking a few minutes. Once it says **Live**, open the given `.onrender.com`
URL. First load may be slow if the service just spun up - that's the cold
start, not a broken deployment.

## If something looks wrong

Same principle as before: check the actual build log rather than guessing.
A build that completes in a few seconds instead of a few minutes means
Docker never actually ran - check that `runtime: docker` is set and that
`Dockerfile` is genuinely at the repo root Render is looking at.
