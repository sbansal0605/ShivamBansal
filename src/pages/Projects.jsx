import { site } from '../data/site.js'
import SectionTitle from '../components/ui/SectionTitle.jsx'

function CodeIcon() {
  return (
    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-violet-400/35 bg-violet-400/10 shadow-[0_0_24px_rgba(124,58,237,0.22)]">
      <span className="text-lg font-mono text-violet-400">&lt;/&gt;</span>
    </div>
  )
}

export default function Projects() {
  return (
    <div id="projects" className="scroll-mt-28 sm:scroll-mt-32">
      <div className="mx-auto flex min-h-dvh max-w-6xl flex-col px-4 pb-24 pt-24 sm:px-6 sm:pb-28 sm:pt-28 lg:px-8">
        <SectionTitle className="!mb-12 sm:!mb-14">Projects</SectionTitle>
        <div className="grid flex-1 auto-rows-fr gap-7 sm:gap-8 md:grid-cols-2 md:items-stretch">
          {site.projects.map((p) => (
            <article
              key={p.title}
              className="flex h-full min-h-[240px] flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-8 text-center shadow-lg shadow-black/30 backdrop-blur-md transition hover:border-violet-400/30 sm:min-h-[260px]"
            >
              <div>
                <CodeIcon />
                <h3 className="mt-6 text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{p.description}</p>
              </div>
              {p.href ? (
                <a
                  href={p.href}
                  className="mt-8 inline-block text-sm font-medium text-violet-400 hover:text-violet-300"
                >
                  View project
                </a>
              ) : p.status ? (
                <div className="mt-8 flex justify-center">
                  <span
                    className="inline-flex min-h-[2.75rem] min-w-[11rem] max-w-full items-center justify-center rounded-xl border border-violet-400/40 bg-violet-500/[0.12] px-6 py-3 text-base font-semibold tracking-wide text-violet-100 shadow-[0_0_24px_rgba(124,58,237,0.15)]"
                    role="status"
                  >
                    {p.status}
                  </span>
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
