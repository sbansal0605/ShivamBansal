import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getProjectBySlug } from '../data/site.js'
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

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = slug ? getProjectBySlug(slug) : null
  const detail = project?.detailSections
  const gallery = project?.gallery
  const hasGallery = Array.isArray(gallery) && gallery.length > 0
  const [tab, setTab] = useState('overview')

  if (!project || !detail?.length) {
    return (
      <div className="scroll-mt-28 sm:scroll-mt-32">
        <div className="mx-auto max-w-3xl px-4 pb-24 pt-24 sm:px-6 sm:pt-28">
          <GlassCard>
            <p className="text-zinc-400">This project could not be found.</p>
            <Link
              to="/projects"
              className="mt-6 inline-block text-sm font-medium text-violet-400 hover:text-violet-300"
            >
              Back to Projects
            </Link>
          </GlassCard>
        </div>
      </div>
    )
  }

  const wideLayout = hasGallery && tab === 'gallery'

  return (
    <div className="scroll-mt-28 sm:scroll-mt-32">
      <div
        className={`mx-auto px-4 pb-24 pt-24 sm:px-6 sm:pb-28 sm:pt-28 lg:px-8 ${wideLayout ? 'max-w-6xl' : 'max-w-3xl'}`}
      >
        <Link
          to="/projects"
          className="mb-8 inline-flex text-sm font-medium text-violet-400/95 transition hover:text-violet-300"
        >
          ← Projects
        </Link>

        <SectionTitle className="!mb-4 !text-left">{project.title}</SectionTitle>
        <p className="mb-8 text-base leading-relaxed text-zinc-400">{project.description}</p>

        {hasGallery ? (
          <div
            className="mb-8 flex flex-wrap gap-2 border-b border-white/10 pb-3"
            role="tablist"
            aria-label="Project sections"
          >
            <button
              type="button"
              role="tab"
              aria-selected={tab === 'overview'}
              id="tab-overview"
              className={[
                'rounded-lg px-4 py-2 text-sm font-medium transition',
                tab === 'overview'
                  ? 'bg-violet-500/20 text-violet-200 ring-1 ring-violet-400/40'
                  : 'text-zinc-500 hover:bg-white/5 hover:text-zinc-300',
              ].join(' ')}
              onClick={() => setTab('overview')}
            >
              Overview
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={tab === 'gallery'}
              id="tab-gallery"
              className={[
                'rounded-lg px-4 py-2 text-sm font-medium transition',
                tab === 'gallery'
                  ? 'bg-violet-500/20 text-violet-200 ring-1 ring-violet-400/40'
                  : 'text-zinc-500 hover:bg-white/5 hover:text-zinc-300',
              ].join(' ')}
              onClick={() => setTab('gallery')}
            >
              View gallery
            </button>
          </div>
        ) : null}

        {tab === 'overview' ? (
          <GlassCard className="sm:p-10">
            <div className="space-y-10">
              {detail.map((section, si) => (
                <section key={section.heading ? `${section.heading}-${si}` : `section-${si}`}>
                  {section.heading ? (
                    <h2 className="mb-4 text-base font-semibold tracking-wide text-violet-300/95">
                      {section.heading}
                    </h2>
                  ) : null}
                  <div className="space-y-3.5 text-[0.9375rem] leading-relaxed text-zinc-400">
                    {(section.paragraphs ?? []).map((para, pi) => (
                      <p key={`${si}-p-${pi}`}>{para}</p>
                    ))}
                  </div>
                  {section.bullets?.length ? (
                    <ul className="mt-4 list-inside list-disc space-y-2 text-[0.9375rem] leading-relaxed text-zinc-400">
                      {section.bullets.map((item, bi) => (
                        <li key={`${si}-b-${bi}`}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}
            </div>
          </GlassCard>
        ) : (
          <div
            className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2"
            role="tabpanel"
            aria-labelledby="tab-gallery"
          >
            {gallery.map((item, i) => {
              const kind = item.type ?? 'image'
              const key = item.href ?? item.videoUrl ?? item.src ?? `gallery-${i}`

              if (kind === 'youtube' && item.videoUrl) {
                const embed = toYouTubeEmbedUrl(item.videoUrl)
                if (!embed) return null
                return (
                  <figure
                    key={key}
                    className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 shadow-lg shadow-black/30 lg:col-span-2"
                  >
                    <div className="aspect-video w-full bg-black">
                      <iframe
                        title={item.title ?? 'Project demo video'}
                        src={embed}
                        className="h-full w-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 bg-zinc-950/50 px-4 py-3">
                      <span className="text-sm font-semibold text-zinc-200">{item.title ?? 'Video'}</span>
                      <a
                        href={item.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-violet-400 transition hover:text-violet-300"
                      >
                        Open on YouTube
                      </a>
                    </div>
                    {item.caption ? (
                      <figcaption className="border-t border-white/10 px-4 py-3 text-sm leading-relaxed text-zinc-400">
                        {item.caption}
                      </figcaption>
                    ) : null}
                  </figure>
                )
              }

              if (kind === 'video' && item.src) {
                const videoSrc = item.src
                return (
                  <figure
                    key={key}
                    className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 shadow-lg shadow-black/30 lg:col-span-2"
                  >
                    <div className="bg-black">
                      <video
                        className="aspect-video w-full bg-black object-contain"
                        controls
                        playsInline
                        preload="metadata"
                        aria-label={item.title ?? 'Project demo video'}
                      >
                        <source src={videoSrc} />
                        Your browser does not support embedded video.{' '}
                        <a
                          href={videoSrc}
                          className="text-violet-400 underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Download the clip
                        </a>
                        .
                      </video>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 bg-zinc-950/50 px-4 py-3">
                      <span className="text-sm font-semibold text-zinc-200">{item.title ?? 'Video'}</span>
                      <a
                        href={videoSrc}
                        download
                        className="text-sm font-medium text-violet-400 transition hover:text-violet-300"
                      >
                        Download
                      </a>
                    </div>
                    {item.caption ? (
                      <figcaption className="border-t border-white/10 px-4 py-3 text-sm leading-relaxed text-zinc-400">
                        {item.caption}
                      </figcaption>
                    ) : null}
                  </figure>
                )
              }

              if (kind === 'pdf') {
                const pdfHref = item.href
                return (
                  <figure
                    key={key}
                    className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 shadow-lg shadow-black/30 lg:col-span-2"
                  >
                    <div className="aspect-[4/3] w-full min-h-[20rem] bg-zinc-950/80 sm:min-h-[28rem]">
                      <iframe
                        title={item.title ?? 'PDF document'}
                        src={`${pdfHref}#view=FitH`}
                        className="h-full w-full border-0"
                      />
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 bg-zinc-950/50 px-4 py-3">
                      <a
                        href={pdfHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-violet-400 transition hover:text-violet-300"
                      >
                        Open PDF in new tab
                      </a>
                      {item.title ? (
                        <span className="text-xs font-medium uppercase tracking-wide text-zinc-500">{item.title}</span>
                      ) : null}
                    </div>
                    {item.caption ? (
                      <figcaption className="border-t border-white/10 px-4 py-3 text-sm leading-relaxed text-zinc-400">
                        {item.caption}
                      </figcaption>
                    ) : null}
                  </figure>
                )
              }

              return (
                <figure
                  key={key}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 shadow-lg shadow-black/30"
                >
                  <img
                    src={item.src}
                    alt={item.alt ?? ''}
                    loading={i < 2 ? 'eager' : 'lazy'}
                    decoding="async"
                    className="w-full bg-zinc-950/50"
                  />
                  {item.caption ? (
                    <figcaption className="border-t border-white/10 bg-zinc-950/50 px-4 py-3 text-sm leading-relaxed text-zinc-400">
                      {item.caption}
                    </figcaption>
                  ) : null}
                </figure>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
