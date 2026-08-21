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
    caseIntake: { label: 'Case Intake', tier: 'standard', icon: 'search', reads: ['Case System', 'Contact Centre', 'Customer & CRM', 'Mandates & Descriptors'] },
    recognitionCheck: { label: 'Recognition Check', tier: 'reasoning', icon: 'shieldcheck', reads: ['Case Intake Output', 'Contact Note PDF'] },
    fraudAssessment: { label: 'Fraud Assessment', tier: 'reasoning', icon: 'shieldcheck', reads: ['Authentication', 'MNO Feed', 'fraud-policy.pdf'] },
    transactionClassification: { label: 'Transaction Classification', tier: 'reasoning', icon: 'card', reads: ['Card Management', 'Payments Platform', 'dispute-rules.pdf'] },
    fundsTrace: { label: 'Funds Trace', tier: 'reasoning', icon: 'trace', reads: ['Card Management', 'Fraud Prevention Registry'] },
    shadowCredit: { label: 'Shadow Credit', tier: 'reasoning', icon: 'piggy', reads: ['Core Banking / EDW', 'fraud-policy.pdf'] },
    chargebackPreparation: { label: 'Chargeback Preparation', tier: 'standard', icon: 'filetext', reads: ['Card Management', 'dispute-rules.pdf'] },
    recallRepatriation: { label: 'Recall & Repatriation', tier: 'reasoning', icon: 'send', reads: ['Interbank Channel', 'Card Management'] },
    obligationCheck: { label: 'Obligation Check', tier: 'reasoning', icon: 'clock', reads: ['regulatory-instruments.pdf'] },
    documentGenerator: { label: 'Document Generator', tier: 'standard', icon: 'fileplus', reads: ['regulatory-instruments.pdf', 'document-templates.pdf'] },
    messageComposer: { label: 'Message Composer', tier: 'standard', icon: 'msg', reads: [] },
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
    obligationCheck: ['CASE_INTAKE_OUTPUT_TEXT', 'RECOGNITION_CHECK_OUTPUT_TEXT', 'FRAUD_ASSESSMENT_OUTPUT_TEXT', 'TRANSACTION_CLASSIFICATION_OUTPUT_TEXT', 'FUNDS_TRACE_OUTPUT_TEXT', 'SHADOW_CREDIT_OUTPUT_TEXT', 'CHARGEBACK_PREPARATION_OUTPUT_TEXT', 'RECALL_REPATRIATION_OUTPUT_TEXT']
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
    obligationCheck: ['CASE_INTAKE_OUTPUT_TEXT', 'RECOGNITION_CHECK_OUTPUT_TEXT', 'FRAUD_ASSESSMENT_OUTPUT_TEXT', 'TRANSACTION_CLASSIFICATION_OUTPUT_TEXT', 'FUNDS_TRACE_OUTPUT_TEXT', 'SHADOW_CREDIT_OUTPUT_TEXT', 'CHARGEBACK_PREPARATION_OUTPUT_TEXT', 'RECALL_REPATRIATION_OUTPUT_TEXT']
};

const READS_META = {
    'Case System': { type: 'system' }, 'Contact Centre': { type: 'system' }, 'Customer & CRM': { type: 'system' },
    'Mandates & Descriptors': { type: 'system', q: true }, 'Authentication': { type: 'system' }, 'MNO Feed': { type: 'system', q: true },
    'fraud-policy.pdf': { type: 'doc' }, 'Card Management': { type: 'system' }, 'Payments Platform': { type: 'system' },
    'Fraud Prevention Registry': { type: 'system', q: true }, 'dispute-rules.pdf': { type: 'doc' }, 'Core Banking / EDW': { type: 'system' },
    'Interbank Channel': { type: 'system', q: true }, 'regulatory-instruments.pdf': { type: 'doc' }, 'document-templates.pdf': { type: 'doc' },
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

const MESSAGES = {
    'FNB-51204': [{ channel: 'SMS', text: 'Hi Sipho, thanks for reporting this — we’re on it.' }, { channel: 'App push', text: 'We’ve confirmed this wasn’t a payment you made. Your card has been blocked and replaced.' }, { channel: 'Email', text: 'We’ve credited your account for this transaction while we recover the funds via chargeback.' }],
    'FNB-51890': [{ channel: 'SMS', text: 'Hi Andile, thanks for flagging this — we’re reviewing it now.' }, { channel: 'App push', text: 'Your profile has been locked and secured.' }, { channel: 'Email', text: 'We’ve reimbursed this transaction in full and are actively tracing the funds.' }],
    'FNB-52377': [{ channel: 'App push', text: 'Hi Nomvula, we’ve reviewed your report on the R429 debit.' }, { channel: 'App push', text: 'We’ve matched this to your FitHub Wellness gym subscription — your introductory rate ended this month.' }],
    'FNB-53042': [{ channel: 'Voice call', text: 'Hi Mr Mokoena, we’ve received your report and are securing your accounts.' }, { channel: 'Email', text: 'We’ve credited your account in full while recovery continues.', suppression: true }],
};
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
const FILLER = generateFillerCases(1000);
const FILLER_PAGE_SIZE = 30;
let fillerPage = 0;

/* ============================================================
   STATE ENGINE & TIMER TRACKING
   ============================================================ */
const state = {};
const agentTimerIntervals = {};

function freshState(p) {
    return {
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
        slaStartedAt: null
    };
}
PERSONAS.forEach(p => state[p.id] = freshState(p));
let currentCaseId = null;
let activeWorkspaceTab = 'agents'; // which of Agents/Report/Case Files/Correspondence is on screen

function pushMessage(p, triggerIndex) {
    const templates = MESSAGES[p.id];
    if (!templates || triggerIndex >= templates.length) return;
    const s = state[p.id];
    const tmpl = templates[triggerIndex];
    const t = new Date();
    s.messages.push({ text: tmpl.text, channel: tmpl.channel, suppression: !!tmpl.suppression, time: t.toTimeString().slice(0, 5), trigger: triggerIndex + 1 });
    updateThreadBadge();
    flashBadge();
    if (currentCaseId === p.id) renderThread(p);
    showToast(`Customer notified via ${tmpl.channel}`, 'msg', 'msg');
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
        finding = provHyp || rec.action || 'Case record structured';

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
            <div style="font-size:11px;font-weight:700;color:var(--text-3);margin-top:2px;text-transform:uppercase;letter-spacing:0.4px;">Status: ${obj.status || 'completed'} · Applicability: not-applicable</div>
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
    const caseRef = gP(obj, 'caseRef', 'caseRef') || 'N/A';
    const customer = gP(obj, 'customer') || {};
    const alert = gP(obj, 'alert') || {};
    const reportedEvent = gP(obj, 'reportedEvent', 'reported Event') || {};
    const compromise = gP(reportedEvent, 'compromiseDisclosure', 'compromise Disclosure') || {};
    const scope = gP(obj, 'caseScope', 'caseScope') || {};
    const containment = gP(obj, 'containmentAlreadyCompleted', 'containmentAlreadyCompleted') || [];
    const gaps = gP(obj, 'materialGaps', 'material Gaps') || [];
    const rec = gP(obj, 'recommendation') || {};

    const reportedTotal = gP(reportedEvent, 'reportedTotal', 'reported Total') || {};
    const totalAmt = reportedTotal.amount
        ? `R${Number(reportedTotal.amount).toLocaleString('en-ZA', { minimumFractionDigits: 2 })}`
        : 'R0.00';

    const knownTimeline = gP(reportedEvent, 'knownTimeline', 'known Timeline') || [];
    const timelineHtml = knownTimeline.map(item => {
        const parts = String(item).split(' - ');
        const time = parts[0] ? parts[0].replace(/.*T(\d{2}:\d{2}).*/, '$1') : '';
        const text = parts[1] ? parts[1].replace(/\[source:.*\]/, '').trim() : item;
        return `<div style="display:flex;gap:10px;align-items:flex-start;margin-bottom:6px;">
            <div style="font-family:var(--mono);font-size:11px;font-weight:700;color:var(--purple-700);width:45px;">${time}</div>
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

    const otpMentioned = gP(compromise, 'otpMentioned', 'otpMentioned');
    const inAppApproval = gP(compromise, 'inAppApprovalMade', 'inAppApproval Made');
    const phoneWorking = gP(compromise, 'phoneWorkingNormally', 'phone Working Normally');
    const infoProvided = gP(compromise, 'informationEntered', 'informationEntered') || [];

    return `
    <div class="agent-report-wrap" style="line-height:1.5;">
        <div style="border-bottom:2px solid var(--border-soft);padding-bottom:10px;margin-bottom:14px;">
            <div style="font-size:16px;font-weight:800;color:var(--purple-800);">🛡️ Case Intake</div>
            <div style="font-family:var(--mono);font-size:11px;color:var(--text-2);">Case ${caseRef} · Customer Ref: ${gP(obj, 'customerRef') || ''}</div>
            <div style="display:flex;gap:6px;margin-top:8px;flex-wrap:wrap;">
                <span class="badge b-low">🟢 Intake Complete</span>
                <span class="badge b-high">🟣 High Priority</span>
                <span class="badge b-medium">👤 Human Review Required</span>
            </div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:14px;">
            <div style="background:var(--purple-50);border:1px solid #E9D8FD;border-radius:10px;padding:12px;">
                <div style="font-size:10px;font-weight:800;text-transform:uppercase;color:var(--purple-700);">💰 Reported Exposure</div>
                <div style="font-size:20px;font-weight:800;color:var(--purple-900);margin-top:2px;">${totalAmt}</div>
                <div style="font-size:11px;color:var(--text-2);margin-top:4px;">Disputed Items: <b>${gP(reportedEvent, 'reportedCount', 'reported Count') || 0}</b></div>
            </div>
            <div style="background:#FFF5F5;border:1px solid #FED7D7;border-radius:10px;padding:12px;">
                <div style="font-size:10px;font-weight:800;text-transform:uppercase;color:var(--red-700);">🤖 Alert Assessment</div>
                <div style="font-size:18px;font-weight:800;color:#9B2C2C;margin-top:2px;">Risk Score: ${alert.score ? Number(alert.score).toFixed(2) : 'N/A'} / 1.00</div>
                <div style="font-family:var(--mono);font-size:10px;color:#C53030;margin-top:4px;">${alert.model || ''}</div>
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
                ${gP(reportedEvent, 'customerPosition', 'customer Position') || 'No customer position statement logged.'}
            </div>
        </div>

        <div style="margin-bottom:14px;">
            <div style="font-size:11px;font-weight:800;text-transform:uppercase;color:var(--purple-700);margin-bottom:6px;">🎣 Suspected Compromise Event</div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;font-size:11px;">
                <div style="background:#F1F5F9;padding:6px 8px;border-radius:6px;"><b>OTP Mentioned:</b> ${otpMentioned ? '🟡 Yes' : '🟢 No'}</div>
                <div style="background:#F1F5F9;padding:6px 8px;border-radius:6px;"><b>In-App Approval:</b> ${inAppApproval ? '🟡 Yes' : '🟢 No'}</div>
                <div style="background:#F1F5F9;padding:6px 8px;border-radius:6px;"><b>Phone Working:</b> ${phoneWorking ? '🟢 Yes' : '🔴 No'}</div>
                <div style="background:#F1F5F9;padding:6px 8px;border-radius:6px;"><b>Details Disclosed:</b> ${infoProvided.join(', ') || 'None'}</div>
            </div>
        </div>

        <div style="margin-bottom:14px;">
            <div style="font-size:11px;font-weight:800;text-transform:uppercase;color:var(--purple-700);margin-bottom:6px;">🕒 Incident Timeline</div>
            <div style="background:#FAF5FF;border:1px solid #E9D8FD;border-radius:10px;padding:10px;">${timelineHtml}</div>
        </div>

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
    const res = gP(obj, 'recognitionResult', 'recognition Result') || 'N/A';
    const conf = gP(obj, 'confidence') || {};
    const window = gP(obj, 'historyWindow', 'historyWindow') || {};
    const merchantChecks = gP(obj, 'merchantChecks', 'merchant Checks') || [];
    const rec = gP(obj, 'recommendation') || {};
    const gaps = gP(obj, 'materialGaps', 'material Gaps') || [];

    const resBadge = res === 'no-match'
        ? '<span class="badge b-high">🔴 No Match — Unrecognised</span>'
        : '<span class="badge b-low">🟢 Recognised Subscription</span>';

    return `
    <div class="agent-report-wrap" style="line-height:1.5;">
        <div style="border-bottom:2px solid var(--border-soft);padding-bottom:10px;margin-bottom:14px;">
            <div style="font-size:16px;font-weight:800;color:var(--purple-800);">🔍 Recognition Check</div>
            <div style="margin-top:6px;">${resBadge}</div>
        </div>

        <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:10px;padding:12px;margin-bottom:14px;">
            <div style="font-size:11px;font-weight:800;text-transform:uppercase;color:var(--purple-700);">Statement History Basis</div>
            <div style="font-size:12px;color:#334155;margin-top:4px;">${conf.basis || 'N/A'}</div>
            <div style="font-size:11px;color:var(--text-3);margin-top:6px;">
                Window: <b>${window.from}</b> to <b>${window.to}</b> (${gP(window, 'transactionRowsReviewed', 'transactionRows Reviewed') || 0} rows evaluated)
            </div>
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
                    <span><b>Action:</b> ${typeof a === 'string' ? a : (a.action || JSON.stringify(a))}</span>
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
            ${timeCriticality.map((t, i) => `
                <div style="display:flex;justify-content:space-between;background:#FFFBEB;border:1px solid #FDE68A;padding:6px 10px;border-radius:6px;margin-bottom:4px;font-size:11.5px;color:#92400E;">
                    <span><b>#${i + 1}</b> ${t.who || t.counterparty || JSON.stringify(t)}</span>
                    ${t.window || t.recoveryWindow ? `<span>${t.window || t.recoveryWindow}</span>` : ''}
                </div>
            `).join('')}
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
    const balance = gP(obj, 'balanceImpact', 'balancelmpact') || {};
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

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:14px;font-size:11.5px;">
            <div style="background:#F8FAFC;padding:8px 10px;border-radius:6px;">Balance Before: <b>R${Number(gP(balance, 'balanceBeforeDisputedAuthorisations', 'balanceBefore DisputedAuthorisations') || 0).toLocaleString('en-ZA', { minimumFractionDigits: 2 })}</b></div>
            <div style="background:#F8FAFC;padding:8px 10px;border-radius:6px;">Projected Balance: <b>R${Number(gP(balance, 'projectedBalanceAfterProvisionalRefund', 'projected BalanceAfter Provisional Refund') || 0).toLocaleString('en-ZA', { minimumFractionDigits: 2 })}</b></div>
        </div>

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
                    <div style="color:var(--text-2);margin-top:4px;">${r.status || r.reason || JSON.stringify(r)}</div>
                </div>`).join('')}
        </div>` : '<div style="font-size:11.5px;color:var(--text-3);font-style:italic;margin-bottom:14px;">No recall requests raised yet.</div>'}

        ${caspHolds.length ? `
        <div style="margin-bottom:14px;">
            <div style="font-size:11px;font-weight:800;text-transform:uppercase;color:var(--purple-700);margin-bottom:6px;">CASP Hold Requests</div>
            ${caspHolds.map(h => `<div style="background:#FFFBEB;border:1px solid #FDE68A;padding:8px 10px;border-radius:6px;margin-bottom:4px;font-size:11.5px;color:#92400E;">${h.provider || h.name || JSON.stringify(h)}</div>`).join('')}
        </div>` : ''}

        ${bankRequests.length ? `
        <div style="margin-bottom:14px;">
            <div style="font-size:11px;font-weight:800;text-transform:uppercase;color:var(--purple-700);margin-bottom:6px;">Counterparty Bank Requests</div>
            ${bankRequests.map(b => `<div style="background:#F1F5F9;border:1px solid #CBD5E1;padding:8px 10px;border-radius:6px;margin-bottom:4px;font-size:11.5px;">${b.bank || b.institution || JSON.stringify(b)}</div>`).join('')}
        </div>` : ''}

        ${blocking.length ? `
        <div style="margin-bottom:14px;">
            <div style="font-size:11px;font-weight:800;text-transform:uppercase;color:var(--red-700);margin-bottom:6px;">Blocking Actions on FNB</div>
            ${blocking.map(b => `<div style="background:#FFF5F5;border:1px solid #FED7D7;padding:8px 10px;border-radius:6px;margin-bottom:4px;font-size:11.5px;color:#742A2A;">${typeof b === 'string' ? b : JSON.stringify(b)}</div>`).join('')}
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
    const screenReason = gP(obj, 'screenReason', 'screenReason');
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

        ${screenReason ? `
        <div style="background:#FFFBEB;border:1px solid #FDE68A;border-radius:10px;padding:12px;margin-bottom:14px;">
            <div style="font-size:11px;font-weight:800;text-transform:uppercase;color:#92400E;">Screen Gate</div>
            <div style="font-size:12px;color:#78350F;margin-top:4px;">${screenReason}</div>
        </div>` : ''}

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
            <div style="font-size:11px;font-weight:800;text-transform:uppercase;color:${commsRestriction.active ? 'var(--red-700)' : 'var(--text-3)'};">Communication Restriction ${commsRestriction.active ? '— ACTIVE' : '— Not Active'}</div>
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
function renderGenericAgentReport(obj) {
    const rec = gP(obj, 'recommendation') || {};
    return `
    <div class="agent-report-wrap" style="line-height:1.5;">
        <div style="border-bottom:2px solid var(--border-soft);padding-bottom:10px;margin-bottom:14px;">
            <div style="font-size:16px;font-weight:800;color:var(--purple-800);">${obj.agent || 'Agent Output'}</div>
            <div style="font-size:11px;color:var(--text-3);font-family:var(--mono);">Status: ${obj.status || 'Completed'}</div>
        </div>
        <div style="font-size:12.5px;color:var(--text-2);line-height:1.6;">
            ${rec.reason || obj.desc || JSON.stringify(obj, null, 2)}
        </div>
    </div>`;
}

/* ============================================================
   APP INITIALIZATION
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {

    const NAV_ITEMS = [{ id: 'dashboard', label: 'Dashboard', icon: 'grid' }, { id: 'cases', label: 'Cases', icon: 'list', badge: true }, { id: 'live', label: 'Live', icon: 'radio' }, { id: 'settings', label: 'Settings', icon: 'gear' }];
    document.querySelectorAll('.nav-item').forEach((el, i) => {
        const meta = NAV_ITEMS[i];
        el.innerHTML = I(meta.icon, 17) + `<span>${meta.label}</span>` + (meta.badge ? `<span class="nav-badge" id="navCaseBadge"></span>` : '') + (meta.id === 'live' ? `<span class="live-glow"></span>` : '');
        el.addEventListener('click', () => goto(meta.id));
    });

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
        const s = state[p.id];
        if (s.closed) resolved++; else if (s.escalated) needsDecision++;
        else if (Object.keys(s.agentStatus).length === 0) notStarted++; else awaitingGate++;
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
    const gatesRemaining = PERSONAS.reduce((a, p) => a + state[p.id].gates.filter(g => g === null).length, 0);

    const panelHumanDecisions = document.getElementById('panelHumanDecisions');
    if (panelHumanDecisions) {
        panelHumanDecisions.innerHTML = `
        <div class="kv-row kv-clickable" data-goto="cases"><div class="kv-left"><span class="kv-dot" style="background:var(--green-700)"></span>Approved</div><div class="kv-val">${approved}</div></div>
        <div class="kv-row kv-clickable" data-goto="cases"><div class="kv-left"><span class="kv-dot" style="background:var(--amber-700)"></span>Overridden</div><div class="kv-val">${overridden}</div></div>
        <div class="kv-row kv-clickable" data-goto="cases"><div class="kv-left"><span class="kv-dot" style="background:#D7D2E8"></span>Pending</div><div class="kv-val">${gatesRemaining}</div></div>`;
        panelHumanDecisions.querySelectorAll('[data-goto]').forEach(row => row.addEventListener('click', () => goto(row.dataset.goto)));
    }

    let totalTriggers = PERSONAS.reduce((a, p) => a + state[p.id].messages.length, 0);
    const panelComposer = document.getElementById('panelComposer');
    if (panelComposer) {
        panelComposer.innerHTML = `
        <div class="kv-row"><div class="kv-left"><span class="kv-dot" style="background:var(--purple-700)"></span>Customer updates sent</div><div class="kv-val">${totalTriggers}</div></div>
        <div class="kv-row"><div class="kv-left"><span class="kv-dot" style="background:#D7D2E8"></span>Fires on approval only</div></div>`;
    }

    // Recoverability distribution reflects real progress, not just each case's
    // static narrative outcome - a case only counts toward its eventual category
    // once the case has actually reached that point (recognised only counts once
    // truly closed via the deflection path; recoverable/not-recoverable/mixed only
    // count once Transaction Classification has actually run). Anything earlier
    // than that stays "Pending", which is what makes this genuinely reflect what
    // has happened rather than a fixed label decided in advance. Each bucket also
    // tracks which case it came from, so the legend can open that case directly.
    const dist = { recognised: 0, recoverable: 0, notrecoverable: 0, mixed: 0, pending: 0 };
    const distCase = { recognised: null, recoverable: null, notrecoverable: null, mixed: null };
    PERSONAS.forEach(p => {
        const s = state[p.id];
        const classified = s.agentStatus && s.agentStatus.transactionClassification === 'done';
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

function renderFilterbar() {
    const c = caseCounts();
    const counts = { All: PERSONAS.length, 'Not started': c.notStarted, 'In progress': c.inProgress, 'Awaiting gate': c.awaitingGate, 'Needs decision': c.needsDecision, 'Done': c.resolved };
    const filterbar = document.getElementById('filterbar');
    if (filterbar) {
        filterbar.innerHTML = FILTERS.map(f => `<button class="fpill ${f === activeFilter ? 'active' : ''}" data-f="${f}">${f} <span class="n">${counts[f]}</span></button>`).join('');
        filterbar.querySelectorAll('.fpill').forEach(el => el.addEventListener('click', () => { activeFilter = el.dataset.f; renderCases(); }));
    }
}

function caseStatusLabel(p) {
    const s = state[p.id];
    if (s.closed) return 'Done'; if (s.escalated) return 'Needs decision';
    if (Object.keys(s.agentStatus).length === 0) return 'Not started'; return 'Awaiting gate';
}

function renderCases() {
    updateLiveNavIndicator(); renderFilterbar();
    const tbody = document.getElementById('casesTbody');
    if (!tbody) return;
    let rows = PERSONAS.filter(p => activeFilter === 'All' || caseStatusLabel(p) === activeFilter);
    tbody.innerHTML = rows.map(p => {
        const s = state[p.id];
        const screenLabel = s.closed && p.recognised ? `2 of 2 (Deflected)` : s.closed ? `2 of 2` : `${s.screenIdx + 1} of 6`;
        const statusLbl = caseStatusLabel(p);

        // Urgency only shows once Case Intake has actually completed - before that,
        // there is no real urgency.level to show, so the column stays neutral.
        const intakeDone = s.agentStatus && s.agentStatus.caseIntake === 'done';
        const urgencyCls = s.urgencyLevel === 'Critical' ? 'b-crit' : s.urgencyLevel === 'High' ? 'b-high' : s.urgencyLevel === 'Medium' ? 'b-medium' : 'b-low';
        const urgencyCell = intakeDone && s.urgencyLevel ? `<span class="badge ${urgencyCls}">${s.urgencyLevel}</span>` : '<span class="sla-pending">—</span>';

        const sla = slaInfo(p);
        const slaCell = sla
            ? `<span class="sla-badge ${sla.overdue ? 'sla-overdue' : sla.remainingMs < 3600000 ? 'sla-warn' : 'sla-ok'}">${formatSlaCountdown(sla.remainingMs)}</span>`
            : '<span class="sla-pending">—</span>';

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
      <td><button class="btn pill-btn" data-open="${p.id}">${Object.keys(s.agentStatus).length ? 'Open case' : 'Trigger agents'}</button></td>
      <td>${humanCell}</td>
    </tr>`;
    }).join('') + FILLER.slice(fillerPage * FILLER_PAGE_SIZE, (fillerPage + 1) * FILLER_PAGE_SIZE).map(f => `<tr class="rowlink filler" data-id="${f.ref}">
      <td><div class="cust-name">${f.name}</div><div class="cust-ref">${f.ref}</div></td>
      <td><span class="sla-pending">—</span></td>
      <td><span class="sla-pending">—</span></td>
      <td><span class="badge b-neutral">Not started</span></td>
      <td>0 of 6</td>
      <td><button class="btn pill-btn ghost" data-open="${f.ref}">View</button></td>
      <td>—</td>
    </tr>`).join('');

    const totalFillerPages = Math.max(1, Math.ceil(FILLER.length / FILLER_PAGE_SIZE));
    const pag = document.getElementById('fillerPagination');
    if (pag) {
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
    if (dPills) {
        const s = state[p.id];
        const intakeDone = s.agentStatus && s.agentStatus.caseIntake === 'done';
        const sla = slaInfo(p);
        dPills.innerHTML = `<span class="tag">${p.tag}</span>` +
            (intakeDone && s.urgencyLevel
                ? `<span class="tag tag-urgency-${s.urgencyLevel.toLowerCase()}">${s.urgencyLevel} urgency</span>${sla ? `<span class="tag ${sla.overdue ? 'tag-sla-overdue' : sla.remainingMs < 3600000 ? 'tag-sla-warn' : 'tag-sla-ok'}">SLA: ${formatSlaCountdown(sla.remainingMs)}</span>` : ''}`
                : `<span class="tag tag-muted">Urgency pending Case Intake</span>`) +
            (p.vulnerable ? `<span class="tag" style="background:var(--red-100);color:var(--red-700)">Vulnerable (71yo)</span>` : '');
    }

    const backBtn = document.getElementById('backToCasesBtn');
    if (backBtn) {
        backBtn.onclick = (e) => { e.preventDefault(); goto('cases'); };
    }

    const threadBtn = document.getElementById('openThreadBtn');
    if (threadBtn) threadBtn.removeAttribute('disabled');

    const dInfoBox = document.getElementById('dInfoBox');
    if (dInfoBox) {
        dInfoBox.innerHTML = `
        <div class="wb-info-item"><div class="il">Disputed amount</div><div class="iv">${p.amount}</div></div>
        <div class="wb-info-item"><div class="il">Channel</div><div class="iv">${p.channel}</div></div>
        <div class="wb-info-item"><div class="il">Product</div><div class="iv">${p.product}</div></div>`;
    }

    closeThread();

    activeWorkspaceTab = 'agents';
    document.querySelectorAll('.wtab').forEach(x => x.classList.toggle('active', x.dataset.wtab === 'agents'));
    const wbScrollEl = document.getElementById('wbScroll');
    if (wbScrollEl) wbScrollEl.style.display = 'block';
    ['wbReportPanel', 'wbFilesPanel', 'wbCorrPanel', 'wbSummaryPanel'].forEach(pid => { const el = document.getElementById(pid); if (el) el.style.display = 'none'; });
    wireWorkspaceTabs(p);

    renderStatusBanner(p);
    renderHorizontalStepper(p);
    renderActiveStageContent(p);
    updateProgressRing(p);
    updateThreadBadge();

    const s = state[id];
    if (Object.keys(s.agentStatus).length === 0) runScreenAgents(p);
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
        <div class="wb-info-item"><div class="il">Channel</div><div class="iv">—</div></div>
        <div class="wb-info-item"><div class="il">Product</div><div class="iv">—</div></div>`;
    }

    const dStatusBanner = document.getElementById('dStatusBanner');
    if (dStatusBanner) {
        dStatusBanner.innerHTML = `<div class="filler-notice">${filler.name} is a queued placeholder used to give the case list realistic volume. It doesn't run the agent pipeline — only Sipho, Andile, Nomvula and Thabo do that in this build.</div>`;
    }

    ['openThreadBtn'].forEach(id => { const el = document.getElementById(id); if (el) el.setAttribute('disabled', 'disabled'); });

    const wbScrollEl = document.getElementById('wbScroll');
    if (wbScrollEl) { wbScrollEl.style.display = 'block'; wbScrollEl.innerHTML = `<div class="filler-empty">No agent activity for this case.</div>`; }
    ['wbReportPanel', 'wbFilesPanel', 'wbCorrPanel', 'wbSummaryPanel'].forEach(pid => { const el = document.getElementById(pid); if (el) el.style.display = 'none'; });
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

    // Resolve dynamic reads for the active case
    const evidence = getCaseEvidence(p);
    const reads = new Set();
    scr.agents.forEach(ak => {
        AGENTS[ak].reads.forEach(r => {
            if (r === 'Contact Note PDF') {
                reads.add(evidence.contactNote);
            } else {
                reads.add(r);
            }
        });
    });

    let html = `<div class="stage-section active-focus">
      <div class="stage-section-head">
        <div class="ssnum">${scr.n}</div>
        <div><div class="stage-section-title">${p.recognised && stageIdx === 1 ? 'Recognition Review' : scr.title}</div><div class="stage-section-sub">${p.recognised && stageIdx === 1 ? 'Proceed as fraud, or show the customer' : scr.sub}</div></div>
        <span class="stage-status-pill ${complete ? 'st-complete' : running ? 'st-running' : ''}">${complete ? 'Complete' : running ? 'Running' : ''}</span>
      </div>
      <div class="reads-inline" style="margin-bottom:16px;">${Array.from(reads).map(r => { const m = READS_META[r] || { type: 'system' }; return `<span class="read-chip-sm">${r}${m.q ? ' <span class="rq">?</span>' : ''}</span>`; }).join('')}</div>`;

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

    container.querySelectorAll('.agent-card').forEach(el => el.addEventListener('click', () => { if (el.dataset.locked) return; openAgentModal(p, el.dataset.agent); }));
    container.querySelectorAll('[data-gate]').forEach(el => el.addEventListener('click', () => openGateReasonModal(p, parseInt(el.dataset.gate, 10), el.dataset.action)));
    container.querySelectorAll('[data-policy]').forEach(el => el.addEventListener('click', (e) => { e.stopPropagation(); openPolicyModal(p); }));

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
    let cardCls = 'agent-card ' + st;
    if (st === 'done') cardCls += data.tone === 'flag' ? ' flag' : data.tone === 'block' ? ' block' : ' done';

    let pillHtml = st === 'pending' ? `<span class="ac-pill pending">Pending</span>`
        : st === 'running' ? `<span class="ac-pill running"><span class="spin"></span> Running</span>`
            : st === 'blocked' ? `<span class="ac-pill block">Gate closed</span>`
                : `<span class="ac-pill ${data.tone === 'block' ? 'block' : data.tone === 'flag' ? 'flag' : 'done'}">${data.tone === 'block' ? 'Flagged' : data.tone === 'flag' ? 'Flagged' : 'Done'}</span>`;

    const locked = (st === 'pending');

    let timerBadge = '';
    if (st === 'running') {
        const liveSec = data.elapsedSeconds || 0;
        timerBadge = `<span class="agent-timer-badge live">${I('timer', 11)} ${formatLiveClock(liveSec)}</span>`;
    } else if (st === 'done' && data.elapsedSeconds) {
        timerBadge = `<span class="agent-timer-badge completed">${I('timer', 11)} Took ${formatDuration(data.elapsedSeconds)}</span>`;
        if (data.completedAt) {
            timerBadge += `<span class="agent-timestamp">${formatWallClock(data.completedAt)}</span>`;
        }
    }

    const body = (st === 'done' || st === 'blocked') ? `
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

    return `<div class="${cardCls}" data-agent="${agentKey}" ${locked ? 'data-locked="1"' : ''}>
    <div class="ac-top">
      <div class="ac-id"><div class="ac-ico">${I(meta.icon, 15)}</div><div><div class="ac-name"><span class="tier-dot ${meta.tier}"></span>${meta.label}</div></div></div>
      ${pillHtml}
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
            'RECALL_REPATRIATION_OUTPUT_TEXT': p.a.recallRepatriation?.rawText || ''
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
            renderActiveStageContent(p);
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
                p.a[ak].elapsedSeconds = Math.floor((Date.now() - p.a[ak].startTime) / 1000);
                p.a[ak].completedAt = new Date().toISOString();

                if (apiRes.success && apiRes.outputText) {
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
                i++;
                renderHorizontalStepper(p); renderActiveStageContent(p); renderDashboardIfVisible(); renderCasesIfVisible();
                next();
            })
            .catch(err => {
                if (agentTimerIntervals[timerKey]) {
                    clearInterval(agentTimerIntervals[timerKey]);
                    delete agentTimerIntervals[timerKey];
                }
                p.a[ak].elapsedSeconds = Math.floor((Date.now() - p.a[ak].startTime) / 1000);
                p.a[ak].completedAt = new Date().toISOString();
                p.a[ak].finding = 'Connection Error';
                p.a[ak].desc = err.message || 'Failed to reach local API service.';
                p.a[ak].tone = 'block';
                if (ak === 'caseIntake') p.a[ak].urgencyLevel = 'High';
                s.agentStatus[ak] = 'done';
                if (ak === 'caseIntake' && !s.slaStartedAt) {
                    s.urgencyLevel = (p.a.caseIntake && p.a.caseIntake.urgencyLevel) || 'High';
                    s.slaStartedAt = Date.now();
                }
                i++;
                renderHorizontalStepper(p); renderActiveStageContent(p); renderDashboardIfVisible(); renderCasesIfVisible();
                next();
            });
    }
    next();
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

    pushMessage(p, screenIdx + 1);

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
        runScreenAgents(p);
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
    const denom = p.recognised ? 2 : 6;
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
    if (amName) amName.innerHTML = `${meta.label} <span class="tier-dot ${meta.tier}" style="margin-left:2px;"></span>`;

    const amSub = document.getElementById('amSub');
    if (amSub) amSub.textContent = `${p.customer} · ${p.id} · ${meta.tier === 'reasoning' ? 'Reasoning tier' : 'Standard tier'}`;

    let html = '';
    if (data.elapsedSeconds) {
        html += `<div style="display:inline-flex;align-items:center;gap:6px;background:#F1F5F9;color:#334155;padding:4px 10px;border-radius:12px;font-size:11px;font-weight:600;margin-bottom:12px;">${I('timer', 12)} Agent Response Time: ${formatDuration(data.elapsedSeconds)}${data.completedAt ? ` · Completed ${formatWallClock(data.completedAt)}` : ''}</div>`;
    }

    html += renderRichAgentReport(data.rawText || data.fullText || data, agentKey);

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
            const panels = { agents: 'wbScroll', report: 'wbReportPanel', files: 'wbFilesPanel', corr: 'wbCorrPanel', summary: 'wbSummaryPanel' };
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
    else if (activeWorkspaceTab === 'files') renderCaseFilesTab(p);
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
    const s = state[p.id];

    const totalAgents = Object.keys(p.a).length;
    const doneAgents = Object.keys(p.a).filter(ak => ['done', 'blocked'].includes(agentRunState(p, ak))).length;

    let html = `<div class="report-case-header">
        <div class="rch-title">${p.customer} — ${p.id}</div>
        <div class="rch-meta">${p.headline}</div>
        <div class="rch-meta">Disputed amount: ${p.amount} · ${doneAgents} of ${totalAgents} agents reporting${s.closed ? ' · Case closed' : ''}</div>
    </div>`;

    if (doneAgents === 0) {
        html += `<div class="report-empty"><b>No agent output yet</b>The case file builds itself as each agent completes. Switch to the Agents tab to start or continue the run.</div>`;
        panel.innerHTML = html;
        return;
    }

    SCREENS.forEach(scr => {
        scr.agents.forEach(ak => {
            if (!p.a[ak]) return;
            const st = agentRunState(p, ak);
            if (st !== 'done' && st !== 'blocked') return;
            const meta = AGENTS[ak];
            const data = p.a[ak];
            html += `<div class="report-section">
                <div class="report-section-head">
                    <div class="rs-ico">${I(meta.icon, 14)}</div>
                    <div><div class="rs-title">${meta.label}</div><div class="rs-sub">Screen ${scr.n} · ${scr.title}</div></div>
                    <span class="rs-status ${st === 'blocked' ? 'blocked' : 'done'}">${st === 'blocked' ? 'Gate closed' : 'Complete'}</span>
                </div>
                ${renderRichAgentReport(data.rawText || data.fullText || data, ak)}
            </div>`;
        });
    });

    panel.innerHTML = html;
}

/* ---- Case Files tab: the actual input evidence, plus any sources an
       agent's live response reported consulting ---- */
function renderCaseFilesTab(p) {
    const panel = document.getElementById('wbFilesPanel');
    if (!panel) return;
    const evidence = getCaseEvidence(p);

    const labelFor = { contactNote: 'Contact centre note — read by Case Intake', authLog: 'Authorisation log — read by Transaction Classification', statementHistory: '24-month statement history — read by Recognition Check', profile: 'Customer profile — read by Case Intake, Shadow Credit' };

    let html = `<div class="filesgrid">` + Object.entries(evidence).map(([key, filename]) => `
        <div class="filecard"><div class="fc-ico">${I('pdf', 16)}</div>
            <div><div class="fc-name">${filename}</div><div class="fc-used">${labelFor[key] || key}</div></div></div>`).join('') + `</div>`;

    const sourcesFound = [];
    Object.keys(p.a).forEach(ak => {
        if (agentRunState(p, ak) !== 'done') return;
        const parsed = parseAgentJson(p.a[ak].rawText);
        const src = parsed && (parsed.sources || parsed.Sources || parsed.sourcesConsulted);
        if (src && (Array.isArray(src) ? src.length : true)) sourcesFound.push({ agent: AGENTS[ak].label, src });
    });
    if (sourcesFound.length) {
        html += sourcesFound.map(sf => `<div class="files-sources-note">${I('check', 12)} <span><b>${sf.agent}</b> additionally reported: ${Array.isArray(sf.src) ? sf.src.join(', ') : sf.src}</span></div>`).join('');
    } else {
        html += `<div class="files-sources-note">${I('filetext', 12)} <span>This list is the fixed evidence set for the case. Agents may report additional sources consulted once they run — none have yet.</span></div>`;
    }

    panel.innerHTML = html;
}

/* ---- Correspondence tab: Funds Trace (where it went) and
       Recall & Repatriation (outbound chases + replies), live ---- */
function renderCorrespondenceTab(p) {
    const panel = document.getElementById('wbCorrPanel');
    if (!panel) return;
    const corrAgents = ['fundsTrace', 'recallRepatriation'];
    const anyRun = corrAgents.some(ak => ['done', 'blocked'].includes(agentRunState(p, ak)));

    if (!anyRun) {
        panel.innerHTML = `<div class="corr-empty"><b>No counterparty correspondence yet</b>This becomes available once Funds Trace and Recall &amp; Repatriation have run. If this case turns out to be merchant-only, or is recognised as the customer's own spend, this tab will stay empty — that's expected, not a gap.</div>`;
        return;
    }

    let html = `<div class="corr-grid">` + corrAgents.map(ak => {
        const meta = AGENTS[ak];
        const st = agentRunState(p, ak);
        const subtitle = ak === 'fundsTrace' ? 'Where the money went' : 'Outbound recalls, pledges &amp; replies';
        if (st !== 'done' && st !== 'blocked') {
            return `<div class="corr-card"><div class="cc-head"><div class="cc-ico">${I(meta.icon, 14)}</div>
                <div><div class="cc-title">${meta.label}</div><div class="cc-sub">${subtitle}</div></div>
                <span class="cc-status pending">${st === 'running' ? 'Running' : 'Pending'}</span></div>
                <div class="report-empty" style="padding:16px 0;">Not yet run.</div></div>`;
        }
        const data = p.a[ak];
        return `<div class="corr-card"><div class="cc-head"><div class="cc-ico">${I(meta.icon, 14)}</div>
            <div><div class="cc-title">${meta.label}</div><div class="cc-sub">${subtitle}</div></div>
            <span class="cc-status ${st === 'blocked' ? 'blocked' : 'done'}">${st === 'blocked' ? 'Gate closed' : 'Live'}</span></div>
            ${renderRichAgentReport(data.rawText || data.fullText || data, ak)}</div>`;
    }).join('') + `</div>`;

    panel.innerHTML = html;
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

    const chans = Array.from(new Set((MESSAGES[p.id] || []).map(m => m.channel)));
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
    if (!s.messages.length) { body.innerHTML = `<div class="thread-empty">No messages sent yet. Message Composer fires the first update once Case Intake completes.</div>`; return; }
    body.innerHTML = s.messages.map(m => `
    <div class="msg-group">
      <div class="msg-meta-top"><span class="mchan">${I(CHANNEL_ICON[m.channel] || 'msg', 11)} ${m.channel}</span> · ${m.time}</div>
      <div class="msg-bubble">${m.text}</div>
      ${m.suppression ? `<div class="suppression-note">${I('check', 12)} Tipping-off suppression active — regulatory reference withheld</div>` : ''}
      <div class="msg-status">Delivered <span style="color:var(--purple-500)">✓✓</span> <span class="trigger-badge">trigger ${m.trigger}</span></div>
    </div>`).join('');
    body.scrollTop = body.scrollHeight;
}

function updateThreadBadge() {
    if (!currentCaseId) return;
    const s = state[currentCaseId];
    const badge = document.getElementById('threadBadge');
    if (badge) badge.textContent = s.messages.length;
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