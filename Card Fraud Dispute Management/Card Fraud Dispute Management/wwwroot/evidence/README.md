# Evidence files

Each agent now pulls a different subset of documents per case, matching the
FNB reference spec (Card Fraud Details for UI). Drop real files straight into
this folder using the naming pattern below — the app finds them automatically
by category + case number, no code changes needed.

## Naming pattern

```
{category}-{caseNumber}.{ext}
```

- `category` — one of the fixed prefixes listed below (must match exactly)
- `caseNumber` — the numeric case ID, e.g. `51204` (no `FNB-` prefix)
- `ext` — `pdf` for most documents; `docx` is also supported (used for Viya case files)

Example: `auth-log-51204.pdf`, `viya-case-51204.docx`

## Case numbers

| Persona | Case number |
|---|---|
| P1 — Sipho Ndlovu | 51204 |
| P2 — Andile Khumalo | 51890 |
| P3 — Nomvula Dlamini | 52377 |
| P4 — Thabo Mokoena | 53042 |

## Categories used across all agents

| Category prefix | Used by | Notes |
|---|---|---|
| `auth-log` | Case Intake, Recognition Check, Fraud Assessment, Transaction Classification, Funds Trace, Chargeback Preparation, Recall & Repatriation, Obligation Check | Authorisation log |
| `contact-note` | Case Intake, Recognition Check, Fraud Assessment, Transaction Classification, Shadow Credit, Chargeback Preparation, Obligation Check | Already present for all 4 personas |
| `customer-profile` | Case Intake, Fraud Assessment, Shadow Credit | |
| `viya-case` | Case Intake, Obligation Check | Real source files use `.docx` |
| `statement-history` | Recognition Check, Transaction Classification, Shadow Credit, Chargeback Preparation | 24-month statement history |
| `profile-event-log` | Fraud Assessment, Obligation Check | |
| `transfer-log` | Case Intake, Recognition Check, Fraud Assessment, Transaction Classification | P4-specific (SIM swap / mixed rails case) |
| `mno-feed-log` | Fraud Assessment | P4-specific |
| `counterparty-chain` | Funds Trace, Recall & Repatriation | P2-specific so far |
| `counterparty-reply` | Recall & Repatriation | Can be multiple files per case — name them `counterparty-reply-1-{caseNumber}.pdf`, `counterparty-reply-2-{caseNumber}.pdf`, etc. The app picks up every file starting with `counterparty-reply` for that case number, not just one |

## What happens if a file is missing

The controller looks for each category file the current agent needs. If a
particular category doesn't exist for a given case (P3's files, for
instance, aren't in yet), it's skipped — logged as informational, not an
error. Nothing is fabricated to fill the gap. If literally no evidence files
exist at all for a case, a single clearly-labelled synthetic placeholder is
sent instead of failing outright, exactly like the original single-file
fallback behaved.
