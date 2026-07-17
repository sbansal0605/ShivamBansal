/** Long-form copy for Beaver AI — /projects/beaver-ai (Cisco High School Capstone · Buc-ee's operations OS) */
export const beaverAiDetailSections = [
  {
    heading: 'Why Beaver AI exists',
    paragraphs: [
      'Travel centers run on volatile demand, thin kitchen margins, and constant staffing pressure, while food waste alone costs U.S. operators hundreds of billions a year. Buc-ee’s-scale locations juggle fuel, fresh food, checkout lines, and guest experience across a growing network, but most operators still lack a unified AI policy surface that can predict, act, and stay secure.',
      'Beaver AI was built as my Cisco High School Program externship capstone: a Cisco × Buc-ee’s enterprise pilot UX that positions Beaver AI as the operations OS for Buc-ee’s travel centers: predicting demand, cutting food waste, optimizing staffing, and securing every AI decision in the spirit of Cisco AI Defense.',
    ],
  },
  {
    heading: 'What Beaver AI does',
    paragraphs: [
      'One command surface for corporate ops and store managers: network pulse across twelve travel centers, 24-hour demand forecasts tied to weather and events, food production controls that boost or reduce stock live, staffing recommendations, digital twins per location, scenario simulations (holiday rush, hurricane, heatwave), and a Cisco Security Center with AI Defense, Hypershield, and Transaction Trust framing.',
      'A guided Buc-ee’s AI command center, a customer-facing guest concierge for in-store tablets, board-ready PDF / PowerPoint / Excel exports, OTP login with a demo session bypass, and Presentation Mode (Ctrl+Shift+P) round out the executive demo path.',
    ],
    bullets: [
      'Network Command Dashboard: live KPIs, digital twin map, and explainable AI recommendations with Apply + audit trail.',
      'Food Intelligence: kitchen stock vs predicted demand, waste-risk bars, and Boost / Reduce production controls.',
      'Sustainability Hub: ESG impact metrics (waste prevented, meals saved, CO₂, water, energy) with board PDF / CSV export.',
      'Guest Concierge: in-store tablet experience for deals, freshness, wait times, and FAQs, secured by Cisco.',
      'Security Center: AI Defense events, Hypershield segmentation narrative, and decision validation counts.',
    ],
  },
  {
    heading: 'Technical approach',
    paragraphs: [
      'The stack was chosen for demo speed with production-plausible depth: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Framer Motion, Zustand, Recharts, and SWR, with Prisma ready for a relational data model and Nodemailer-backed OTP when SMTP is configured.',
      'Board leave-behinds ship client-side via jsPDF, PptxGenJS, and ExcelJS. Operational KPIs, forecasts, twins, and security streams are simulated pilot UX, positioned as a reference architecture secured in the spirit of Cisco AI Defense, not a live Cisco product API integration.',
    ],
    bullets: [
      'Auth: email OTP when SMTP is available, plus an Enter demo session presenter bypass.',
      'Persistence: theme, prefs, and applied recommendations survive the session for credible Apply flows.',
      'Reports: Cybersecurity and ESG PDFs designed as board leave-behinds after the live walkthrough.',
    ],
  },
  {
    heading: 'Capstone context and outcome',
    paragraphs: [
      'Beaver AI evolved through the Cisco Capstone build from early Nexus / Compass branding into the final Buc-ee’s Beaver AI prototype, complete with Presentation Mode, LAN/iPad demo hosting, and an executive brief for judges and mentors.',
      'Demo-day pilot metrics in the UX include twelve sites online, thousands of pounds of waste prevented, multi-million-dollar network revenue framing, high AI confidence, meals-equivalent impact, and AI Defense decision validation, so executives can feel the loop from forecast to Apply to audit trail in one sitting.',
      'Code and README live at github.com/sbansal0605/Cisco-Capstone-Project under the Final Prototype milestone.',
    ],
  },
  {
    heading: 'Design principles',
    paragraphs: [
      'Predict → Act → Audit: every recommendation is explainable, applicable, and left as a trail managers can defend.',
      'Ops and guests in one story: corporate dashboards and the in-store concierge share the same demand and freshness signals.',
      'Honest about the pilot: simulated KPIs with real auth, exports, and presentation choreography, built to sell the architecture, not fake a production API.',
    ],
  },
]
