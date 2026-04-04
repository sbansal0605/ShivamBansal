import { site } from '../data/site.js'
import SectionTitle from '../components/ui/SectionTitle.jsx'
import GlassCard from '../components/ui/GlassCard.jsx'

export default function Education() {
  const { education } = site
  return (
    <div
      id="education"
      className="mx-auto max-w-6xl scroll-mt-24 px-4 pb-20 pt-14 sm:scroll-mt-28 sm:px-6 sm:pb-24 sm:pt-16 lg:px-8"
    >
      <SectionTitle>{education.title}</SectionTitle>
      <GlassCard className="mx-auto max-w-2xl text-center">
        {education.schoolLogo ? (
          <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-2xl bg-white p-3 shadow-lg shadow-black/30 ring-1 ring-white/20 sm:h-36 sm:w-36 sm:p-4">
            <img
              src={education.schoolLogo}
              alt={`${education.school} logo`}
              className="max-h-full max-w-full object-contain"
              width={144}
              height={144}
            />
          </div>
        ) : (
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-violet-400/40 bg-violet-400/10">
            <svg className="h-9 w-9 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12 12 0 01.84 7.99M12 14l-6.16-3.422a12 12 0 00-.84 7.99M12 14v9" />
            </svg>
          </div>
        )}
        <h3 className="mt-6 text-xl font-semibold text-white sm:text-2xl">{education.degree}</h3>
        <p className="mt-2 text-lg text-violet-400">{education.school}</p>
        <p className="mt-3 text-sm text-zinc-500">{education.range}</p>
      </GlassCard>
    </div>
  )
}
