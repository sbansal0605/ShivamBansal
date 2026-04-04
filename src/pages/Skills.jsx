import { site } from '../data/site.js'
import SectionTitle from '../components/ui/SectionTitle.jsx'
import GlassCard from '../components/ui/GlassCard.jsx'
import SkillBar from '../components/ui/SkillBar.jsx'

export default function Skills() {
  const { skills } = site
  return (
    <div
      id="skills"
      className="mx-auto max-w-6xl scroll-mt-24 px-4 pb-20 pt-14 sm:scroll-mt-28 sm:px-6 sm:pb-24 sm:pt-16 lg:px-8"
    >
      <SectionTitle>{skills.title}</SectionTitle>
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
        <GlassCard>
          <h3 className="mb-6 text-lg font-semibold text-violet-400">{skills.technicalTitle}</h3>
          <div className="space-y-5">
            {skills.technical.map((s) => (
              <SkillBar key={s.name} name={s.name} percent={s.percent} />
            ))}
          </div>
        </GlassCard>
        <GlassCard>
          <h3 className="mb-6 text-lg font-semibold text-violet-400">{skills.toolsTitle}</h3>
          <div className="flex flex-col gap-3">
            {skills.tools.map((t) => (
              <div
                key={t}
                className="rounded-xl border border-zinc-700/80 bg-zinc-800/40 px-4 py-3 text-center text-sm font-medium text-zinc-200"
              >
                {t}
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  )
}
