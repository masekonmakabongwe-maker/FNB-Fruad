# Deploying to Vercel via GitHub

Vercel has no native .NET runtime (it natively supports Node.js, Python, Go
and Ruby) - ASP.NET Core apps deploy via Vercel's container support instead,
using a `Dockerfile.vercel` file. This is Vercel's own documented path for
.NET, not a workaround. Confirmed against Vercel's current docs before
writing this.

Three files have been added to make this work:
- **`Dockerfile.vercel`** - builds and runs the app as a container
- **`.dockerignore`** - keeps the image lean
- **`.gitignore`** (repo root) - was empty before; now actually excludes
  build artifacts and local-only settings

`Program.cs` was also updated - see "What changed and why" below.

## 1. Fix the repo structure first

The project currently sits two folders deep with a repeated name:

```
Card Fraud Dispute Management/
  Card Fraud Dispute Management/
    Card Fraud Dispute Management.csproj
    Dockerfile.vercel
    ...
```

Vercel looks for `Dockerfile.vercel` at whatever you tell it is the
project's **Root Directory**. You have two options:

**Option A - flatten it (recommended).** When you create the GitHub repo,
push the *contents* of the inner `Card Fraud Dispute Management/Card Fraud
Dispute Management/` folder as the repo root, so `Dockerfile.vercel` and the
`.csproj` sit directly at the top level. Simplest, and matches what most
guides assume.

**Option B - keep the nesting.** Push the folder structure as-is, then in
Vercel's Project Settings → General → **Root Directory**, set it to
`Card Fraud Dispute Management/Card Fraud Dispute Management`. Vercel will
then look for `Dockerfile.vercel` inside that folder instead of the repo
root.

Either works. Option A is less to get wrong later.

## 2. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

Before this step, double-check `appsettings.json` has blank values for
`PurpleFabric:ApiKey`, `PurpleFabric:Username`, `PurpleFabric:Password` -
real credentials have ended up in this file by accident multiple times
during this project's development. They must **never** be committed. Real
values go into Vercel's environment variables (step 4), never into the
repo.

## 3. Import the project in Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Choose **Import Git Repository**, authorize GitHub if you haven't, and
   select the repo
3. Vercel should detect `Dockerfile.vercel` automatically and build it as a
   container. If it instead tries to auto-detect a framework and gets it
   wrong, confirm the Root Directory is set correctly (step 1) and that
   `Dockerfile.vercel` is genuinely at that path

## 4. Set environment variables

In the Vercel project → **Settings → Environment Variables**, add:

| Name | Value |
|---|---|
| `PurpleFabric__ApiKey` | your real Purple Fabric API key |
| `PurpleFabric__Username` | your real Purple Fabric username |
| `PurpleFabric__Password` | your real Purple Fabric password |

The double underscore (`__`) is required - ASP.NET Core's configuration
system maps `Section__Key` environment variables to the same
`Section:Key` path used in `appsettings.json` (`PurpleFabric:ApiKey` etc.),
and environment variables take precedence over whatever's in the checked-in
file. This is the standard ASP.NET Core pattern for this, not
Vercel-specific.

Set these for all three environments Vercel offers (Production, Preview,
Development) unless you specifically want previews to run without real
credentials.

## 5. Deploy

Trigger a deploy (pushing to `main`, or clicking Deploy in the dashboard).
First build will take a few minutes - it's compiling a .NET SDK image, not
just copying static files. Once it's up, open the deployment URL and
confirm the login page renders and a case can be opened.

## What changed in `Program.cs` and why

Two things were added, both needed specifically because of how Vercel's
container platform works, not general .NET changes:

1. **Port binding.** Vercel tells the container which port to listen on via
   the `PORT` environment variable (defaults to 80 if unset, per Vercel's
   docs). `Program.cs` now reads `PORT` and binds Kestrel to it. Locally,
   with `PORT` unset, nothing changes.

2. **Forwarded headers.** Vercel terminates HTTPS at its edge and forwards
   plain HTTP to the container. Without telling the app to trust the
   `X-Forwarded-Proto` header Vercel sets, `UseHttpsRedirection()` /
   `UseHsts()` would see every request as insecure HTTP and try to redirect
   it to HTTPS again *inside* the container - which only ever listens on
   HTTP, so that becomes a redirect loop and the app never loads. This also
   required clearing `KnownNetworks`/`KnownProxies` (they default to
   loopback-only), since otherwise the forwarded headers get silently
   ignored as coming from an untrusted source.

## Things worth knowing before you rely on this

- **Cold starts.** Vercel container functions scale to zero after 5 minutes
  idle in production (30 seconds in preview), then cold-start on the next
  request. .NET cold starts are slower than Node/Go - and this app's own
  agent calls already have up to a 120-second timeout to the Purple Fabric
  API. A cold start plus a slow upstream call could feel sluggish on the
  first request after idle time. If that matters for your use case, look
  into Vercel's Fluid compute settings or a minimum-instance option.
- **No Secure Compute / Static IPs for container functions**, per Vercel's
  current docs. If Purple Fabric's API requires IP allowlisting on their
  end, this deployment path won't give you a fixed outbound IP - worth
  checking with them before you rely on it.
- **No Docker Compose** - this is a single container, which matches this
  app (it only talks *out* to Purple Fabric's API, it doesn't need a local
  database or a second service), so this isn't a real constraint here.
