import { site } from '../data/site.js'
import SectionTitle from '../components/ui/SectionTitle.jsx'
import GlassCard from '../components/ui/GlassCard.jsx'

function InfoIcon({ type }) {
  const common = 'h-5 w-5 shrink-0 text-violet-400'
  if (type === 'location') {
    return (
      <svg className={common} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  }
  if (type === 'education') {
    return (
      <svg className={common} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12 12 0 01.84 7.99M12 14l-6.16-3.422a12 12 0 00-.84 7.99" />
      </svg>
    )
  }
  return (
    <svg className={common} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}

export default function About() {
  const { about } = site
  return (
    <div
      id="about"
      className="mx-auto max-w-6xl scroll-mt-24 px-4 pb-20 pt-14 sm:scroll-mt-28 sm:px-6 sm:pb-24 sm:pt-16 lg:px-8"
    >
      <SectionTitle>{about.title}</SectionTitle>
      <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
        <GlassCard className="flex flex-col items-center justify-center border-white/[0.07] p-6 sm:p-8 lg:col-span-1">
          <figure className="w-full max-w-[260px]">
            <div className="overflow-hidden rounded-3xl bg-zinc-900/80 shadow-2xl shadow-black/60 ring-1 ring-white/10">
              <img
                src={about.profileImage}
                alt={site.name}
                className="aspect-[4/5] w-full object-cover object-[center_28%] sm:aspect-[3/4]"
              />
            </div>
          </figure>
        </GlassCard>
        <GlassCard className="lg:col-span-2">
          <h3 className="text-lg font-semibold text-violet-400">{about.journeyTitle}</h3>
          <div className="mt-4 space-y-4 text-zinc-400">
            {about.journeyParagraphs.map((p, i) => (
              <p key={i} className="leading-relaxed">
                {p}
              </p>
            ))}
          </div>
          <ul className="mt-8 space-y-4">
            {about.info.map((row) => (
              <li key={row.text} className="flex items-center gap-3 text-zinc-200">
                <InfoIcon type={row.icon} />
                <span>{row.text}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </div>
    </div>
  )
}
