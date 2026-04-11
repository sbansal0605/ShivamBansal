import { publicUrl } from '../utils/publicUrl.js'

/** ShelfSync project media — screenshots under /public/projects/shelfsync/; team photo in /public/competitions/ */
export const shelfSyncGallery = [
  {
    src: publicUrl('/competitions/microsoft-divergent-teams-hackathon-atlanta-2026.png'),
    alt: 'ShelfSync team at the Microsoft sign in Atlanta after the Microsoft Divergent Teams Hackathon',
    caption:
      'Microsoft Divergent Teams Hackathon (Atlanta, April 2026) — workshops on real-world models and agentic AI, first place and Sony Bluetooth headphones after pitching to leaders from Microsoft, CONA, Coca-Cola, and Equifax; nationals next at Microsoft HQ in Seattle.',
  },
  {
    src: publicUrl('/projects/shelfsync/01-landing.png'),
    alt: 'ShelfSync landing hero — brand-subsidized dynamic pricing for independent retail, Store and Brand dashboard CTAs, and stats bar',
    caption:
      'Landing — value proposition, dual portal entry points, and headline metrics (subsidies deployed, partner stores, waste prevented, brand ROI).',
  },
  {
    src: publicUrl('/projects/shelfsync/02-why-shelfsync.png'),
    alt: 'Why use ShelfSync — tabbed feature explorer with dynamic pricing product cards and trigger notes for heatwave, expiry, and local events',
    caption:
      'Marketing — “Why use ShelfSync” with live-style price cards (Coca-Cola, Kind Bar, Gatorade) tied to weather, expiry, and event triggers.',
  },
  {
    src: publicUrl('/projects/shelfsync/03-store-dashboard.png'),
    alt: 'Store dashboard for Mario’s Bodega — weather bar, KPI cards, live transaction feed, and active subsidy campaigns with budget bars',
    caption:
      'Store dashboard — heatwave protocol, revenue and subsidy KPIs, live sales feed, and active brand campaigns (Summer Hydration, Heatwave Kona, Weekend Energy).',
  },
  {
    src: publicUrl('/projects/shelfsync/04-dashboard-demo-sms.png'),
    alt: 'Same store dashboard with demo mode — mock SMS from ShelfSync and toast notifications for shelf placement and nearby stores',
    caption:
      'Demo mode — mock SMS orchestration and toasts showing subsidy activation, shelf placement updates, and cross-store stock coordination.',
  },
  {
    src: publicUrl('/projects/shelfsync/05-inventory.png'),
    alt: 'Store inventory — SKU table with expiry colors, subsidized badges, velocity sparklines, category health cards, and Request Subsidy actions',
    caption:
      'Inventory — category filters, sort by expiry/stock/velocity, subsidized SKUs, near-expiry highlights, and per-row subsidy requests.',
  },
  {
    src: publicUrl('/projects/shelfsync/06-invoice-analytics.png'),
    alt: 'Invoice Analytics overview — total invoice value, savings, tax credits, ROI, recent processed invoices, and savings-by-category chart',
    caption:
      'Invoice Analytics — procurement-style overview with AI-labeled savings, invoice log preview, and horizontal bar chart by spend category.',
  },
  {
    src: publicUrl('/projects/shelfsync/07-ai-assistant.png'),
    alt: 'Customer Assistant chat for Mario’s Bodega — product and deals Q&A with suggested prompts and role switch',
    caption:
      'AI Assistant — scripted customer-facing Q&A for products, weekly deals, and deli recommendations with quick-reply chips.',
  },
]
