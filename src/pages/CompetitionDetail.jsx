import { Link, useParams } from 'react-router-dom'
import { getCompetitionBySlug } from '../data/site.js'
import SectionTitle from '../components/ui/SectionTitle.jsx'
import GlassCard from '../components/ui/GlassCard.jsx'

function toYouTubeEmbedUrl(url) {
  if (!url || typeof url !== 'string') return null
  if (url.includes('youtube.com/embed/')) return url.split('&')[0]
  const fromWatch = url.match(/[?&]v=([^&]+)/)
  if (fromWatch) return `https://www.youtube.com/embed/${fromWatch[1]}`
  const fromShort = url.match(/youtu\.be\/([^?]+)/)
  if (fromShort) return `https://www.youtube.com/embed/${fromShort[1]}`
  return null
}

export default function CompetitionDetail() {
  const { slug } = useParams()
  const c = slug ? getCompetitionBySlug(slug) : null

  if (!c) {
    return (
      <div className="scroll-mt-28 sm:scroll-mt-32">
        <div className="mx-auto max-w-3xl px-4 pb-24 pt-24 sm:px-6 sm:pt-28">
          <GlassCard>
            <p className="text-zinc-400">This competition could not be found.</p>
            <Link
              to="/competitions"
              className="mt-6 inline-block text-sm font-medium text-violet-400 hover:text-violet-300"
            >
              Back to Competitions
            </Link>
          </GlassCard>
        </div>
      </div>
    )
  }

  const embedUrl = c.videoUrl ? toYouTubeEmbedUrl(c.videoUrl) : null

  return (
    <div className="scroll-mt-28 sm:scroll-mt-32">
      <div className="mx-auto max-w-3xl px-4 pb-24 pt-24 sm:px-6 sm:pb-28 sm:pt-28 lg:px-8">
        <Link
          to="/competitions"
          className="mb-8 inline-flex text-sm font-medium text-violet-400/95 transition hover:text-violet-300"
        >
          ← Competitions
        </Link>

        <SectionTitle className="!mb-8 !text-left">{c.title}</SectionTitle>

        <GlassCard className="sm:p-10">
          {c.image ? (
            <div className="-mx-6 -mt-6 mb-8 overflow-hidden rounded-t-2xl border-b border-white/10 sm:-mx-10 sm:-mt-10">
              <img
                src={c.image}
                alt={c.imageAlt ?? ''}
                className="aspect-video w-full object-cover object-[center_25%] sm:aspect-[16/10]"
                loading="lazy"
                decoding="async"
              />
            </div>
          ) : null}

          <div className="flex flex-wrap items-center gap-3">
            {c.date ? (
              <span className="text-sm font-medium tracking-wide text-violet-400/95">{c.date}</span>
            ) : null}
            {c.result ? (
              <span className="rounded-full border border-violet-400/35 bg-violet-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-violet-200">
                {c.result}
              </span>
            ) : null}
          </div>

          {c.projectName ? (
            <p className="mt-4 text-base font-medium text-white">
              Project: <span className="text-zinc-200">{c.projectName}</span>
            </p>
          ) : null}

          <div className="mt-8 space-y-4 text-[0.9375rem] leading-relaxed text-zinc-400">
            {(c.body ?? []).map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>

          {c.extraImages?.length ? (
            <div className="mt-10 space-y-6">
              {c.extraImages.map((img) => (
                <figure
                  key={img.src}
                  className="overflow-hidden rounded-xl border border-white/10 bg-zinc-950/40"
                >
                  <img
                    src={img.src}
                    alt={img.alt ?? ''}
                    className="w-full object-contain object-top"
                    loading="lazy"
                    decoding="async"
                  />
                  {img.caption ? (
                    <figcaption className="border-t border-white/10 px-3 py-2.5 text-center text-xs text-zinc-500">
                      {img.caption}
                    </figcaption>
                  ) : null}
                </figure>
              ))}
            </div>
          ) : null}

          {embedUrl ? (
            <div className="mt-10 overflow-hidden rounded-xl border border-white/10 bg-black/40 shadow-lg">
              <div className="aspect-video w-full">
                <iframe
                  title="Competition video"
                  src={embedUrl}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          ) : null}

          {c.links?.length ? (
            <ul className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {c.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-violet-400 hover:text-violet-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </GlassCard>
      </div>
    </div>
  )
}
