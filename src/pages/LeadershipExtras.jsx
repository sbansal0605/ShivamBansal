import { site } from '../data/site.js'
import SectionTitle from '../components/ui/SectionTitle.jsx'

function LeadershipIcon() {
  return (
    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-violet-400/35 bg-violet-400/10 shadow-[0_0_24px_rgba(124,58,237,0.22)]">
      <svg className="h-7 w-7 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    </div>
  )
}

export default function LeadershipExtras() {
  const { pageTitle, items = [] } = site.leadershipExtras ?? { pageTitle: 'My other half', items: [] }

  return (
    <div id="leadership-extras" className="scroll-mt-28 sm:scroll-mt-32">
      <div className="mx-auto flex min-h-dvh max-w-6xl flex-col px-4 pb-24 pt-24 sm:px-6 sm:pb-28 sm:pt-28 lg:px-8">
        <SectionTitle className="!mb-12 sm:!mb-14">{pageTitle}</SectionTitle>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center rounded-2xl border border-dashed border-white/15 bg-white/[0.02] px-6 py-20 text-center">
            <LeadershipIcon />
            <p className="mt-8 max-w-md text-base leading-relaxed text-zinc-400">
              Leadership roles, volunteering, and other activities will appear here.
            </p>
          </div>
        ) : (
          <div className="grid flex-1 auto-rows-fr gap-7 sm:gap-8 md:grid-cols-2 md:items-stretch">
            {items.map((item) => (
              <article
                key={item.title}
                className="flex h-full min-h-[220px] flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-8 text-center shadow-lg shadow-black/30 backdrop-blur-md transition hover:border-violet-400/30"
              >
                <div>
                  <LeadershipIcon />
                  <h3 className="mt-6 text-lg font-semibold text-white">{item.title}</h3>
                  {item.date ? <p className="mt-2 text-sm font-medium text-violet-400/90">{item.date}</p> : null}
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.description}</p>
                </div>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-block text-sm font-medium text-violet-400 hover:text-violet-300"
                  >
                    {item.linkLabel ?? 'Learn more'}
                  </a>
                ) : item.status ? (
                  <p className="mt-8 text-sm font-medium text-violet-400/90">{item.status}</p>
                ) : null}
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
