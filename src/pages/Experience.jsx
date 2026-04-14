import { site } from '../data/site.js'
import SectionTitle from '../components/ui/SectionTitle.jsx'
import GlassCard from '../components/ui/GlassCard.jsx'

function ExperienceBody({ item }) {
  const lines = item.highlights ?? (item.description ? [item.description] : [])
  return (
    <ul className="mt-5 max-w-prose space-y-3.5 text-[0.9375rem] leading-relaxed text-zinc-400">
      {lines.map((line) => (
        <li key={line} className="flex gap-3.5">
          <span
            className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400/75 shadow-[0_0_8px_rgba(167,139,250,0.45)]"
            aria-hidden
          />
          <span>{line}</span>
        </li>
      ))}
    </ul>
  )
}

export default function Experience() {
  const { experience } = site
  return (
    <div id="experience" className="scroll-mt-28 sm:scroll-mt-32">
      <div className="mx-auto min-h-dvh max-w-6xl px-4 pb-24 pt-24 sm:px-6 sm:pb-28 sm:pt-28 lg:px-8">
        <SectionTitle className="!mb-12 sm:!mb-14">{experience.title}</SectionTitle>
        <GlassCard className="mx-auto max-w-4xl sm:p-10 lg:p-12">
          <div className="flex flex-col">
            {experience.items.map((item, i) => (
              <div
                key={`${item.title}-${i}`}
                className={i > 0 ? 'mt-12 border-t border-white/10 pt-12 sm:mt-14 sm:pt-14' : ''}
              >
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-8">
                  <div
                    className={`flex shrink-0 items-center justify-center overflow-hidden border ${
                      item.logo
                        ? item.logoSquare
                          ? 'h-14 w-14 rounded-xl border-white/25 bg-white p-2 shadow-[0_0_24px_rgba(255,255,255,0.06)] sm:h-16 sm:w-16 sm:p-2.5'
                          : 'h-14 w-auto max-w-[9.5rem] rounded-xl border-white/25 bg-white px-2.5 py-1.5 shadow-[0_0_24px_rgba(255,255,255,0.06)] sm:h-16 sm:max-w-[11rem] sm:px-3 sm:py-2'
                        : 'h-14 w-14 rounded-full border-violet-400/40 bg-violet-400/10 sm:h-16 sm:w-16'
                    }`}
                  >
                    {item.logo ? (
                      <img
                        src={item.logo}
                        alt={item.logoAlt ?? ''}
                        className={
                          item.logoSquare
                            ? 'h-full w-full object-contain object-center'
                            : 'h-9 w-auto max-w-full object-contain object-center sm:h-10'
                        }
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <svg
                        className="h-7 w-7 text-violet-400 sm:h-8 sm:w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-semibold leading-snug text-white sm:text-xl">{item.title}</h3>
                    <p className="mt-2 text-sm font-medium tracking-wide text-violet-400/95">{item.range}</p>
                    {item.website ? (
                      <a
                        href={item.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex text-sm font-medium text-violet-300 transition hover:text-violet-200"
                      >
                        {item.website}
                      </a>
                    ) : null}
                    <ExperienceBody item={item} />
                    {item.pdf ? (
                      <a
                        href={item.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex w-full items-center justify-center rounded-xl border border-violet-400/35 bg-violet-500/10 px-4 py-2.5 text-sm font-medium text-violet-200 transition hover:border-violet-400/55 hover:bg-violet-500/[0.18] sm:w-auto"
                      >
                        View completion certificate (PDF)
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {experience.footerNote ? (
            <p className="mt-12 border-t border-white/10 pt-8 text-left text-sm text-zinc-500 sm:mt-14 sm:pt-10">
              {experience.footerNote}
            </p>
          ) : null}
        </GlassCard>
      </div>
    </div>
  )
}
