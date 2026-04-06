/** Long-form copy for AaboPay — /projects/aabopay (from KSU FinTech hackathon context in site data) */
export const aabopayDetailSections = [
  {
    heading: 'Why AaboPay exists',
    paragraphs: [
      'Kennesaw State University’s one-day FinTech High School Hackathon (March 2026) asked teams to pick an African country or mobile-money market, research a genuine payments challenge, and design something that makes mobile payments safer, easier, and more accessible—then explain and demo it clearly. The official theme was safer mobile payments across Africa, with judges expecting a prototype, mockup, or interactive demo plus a tight concept brief.',
      'Nigeria’s mobile-money ecosystem—wallets such as OPay and PalmPay, agent networks, and high transaction volumes—also faces documented fraud losses and patterns that show up in public payment and banking statistics (including NIBSS-scale views of transaction flow). Users contend with SIM swaps, scam messages, fake agents, stolen phones, and false confirmations; regulators and consumer-protection framing were part of the brief, not optional window dressing.',
      'I worked with Alvin (Forsyth Central), Bala (Lambert High), and Allen (West Forsyth). We centered AaboPay on Nigerian users who need trust signals before money moves, especially when literacy, connectivity, or calm decision-making under pressure is limited.',
    ],
  },
  {
    heading: 'What the product does',
    paragraphs: [
      'AaboPay is framed as a real-time companion to major Nigerian wallets: before or during a send, the flow surfaces phone trust checks, voice-verified payments where appropriate, and BVN/NIN-backed safeguards so identity and intent align with what the user believes is happening.',
      'The demo path we emphasized to judges: a suspicious or unfamiliar agent number triggers pause, explicit warning, and cancel-before-send—so money never leaves until the user affirms a high-trust path.',
      'Color-coded trust signals and icon-first navigation support quick scanning. Voice confirmations and short spoken prompts reduce reliance on dense text. For users who drop offline, USSD access to trust scores brings a minimal channel that still answers “should I proceed?” without requiring a smartphone browser session.',
    ],
  },
  {
    heading: 'Technical and product architecture (hackathon build)',
    paragraphs: [
      'The one-day format pushed us to separate what we could simulate credibly (trust tiers, agent risk flags, bilingual copy paths, USSD-style menus) from what would require live bank integrations in production. The architecture story was about defense in depth at the moment of payment—not a single checkbox.',
    ],
    bullets: [
      'Trust layer: aggregate signals (number reputation, agent pattern, recency of complaints in the narrative demo) into a small set of color-coded states the UI can show in one glance.',
      'Identity anchors: BVN/NIN concepts in the pitch tie verified identity to high-risk flows without claiming live API access we did not implement in the room.',
      'Voice path: voice-verified payments and spoken confirmations address low-literacy and hands-busy contexts described in the brief.',
      'Localization: English plus Yoruba and Igbo strings in the prototype story so the product matches how many Nigerian apps reach mixed-language audiences.',
      'Offline / thin connectivity: USSD-style access to trust scores encodes the requirement that safety cues survive when data is intermittent.',
      'Fraud taxonomy: SIM swap, scam SMS, fake agent, stolen device, and false confirmation scenarios were named explicitly so judges could map features to pains.',
    ],
  },
  {
    heading: 'Hackathon process and outcome',
    paragraphs: [
      'Judges circulated during the event to probe thinking and stress-test responses—so teamwork, prioritization, and clarity under time pressure mattered as much as the final deck.',
      'We closed with a ten-minute pitch: country and users, concrete security problems, how AaboPay works, a sample user journey, and why the idea stayed simple, practical, and scalable—the same arc we refined from morning research through afternoon presentations.',
      'We earned finalist recognition and a top-ten finish, which validated that the problem-to-prototype story resonated with FinTech judges on a compressed timeline.',
    ],
  },
  {
    heading: 'Design principles',
    paragraphs: [
      'Connectivity and literacy are first-class: if the safest advice only works on fiber and a large screen, it fails the brief.',
      'Regulation and consumer protection stay visible in how we describe data and identity—not bolted on as buzzwords.',
      'Every flow answers “what could go wrong if the user taps Send right now?” before celebrating feature count.',
    ],
  },
]
