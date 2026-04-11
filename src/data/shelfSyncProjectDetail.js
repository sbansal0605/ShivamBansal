/** Long-form copy for ShelfSync — /projects/shelfsync (Microsoft Divergent Teams Hackathon, Atlanta 2026) */
export const shelfSyncDetailSections = [
  {
    heading: 'Why ShelfSync exists',
    paragraphs: [
      'Independent retailers—bodegas, corner stores, neighborhood grocers—operate on razor-thin margins and have almost no leverage when it comes to pricing promotions. CPG brands, meanwhile, spend billions on trade promotions that mostly benefit large chains while leaving independent stores out of the loop. The result: small retailers cannot compete on price, brands miss the fastest-growing retail channel, and price-sensitive shoppers in those neighborhoods pay more than they should.',
      'ShelfSync was built at the Microsoft Divergent Teams Hackathon in Atlanta (April 2026) to close that gap. The core idea: brands fund real-time, dynamic discounts directly to independent stores so shoppers pay less, stores keep their full retail margin (the brand covers the gap), and brands move inventory, reduce waste, and reach consumers where large-chain promotions never land.',
      'The platform connects three stakeholders in a single loop—brands set campaign triggers (weather, expiry, velocity, time windows, local events), stores see subsidized deals appear automatically on their POS and dashboard, and consumers walk in to lower prices without clipping a coupon.',
    ],
  },
  {
    heading: 'How it works',
    paragraphs: [
      'ShelfSync is split into two portals—one for store owners and one for brand managers—connected by a rules engine that activates subsidies when real-world conditions match campaign triggers.',
    ],
    bullets: [
      'Brand portal: campaign builder (multi-step wizard for triggers, discount type, store selection, and budget caps), network map of partner stores, billing dashboard, ESG impact tracker for waste reduction, and a Monte Carlo simulation sandbox that projects ROI before a campaign launches.',
      'Store portal: live dashboard with revenue, subsidies received, inventory health, and margin-protected metrics; real-time transaction and subsidy feeds via Server-Sent Events; inventory table with expiry tracking and subsidy badges; POS display for customer-facing deals; reconciliation view with exportable subsidy event logs; invoice analytics with simulated AI-driven receipt scanning; and an AI assistant for quick owner and customer-facing Q&A.',
      'Rules engine: evaluates triggers—temperature thresholds, days-to-expiry, sales velocity, time-of-day windows, and local event flags—to decide when a subsidy activates and at what discount level.',
      'Demo mode (Ctrl+Shift+D): a choreographed walkthrough that ramps temperature to trigger weather-based deals, fires expiry alerts, sends mock SMS notifications, and plays sound cues—turning the prototype into a convincing live story without backend orchestration.',
    ],
  },
  {
    heading: 'Technical architecture',
    paragraphs: [
      'The stack was chosen for hackathon speed and production-plausible depth: Next.js 16 with the App Router and React 19 for routing and server components, TypeScript end-to-end, and Tailwind CSS 4 for a polished dark-themed UI shipped in under 24 hours.',
    ],
    bullets: [
      'Frontend: React 19 with Framer Motion for transitions and micro-interactions; Recharts for revenue, subsidy, billing, and ESG dashboards; DM Sans and JetBrains Mono via next/font.',
      'Auth: email-based OTP flow—Nodemailer sends a six-digit code, an in-memory OTP store validates it, and a base64-encoded JSON session cookie gates portal access through Next.js middleware.',
      'Real-time feeds: Server-Sent Events stream synthetic transactions and subsidy activations to the store dashboard, with rush-hour timing curves for realistic pacing.',
      'Data layer: Prisma schema on SQLite defines the full relational model (User, Store, Brand, Product, StoreProduct, Campaign, SubsidyEvent, Transaction) ready for production wiring; the demo path runs entirely on a rich mock-data module so the app works without a database.',
      'Server actions: receipt-scan simulation for Snap-to-Sync, and a 24-hour Monte Carlo brand simulator that projects hourly traffic, stock clearance, and ROI narratives.',
      'Demo infrastructure: DemoModeProvider, DemoOverlay, MockPhone, and ToastProvider orchestrate weather ramps, sound effects, mock SMS sequences, and POS deal injection from a single keyboard shortcut.',
    ],
  },
  {
    heading: 'Key features deep-dive',
    paragraphs: [
      'The store dashboard is the operational heartbeat: a weather bar shows current conditions tied to trigger rules, a live transaction feed scrolls sales as they happen via SSE, subsidy cards highlight active brand-funded deals, and a Snap-to-Sync modal lets owners photograph a receipt to reconcile offline sales. Inventory management surfaces stock levels, days-to-expiry with color coding, current vs. subsidized pricing, and velocity sparklines so owners spot slow movers before they expire.',
      'On the brand side, the campaign builder walks managers through trigger configuration (weather above a threshold, expiry within N days, velocity below target), discount mechanics (fixed or percentage, per-unit caps, total budget), store targeting from the network map, and a review step before launch. The ESG impact page aggregates waste-saved-in-pounds from subsidy events, giving brands a sustainability metric tied directly to campaign performance. The simulator sandbox runs a deterministic Monte Carlo projection so brand managers can estimate ROI, units cleared, and foot-traffic lift before committing budget.',
    ],
  },
  {
    heading: 'Hackathon context and outcome',
    paragraphs: [
      'ShelfSync was built at the Microsoft Divergent Teams Hackathon in Atlanta (April 2026). The challenge pushed teams to rethink how technology can serve underrepresented segments of the retail economy—independent stores that power neighborhoods but lack the tools and trade-promotion access that large chains take for granted.',
      'Before the build sprint we attended workshops on real-world machine learning models in industry and on agentic AI—how autonomous, tool-using agents are designed, evaluated, and guarded in production—so our architecture choices and pitch language matched what sponsor mentors expect from serious software.',
      'We took first place at the regional event (Sony Bluetooth headphones among the prizes) and qualified for nationals. Final presentations were to senior engineers and vice presidents from Microsoft, CONA, Coca-Cola, and Equifax—walking through dual store and brand portals, subsidy flows, and demo-mode storytelling grounded in real CPG and retail stakes.',
      'The project demonstrates a full-loop marketplace concept: brand money flows to stores as subsidies, stores keep margin, consumers get lower prices, and the platform earns a small transaction fee. Demo mode, dual portals, and live SSE feeds let judges and sponsor leaders experience both sides of the marketplace in one sitting.',
      'Next we travel to Microsoft headquarters in Seattle to compete at the national level of the Divergent Teams Hackathon alongside other regional winners.',
    ],
  },
  {
    heading: 'Design principles',
    paragraphs: [
      'Margin-first for stores: every feature was evaluated against whether it protects or improves the store owner\'s margin—subsidies cover the discount gap so the retailer never absorbs the cost.',
      'Brand accountability: campaign budgets, billing dashboards, and ESG tracking make spend transparent and outcomes measurable, not just impressions.',
      'Demo as product theater: the choreographed demo mode was a deliberate design choice—judges and sponsor teams from CONA, Coca-Cola, Microsoft, and Equifax needed to feel the real-time loop, not read about it on a slide.',
    ],
  },
]
