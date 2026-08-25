# Evidence files

Each agent now pulls a different subset of documents per case, matching the
FNB reference spec (Card Fraud Details for UI) and the confirmed real
Document Generator input manifest. Drop real files straight into this folder
using the naming pattern below — the app finds them automatically by
category + case number, no code changes needed.

## Naming pattern

```
{category}-{caseNumber}.{ext}
```

- `category` — one of the fixed prefixes listed below (must match exactly)
- `caseNumber` — the numeric case ID, e.g. `51204` (no `FNB-` prefix)
- `ext` — real files use a mix of `pdf`, `docx`, `xlsx`, and `eml` depending on
  the document - all are supported, matching is extension-agnostic (it looks
  for the category name and case number anywhere in the filename, not a
  specific extension)

Example: `auth-log-51204.pdf`, `viya-case-51204.docx`, `customer-profile-53042.xlsx`

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
| `auth-log` | Case Intake, Recognition Check, Fraud Assessment, Transaction Classification, Funds Trace, Chargeback Preparation, Recall & Repatriation, Obligation Check, Document Generator | Authorisation log |
| `contact-note` | Case Intake, Recognition Check, Fraud Assessment, Transaction Classification, Shadow Credit, Chargeback Preparation, Obligation Check, Document Generator | Already present for all 4 personas |
| `customer-profile` | Case Intake, Fraud Assessment, Shadow Credit, Document Generator | |
| `viya-case` | Case Intake, Obligation Check | NOT used by Document Generator, confirmed against the real input manifest |
| `statement-history` | Recognition Check, Transaction Classification, Shadow Credit, Chargeback Preparation, Document Generator | 24-month statement history |
| `profile-event-log` | Fraud Assessment, Obligation Check, Document Generator | |
| `transfer-log` | Case Intake, Recognition Check, Fraud Assessment, Transaction Classification, Document Generator | P4-specific (SIM swap / mixed rails case) |
| `mno-feed-log` | Fraud Assessment | P4-specific |
| `fraud-policy` | Fraud Assessment, Obligation Check | NOT used by Document Generator |
| `mandate-register` | Recognition Check, Shadow Credit | P3-specific (recurring subscription case) |
| `merchant-descriptors` | Recognition Check, Transaction Classification | P3-specific |
| `counterparty-chain` | Funds Trace, Recall & Repatriation, Document Generator | |
| `acquirer-delivery-receipt` | Funds Trace | P4-specific |
| counterparty-reply files | Funds Trace, Recall & Repatriation, Document Generator | These never share one consistent name across personas - P2 uses `RPL-{case}-NN-{who}.eml`, P4 uses `{who}-response-{case}.pdf`. Any filename containing `counterparty-bank`, `licensed-casp`, `payment-acquirer`, `case-admin`, `acquirer-delivery-receipt`, or starting `RPL-` is picked up automatically for that case number, however many there are |

## What happens if a file is missing

The controller looks for each category file the current agent needs. If a
particular category doesn't exist for a given case (P3's files, for
instance, aren't in yet), it's skipped — logged as informational, not an
error. Nothing is fabricated to fill the gap. If literally no evidence files
exist at all for a case, a single clearly-labelled synthetic placeholder is
sent instead of failing outright, exactly like the original single-file
fallback behaved.
