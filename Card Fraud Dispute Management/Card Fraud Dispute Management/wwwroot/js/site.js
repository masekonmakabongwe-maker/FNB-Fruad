/* ============================================================
   ICONS
   ============================================================ */
function I(name, size) {
    size = size || 18;
    const s = `width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"`;
    const paths = {
        grid: `<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>`,
        list: `<line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="14" y2="18"/>`,
        radio: `<circle cx="12" cy="12" r="2.4"/><path d="M8 8a5.5 5.5 0 000 8M16 8a5.5 5.5 0 010 8M5 5a10 10 0 000 14M19 5a10 10 0 010 14"/>`,
        gear: `<circle cx="12" cy="12" r="3"/><path d="M19.4 13.5a1.7 1.7 0 00.3 1.9l.1.1a2 2 0 11-2.9 2.9l-.1-.1a1.7 1.7 0 00-1.9-.3 1.7 1.7 0 00-1 1.6v.2a2 2 0 11-4 0v-.1a1.7 1.7 0 00-1.1-1.6 1.7 1.7 0 00-1.9.3l-.1.1a2 2 0 11-2.9-2.9l.1-.1a1.7 1.7 0 00.3-1.9 1.7 1.7 0 00-1.6-1H4a2 2 0 110-4h.1a1.7 1.7 0 001.6-1 1.7 1.7 0 00-.3-1.9l-.1-.1a2 2 0 112.9-2.9l.1.1a1.7 1.7 0 001.9.3h.1a1.7 1.7 0 001-1.6V4a2 2 0 114 0v.1a1.7 1.7 0 001 1.6 1.7 1.7 0 001.9-.3l.1-.1a2 2 0 112.9 2.9l-.1.1a1.7 1.7 0 00-.3 1.9v.1a1.7 1.7 0 001.6 1H20a2 2 0 110 4h-.1a1.7 1.7 0 00-1.5 1z"/>`,
        search: `<circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.5" y2="16.5"/>`,
        shieldcheck: `<path d="M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6z"/><path d="M9 12l2 2 4-4"/>`,
        card: `<rect x="2.5" y="5.5" width="19" height="13" rx="2"/><line x1="2.5" y1="10" x2="21.5" y2="10"/>`,
        trace: `<circle cx="6" cy="6" r="2.3"/><circle cx="18" cy="6" r="2.3"/><circle cx="12" cy="18" r="2.3"/><path d="M8 7l3 9M16 7l-3 9M8.3 6H15.7"/>`,
        piggy: `<path d="M19 9V6a1 1 0 00-1-1h-2l-1-2H7l-1 2H4a1 1 0 00-1 1v6l2 2v3h3v-2h6v2h3v-3l1-1"/><circle cx="15.5" cy="10.5" r=".6" fill="currentColor" stroke="none"/>`,
        filetext: `<path d="M6 2h9l5 5v13a1 1 0 01-1 1H6a1 1 0 01-1-1V3a1 1 0 011-1z"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="8" y1="16" x2="16" y2="16"/>`,
        send: `<path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4z"/>`,
        clock: `<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>`,
        fileplus: `<path d="M6 2h9l5 5v13a1 1 0 01-1 1H6a1 1 0 01-1-1V3a1 1 0 011-1z"/><line x1="12" y1="11" x2="12" y2="17"/><line x1="9" y1="14" x2="15" y2="14"/>`,
        msg: `<path d="M21 11.5a8.4 8.4 0 01-8.9 8.4 8.6 8.6 0 01-3.9-.9L3 21l1.9-5.2A8.4 8.4 0 013 11.5 8.5 8.5 0 0111.5 3a8.5 8.5 0 019.5 8.5z"/>`,
        check: `<polyline points="4 12 9 17 20 6"/>`,
        alert: `<path d="M12 3l10 18H2z"/><line x1="12" y1="9" x2="12" y2="14"/><circle cx="12" cy="17" r=".4" fill="currentColor" stroke="none"/>`,
        user: `<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"/>`,
        book: `<path d="M4 4.5A2.5 2.5 0 016.5 2H20v17H6.5A2.5 2.5 0 004 16.5z"/><path d="M4 16.5A2.5 2.5 0 016.5 19H20"/>`,
        arrowLeft: `<line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>`,
        arrowRight: `<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>`,
        download: `<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>`,
        refresh: `<polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>`,
        timer: `<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>`
    };
    return `<svg ${s}>${paths[name] || ''}</svg>`;
}

/* ============================================================
   USERS / ROLES
   ============================================================ */
const ROLES = [
    { id: 'accountable', name: 'K. Adebayo', title: 'Accountable Person', initials: 'KA', rank: 3, scope: 'Approves every gate for every case', username: 'k.adebayo@cfddemo.bank' },
];
const GATE_MIN_RANK = [1, 1, 1, 1, 1, 3];
let currentUser = null;
let selectedRoleId = null;

/* ============================================================
   MODEL — 6 screens · 11 agents
   ============================================================ */
const SCREENS = [
    { n: 1, id: 's1', title: 'Case Summary', sub: 'Confirm the record', gateRole: 'Investigator', gateAuthority: null, agents: ['caseIntake', 'recognitionCheck'] },
    { n: 2, id: 's2', title: 'Fraud Assessment', sub: 'Confirm cause · approve containment', gateRole: 'Investigator', gateAuthority: null, agents: ['fraudAssessment'] },
    { n: 3, id: 's3', title: 'Recovery Assessment', sub: 'Confirm route per transaction', gateRole: 'Investigator', gateAuthority: null, agents: ['transactionClassification', 'fundsTrace'] },
    { n: 4, id: 's4', title: 'Customer Position', sub: 'Refund now, or not', gateRole: 'Investigator or fraud manager', gateAuthority: 'Authority by value', agents: ['shadowCredit'] },
    { n: 5, id: 's5', title: 'Recovery Actions', sub: 'Approve what leaves the bank', gateRole: 'Investigator', gateAuthority: null, agents: ['chargebackPreparation', 'recallRepatriation'] },
    { n: 6, id: 's6', title: 'Obligations & Closure', sub: 'Sign off filings', gateRole: 'Accountable person', gateAuthority: null, agents: ['obligationCheck', 'documentGenerator'] },
];

const AGENTS = {
    caseIntake: { label: 'Case Intake', tier: 'standard', icon: 'search', desc: 'Builds the first reliable case record from raw evidence, flags vulnerability, sets urgency and gates all downstream automation until a human reviews.' },
    recognitionCheck: { label: 'Recognition Check', tier: 'reasoning', icon: 'shieldcheck', desc: "Checks every disputed transaction against the customer's own history to see if it could be their own spend before fraud investigation begins." },
    fraudAssessment: { label: 'Fraud Assessment', tier: 'reasoning', icon: 'shieldcheck', desc: 'Classifies how the fraud happened, determines how deep the compromise went using the policy scale and recommends proportionate containment.' },
    transactionClassification: { label: 'Transaction Classification', tier: 'reasoning', icon: 'card', desc: 'Reads ECI codes, scheme rails and card-present indicators to determine whether a disputed transaction is recoverable, not-recoverable or needs human verification before any chargeback effort begins.' },
    fundsTrace: { label: 'Funds Trace', tier: 'reasoning', icon: 'trace', desc: "Reconstructs where the disputed value went after leaving the customer's account, identifies recovery targets by counterparty class and assigns the right recovery action to each. Does not send recalls." },
    shadowCredit: { label: 'Shadow Credit', tier: 'reasoning', icon: 'piggy', desc: 'Assesses whether the customer is eligible for a provisional refund, checks exclusions, surfaces counterarguments, derives the authority band and recommends a named human decision.' },
    chargebackPreparation: { label: 'Chargeback Preparation', tier: 'standard', icon: 'filetext', desc: 'Assembles the evidence pack for each recoverable scheme-card transaction, selects the correct templates, and prepares everything for human review and submission. Never submits anything itself.' },
    recallRepatriation: { label: 'Recall & Repatriation', tier: 'reasoning', icon: 'send', desc: 'Reconciles the Funds Trace register with counterparty replies, prepares recall requests, chase plans and CASP hold requests for human approval.' },
    obligationCheck: { label: 'Obligation Check', tier: 'reasoning', icon: 'clock', desc: "Reviews all regulatory and operational obligations arising from the case across five instruments and tells the human what is owed, what isn't, and what needs a decision." },
    documentGenerator: { label: 'Document Generator', tier: 'standard', icon: 'fileplus', desc: 'Selects the right document templates for the case state, resolves all variables from approved evidence and produces a structured package for the deterministic renderer.' },
    messageComposer: { label: 'Message Composer', tier: 'standard', icon: 'msg', desc: 'Drafts customer-facing updates once a human decision is recorded at a gate, matching channel and tone to what actually happened in the case.' },
};

// Map specifying exact allowed upstream entities per agent
// Field lists below are taken directly from the live Purple Fabric "Run" screens for
// each agent (screenshots, 20 Aug), cross-checked against each asset's OpenAPI spec.
// Every field shown on an agent's Run screen is a required multipart field there - so,
// unlike the earlier version of this map, ALLOWED and MANDATORY are now identical sets
// per agent. Kept as two separate maps for clarity of intent (one gates payload
// contents, the other gates whether the agent runs at all) even though the values match.
const AGENT_ALLOWED_INPUTS = {
    caseIntake: [],
    recognitionCheck: ['CASE_INTAKE_OUTPUT_TEXT'],
    fraudAssessment: ['CASE_INTAKE_OUTPUT_TEXT', 'RECOGNITION_CHECK_OUTPUT_TEXT'],
    transactionClassification: ['RECOGNITION_CHECK_OUTPUT_TEXT', 'FRAUD_ASSESSMENT_OUTPUT_TEXT'],
    fundsTrace: ['FRAUD_ASSESSMENT_OUTPUT_TEXT', 'TRANSACTION_CLASSIFICATION_OUTPUT_TEXT'],
    shadowCredit: ['CASE_INTAKE_OUTPUT_TEXT', 'FRAUD_ASSESSMENT_OUTPUT_TEXT', 'TRANSACTION_CLASSIFICATION_OUTPUT_TEXT', 'FUNDS_TRACE_OUTPUT_TEXT'],
    chargebackPreparation: ['FRAUD_ASSESSMENT_OUTPUT_TEXT', 'TRANSACTION_CLASSIFICATION_OUTPUT_TEXT', 'FUNDS_TRACE_OUTPUT_TEXT', 'SHADOW_CREDIT_OUTPUT_TEXT'],
    recallRepatriation: ['TRANSACTION_CLASSIFICATION_OUTPUT_TEXT', 'FUNDS_TRACE_OUTPUT_TEXT', 'SHADOW_CREDIT_OUTPUT_TEXT', 'CHARGEBACK_PREPARATION_OUTPUT_TEXT'],
    obligationCheck: ['CASE_INTAKE_OUTPUT_TEXT', 'RECOGNITION_CHECK_OUTPUT_TEXT', 'FRAUD_ASSESSMENT_OUTPUT_TEXT', 'TRANSACTION_CLASSIFICATION_OUTPUT_TEXT', 'FUNDS_TRACE_OUTPUT_TEXT', 'SHADOW_CREDIT_OUTPUT_TEXT', 'CHARGEBACK_PREPARATION_OUTPUT_TEXT', 'RECALL_REPATRIATION_OUTPUT_TEXT'],
    documentGenerator: ['CASE_INTAKE_OUTPUT_TEXT', 'RECOGNITION_CHECK_OUTPUT_TEXT', 'FRAUD_ASSESSMENT_OUTPUT_TEXT', 'TRANSACTION_CLASSIFICATION_OUTPUT_TEXT', 'FUNDS_TRACE_OUTPUT_TEXT', 'SHADOW_CREDIT_OUTPUT_TEXT', 'CHARGEBACK_PREPARATION_OUTPUT_TEXT', 'RECALL_REPATRIATION_OUTPUT_TEXT', 'OBLIGATION_CHECK_OUTPUT_TEXT']
};

// Strict mandatory inputs that must exist before calling an agent - see note above,
// these now match AGENT_ALLOWED_INPUTS exactly per the live Run screens.
const AGENT_MANDATORY_INPUTS = {
    caseIntake: [],
    recognitionCheck: ['CASE_INTAKE_OUTPUT_TEXT'],
    fraudAssessment: ['CASE_INTAKE_OUTPUT_TEXT', 'RECOGNITION_CHECK_OUTPUT_TEXT'],
    transactionClassification: ['RECOGNITION_CHECK_OUTPUT_TEXT', 'FRAUD_ASSESSMENT_OUTPUT_TEXT'],
    fundsTrace: ['FRAUD_ASSESSMENT_OUTPUT_TEXT', 'TRANSACTION_CLASSIFICATION_OUTPUT_TEXT'],
    shadowCredit: ['CASE_INTAKE_OUTPUT_TEXT', 'FRAUD_ASSESSMENT_OUTPUT_TEXT', 'TRANSACTION_CLASSIFICATION_OUTPUT_TEXT', 'FUNDS_TRACE_OUTPUT_TEXT'],
    chargebackPreparation: ['FRAUD_ASSESSMENT_OUTPUT_TEXT', 'TRANSACTION_CLASSIFICATION_OUTPUT_TEXT', 'FUNDS_TRACE_OUTPUT_TEXT', 'SHADOW_CREDIT_OUTPUT_TEXT'],
    recallRepatriation: ['TRANSACTION_CLASSIFICATION_OUTPUT_TEXT', 'FUNDS_TRACE_OUTPUT_TEXT', 'SHADOW_CREDIT_OUTPUT_TEXT', 'CHARGEBACK_PREPARATION_OUTPUT_TEXT'],
    obligationCheck: ['CASE_INTAKE_OUTPUT_TEXT', 'RECOGNITION_CHECK_OUTPUT_TEXT', 'FRAUD_ASSESSMENT_OUTPUT_TEXT', 'TRANSACTION_CLASSIFICATION_OUTPUT_TEXT', 'FUNDS_TRACE_OUTPUT_TEXT', 'SHADOW_CREDIT_OUTPUT_TEXT', 'CHARGEBACK_PREPARATION_OUTPUT_TEXT', 'RECALL_REPATRIATION_OUTPUT_TEXT'],
    documentGenerator: ['CASE_INTAKE_OUTPUT_TEXT', 'RECOGNITION_CHECK_OUTPUT_TEXT', 'FRAUD_ASSESSMENT_OUTPUT_TEXT', 'TRANSACTION_CLASSIFICATION_OUTPUT_TEXT', 'FUNDS_TRACE_OUTPUT_TEXT', 'SHADOW_CREDIT_OUTPUT_TEXT', 'CHARGEBACK_PREPARATION_OUTPUT_TEXT', 'RECALL_REPATRIATION_OUTPUT_TEXT', 'OBLIGATION_CHECK_OUTPUT_TEXT']
};

const ARTEFACT_DEFS = [
    { id: 'chargeback', label: 'Chargeback filing', afterGate: 5, needsChargeback: true },
    { id: 'recall', label: 'Recall request', afterGate: 5, needsMule: true },
    { id: 'hold', label: 'Hold request', afterGate: 5, needsCASP: true },
    { id: 'str', label: 'Suspicious transaction report', afterGate: 6, needsSTR: true },
    { id: 'criminal', label: 'Criminal case report', afterGate: 6, needsMule: true },
    { id: 'determination', label: 'Written determination', afterGate: 6, always: true },
];

function A(agentKey, o) { return Object.assign({ agentKey }, o); }

/* ============================================================
   HARDCODED REFERENCE CASE — a complete, always-working replica of
   Sipho Ndlovu's case (FNB-51204), transcribed field-for-field from a real
   completed run of all 9 agents (25 Aug). Exists as its own separate case
   (FNB-51204-REF) so the live FNB-51204 case is untouched and still calls
   the real API - this one never does, so it's always available for a demo
   even if Purple Fabric is slow, rate-limited, or unreachable.
   ============================================================ */
const HARDCODED_SIPHO_REF_DATA = {
    caseIntake: {
        caseRef: 'VIYA-FNB-CF-51204', customerRef: 'CUS-51204', agent: 'case-intake', status: 'completed',
        customer: { fullName: 'Sipho Ndlovu', preferredName: 'Sipho', verifiedContact: '+27 *** 4412', cardEnding: '7314' },
        reportedEvent: {
            reportedTotal: { amount: 44300, currency: 'ZAR' },
            compromiseDisclosure: { otpMentioned: false, inAppApprovalMade: false, phoneWorking: true, detailsDisclosed: ['card number', 'expiry date', 'CVV'] },
            knownTimeline: [
                "2026-08-12T19:42:00+02:00 — Customer reported receiving an SMS stating 'FNB: Card ending 7314 blocked — suspicious activity. Reactivate now: fnb-secure-verify.co.za'.",
                '2026-08-12T19:47:00+02:00 — Customer reported opening the link and entering card number, expiry date and CVV on the website.',
                '2026-08-12T20:14:00+02:00 — Card transaction AUTH-51204-01 for R12,400.00 at TECHZONE ONLINE recorded as Approved.',
                '2026-08-12T20:26:00+02:00 — Card transaction AUTH-51204-02 for R31,900.00 at GAMEHUB DIGITAL recorded as Approved.',
                '2026-08-12T20:31:00+02:00 — Card transaction AUTH-51204-03 for R28,000.00 at ELECTRO MART ONLINE recorded as Declined.',
                '2026-08-12T20:33:00+02:00 — Alert messages were sent for the authorisation activity; customer first noticed alerts at about this time.',
                '2026-08-12T20:38:00+02:00 — Customer called the fraud line regarding two card transactions he said were not his.',
                '2026-08-12T21:02:00+02:00 — Case was passed to fraud review at end of call.',
            ],
        },
        caseScope: {
            includedItems: [
                { transactionRef: 'AUTH-51204-01', amount: 12400 },
                { transactionRef: 'AUTH-51204-02', amount: 31900 },
            ],
            excludedItems: [
                { transactionRef: 'AUTH-51204-03', reason: 'Declined attempt only; customer confirmed it did not debit the account and does not dispute it.' },
            ],
        },
        containmentAlreadyCompleted: [{ action: 'card-block', status: 'completed' }],
        materialGaps: [
            'Whether the two approved authorisations have posted and settled is not confirmed in the intake file set.',
            'Physical evidence of the SMS link/customer-facing messages is not captured in the intake file set; customer was asked to keep the SMS.',
            'Profile and channel containment beyond card block is not evidenced as completed in the intake file set; the contact note states system events still require review before any further account-access or profile-containment decision.',
            'Counterparty destination or onward movement of funds is not evidenced in the intake file set.',
            'ECI values and 3DS statuses differ across the authorisation log entries (AUTH-51204-01: Not attempted / 07; AUTH-51204-02: Attempted / 05; AUTH-51204-03: Not attempted / 07) and should be reviewed at Transaction Classification.',
        ],
        recommendation: { action: 'confirm-case-scope-and-continue', reason: 'Case scope is identifiable and evidenced at intake: two approved disputed card transactions are in scope, one declined attempt is excluded, and completed card containment is evidenced. Remaining gaps are downstream evidence gaps and do not prevent scoping.' },
        vulnerability: { flagged: false },
        urgency: { level: 'high' },
    },
    recognitionCheck: {
        caseRef: 'VIYA-FNB-CF-51204', agent: 'recognition-check', status: 'completed', applicability: 'applicable',
        recognitionResult: 'no-match',
        statementHistoryBasis: '24-month statement window reviewed; 243 history rows reviewed; no prior settled relationship found for TECHZONE ONLINE or GAMEHUB DIGITAL; customer denial matches absence of prior relationship',
        window: { from: '2024-08-13', to: '2026-08-12', rowsEvaluated: 243 },
        materialGaps: ['No reliable descriptor directory or biller record was provided to independently resolve TECHZONE ONL DBN ZA or GHUB*DIGITAL ZA.'],
        recommendation: { action: 'no-recognition-deflection', reason: 'Recognition is not established because neither disputed merchant has a prior settled relationship in the reviewed history. The case should continue to Fraud Assessment.' },
    },
    fraudAssessment: {
        caseRef: 'VIYA-FNB-CF-51204', agent: 'fraud-assessment', status: 'completed', applicability: 'applicable',
        classification: { fraudType: 'phishing-card-details-compromise', channel: 'e-commerce-card-not-present' },
        compromiseExtent: { label: 'card credentials', basis: 'Available evidence supports compromise of the card details entered into the phishing site, with no evidence that banking profile credentials, the registered device, the mobile authentication channel, beneficiaries or transaction limits were compromised.' },
        containmentActions: [{ action: 'card-block', status: 'already-completed' }, { action: 'card-reissue', status: 'already-completed' }],
        bankControlAssessment: 'No bank control failure is evidenced on the available records. The available evidence indicates a third-party phishing website captured card details before the disputed e-commerce authorisations. The authorisation and alert records show the bank processed the card-not-present requests and sent activity alerts at 20:33 on the data available to it. No separate third-party data dependency finding is evidenced in the file set.',
        recommendation: { action: 'confirm-fraud-classification-and-card-only-containment', reason: 'The evidence supports a phishing-led card-details compromise followed by unauthorised e-commerce card-not-present use, with compromise extent limited to card number, expiry date and CVV and no profile compromise evidenced in the 72-hour event log.' },
    },
    transactionClassification: {
        caseRef: 'VIYA-FNB-CF-51204', agent: 'transaction-classification', status: 'completed', applicability: 'applicable',
        rail: 'Visa card scheme', condition: 'Visa 10.4', summary: { schemeCondition: 'Visa 10.4' },
        items: [
            { transactionRef: 'AUTH-51204-01', merchant: 'TECHZONE ONLINE', eciPresented: '07', plainEnglish: 'This was a Visa online card payment with no 3-D Secure authentication shown. That means there is a scheme fraud route against the merchant/acquirer, so the item is recoverable under Visa 10.4 if filed in time.', threeDSStatus: 'Not attempted', cavvPresent: false, recoverability: { filingDeadline: '2026-12-10' } },
            { transactionRef: 'AUTH-51204-02', merchant: 'GAMEHUB DIGITAL', eciPresented: '05', plainEnglish: 'This online Visa payment claims authentication, but the record does not contain the required CAVV. Under the rules, that means the authentication claim is unsupported, there is no issuer liability shift, and a Visa 10.4 fraud route remains available against the merchant/acquirer.', threeDSStatus: 'Attempted', cavvPresent: false, recoverability: { filingDeadline: '2026-12-10' } },
        ],
        recommendation: { action: 'confirm-two-visa-10.4-routes', reason: 'Both approved disputed items are Visa e-commerce card-not-present transactions with no valid authentication position that would shift liability to the issuer, and both fall within the current 120-day Visa 10.4 filing window from processing date.' },
    },
    fundsTrace: {
        caseRef: 'VIYA-FNB-CF-51204', agent: 'funds-trace', status: 'completed', applicability: 'applicable',
        recoveryPosition: { potentiallyRecoverable: 44300, currency: 'ZAR' },
        items: [
            { transactionRef: 'AUTH-51204-01', arn: '7482955 12040001 12233445', amount: 12400, movementPath: ['FNB issuer account', 'Visa card scheme', 'acquirer identity not supplied in source evidence', 'TECHZONE ONLINE'] },
            { transactionRef: 'AUTH-51204-02', arn: '74829551204000112233446', amount: 31900, movementPath: ['FNB issuer account', 'Visa card scheme', 'acquirer identity not supplied in source evidence', 'GAMEHUB DIGITAL'] },
        ],
        counterparties: [{ name: 'TECHZONE ONLINE', type: 'merchant' }, { name: 'GAMEHUB DIGITAL', type: 'merchant' }],
        timeCriticalityRanking: [
            { counterpartyRef: 'CP-1-TECHZONE', rank: 1, reason: 'Visa 10.4 scheme recovery route is open with filing deadline evidenced as 2026-12-10 from processing date; no shorter operational recovery window is evidenced.' },
            { counterpartyRef: 'CP-2-GAMEHUB', rank: 2, reason: 'Visa 10.4 scheme recovery route is open with filing deadline evidenced as 2026-12-10 from processing date; no shorter operational recovery window is evidenced.' },
        ],
        recommendation: { action: 'use-scheme-disputes-and-parallel-acquirer-correspondence', reason: 'Both disputed items are traceable through the Visa card scheme to identified merchant endpoints with ARNs present, ordinary liability does not shift to the issuer on the available classification, and the evidenced recovery route is Visa 10.4 with parallel direct acquirer correspondence once the acquirer identity is obtained.' },
    },
    shadowCredit: {
        caseRef: 'VIYA-FNB-CF-51204', agent: 'shadow-credit', status: 'completed', applicability: 'applicable',
        recommendation: { decision: 'Approve Provisional Refund', refundAmount: 44300, action: 'approve-provisional-refund', reason: 'On the available evidence the customer was deceived by a convincing impersonation SMS appearing in an existing FNB alert thread and disclosed card number, expiry date and CVV once. Under CFP-3.6, deception by a convincing communication does not by itself amount to gross negligence, and a single credential disclosure is not automatically gross negligence.' },
        eligibilityAssessment: { eligible: true, grossNegligenceExclusionEngaged: false, grossNegligenceReason: 'There is no specific evidence of reckless disregard, repeated disclosure after prior warning on the same mechanism, or intentional participation.' },
        counterArgument: { position: 'The strongest counterargument is that the customer entered full card details on a phishing site shortly before the transactions, and one disputed authorisation presents ECI 05 as an authentication attempt, which could be argued to weaken the case for provisional restoration.', response: 'This objection does not engage an exclusion on the current evidence. Under CFP-3.6, being deceived by a convincing impersonation is not gross negligence without more, and a single disclosure is not automatically gross negligence. The customer denied making or authorising the transactions, reported no OTP, no app approval, and no profile credential disclosure. For AUTH-51204-02, the scheme record shows ECI 05 but no CAVV, so the authentication claim is unsupported; scheme-facing authentication data is not proof that the customer authorised the payment. The facts therefore still support fraud presentation and provisional restoration eligibility.' },
        valueAndAuthority: { policyBand: 1, approvalRole: 'fraud-investigator' },
    },
    chargebackPreparation: {
        caseRef: 'VIYA-FNB-CF-51204', agent: 'chargeback-preparation', status: 'completed', applicability: 'applicable',
        summary: { chargebackCount: 2, chargebackTotal: { amount: 44300 } },
        chargebacks: [
            { chargebackRef: 'CB-51204-01', merchant: 'TECHZONE ONLINE', amount: 12400, scheme: 'Visa', condition: '10.4', packStatus: 'prepared-not-submitted', filingDeadline: '2026-12-10', daysRemainingAtPreparation: 105, evidencePack: new Array(7).fill('item') },
            { chargebackRef: 'CB-51204-02', merchant: 'GAMEHUB DIGITAL', amount: 31900, scheme: 'Visa', condition: '10.4', packStatus: 'prepared-not-submitted', filingDeadline: '2026-12-10', daysRemainingAtPreparation: 105, evidencePack: new Array(8).fill('item') },
        ],
        recommendation: { action: 'approve-and-submit-2-chargebacks-and-2-parallel-merchant-acquirer-notifications', reason: 'Two recoverable Visa 10.4 e-commerce card-not-present items have complete preparation packs for human review. Funds Trace also supports parallel acquirer/merchant notification once sent through the approved process. Shadow Credit separately recommended a provisional refund of ZAR 44,300, which does not change the chargeback pack content.' },
    },
    recallRepatriation: {
        caseRef: 'VIYA-FNB-CF-51204', agent: 'recall-and-repatriation', status: 'completed', applicability: 'not-applicable',
        materialGaps: [
            'No raw counterparty chain was present in the input beyond the Funds Trace merchant-endpoint register.',
            'No verified inbound counterparty replies were present in the input, so no correspondence facts could be reconciled.',
            'Acquirer identity is not supplied in the available evidence for either merchant.',
            'Settlement date is unconfirmed in the available evidence; current recovery deadline evidence is based on processing date.',
            'No evidenced onward movement beyond either merchant endpoint is available on the current record.',
            'The exact Visa 10.4 cardholder certification wording required for filing is not confirmed on the available record.',
            'For AUTH-51204-02, whether the presented ECI reflects submission or any later re-stamping remains unconfirmed; the recorded finding remains an unsupported authentication claim because no CAVV is present.',
        ],
        waitingOn: 'Gate screen-5-send-recovery-actions — covered-by-shared-screen-gate',
        recommendation: { action: 'take-no-recall-action', reason: 'Recovery should proceed through the already prepared Visa 10.4 chargeback route and associated chargeback-owned merchant/acquirer notifications, without creating a duplicate recall or repatriation workflow.' },
        reason: 'No recall or repatriation action is needed because all disputed items travelled on Visa card-scheme rails to merchant endpoints, the confirmed recovery route is fully covered by Chargeback Preparation through two prepared Visa 10.4 dispute packs and parallel DT-14 merchant/acquirer notifications. To avoid duplicating the scheme recovery path, this agent does not open separate recall items.',
    },
    obligationCheck: {
        caseRef: 'VIYA-FNB-CF-51204', agent: 'obligation-check', status: 'completed', applicability: 'applicable',
        summary: { owed: 0, verifyFirst: 0, notOwed: 3, notInForce: 1 },
        obligations: [
            { instrument: 'FIC Act — Section 29 suspicious and unusual transaction reporting', status: 'not-owed', reason: 'On the available evidence, the case presents as card-details compromise and unauthorised merchant card payments, but the statutory section 29 grounds are not evidenced. There is no confirmed mule indicator, no apparent laundering use of the business, no avoidance-of-reporting fact, no forged KYC, no rapid layering and no terrorist-financing fact. Section 29 is therefore assessed as not owed on current facts, subject to AML compliance officer confirmation.', owner: 'aml compliance officer' },
            { instrument: 'Cybercrimes Act — Electronic communications service provider and financial institution reporting duty', status: 'not-in-force', reason: 'The governed source states that Cybercrimes Act section 54 is not in force. No statutory reporting duty or 72-hour deadline arises from this instrument on the decision date.' },
            { instrument: 'Joint Standard 2 of 2024 — Material cyber-incident notification — FSCA and Prudential Authority', status: 'not-owed', reason: 'On the available record, this is a localised customer card-fraud event with no evidenced institutional systems compromise or severe and widespread operational impact. The materiality threshold for notification under Joint Standard 2 of 2024 is not met on current facts, so the notification obligation is assessed as not owed.' },
            { instrument: 'National Financial Ombud Scheme Rules — Complaint handling and internal resolution', status: 'not-in-force', reason: 'An internal fraud claim exists, but no active NFO complaint or NFO-issued response timeframe is evidenced. The applicable handling obligation is therefore internal-policy-only rather than owed under the NFO Scheme Rules.', owner: 'fraud investigator' },
            { instrument: 'POPIA — Prohibition on solely automated decisions with legal or substantial effect', status: 'not-owed', reason: 'Section 71 compliance maintained by design through mandatory human gates at every consequential decision point.', owner: 'fraud investigator' },
        ],
        voluntaryCriminalComplaint: { status: 'pending-human-decision', reason: 'A voluntary SAPS complaint may be operationally useful for evidence preservation and possible future recovery support, but it is not a statutory duty under Cybercrimes Act section 54 and remains a human operational decision.', humanDecisionRequired: true },
        openEscalations: ['AML compliance officer confirmation of section 29 assessment before Screen 6 closes.', 'Joint Standard 2 reassessment trigger if systemic indicators emerge.'],
        recommendation: { action: 'proceed-to-screen-6-human-review', reason: 'All five instruments have been assessed on the governed source. No statutory reporting obligation is presently owed on current facts, one internal-policy-only complaint-handling obligation is recorded, and mandatory human review remains required before any consequential action.' },
    },
    documentGenerator: {
        caseRef: 'VIYA-FNB-CF-51204', customerRef: 'CUS-51204', agent: 'document-generator', status: 'completed',
        documents: [
            { documentRef: 'DOC-51204-01', template: { id: 'DT-02', name: 'saps-voluntary-criminal-complaint' }, title: 'Voluntary SAPS criminal complaint affidavit draft', status: 'blocked', bindings: [{ field: 'customerDescriptor', value: 'Sipho Ndlovu' }], blockReasons: ['Voluntary SAPS complaint decision remains pending-human-decision in Obligation Check, so DT-02 may only be proposed and is blocked pending an affirmative human lodge decision.'] },
            { documentRef: 'DOC-51204-02', template: { id: 'DT-09', name: 'internal-case-file' }, title: 'Internal case file', status: 'ready-for-human-review', bindings: [] },
            { documentRef: 'DOC-51204-03', template: { id: 'DT-14', name: 'acquirer-merchant-fraud-notification' }, title: 'Acquirer/merchant fraud notification - TECHZONE ONLINE', status: 'approved-confirmed', bindings: [] },
            { documentRef: 'DOC-51204-04', template: { id: 'DT-14', name: 'acquirer-merchant-fraud-notification' }, title: 'Acquirer/merchant fraud notification - GAMEHUB DIGITAL', status: 'approved-confirmed', bindings: [] },
            { documentRef: 'DOC-51204-05', template: { id: 'DT-15', name: 'chargeback-cover-evidence-index' }, title: 'Chargeback cover and evidence index - AUTH-51204-01', status: 'approved-confirmed', bindings: [] },
            { documentRef: 'DOC-51204-06', template: { id: 'DT-15', name: 'chargeback-cover-evidence-index' }, title: 'Chargeback cover and evidence index - AUTH-51204-02', status: 'approved-confirmed', bindings: [] },
        ],
        summary: { documentCount: 6, readyCount: 1, blockedCount: 1 },
        humanGate: { gateId: 'screen-6-confirm-obligations-and-documents', requiredRole: 'fraud-investigator' },
    },
};

// Evidence files each agent actually used, per the real manifest for this
// case - same convention as the live server-side matching, shown in each
// agent's card and the modal footer.
const HARDCODED_SIPHO_REF_FILES = {
    caseIntake: ['auth-log-51204.pdf', 'contact-note-51204.pdf', 'customer-profile 51204.pdf', 'viya-case-51204.docx'],
    recognitionCheck: ['auth-log-51204.pdf', 'contact-note-51204.pdf', 'statement-history-24m 51204.pdf'],
    fraudAssessment: ['contact-note-51204.pdf', 'customer-profile 51204.pdf', 'auth-log-51204.pdf', 'profile-event-log 51204.pdf', 'fraud-policy51204.docx'],
    transactionClassification: ['auth-log-51204.pdf', 'statement-history-24m 51204.pdf', 'contact-note-51204.pdf'],
    fundsTrace: ['auth-log-51204.pdf'],
    shadowCredit: ['statement-history-24m 51204.pdf', 'contact-note-51204.pdf', 'customer-profile 51204.pdf'],
    chargebackPreparation: ['auth-log-51204.pdf', 'contact-note-51204.pdf', 'statement-history-24m 51204.pdf'],
    recallRepatriation: ['auth-log-51204.pdf'],
    obligationCheck: ['auth-log-51204.pdf', 'contact-note-51204.pdf', 'profile-event-log 51204.pdf', 'viya-case-51204.docx', 'fraud-policy51204.docx'],
    documentGenerator: ['auth-log-51204.pdf', 'contact-note-51204.pdf', 'customer-profile 51204.pdf', 'statement-history-24m 51204.pdf', 'profile-event-log 51204.pdf'],
};

// Builds a persona's complete `a` object from the real data above, reusing
// formatAgentData (the exact same function a live response goes through)
// so the card summaries and full reports are derived identically to how a
// genuine API response would be processed - never duplicated/hand-authored
// separately, which is what would let the two drift out of sync.
function buildHardcodedAgentData() {
    const out = {};
    Object.keys(HARDCODED_SIPHO_REF_DATA).forEach(ak => {
        const raw = HARDCODED_SIPHO_REF_DATA[ak];
        const rawText = JSON.stringify(raw);
        const formatted = formatAgentData(ak, raw);
        out[ak] = {
            agentKey: ak, rawText, fullText: rawText, isFallback: false,
            finding: formatted.finding, desc: formatted.desc, tone: formatted.tone, reasoning: formatted.reasoning,
            urgencyLevel: ak === 'caseIntake' ? (formatted.urgencyLevel || 'High') : undefined,
            elapsedSeconds: raw.agent === 'document-generator' ? 153 : 45 + Math.floor(Math.random() * 60),
            completedAt: '2026-08-26T21:22:00+02:00',
            filesUsed: HARDCODED_SIPHO_REF_FILES[ak] || [],
        };
    });
    return out;
}


/* Helper to resolve case-specific evidence files dynamically from persona ID */
function getCaseEvidence(p) {
    if (!p) return { contactNote: 'contact-note.pdf', authLog: 'auth-log.pdf' };
    if (p.evidenceFiles) return p.evidenceFiles;
    const num = p.id ? p.id.replace(/^[^\d]*/, '') : '';
    return {
        contactNote: num ? `contact-note-${num}.pdf` : 'contact-note.pdf',
        authLog: num ? `auth-log-${num}.pdf` : 'auth-log.pdf',
        statementHistory: 'statement-history-24m.pdf',
        profile: 'customer-profile.pdf'
    };
}

const POLICY_TEXT = {
    'FNB-51204': { clause: 'Policy clause 4.2(b)', text: 'Where card-not-present fraud is confirmed recoverable under scheme rules and the cardholder’s own verification is clean, a provisional refund may be issued ahead of scheme resolution.' },
    'FNB-51890': { clause: 'Policy clause 6.1 / Recall', text: 'Where scheme recovery is unavailable due to full authentication via device malware, immediate cross-institution recall and repatriation across counterparty chains is authorized.' },
    'FNB-52377': { clause: 'Policy clause 2.1 (Deflection)', text: 'Amount similarity alone never establishes recognition, and amount difference alone never defeats it. Active recurring mandates with consistent cadence resolve to customer liability.' },
    'FNB-53042': { clause: 'Policy clauses 4.2(b) and 7.3', text: 'Vulnerable customer provision permits immediate full provisional credit ahead of recovery completion where vulnerability flags and third-party data latency coincide.' }
};

/* ============================================================
   PERSONAS DATA
   ============================================================ */
const PERSONAS = [
    {
        id: 'FNB-51204-REF', tag: 'REF', customer: 'Sipho Ndlovu (Reference Case)', urgency: 'High', amount: 'R44,300.00', channel: 'Card-not-present', product: 'FNB Gold Cheque Account · Visa Gold Debit Card',
        headline: 'Phishing → card-not-present fraud → ECI 7 → chargeback', recognised: false, classification: 'recoverable', mule: false, casp: false, str: false, vulnerable: false,
        hardcoded: true, // never calls the live API - see runOneAgent's early-return and openCase's state pre-population
        a: buildHardcodedAgentData(),
        customerMsgs: ['We’ve received your report and we’re looking into it now.', 'Your card has been blocked and a new one is on its way. We’ve credited your account while we recover the funds.']
    },
    {
        id: 'FNB-51204', tag: 'P1', customer: 'Sipho Ndlovu', urgency: 'Medium', amount: 'R44,300.00', channel: 'Card-not-present', product: 'FNB Gold Cheque Account · Visa Gold Debit Card',
        headline: 'Phishing → card-not-present fraud → ECI 7 → chargeback', recognised: false, classification: 'recoverable', mule: false, casp: false, str: false, vulnerable: false,
        a: {
            caseIntake: A('caseIntake', { conf: 0.90, finding: 'Case record structured', tone: 'clean', desc: 'Customer reports unfamiliar overseas software purchases following SMS phishing with spoofed sender ID.', reasoning: ['Completeness: high. No vulnerability markers.'], feeds: 'Case record → Recognition Check' }),
            recognitionCheck: A('recognitionCheck', { conf: 0.93, finding: 'Not recognised — not their own spend', tone: 'flag', desc: 'No recurring match against 24 months of history. Single occurrence, unfamiliar merchants.', reasoning: ['Routes forward to Fraud Assessment.'], feeds: 'not their own → Fraud Assessment' }),
            fraudAssessment: A('fraudAssessment', { conf: 0.89, finding: 'Method: card-not-present · Extent: card + CVV', tone: 'flag', desc: 'Credentials harvested via phishing page. No SIM swap or profile takeover.', reasoning: ['Containment recommended: block and reissue card only.'], feeds: 'method · extent → Transaction Classification · Shadow Credit' }),
            transactionClassification: A('transactionClassification', { conf: 0.95, finding: 'No 3DS / CAVV absent · recoverable', tone: 'clean', desc: 'TXN-1 ECI 07 (no 3DS). TXN-2 3DS attempted but CAVV absent, downgraded to ECI 07. Liability: merchant/acquirer.', reasoning: ['Recoverability verdict gates Chargeback Preparation.'], feeds: 'route → Chargeback Preparation (open)' }),
            fundsTrace: A('fundsTrace', { conf: 0.9, finding: 'Merchant-only movement — no mule hop', tone: 'clean', desc: 'Funds settled directly with merchant. Correspondence-led recovery via chargeback.', reasoning: ['No bank recall required.'], feeds: 'who to chase → none (merchant only)' }),
            shadowCredit: A('shadowCredit', { conf: null, finding: 'Provisional refund recommended (R44,300)', tone: 'clean', desc: 'Recoverable CNP fraud, clean verification. Authority sits within investigator threshold (Band 1).', reasoning: ['Cites internal policy clause 4.2(b).'], feeds: 'evidence volunteered → Document Generator', policy: true }),
            chargebackPreparation: A('chargebackPreparation', { conf: null, finding: 'Evidence packs assembled for 2 items', tone: 'clean', desc: 'Authorisation records, no-CAVV flag, 24-month history showing no prior merchant relationship.', reasoning: [], feeds: null }),
            recallRepatriation: A('recallRepatriation', { conf: null, finding: 'No bank recall applicable', tone: 'clean', desc: 'Merchant-only movement — recovery proceeds via chargeback.', reasoning: [], feeds: null }),
            obligationCheck: A('obligationCheck', { conf: null, finding: 'No obligation triggered', tone: 'clean', desc: 'No mule identified. Below cyber-incident materiality threshold.', reasoning: [], feeds: null }),
            documentGenerator: A('documentGenerator', { conf: null, finding: 'Chargeback filings + written determination drafted', tone: 'clean', desc: 'No suspicious transaction report or criminal case report required.', reasoning: [], feeds: 'what is owed → filings' }),
        },
        customerMsgs: ['We’ve received your report and we’re looking into it now.', 'Your card has been blocked and a new one is on its way. We’ve credited your account while we recover the funds.']
    },
    {
        id: 'FNB-51890', tag: 'P2', customer: 'Andile Khumalo', urgency: 'High', amount: 'R135,500.00', channel: 'Trojanised app · remote-access', product: 'FNB Premier Cheque Account · Visa Platinum Debit Card',
        headline: 'Trojanised app → remote-access fraud → ECI 5 → chase and repatriate', recognised: false, classification: 'not-recoverable', mule: true, casp: true, str: true, vulnerable: false,
        a: {
            caseIntake: A('caseIntake', { conf: 0.90, finding: 'Case record structured', tone: 'clean', desc: 'Customer reports unauthorized withdrawals after downloading a trojanized banking app from a sponsored search ad.', reasoning: ['Completeness high, funds still moving.'], feeds: 'Case record → Recognition Check' }),
            recognitionCheck: A('recognitionCheck', { conf: 0.90, finding: 'Not recognised — not their own spend', tone: 'flag', desc: 'No recurring match. Single occurrence.', reasoning: [], feeds: 'not their own → Fraud Assessment' }),
            fraudAssessment: A('fraudAssessment', { conf: 0.87, finding: 'Method: malware/trojan · Extent: device + credentials', tone: 'flag', desc: 'Accessibility service remote takeover on legitimate replacement handset. Alerts suppressed.', reasoning: ['Containment: full profile lock.'], feeds: 'method · extent → Transaction Classification' }),
            transactionClassification: A('transactionClassification', { conf: 0.93, finding: 'Fully authenticated (ECI 05) · no chargeback route', tone: 'block', desc: 'Valid CAVV present. Scheme liability sits with issuer. No chargeback possible; must pivot immediately to chase and repatriate.', reasoning: ['HARD GATE — no scheme route.'], feeds: 'HARD GATE → Funds Trace & Recall' }),
            fundsTrace: A('fundsTrace', { conf: 0.94, finding: 'Multi-counterparty chain identified', tone: 'block', desc: 'R135,500 moved to Counterparty Bank A, onward to Counterparty Bank B (mule), then to Licensed CASP.', reasoning: ['Counterparty Bank B has R41k held; Bank A has R40.5k held.'], feeds: 'who to chase → Recall & Repatriation' }),
            shadowCredit: A('shadowCredit', { conf: null, finding: 'Provisional refund recommended (R135,500)', tone: 'flag', desc: 'Scheme recovery closed, but malware compromise on valid device warrants full provisional credit under Fraud Manager authority (Band 2).', reasoning: ['Cites internal policy clause 6.1.'], feeds: 'determination outcome → Document Generator', policy: true }),
            chargebackPreparation: A('chargebackPreparation', { conf: null, finding: 'GATE CLOSED — does not run', tone: 'block', desc: 'Transaction Classification verdict = not recoverable via card scheme.', reasoning: [], blocked: true, feeds: null }),
            recallRepatriation: A('recallRepatriation', { conf: null, finding: 'Recalls dispatched to Counterparty Bank A & B; CASP pledged', tone: 'flag', desc: 'Recall register active. Hostile prompt-injection reply from unverified sender successfully quarantined.', reasoning: [], injection: true, feeds: 'counterparty holds → Document Generator' }),
            obligationCheck: A('obligationCheck', { conf: null, finding: 'FIC Act s29 STR owed (Mule confirmed)', tone: 'block', desc: 'Mule account positively identified, SAFPS registry hit confirmed. Tipping-off suppression ACTIVE.', reasoning: [], feeds: 'what is owed → Document Generator' }),
            documentGenerator: A('documentGenerator', { conf: null, finding: 'STR draft + written determination drafted', tone: 'flag', desc: 'FICA s29 STR filed under strict tipping-off non-disclosure.', reasoning: [], feeds: 'filings complete' }),
        },
        customerMsgs: ['We’re reviewing the transaction you flagged.', 'We’ve reimbursed this transaction in full and secured your profile.']
    },
    {
        id: 'FNB-52377', tag: 'P3', customer: 'Nomvula Dlamini', urgency: 'Low', amount: 'R429.00', channel: 'Recurring card mandate', product: 'FNB Easy Cheque Account · Visa Debit Card',
        headline: 'Disputed subscription → recognised as her own → deflected at Screen 2', recognised: true, classification: null, mule: false, casp: false, str: false, vulnerable: false,
        a: {
            caseIntake: A('caseIntake', { conf: 0.95, finding: 'Case record structured', tone: 'clean', desc: 'Customer disputes R429 debit with descriptor DLB*SPCPT ZA.', reasoning: ['Completeness high.'], feeds: 'Case record → Recognition Check' }),
            recognitionCheck: A('recognitionCheck', { conf: 0.98, finding: 'Recognised — customer’s own recurring gym subscription', tone: 'clean', desc: 'Descriptor DLB*SPCPT ZA matches 11 prior monthly debits at R349. Price increase to R429 reflects introductory rate ending for FitHub Wellness Sea Point.', reasoning: ['Active recurring mandate on file, unbroken cadence.', 'Deflected at Screen 2 — no fraud case opened.'], feeds: 'recognised → Case closed' }),
        },
        customerMsgs: ['We’ve reviewed your report on the R429 debit.', 'We’ve matched this to your FitHub Wellness gym subscription — your introductory rate ended this month. Let us know if you need help cancelling.']
    },
    {
        id: 'FNB-53042', tag: 'P4', customer: 'Thabo Mokoena', urgency: 'High', amount: 'R143,750.00 (Mixed rails)', channel: 'SIM swap + push payment', product: 'FNB Premier · Visa Platinum Debit Card',
        headline: 'SIM swap → account takeover → mixed rails → vulnerable customer', recognised: false, classification: 'mixed', mule: true, casp: true, str: true, vulnerable: true,
        a: {
            caseIntake: A('caseIntake', { conf: 0.85, finding: 'Vulnerability FLAGGED (Age 71, heart condition, distress)', tone: 'flag', desc: 'Customer unreachable via phone due to SIM swap. Distressed pensioner calling from neighbor phone.', reasoning: ['Vulnerability flag surfaces immediately.'], feeds: 'Case record → Recognition Check' }),
            recognitionCheck: A('recognitionCheck', { conf: 0.96, finding: 'Not recognised — not their own spend', tone: 'flag', desc: 'Disputed card purchase & transfer have no historical match.', reasoning: [], feeds: 'not their own → Fraud Assessment' }),
            fraudAssessment: A('fraudAssessment', { conf: 0.92, finding: 'Method: SIM swap + profile takeover', tone: 'block', desc: 'Fraudulent SIM swap at MNO counter on forged ID. SIM-swap check ran before password reset and returned clear because MNO feed publication was delayed 87 minutes.', reasoning: ['Full profile lockdown recommended.'], feeds: 'method · extent → Transaction Classification · Shadow Credit' }),
            transactionClassification: A('transactionClassification', { conf: 0.90, finding: 'Mixed rails verdict — card recoverable, transfer recallable', tone: 'flag', desc: 'TXN-1 (Card R48,750) has no 3DS → Chargeback open. TXN-2 (Transfer R95,000) has no scheme rails → Recall and repatriation required.', reasoning: ['Two distinct routes on one screen.'], feeds: 'route → Chargeback & Recall' }),
            fundsTrace: A('fundsTrace', { conf: 0.94, finding: 'Mule account & Licensed CASP identified', tone: 'block', desc: 'R95,000 transfer went to Counterparty Bank A mule account; R54,000 moved onward to Licensed CASP.', reasoning: ['Counterparty Bank A holding R41,000.'], feeds: 'who to chase → Recall & Repatriation' }),
            shadowCredit: A('shadowCredit', { conf: null, finding: 'Immediate full provisional credit (R143,750)', tone: 'clean', desc: 'Vulnerability presumption applies. Fraud Manager approval (Band 2). Named policy gap: operator recourse escalated.', reasoning: ['Cites internal policy clauses 4.2(b) and 7.3.'], feeds: 'evidence volunteered → Document Generator', policy: true }),
            chargebackPreparation: A('chargebackPreparation', { conf: null, finding: 'Evidence pack for card leg (R48,750)', tone: 'clean', desc: 'Authorisation record, no-CAVV flag, 24-month history check.', reasoning: [], feeds: null }),
            recallRepatriation: A('recallRepatriation', { conf: null, finding: 'Recalls and CASP pledge dispatched', tone: 'flag', desc: 'Recall register active. Counterparty Bank A recall prioritized.', reasoning: [], feeds: 'counterparty confirms hold → Document Generator' }),
            obligationCheck: A('obligationCheck', { conf: null, finding: 'FIC Act s29 STR owed', tone: 'block', desc: 'Mule account identified, SAFPS registry hit. Tipping-off suppression ACTIVE.', reasoning: [], feeds: 'what is owed → Document Generator' }),
            documentGenerator: A('documentGenerator', { conf: null, finding: 'STR draft + written determination drafted', tone: 'flag', desc: 'FICA s29 STR filed. Customer messages truthful about money while strictly suppressing STR reference.', reasoning: [], feeds: 'filings complete' }),
        },
        customerMsgs: ['We’ve received your report and are securing your accounts.', 'We’ve credited your account in full while recovery continues. Next update within 24 hours.']
    },
];

// Written as a function of the real case, not static per-case text, so every
// message actually cites the disputed amount, product and channel on file
// rather than speaking in vague generalities that happen to fit any case.
// Each message names the gate whose approval should actually trigger it
// (afterGate: the screenIdx, 0-based, matching SCREENS) - not a generic
// "one message per gate" formula, since what a message says needs to match
// what's actually been decided by that point. The reimbursement/credit
// message, for instance, can't fire before the Customer Position screen
// (Shadow Credit) has actually decided a credit - message index 0 is the
// exception, fired separately at Case Intake, not through a gate at all.
function MESSAGES(p) {
    const amt = p.amount.replace(/\s*\(.*\)\s*$/, ''); // strip internal-only annotations like "(Mixed rails)" before this reaches customer-facing text
    switch (p.id) {
        case 'FNB-51204': return [
            { channel: 'SMS', text: `Hi ${p.customer.split(' ')[0]}, thanks for reporting the ${amt} card-not-present transaction — we're on it.`, afterGate: null },
            { channel: 'App push', text: `We've confirmed the ${amt} charge on your ${p.product.split('·')[1]?.trim() || 'card'} wasn't authorised by you. Your card has been blocked and replaced.`, afterGate: 1 },
            { channel: 'Email', text: `We've credited ${amt} to your account while we recover the funds via chargeback.`, afterGate: 3 },
        ];
        case 'FNB-51890': return [
            { channel: 'SMS', text: `Hi ${p.customer.split(' ')[0]}, thanks for flagging the ${amt} disputed activity on your account — we're reviewing it now.`, afterGate: null },
            { channel: 'App push', text: `Your profile has been locked and secured following the malicious app install on your device.`, afterGate: 1 },
            { channel: 'Email', text: `We've reimbursed the full ${amt} and are actively tracing where the funds moved.`, afterGate: 3 },
        ];
        case 'FNB-52377': return [
            { channel: 'App push', text: `Hi ${p.customer.split(' ')[0]}, we've reviewed your report on the ${amt} debit.`, afterGate: null },
            { channel: 'App push', text: `We've matched this to your recurring card mandate — your introductory rate ended this billing cycle, which is why the amount changed.`, afterGate: 1 },
        ];
        case 'FNB-53042': return [
            { channel: 'Voice call', text: `Hi Mr ${p.customer.split(' ')[1]}, we've received your report of ${amt} in disputed activity following the SIM swap and are securing your accounts.`, afterGate: null },
            { channel: 'Email', text: `We've credited the full ${amt} to your account while recovery continues.`, suppression: true, afterGate: 3 },
        ];
        default: return [];
    }
}
const CHANNEL_ICON = { 'App push': 'radio', 'SMS': 'send', 'Email': 'filetext', 'Voice call': 'user' };

// Filler cases exist purely to give the queue realistic volume - they never run
// agents (see renderFillerCaseShell). Generated deterministically from two name
// pools so every entry is guaranteed unique with no hand-written repetition:
// 34 first names x 30 last names = 1020 possible pairs, well over the 1000 needed.
const FILLER_FIRST_NAMES = [
    'Karabo', 'Johan', 'Amahle', 'Thandeka', 'Pieter', 'Lindiwe', 'Riaan', 'Nomsa', 'Werner', 'Palesa',
    'Willem', 'Zanele', 'Andre', 'Busisiwe', 'Francois', 'Refilwe', 'Johannes', 'Nokuthula', 'Christiaan', 'Thabo',
    'Susan', 'Bongani', 'Elmarie', 'Kagiso', 'Deon', 'Nonhlanhla', 'Stefan', 'Precious', 'Gideon', 'Ayanda',
    'Lerato', 'Hendrik', 'Zodwa', 'Marius'
];
const FILLER_LAST_NAMES = [
    'Sithole', 'van Wyk', 'Ngcobo', 'Zulu', 'Botha', 'Mahlangu', 'Fourie', 'Dube', 'Kruger', 'Moloi',
    'Pretorius', 'Khumalo', 'Nel', 'Ndlovu', 'du Plessis', 'Sekhukhune', 'Meyer', 'Cele', 'Marais', 'Radebe',
    'van der Merwe', 'Mkhize', 'Joubert', 'Mokwena', 'Coetzee', 'Buthelezi', 'Venter', 'Maluleke', 'Human', 'Gumede'
];
const FILLER_CASE_TYPES = [
    'Card-not-present', 'Lost & stolen', 'ATM', 'Counterfeit card', 'Card skimming',
    'Online subscription dispute', 'Duplicate billing', 'Chip-and-PIN fraud'
];
function generateFillerCases(count) {
    const out = [];
    let refCounter = 47958; // continues downward from the original hand-written set, never collides with a real PERSONAS ref (51204/51890/52377/53042)
    outer:
    for (let f = 0; f < FILLER_FIRST_NAMES.length; f++) {
        for (let l = 0; l < FILLER_LAST_NAMES.length; l++) {
            if (out.length >= count) break outer;
            out.push({
                name: `${FILLER_FIRST_NAMES[f]} ${FILLER_LAST_NAMES[l]}`,
                ref: `CFD-${refCounter--}`,
                type: FILLER_CASE_TYPES[out.length % FILLER_CASE_TYPES.length]
            });
        }
    }
    return out;
}
const FILLER = generateFillerCases(146);
const FILLER_PAGE_SIZE = 30;
let fillerPage = 0;

/* ============================================================
   STATE ENGINE & TIMER TRACKING
   ============================================================ */
const state = {};
const agentTimerIntervals = {};

function freshState(p) {
    const base = {
        screenIdx: 0,
        activeStageTab: 0,
        gates: [null, null, null, null, null, null],
        gateApprover: [null, null, null, null, null, null],
        gateDecidedAt: [null, null, null, null, null, null],
        gateReason: [null, null, null, null, null, null],
        closed: false,
        escalated: false,
        escalatedAt: null,
        agentStatus: {},
        artefacts: {},
        expanded: {},
        messages: [],
        urgencyLevel: null,
        slaStartedAt: null,
        sapsDraft: null, // {subject, body} once generated - persists edits, see renderCorrespondenceTab
        counterpartyDrafts: {} // keyed by counterparty name - {subject, body, status: 'draft'|'sent'}
    };
    if (!p.hardcoded) return base;

    // Hardcoded reference case: every agent already has real pre-baked data
    // (see buildHardcodedAgentData), so this starts fully resolved rather
    // than needing runScreenAgents to call anything. Pre-populating
    // agentStatus here is what makes openCase's existing
    // `Object.keys(s.agentStatus).length === 0` auto-trigger check
    // correctly skip live calls for this case - no separate special-case
    // branch needed there.
    Object.keys(p.a).forEach(ak => { base.agentStatus[ak] = 'done'; });
    base.gates = ['approve', 'approve', 'approve', 'approve', 'approve', 'approve'];
    base.gateApprover = new Array(6).fill('K. Adebayo');
    base.gateDecidedAt = new Array(6).fill('2026-08-26T21:25:00+02:00');
    base.gateReason = ['Approved', 'Approved', 'Approved', 'Approved', 'Approved', 'Approved'];
    base.closed = true;
    base.screenIdx = SCREENS.length - 1;
    base.urgencyLevel = p.a.caseIntake.urgencyLevel || 'High';
    base.slaStartedAt = Date.now() - 3600000;
    base.messages = [
        { text: 'We\u2019ve received your report and we\u2019re looking into it now.', channel: 'SMS', trigger: 1, status: 'sent', draftedAt: '2026-08-26T21:05:00+02:00', sentAt: '2026-08-26T21:05:30+02:00' },
        { text: 'Your card has been blocked and a new one is on its way. We\u2019ve credited your account while we recover the funds.', channel: 'SMS', trigger: 2, status: 'sent', draftedAt: '2026-08-26T21:24:00+02:00', sentAt: '2026-08-26T21:24:20+02:00' },
    ];
    return base;
}
PERSONAS.forEach(p => state[p.id] = freshState(p));
let currentCaseId = null;
let activeWorkspaceTab = 'agents'; // which of Agents/Report/Case Files/Correspondence is on screen

function pushMessage(p, triggerIndex) {
    const templates = MESSAGES(p);
    if (!templates || triggerIndex >= templates.length) return;
    const s = state[p.id];
    if (s.messages.some(m => m.trigger === triggerIndex + 1)) return; // already drafted - gates are one-shot but this guards against any repeat call
    const tmpl = templates[triggerIndex];
    const t = new Date();
    // Drafted, not sent - a human has to review and explicitly send every
    // message (see sendDraftMessage), in case it needs editing first. Nothing
    // here notifies the customer; that only happens on send.
    s.messages.push({ text: tmpl.text, channel: tmpl.channel, suppression: !!tmpl.suppression, time: t.toTimeString().slice(0, 5), trigger: triggerIndex + 1, status: 'draft', draftedAt: t.toISOString(), sentAt: null });
    updateThreadBadge();
    flashBadge();
    if (currentCaseId === p.id) renderThread(p);
    showToast(`New customer message drafted (${tmpl.channel}) - awaiting review`, 'msg', 'msg');
}

// Fires every message whose afterGate matches the screen whose gate was just
// decided - a screen can trigger more than one message, or none at all.
function pushMessagesForGate(p, screenIdx) {
    const templates = MESSAGES(p);
    if (!templates) return;
    templates.forEach((tmpl, i) => {
        if (tmpl.afterGate === screenIdx) pushMessage(p, i);
    });
}

// The actual send action - this is the only point a customer is genuinely
// notified. Whatever text is in the draft at this moment (including any
// human edits) is what goes out, which is the whole point of drafting
// first rather than auto-sending.
function sendDraftMessage(p, msgIndex) {
    const s = state[p.id];
    const msg = s.messages[msgIndex];
    if (!msg || msg.status !== 'draft') return;
    if (!msg.text || !msg.text.trim()) { showToast('Message is empty - add some text before sending.', 'flag', 'flag'); return; }
    msg.status = 'sent';
    msg.sentAt = new Date().toISOString();
    updateThreadBadge();
    if (currentCaseId === p.id) renderThread(p);
    showToast(`Customer notified via ${msg.channel}`, 'msg', 'msg');
}

/* ============================================================
   LIVELINESS — toasts, badge flash, staggered entrance, count-up
   ============================================================ */
function ensureToastStack() {
    let stack = document.getElementById('toastStack');
    if (!stack) {
        stack = document.createElement('div');
        stack.id = 'toastStack';
        document.body.appendChild(stack);
    }
    return stack;
}
function showToast(message, tone, iconName) {
    const stack = ensureToastStack();
    const el = document.createElement('div');
    el.className = `toast ${tone || ''}`.trim();
    el.innerHTML = `<div class="toast-ico">${I(iconName || 'check', 14)}</div><div class="toast-text">${message}</div>`;
    stack.appendChild(el);
    const life = 3600;
    setTimeout(() => {
        el.classList.add('leaving');
        setTimeout(() => el.remove(), 300);
    }, life);
    // Cap the stack so it never grows unbounded during a fast run
    while (stack.children.length > 4) stack.removeChild(stack.firstChild);
}
function flashBadge() {
    document.querySelectorAll('#threadBadge, .tb-badge').forEach(el => {
        el.classList.remove('flash');
        void el.offsetWidth; // restart animation
        el.classList.add('flash');
    });
}
// Ticks every ".thinking .dots" span in the document, independent of which case/screen is showing.
(function startDotsTicker() {
    const frames = ['', '.', '..', '...'];
    let i = 0;
    setInterval(() => {
        i = (i + 1) % frames.length;
        document.querySelectorAll('.ac-desc.thinking .dots').forEach(el => { el.textContent = frames[i]; });
    }, 420);
})();

function animateEntrance(container, selector) {
    const els = container.querySelectorAll(selector);
    els.forEach((el, i) => {
        el.classList.add('entering');
        el.style.animationDelay = (i * 70) + 'ms';
    });
}
function animateCountUp(el, target, duration) {
    if (!el) return;
    duration = duration || 550;
    const start = performance.now();
    function tick(now) {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = Math.round(target * eased);
        if (t < 1) requestAnimationFrame(tick);
        else el.textContent = target;
    }
    requestAnimationFrame(tick);
}

function formatDuration(seconds) {
    if (!seconds || seconds <= 0) return '0s';
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    if (m > 0) {
        return `${m}m ${s}s`;
    }
    return `${s}s`;
}

function formatLiveClock(seconds) {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
}

// Wall-clock timestamp, e.g. "20 Aug, 22:58" - used next to agents and human
// gate decisions so it's clear WHEN something happened, not just how long it took.
function formatWallClock(isoString) {
    if (!isoString) return '';
    const d = new Date(isoString);
    if (isNaN(d.getTime())) return '';
    const datePart = d.toLocaleDateString('en-ZA', { day: 'numeric', month: 'short' });
    const timePart = d.toLocaleTimeString('en-ZA', { hour: '2-digit', minute: '2-digit', hour12: false });
    return `${datePart}, ${timePart}`;
}

// South African date/time convention (DD Mon YYYY, 24h time) - used for
// incident-timeline entries, which can span multiple days so need the full
// date, unlike formatWallClock's shorter "just now-ish" style.
function formatSATimestamp(isoString) {
    if (!isoString) return '';
    const d = new Date(isoString);
    if (isNaN(d.getTime())) return '';
    const datePart = d.toLocaleDateString('en-ZA', { day: '2-digit', month: 'short', year: 'numeric' });
    const timePart = d.toLocaleTimeString('en-ZA', { hour: '2-digit', minute: '2-digit', hour12: false });
    return `${datePart} ${timePart}`;
}

// Splits a long run-on statement into readable paragraphs at sentence
// boundaries, without breaking on decimal points in amounts (e.g. "R48,000.00
// at 19:30" should not split after "00"). Requires the character after the
// sentence-ending punctuation to be a capital letter, which decimals never are.
function formatAsParagraphs(text) {
    if (!text) return '';
    const sentences = text.match(/[\s\S]+?[.!?](?=\s+[A-Z]|\s*$)/g);
    if (!sentences || sentences.length < 2) return text;
    return sentences.map(s => `<p style="margin:0 0 8px;">${s.trim()}</p>`).join('');
}

/* ============================================================
   UN-TRUNCATED OUTPUT FORMATTER
   ============================================================ */
function parseAgentJson(rawText) {
    if (!rawText) return null;
    let obj = rawText;
    if (typeof rawText === 'string') {
        try { obj = JSON.parse(rawText); } catch (e) { return null; }
    }
    if (obj && obj.output) {
        if (typeof obj.output === 'string') {
            try { obj = JSON.parse(obj.output); } catch (e) { obj = obj.output; }
        } else {
            obj = obj.output;
        }
    }
    return obj;
}

function formatAgentData(agentKey, data) {
    if (!data) return { finding: 'No data', desc: 'No output available.', tone: 'clean', reasoning: [], fullText: '', urgencyLevel: null };

    let finding = 'Completed Analysis';
    let desc = '';
    let tone = 'clean';
    let reasoning = [];
    let fullText = '';
    let urgencyLevel = null;

    if (typeof data === 'string') {
        fullText = data;
        const parsed = parseAgentJson(data);
        if (parsed && typeof parsed === 'object') {
            data = parsed;
        } else {
            return {
                finding: 'Analysis Completed',
                desc: data.replace(/[\{\}\[\]"]/g, '').trim(),
                tone: 'clean',
                reasoning: [],
                fullText: data,
                urgencyLevel: null
            };
        }
    } else {
        fullText = JSON.stringify(data, null, 2);
    }

    const getProp = (o, ...keys) => {
        if (!o) return undefined;
        for (const k of keys) {
            if (o[k] !== undefined) return o[k];
        }
        return undefined;
    };

    if (agentKey === 'caseIntake') {
        // provisionalHypothesis, reportedTotal and reportedCount live nested under
        // reportedEvent in the real API payload, not at the top level - compute
        // reportedEvent first so these lookups check the right place.
        const reportedEvent = getProp(data, 'reportedEvent', 'reported Event') || {};
        const provHyp = getProp(reportedEvent, 'provisionalHypothesis', 'provisional Hypothesis') || getProp(data, 'provisionalHypothesis', 'provisional Hypothesis');
        const rec = getProp(data, 'recommendation') || {};
        finding = provHyp || (rec.action ? String(rec.action).replace(/-/g, ' ') : null) || 'Case record structured';

        let parts = [];
        if (data.status) parts.push(`Status: ${data.status}`);
        const reportedTotal = getProp(reportedEvent, 'reportedTotal', 'reported Total') || getProp(data, 'reportedTotal', 'reported Total');
        if (reportedTotal && reportedTotal.amount) {
            parts.push(`Reported Amount: R${Number(reportedTotal.amount).toLocaleString('en-ZA', { minimumFractionDigits: 2 })} ${reportedTotal.currency || 'ZAR'}`);
        }
        const reportedCount = getProp(reportedEvent, 'reportedCount', 'reported Count') || getProp(data, 'reportedCount', 'reported Count');
        if (reportedCount) parts.push(`Disputed Items: ${reportedCount}`);

        desc = parts.join(' · ');
        const custPos = getProp(reportedEvent, 'customerPosition', 'customer Position');
        if (custPos) {
            desc += `<br/><br/><b>Customer Statement:</b> ${custPos}`;
        }

        const materialGaps = getProp(data, 'materialGaps', 'material Gaps');
        if (materialGaps && Array.isArray(materialGaps)) {
            reasoning = materialGaps;
        } else if (rec.reason) {
            reasoning = [rec.reason];
        }

        const urgency = getProp(data, 'urgency') || {};
        if (urgency.level === 'high') tone = 'flag';
        // Vulnerability flag or a blocked/gated status outranks urgency for tone.
        const vulnerability = getProp(data, 'vulnerability') || {};
        if (vulnerability.flagged) tone = 'flag';
        if (typeof data.status === 'string' && /block|fail|error/i.test(data.status)) tone = 'block';
        // Normalise to the four SLA tiers the Cases table understands. The live
        // payload only ever returns high/medium/low; "critical" is reserved for
        // vulnerability-flagged cases, which warrant the tightest SLA regardless
        // of what the agent itself reported.
        if (vulnerability.flagged) urgencyLevel = 'Critical';
        else if (urgency.level === 'high') urgencyLevel = 'High';
        else if (urgency.level === 'medium') urgencyLevel = 'Medium';
        else if (urgency.level === 'low') urgencyLevel = 'Low';
        else urgencyLevel = 'Medium'; // agent completed but didn't state a level - don't leave the SLA clock unset
    }
    else if (agentKey === 'recognitionCheck') {
        const res = getProp(data, 'recognitionResult', 'recognition Result') || 'Processed';
        const humanReviewLabels = { 'human-review-required': 'Human Review Required', 'blocked-insufficient-evidence': 'Blocked — Insufficient Evidence' };
        finding = res === 'no-match' ? 'Not Recognised — Fraud Route'
            : res === 'match' ? 'Recognised Subscription'
            : (humanReviewLabels[res] || humanReviewLabels[data.status] || (res && res !== 'Processed' ? res.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) : 'Recognition Completed'));

        const conf = getProp(data, 'confidence') || {};
        const rec = getProp(data, 'recommendation') || {};
        desc = conf.basis || rec.reason || 'Statement history checked against active mandates.';
        if (res === 'no-match') tone = 'flag';
        else if (res === 'match') tone = 'clean';
        else tone = 'flag'; // human-review-required, blocked-insufficient-evidence, or anything else uncertain
        if (typeof data.status === 'string' && /block|fail|error/i.test(data.status)) tone = 'block';

        // Real field name is "checks", not "merchantChecks" - check both to be safe.
        const merchantChecks = getProp(data, 'checks', 'merchantChecks', 'merchant Checks');
        const materialGaps = getProp(data, 'materialGaps', 'material Gaps');
        if (merchantChecks && Array.isArray(merchantChecks)) {
            reasoning = merchantChecks.map(m => `<b>${m.transactionRef || m.subject || m.merchant || 'Item'}:</b> ${m.reason || 'Check completed'}`);
        } else if (materialGaps && Array.isArray(materialGaps)) {
            reasoning = materialGaps;
        }
    }
    else {
        const materialGaps = getProp(data, 'materialGaps', 'material Gaps');

        // Every agent from Transaction Classification onward returns this same
        // "gated" envelope when an upstream human decision hasn't been recorded
        // yet: applicability: 'not-applicable' + a top-level reason (a DIFFERENT
        // field from recommendation.reason, which is usually null in this state -
        // that mismatch is what produced the generic "Analysis Completed" /
        // "processed the transaction..." boilerplate here before). Handle it
        // first, before falling through to the generic recommendation-based path.
        if (data.applicability === 'not-applicable') {
            finding = 'Not Yet Applicable';
            desc = data.reason || 'This agent has not yet run its normal analysis - an upstream human decision is still pending.';
            tone = 'flag';
            if (materialGaps && Array.isArray(materialGaps)) reasoning = materialGaps;
        } else {
            const provHyp = getProp(data, 'provisionalHypothesis', 'provisional Hypothesis');
            const rec = getProp(data, 'recommendation') || {};
            finding = provHyp || data.finding || (rec.action ? String(rec.action).replace(/-/g, ' ') : null) || 'Analysis Completed';

            let descParts = [];
            if (rec.reason) descParts.push(rec.reason);
            else if (data.reason) descParts.push(data.reason); // top-level reason, when recommendation.reason is empty
            const custPos = getProp(data, 'customerPosition', 'customer Position');
            if (custPos) descParts.push(custPos);
            if (data.desc) descParts.push(data.desc);

            desc = descParts.join(' ') || 'The agent processed the transaction and returned full analytical findings.';

            if (materialGaps && Array.isArray(materialGaps)) {
                reasoning = materialGaps;
            }
            if (data.status === 'failed' || data.error) tone = 'block';
        }
    }

    return { finding, desc, tone, reasoning, fullText, urgencyLevel };
}

/* ============================================================
   DYNAMIC MULTI-AGENT REPORT DISPATCHER
   Routes parsed payload to dedicated renderer per unique schema
   ============================================================ */
function renderRichAgentReport(data, fallbackAgentKey) {
    if (!data) return '<div class="panel-empty">No output available.</div>';

    let obj = data;
    if (typeof data === 'string') {
        try {
            const parsed = JSON.parse(data);
            obj = parsed.output ? (typeof parsed.output === 'string' ? JSON.parse(parsed.output) : parsed.output) : parsed;
        } catch (e) {
            return `<div class="mb-desc" style="white-space:pre-wrap;line-height:1.6;font-size:13px;">${data}</div>`;
        }
    }

    const agentType = (obj.agent || fallbackAgentKey || '').toLowerCase().replace(/[^a-z0-9]/g, '');

    // Every agent from Transaction Classification onward shares the same envelope:
    // applicability + a top-level reason explaining why it hasn't run its normal
    // analysis yet (usually an upstream human gate not yet cleared). This is a
    // DIFFERENT field from recommendation.reason, which is frequently null in this
    // state - that mismatch was why agents in this state were showing generic
    // "Analysis Completed" boilerplate instead of the real, useful explanation.
    // Handle it once, for every agent, before any agent-specific rendering.
    if (obj.applicability === 'not-applicable') {
        return renderNotApplicablePanel(obj);
    }

    switch (agentType) {
        case 'caseintake':
            return renderCaseIntakeReport(obj);
        case 'recognitioncheck':
            return renderRecognitionCheckReport(obj);
        case 'fraudassessment':
            return renderFraudAssessmentReport(obj);
        case 'fundstrace':
            return renderFundsTraceReport(obj);
        case 'transactionclassification':
            return renderTransactionClassificationReport(obj);
        case 'shadowcredit':
            return renderShadowCreditReport(obj);
        case 'chargebackpreparation':
            return renderChargebackPreparationReport(obj);
        case 'recallandrepatriation':
            return renderRecallRepatriationReport(obj);
        case 'obligationcheck':
            return renderObligationCheckReport(obj);
        case 'documentgenerator':
            return renderDocumentGeneratorReport(obj);
        default:
            return renderGenericAgentReport(obj);
    }
}

// Shared "gated / not yet applicable" panel - used by every agent from
// Transaction Classification onward when an upstream human decision hasn't
// been recorded yet. Verified against real API responses (20 Aug run).
function renderNotApplicablePanel(obj) {
    const reason = obj.reason || 'This agent has not yet run its normal analysis.';
    const gaps = gP(obj, 'materialGaps', 'material Gaps') || [];
    const gate = gP(obj, 'humanGate') || {};
    const rec = gP(obj, 'recommendation') || {};

    return `
    <div class="agent-report-wrap" style="line-height:1.5;">
        <div style="border-bottom:2px solid var(--border-soft);padding-bottom:10px;margin-bottom:14px;">
            <div style="font-size:16px;font-weight:800;color:var(--purple-800);">⏳ Not Yet Applicable</div>
            <div style="font-size:11px;font-weight:700;color:var(--text-3);margin-top:2px;letter-spacing:0.2px;">Status: ${(obj.status || 'Completed').replace(/^\w/, c => c.toUpperCase())} · Applicability: Not applicable</div>
        </div>

        <div style="background:#FFFBEB;border:1px solid #FDE68A;border-radius:10px;padding:12px;margin-bottom:14px;">
            <div style="font-size:11px;font-weight:800;text-transform:uppercase;color:#92400E;">Why this agent has nothing to report yet</div>
            <div style="font-size:12.5px;color:#78350F;margin-top:4px;line-height:1.6;">${reason}</div>
        </div>

        ${gaps.length ? `
        <div style="margin-bottom:14px;">
            <div style="font-size:11px;font-weight:800;text-transform:uppercase;color:var(--purple-700);margin-bottom:6px;">Material Gaps</div>
            <ul style="margin:0;padding-left:18px;">
                ${gaps.map(g => `<li style="font-size:12px;color:var(--text-2);line-height:1.6;margin-bottom:4px;">${g}</li>`).join('')}
            </ul>
        </div>` : ''}

        ${gate.gateId ? `
        <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:10px;padding:12px;margin-bottom:14px;">
            <div style="font-size:11px;font-weight:800;text-transform:uppercase;color:var(--text-3);">Waiting on</div>
            <div style="font-size:12px;color:var(--text);margin-top:4px;">Gate <b>${gate.gateId}</b> — ${gate.status || 'awaiting-review'}${gate.requiredRole ? `, requires <b>${gate.requiredRole.replace(/-/g, ' ')}</b>` : ''}</div>
        </div>` : ''}

        ${(rec.action || rec.reason) ? `
        <div style="background:var(--purple-50);border:1px solid #E9D8FD;border-radius:10px;padding:12px;">
            <div style="font-size:11px;font-weight:800;color:var(--purple-800);">Recommendation</div>
            <div style="font-size:12px;color:var(--text-2);margin-top:2px;">${rec.action ? `<b>${String(rec.action).replace(/-/g, ' ')}</b>: ` : ''}${rec.reason || ''}</div>
        </div>` : ''}
    </div>`;
}

function gP(o, ...keys) {
    if (!o || typeof o !== 'object') return undefined;
    for (const k of keys) {
        if (o[k] !== undefined) return o[k];
    }
    return undefined;
}

/* ------------------------------------------------------------
   1. CASE INTAKE AGENT RENDERER
   ------------------------------------------------------------ */
function renderCaseIntakeReport(obj) {
    const caseRef = gP(obj, 'caseRef', 'caseRef');
    const customerRef = gP(obj, 'customerRef', 'customer Ref');
    const customer = gP(obj, 'customer') || {};
    const reportedEvent = gP(obj, 'reportedEvent', 'reported Event') || {};
    const compromise = gP(reportedEvent, 'compromiseDisclosure', 'compromise Disclosure', 'suspectedCompromiseEvent', 'compromiseEvent') || {};
    const scope = gP(obj, 'caseScope', 'caseScope') || {};
    const containment = gP(obj, 'containmentAlreadyCompleted', 'containmentAlreadyCompleted') || [];
    const gaps = gP(obj, 'materialGaps', 'material Gaps') || [];
    const rec = gP(obj, 'recommendation') || {};
    const urgency = gP(obj, 'urgency') || {};
    const humanGate = gP(obj, 'humanGate') || {};

    const reportedTotal = gP(reportedEvent, 'reportedTotal', 'reported Total') || {};
    const totalAmt = reportedTotal.amount
        ? `R${Number(reportedTotal.amount).toLocaleString('en-ZA', { minimumFractionDigits: 2 })}`
        : 'R0.00';

    // Real timeline entries look like "2026-08-12T19:47:00+02:00 — Customer opened
    // the link... [source: file.pdf]" - note the EM DASH separator, not a hyphen.
    // The old code split on ' - ' (hyphen), which never matched, so the whole
    // string (including the raw ISO timestamp) fell straight into the displayed
    // text - hence the redundant timestamp. Also reformats the time badge into a
    // South African date/time convention instead of a bare 24h clock.
    const knownTimeline = gP(reportedEvent, 'knownTimeline', 'known Timeline') || [];
    const timelineHtml = knownTimeline.map(item => {
        const str = String(item);
        const dashSplit = str.split(/\s+[—-]\s+/); // matches either an em dash or a hyphen, whichever the data actually uses
        const isoMatch = str.match(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/);
        const dateLabel = isoMatch ? formatSATimestamp(isoMatch[0]) : '';
        const text = (dashSplit.length > 1 ? dashSplit.slice(1).join(' — ') : str)
            .replace(isoMatch ? isoMatch[0] : '', '')
            .replace(/\[source:.*\]/, '')
            .trim();
        return `<div style="display:flex;gap:10px;align-items:flex-start;margin-bottom:6px;">
            <div style="font-family:var(--mono);font-size:10.5px;font-weight:700;color:var(--purple-700);width:90px;flex-shrink:0;">${dateLabel}</div>
            <div style="font-size:12px;color:var(--text);">${text}</div>
        </div>`;
    }).join('<div style="margin-left:15px;color:var(--text-3);margin-bottom:4px;">↓</div>');

    const includedItems = gP(scope, 'includedItems', 'includedItems') || [];
    const includedItemsHtml = includedItems.map(item => `
        <tr style="border-bottom:1px solid var(--border-soft);">
            <td style="font-family:var(--mono);font-weight:700;padding:6px 0;">${gP(item, 'transactionRef', 'transaction Ref') || 'N/A'}</td>
            <td style="font-weight:700;padding:6px 0;">R${Number(item.amount || 0).toLocaleString('en-ZA', { minimumFractionDigits: 2 })}</td>
            <td style="padding:6px 0;"><span class="badge b-high">Disputed</span></td>
        </tr>
    `).join('');

    const excludedItems = gP(scope, 'excludedItems', 'excludedItems') || [];
    const excludedItemsHtml = excludedItems.map(item => `
        <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:8px;padding:8px 10px;margin-top:6px;">
            <div style="font-family:var(--mono);font-weight:700;color:#64748B;font-size:11px;">${gP(item, 'transactionRef', 'transaction Ref') || 'Excluded Item'}</div>
            <div style="font-size:11px;color:#475569;margin-top:2px;">${item.reason || ''}</div>
        </div>
    `).join('');

    const otpMentioned = gP(compromise, 'otpMentioned', 'otpMentioned', 'otp Mentioned');
    const inAppApproval = gP(compromise, 'inAppApprovalMade', 'inAppApproval Made', 'inAppApproval');
    const phoneWorking = gP(compromise, 'phoneWorkingNormally', 'phone Working Normally', 'phoneWorking');
    const infoProvided = gP(compromise, 'informationEntered', 'informationEntered', 'informationDisclosed', 'detailsDisclosed') || [];
    const hasCompromiseData = otpMentioned !== undefined || inAppApproval !== undefined || phoneWorking !== undefined || (infoProvided && infoProvided.length);

    // Badges were previously static text regardless of what the case actually
    // says - now genuinely derived from the real status/urgency/humanGate fields.
    const intakeComplete = obj.status === 'completed' || obj.status === 'complete';
    const urgencyLabel = urgency.level ? `${urgency.level.charAt(0).toUpperCase()}${urgency.level.slice(1)} Priority` : null;
    const reviewRequired = humanGate.required !== false; // default to showing it unless explicitly false

    return `
    <div class="agent-report-wrap" style="line-height:1.5;">
        <div style="border-bottom:2px solid var(--border-soft);padding-bottom:10px;margin-bottom:14px;">
            <div style="font-size:16px;font-weight:800;color:var(--purple-800);">🛡️ Case Intake</div>
            ${(caseRef || customerRef) ? `<div style="font-family:var(--mono);font-size:11px;color:var(--text-2);">${caseRef ? `Case ${caseRef}` : ''}${caseRef && customerRef ? ' · ' : ''}${customerRef ? `Customer Ref: ${customerRef}` : ''}</div>` : ''}
            <div style="display:flex;gap:6px;margin-top:8px;flex-wrap:wrap;">
                ${intakeComplete ? '<span class="badge b-low">🟢 Intake Complete</span>' : ''}
                ${urgencyLabel ? `<span class="badge ${urgency.level === 'high' ? 'b-high' : urgency.level === 'medium' ? 'b-medium' : 'b-low'}">🟣 ${urgencyLabel}</span>` : ''}
                ${reviewRequired ? '<span class="badge b-medium">👤 Human Review Required</span>' : ''}
            </div>
        </div>

        <div style="margin-bottom:14px;">
            <div style="background:var(--purple-50);border:1px solid #E9D8FD;border-radius:10px;padding:12px;">
                <div style="font-size:10px;font-weight:800;text-transform:uppercase;color:var(--purple-700);">💰 Reported Exposure</div>
                <div style="font-size:20px;font-weight:800;color:var(--purple-900);margin-top:2px;">${totalAmt}</div>
                <div style="font-size:11px;color:var(--text-2);margin-top:4px;">Disputed Items: <b>${gP(reportedEvent, 'reportedCount', 'reported Count') || 0}</b></div>
            </div>
        </div>

        <div style="margin-bottom:14px;">
            <div style="font-size:11px;font-weight:800;text-transform:uppercase;color:var(--purple-700);margin-bottom:4px;">👤 Customer Profile</div>
            <div style="font-size:12px;background:#F8FAFC;border:1px solid #E2E8F0;padding:8px 10px;border-radius:8px;">
                <b>${gP(customer, 'fullName') || 'N/A'}</b> (${gP(customer, 'verifiedContact', 'verified Contact') || ''}) · Card Ending <b>${gP(customer, 'cardEnding') || ''}</b>
            </div>
        </div>

        <div style="margin-bottom:14px;">
            <div style="font-size:11px;font-weight:800;text-transform:uppercase;color:var(--purple-700);margin-bottom:4px;">🚨 Customer Position Statement</div>
            <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:8px;padding:10px;font-size:12px;color:#334155;line-height:1.55;">
                ${formatAsParagraphs(gP(reportedEvent, 'customerPosition', 'customer Position')) || 'No customer position statement logged.'}
            </div>
        </div>

        ${hasCompromiseData ? `
        <div style="margin-bottom:14px;">
            <div style="font-size:11px;font-weight:800;text-transform:uppercase;color:var(--purple-700);margin-bottom:6px;">🎣 Suspected Compromise Event</div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;font-size:11px;">
                <div style="background:#F1F5F9;padding:6px 8px;border-radius:6px;"><b>OTP Mentioned:</b> ${otpMentioned ? '🟡 Yes' : '🟢 No'}</div>
                <div style="background:#F1F5F9;padding:6px 8px;border-radius:6px;"><b>In-App Approval:</b> ${inAppApproval ? '🟡 Yes' : '🟢 No'}</div>
                <div style="background:#F1F5F9;padding:6px 8px;border-radius:6px;"><b>Phone Working:</b> ${phoneWorking ? '🟢 Yes' : '🔴 No'}</div>
                <div style="background:#F1F5F9;padding:6px 8px;border-radius:6px;"><b>Details Disclosed:</b> ${infoProvided.length ? infoProvided.join(', ') : 'None'}</div>
            </div>
        </div>` : ''}

        ${knownTimeline.length ? `
        <div style="margin-bottom:14px;">
            <div style="font-size:11px;font-weight:800;text-transform:uppercase;color:var(--purple-700);margin-bottom:6px;">🕒 Incident Timeline</div>
            <div style="background:#FAF5FF;border:1px solid #E9D8FD;border-radius:10px;padding:10px;">${timelineHtml}</div>
        </div>` : ''}

        <div style="margin-bottom:14px;">
            <div style="font-size:11px;font-weight:800;text-transform:uppercase;color:var(--purple-700);margin-bottom:6px;">📋 Disputed Case Scope</div>
            <table style="width:100%;border-collapse:collapse;font-size:12px;margin-bottom:6px;">
                <thead>
                    <tr style="border-bottom:1px solid var(--border);text-align:left;color:var(--text-3);font-size:10px;text-transform:uppercase;">
                        <th style="padding:4px 0;">Reference</th>
                        <th style="padding:4px 0;">Amount</th>
                        <th style="padding:4px 0;">Status</th>
                    </tr>
                </thead>
                <tbody>${includedItemsHtml}</tbody>
            </table>
            ${excludedItemsHtml}
        </div>

        <div style="margin-bottom:14px;">
            <div style="font-size:11px;font-weight:800;text-transform:uppercase;color:var(--purple-700);margin-bottom:6px;">🔒 Containment Actions Already Completed</div>
            ${containment.map(c => `
                <div style="display:flex;justify-content:space-between;align-items:center;background:#F0FDF4;border:1px solid #BBF7D0;padding:6px 10px;border-radius:6px;margin-bottom:4px;font-size:11.5px;color:#166534;">
                    <span><b>Action:</b> ${c.action}</span>
                    <span>🟢 Completed</span>
                </div>
            `).join('')}
        </div>

        <div style="background:#FFFBEB;border:1px solid #FDE68A;border-radius:10px;padding:12px;">
            <div style="font-size:11px;font-weight:800;text-transform:uppercase;color:#92400E;">⚠️ Material Gaps & Recommendation</div>
            <ul style="margin:4px 0 0;padding-left:16px;font-size:12px;color:#78350F;line-height:1.5;">
                ${gaps.map(g => `<li>${g}</li>`).join('')}
            </ul>
            <div style="margin-top:8px;padding-top:8px;border-top:1px dashed #FCD34D;font-size:12px;font-weight:700;color:#92400E;">
                Recommendation: <b>${rec.action || 'Continue'}</b> — ${rec.reason || ''}
            </div>
        </div>
    </div>`;
}

/* ------------------------------------------------------------
   2. RECOGNITION CHECK AGENT RENDERER
   ------------------------------------------------------------ */
function renderRecognitionCheckReport(obj) {
    const res = gP(obj, 'recognitionResult', 'recognition Result');
    const conf = gP(obj, 'confidence') || {};
    const window = gP(obj, 'historyWindow', 'historyWindow') || {};
    const merchantChecks = gP(obj, 'merchantChecks', 'merchant Checks') || [];
    const rec = gP(obj, 'recommendation') || {};
    const gaps = gP(obj, 'materialGaps', 'material Gaps') || [];

    // Previously a binary check that treated ANYTHING other than the exact
    // string 'no-match' as "Recognised Subscription" - including a genuinely
    // missing/indeterminate result, which silently claimed a positive match
    // the agent never actually made. Now maps every real value explicitly and
    // falls back to a visibly-uncertain state instead of a false "Recognised".
    const resBadge = res === 'recognised' || res === 'recognized' || res === 'match'
        ? '<span class="badge b-low">🟢 Recognised Subscription</span>'
        : res === 'no-match'
            ? '<span class="badge b-high">🔴 No Match — Unrecognised</span>'
            : res
                ? `<span class="badge b-medium">🟡 ${String(res).replace(/-/g, ' ')}</span>`
                : '<span class="badge b-medium">🟡 Result not yet determined</span>';

    const hasWindow = window.from || window.to || gP(window, 'transactionRowsReviewed', 'transactionRows Reviewed');

    return `
    <div class="agent-report-wrap" style="line-height:1.5;">
        <div style="border-bottom:2px solid var(--border-soft);padding-bottom:10px;margin-bottom:14px;">
            <div style="font-size:16px;font-weight:800;color:var(--purple-800);">🔍 Recognition Check</div>
            <div style="margin-top:6px;">${resBadge}</div>
        </div>

        <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:10px;padding:12px;margin-bottom:14px;">
            <div style="font-size:11px;font-weight:800;text-transform:uppercase;color:var(--purple-700);">Statement History Basis</div>
            <div style="font-size:12px;color:#334155;margin-top:4px;">${conf.basis || 'N/A'}</div>
            ${hasWindow ? `
            <div style="font-size:11px;color:var(--text-3);margin-top:6px;">
                Window: <b>${window.from || '—'}</b> to <b>${window.to || '—'}</b> (${gP(window, 'transactionRowsReviewed', 'transactionRows Reviewed') || 0} rows evaluated)
            </div>` : ''}
        </div>

        <div style="margin-bottom:14px;">
            <div style="font-size:11px;font-weight:800;text-transform:uppercase;color:var(--purple-700);margin-bottom:6px;">Merchant Evaluation Details</div>
            ${merchantChecks.map(m => {
        const valComp = gP(m, 'valueComparedWithPriorMaximum', 'valueCompared With PriorMaximum') || {};
        return `
                <div style="background:#fff;border:1px solid var(--border);border-radius:8px;padding:10px;margin-bottom:8px;">
                    <div style="font-size:12px;font-weight:700;">${m.merchant} <span style="font-family:var(--mono);font-size:10px;color:var(--text-3);">(${m.descriptor})</span></div>
                    <div style="font-size:11.5px;color:var(--text-2);margin-top:4px;">${m.reason}</div>
                    ${valComp.currentAmount ? `
                    <div style="font-size:10.5px;color:var(--purple-700);margin-top:4px;">
                        Current Amount: <b>R${valComp.currentAmount}</b> vs Prior Max: <b>R${valComp.priorMaximum}</b> (${valComp.multiple}x variance)
                    </div>` : ''}
                </div>`;
    }).join('')}
        </div>

        ${gaps.length ? `
        <div style="background:#FFFBEB;border:1px solid #FDE68A;border-radius:10px;padding:10px;margin-bottom:14px;">
            <div style="font-size:10px;font-weight:800;text-transform:uppercase;color:#92400E;">Material Gaps</div>
            <ul style="margin:4px 0 0;padding-left:16px;font-size:11.5px;color:#78350F;">
                ${gaps.map(g => `<li>${g}</li>`).join('')}
            </ul>
        </div>` : ''}

        <div style="background:var(--purple-50);border:1px solid #E9D8FD;border-radius:10px;padding:12px;">
            <div style="font-size:11px;font-weight:800;color:var(--purple-800);">Recommendation</div>
            <div style="font-size:12px;color:var(--text-2);margin-top:2px;">${rec.action ? `<b>${String(rec.action).replace(/-/g, " ")}</b>: ` : ""}${rec.reason || "No recommendation recorded yet."}</div>
        </div>
    </div>`;
}

/* ------------------------------------------------------------
   3. FRAUD ASSESSMENT AGENT RENDERER
   ------------------------------------------------------------ */
function renderFraudAssessmentReport(obj) {
    // NOTE: unlike the other 6 renderers below, this one has not yet been
    // verified against a real completed Fraud Assessment response - the terminal
    // log used to fix the others started mid-run, after Fraud Assessment had
    // already completed. Field names here are best-effort guesses with wide
    // fallbacks, degrading to the generic renderer's safe fields rather than
    // showing "undefined"/"null" when a guess is wrong. Replace with confirmed
    // field names once a completed Fraud Assessment log is available.
    const classification = gP(obj, 'classification', 'fraudClassification') || {};
    const compromise = gP(obj, 'compromiseExtent', 'compromise Extent', 'extentOfCompromise') || {};
    const containment = gP(obj, 'containment', 'containmentRecommendation') || {};
    const bankControl = gP(obj, 'bankControlAssessment', 'bank ControlAssessment', 'processAssessment');
    const rec = gP(obj, 'recommendation') || {};
    const materialGaps = gP(obj, 'materialGaps', 'material Gaps') || [];

    const fraudType = gP(classification, 'fraudType', 'fraudType', 'family', 'method');
    const channel = gP(classification, 'channel');
    const recActions = gP(containment, 'recommendedActions', 'recommendedActions', 'actions') || [];
    const compromiseText = gP(compromise, 'plainEnglish', 'plainEnglish', 'description', 'summary');

    return `
    <div class="agent-report-wrap" style="line-height:1.5;">
        <div style="border-bottom:2px solid var(--border-soft);padding-bottom:10px;margin-bottom:14px;">
            <div style="font-size:16px;font-weight:800;color:var(--purple-800);">🚨 Fraud Assessment</div>
            ${(fraudType || channel) ? `<div style="font-size:12px;font-weight:700;color:var(--red-700);margin-top:2px;">
                ${fraudType ? `Type: ${fraudType}` : ''}${fraudType && channel ? ' · ' : ''}${channel ? `Channel: ${channel}` : ''}
            </div>` : ''}
        </div>

        ${compromiseText ? `
        <div style="background:#FFF5F5;border:1px solid #FED7D7;border-radius:10px;padding:12px;margin-bottom:14px;">
            <div style="font-size:11px;font-weight:800;text-transform:uppercase;color:var(--red-700);">Compromise Extent${compromise.label ? ` (${compromise.label})` : ''}</div>
            <div style="font-size:12px;color:#742A2A;margin-top:4px;">${compromiseText}</div>
        </div>` : ''}

        ${recActions.length ? `
        <div style="margin-bottom:14px;">
            <div style="font-size:11px;font-weight:800;text-transform:uppercase;color:var(--purple-700);margin-bottom:6px;">Containment Actions</div>
            ${recActions.map(a => `
                <div style="display:flex;justify-content:space-between;background:#F0FDF4;border:1px solid #BBF7D0;padding:6px 10px;border-radius:6px;margin-bottom:4px;font-size:11.5px;color:#166534;">
                    <span><b>Action:</b> ${typeof a === 'string' ? a : (a.action || renderJsonAsProse(a))}</span>
                    ${a.state ? `<span>🟢 ${a.state}</span>` : ''}
                </div>
            `).join('')}
        </div>` : ''}

        ${bankControl ? `
        <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:10px;padding:12px;margin-bottom:14px;">
            <div style="font-size:11px;font-weight:800;text-transform:uppercase;color:var(--text-3);">Bank Control Assessment</div>
            <div style="font-size:12px;color:var(--text);margin-top:4px;line-height:1.5;">${bankControl}</div>
        </div>` : ''}

        ${materialGaps.length ? `
        <div style="margin-bottom:14px;">
            <div style="font-size:11px;font-weight:800;text-transform:uppercase;color:var(--purple-700);margin-bottom:6px;">Material Gaps</div>
            <ul style="margin:0;padding-left:18px;">${materialGaps.map(g => `<li style="font-size:12px;color:var(--text-2);line-height:1.6;margin-bottom:4px;">${g}</li>`).join('')}</ul>
        </div>` : ''}

        <div style="background:var(--purple-50);border:1px solid #E9D8FD;border-radius:10px;padding:12px;">
            <div style="font-size:11px;font-weight:800;color:var(--purple-800);">Recommendation</div>
            <div style="font-size:12px;color:var(--text-2);margin-top:2px;">${rec.action ? `<b>${String(rec.action).replace(/-/g, " ")}</b>: ` : ""}${rec.reason || obj.reason || "No recommendation recorded yet."}</div>
        </div>
    </div>`;
}

/* ------------------------------------------------------------
   4. FUNDS TRACE AGENT RENDERER
   ------------------------------------------------------------ */
function renderFundsTraceReport(obj) {
    const items = gP(obj, 'items') || [];
    const counterparties = gP(obj, 'counterparties') || [];
    const timeCriticality = gP(obj, 'timeCriticalityRanking', 'timeCriticalityRanking') || [];
    const recPosition = gP(obj, 'recoveryPosition', 'recoveryPosition') || {};
    const rec = gP(obj, 'recommendation') || {};

    const potentiallyRecoverable = gP(recPosition, 'potentiallyRecoverable', 'potentially Recoverable');

    return `
    <div class="agent-report-wrap" style="line-height:1.5;">
        <div style="border-bottom:2px solid var(--border-soft);padding-bottom:10px;margin-bottom:14px;">
            <div style="font-size:16px;font-weight:800;color:var(--purple-800);">🌐 Funds Trace</div>
            <div style="font-size:12px;color:var(--text-2);margin-top:2px;">
                Potentially Recoverable: <b>R${Number(potentiallyRecoverable || 0).toLocaleString('en-ZA', { minimumFractionDigits: 2 })} ${recPosition.currency || 'ZAR'}</b>
                ${recPosition.heldOrRestrictable ? ` · Held/Restrictable: <b>R${Number(recPosition.heldOrRestrictable).toLocaleString('en-ZA', { minimumFractionDigits: 2 })}</b>` : ''}
                ${recPosition.confirmedGone ? ` · Confirmed Gone: <b>R${Number(recPosition.confirmedGone).toLocaleString('en-ZA', { minimumFractionDigits: 2 })}</b>` : ''}
            </div>
        </div>

        ${items.length ? `
        <div style="margin-bottom:14px;">
            <div style="font-size:11px;font-weight:800;text-transform:uppercase;color:var(--purple-700);margin-bottom:6px;">Card Scheme Movement Paths</div>
            ${items.map(item => {
        const movPath = gP(item, 'movementPath', 'movementPath') || [];
        return `
                <div style="background:#fff;border:1px solid var(--border);border-radius:8px;padding:10px;margin-bottom:8px;">
                    <div style="font-family:var(--mono);font-size:11px;font-weight:700;">${gP(item, 'transactionRef', 'transaction Ref') || 'Item'}${item.arn ? ` (ARN: ${item.arn})` : ''}</div>
                    ${item.amount ? `<div style="font-size:12px;font-weight:700;color:var(--purple-700);margin-top:2px;">R${Number(item.amount).toLocaleString('en-ZA', { minimumFractionDigits: 2 })}</div>` : ''}
                    ${movPath.length ? `<div style="font-size:11px;color:var(--text-2);margin-top:4px;">Path: ${movPath.join(' ➔ ')}</div>` : ''}
                </div>`;
    }).join('')}
        </div>` : '<div style="font-size:11.5px;color:var(--text-3);font-style:italic;margin-bottom:14px;">No movement items traced yet.</div>'}

        ${counterparties.length ? `
        <div style="margin-bottom:14px;">
            <div style="font-size:11px;font-weight:800;text-transform:uppercase;color:var(--purple-700);margin-bottom:6px;">Identified Counterparties</div>
            <div style="display:flex;gap:6px;flex-wrap:wrap;">
                ${counterparties.map(c => `
                    <span style="background:#F1F5F9;border:1px solid #CBD5E1;padding:4px 10px;border-radius:6px;font-size:11.5px;font-weight:600;">
                        ${c.name || c.who || 'Counterparty'}${c.type || c.class ? ` (${c.type || c.class})` : ''}
                    </span>
                `).join('')}
            </div>
        </div>` : ''}

        ${timeCriticality.length ? `
        <div style="margin-bottom:14px;">
            <div style="font-size:11px;font-weight:800;text-transform:uppercase;color:var(--purple-700);margin-bottom:6px;">Time-Criticality Ranking</div>
            ${timeCriticality.map((t, i) => {
        // Confirmed real fields: counterpartyRef, rank, reason - the old
        // guesses (who/counterparty/window/recoveryWindow) never matched,
        // so this fell through to a raw JSON.stringify dump every time.
        const ref = t.counterpartyRef || t.who || t.counterparty;
        const rank = t.rank != null ? t.rank : (i + 1);
        const reason = t.reason || '';
        return `
                <div style="background:#FFFBEB;border:1px solid #FDE68A;padding:8px 10px;border-radius:6px;margin-bottom:6px;">
                    <div style="font-size:11.5px;font-weight:700;color:#92400E;">#${rank}${ref ? ` ${ref}` : ''}</div>
                    ${reason ? `<div style="font-size:11px;color:#78350F;margin-top:3px;line-height:1.5;">${reason}</div>` : ''}
                </div>`;
    }).join('')}
        </div>` : ''}

        <div style="background:var(--purple-50);border:1px solid #E9D8FD;border-radius:10px;padding:12px;">
            <div style="font-size:11px;font-weight:800;color:var(--purple-800);">Recommendation</div>
            <div style="font-size:12px;color:var(--text-2);margin-top:2px;">${rec.action ? `<b>${String(rec.action).replace(/-/g, " ")}</b>: ` : ""}${rec.reason || obj.reason || "No recommendation recorded yet."}</div>
        </div>
    </div>`;
}

/* ------------------------------------------------------------
   5. TRANSACTION CLASSIFICATION AGENT RENDERER
   ------------------------------------------------------------ */
function renderTransactionClassificationReport(obj) {
    const rail = gP(obj, 'rail') || 'Visa Card Scheme';
    const items = gP(obj, 'items') || [];
    const summary = gP(obj, 'summary') || {};
    const rec = gP(obj, 'recommendation') || {};

    return `
    <div class="agent-report-wrap" style="line-height:1.5;">
        <div style="border-bottom:2px solid var(--border-soft);padding-bottom:10px;margin-bottom:14px;">
            <div style="font-size:16px;font-weight:800;color:var(--purple-800);">💳 Transaction Classification</div>
            <div style="font-size:12px;color:var(--text-2);margin-top:2px;">
                Rail: <b>${rail}</b> · Condition: <b>${gP(summary, 'schemeCondition', 'schemeCondition') || 'Visa 10.4'}</b>
            </div>
        </div>

        <div style="margin-bottom:14px;">
            <div style="font-size:11px;font-weight:800;text-transform:uppercase;color:var(--purple-700);margin-bottom:6px;">Scheme Rule & ECI Analysis</div>
            ${items.map(item => {
        const recData = gP(item, 'recoverability') || {};
        return `
                <div style="background:#fff;border:1px solid var(--border);border-radius:8px;padding:10px;margin-bottom:8px;">
                    <div style="display:flex;justify-content:space-between;align-items:center;">
                        <span style="font-family:var(--mono);font-size:11px;font-weight:700;">${gP(item, 'transactionRef', 'transactionRef')} — ${item.merchant}</span>
                        <span class="badge b-low">ECI ${gP(item, 'eciPresented', 'eciPresented')}</span>
                    </div>
                    <div style="font-size:12px;color:var(--text);margin-top:6px;">${gP(item, 'plainEnglish', 'plainEnglish') || ''}</div>
                    <div style="font-size:10.5px;color:var(--text-3);margin-top:4px;">
                        3DS Status: <b>${gP(item, 'threeDSStatus', 'threeDSStatus')}</b> · CAVV Present: <b>${gP(item, 'cavvPresent', 'cavvPresent') ? 'Yes' : 'No'}</b> · Filing Deadline: <b>${gP(recData, 'filingDeadline', 'filing Deadline') || 'N/A'}</b>
                    </div>
                </div>`;
    }).join('')}
        </div>

        <div style="background:var(--purple-50);border:1px solid #E9D8FD;border-radius:10px;padding:12px;">
            <div style="font-size:11px;font-weight:800;color:var(--purple-800);">Recommendation</div>
            <div style="font-size:12px;color:var(--text-2);margin-top:2px;">${rec.action ? `<b>${String(rec.action).replace(/-/g, " ")}</b>: ` : ""}${rec.reason || "No recommendation recorded yet."}</div>
        </div>
    </div>`;
}

/* ------------------------------------------------------------
   6. SHADOW CREDIT AGENT RENDERER
   ------------------------------------------------------------ */
function renderShadowCreditReport(obj) {
    const eligibility = gP(obj, 'eligibilityAssessment', 'eligibility Assessment') || {};
    const valueAuth = gP(obj, 'valueAndAuthority', 'valueAndAuthority') || {};
    const rec = gP(obj, 'recommendation') || {};
    const counterArg = gP(obj, 'counterArgument') || {};

    const grossNegEngaged = gP(eligibility, 'grossNegligenceExclusionEngaged', 'gross Negligence Exclusion Engaged');
    const grossNegReason = gP(eligibility, 'grossNegligenceReason', 'gross Negligence Rea son');

    return `
    <div class="agent-report-wrap" style="line-height:1.5;">
        <div style="border-bottom:2px solid var(--border-soft);padding-bottom:10px;margin-bottom:14px;">
            <div style="font-size:16px;font-weight:800;color:var(--purple-800);">🏦 Shadow Credit</div>
            <div style="font-size:12px;font-weight:700;color:var(--green-700);margin-top:2px;">
                Refund Decision: ${gP(rec, 'decision') || 'Approve Provisional Refund'} (R${gP(rec, 'refundAmount') ? Number(gP(rec, 'refundAmount')).toLocaleString('en-ZA', { minimumFractionDigits: 2 }) : '0'})
            </div>
        </div>

        <div style="background:#F0FDF4;border:1px solid #BBF7D0;border-radius:10px;padding:12px;margin-bottom:14px;">
            <div style="font-size:11px;font-weight:800;text-transform:uppercase;color:#166534;">Eligibility Status</div>
            <div style="font-size:12px;color:#15803D;margin-top:2px;">
                Eligible: <b>${eligibility.eligible ? 'Yes' : 'No'}</b> · Gross Negligence: <b>${grossNegEngaged ? 'Engaged' : 'Not Engaged'}</b>
            </div>
            <div style="font-size:11.5px;color:#166534;margin-top:4px;">${grossNegReason || ''}</div>
        </div>

        ${counterArg.position ? `
        <div style="background:#FFFBEB;border:1px solid #FDE68A;border-radius:10px;padding:12px;margin-bottom:14px;">
            <div style="font-size:11px;font-weight:800;text-transform:uppercase;color:#92400E;">Counter Argument & Scheme Response</div>
            <div style="font-size:11.5px;color:#78350F;margin-top:2px;">${counterArg.position}</div>
            <div style="font-size:11.5px;color:#92400E;margin-top:4px;font-weight:600;">Response: ${counterArg.response || ''}</div>
        </div>` : ''}

        <div style="background:var(--purple-50);border:1px solid #E9D8FD;border-radius:10px;padding:12px;">
            <div style="font-size:11px;font-weight:800;color:var(--purple-800);">Authority & Decision</div>
            <div style="font-size:12px;color:var(--text-2);margin-top:2px;">Policy Band ${gP(valueAuth, 'policyBand', 'policyBand') || 1} · Required Role: <b>${gP(valueAuth, 'approvalRole', 'approval Role') || 'Investigator'}</b></div>
        </div>
    </div>`;
}

/* ------------------------------------------------------------
   7. CHARGEBACK PREPARATION AGENT RENDERER
   ------------------------------------------------------------ */
function renderChargebackPreparationReport(obj) {
    const chargebacks = gP(obj, 'chargebacks') || [];
    const summary = gP(obj, 'summary') || {};
    const rec = gP(obj, 'recommendation') || {};

    const chargebackTotal = gP(summary, 'chargebackTotal', 'chargeback Total') || {};

    return `
    <div class="agent-report-wrap" style="line-height:1.5;">
        <div style="border-bottom:2px solid var(--border-soft);padding-bottom:10px;margin-bottom:14px;">
            <div style="font-size:16px;font-weight:800;color:var(--purple-800);">📋 Chargeback Preparation</div>
            <div style="font-size:12px;color:var(--text-2);margin-top:2px;">
                Packs Prepared: <b>${gP(summary, 'chargebackCount') || 0}</b> · Total Value: <b>R${Number(chargebackTotal.amount || 0).toLocaleString('en-ZA', { minimumFractionDigits: 2 })}</b>
            </div>
        </div>

        <div style="margin-bottom:14px;">
            <div style="font-size:11px;font-weight:800;text-transform:uppercase;color:var(--purple-700);margin-bottom:6px;">Filing Packs Prepared</div>
            ${chargebacks.map(cb => `
                <div style="background:#fff;border:1px solid var(--border);border-radius:8px;padding:10px;margin-bottom:8px;">
                    <div style="display:flex;justify-content:space-between;align-items:center;">
                        <span style="font-family:var(--mono);font-size:11px;font-weight:700;">${gP(cb, 'chargebackRef', 'chargebackRef')} (${cb.merchant})</span>
                        <span class="badge b-low">${gP(cb, 'packStatus', 'packStatus') || 'Prepared'}</span>
                    </div>
                    <div style="font-size:12px;font-weight:700;color:var(--purple-700);margin-top:2px;">R${Number(cb.amount || 0).toLocaleString('en-ZA', { minimumFractionDigits: 2 })} (${cb.scheme} ${cb.condition})</div>
                    <div style="font-size:11px;color:var(--text-3);margin-top:4px;">
                        Filing Deadline: <b>${gP(cb, 'filingDeadline', 'filing Deadline')}</b> (${gP(cb, 'daysRemainingAtPreparation', 'days RemainingAtPreparati on')} days remaining)
                    </div>
                    <div style="margin-top:6px;font-size:11px;">
                        <b>Evidence Included:</b> ${(gP(cb, 'evidencePack', 'evidencePack') || []).length} required items attached
                    </div>
                </div>
            `).join('')}
        </div>

        <div style="background:var(--purple-50);border:1px solid #E9D8FD;border-radius:10px;padding:12px;">
            <div style="font-size:11px;font-weight:800;color:var(--purple-800);">Recommendation</div>
            <div style="font-size:12px;color:var(--text-2);margin-top:2px;">${rec.action ? `<b>${String(rec.action).replace(/-/g, " ")}</b>: ` : ""}${rec.reason || "No recommendation recorded yet."}</div>
        </div>
    </div>`;
}

/* ------------------------------------------------------------
   RECALL & REPATRIATION AGENT RENDERER
   ------------------------------------------------------------ */
function renderRecallRepatriationReport(obj) {
    const recallItems = gP(obj, 'recallItems') || [];
    const caspHolds = gP(obj, 'caspHoldRequests', 'caspHoldRequests') || [];
    const bankRequests = gP(obj, 'counterpartyBankRequests', 'counterpartyBankRequests') || [];
    const blocking = gP(obj, 'blockingActionsOnFNB', 'blockingActionsOnFNB') || [];
    const recPosition = gP(obj, 'recoveryPosition', 'recoveryPosition') || {};
    const rec = gP(obj, 'recommendation') || {};
    const routeOwner = gP(obj, 'routeOwner', 'routeOwner');

    const potentiallyRecoverable = gP(recPosition, 'potentiallyRecoverable', 'potentially Recoverable');

    return `
    <div class="agent-report-wrap" style="line-height:1.5;">
        <div style="border-bottom:2px solid var(--border-soft);padding-bottom:10px;margin-bottom:14px;">
            <div style="font-size:16px;font-weight:800;color:var(--purple-800);">📨 Recall & Repatriation</div>
            <div style="font-size:12px;color:var(--text-2);margin-top:2px;">
                Potentially Recoverable: <b>R${Number(potentiallyRecoverable || 0).toLocaleString('en-ZA', { minimumFractionDigits: 2 })} ${recPosition.currency || 'ZAR'}</b>
                ${routeOwner ? ` · Route owner: <b>${String(routeOwner).replace(/-/g, ' ')}</b>` : ''}
            </div>
        </div>

        ${recallItems.length ? `
        <div style="margin-bottom:14px;">
            <div style="font-size:11px;font-weight:800;text-transform:uppercase;color:var(--purple-700);margin-bottom:6px;">Recall Requests</div>
            ${recallItems.map(r => `
                <div style="background:#fff;border:1px solid var(--border);border-radius:8px;padding:10px;margin-bottom:8px;font-size:11.5px;">
                    <div style="font-family:var(--mono);font-weight:700;">${r.transactionRef || r.reference || 'Item'}</div>
                    <div style="color:var(--text-2);margin-top:4px;">${r.status || r.reason || renderJsonAsProse(r)}</div>
                </div>`).join('')}
        </div>` : '<div style="font-size:11.5px;color:var(--text-3);font-style:italic;margin-bottom:14px;">No recall requests raised yet.</div>'}

        ${caspHolds.length ? `
        <div style="margin-bottom:14px;">
            <div style="font-size:11px;font-weight:800;text-transform:uppercase;color:var(--purple-700);margin-bottom:6px;">CASP Hold Requests</div>
            ${caspHolds.map(h => `<div style="background:#FFFBEB;border:1px solid #FDE68A;padding:8px 10px;border-radius:6px;margin-bottom:4px;font-size:11.5px;color:#92400E;">${h.provider || h.name || renderJsonAsProse(h)}</div>`).join('')}
        </div>` : ''}

        ${bankRequests.length ? `
        <div style="margin-bottom:14px;">
            <div style="font-size:11px;font-weight:800;text-transform:uppercase;color:var(--purple-700);margin-bottom:6px;">Counterparty Bank Requests</div>
            ${bankRequests.map(b => `<div style="background:#F1F5F9;border:1px solid #CBD5E1;padding:8px 10px;border-radius:6px;margin-bottom:4px;font-size:11.5px;">${b.bank || b.institution || renderJsonAsProse(b)}</div>`).join('')}
        </div>` : ''}

        ${blocking.length ? `
        <div style="margin-bottom:14px;">
            <div style="font-size:11px;font-weight:800;text-transform:uppercase;color:var(--red-700);margin-bottom:6px;">Blocking Actions on FNB</div>
            ${blocking.map(b => `<div style="background:#FFF5F5;border:1px solid #FED7D7;padding:8px 10px;border-radius:6px;margin-bottom:4px;font-size:11.5px;color:#742A2A;">${typeof b === 'string' ? b : renderJsonAsProse(b)}</div>`).join('')}
        </div>` : ''}

        <div style="background:var(--purple-50);border:1px solid #E9D8FD;border-radius:10px;padding:12px;">
            <div style="font-size:11px;font-weight:800;color:var(--purple-800);">Recommendation</div>
            <div style="font-size:12px;color:var(--text-2);margin-top:2px;">${rec.action ? `<b>${String(rec.action).replace(/-/g, " ")}</b>: ` : ""}${rec.reason || obj.reason || "No recommendation recorded yet."}</div>
        </div>
    </div>`;
}

/* ------------------------------------------------------------
   OBLIGATION CHECK AGENT RENDERER
   Verified against a real completed response (20 Aug run) - the
   5-instrument obligations array is the centrepiece here.
   ------------------------------------------------------------ */
function renderObligationCheckReport(obj) {
    const obligations = gP(obj, 'obligations') || [];
    const summary = gP(obj, 'summary') || {};
    const rec = gP(obj, 'recommendation') || {};
    const commsRestriction = gP(obj, 'communicationRestriction', 'communicationRestriction') || {};
    const voluntaryComplaint = gP(obj, 'voluntaryCriminalComplaint', 'voluntaryCriminalComplaint') || {};
    const openEscalations = gP(obj, 'openEscalations', 'openEscalations') || [];

    const statusStyle = {
        'owed': { bg: '#FFF5F5', border: '#FED7D7', text: '#742A2A', badge: 'b-high', label: 'Owed' },
        'verify-first': { bg: '#FFFBEB', border: '#FDE68A', text: '#92400E', badge: 'b-medium', label: 'Verify First' },
        'not-owed': { bg: '#F0FDF4', border: '#BBF7D0', text: '#166534', badge: 'b-low', label: 'Not Owed' },
        'not-in-force': { bg: '#F8FAFC', border: '#E2E8F0', text: 'var(--text-3)', badge: 'b-neutral', label: 'Not In Force' }
    };

    return `
    <div class="agent-report-wrap" style="line-height:1.5;">
        <div style="border-bottom:2px solid var(--border-soft);padding-bottom:10px;margin-bottom:14px;">
            <div style="font-size:16px;font-weight:800;color:var(--purple-800);">⚖️ Obligation Check</div>
            <div style="font-size:12px;color:var(--text-2);margin-top:2px;">
                ${summary.owed || 0} owed · ${summary.verifyFirst || 0} verify-first · ${summary.notOwed || 0} not owed · ${summary.notInForce || 0} not in force
            </div>
        </div>

        <div style="margin-bottom:14px;">
            <div style="font-size:11px;font-weight:800;text-transform:uppercase;color:var(--purple-700);margin-bottom:6px;">Five Instruments</div>
            ${obligations.map(o => {
        const st = statusStyle[o.status] || statusStyle['not-in-force'];
        return `
                <div style="background:${st.bg};border:1px solid ${st.border};border-radius:8px;padding:10px 12px;margin-bottom:8px;">
                    <div style="display:flex;justify-content:space-between;align-items:center;">
                        <span style="font-weight:700;font-size:12.5px;color:${st.text};">${o.instrument}${o.provision ? ` — ${o.provision}` : ''}</span>
                        <span class="badge ${st.badge}">${st.label}</span>
                    </div>
                    <div style="font-size:11.5px;color:${st.text};margin-top:6px;line-height:1.6;">${o.reason || ''}</div>
                    ${o.timeRemainingDays != null ? `<div style="font-size:10.5px;color:${st.text};margin-top:4px;font-weight:600;">${o.timeRemainingDays} days remaining</div>` : ''}
                    ${o.humanRole ? `<div style="font-size:10.5px;color:var(--text-3);margin-top:4px;">Owner: ${String(o.humanRole).replace(/-/g, ' ')}</div>` : ''}
                </div>`;
    }).join('')}
        </div>

        ${commsRestriction.active || commsRestriction.basis ? `
        <div style="background:${commsRestriction.active ? '#FFF5F5' : '#F8FAFC'};border:1px solid ${commsRestriction.active ? '#FED7D7' : '#E2E8F0'};border-radius:10px;padding:12px;margin-bottom:14px;">
            <div style="font-size:11px;font-weight:800;text-transform:uppercase;color:${commsRestriction.active ? 'var(--red-700)' : 'var(--text-3)'};">Communication Restriction ${commsRestriction.active ? '— Active' : '— Not Active'}</div>
            <div style="font-size:12px;color:var(--text);margin-top:4px;line-height:1.5;">${commsRestriction.basis || ''}</div>
        </div>` : ''}

        ${voluntaryComplaint.status ? `
        <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:10px;padding:12px;margin-bottom:14px;">
            <div style="font-size:11px;font-weight:800;text-transform:uppercase;color:var(--text-3);">Voluntary Criminal Complaint (SAPS)</div>
            <div style="font-size:12px;color:var(--text);margin-top:4px;">Status: <b>${String(voluntaryComplaint.status).replace(/-/g, ' ')}</b></div>
            <div style="font-size:11.5px;color:var(--text-2);margin-top:4px;line-height:1.5;">${voluntaryComplaint.reason || ''}</div>
        </div>` : ''}

        ${openEscalations.length ? `
        <div style="margin-bottom:14px;">
            <div style="font-size:11px;font-weight:800;text-transform:uppercase;color:var(--red-700);margin-bottom:6px;">Open Escalations</div>
            <ul style="margin:0;padding-left:18px;">${openEscalations.map(e => `<li style="font-size:12px;color:var(--text-2);line-height:1.6;margin-bottom:4px;">${e}</li>`).join('')}</ul>
        </div>` : ''}

        <div style="background:var(--purple-50);border:1px solid #E9D8FD;border-radius:10px;padding:12px;">
            <div style="font-size:11px;font-weight:800;color:var(--purple-800);">Recommendation</div>
            <div style="font-size:12px;color:var(--text-2);margin-top:2px;">${rec.action ? `<b>${String(rec.action).replace(/-/g, " ")}</b>: ` : ""}${rec.reason || "No recommendation recorded yet."}</div>
        </div>
    </div>`;
}

/* ------------------------------------------------------------
   8. GENERIC FALLBACK RENDERER
   ------------------------------------------------------------ */
// Converts camelCase / kebab-case / snake_case keys into readable labels,
// e.g. "mandatoryDeponentFields" -> "Mandatory Deponent Fields".
function humanizeKey(key) {
    return key
        .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
        .replace(/[_-]+/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
        .replace(/\b\w/g, c => c.toUpperCase());
}

function formatLeafValue(val) {
    if (val === null || val === undefined || val === '') return '—';
    if (typeof val === 'boolean') return val ? 'Yes' : 'No';
    if (typeof val === 'number') return val.toLocaleString('en-ZA');
    return String(val);
}

// Used when a raw value is being pulled out to serve as a section header
// (see renderJsonAsProse below). If it already reads as prose (has spaces),
// leave it alone - only code-identifier-shaped values ("caseRef") get the
// camelCase/kebab/snake -> "Title Case" treatment.
function humanizeValue(val) {
    const str = String(val);
    if (/\s/.test(str)) return str;
    return humanizeKey(str);
}

// Recursively turns an arbitrary JSON object into readable, hierarchical
// prose - section headers from key names, bullet lists for simple arrays,
// repeated cards for arrays of objects, nested subsections for nested
// objects. Used wherever an agent's real output doesn't match a bespoke
// renderer's expected fields, so the fallback is never raw JSON syntax,
// regardless of what shape a given agent's live response actually turns
// out to have.
function renderJsonAsProse(obj, depth) {
    depth = depth || 0;
    if (obj === null || obj === undefined) return '';
    if (typeof obj !== 'object') return `<p style="font-size:12.5px;margin:0 0 6px;">${formatLeafValue(obj)}</p>`;

    if (Array.isArray(obj)) {
        if (obj.length === 0) return '<p style="color:var(--text-3);font-style:italic;font-size:12px;">None recorded.</p>';
        const allPrimitive = obj.every(v => v === null || typeof v !== 'object');
        if (allPrimitive) {
            return `<ul style="margin:4px 0 12px;padding-left:20px;">${obj.map(v => `<li style="font-size:12.5px;margin-bottom:3px;color:var(--text-2);">${formatLeafValue(v)}</li>`).join('')}</ul>`;
        }
        return obj.map((item) => {
            // Prefer a real label drawn from the object's own content over a
            // meaningless "Item N" counter - most structured records name
            // themselves one way or another.
            const labelKey = ['title', 'name', 'label', 'field', 'id', 'ref', 'type'].find(k => item && item[k] && typeof item[k] !== 'object');
            const header = labelKey ? humanizeValue(item[labelKey]) : null;
            const rest = labelKey ? Object.fromEntries(Object.entries(item).filter(([k]) => k !== labelKey)) : item;
            return `
            <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:8px;padding:10px 12px;margin-bottom:8px;">
                ${header ? `<div style="font-size:11.5px;font-weight:800;color:var(--purple-700);margin-bottom:4px;">${header}</div>` : ''}
                ${renderJsonAsProse(rest, depth + 1)}
            </div>`;
        }).join('');
    }

    const entries = Object.entries(obj).filter(([, v]) => v !== null && v !== undefined && v !== '');
    if (entries.length === 0) return '<p style="color:var(--text-3);font-style:italic;font-size:12px;">No further detail recorded.</p>';

    return entries.map(([key, val]) => {
        const label = humanizeKey(key);
        if (typeof val === 'object') {
            return `
                <div style="margin-bottom:${depth === 0 ? 14 : 10}px;">
                    <div style="font-size:${depth === 0 ? '13px' : '12px'};font-weight:800;color:var(--text);margin-bottom:4px;">${label}</div>
                    ${renderJsonAsProse(val, depth + 1)}
                </div>`;
        }
        return `<p style="font-size:12.5px;margin:0 0 6px;color:var(--text-2);"><b style="color:var(--text);">${label}:</b> ${formatLeafValue(val)}</p>`;
    }).join('');
}

// Document Generator - verified against a real completed response (24 Aug,
// FNB-53042). Each document gets its own real title/template name as the
// section header, not a generic counter; each binding renders as a plain
// Field: Value row using the real field name, not another "Item N".
// Finds a binding's value by field name, tolerant of exact camelCase vs the
// humanized display label, since bindings are stored as {field, value} pairs
// in an array rather than a flat object. Treats "UNKNOWN" the same as
// missing, since that's the agent's own way of saying a field wasn't
// resolved - never worth quoting as if it were real content.
function findBindingValue(doc, ...fieldCandidates) {
    if (!doc || !Array.isArray(doc.bindings)) return null;
    const normalize = s => String(s).toLowerCase().replace(/[^a-z0-9]/g, '');
    for (const candidate of fieldCandidates) {
        const target = normalize(candidate);
        const match = doc.bindings.find(b => normalize(b.field || '') === target);
        if (match && match.value != null && match.value !== 'UNKNOWN' && match.value !== '') return match.value;
    }
    return null;
}

// Real bindings like "Transaction Schedule" pack several transactions into
// one semicolon/pipe-delimited string, e.g.
// "AUTH-51204-01 | TECHZONE ONLINE | ZAR 12,400.00 | 2026-08-12T20:14:00+02:00 | ARN ...".
// Splits that back into structured rows for a proper bullet list instead of
// showing the raw delimited string.
function parsePipeSchedule(str) {
    if (!str) return [];
    return String(str).split(';').map(s => s.trim()).filter(Boolean)
        .map(item => item.split('|').map(x => x.trim()).filter(Boolean));
}

function renderDocumentGeneratorReport(obj) {
    const documents = gP(obj, 'documents') || [];
    const summary = gP(obj, 'summary') || {};
    const caseRef = gP(obj, 'caseRef', 'case Ref');
    const customerRef = gP(obj, 'customerRef', 'customer Ref');

    const statusMeta = (status) => {
        const map = {
            'ready-for-human-review': { cls: 'b-medium', label: 'Ready for human review', group: 'ready' },
            'blocked': { cls: 'b-high', label: 'Blocked', group: 'blocked' },
            'approved-confirmed': { cls: 'b-low', label: 'Approved & confirmed', group: 'produced' },
            'completed': { cls: 'b-low', label: 'Completed', group: 'produced' },
        };
        return map[status] || { cls: 'b-neutral', label: status ? String(status).replace(/-/g, ' ') : 'Unknown', group: 'other' };
    };

    const blockedDocs = documents.filter(d => statusMeta(d.status).group === 'blocked');
    const readyDocs = documents.filter(d => statusMeta(d.status).group === 'ready');

    // The two documents that actually carry the incident narrative: whichever
    // one has the SAPS-style incident sentences, and the internal case file
    // (or whichever document has the customer/containment detail) - these
    // vary by which document types a given persona's case produced, so both
    // are found defensively rather than assumed to always exist.
    const incidentDoc = documents.find(d => findBindingValue(d, 'incidentOpeningSentence', 'Incident Opening Sentence'));
    const caseFileDoc = documents.find(d => (d.template && d.template.id === 'DT-09'))
        || documents.find(d => findBindingValue(d, 'customerDescriptor', 'Customer Descriptor'));

    // ---- Build the Incident Summary paragraph from real bindings only -
    // any sentence whose source field is missing is simply left out, rather
    // than showing a gap or invented text. ----
    let incidentParts = [];
    const reportDate = findBindingValue(incidentDoc, 'customerReportDate', 'Customer Report Date') || findBindingValue(caseFileDoc, 'customerReportDate', 'Customer Report Date');
    const customerDescriptor = findBindingValue(caseFileDoc, 'customerDescriptor', 'Customer Descriptor');
    const disputedTotal = findBindingValue(caseFileDoc, 'disputedTotal', 'Disputed Total') || findBindingValue(incidentDoc, 'disputedTotal', 'Disputed Total');
    const txSchedule = parsePipeSchedule(findBindingValue(incidentDoc, 'transactionSchedule', 'Transaction Schedule') || findBindingValue(caseFileDoc, 'disputedItemSchedule', 'Disputed Item Schedule'));

    if (reportDate || customerDescriptor || disputedTotal) {
        const dateStr = reportDate ? formatSATimestamp(reportDate).split(' ').slice(0, 3).join(' ').replace(/\s\d{2}:\d{2}$/, '') : '';
        // customerDescriptor often packs several semicolon-separated facts
        // ("Sipho Ndlovu; card ending 7314; verified contact +27 *** 4412") -
        // the opening sentence only needs the name and card, not the contact
        // number, so it reads as a clean introduction rather than a data dump.
        const shortDescriptor = customerDescriptor ? customerDescriptor.split(';').slice(0, 2).map(s => s.trim()).join(', ') : '';
        incidentParts.push(`${dateStr ? `On ${dateStr}, the` : 'The'} customer${shortDescriptor ? ` (${shortDescriptor})` : ''} reported ${txSchedule.length ? `${txSchedule.length} unauthorised` : ''} transaction${txSchedule.length === 1 ? '' : 's'}${disputedTotal ? ` totaling ${disputedTotal}` : ''}.`);
    }
    const openingSentence = findBindingValue(incidentDoc, 'incidentOpeningSentence', 'Incident Opening Sentence');
    if (openingSentence) incidentParts.push(openingSentence);
    const methodSentence = findBindingValue(incidentDoc, 'incidentMethodSentences', 'Incident Method Sentences');
    if (methodSentence) incidentParts.push(methodSentence);
    const containment = findBindingValue(caseFileDoc, 'containmentActions', 'Containment Actions');
    if (containment) incidentParts.push(`Containment: ${containment}.`);

    const onwardMovement = findBindingValue(incidentDoc, 'onwardMovementSentence', 'Onward Movement Sentence');
    const refundRec = findBindingValue(caseFileDoc, 'provisionalRefundRecommendation', 'Provisional Refund Recommendation');
    const recoverableAmount = findBindingValue(caseFileDoc, 'recoverableAmount', 'Recoverable Amount');
    let closingParts = [];
    if (onwardMovement) closingParts.push(onwardMovement);
    if (refundRec) closingParts.push(`The recommended action is to ${String(refundRec).replace(/-/g, ' ')}${recoverableAmount ? ` of ${recoverableAmount}` : ''}, pending human approval.`);

    // ---- Recommendations & Next Steps now carries what the two removed
    // sections used to show separately - which documents are ready, which
    // are blocked and specifically why, attributed to each document by
    // name rather than a flat bullet list. Built from the same real data
    // (blockReasons, document titles, counts), just as case-specific prose
    // instead of a checklist. ----
    const readyTitles = readyDocs.map(d => d.title || gP(d, 'documentRef', 'document Ref')).filter(Boolean);
    const otherCount = documents.length - readyDocs.length - blockedDocs.length;
    const blockedSentences = blockedDocs.map(doc => {
        const title = doc.title || gP(doc, 'documentRef', 'document Ref') || 'One document';
        const reasons = gP(doc, 'blockReasons', 'block Reasons') || [];
        // First reason only, for a tight one-line-per-document summary -
        // the full list was the removed Material Gaps section; anyone who
        // needs every reason verbatim still has it via "View entire output".
        const primaryReason = reasons[0] ? reasons[0].replace(/\.$/, '').replace(/^./, c => c.toLowerCase()) : 'a mandatory field is unresolved';
        return `${title} is blocked because ${primaryReason}.`;
    });

    // ---- Next steps: the case's own human gate, if the response included
    // one at the top level - otherwise a generic closing line rather than
    // inventing a gate name that isn't actually in the data ----
    const humanGate = gP(obj, 'humanGate') || {};

    let nextStepsParts = [];
    // Every document has to be accounted for here, not just ready+blocked -
    // an earlier version of this sentence silently dropped documents that
    // were already produced/confirmed upstream, which reads like they'd
    // vanished when checked against a real 6-document case.
    nextStepsParts.push(`Of the ${summary.documentCount != null ? summary.documentCount : documents.length} document${documents.length === 1 ? '' : 's'} generated for this case, ${readyDocs.length} ${readyDocs.length === 1 ? 'is' : 'are'} ready for human review and ${blockedDocs.length} remain${blockedDocs.length === 1 ? 's' : ''} blocked${otherCount > 0 ? `, with the remaining ${otherCount} already produced and confirmed upstream` : ''}.`);
    if (blockedSentences.length) nextStepsParts.push(blockedSentences.join(' '));
    if (readyTitles.length) nextStepsParts.push(`${readyTitles.length === 1 ? readyTitles[0] : `${readyTitles.slice(0, -1).join(', ')} and ${readyTitles[readyTitles.length - 1]}`} require${readyTitles.length === 1 ? 's' : ''} only human sign-off before use.`);
    if (humanGate.gateId) nextStepsParts.push(`The file is currently stationed at the human gate (\`${humanGate.gateId}\`)${humanGate.requiredRole ? `, awaiting review by a ${String(humanGate.requiredRole).replace(/-/g, ' ')}` : ''}.`);

    return `
    <div class="agent-report-wrap" style="line-height:1.6;font-size:13px;">
        <div style="border-bottom:2px solid var(--border-soft);padding-bottom:10px;margin-bottom:16px;">
            <div style="font-size:16px;font-weight:800;color:var(--purple-800);">📑 Document Generator</div>
        </div>

        <div class="dg-section-label">Case Overview</div>
        <p style="margin:0 0 4px;">Case Reference: <b>${caseRef || '—'}</b></p>
        <p style="margin:0 0 16px;">Customer Reference: <b>${customerRef || '—'}</b></p>
        <p style="margin:0 0 16px;">Status: <b>${obj.status || 'Completed'}</b></p>

        ${incidentParts.length ? `
        <div class="dg-section-label">Incident Summary</div>
        <p>${incidentParts.join(' ')}</p>
        ${txSchedule.length ? `
        <p style="margin-bottom:4px;">The disputed transaction${txSchedule.length === 1 ? ' is' : 's are'}:</p>
        <ul style="margin:0 0 10px;padding-left:20px;">
            ${txSchedule.map(row => `<li>${row.slice(0, 3).join(' — ')}</li>`).join('')}
        </ul>` : ''}
        ${closingParts.length ? `<p style="margin-bottom:16px;">${closingParts.join(' ')}</p>` : ''}
        ` : ''}

        <div class="dg-section-label">Recommendations &amp; Next Steps</div>
        <p>${nextStepsParts.join(' ')}</p>
    </div>`;
}

function renderGenericAgentReport(obj) {
    const rec = gP(obj, 'recommendation') || {};
    // Exclude fields already shown in the header/recommendation so they
    // don't get repeated in the prose body below.
    const { agent, status, recommendation, ...rest } = obj;
    return `
    <div class="agent-report-wrap" style="line-height:1.5;">
        <div style="border-bottom:2px solid var(--border-soft);padding-bottom:10px;margin-bottom:14px;">
            <div style="font-size:16px;font-weight:800;color:var(--purple-800);">${obj.agent || 'Agent Output'}</div>
            <div style="font-size:11px;color:var(--text-3);font-family:var(--mono);">Status: ${obj.status || 'Completed'}</div>
        </div>
        ${rec.reason ? `<div style="background:var(--purple-50);border:1px solid #E9D8FD;border-radius:10px;padding:12px;margin-bottom:14px;">
            <div style="font-size:11px;font-weight:800;color:var(--purple-800);">Recommendation</div>
            <div style="font-size:12.5px;color:var(--text-2);margin-top:2px;">${rec.action ? `<b>${String(rec.action).replace(/-/g, ' ')}</b>: ` : ''}${rec.reason}</div>
        </div>` : ''}
        <div style="font-size:12.5px;color:var(--text-2);">
            ${renderJsonAsProse(rest)}
        </div>
    </div>`;
}

/* ============================================================
   APP INITIALIZATION
   ============================================================ */
function initThemeToggle() {
    const lightBtn = document.getElementById('themeLightBtn');
    const darkBtn = document.getElementById('themeDarkBtn');
    if (!lightBtn || !darkBtn) return;

    function applyTheme(theme) {
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
        lightBtn.classList.toggle('active', theme !== 'dark');
        darkBtn.classList.toggle('active', theme === 'dark');
        try { localStorage.setItem('cfd-theme', theme); } catch (e) { }
    }

    let saved = 'light';
    try { saved = localStorage.getItem('cfd-theme') || 'light'; } catch (e) { }
    applyTheme(saved);

    lightBtn.addEventListener('click', () => applyTheme('light'));
    darkBtn.addEventListener('click', () => applyTheme('dark'));
}

document.addEventListener('DOMContentLoaded', () => {

    const NAV_ITEMS = [{ id: 'dashboard', label: 'Dashboard', icon: 'grid' }, { id: 'cases', label: 'Cases', icon: 'list', badge: true }, { id: 'live', label: 'Live', icon: 'radio' }, { id: 'settings', label: 'Settings', icon: 'gear' }];
    document.querySelectorAll('.nav-item').forEach((el, i) => {
        const meta = NAV_ITEMS[i];
        el.innerHTML = I(meta.icon, 17) + `<span>${meta.label}</span>` + (meta.badge ? `<span class="nav-badge" id="navCaseBadge"></span>` : '') + (meta.id === 'live' ? `<span class="live-glow"></span>` : '');
        el.addEventListener('click', () => goto(meta.id));
    });

    initThemeToggle();

    const caseSearchInput = document.getElementById('caseSearchInput');
    if (caseSearchInput) {
        caseSearchInput.addEventListener('input', () => {
            caseSearchTerm = caseSearchInput.value;
            fillerPage = 0; // a fresh search always starts from a clean slate, not wherever pagination happened to be
            renderCases();
        });
    }

    const caseSortBtn = document.getElementById('caseSortBtn');
    if (caseSortBtn) {
        caseSortBtn.addEventListener('click', () => {
            caseSortAlpha = !caseSortAlpha;
            caseSortBtn.classList.toggle('active', caseSortAlpha);
            fillerPage = 0;
            renderCases();
        });
    }

    // rerunCaseBtn/stopCaseBtn live in the static case-detail header, so they
    // resolve whichever case is currently open at click time rather than
    // being bound to one case - same reason openThreadBtn works this way.
    const rerunCaseBtn = document.getElementById('rerunCaseBtn');
    if (rerunCaseBtn) {
        rerunCaseBtn.addEventListener('click', () => {
            const p = findPersona(currentCaseId);
            if (p) rerunEntireCase(p);
        });
    }
    const stopCaseBtn = document.getElementById('stopCaseBtn');
    if (stopCaseBtn) {
        stopCaseBtn.addEventListener('click', () => {
            const p = findPersona(currentCaseId);
            if (p) stopCase(p);
        });
    }

    const now = new Date();
    const todayElem = document.getElementById('todayStr');
    if (todayElem) todayElem.textContent = now.toLocaleDateString('en-ZA', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    ['giHitl', 'giPopia', 'giAudit', 'giToken', 'giTip', 'giNoOrch'].forEach((id, idx) => {
        const icons = ['user', 'shieldcheck', 'filetext', 'card', 'msg', 'trace'];
        const el = document.getElementById(id); if (el) el.innerHTML = I(icons[idx], 14);
    });

    renderRoleCards();

    const signinBtn = document.getElementById('signinBtn');
    if (signinBtn) {
        signinBtn.addEventListener('click', () => { if (selectedRoleId) signInAs(selectedRoleId); });
    }

    const userChip = document.getElementById('userChip');
    if (userChip) {
        userChip.addEventListener('click', (e) => {
            const userMenu = document.getElementById('userMenu');
            if (userMenu) userMenu.classList.toggle('open');
            e.stopPropagation();
        });
    }

    document.addEventListener('click', closeUserMenu);

    const signOutItem = document.getElementById('signOutItem');
    if (signOutItem) {
        signOutItem.addEventListener('click', (e) => {
            e.stopPropagation(); currentUser = null; selectedRoleId = null;
            const shellRoot = document.getElementById('shellRoot');
            const pageLogin = document.getElementById('page-login');
            if (shellRoot) shellRoot.style.display = 'none';
            const appFooterEl = document.getElementById('appFooter');
            if (appFooterEl) appFooterEl.style.display = 'none';
            if (pageLogin) pageLogin.classList.remove('hidden');
            document.querySelectorAll('.role-card').forEach(c => c.classList.remove('selected'));
            const mockUser = document.getElementById('mockUsername');
            if (mockUser) mockUser.textContent = '—';
            if (signinBtn) signinBtn.disabled = true;
        });
    }

    document.querySelectorAll('[data-goto]').forEach(el => el.addEventListener('click', () => goto(el.dataset.goto)));

    const threadHeadIco = document.getElementById('threadHeadIco');
    if (threadHeadIco) threadHeadIco.innerHTML = I('msg', 18);

    const openThreadBtn = document.getElementById('openThreadBtn');
    if (openThreadBtn) openThreadBtn.addEventListener('click', openThread);

    const closeThreadBtn = document.getElementById('closeThreadBtn');
    if (closeThreadBtn) closeThreadBtn.addEventListener('click', closeThread);

    const scrimEl = document.getElementById('scrim');
    if (scrimEl) scrimEl.addEventListener('click', closeThread);

    const amClose = document.getElementById('amClose');
    if (amClose) amClose.addEventListener('click', closeModals);

    const pmClose = document.getElementById('pmClose');
    if (pmClose) pmClose.addEventListener('click', closeModals);

    const grClose = document.getElementById('grClose');
    if (grClose) grClose.addEventListener('click', () => { pendingGateDecision = null; closeModals(); });
    const grCancel = document.getElementById('grCancel');
    if (grCancel) grCancel.addEventListener('click', () => { pendingGateDecision = null; closeModals(); });
    const grConfirm = document.getElementById('grConfirm');
    if (grConfirm) grConfirm.addEventListener('click', confirmGateReason);

    const mscrim = document.getElementById('mscrim');
    if (mscrim) mscrim.addEventListener('click', closeModals);

    closeThread();
    renderDashboard();
});

/* ============================================================
   FUNCTIONS & ISOLATED WORKSPACE
   ============================================================ */

function updateLiveNavIndicator() {
    const anyRunning = PERSONAS.some(p => { const s = state[p.id]; return !s.closed && !s.escalated && Object.keys(s.agentStatus).length > 0; });
    const liveNav = document.querySelector('.nav-item[data-page="live"]');
    if (liveNav) liveNav.classList.toggle('has-live', anyRunning);
}

function goto(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const targetPage = document.getElementById('page-' + pageId);
    if (targetPage) targetPage.classList.add('active');
    document.querySelectorAll('.nav-item').forEach((el, i) => {
        const navMeta = [{ id: 'dashboard' }, { id: 'cases' }, { id: 'live' }, { id: 'settings' }];
        el.classList.toggle('active', navMeta[i] && navMeta[i].id === pageId);
    });
    // The case-detail workspace scrolls internally via .wb-scroll - letting the
    // outer .main scroll too produced two independent scrollbars. Every other
    // page has no inner scroll region, so .main scrolling there is correct.
    const mainEl = document.querySelector('.main');
    if (mainEl) mainEl.classList.toggle('no-scroll', pageId === 'detail');
    if (pageId === 'dashboard') renderDashboard();
    if (pageId === 'cases') renderCases();
    if (pageId === 'live') renderLive();
}

function caseCounts() {
    let notStarted = 0, inProgress = 0, awaitingGate = 0, needsDecision = 0, resolved = 0;
    PERSONAS.forEach(p => {
        const label = caseStatusLabel(p);
        if (label === 'Done') resolved++;
        else if (label === 'Needs decision') needsDecision++;
        else if (label === 'Not started') notStarted++;
        else if (label === 'In progress') inProgress++;
        else awaitingGate++;
    });
    // Filler cases have no real state (they never run agents), but they are
    // genuinely "not started" - the dashboard's Total/Not started previously
    // only counted the 4 real cases, while the sidebar badge counted all of
    // them, so the two numbers never matched. Folding filler into both here
    // keeps every case-count on screen consistent with the same source of truth.
    notStarted += FILLER.length;
    return { total: PERSONAS.length + FILLER.length, notStarted, inProgress, awaitingGate, needsDecision, resolved };
}

function renderDashboard() {
    const greeting = document.getElementById('greeting');
    if (greeting) greeting.textContent = currentUser ? `Good day, ${currentUser.name}` : 'Good day';
    const c = caseCounts();
    const navCaseBadge = document.getElementById('navCaseBadge');
    if (navCaseBadge) navCaseBadge.textContent = PERSONAS.length + FILLER.length;

    const statbar = document.getElementById('statbar');
    if (statbar) {
        const stats = [
            { n: c.total, l: 'Total', cls: '' }, { n: c.notStarted, l: 'Not started', cls: '' }, { n: c.inProgress, l: 'In progress', cls: '' },
            { n: c.awaitingGate, l: 'Awaiting gate', cls: 'c-amber' }, { n: c.needsDecision, l: 'Needs decision', cls: 'c-amber' }, { n: c.resolved, l: 'Resolved', cls: 'c-green' },
        ];
        statbar.innerHTML = stats.map((s, i) => `<div class="stat counting" style="animation-delay:${i * 60}ms;"><div class="stat-num ${s.cls}" id="statnum-${i}">0</div><div class="stat-label">${s.l}</div></div>`).join('');
        stats.forEach((s, i) => animateCountUp(document.getElementById('statnum-' + i), s.n, 500 + i * 60));
    }

    let decisions = [];
    PERSONAS.forEach(p => Object.keys(p.a).forEach(k => { const s = state[p.id]; if (s.agentStatus[k] === 'done' || s.agentStatus[k] === 'blocked') decisions.push({ label: AGENTS[k].label + ' — ' + p.customer, tone: p.a[k].tone }); }));

    const panelAgentDecisions = document.getElementById('panelAgentDecisions');
    if (panelAgentDecisions) {
        panelAgentDecisions.innerHTML = decisions.length ? decisions.slice(-6).reverse().map(d => `<div class="kv-row"><div class="kv-left"><span class="kv-dot" style="background:${d.tone === 'clean' ? 'var(--green-700)' : d.tone === 'block' ? 'var(--red-700)' : 'var(--amber-700)'}"></span>${d.label}</div></div>`).join('') : '<div class="panel-empty">No agents run yet</div>';
    }

    let approved = 0, overridden = 0;
    PERSONAS.forEach(p => state[p.id].gates.forEach(g => { if (g === 'approve') approved++; else if (g === 'override') overridden++; }));
    // Every dummy case has the same 6 gate slots as a real case, all still
    // pending since filler cases never run - without counting them here, this
    // panel only ever reflected the 4 real cases (24 possible decisions) even
    // though the queue actually holds 150 cases (900 possible decisions).
    const gatesRemaining = PERSONAS.reduce((a, p) => a + state[p.id].gates.filter(g => g === null).length, 0) + FILLER.length * 6;

    const panelHumanDecisions = document.getElementById('panelHumanDecisions');
    if (panelHumanDecisions) {
        panelHumanDecisions.innerHTML = `
        <div class="kv-row kv-clickable" data-goto="cases"><div class="kv-left"><span class="kv-dot" style="background:var(--green-700)"></span>Approved</div><div class="kv-val">${approved}</div></div>
        <div class="kv-row kv-clickable" data-goto="cases"><div class="kv-left"><span class="kv-dot" style="background:var(--amber-700)"></span>Overridden</div><div class="kv-val">${overridden}</div></div>
        <div class="kv-row kv-clickable" data-goto="cases"><div class="kv-left"><span class="kv-dot" style="background:#D7D2E8"></span>Pending</div><div class="kv-val">${gatesRemaining}</div></div>`;
        panelHumanDecisions.querySelectorAll('[data-goto]').forEach(row => row.addEventListener('click', () => goto(row.dataset.goto)));
    }

    let sentCount = PERSONAS.reduce((a, p) => a + state[p.id].messages.filter(m => m.status === 'sent').length, 0);
    let draftCount = PERSONAS.reduce((a, p) => a + state[p.id].messages.filter(m => m.status === 'draft').length, 0);
    const panelComposer = document.getElementById('panelComposer');
    if (panelComposer) {
        panelComposer.innerHTML = `
        <div class="kv-row"><div class="kv-left"><span class="kv-dot" style="background:var(--purple-700)"></span>Customer updates sent</div><div class="kv-val">${sentCount}</div></div>
        <div class="kv-row"><div class="kv-left"><span class="kv-dot" style="background:var(--amber-700)"></span>Drafts awaiting review</div><div class="kv-val">${draftCount}</div></div>`;
    }

    // Recoverability distribution reflects real progress, not just each case's
    // static narrative outcome - a case only counts toward its eventual category
    // once the case has actually reached that point (recognised only counts once
    // truly closed via the deflection path; recoverable/not-recoverable/mixed only
    // count once Transaction Classification has actually run). Anything earlier
    // than that stays "Pending", which is what makes this genuinely reflect what
    // has happened rather than a fixed label decided in advance. Each bucket also
    // tracks which case it came from, so the legend can open that case directly.
    // The 146 dummy cases never run, so they always sit in Pending too - without
    // that, the donut only ever totalled 4 instead of the real queue of 150.
    const dist = { recognised: 0, recoverable: 0, notrecoverable: 0, mixed: 0, pending: FILLER.length };
    const distCase = { recognised: null, recoverable: null, notrecoverable: null, mixed: null };
    PERSONAS.forEach(p => {
        const s = state[p.id];
        const classified = s.agentStatus && s.agentStatus.transactionClassification === 'done'
            && p.a.transactionClassification && p.a.transactionClassification.isFallback !== true;
        if (s.closed && p.recognised) { dist.recognised++; distCase.recognised = p.id; }
        else if (classified && p.classification === 'recoverable') { dist.recoverable++; distCase.recoverable = p.id; }
        else if (classified && p.classification === 'not-recoverable') { dist.notrecoverable++; distCase.notrecoverable = p.id; }
        else if (classified && p.classification === 'mixed') { dist.mixed++; distCase.mixed = p.id; }
        else dist.pending++;
    });
    drawDonut([
        { v: dist.recognised, c: '#7C3AED', l: 'Recognised — deflected', caseId: distCase.recognised },
        { v: dist.recoverable, c: '#15803D', l: 'Recoverable (CNP)', caseId: distCase.recoverable },
        { v: dist.notrecoverable, c: '#B91C1C', l: 'Chase & Repatriate', caseId: distCase.notrecoverable },
        { v: dist.mixed, c: '#B45309', l: 'Mixed rails / Sim Swap', caseId: distCase.mixed },
        { v: dist.pending, c: '#E5E2F0', l: 'Pending' },
    ]);

    renderActivityFeed();
    renderRegClocks();
}

/* ---- Live activity feed - a rolling, cross-case version of the per-case
       Summary tab: every completed agent and every human gate decision,
       merged and sorted by real timestamp, most recent first. ---- */
function renderActivityFeed() {
    const panel = document.getElementById('panelActivityFeed');
    if (!panel) return;

    let items = [];
    PERSONAS.forEach(p => {
        const s = state[p.id];
        Object.keys(p.a).forEach(ak => {
            const st = s.agentStatus[ak];
            if (st !== 'done' && st !== 'blocked') return;
            const data = p.a[ak];
            if (!data.completedAt) return;
            const meta = AGENTS[ak];
            items.push({
                ts: data.completedAt,
                html: `<div class="kv-row"><div class="kv-left"><span class="kv-dot" style="background:${data.tone === 'clean' ? 'var(--green-700)' : data.tone === 'block' ? 'var(--red-700)' : 'var(--amber-700)'}"></span>${meta.label} — ${p.customer}</div><div class="kv-val" style="font-family:var(--mono);font-size:10px;color:var(--text-3);">${formatWallClock(data.completedAt)}</div></div>`
            });
        });
        s.gates.forEach((g, i) => {
            if (!g || !s.gateDecidedAt[i]) return;
            const actionLabel = g === 'approve' ? 'Approved' : g === 'override' ? 'Overridden' : g === 'escalate' ? 'Escalated' : g;
            const scr = SCREENS[i];
            items.push({
                ts: s.gateDecidedAt[i],
                html: `<div class="kv-row"><div class="kv-left"><span class="kv-dot" style="background:var(--purple-700)"></span>${actionLabel} — ${scr ? scr.title : 'Gate ' + (i + 1)} · ${p.customer}</div><div class="kv-val" style="font-family:var(--mono);font-size:10px;color:var(--text-3);">${formatWallClock(s.gateDecidedAt[i])}</div></div>`
            });
        });
    });

    if (!items.length) { panel.innerHTML = '<div class="panel-empty">Nothing has happened yet</div>'; return; }

    items.sort((a, b) => new Date(b.ts) - new Date(a.ts));
    panel.innerHTML = items.slice(0, 10).map(it => it.html).join('');
}

/* ---- Regulatory clocks, live - the four statutory clocks (Settings page
       shows these as static reference text) computed against every real
       case's Case Intake completion time, showing which case is genuinely
       closest to which deadline. ---- */
const REGULATORY_CLOCKS = [
    { label: 'Suspicious transaction report', hours: 15 * 24 },
    { label: 'Cyber offence report', hours: 72 },
    { label: 'Material cyber incident', hours: 24 },
    { label: 'Internal dispute resolution', hours: 20 * 24 },
];
function renderRegClocks() {
    const panel = document.getElementById('panelRegClocks');
    if (!panel) return;

    let rows = [];
    PERSONAS.forEach(p => {
        const s = state[p.id];
        if (!s.slaStartedAt || s.closed) return; // no clock start yet, or already resolved - nothing pending
        REGULATORY_CLOCKS.forEach(clock => {
            const deadline = new Date(s.slaStartedAt).getTime() + clock.hours * 3600 * 1000;
            const remainingMs = deadline - Date.now();
            rows.push({ customer: p.customer, id: p.id, label: clock.label, remainingMs });
        });
    });

    if (!rows.length) { panel.innerHTML = '<div class="panel-empty">No live clocks yet</div>'; return; }

    // Closest deadline per case only, so one urgent case doesn't crowd out the others
    const byCase = {};
    rows.forEach(r => { if (!byCase[r.id] || r.remainingMs < byCase[r.id].remainingMs) byCase[r.id] = r; });
    const closest = Object.values(byCase).sort((a, b) => a.remainingMs - b.remainingMs).slice(0, 6);

    panel.innerHTML = closest.map(r => `
        <div class="kv-row">
            <div class="kv-left"><span class="kv-dot" style="background:${r.remainingMs <= 0 ? 'var(--red-700)' : r.remainingMs < 4 * 3600000 ? 'var(--amber-700)' : 'var(--green-700)'}"></span>${r.label} — ${r.customer}</div>
            <div class="kv-val" style="font-family:var(--mono);font-size:10.5px;">${formatSlaCountdown(r.remainingMs)}</div>
        </div>`).join('');
}

function drawDonut(segments) {
    const total = segments.reduce((a, s) => a + s.v, 0) || 1;
    const r = 50, cx = 60, cy = 60; let angle = -90; let paths = '';
    segments.forEach(s => {
        if (s.v <= 0) return;
        const frac = s.v / total; const sweep = frac * 360;
        const x1 = cx + r * Math.cos(angle * Math.PI / 180), y1 = cy + r * Math.sin(angle * Math.PI / 180);
        angle += sweep;
        const x2 = cx + r * Math.cos(angle * Math.PI / 180), y2 = cy + r * Math.sin(angle * Math.PI / 180);
        const large = sweep > 180 ? 1 : 0;
        paths += `<path d="M${cx},${cy} L${x1.toFixed(2)},${y1.toFixed(2)} A${r},${r} 0 ${large} 1 ${x2.toFixed(2)},${y2.toFixed(2)} Z" fill="${s.c}"/>`;
    });
    const donutSvg = document.getElementById('donutSvg');
    if (donutSvg) donutSvg.innerHTML = paths + `<circle cx="60" cy="60" r="30" fill="#fff"/><text x="60" y="56" text-anchor="middle" font-size="18" font-weight="800" fill="#150F26" font-family="Plus Jakarta Sans">${total}</text><text x="60" y="70" text-anchor="middle" font-size="8.5" fill="#9791A8" font-family="Plus Jakarta Sans">total</text>`;

    const donutLegend = document.getElementById('donutLegend');
    if (donutLegend) {
        donutLegend.innerHTML = segments.map((s, i) => `<div class="kv-row${s.caseId ? ' kv-clickable' : ''}" ${s.caseId ? `data-case="${s.caseId}"` : ''}><div class="kv-left"><span class="kv-dot" style="background:${s.c}"></span>${s.l}</div><div class="kv-val">${s.v}</div></div>`).join('');
        donutLegend.querySelectorAll('.kv-clickable').forEach(row => {
            row.addEventListener('click', () => openCase(row.dataset.case));
        });
    }
}

const FILTERS = ['All', 'Not started', 'In progress', 'Awaiting gate', 'Needs decision', 'Done'];
let activeFilter = 'All';
let caseSearchTerm = '';
let caseSortAlpha = false;

function renderFilterbar() {
    const c = caseCounts();
    const counts = { All: PERSONAS.length + FILLER.length, 'Not started': c.notStarted, 'In progress': c.inProgress, 'Awaiting gate': c.awaitingGate, 'Needs decision': c.needsDecision, 'Done': c.resolved };
    const filterbar = document.getElementById('filterbar');
    if (filterbar) {
        // "Needs decision" only appears once something genuinely needs one -
        // an empty filter pill sitting there permanently just reads as clutter.
        const visibleFilters = FILTERS.filter(f => f !== 'Needs decision' || counts[f] > 0);
        filterbar.innerHTML = visibleFilters.map(f => `<button class="fpill ${f === activeFilter ? 'active' : ''}" data-f="${f}">${f} <span class="n">${counts[f]}</span></button>`).join('');
        filterbar.querySelectorAll('.fpill').forEach(el => el.addEventListener('click', () => { activeFilter = el.dataset.f; renderCases(); }));
        // If the active filter just disappeared (its count dropped to zero),
        // fall back to "All" rather than leaving the table showing a filter
        // that no longer has a visible button.
        if (activeFilter === 'Needs decision' && counts['Needs decision'] === 0) {
            activeFilter = 'All';
        }
    }
}

function caseStatusLabel(p) {
    const s = state[p.id];
    if (s.closed) return 'Done';
    if (s.escalated) return 'Needs decision';
    if (Object.keys(s.agentStatus).length === 0) return 'Not started';
    // "In progress" vs "Awaiting gate" was previously collapsed into one bucket -
    // this genuinely distinguishes them: if the current screen's agents are
    // still running, the case is actively in progress; once they've all
    // finished and it's just waiting on a human decision, it's awaiting gate.
    const scr = SCREENS[s.screenIdx];
    const allCurrentDone = scr && scr.agents.every(ak => s.agentStatus[ak] === 'done' || s.agentStatus[ak] === 'blocked');
    return allCurrentDone ? 'Awaiting gate' : 'In progress';
}

// Walks the screen/agent order backwards to find the last agent that actually
// completed for this case - used for the Cases table's "Agent Recommendation"
// column, which stays empty until the case is closed.
function lastAgentFinding(p) {
    const s = state[p.id];
    for (let i = SCREENS.length - 1; i >= 0; i--) {
        const agents = SCREENS[i].agents;
        for (let j = agents.length - 1; j >= 0; j--) {
            const ak = agents[j];
            if (s.agentStatus[ak] === 'done' && p.a[ak] && p.a[ak].finding) return p.a[ak].finding;
        }
    }
    return null;
}

function renderCases() {
    updateLiveNavIndicator(); renderFilterbar();
    const tbody = document.getElementById('casesTbody');
    if (!tbody) return;
    const term = caseSearchTerm.trim().toLowerCase();
    let rows = PERSONAS.filter(p => activeFilter === 'All' || caseStatusLabel(p) === activeFilter);
    if (term) rows = rows.filter(p => p.customer.toLowerCase().includes(term) || p.id.toLowerCase().includes(term));
    if (caseSortAlpha) rows = [...rows].sort((a, b) => a.customer.localeCompare(b.customer));
    tbody.innerHTML = rows.map(p => {
        const s = state[p.id];
        const started = Object.keys(s.agentStatus).length > 0;
        const screenLabel = s.closed && p.recognised ? `2 of 2 (Deflected)` : s.closed ? `${SCREENS.length} of ${SCREENS.length}` : started ? `${s.screenIdx + 1} of 6` : `0 of 6`;
        const statusLbl = caseStatusLabel(p);

        // Urgency only shows once Case Intake has genuinely completed (not via
        // a timeout/error fallback) - before that, there is no real
        // urgency.level to show, so the column stays neutral.
        const intakeDone = s.agentStatus && s.agentStatus.caseIntake === 'done'
            && p.a.caseIntake && p.a.caseIntake.isFallback !== true;
        const urgencyCls = s.urgencyLevel === 'Critical' ? 'b-crit' : s.urgencyLevel === 'High' ? 'b-high' : s.urgencyLevel === 'Medium' ? 'b-medium' : 'b-low';
        const urgencyCell = intakeDone && s.urgencyLevel ? `<span class="badge ${urgencyCls}">${s.urgencyLevel}</span>` : '<span class="sla-pending">—</span>';

        const sla = slaInfo(p);
        const slaCell = sla
            ? `<span class="sla-badge ${sla.overdue ? 'sla-overdue' : sla.remainingMs < 3600000 ? 'sla-warn' : 'sla-ok'}">${formatSlaCountdown(sla.remainingMs)}</span>`
            : '<span class="sla-pending">—</span>';

        // Agent Recommendation stays empty until the case has genuinely finished
        // running (closed) - it then shows the last agent that actually
        // completed for this case, not a generic placeholder.
        const recommendationCell = s.closed ? (lastAgentFinding(p) || '—') : '<span class="sla-pending">—</span>';

        const decidedGates = s.gates.map((g, i) => g ? { i, g, who: s.gateApprover[i] } : null).filter(Boolean);
        const humanCell = decidedGates.length
            ? `<span class="badge ${decidedGates.some(d => d.g === 'escalate') ? 'b-high' : 'b-low'}">${decidedGates.length} decided</span> <span class="human-who">${decidedGates[decidedGates.length - 1].who || ''}</span>`
            : '—';

        return `<tr class="rowlink" data-id="${p.id}">
      <td><div class="cust-name">${p.customer}</div><div class="cust-ref">${p.id}</div></td>
      <td>${urgencyCell}</td>
      <td>${slaCell}</td>
      <td><span class="badge b-neutral">${statusLbl}</span></td>
      <td>${screenLabel}</td>
      <td>${recommendationCell}</td>
      <td>${humanCell}</td>
    </tr>`;
    }).join('');

    // The 146 dummy cases are always "Not started" - showing them regardless
    // of activeFilter is exactly why clicking "Done" or any other filter
    // looked broken: the real cases correctly filtered down, but 146 filler
    // rows kept flooding in underneath regardless of what was selected.
    const showFiller = activeFilter === 'All' || activeFilter === 'Not started';
    // Sorted once, on the full 146 (not just the current page slice), so
    // pagination pages through a genuinely alphabetical order rather than
    // sorting only whatever 30 happened to already be on screen.
    const fillerSource = caseSortAlpha ? [...FILLER].sort((a, b) => a.name.localeCompare(b.name)) : FILLER;
    const fillerMatches = term ? fillerSource.filter(f => f.name.toLowerCase().includes(term) || f.ref.toLowerCase().includes(term)) : [];
    const fillerRows = showFiller
        ? (term ? fillerMatches : fillerSource.slice(fillerPage * FILLER_PAGE_SIZE, (fillerPage + 1) * FILLER_PAGE_SIZE))
        : [];
    tbody.innerHTML += fillerRows.map(f => `<tr class="rowlink filler" data-id="${f.ref}">
      <td><div class="cust-name">${f.name}</div><div class="cust-ref">${f.ref}</div></td>
      <td><span class="sla-pending">—</span></td>
      <td><span class="sla-pending">—</span></td>
      <td><span class="badge b-neutral">Not started</span></td>
      <td>0 of 6</td>
      <td><span class="sla-pending">—</span></td>
      <td>—</td>
    </tr>`).join('');

    const pag = document.getElementById('fillerPagination');
    if (pag) {
        if (!showFiller) {
            // A filter that excludes "Not started" naturally excludes every
            // filler case too - nothing to paginate, so just say so plainly
            // instead of showing stale page controls for a list that's empty.
            pag.innerHTML = `<span class="fp-range">Dummy cases are always "Not started", so none match the "${activeFilter}" filter.</span>`;
        } else if (term) {
            // Searching bypasses pagination entirely - shows every match across
            // all 146, not just whichever page happened to be open.
            const matchCount = fillerMatches.length;
            pag.innerHTML = `<span class="fp-range">${matchCount} queued case${matchCount === 1 ? '' : 's'} match "${caseSearchTerm.trim()}"</span>`;
        } else {
            const totalFillerPages = Math.max(1, Math.ceil(FILLER.length / FILLER_PAGE_SIZE));
            const rangeStart = fillerPage * FILLER_PAGE_SIZE + 1;
            const rangeEnd = Math.min((fillerPage + 1) * FILLER_PAGE_SIZE, FILLER.length);
            pag.innerHTML = `
        <span class="fp-range">Showing ${rangeStart}–${rangeEnd} of ${FILLER.length} additional queued cases</span>
        <div class="fp-controls">
            <button class="btn ghost pill-btn" id="fpPrev" ${fillerPage === 0 ? 'disabled' : ''}>${I('arrowLeft', 13)} Prev</button>
            <span class="fp-page">Page ${fillerPage + 1} of ${totalFillerPages}</span>
            <button class="btn ghost pill-btn" id="fpNext" ${fillerPage >= totalFillerPages - 1 ? 'disabled' : ''}>Next ${I('arrowRight', 13)}</button>
        </div>`;
            const fpPrev = document.getElementById('fpPrev');
            if (fpPrev) fpPrev.addEventListener('click', () => { if (fillerPage > 0) { fillerPage--; renderCases(); } });
            const fpNext = document.getElementById('fpNext');
            if (fpNext) fpNext.addEventListener('click', () => { if (fillerPage < totalFillerPages - 1) { fillerPage++; renderCases(); } });
        }
    }

    tbody.querySelectorAll('[data-open]').forEach(b => b.addEventListener('click', (e) => { e.stopPropagation(); openCase(b.dataset.open); }));
    tbody.querySelectorAll('tr.rowlink').forEach(r => r.addEventListener('click', () => openCase(r.dataset.id)));
}

function renderLive() {
    const running = PERSONAS.filter(p => {
        const s = state[p.id];
        return !s.closed && !s.escalated && Object.keys(s.agentStatus).length > 0;
    });

    const liveSub = document.getElementById('liveSub');
    if (liveSub) {
        liveSub.textContent = running.length
            ? `${running.length} case${running.length > 1 ? 's' : ''} in progress`
            : 'No cases currently running';
    }

    const liveBody = document.getElementById('liveBody');
    if (liveBody) {
        liveBody.innerHTML = running.length ? running.map(p => {
            const s = state[p.id];
            const scr = SCREENS[s.screenIdx];
            return `
            <div class="live-ticker" data-id="${p.id}" style="cursor:pointer; justify-content:space-between; transition:transform 0.15s ease, box-shadow 0.15s ease;">
              <div style="display:flex; align-items:center; gap:12px;">
                <span class="live-dot"></span>
                <div>
                  <b>${p.customer}</b> · <span style="font-family:var(--mono);font-size:11px;color:var(--text-3);">${p.id}</span> — Stage ${scr.n} of 6 · <b>${scr.title}</b>
                </div>
              </div>
              <span class="btn pill-btn" style="font-size:11px; padding:5px 12px; flex-shrink:0;">View case →</span>
            </div>`;
        }).join('') : `<div class="live-empty"><b>Live</b>No cases are currently running. Go to <b>Cases</b> to trigger a review.</div>`;

        liveBody.querySelectorAll('.live-ticker[data-id]').forEach(el => {
            el.addEventListener('click', () => openCase(el.dataset.id));

            el.addEventListener('mouseenter', () => {
                el.style.transform = 'translateY(-2px)';
                el.style.borderColor = 'var(--purple-400)';
            });
            el.addEventListener('mouseleave', () => {
                el.style.transform = 'none';
                el.style.borderColor = 'var(--border)';
            });
        });
    }
}

function findPersona(id) { return PERSONAS.find(p => p.id === id); }

/* Opens a clean, isolated single-case view (middle panel completely hidden) */
// Pulled out of openCase() so agent-completion callbacks can refresh the
// header pills too - previously urgency/SLA only appeared once you navigated
// away and back, because nothing re-rendered them the moment Case Intake
// actually finished.
// Returns true/false once Case Intake has genuinely (not via fallback)
// confirmed vulnerability either way, or null while that's still unknown -
// used instead of the case's static narrative flag, which used to show
// "Vulnerable" confidently regardless of whether any agent had actually run.
function getLiveVulnerability(p) {
    const s = state[p.id];
    const intakeGenuinelyDone = s.agentStatus && s.agentStatus.caseIntake === 'done'
        && p.a.caseIntake && p.a.caseIntake.isFallback !== true;
    if (!intakeGenuinelyDone || !p.a.caseIntake.rawText) return null;
    const parsed = parseAgentJson(p.a.caseIntake.rawText);
    if (!parsed || !parsed.vulnerability) return null;
    return !!parsed.vulnerability.flagged;
}

function renderCaseHeaderPills(p) {
    if (p.id !== currentCaseId) return; // stale async callback - see renderStatusBanner
    const dPills = document.getElementById('dPills');
    if (!dPills) return;
    const s = state[p.id];
    const intakeGenuinelyDone = s.agentStatus && s.agentStatus.caseIntake === 'done'
        && p.a.caseIntake && p.a.caseIntake.isFallback !== true;
    const sla = slaInfo(p);
    const liveVulnerable = getLiveVulnerability(p);
    dPills.innerHTML =
        (intakeGenuinelyDone && s.urgencyLevel
            ? `<span class="tag tag-urgency-${s.urgencyLevel.toLowerCase()}">${s.urgencyLevel} urgency</span>${sla ? `<span class="tag ${sla.overdue ? 'tag-sla-overdue' : sla.remainingMs < 3600000 ? 'tag-sla-warn' : 'tag-sla-ok'}">SLA: ${formatSlaCountdown(sla.remainingMs)}</span>` : ''}`
            : `<span class="tag tag-muted">Urgency pending Case Intake</span>`) +
        (liveVulnerable === true ? `<span class="tag" style="background:var(--red-100);color:var(--red-700)">Vulnerable</span>` : '');
}

// Pulls disputed amount / channel / product from the real, live Case Intake
// response once it's completed - genuinely completed, not just attempted.
// A timed-out or connection-failed agent still gets marked 'done' (so the
// pipeline can proceed), so agentStatus alone can't tell real success apart
// from a fallback - isFallback is what actually distinguishes them. This
// used to fall back to the case's static narrative data whenever live data
// wasn't available, which looked identical to a real result and could show
// confidently-wrong information after a timeout. It now shows a plain
// pending placeholder instead - nothing is ever shown as fact unless an
// agent genuinely said so.
function getLiveCaseInfo(p) {
    const s = state[p.id];
    const info = { amount: '—', channel: '—', product: '—', live: false };
    const intakeGenuinelyDone = s.agentStatus && s.agentStatus.caseIntake === 'done'
        && p.a.caseIntake && p.a.caseIntake.isFallback !== true;
    if (!intakeGenuinelyDone || !p.a.caseIntake.rawText) return info;

    const parsed = parseAgentJson(p.a.caseIntake.rawText);
    if (!parsed) return info;

    const reportedEvent = gP(parsed, 'reportedEvent', 'reported Event') || {};
    const reportedTotal = gP(reportedEvent, 'reportedTotal', 'reported Total') || {};
    const customer = gP(parsed, 'customer') || {};

    if (reportedTotal.amount != null) {
        info.amount = `R${Number(reportedTotal.amount).toLocaleString('en-ZA', { minimumFractionDigits: 2 })}`;
        info.live = true;
    }
    const liveChannel = gP(reportedEvent, 'channel') || gP(parsed, 'channel') || gP(customer, 'channel');
    if (liveChannel) { info.channel = liveChannel; info.live = true; }

    const liveProduct = gP(customer, 'product') || gP(customer, 'accountProduct', 'account Product') || gP(parsed, 'product');
    if (liveProduct) { info.product = liveProduct; info.live = true; }

    return info;
}

// Same stale-callback guard as renderCaseHeaderPills - wired into the same
// agent-completion refresh points so the header updates the moment Case
// Intake actually finishes, not only on next navigation.
function renderCaseHeaderInfo(p) {
    if (p.id !== currentCaseId) return;
    const dInfoBox = document.getElementById('dInfoBox');
    if (!dInfoBox) return;
    const info = getLiveCaseInfo(p);
    dInfoBox.innerHTML = `
        <div class="wb-info-item"><div class="il">Disputed amount</div><div class="iv">${info.amount}</div></div>
        <div class="wb-info-item"><div class="il">Channel</div><div class="iv">${info.channel}</div></div>`;
}

function openCase(id) {
    currentCaseId = id;
    goto('detail');

    const wqSidebar = document.querySelector('.wq-sidebar') || document.getElementById('wqList') || document.querySelector('.workqueue-panel');
    if (wqSidebar) wqSidebar.style.setProperty('display', 'none', 'important');

    const workspace = document.getElementById('workspace');
    if (workspace) workspace.classList.add('active');
    const p = findPersona(id);
    const filler = !p ? FILLER.find(f => f.ref === id) : null;

    const dCaseRef = document.getElementById('dCaseRef');
    if (dCaseRef) dCaseRef.textContent = id;

    if (filler) {
        renderFillerCaseShell(filler);
        return;
    }
    const dCustomer = document.getElementById('dCustomer');
    if (dCustomer) dCustomer.textContent = p.customer;

    const dPills = document.getElementById('dPills');
    if (dPills) renderCaseHeaderPills(p);

    const backBtn = document.getElementById('backToCasesBtn');
    if (backBtn) {
        backBtn.onclick = (e) => { e.preventDefault(); goto('cases'); };
    }

    const threadBtn = document.getElementById('openThreadBtn');
    if (threadBtn) threadBtn.removeAttribute('disabled');
    const rerunCaseBtn = document.getElementById('rerunCaseBtn');
    if (rerunCaseBtn) rerunCaseBtn.removeAttribute('disabled');

    const dInfoBox = document.getElementById('dInfoBox');
    if (dInfoBox) renderCaseHeaderInfo(p);
    updateStopButtonState(p);

    closeThread();

    activeWorkspaceTab = 'agents';
    document.querySelectorAll('.wtab').forEach(x => x.classList.toggle('active', x.dataset.wtab === 'agents'));
    const wbScrollEl = document.getElementById('wbScroll');
    if (wbScrollEl) wbScrollEl.style.display = 'block';
    ['wbReportPanel', 'wbCorrPanel', 'wbSummaryPanel'].forEach(pid => { const el = document.getElementById(pid); if (el) el.style.display = 'none'; });
    wireWorkspaceTabs(p);

    renderStatusBanner(p);
    renderHorizontalStepper(p);
    renderActiveStageContent(p);
    updateProgressRing(p);
    updateThreadBadge();

    const s = state[id];
    if (Object.keys(s.agentStatus).length === 0 && !s.stopped) runScreenAgents(p);
    updateStopButtonState(p);
}

/* ============================================================
   FILLER CASE SHELL — the 30 queue-filler rows are clickable so
   the queue feels alive, but they never run the agent pipeline
   or hit the live API. Read-only, honest placeholder.
   ============================================================ */
function renderFillerCaseShell(filler) {
    const dCustomer = document.getElementById('dCustomer');
    if (dCustomer) dCustomer.textContent = filler.name;

    const dPills = document.getElementById('dPills');
    if (dPills) dPills.innerHTML = `<span class="tag tag-muted">${filler.type}</span><span class="tag tag-muted">Not started</span>`;

    const backBtn = document.getElementById('backToCasesBtn');
    if (backBtn) backBtn.onclick = (e) => { e.preventDefault(); goto('cases'); };

    const dInfoBox = document.getElementById('dInfoBox');
    if (dInfoBox) {
        dInfoBox.innerHTML = `
        <div class="wb-info-item"><div class="il">Disputed amount</div><div class="iv">Not yet reported</div></div>
        <div class="wb-info-item"><div class="il">Channel</div><div class="iv">—</div></div>`;
    }

    const dStatusBanner = document.getElementById('dStatusBanner');
    if (dStatusBanner) {
        dStatusBanner.innerHTML = `<div class="filler-notice">${filler.name} is a queued placeholder used to give the case list realistic volume. It doesn't run the agent pipeline — only Sipho, Andile, Nomvula and Thabo do that in this build.</div>`;
    }

    ['openThreadBtn', 'rerunCaseBtn', 'stopCaseBtn'].forEach(id => { const el = document.getElementById(id); if (el) el.setAttribute('disabled', 'disabled'); });

    const wbScrollEl = document.getElementById('wbScroll');
    if (wbScrollEl) { wbScrollEl.style.display = 'block'; wbScrollEl.innerHTML = `<div class="filler-empty">No agent activity for this case.</div>`; }
    ['wbReportPanel', 'wbCorrPanel', 'wbSummaryPanel'].forEach(pid => { const el = document.getElementById(pid); if (el) el.style.display = 'none'; });
    document.querySelectorAll('.wtab').forEach(t => t.classList.toggle('active', t.dataset.wtab === 'agents'));

    const ringLabel = document.getElementById('ringLabel');
    if (ringLabel) ringLabel.textContent = '0/6';
    const ringFill = document.getElementById('ringFill');
    if (ringFill) ringFill.style.strokeDashoffset = '138.2';
}


function renderStatusBanner(p) {
    if (p.id !== currentCaseId) return; // stale async callback from a case that's no longer open - don't let it paint over what's on screen now
    const s = state[p.id];
    const el = document.getElementById('dStatusBanner');
    if (!el) return;
    if (s.closed) { el.className = 'wb-status tone-done'; el.innerHTML = `${I('check', 15)} <b>Closed.</b> Case resolved ${p.recognised ? '(Deflected at Screen 2)' : ''}.`; return; }
    if (s.escalated) { el.className = 'wb-status tone-stop'; el.innerHTML = `${I('alert', 15)} <b>Escalated at Screen ${SCREENS[s.escalatedAt].n} — ${SCREENS[s.escalatedAt].title}.</b> No orchestrator agent will force this forward.`; return; }
    const scr = SCREENS[s.screenIdx];
    el.className = 'wb-status'; el.innerHTML = `<span class="spin"></span> <b>${scr.title} · running</b> — ${scr.sub}`;
}

/* Horizontal 6-Stage Stepper Header */
function renderHorizontalStepper(p) {
    if (p.id !== currentCaseId) return; // see renderStatusBanner - same stale-callback guard
    const s = state[p.id];
    const col = document.getElementById('wbScroll');
    if (!col) return;

    let stepperHtml = `<div class="horizontal-stepper" style="display:flex;gap:8px;margin-bottom:20px;overflow-x:auto;padding-bottom:8px;border-bottom:1px solid #E5E2F0;">`;

    SCREENS.forEach((scr, idx) => {
        const isCurrent = (idx === s.activeStageTab);
        const isCompleted = idx < s.screenIdx || (s.closed && idx <= s.screenIdx);
        const isCurrentRunning = idx === s.screenIdx && !s.closed && !s.escalated;

        let bg = isCurrent ? '#7C3AED' : isCompleted ? '#15803D' : '#F3F0F8';
        let color = isCurrent || isCompleted ? '#FFFFFF' : '#64748B';

        stepperHtml += `
        <div class="step-arc-item" data-stage="${idx}" style="flex:1;min-width:130px;padding:10px;background:${bg};color:${color};border-radius:8px;cursor:pointer;transition:all 0.2s ease;">
            <div style="font-size:10px;font-weight:700;text-transform:uppercase;opacity:0.8;">Stage 0${scr.n}</div>
            <div style="font-size:12px;font-weight:700;margin-top:2px;">${scr.title}</div>
            <div style="font-size:10px;margin-top:4px;">${isCompleted ? '✓ Done' : isCurrentRunning ? '⚡ Active' : 'Locked'}</div>
        </div>`;
    });

    stepperHtml += `</div><div id="stageContentArea"></div>`;
    col.innerHTML = stepperHtml;

    col.querySelectorAll('.step-arc-item').forEach(el => {
        el.addEventListener('click', () => {
            s.activeStageTab = parseInt(el.dataset.stage, 10);
            renderHorizontalStepper(p);
            renderActiveStageContent(p);
        });
    });
}

/* Render Selected Stage Content and Agents with Timers */
function renderActiveStageContent(p) {
    if (p.id !== currentCaseId) return; // see renderStatusBanner - same stale-callback guard
    const s = state[p.id];
    const container = document.getElementById('stageContentArea');
    if (!container) return;

    const stageIdx = s.activeStageTab !== undefined ? s.activeStageTab : s.screenIdx;
    const scr = SCREENS[stageIdx];
    const complete = stageIdx < s.screenIdx || (s.closed && stageIdx === s.screenIdx);
    const running = stageIdx === s.screenIdx && !s.closed && !s.escalated;

    let html = `<div class="stage-section active-focus">
      <div class="stage-section-head">
        <div class="ssnum">${scr.n}</div>
        <div><div class="stage-section-title">${p.recognised && stageIdx === 1 ? 'Recognition Review' : scr.title}</div><div class="stage-section-sub">${p.recognised && stageIdx === 1 ? 'Proceed as fraud, or show the customer' : scr.sub}</div></div>
        <span class="stage-status-pill ${complete ? 'st-complete' : running ? 'st-running' : ''}">${complete ? 'Complete' : running ? 'Running' : ''}</span>
      </div>`;

    if (stageIdx === 1 && p.recognised && (complete || stageIdx === s.screenIdx)) {
        html += `<div class="closed-callout"><div class="cc-title">${I('check', 16)} Case deflected — recognised subscription</div><div class="cc-body">Not fraud. Active mandate verified at R349/mo; price rose to R429 this month. Screens 03–06 never run.</div></div>`;
    } else {
        const gridCls = scr.agents.length === 1 ? 'card-grid single-agent' : 'card-grid';
        html += `<div class="${gridCls}">${scr.agents.map(ak => renderAgentCard(p, ak)).join('')}</div>`;
    }

    if (stageIdx === s.screenIdx && !s.closed) { html += renderGateOrRecord(p, stageIdx); }
    else if (stageIdx < s.screenIdx || s.closed) { html += renderGateOrRecord(p, stageIdx); }
    html += `</div>`;

    container.innerHTML = html;
    animateEntrance(container, '.agent-card');

    container.querySelectorAll('.agent-card').forEach(el => el.addEventListener('click', () => {
        if (el.dataset.locked) return;
        if (el.dataset.agent === 'documentGenerator') { downloadDocumentGeneratorPdf(p); return; }
        openAgentModal(p, el.dataset.agent);
    }));
    container.querySelectorAll('[data-gate]').forEach(el => el.addEventListener('click', () => openGateReasonModal(p, parseInt(el.dataset.gate, 10), el.dataset.action)));
    container.querySelectorAll('[data-policy]').forEach(el => el.addEventListener('click', (e) => { e.stopPropagation(); openPolicyModal(p); }));
    container.querySelectorAll('[data-rerun]').forEach(el => el.addEventListener('click', (e) => {
        e.stopPropagation();
        rerunAgent(p, el.dataset.rerun);
    }));

    // Keep whichever of Report / Case Files / Correspondence is on screen live-updated
    // as agents complete, without needing the user to re-click the tab.
    if (activeWorkspaceTab !== 'agents') renderWorkspaceTab(p);
}

function agentToneClass(tone) { return tone === 'clean' ? 'tone-clean' : tone === 'block' ? 'tone-block' : 'tone-flag'; }

function renderAgentCard(p, agentKey) {
    const meta = AGENTS[agentKey];
    const data = p.a[agentKey];
    const s = state[p.id];
    const st = s.agentStatus[agentKey] || 'pending';
    const isDocGen = agentKey === 'documentGenerator';
    let cardCls = 'agent-card ' + st;
    if (st === 'done') cardCls += data.tone === 'flag' ? ' flag' : data.tone === 'block' ? ' block' : ' done';

    let pillHtml = st === 'pending' ? `<span class="ac-pill pending">Pending</span>`
        : st === 'running' ? `<span class="ac-pill running"><span class="spin"></span> ${isDocGen ? 'Generating' : 'Running'}</span>`
            : st === 'blocked' ? `<span class="ac-pill block">Gate closed</span>`
                : isDocGen ? `<span class="ac-pill done">Ready</span>`
                    : `<span class="ac-pill ${data.tone === 'block' ? 'block' : data.tone === 'flag' ? 'flag' : 'done'}">${data.tone === 'block' ? 'Flagged' : data.tone === 'flag' ? 'Flagged' : 'Done'}</span>`;

    const locked = (st === 'pending');

    let timerBadge = '';
    if (st === 'running') {
        const liveSec = data.elapsedSeconds || 0;
        // data-timer-for gives the once-a-second tick a precise target to
        // update via textContent, instead of re-rendering the whole stage
        // (which used to re-add every card's entrance animation every
        // second - that repeated fade-in-and-rise was the "blinking").
        timerBadge = `<span class="agent-timer-badge live">${I('timer', 11)} <span data-timer-for="${agentKey}">${formatLiveClock(liveSec)}</span></span>`;
    } else if (st === 'done' && data.elapsedSeconds) {
        timerBadge = `<span class="agent-timer-badge completed">${I('timer', 11)} Took ${formatDuration(data.elapsedSeconds)}</span>`;
        if (data.completedAt) {
            timerBadge += `<span class="agent-timestamp">${formatWallClock(data.completedAt)}</span>`;
        }
    }

    // Document Generator doesn't produce a finding/desc to read on screen like
    // every other agent - its output is a document package, so the card just
    // offers a download instead of a "View entire output" drill-down.
    const body = isDocGen && (st === 'done' || st === 'blocked') ? `
    <div class="ac-finding tone-clean">Document package ready</div>
    <div class="ac-desc">The case filings and written determination have been drafted and are ready to download.</div>
    <div class="ac-foot">
        <span class="ac-expand doc-download">${I('download', 12)} Download PDF</span>
        ${timerBadge}
    </div>
  ` : isDocGen && st === 'running' ? `
    <div class="ac-desc thinking">Generating document<span class="dots"></span></div>
    <div class="thinking-bar"></div>
    <div class="ac-foot" style="margin-top:12px;">${timerBadge}</div>
  ` : (st === 'done' || st === 'blocked') ? `
    <div class="ac-finding ${agentToneClass(data.tone)}">${data.finding}</div>
    <div class="ac-desc">${data.desc}</div>
    <div class="ac-foot">
        <span class="ac-expand">${I('search', 12)} View entire output</span>
        ${timerBadge}
    </div>
  ` : st === 'running' ? `
    <div class="ac-desc thinking">Processing agent analysis<span class="dots"></span></div>
    <div class="thinking-bar"></div>
    <div class="ac-foot" style="margin-top:12px;">${timerBadge}</div>
  ` : `<div class="ac-desc">Waiting on upstream stage.</div>`;

    // A short, always-visible line describing what this agent actually does -
    // the file names it used moved to the bottom of its full reply instead
    // (see openAgentModal), since that's a detail worth having but not
    // something that needs to compete for space on the compact card.
    const descLine = meta.desc ? `<div class="ac-desc-line">${meta.desc}</div>` : '';

    const rerunBtn = (st === 'done' || st === 'blocked')
        ? `<button class="ac-rerun-btn" data-rerun="${agentKey}" data-tooltip="Rerun this agent">${I('refresh', 12)}</button>`
        : '';

    return `<div class="${cardCls}" data-agent="${agentKey}" ${locked ? 'data-locked="1"' : ''}>
    <div class="ac-top">
      <div class="ac-id"><div class="ac-ico">${I(meta.icon, 15)}</div><div><div class="ac-name">${meta.label}</div>${descLine}</div></div>
      <div style="display:flex;align-items:center;gap:6px;">${pillHtml}${rerunBtn}</div>
    </div>
    ${body}
  </div>`;
}

function renderGateOrRecord(p, screenIdx) {
    const scr = SCREENS[screenIdx];
    const s = state[p.id];
    const allDone = scr.agents.every(ak => s.agentStatus[ak] === 'done' || s.agentStatus[ak] === 'blocked') || (screenIdx === 1 && p.recognised);
    if (!allDone) return '';

    if (s.gates[screenIdx]) {
        const action = s.gates[screenIdx];
        const approver = s.gateApprover[screenIdx] || 'Unknown';
        const opts = [
            { id: 'approve', label: 'Approve', note: 'Proceed as recommended' },
            { id: 'override', label: 'Override', note: 'Proceed with amendment' },
            { id: 'escalate', label: 'Escalate', note: 'Route to senior review' },
        ];
        return `<div class="decision-record">
      <div class="dr-head"><div class="dr-title">${I('user', 13)} Human decision — Gate ${screenIdx + 1} resolved</div><div class="dr-meta">${scr.gateRole}</div></div>
      <div class="dr-options">${opts.map(o => `
        <div class="dr-opt ${o.id === action ? 'chosen c-' + o.id : ''}">
          <div class="dro-label"><span class="dro-check">${I('check', 10)}</span>${o.label}</div>
          <div class="dro-note">${o.id === action ? 'Selected' : o.note}</div>
        </div>`).join('')}</div>
      <div class="dr-approver">${I('shieldcheck', 13)} ${action === 'escalate' ? 'Escalated' : action === 'override' ? 'Overridden' : 'Approved'} by <b>${approver}</b></div>
    </div>`;
    }

    const minRank = GATE_MIN_RANK[screenIdx];
    const authorised = currentUser && currentUser.rank >= minRank;
    if (!authorised) {
        const needed = minRank >= 3 ? 'Accountable person' : scr.gateRole;
        return `<div class="gate-card">
      <div class="gate-head">${I('user', 14)} Human Decision Gate — role required</div>
      <div class="role-required">${I('alert', 13)} Requires <b>${needed}</b>. Signed in as <b>${currentUser ? currentUser.title : '—'}</b> — approve requires that authority, or escalate.</div>
      <div class="gate-actions"><button class="gbtn approve" disabled style="opacity:0.4;cursor:not-allowed;">✓ Approve</button><button class="gbtn escalate" data-gate="${screenIdx}" data-action="escalate">Escalate</button></div>
    </div>`;
    }
    return `<div class="gate-card">
    <div class="gate-head">${I('user', 14)} Human Decision Gate</div>
    <div class="gate-role">${scr.gateRole}</div>
    ${scr.gateAuthority ? `<div class="gate-authority">${scr.gateAuthority}</div>` : ''}
    <div class="gate-context">Context bus: full upstream case history available to this decision. Signed in as <b>${currentUser.name}</b>.</div>
    <div class="gate-actions">
      <button class="gbtn approve" data-gate="${screenIdx}" data-action="approve">✓ Approve</button>
      <button class="gbtn override" data-gate="${screenIdx}" data-action="override">Override</button>
      <button class="gbtn escalate" data-gate="${screenIdx}" data-action="escalate">Escalate</button>
    </div>
  </div>`;
}

/* ============================================================
   RUN SCREEN AGENTS (WITH TIMEOUT FALLBACK & PREREQUISITE GUARD)
   ============================================================ */
async function runScreenAgents(p) {
    const s = state[p.id];
    const scr = SCREENS[s.screenIdx];
    if (s.screenIdx === 1 && p.recognised) { renderHorizontalStepper(p); renderActiveStageContent(p); return; }

    let i = 0;
    function next() {
        if (i >= scr.agents.length) { renderHorizontalStepper(p); renderActiveStageContent(p); return; }
        const ak = scr.agents[i];
        i++;
        runOneAgent(p, ak, next);
    }
    next();
}

// The actual "call this one agent and update state" logic, extracted so both
// the normal sequential screen run and a manual per-agent rerun share the
// exact same behaviour instead of two versions drifting apart. onComplete is
// called once this agent finishes (success, fallback, or error) - the
// sequential runner passes its own `next` to continue the chain; a manual
// rerun passes null since there's nothing further to chain to.
function runOneAgent(p, ak, onComplete) {
    const s = state[p.id];

    // Gather existing outputs. Every downstream agent's real response consistently
    // cites the SAME blocker when nothing has been decided yet: "Recognition Check
    // has not been overridden by a recorded human decision to proceed as fraud."
    // That decision is Gate 1 (Screen 1, Case Summary) in this app's local state -
    // but it was never being communicated to the live agents at all, only the raw
    // upstream agent JSON was sent. So even after a human clicked Approve in the UI,
    // every agent from Fraud Assessment onward correctly reported not-applicable,
    // because from the agent's point of view no human decision had been made.
    // Fix: append a clearly-labelled human-decision annotation to the Recognition
    // Check output text once Gate 1 has actually been decided, so downstream agents
    // can see it.
    let recognitionCheckText = p.a.recognitionCheck?.rawText || '';
    const gate1Action = s.gates[0];
    if (gate1Action && recognitionCheckText) {
        const approver = s.gateApprover[0] || 'Unknown approver';
        const decisionLabel = gate1Action === 'approve' ? 'APPROVED — proceed as fraud'
            : gate1Action === 'override' ? 'OVERRIDDEN — proceed with amendment'
            : gate1Action === 'escalate' ? 'ESCALATED — routed to senior review'
            : gate1Action.toUpperCase();
        recognitionCheckText += `\n\n---\nHUMAN GATE DECISION (Screen 1 - Case Summary, Gate 1)\nDecision: ${decisionLabel}\nDecided by: ${approver}\nDecided at: ${s.gateDecidedAt[0] || new Date().toISOString()}\nReason: ${s.gateReason[0] || 'Not recorded'}\n---`;
    }

    const allOutputs = {
        'CASE_INTAKE_OUTPUT_TEXT': p.a.caseIntake?.rawText || '',
        'RECOGNITION_CHECK_OUTPUT_TEXT': recognitionCheckText,
        'FRAUD_ASSESSMENT_OUTPUT_TEXT': p.a.fraudAssessment?.rawText || '',
        'TRANSACTION_CLASSIFICATION_OUTPUT_TEXT': p.a.transactionClassification?.rawText || '',
        'FUNDS_TRACE_OUTPUT_TEXT': p.a.fundsTrace?.rawText || '',
        'SHADOW_CREDIT_OUTPUT_TEXT': p.a.shadowCredit?.rawText || '',
        'CHARGEBACK_PREPARATION_OUTPUT_TEXT': p.a.chargebackPreparation?.rawText || '',
        'RECALL_REPATRIATION_OUTPUT_TEXT': p.a.recallRepatriation?.rawText || '',
        'OBLIGATION_CHECK_OUTPUT_TEXT': p.a.obligationCheck?.rawText || ''
    };

    // Guard Check: Verify mandatory upstream dependencies exist
    const mandatoryKeys = AGENT_MANDATORY_INPUTS[ak] || [];
    const missingMandatory = mandatoryKeys.filter(k => !allOutputs[k] || allOutputs[k].trim().length === 0);

    if (missingMandatory.length > 0) {
        p.a[ak].finding = 'Prerequisite Missing';
        p.a[ak].desc = `Cannot execute ${AGENTS[ak].label}. Mandatory upstream requirement (${missingMandatory.join(', ')}) was not produced.`;
        p.a[ak].tone = 'block';
        s.agentStatus[ak] = 'blocked';

        renderHorizontalStepper(p);
        renderActiveStageContent(p);
        renderDashboardIfVisible();
        return;
    }

    s.agentStatus[ak] = 'running';
    p.a[ak].startTime = Date.now();
    p.a[ak].elapsedSeconds = 0;

    const timerKey = `${p.id}-${ak}`;
    if (agentTimerIntervals[timerKey]) clearInterval(agentTimerIntervals[timerKey]);

    agentTimerIntervals[timerKey] = setInterval(() => {
        p.a[ak].elapsedSeconds = Math.floor((Date.now() - p.a[ak].startTime) / 1000);
        // Surgical update - just the timer text, not a full re-render of
        // the whole stage. A full renderActiveStageContent() every second
        // was regenerating every agent card's HTML from scratch, which
        // re-triggered their entrance animation every second - that
        // repeated fade-in-and-rise was the "blinking".
        if (p.id === currentCaseId) {
            const timerEl = document.querySelector(`[data-timer-for="${ak}"]`);
            if (timerEl) timerEl.textContent = formatLiveClock(p.a[ak].elapsedSeconds);
        }
    }, 1000);

    renderHorizontalStepper(p);
    renderActiveStageContent(p);

    // Filter payload to allowed keys only
    const allowedKeys = AGENT_ALLOWED_INPUTS[ak] || [];
    const upstreamPayload = {};
    allowedKeys.forEach(k => {
        if (allOutputs[k] && allOutputs[k].trim().length > 0) {
            upstreamPayload[k] = allOutputs[k];
        }
    });

    fetch('/api/fraud/run-agent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            caseId: p.id,
            agentKey: ak,
            upstreamOutputs: upstreamPayload
        })
    })
        .then(res => res.json())
        .then(apiRes => {
            if (agentTimerIntervals[timerKey]) {
                clearInterval(agentTimerIntervals[timerKey]);
                delete agentTimerIntervals[timerKey];
            }
            // The request can't actually be cancelled mid-flight without a lot
            // more plumbing, but a response that lands after the case was
            // stopped should never silently flip a stopped agent back to done -
            // this is what makes Stop feel real rather than cosmetic.
            if (s.stopped) return;
            p.a[ak].elapsedSeconds = Math.floor((Date.now() - p.a[ak].startTime) / 1000);
            p.a[ak].completedAt = new Date().toISOString();
            p.a[ak].filesUsed = Array.isArray(apiRes.filesUsed) ? apiRes.filesUsed : [];

            if (apiRes.success && apiRes.outputText) {
                p.a[ak].isFallback = false; // explicit, so a genuine success can never be mistaken for one
                p.a[ak].rawText = apiRes.outputText;
                const parsed = parseAgentJson(apiRes.outputText);
                if (parsed && typeof parsed === 'object') {
                    const formatted = formatAgentData(ak, parsed);
                    p.a[ak].finding = formatted.finding;
                    p.a[ak].desc = formatted.desc;
                    p.a[ak].tone = formatted.tone;
                    p.a[ak].fullText = formatted.fullText;
                    if (ak === 'caseIntake') p.a[ak].urgencyLevel = formatted.urgencyLevel;
                    if (formatted.reasoning && formatted.reasoning.length) {
                        p.a[ak].reasoning = formatted.reasoning;
                    }
                } else {
                    p.a[ak].desc = apiRes.outputText.replace(/[\{\}\[\]"]/g, '').trim();
                    p.a[ak].fullText = apiRes.outputText;
                    if (ak === 'caseIntake') p.a[ak].urgencyLevel = 'Medium';
                }
                s.agentStatus[ak] = p.a[ak] && p.a[ak].blocked ? 'blocked' : 'done';
            } else {
                // Visually render error on card and populate local preset so downstream agents can run
                p.a[ak].finding = 'Live API Timeout / Fallback Applied';
                p.a[ak].desc = apiRes.message || 'Server took longer than 120s to respond.';
                p.a[ak].tone = 'flag';
                p.a[ak].isFallback = true; // NOT a real result - every display surface that shows derived
                // info (header amount/channel/product, classification, trigger, urgency) must check this
                // before trusting anything on this agent, otherwise a timed-out agent looks identical to
                // a genuine success and static demo data quietly stands in for real analysis.
                p.a[ak].rawText = JSON.stringify({
                    status: 'completed',
                    agent: ak,
                    recommendation: { action: p.a[ak]?.finding || 'Processed', reason: p.a[ak]?.desc || 'Analysis completed.' }
                });
                if (ak === 'caseIntake') p.a[ak].urgencyLevel = 'Medium';
                s.agentStatus[ak] = 'done';
            }

            // SLA clock starts the moment Case Intake genuinely finishes (live or fallback) -
            // never before, and never twice.
            if (ak === 'caseIntake' && !s.slaStartedAt) {
                s.urgencyLevel = (p.a.caseIntake && p.a.caseIntake.urgencyLevel) || 'Medium';
                s.slaStartedAt = Date.now();
            }

            if (ak === 'caseIntake' && s.screenIdx === 0 && s.messages.length === 0) { pushMessage(p, 0); }
            renderHorizontalStepper(p); renderActiveStageContent(p); renderCaseHeaderPills(p); renderCaseHeaderInfo(p); renderDashboardIfVisible(); renderCasesIfVisible();
            if (onComplete) onComplete();
        })
        .catch(err => {
            if (agentTimerIntervals[timerKey]) {
                clearInterval(agentTimerIntervals[timerKey]);
                delete agentTimerIntervals[timerKey];
            }
            if (s.stopped) return;
            p.a[ak].elapsedSeconds = Math.floor((Date.now() - p.a[ak].startTime) / 1000);
            p.a[ak].completedAt = new Date().toISOString();
            p.a[ak].finding = 'Connection Error';
            p.a[ak].desc = err.message || 'Failed to reach local API service.';
            p.a[ak].tone = 'block';
            p.a[ak].isFallback = true; // see the timeout branch above - same reasoning
            if (ak === 'caseIntake') p.a[ak].urgencyLevel = 'High';
            s.agentStatus[ak] = 'done';
            if (ak === 'caseIntake' && !s.slaStartedAt) {
                s.urgencyLevel = (p.a.caseIntake && p.a.caseIntake.urgencyLevel) || 'High';
                s.slaStartedAt = Date.now();
            }
            renderHorizontalStepper(p); renderActiveStageContent(p); renderCaseHeaderPills(p); renderCaseHeaderInfo(p); renderDashboardIfVisible(); renderCasesIfVisible();
            if (onComplete) onComplete();
        });
}

// Manually re-runs a single agent that has already completed (or blocked) -
// useful after fixing an evidence file, or just to retry past a timeout,
// without needing to re-run the whole screen from the start.
function rerunAgent(p, ak) {
    const s = state[p.id];
    if (s.agentStatus[ak] === 'running') return; // already in flight
    runOneAgent(p, ak, null);
}

// Soft stop: can't actually abort an in-flight HTTP request without a lot
// more plumbing (AbortController wiring through every call site), but this
// makes Stop genuinely effective rather than cosmetic - any agent currently
// "running" gets visually blocked immediately, every timer for this case is
// cleared, and the fetch handlers themselves check s.stopped before applying
// a late-arriving response, so a request that resolves after the stop can
// never silently revive the case.
function stopCase(p) {
    const s = state[p.id];
    s.stopped = true;
    Object.keys(p.a).forEach(ak => {
        const timerKey = `${p.id}-${ak}`;
        if (agentTimerIntervals[timerKey]) {
            clearInterval(agentTimerIntervals[timerKey]);
            delete agentTimerIntervals[timerKey];
        }
        if (s.agentStatus[ak] === 'running') {
            s.agentStatus[ak] = 'blocked';
            p.a[ak].finding = 'Stopped by user';
            p.a[ak].desc = 'This case was stopped while this agent was running. Rerun the case to start again.';
            p.a[ak].tone = 'block';
        }
    });
    renderHorizontalStepper(p); renderActiveStageContent(p); renderDashboardIfVisible(); renderCasesIfVisible();
    updateStopButtonState(p);
    showToast(`${p.customer}'s case stopped`, 'warn', 'alert');
}

// Full reset - clears every agent's run data and the case's own progress
// state back to a fresh-case shape, then starts the pipeline again from
// Case Intake. Destructive (it discards any recorded human decisions too),
// so it's confirmed before running.
function rerunEntireCase(p) {
    if (!window.confirm(`Rerun the entire case for ${p.customer}? This clears every agent's output and every human decision recorded so far, and starts the case again from Case Intake.`)) {
        return;
    }
    const oldTimerKeys = Object.keys(agentTimerIntervals).filter(k => k.startsWith(`${p.id}-`));
    oldTimerKeys.forEach(k => { clearInterval(agentTimerIntervals[k]); delete agentTimerIntervals[k]; });

    state[p.id] = freshState(p);
    Object.keys(p.a).forEach(ak => {
        const entry = p.a[ak];
        delete entry.rawText; delete entry.fullText; delete entry.finding; delete entry.desc;
        delete entry.tone; delete entry.isFallback; delete entry.completedAt; delete entry.elapsedSeconds;
        delete entry.startTime; delete entry.filesUsed; delete entry.urgencyLevel; delete entry.reasoning;
    });

    renderCaseHeaderPills(p); renderCaseHeaderInfo(p);
    renderStatusBanner(p); renderHorizontalStepper(p); renderActiveStageContent(p); updateProgressRing(p);
    renderDashboardIfVisible(); renderCasesIfVisible();
    updateStopButtonState(p);
    showToast(`${p.customer}'s case reset - rerunning from Case Intake`, 'msg', 'msg');
    runScreenAgents(p);
}

function updateStopButtonState(p) {
    const s = state[p.id];
    const stopBtn = document.getElementById('stopCaseBtn');
    if (!stopBtn) return;
    stopBtn.disabled = !!s.stopped;
    stopBtn.textContent = s.stopped ? '■ Stopped' : '■ Stop case';
}

function handleGate(p, screenIdx, action, reason) {
    const s = state[p.id];
    s.gates[screenIdx] = action;
    s.gateApprover[screenIdx] = currentUser ? `${currentUser.name} (${currentUser.title})` : null;
    s.gateDecidedAt[screenIdx] = new Date().toISOString();
    s.gateReason[screenIdx] = reason || null;

    const gateLabel = SCREENS[screenIdx] ? SCREENS[screenIdx].title : `Gate ${screenIdx + 1}`;
    if (action === 'approve') showToast(`${gateLabel} approved`, 'success', 'check');
    else if (action === 'override') showToast(`${gateLabel} overridden`, 'warn', 'alert');
    else showToast(`${gateLabel} escalated for senior review`, 'warn', 'alert');

    pushMessagesForGate(p, screenIdx);

    if (action === 'escalate') {
        s.escalated = true; s.escalatedAt = screenIdx;
        renderStatusBanner(p); renderHorizontalStepper(p); renderActiveStageContent(p); updateProgressRing(p);
        renderCases(); renderDashboardIfVisible();
        return;
    }
    s.escalated = false;

    if (screenIdx === 1 && p.recognised) {
        s.closed = true;
        renderStatusBanner(p); renderHorizontalStepper(p); renderActiveStageContent(p); updateProgressRing(p);
        renderCases(); renderDashboardIfVisible();
        return;
    }
    if (screenIdx < SCREENS.length - 1) {
        s.screenIdx = screenIdx + 1;
        s.activeStageTab = s.screenIdx;
        renderStatusBanner(p);
        if (!s.stopped) runScreenAgents(p);
    } else {
        s.closed = true;
        releaseArtefacts(p);
    }
    renderStatusBanner(p); renderHorizontalStepper(p); renderActiveStageContent(p); updateProgressRing(p);
    renderCases(); renderDashboardIfVisible();
}

function releaseArtefacts(p) {
    const s = state[p.id];
    ARTEFACT_DEFS.forEach(def => {
        let eligible = def.always || (def.needsMule && p.mule) || (def.needsCASP && p.casp) || (def.needsSTR && p.str) || (def.needsChargeback && p.classification !== 'not-recoverable');
        if (eligible) s.artefacts[def.id] = 'released';
    });
}

function renderDashboardIfVisible() { if (document.getElementById('page-dashboard').classList.contains('active')) renderDashboard(); }
function renderCasesIfVisible() { if (document.getElementById('page-cases').classList.contains('active')) renderCases(); }

/* ============================================================
   SLA POLICY — response-time targets by urgency tier.
   Countdown starts when Case Intake completes (s.slaStartedAt),
   never before - matches "urgency only shows once intake is done".
   ============================================================ */
const SLA_HOURS = { Critical: 4, High: 24, Medium: 72, Low: 120 }; // Medium/Low expressed as 3 / 5 business days
function slaInfo(p) {
    const s = state[p.id];
    if (!s.slaStartedAt || !s.urgencyLevel) return null;
    const targetHours = SLA_HOURS[s.urgencyLevel] || SLA_HOURS.Medium;
    const deadline = s.slaStartedAt + targetHours * 3600 * 1000;
    const remainingMs = deadline - Date.now();
    return { level: s.urgencyLevel, deadline, remainingMs, overdue: remainingMs <= 0 };
}
function formatSlaCountdown(remainingMs) {
    const abs = Math.abs(remainingMs);
    const h = Math.floor(abs / 3600000);
    const m = Math.floor((abs % 3600000) / 60000);
    const label = h >= 24 ? `${Math.floor(h / 24)}d ${h % 24}h` : `${h}h ${m}m`;
    return remainingMs <= 0 ? `Overdue ${label}` : label;
}
// Keep the Cases table SLA column ticking while it's on screen.
setInterval(() => { renderCasesIfVisible(); }, 60000);


const RING_CIRC = 138.2;
function updateProgressRing(p) {
    if (p.id !== currentCaseId) return; // see renderStatusBanner - same stale-callback guard
    const s = state[p.id];
    const fill = document.getElementById('ringFill'); const label = document.getElementById('ringLabel');
    if (!fill) return;
    // Only the genuinely-closed deflection path uses the shorter 2-screen
    // scale - before that, even a persona whose narrative *could* end up
    // deflected is progressing through the normal 6-screen pipeline like
    // any other case, and should read that way (this was showing "0/2"
    // for a case that had barely started, instead of "1/6").
    const denom = (s.closed && p.recognised) ? 2 : SCREENS.length;
    const num = Math.min(s.screenIdx + (s.closed ? 1 : 0), denom);
    const frac = Math.min(num / denom, 1);
    fill.style.strokeDashoffset = (RING_CIRC * (1 - frac)).toFixed(1);
    if (label) label.textContent = `${num}/${denom}`;
}

const mscrim = document.getElementById('mscrim');
const agentModal = document.getElementById('agentModal');
const policyModal = document.getElementById('policyModal');
const gateReasonModal = document.getElementById('gateReasonModal');

function closeModals() {
    if (mscrim) mscrim.classList.remove('open');
    if (agentModal) agentModal.classList.remove('open');
    if (policyModal) policyModal.classList.remove('open');
    if (gateReasonModal) gateReasonModal.classList.remove('open');
}

let pendingGateDecision = null; // { p, screenIdx, action } - set while the reason modal is open

function openGateReasonModal(p, screenIdx, action) {
    pendingGateDecision = { p, screenIdx, action };
    const scr = SCREENS[screenIdx];
    const actionLabel = action === 'approve' ? 'Approve' : action === 'override' ? 'Override' : action === 'escalate' ? 'Escalate' : action;

    const grIco = document.getElementById('grIco');
    if (grIco) grIco.innerHTML = I('check', 18);
    const grTitle = document.getElementById('grTitle');
    if (grTitle) grTitle.textContent = `${actionLabel} — Gate ${screenIdx + 1}`;
    const grSub = document.getElementById('grSub');
    if (grSub) grSub.textContent = `${scr ? scr.title : ''} · ${p.customer}`;

    const grInput = document.getElementById('grReasonInput');
    if (grInput) { grInput.value = ''; }
    const grError = document.getElementById('grError');
    if (grError) grError.style.display = 'none';

    if (mscrim) mscrim.classList.add('open');
    if (gateReasonModal) gateReasonModal.classList.add('open');
    if (grInput) setTimeout(() => grInput.focus(), 50);
}

function confirmGateReason() {
    if (!pendingGateDecision) return;
    const grInput = document.getElementById('grReasonInput');
    const reason = grInput ? grInput.value.trim() : '';
    const grError = document.getElementById('grError');

    if (!reason) {
        if (grError) grError.style.display = 'block';
        if (grInput) grInput.focus();
        return;
    }

    const { p, screenIdx, action } = pendingGateDecision;
    pendingGateDecision = null;
    closeModals();
    handleGate(p, screenIdx, action, reason);
}


function openAgentModal(p, agentKey) {
    const meta = AGENTS[agentKey];
    const data = p.a[agentKey];
    if (!data) return;

    const amIco = document.getElementById('amIco');
    if (amIco) amIco.innerHTML = I(meta.icon, 18);

    const amName = document.getElementById('amName');
    if (amName) amName.textContent = meta.label;

    const amSub = document.getElementById('amSub');
    if (amSub) amSub.textContent = `${p.customer} · ${p.id} · ${meta.tier === 'reasoning' ? 'Reasoning tier' : 'Standard tier'}`;

    // Response time now lives in the modal header itself, right under the
    // customer/case-id line, instead of floating as its own pill at the top
    // of the body - same container as the agent name throughout.
    const amTime = document.getElementById('amTime');
    if (amTime) {
        amTime.innerHTML = data.elapsedSeconds
            ? `${I('timer', 11)} Agent Response Time: ${formatDuration(data.elapsedSeconds)}${data.completedAt ? ` · Completed ${formatWallClock(data.completedAt)}` : ''}`
            : '';
    }

    let html = '';
    html += renderRichAgentReport(data.rawText || data.fullText || data, agentKey);

    // The real evidence files this agent actually used for this case, from
    // the live API response - shown at the very end of the full reply now,
    // not competing for space on the compact card.
    if (data.filesUsed && data.filesUsed.length) {
        html += `<div class="am-files-footer">
            <div class="am-files-label">${I('filetext', 12)} Evidence files used</div>
            <div class="am-files-list">${data.filesUsed.join(', ')}</div>
        </div>`;
    }

    const amBody = document.getElementById('amBody');
    if (amBody) amBody.innerHTML = html;

    if (mscrim) mscrim.classList.add('open');
    if (agentModal) agentModal.classList.add('open');
}

/* ============================================================
   WORKSPACE TABS — Report / Case Files / Correspondence
   All three read live from p.a[agentKey], the same store the
   Agents tab and the agent detail modal already populate from
   runScreenAgents(). Nothing here is separately scripted data —
   if an agent hasn't returned a result yet, its section says so.
   ============================================================ */
function wireWorkspaceTabs(p) {
    document.querySelectorAll('.wtab').forEach(t => {
        t.onclick = () => {
            activeWorkspaceTab = t.dataset.wtab;
            document.querySelectorAll('.wtab').forEach(x => x.classList.toggle('active', x === t));
            const panels = { agents: 'wbScroll', report: 'wbReportPanel', corr: 'wbCorrPanel', summary: 'wbSummaryPanel' };
            Object.entries(panels).forEach(([key, id]) => {
                const el = document.getElementById(id);
                if (el) el.style.display = (key === activeWorkspaceTab) ? 'block' : 'none';
            });
            renderWorkspaceTab(p);
        };
    });
}

function renderWorkspaceTab(p) {
    if (activeWorkspaceTab === 'report') renderReportTab(p);
    else if (activeWorkspaceTab === 'corr') renderCorrespondenceTab(p);
    else if (activeWorkspaceTab === 'summary') renderSummaryTab(p);
}

function agentRunState(p, agentKey) {
    const s = state[p.id];
    return s.agentStatus[agentKey] || 'pending';
}

/* ---- Report tab: builds up as each agent completes ---- */
function renderReportTab(p) {
    const panel = document.getElementById('wbReportPanel');
    if (!panel) return;

    panel.innerHTML = buildCaseFileHtml(p);

    const btnPdf = document.getElementById('reportDownloadPdf');
    if (btnPdf) btnPdf.onclick = () => downloadReportAsPdf(p);
    const btnDocx = document.getElementById('reportDownloadDocx');
    if (btnDocx) btnDocx.onclick = () => downloadReportAsDocx(p);
}

/* ---- Structured case-file summary, styled after the CDD case-file reference:
       identity block, case overview, a scannable agent-findings list, and a
       decision summary - all pulled from real case/agent/gate state, nothing
       hand-written per case. Shared by the on-screen Report tab and both the
       PDF and DOCX export paths, so what you download matches what you see. ---- */
function buildCaseFileHtml(p, forExport) {
    const s = state[p.id];
    const totalAgents = Object.keys(p.a).length;
    const doneAgents = Object.keys(p.a).filter(ak => ['done', 'blocked'].includes(agentRunState(p, ak))).length;
    const statusPill = s.closed ? 'Closed' : s.escalated ? 'Escalated' : doneAgents === 0 ? 'Awaiting agents…' : 'In progress';
    const statusCls = s.closed ? 'clean' : s.escalated ? 'block' : 'flag';

    const intakeGenuinelyDone = s.agentStatus && s.agentStatus.caseIntake === 'done'
        && p.a.caseIntake && p.a.caseIntake.isFallback !== true;
    const sla = slaInfo(p);

    // Vulnerability only ever reflects what Case Intake genuinely (not via
    // fallback) confirmed - previously fell back to the case's static
    // narrative flag whenever live data wasn't available, which showed
    // "Not vulnerable" or "Vulnerable" as fact even when no agent had
    // actually run yet.
    const liveVulnerable = getLiveVulnerability(p);
    const vulnerableLabel = liveVulnerable === true ? 'Vulnerable customer' : liveVulnerable === false ? 'Not vulnerable' : 'Unknown — pending Case Intake';

    // Current classification mirrors the dashboard donut's live-gated logic -
    // a case only shows a real classification once it has actually reached
    // that point, not from the moment the app loads, and not off a fallback.
    const classifiedGenuinely = s.agentStatus && s.agentStatus.transactionClassification === 'done'
        && p.a.transactionClassification && p.a.transactionClassification.isFallback !== true;
    const currentBucket = s.closed && p.recognised ? 'Recognised — deflected'
        : classifiedGenuinely ? { recoverable: 'Recoverable (CNP)', 'not-recoverable': 'Chase & Repatriate', mixed: 'Mixed rails / Sim Swap' }[p.classification] || 'Pending'
            : 'Pending';

    // Trigger used to be the case's static narrative headline, shown
    // unconditionally regardless of whether any agent had run - now it's
    // Case Intake's own real finding once genuinely available, or an honest
    // "not yet run" placeholder before that.
    const triggerText = intakeGenuinelyDone && p.a.caseIntake.finding ? p.a.caseIntake.finding : 'Pending — awaiting Case Intake';

    const decidedGates = SCREENS.map((scr, i) => s.gates[i] ? { i, scr, action: s.gates[i], approver: s.gateApprover[i], reason: s.gateReason[i], decidedAt: s.gateDecidedAt[i] } : null).filter(Boolean);

    const liveInfo = getLiveCaseInfo(p);

    return `
    <div class="case-file-header">
        <div class="cf-header-top">
            <div>
                <div class="cf-title">Card Fraud Case File</div>
                <div class="cf-meta">${p.id} · ${p.customer} — ${doneAgents}/${totalAgents} agents complete <span class="cf-dot"></span></div>
            </div>
            <div class="cf-actions">
                ${forExport ? '' : `<button class="btn ghost pill-btn" id="reportDownloadPdf">${I('download', 13)} PDF</button>
                <button class="btn ghost pill-btn" id="reportDownloadDocx">${I('download', 13)} DOCX</button>`}
                <span class="cf-status-pill ${statusCls}">${statusPill}</span>
            </div>
        </div>

        <div class="cf-header-divider"></div>
        <div class="cf-section-label" style="margin-top:0;">Customer &amp; Case Identity</div>
        <div class="cf-grid">
            <div><div class="cf-label">Full name</div><div class="cf-value">${p.customer}</div><div class="cf-subvalue">${p.id}</div></div>
            <div><div class="cf-label">Tag · Channel</div><div class="cf-value">${p.tag} · ${liveInfo.channel}</div></div>
            <div><div class="cf-label">Product</div><div class="cf-value">${liveInfo.product}</div></div>
            <div><div class="cf-label">Disputed amount</div><div class="cf-value">${liveInfo.amount}</div></div>
            <div><div class="cf-label">Urgency</div><div class="cf-value">${intakeGenuinelyDone && s.urgencyLevel ? s.urgencyLevel : '—'}</div></div>
            <div><div class="cf-label">SLA</div><div class="cf-value">${sla ? formatSlaCountdown(sla.remainingMs) : '—'}</div></div>
        </div>
    </div>

    <div class="case-overview-card">
        <div class="cf-section-label" style="margin-top:0;">Case Overview</div>
        <div class="cf-grid">
            <div class="cf-span2"><div class="cf-label">Trigger</div><div class="cf-value">${triggerText}</div></div>
            <div><div class="cf-label">Current classification</div><div class="cf-value">${currentBucket}</div></div>
            <div><div class="cf-label">Vulnerability</div><div class="cf-value">${vulnerableLabel}</div></div>
        </div>
    </div>

    <div class="case-overview-card">
        <div class="cf-section-label" style="margin-top:0;">Agent Findings</div>
        <div class="cf-findings">
            ${SCREENS.map(scr => scr.agents.map(ak => {
        const meta = AGENTS[ak];
        const st = agentRunState(p, ak);
        const data = p.a[ak];
        const done = st === 'done' || st === 'blocked';
        return `<div class="cf-finding-row">
                <span class="kv-dot" style="background:${!done ? '#D7D2E8' : data.tone === 'clean' ? 'var(--green-700)' : data.tone === 'block' ? 'var(--red-700)' : 'var(--amber-700)'}"></span>
                <span class="cf-finding-label">${meta.label}</span>
                <span class="cf-finding-text">${done ? (data.finding || '—') : 'Not yet run'}</span>
            </div>`;
    }).join('')).join('')}
        </div>
    </div>

    <div class="case-overview-card">
        <div class="cf-section-label" style="margin-top:0;">Decision Summary</div>
        ${decidedGates.length ? `
        <div class="cf-decisions">
            ${decidedGates.map(g => `
            <div class="cf-decision-row">
                <div class="cf-decision-head">
                    <span class="badge ${g.action === 'escalate' ? 'b-high' : g.action === 'override' ? 'b-medium' : 'b-low'}">${g.action === 'approve' ? 'Approved' : g.action === 'override' ? 'Overridden' : 'Escalated'}</span>
                    <span class="cf-finding-label">${g.scr.title} (Gate ${g.i + 1})</span>
                    <span class="cf-decision-time">${g.decidedAt ? formatWallClock(g.decidedAt) : ''}</span>
                </div>
                <div class="cf-decision-meta">Decided by ${g.approver || 'Unknown approver'}${g.reason ? ` — "${g.reason}"` : ''}</div>
            </div>`).join('')}
        </div>` : `<div class="report-empty"><b>No decision yet</b>Progress the case through its gates in the Agents tab to record a decision here.</div>`}
    </div>
    `;
}

/* ---- PDF export: opens a print-styled window and hands off to the browser's
       native print dialog, where "Save as PDF" is a standard destination -
       genuinely produces a real PDF with zero external dependencies. ---- */
function downloadReportAsPdf(p) {
    const win = window.open('', '_blank');
    if (!win) { showToast('Pop-up blocked - allow pop-ups to export PDF.', 'flag', 'flag'); return; }
    win.document.write(`<!DOCTYPE html><html><head><title>${p.id} — Case File</title>
        <style>
            body { font-family: 'Plus Jakarta Sans', Arial, sans-serif; color: #150F26; padding: 32px; max-width: 900px; margin: 0 auto; }
            * { box-sizing: border-box; }
            @media print { .cf-actions { display: none !important; } }
        </style>
    </head><body>${buildCaseFileHtml(p, true)}</body></html>`);
    win.document.close();
    win.onload = () => { win.focus(); win.print(); };
}

/* ---- DOCX export: Word (and LibreOffice) will open an HTML file saved with
       a .doc extension - a well-established lightweight technique that needs
       no server-side conversion library. Not a true OOXML .docx, but opens
       correctly as an editable Word document, which is what matters here. ---- */
function downloadReportAsDocx(p) {
    const htmlContent = `<!DOCTYPE html><html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">
        <head><meta charset="utf-8"><title>${p.id} — Case File</title>
        <style>body { font-family: Calibri, Arial, sans-serif; color: #150F26; } * { box-sizing: border-box; }</style>
        </head><body>${buildCaseFileHtml(p, true)}</body></html>`;
    const blob = new Blob(['\ufeff', htmlContent], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${p.id}-case-file.doc`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('Case file downloaded as .doc', 'msg', 'msg');
}

/* ---- Document Generator doesn't have a "reply" the way other agents do -
       its real output is a structured document package description, not
       something a person reads on screen. Instead of an inline card/modal,
       its result becomes a downloadable PDF - same print-based technique as
       the case file export, so it needs no server-side PDF library either. ---- */
function downloadDocumentGeneratorPdf(p) {
    const data = p.a.documentGenerator;
    if (!data || (!data.rawText && !data.finding)) {
        showToast('Document is still generating - try again once it completes.', 'flag', 'flag');
        return;
    }
    const win = window.open('', '_blank');
    if (!win) { showToast('Pop-up blocked - allow pop-ups to download the document.', 'flag', 'flag'); return; }

    const parsed = data.rawText ? parseAgentJson(data.rawText) : null;
    const bodyHtml = parsed
        ? renderRichAgentReport(parsed, 'documentGenerator')
        : `<div style="font-size:13px;line-height:1.6;"><b>${data.finding || ''}</b><p style="margin-top:8px;color:#5E5771;">${data.desc || ''}</p></div>`;

    win.document.write(`<!DOCTYPE html><html><head><title>${p.id} — Generated Documents</title>
        <style>
            body { font-family: 'Plus Jakarta Sans', Arial, sans-serif; color: #150F26; padding: 32px; max-width: 900px; margin: 0 auto; }
            * { box-sizing: border-box; }
        </style>
    </head><body>
        <div style="border-bottom:2px solid #EFEDF7;padding-bottom:12px;margin-bottom:20px;">
            <div style="font-size:20px;font-weight:800;">Generated Case Documents</div>
            <div style="font-size:12px;color:#5E5771;margin-top:4px;">${p.id} · ${p.customer} · ${formatWallClock(data.completedAt) || ''}</div>
        </div>
        ${bodyHtml}
    </body></html>`);
    win.document.close();
    win.onload = () => { win.focus(); win.print(); };
}


/* ---- Correspondence tab: Funds Trace (where it went) and
       Recall & Repatriation (outbound chases + replies), live ---- */
// Builds the initial SAPS voluntary criminal complaint draft from real case
// data - confirmed against a real completed Obligation Check response
// (voluntaryCriminalComplaint.status/reason/humanDecisionRequired). Only
// ever a starting point: the human can edit every word before it goes
// anywhere, and nothing here gets sent automatically.
function generateSapsDraft(p) {
    const info = getLiveCaseInfo(p);
    const obl = p.a.obligationCheck;
    const parsed = obl && obl.rawText ? parseAgentJson(obl.rawText) : null;
    const vcc = (parsed && gP(parsed, 'voluntaryCriminalComplaint', 'voluntaryCriminalComplaint')) || {};
    const caseRef = (parsed && gP(parsed, 'caseRef', 'case Ref')) || p.id;

    const subject = `Voluntary Criminal Complaint — Case ${caseRef} — ${p.customer}`;
    const body = `To: South African Police Service (SAPS) — Cyber/Commercial Crimes Unit
Case Reference: ${caseRef}
Customer: ${p.customer}
Disputed Amount: ${info.amount}

I am writing on behalf of FNB to voluntarily report the above matter for evidence preservation purposes.

${vcc.reason || 'A voluntary complaint may be operationally useful for evidence preservation and to obtain a case number should any later recovery process require one.'}

This complaint is submitted voluntarily. No statutory reporting duty has been identified as applying to this case. A case number is requested for our records.

Regards,
[Investigator name]
FNB Fraud Operations`;

    return { subject, body };
}

// Whether Obligation Check has genuinely (not via fallback) determined that
// a human actually needs to decide on the voluntary SAPS complaint - the
// draft option only appears when that's actually true, not for every case.
function getSapsSuitability(p) {
    const s = state[p.id];
    const genuinelyDone = s.agentStatus && s.agentStatus.obligationCheck === 'done'
        && p.a.obligationCheck && p.a.obligationCheck.isFallback !== true;
    if (!genuinelyDone || !p.a.obligationCheck.rawText) return false;
    const parsed = parseAgentJson(p.a.obligationCheck.rawText);
    const vcc = parsed && gP(parsed, 'voluntaryCriminalComplaint', 'voluntaryCriminalComplaint');
    return !!(vcc && vcc.humanDecisionRequired === true);
}

function renderSapsDraftCard(p) {
    const s = state[p.id];
    if (!getSapsSuitability(p)) return '';

    if (!s.sapsDraft) {
        return `<div class="corr-card">
            <div class="cc-head"><div class="cc-ico">${I('filetext', 14)}</div>
                <div><div class="cc-title">SAPS Voluntary Criminal Complaint</div><div class="cc-sub">Obligation Check flagged this as a human decision</div></div>
                <span class="cc-status pending">Not drafted</span></div>
            <div style="padding:12px 0;">
                <p style="font-size:12.5px;color:var(--text-2);margin:0 0 10px;">Obligation Check determined this case needs a human decision on a voluntary SAPS complaint. A draft can be prepared from the case's real data for a human to review and edit before it's used.</p>
                <button class="btn primary pill-btn" id="genSapsDraftBtn">Draft SAPS complaint email</button>
            </div>
        </div>`;
    }

    return `<div class="corr-card">
        <div class="cc-head"><div class="cc-ico">${I('filetext', 14)}</div>
            <div><div class="cc-title">SAPS Voluntary Criminal Complaint</div><div class="cc-sub">Draft — not sent, edit freely before use</div></div>
            <span class="cc-status done">Draft</span></div>
        <div style="padding:12px 0;">
            <label class="gr-label" for="sapsSubjectInput">Subject</label>
            <input type="text" id="sapsSubjectInput" class="case-search-input" style="width:100%;border:1px solid var(--border);border-radius:8px;padding:8px 10px;margin-bottom:10px;" value="${s.sapsDraft.subject.replace(/"/g, '&quot;')}">
            <label class="gr-label" for="sapsBodyInput">Body</label>
            <textarea id="sapsBodyInput" class="gr-textarea" rows="12" style="width:100%;">${s.sapsDraft.body}</textarea>
            <div style="display:flex;gap:8px;margin-top:10px;">
                <button class="btn ghost pill-btn" id="regenSapsDraftBtn">Regenerate from case data</button>
            </div>
        </div>
    </div>`;
}

// Real counterparties come from Funds Trace's own `counterparties` field
// (confirmed real structure: [{name, type}]) - not guessed or invented.
function getCaseCounterparties(p) {
    const ft = p.a.fundsTrace;
    const parsed = ft && ft.rawText ? parseAgentJson(ft.rawText) : null;
    if (!parsed) return [];
    return gP(parsed, 'counterparties') || [];
}

// Decides what kind of email a counterparty needs and drafts it from real
// case data - this genuinely differs per persona, not just per counterparty:
// if Recall & Repatriation found itself not-applicable (recovery is fully
// owned by a scheme chargeback route, as in Sipho's case), counterparties
// get an acquirer/merchant fraud notification built from Chargeback
// Preparation's real filing data. If Recall & Repatriation is genuinely
// applicable (a counterparty bank/CASP actually needs to be chased, as in
// cases with no scheme route), counterparties get a funds-recall request
// built from Recall & Repatriation's own real reasoning instead.
function generateCounterpartyDraft(p, counterparty) {
    const info = getLiveCaseInfo(p);
    const cb = p.a.chargebackPreparation;
    const cbParsed = cb && cb.rawText ? parseAgentJson(cb.rawText) : null;
    const rar = p.a.recallRepatriation;
    const rarParsed = rar && rar.rawText ? parseAgentJson(rar.rawText) : null;

    const caseRef = (cbParsed && gP(cbParsed, 'caseRef', 'case Ref')) || (rarParsed && gP(rarParsed, 'caseRef', 'case Ref')) || p.id;
    const rarApplicable = rarParsed && rarParsed.applicability && rarParsed.applicability !== 'not-applicable';

    if (rarApplicable) {
        const rec = gP(rarParsed, 'recommendation') || {};
        const subject = `Funds Recall Request — ${counterparty.name} — Case ${caseRef}`;
        const body = `To: ${counterparty.name}${counterparty.type ? ` (${counterparty.type})` : ''} — Fraud/Compliance Desk
Case Reference: ${caseRef}
Disputed Amount: ${info.amount}

We are writing to request your urgent assistance in recalling funds connected to a confirmed fraud case linked to your institution.

${rec.reason || 'Please treat this as a formal request for assistance in restricting and returning the funds identified above.'}

Please confirm receipt of this request and advise on the current status and any hold placed on the funds at your earliest opportunity.

Regards,
FNB Fraud Operations`;
        return { subject, body };
    }

    const chargebacks = (cbParsed && gP(cbParsed, 'chargebacks')) || [];
    const match = chargebacks.find(c => String(c.merchant || '').toUpperCase() === String(counterparty.name).toUpperCase());
    const subject = `Fraud Notification — ${counterparty.name} — Case ${caseRef}`;
    const body = `To: ${counterparty.name}${counterparty.type ? ` (${counterparty.type})` : ''} — Fraud/Chargeback Desk
Case Reference: ${caseRef}
Disputed Amount: ${match ? `R${Number(match.amount).toLocaleString('en-ZA', { minimumFractionDigits: 2 })}` : info.amount}
${match ? `Reference: ${match.chargebackRef || ''}` : ''}
${match ? `Scheme Condition: ${match.scheme || ''} ${match.condition || ''}`.trim() : ''}
${match && match.filingDeadline ? `Filing Deadline: ${match.filingDeadline}` : ''}

We are formally notifying you of a confirmed card-not-present fraud dispute involving a transaction processed through your merchant account. A chargeback has been prepared under the scheme condition referenced above and will be filed within the applicable window.

Please preserve all relevant transaction and delivery records pending the chargeback outcome, and direct any queries to this case reference.

Regards,
FNB Fraud Operations`;
    return { subject, body };
}

function renderCounterpartyDraftCard(p, counterparty) {
    const s = state[p.id];
    const key = counterparty.name;
    const draft = s.counterpartyDrafts[key];

    if (!draft) {
        return `<div class="corr-card">
            <div class="cc-head"><div class="cc-ico">${I('send', 14)}</div>
                <div><div class="cc-title">${counterparty.name}</div><div class="cc-sub">${counterparty.type || 'Counterparty'}</div></div>
                <span class="cc-status pending">Not drafted</span></div>
            <div style="padding:12px 0;">
                <button class="btn primary pill-btn" data-gen-cp="${key}">Draft email</button>
            </div>
        </div>`;
    }

    const sent = draft.status === 'sent';
    return `<div class="corr-card">
        <div class="cc-head"><div class="cc-ico">${I('send', 14)}</div>
            <div><div class="cc-title">${counterparty.name}</div><div class="cc-sub">${counterparty.type || 'Counterparty'}${sent ? ' · Sent' : ' · Draft — edit freely before sending'}</div></div>
            <span class="cc-status ${sent ? 'done' : 'pending'}">${sent ? 'Sent' : 'Draft'}</span></div>
        <div style="padding:12px 0;">
            <label class="gr-label">Subject</label>
            <input type="text" class="case-search-input cp-subject-input" data-cp="${key}" style="width:100%;border:1px solid var(--border);border-radius:8px;padding:8px 10px;margin-bottom:10px;" value="${draft.subject.replace(/"/g, '&quot;')}" ${sent ? 'disabled' : ''}>
            <label class="gr-label">Body</label>
            <textarea class="gr-textarea cp-body-input" data-cp="${key}" rows="10" style="width:100%;" ${sent ? 'disabled' : ''}>${draft.body}</textarea>
            <div style="display:flex;gap:8px;margin-top:10px;">
                ${sent ? '' : `<button class="btn primary pill-btn" data-send-cp="${key}">Send email</button>
                <button class="btn ghost pill-btn" data-regen-cp="${key}">Regenerate</button>`}
            </div>
        </div>
    </div>`;
}

function renderCorrespondenceTab(p) {
    const panel = document.getElementById('wbCorrPanel');
    if (!panel) return;
    // Only Funds Trace needs to have run for counterparties to be known -
    // Recall & Repatriation's applicability decides which kind of email
    // each counterparty gets (see generateCounterpartyDraft), not whether
    // one gets drafted at all.
    const ftDone = ['done', 'blocked'].includes(agentRunState(p, 'fundsTrace'));
    const counterparties = ftDone ? getCaseCounterparties(p) : [];
    const sapsCard = renderSapsDraftCard(p);

    if (!ftDone && !sapsCard) {
        panel.innerHTML = `<div class="corr-empty"><b>No counterparty correspondence yet</b>This becomes available once Funds Trace has run and identified who the disputed value actually moved to. If this case turns out to be merchant-only with a clean scheme route, or is recognised as the customer's own spend, some or all of this tab may stay empty — that's expected, not a gap.</div>`;
        wireSapsDraftHandlers(p);
        return;
    }

    const counterpartyCards = counterparties.length
        ? counterparties.map(cp => renderCounterpartyDraftCard(p, cp)).join('')
        : (ftDone ? `<div class="corr-card"><div class="cc-head"><div class="cc-ico">${I('trace', 14)}</div>
            <div><div class="cc-title">No counterparties identified</div><div class="cc-sub">Funds Trace</div></div></div>
            <div class="report-empty" style="padding:16px 0;">Funds Trace has run but did not identify any named counterparties for this case.</div></div>` : '');

    let html = `<div class="corr-grid">` + sapsCard + counterpartyCards + `</div>`;

    panel.innerHTML = html;
    wireSapsDraftHandlers(p);
    wireCounterpartyDraftHandlers(p, counterparties);
}

// Same generate/edit/send/regenerate pattern as the SAPS draft, applied per
// counterparty - each counterparty's draft is independent, keyed by name.
function wireCounterpartyDraftHandlers(p, counterparties) {
    const s = state[p.id];
    document.querySelectorAll('[data-gen-cp]').forEach(btn => {
        btn.addEventListener('click', () => {
            const cp = counterparties.find(c => c.name === btn.dataset.genCp);
            if (!cp) return;
            s.counterpartyDrafts[cp.name] = { ...generateCounterpartyDraft(p, cp), status: 'draft' };
            renderCorrespondenceTab(p);
        });
    });
    document.querySelectorAll('[data-regen-cp]').forEach(btn => {
        btn.addEventListener('click', () => {
            if (!window.confirm('Replace your edits with a freshly generated draft?')) return;
            const cp = counterparties.find(c => c.name === btn.dataset.regenCp);
            if (!cp) return;
            s.counterpartyDrafts[cp.name] = { ...generateCounterpartyDraft(p, cp), status: 'draft' };
            renderCorrespondenceTab(p);
        });
    });
    document.querySelectorAll('[data-send-cp]').forEach(btn => {
        btn.addEventListener('click', () => {
            const key = btn.dataset.sendCp;
            const draft = s.counterpartyDrafts[key];
            if (!draft) return;
            if (!draft.body || !draft.body.trim()) { showToast('Email body is empty - add some text before sending.', 'flag', 'flag'); return; }
            draft.status = 'sent';
            renderCorrespondenceTab(p);
            showToast(`Email sent to ${key}`, 'msg', 'msg');
        });
    });
    document.querySelectorAll('.cp-subject-input').forEach(input => {
        input.addEventListener('input', () => { const d = s.counterpartyDrafts[input.dataset.cp]; if (d) d.subject = input.value; });
    });
    document.querySelectorAll('.cp-body-input').forEach(ta => {
        ta.addEventListener('input', () => { const d = s.counterpartyDrafts[ta.dataset.cp]; if (d) d.body = ta.value; });
    });
}

// Wires the SAPS draft card's controls - generate, live-edit persistence,
// and regenerate. Called after every renderCorrespondenceTab so it works
// whether the card is showing its "not drafted yet" state or the editable
// draft itself.
function wireSapsDraftHandlers(p) {
    const s = state[p.id];
    const genBtn = document.getElementById('genSapsDraftBtn');
    if (genBtn) {
        genBtn.addEventListener('click', () => {
            s.sapsDraft = generateSapsDraft(p);
            renderCorrespondenceTab(p);
        });
    }
    const regenBtn = document.getElementById('regenSapsDraftBtn');
    if (regenBtn) {
        regenBtn.addEventListener('click', () => {
            if (!window.confirm('Replace your edits with a freshly generated draft?')) return;
            s.sapsDraft = generateSapsDraft(p);
            renderCorrespondenceTab(p);
        });
    }
    const subjectInput = document.getElementById('sapsSubjectInput');
    if (subjectInput) subjectInput.addEventListener('input', () => { if (s.sapsDraft) s.sapsDraft.subject = subjectInput.value; });
    const bodyInput = document.getElementById('sapsBodyInput');
    if (bodyInput) bodyInput.addEventListener('input', () => { if (s.sapsDraft) s.sapsDraft.body = bodyInput.value; });
}

/* ---- Summary tab: a chronological, plain-language record of the case -
       each agent's finding as it completed, interleaved with the human
       decision made at each gate. Built for handover / audit reading,
       not for re-deriving the agent's full analysis (that's the Agents
       and Report tabs) - every entry carries a real wall-clock timestamp. ---- */
function renderSummaryTab(p) {
    const panel = document.getElementById('wbSummaryPanel');
    if (!panel) return;
    const s = state[p.id];

    const anyStarted = Object.keys(s.agentStatus).length > 0;
    if (!anyStarted) {
        panel.innerHTML = `<div class="corr-empty"><b>No summary yet</b>This builds up as agents complete and gates are decided - nothing has run for this case yet.</div>`;
        return;
    }

    let entries = [];
    SCREENS.forEach((scr, screenIdx) => {
        scr.agents.forEach(ak => {
            const st = s.agentStatus[ak];
            if (st !== 'done' && st !== 'blocked') return;
            const data = p.a[ak];
            const meta = AGENTS[ak];
            entries.push({
                sortKey: data.completedAt || '',
                html: `
                <div class="summary-entry">
                    <div class="summary-entry-icon agent">${I(meta.icon, 14)}</div>
                    <div class="summary-entry-body">
                        <div class="summary-entry-head">
                            <span class="summary-entry-title">${meta.label}</span>
                            <span class="summary-entry-time">${data.completedAt ? formatWallClock(data.completedAt) : ''}</span>
                        </div>
                        <div class="summary-entry-finding ${agentToneClass(data.tone)}">${data.finding || ''}</div>
                        <div class="summary-entry-desc">${data.desc || ''}</div>
                    </div>
                </div>`
            });
        });

        // Human decision for this screen's gate, if one has been recorded
        if (s.gates[screenIdx]) {
            const action = s.gates[screenIdx];
            const actionLabel = action === 'approve' ? 'Approved' : action === 'override' ? 'Overridden' : action === 'escalate' ? 'Escalated' : action;
            entries.push({
                sortKey: s.gateDecidedAt[screenIdx] || '',
                html: `
                <div class="summary-entry human">
                    <div class="summary-entry-icon human">${I('check', 14)}</div>
                    <div class="summary-entry-body">
                        <div class="summary-entry-head">
                            <span class="summary-entry-title">Human decision — ${scr.title} (Gate ${screenIdx + 1})</span>
                            <span class="summary-entry-time">${s.gateDecidedAt[screenIdx] ? formatWallClock(s.gateDecidedAt[screenIdx]) : ''}</span>
                        </div>
                        <div class="summary-entry-finding ${agentToneClass(action === 'escalate' || action === 'override' ? 'flag' : 'clean')}">${actionLabel}</div>
                        <div class="summary-entry-desc">Decided by ${s.gateApprover[screenIdx] || 'Unknown approver'}.${s.gateReason[screenIdx] ? ` <span class="summary-entry-reason">"${s.gateReason[screenIdx]}"</span>` : ''}</div>
                    </div>
                </div>`
            });
        }
    });

    if (!entries.length) {
        panel.innerHTML = `<div class="corr-empty"><b>No summary yet</b>This builds up as agents complete and gates are decided.</div>`;
        return;
    }

    panel.innerHTML = `<div class="summary-timeline">${entries.map(e => e.html).join('')}</div>`;
}

function openPolicyModal(p) {
    const pol = POLICY_TEXT[p.id];
    if (!pol) return;

    const pmIco = document.getElementById('pmIco');
    if (pmIco) pmIco.innerHTML = I('book', 18);

    const pmSub = document.getElementById('pmSub');
    if (pmSub) pmSub.textContent = `${p.customer} · ${p.id}`;

    const pmBody = document.getElementById('pmBody');
    if (pmBody) pmBody.innerHTML = `<div class="policy-clause">${pol.clause}</div><div class="policy-quote">${pol.text}</div><div style="font-size:11px;color:var(--text-3);">Synthetic policy text authored for this demonstration — not an actual bank policy.</div>`;

    if (mscrim) mscrim.classList.add('open');
    if (policyModal) policyModal.classList.add('open');
}

/* Explicit Customer Thread Toggle */
function openThread() {
    if (!currentCaseId) return;
    const p = findPersona(currentCaseId);

    const tCust = document.getElementById('threadCustomerName');
    if (tCust) tCust.textContent = p.customer + ' — customer thread';

    const tRef = document.getElementById('threadCaseRef');
    if (tRef) tRef.textContent = p.id;

    const chans = Array.from(new Set((MESSAGES(p) || []).map(m => m.channel)));
    const tChanBar = document.getElementById('threadChannelBar');
    if (tChanBar) tChanBar.innerHTML = chans.map(c => `<span class="channel-chip">${I(CHANNEL_ICON[c] || 'msg', 11)} ${c}</span>`).join('');

    renderThread(p);

    const scrimEl = document.getElementById('scrim') || document.querySelector('.scrim');
    const drawerEl = document.getElementById('threadDrawer');
    if (scrimEl) scrimEl.classList.add('open');
    if (drawerEl) drawerEl.classList.add('open');
}

function closeThread() {
    const scrimEl = document.getElementById('scrim') || document.querySelector('.scrim');
    const drawerEl = document.getElementById('threadDrawer');
    if (scrimEl) scrimEl.classList.remove('open');
    if (drawerEl) drawerEl.classList.remove('open');
}

function renderThread(p) {
    const s = state[p.id];
    const body = document.getElementById('threadBody');
    if (!body) return;
    if (!s.messages.length) { body.innerHTML = `<div class="thread-empty">No messages drafted yet. Message Composer drafts the first update once Case Intake completes - a human still has to review and send it.</div>`; return; }
    body.innerHTML = s.messages.map((m, i) => {
        if (m.status === 'draft') {
            return `
    <div class="msg-group msg-draft">
      <div class="msg-meta-top"><span class="mchan">${I(CHANNEL_ICON[m.channel] || 'msg', 11)} ${m.channel}</span> · <span class="draft-badge">Draft — not sent</span></div>
      <textarea class="msg-draft-edit" data-msg-index="${i}" rows="3">${m.text}</textarea>
      ${m.suppression ? `<div class="suppression-note">${I('check', 12)} Tipping-off suppression active — regulatory reference withheld</div>` : ''}
      <div class="msg-draft-actions">
        <span class="msg-draft-hint">Edit if needed, then send</span>
        <button class="btn primary pill-btn" data-send-msg="${i}">Send to customer</button>
      </div>
    </div>`;
        }
        return `
    <div class="msg-group">
      <div class="msg-meta-top"><span class="mchan">${I(CHANNEL_ICON[m.channel] || 'msg', 11)} ${m.channel}</span> · ${m.sentAt ? formatWallClock(m.sentAt) : m.time}</div>
      <div class="msg-bubble">${m.text}</div>
      ${m.suppression ? `<div class="suppression-note">${I('check', 12)} Tipping-off suppression active — regulatory reference withheld</div>` : ''}
      <div class="msg-status">Delivered <span style="color:var(--purple-500)">✓✓</span> <span class="trigger-badge">trigger ${m.trigger}</span></div>
    </div>`;
    }).join('');
    body.scrollTop = body.scrollHeight;

    body.querySelectorAll('[data-send-msg]').forEach(btn => {
        btn.addEventListener('click', () => sendDraftMessage(p, parseInt(btn.dataset.sendMsg, 10)));
    });
    body.querySelectorAll('.msg-draft-edit').forEach(ta => {
        ta.addEventListener('input', () => {
            const idx = parseInt(ta.dataset.msgIndex, 10);
            if (s.messages[idx]) s.messages[idx].text = ta.value;
        });
    });
}

function updateThreadBadge() {
    if (!currentCaseId) return;
    const s = state[currentCaseId];
    const badge = document.getElementById('threadBadge');
    if (!badge) return;
    badge.textContent = s.messages.length;
    const hasDrafts = s.messages.some(m => m.status === 'draft');
    badge.classList.toggle('has-drafts', hasDrafts);
}

function renderRoleCards() {
    const roleCards = document.getElementById('roleCards');
    if (!roleCards) return;
    roleCards.innerHTML = ROLES.map(r => `
    <div class="role-card" data-role="${r.id}">
      <div class="avatar">${r.initials}</div>
      <div class="rc-txt"><div class="rc-name">${r.name}</div><div class="rc-role">${r.title}</div><div class="rc-scope">${r.scope}</div></div>
      <div class="rc-check">${I('check', 12)}</div>
    </div>`).join('');

    roleCards.querySelectorAll('.role-card').forEach(el => {
        el.addEventListener('click', () => {
            selectedRoleId = el.dataset.role;
            roleCards.querySelectorAll('.role-card').forEach(c => c.classList.toggle('selected', c === el));
            const role = ROLES.find(r => r.id === selectedRoleId);
            const mockUsername = document.getElementById('mockUsername');
            if (mockUsername) mockUsername.textContent = role.username;
            const signinBtn = document.getElementById('signinBtn');
            if (signinBtn) signinBtn.disabled = false;
        });
    });
}

function signInAs(roleId) {
    currentUser = ROLES.find(r => r.id === roleId);
    const pageLogin = document.getElementById('page-login');
    const shellRoot = document.getElementById('shellRoot');
    if (pageLogin) pageLogin.classList.add('hidden');
    if (shellRoot) shellRoot.style.display = 'flex';
    const appFooterEl = document.getElementById('appFooter');
    if (appFooterEl) appFooterEl.style.display = 'flex';
    updateUserChip();
    goto('dashboard');
}

function updateUserChip() {
    if (!currentUser) return;
    const topAvatar = document.getElementById('topAvatar');
    if (topAvatar) topAvatar.textContent = currentUser.initials;

    const topUserMeta = document.getElementById('topUserMeta');
    if (topUserMeta) topUserMeta.innerHTML = `<b>${currentUser.name}</b> · ${currentUser.title}`;

    const userMenuList = document.getElementById('userMenuList');
    if (userMenuList) {
        userMenuList.innerHTML = ROLES.map(r => `<div class="um-item ${r.id === currentUser.id ? 'current' : ''}" data-switch="${r.id}"><div class="avatar">${r.initials}</div><div>${r.name}<div style="font-size:10.3px;color:var(--text-3);font-weight:400;">${r.title}</div></div></div>`).join('');
        userMenuList.querySelectorAll('[data-switch]').forEach(el => {
            el.addEventListener('click', (e) => {
                e.stopPropagation();
                currentUser = ROLES.find(r => r.id === el.dataset.switch);
                updateUserChip();
                closeUserMenu();
                if (currentCaseId) openCase(currentCaseId);
            });
        });
    }
}

function closeUserMenu() {
    const userMenu = document.getElementById('userMenu');
    if (userMenu) userMenu.classList.remove('open');
}