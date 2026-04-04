import { site } from '../data/site.js'
import SectionTitle from '../components/ui/SectionTitle.jsx'

function TrophyIcon() {
  return (
    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-violet-400/35 bg-violet-400/10 shadow-[0_0_24px_rgba(124,58,237,0.22)]">
      <svg className="h-7 w-7 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M16.5 18.75h-9m9 0a3 3 0 01-3 3h-3a3 3 0 01-3-3m9 0v-3.375c0-.621-.504-1.125-1.125-1.125h-.872m-5.007 0H9.497m5.007 0v-.016c0-.667-.292-1.258-.76-1.661m-5.007 0a7.454 7.454 0 01-.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236a8.303 8.303 0 01-2.937 4.521A6.003 6.003 0 0115.91 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228M18.75 4.236V2.721C16.544 2.41 14.29 2.25 12 2.25c-2.291 0-4.545.16-6.75.47v1.516"
        />
      </svg>
    </div>
  )
}

export default function Competitions() {
  const items = site.competitions ?? []

  return (
    <div id="competitions" className="scroll-mt-28 sm:scroll-mt-32">
      <div className="mx-auto flex min-h-dvh max-w-6xl flex-col px-4 pb-24 pt-24 sm:px-6 sm:pb-28 sm:pt-28 lg:px-8">
        <SectionTitle className="!mb-12 sm:!mb-14">Competitions</SectionTitle>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center rounded-2xl border border-dashed border-white/15 bg-white/[0.02] px-6 py-20 text-center">
            <TrophyIcon />
            <p className="mt-8 max-w-md text-base leading-relaxed text-zinc-400">
              Competition highlights, contests, and results will appear here.
            </p>
          </div>
        ) : (
          <div className="grid flex-1 auto-rows-fr gap-7 sm:gap-8 md:grid-cols-2 md:items-stretch">
            {items.map((c) => (
              <article
                key={c.title}
                className="flex h-full min-h-[220px] flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-8 text-center shadow-lg shadow-black/30 backdrop-blur-md transition hover:border-violet-400/30"
              >
                <div>
                  <TrophyIcon />
                  <h3 className="mt-6 text-lg font-semibold text-white">{c.title}</h3>
                  {c.date ? <p className="mt-2 text-sm font-medium text-violet-400/90">{c.date}</p> : null}
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{c.description}</p>
                </div>
                {c.href ? (
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-block text-sm font-medium text-violet-400 hover:text-violet-300"
                  >
                    {c.linkLabel ?? 'View details'}
                  </a>
                ) : c.status ? (
                  <p className="mt-8 text-sm font-medium text-violet-400/90">{c.status}</p>
                ) : null}
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
