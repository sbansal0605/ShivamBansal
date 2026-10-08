import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { site } from '../data/site.js'

/** Competitions to include in the rotation, by slug. */
const featuredCompetitions = [
  { slug: 'microsoft-divergent-teams-hackathon-2026-shelfsync', title: 'Divergent Teams Hackathon' },
  { slug: 'gastc-2026-cricketcoach-web-mobile', title: 'Georgia Student Technology Competition' },
]

/** First image in each project's gallery (projects without one are skipped), then featured competitions. */
const slides = [
  ...site.projects.map((p) => {
    const img = p.gallery?.find((g) => (g.type ?? 'image') === 'image' && g.src)
    return img
      ? { key: p.slug, to: `/projects/${p.slug}`, title: p.title.split(':')[0], eyebrow: 'Featured project', src: img.src, alt: img.alt }
      : null
  }),
  ...featuredCompetitions.map(({ slug, title }) => {
    const c = site.competitions.find((x) => x.slug === slug)
    return c?.image
      ? {
          key: c.slug,
          to: `/competitions/${c.slug}`,
          title,
          eyebrow: `Competition · ${c.result}`,
          src: c.image,
          alt: c.imageAlt,
        }
      : null
  }),
].filter(Boolean)

/** Seconds for one card to drift into the focus slot. */
const SECONDS_PER_CARD = 3.25

export default function ProjectDrift() {
  const stageRef = useRef(null)
  const cardRefs = useRef([])
  const [animated, setAnimated] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const wide = window.matchMedia('(min-width: 768px)')
    const update = () => setAnimated(!motion.matches && wide.matches)
    update()
    motion.addEventListener('change', update)
    wide.addEventListener('change', update)
    return () => {
      motion.removeEventListener('change', update)
      wide.removeEventListener('change', update)
    }
  }, [])

  useEffect(() => {
    if (!animated) return
    const stage = stageRef.current
    const cards = cardRefs.current.filter(Boolean)
    if (!stage || cards.length === 0) return

    // Cards sit in an endless horizontal strip with a fixed gap. The phase
    // (in card units) advances at a fixed rate every frame, so the strip
    // drifts through ALL cards endlessly; offsets wrap so it never resets.
    const n = cards.length
    const driftRate = 1 / SECONDS_PER_CARD
    let phase = 0
    let last = performance.now()
    let paused = document.hidden
    let currentActive = -1
    let frame
    let gap = 1
    // Manual control (trackpad swipe / drag) pauses the drift until idle.
    let resumeAt = 0
    const IDLE_MS = 1500
    const nudge = (dx) => {
      phase -= dx / gap
      resumeAt = performance.now() + IDLE_MS
    }

    const render = () => {
      const w = stage.clientWidth
      const h = stage.clientHeight
      const cw = cards[0].offsetWidth
      const ch = cards[0].offsetHeight
      gap = cw * 0.94 + 8
      let nearest = 0
      let best = Infinity
      cards.forEach((card, i) => {
        let offset = (((i - phase) % n) + n) % n
        if (offset > n / 2) offset -= n
        const dist = Math.abs(offset)
        const focus = Math.max(0, 1 - dist)
        const x = w / 2 + offset * gap - cw / 2
        const y = h / 2 - ch / 2
        card.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0) scale(${(0.86 + focus * 0.14).toFixed(4)})`
        card.style.opacity = String(Math.max(0, 1 - Math.max(0, dist - 0.3) * 0.45))
        card.style.zIndex = String(100 - Math.round(dist * 10))
        card.tabIndex = dist < 0.5 ? 0 : -1
        if (dist < best) {
          best = dist
          nearest = i
        }
      })
      if (nearest !== currentActive) {
        currentActive = nearest
        setActiveIndex(nearest)
      }
    }

    const tick = (now) => {
      const dt = Math.min(now - last, 100)
      last = now
      if (!paused && now >= resumeAt) phase += driftRate * (dt / 1000)
      render()
      frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)

    // Pause the drift while the tab is hidden; resume on return.
    const onVisibility = () => {
      paused = document.hidden
    }
    document.addEventListener('visibilitychange', onVisibility)

    // Two-finger horizontal trackpad swipe. Vertical scrolling passes through
    // to the page so the strip never traps scroll.
    const onWheel = (e) => {
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return
      e.preventDefault()
      nudge(-e.deltaX)
    }

    // Click-and-drag (mouse, or trackpad click-drag).
    let dragging = false
    let dragX = 0
    let dragMoved = 0
    const onPointerDown = (e) => {
      if (e.pointerType === 'touch' || e.button !== 0) return
      dragging = true
      dragX = e.clientX
      dragMoved = 0
    }
    const onPointerMove = (e) => {
      if (!dragging) return
      const dx = e.clientX - dragX
      dragX = e.clientX
      dragMoved += Math.abs(dx)
      if (dragMoved > 4) stage.style.cursor = 'grabbing'
      nudge(dx)
    }
    const onPointerUp = () => {
      dragging = false
      stage.style.cursor = ''
    }
    // A drag shouldn't count as a click on the card under the pointer.
    const onClickCapture = (e) => {
      if (dragMoved > 4) {
        e.preventDefault()
        e.stopPropagation()
        dragMoved = 0
      }
    }
    const onDragStart = (e) => e.preventDefault()

    stage.addEventListener('wheel', onWheel, { passive: false })
    stage.addEventListener('pointerdown', onPointerDown)
    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('pointerup', onPointerUp)
    stage.addEventListener('click', onClickCapture, true)
    stage.addEventListener('dragstart', onDragStart)
    return () => {
      cancelAnimationFrame(frame)
      document.removeEventListener('visibilitychange', onVisibility)
      stage.removeEventListener('wheel', onWheel)
      stage.removeEventListener('pointerdown', onPointerDown)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerup', onPointerUp)
      stage.removeEventListener('click', onClickCapture, true)
      stage.removeEventListener('dragstart', onDragStart)
    }
  }, [animated])

  if (slides.length === 0) return null

  if (!animated) {
    return (
      <section aria-label="Selected projects" className="px-4 pb-12 sm:px-6">
        <div className="mx-auto flex max-w-6xl snap-x gap-4 overflow-x-auto pb-2">
          {slides.map((s) => (
            <Link
              key={s.key}
              to={s.to}
              className="w-64 shrink-0 snap-start overflow-hidden rounded-xl border border-white/10 bg-zinc-900/60"
            >
              <img src={s.src} alt={s.alt} className="aspect-video w-full object-cover object-top" loading="lazy" />
              <p className="px-3 py-2 text-sm font-medium text-zinc-200">{s.title}</p>
            </Link>
          ))}
        </div>
      </section>
    )
  }

  const active = slides[activeIndex] ?? slides[0]

  return (
    <section aria-label="Selected projects" className="px-4 pb-16 sm:px-6">
      <div ref={stageRef} className="relative mx-auto cursor-grab select-none h-[17rem] max-w-6xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] lg:h-[19rem]">
        {slides.map((s, i) => (
          <Link
            key={s.key}
            ref={(el) => {
              cardRefs.current[i] = el
            }}
            to={s.to}
            className="absolute left-0 top-0 w-[22rem] overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl shadow-black/60 will-change-transform lg:w-[26rem]"
          >
            <img src={s.src} alt={s.alt} className="aspect-video w-full object-cover object-top" decoding="async" />
          </Link>
        ))}
      </div>
      <div className="mt-2 flex justify-center" aria-live="polite">
        <Link
          to={active.to}
          className="group inline-flex flex-col items-center gap-1.5 rounded-2xl border border-violet-400/30 bg-violet-500/[0.08] px-7 py-3 shadow-[0_0_28px_rgba(124,58,237,0.18)] backdrop-blur-md transition hover:border-violet-400/55 hover:bg-violet-500/[0.14]"
        >
          <span className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-violet-400/90">
            {active.eyebrow}
          </span>
          <span className="text-xl font-bold tracking-tight text-white text-glow-accent sm:text-2xl">
            {active.title}
          </span>
          <span className="text-xs font-medium text-zinc-400 transition group-hover:text-violet-300">
            View more →
          </span>
        </Link>
      </div>
    </section>
  )
}
