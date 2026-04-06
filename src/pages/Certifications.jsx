import { site } from '../data/site.js'
import SectionTitle from '../components/ui/SectionTitle.jsx'
import GlassCard from '../components/ui/GlassCard.jsx'

function MedalIcon() {
  return (
    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-violet-400/10 shadow-[0_0_20px_rgba(124,58,237,0.22)]">
      <svg className="h-7 w-7 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    </div>
  )
}

export default function Certifications() {
  return (
    <div
      id="certifications"
      className="mx-auto max-w-6xl scroll-mt-24 px-4 pb-20 pt-14 sm:scroll-mt-28 sm:px-6 sm:pb-24 sm:pt-16 lg:px-8"
    >
      <SectionTitle>Certifications</SectionTitle>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {site.certifications.map((c, i) => (
          <GlassCard
            key={c.pdf ?? c.image ?? `${c.title}-${c.issuer}-${i}`}
            className="text-center shadow-[0_0_24px_rgba(124,58,237,0.08)] transition hover:border-violet-400/25"
          >
            <MedalIcon />
            <h3 className="mt-5 text-base font-semibold text-white">{c.title}</h3>
            <p className="mt-2 text-sm text-violet-400">{c.issuer}</p>
            {c.year ? <p className="mt-3 text-xs text-zinc-500">{c.year}</p> : null}
            {c.pdf ? (
              <a
                href={c.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center rounded-lg border border-violet-400/30 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300 transition hover:border-violet-400/50 hover:bg-violet-500/20"
              >
                View certificate (PDF)
              </a>
            ) : null}
            {c.image && !c.pdf ? (
              <a
                href={c.image}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center rounded-lg border border-violet-400/30 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300 transition hover:border-violet-400/50 hover:bg-violet-500/20"
              >
                View certification
              </a>
            ) : null}
          </GlassCard>
        ))}
      </div>
    </div>
  )
}
