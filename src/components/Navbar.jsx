import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { site } from '../data/site.js'

const homeSectionIds = [
  ...site.nav.filter((n) => n.sectionId).map((n) => n.sectionId),
  site.contactSectionId,
]

function scrollToId(id) {
  const el = document.getElementById(id)
  if (!el) return
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  el.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
}

export default function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [activeId, setActiveId] = useState('home')

  const onHome = location.pathname === '/'

  useEffect(() => {
    if (!onHome) return
    const navOffset = 100
    const onScroll = () => {
      const y = window.scrollY + navOffset
      let current = homeSectionIds[0]
      for (const id of homeSectionIds) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= y) current = id
      }
      const doc = document.documentElement
      if (window.innerHeight + window.scrollY >= doc.scrollHeight - 8) {
        current = homeSectionIds[homeSectionIds.length - 1]
      }
      setActiveId(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [onHome])

  const linkClassSection = (id) =>
    [
      'rounded-md px-2 py-1 text-sm font-medium transition-colors',
      onHome && activeId === id ? 'text-violet-400' : 'text-zinc-500 hover:text-zinc-200',
    ].join(' ')

  const linkClassPath = (path) => {
    const active =
      location.pathname === path || (path !== '/' && location.pathname.startsWith(`${path}/`))
    return [
      'rounded-md px-2 py-1 text-sm font-medium transition-colors',
      active ? 'text-violet-400' : 'text-zinc-500 hover:text-zinc-200',
    ].join(' ')
  }

  const onSectionClick = (id) => (e) => {
    e.preventDefault()
    if (onHome) {
      scrollToId(id)
    } else {
      navigate({ pathname: '/', hash: id })
    }
    setOpen(false)
  }

  return (
    <header className="fixed left-0 right-0 top-0 z-40 px-4 pt-4 sm:px-6 lg:px-8">
      <nav className="relative mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl border border-white/10 bg-zinc-950/70 px-4 py-3 shadow-lg shadow-black/40 backdrop-blur-md sm:px-6">
        <Link to="/" className="text-lg font-semibold text-white" onClick={() => setOpen(false)}>
          {site.brand}
        </Link>

        <button
          type="button"
          className="inline-flex rounded-lg border border-white/15 p-2 text-zinc-200 md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <div
          className={[
            'absolute left-4 right-4 top-full mt-2 flex flex-col gap-1 rounded-xl border border-white/10 bg-zinc-950/95 p-3 shadow-xl backdrop-blur-md md:static md:mt-0 md:flex md:flex-row md:flex-wrap md:items-center md:justify-end md:gap-x-1 md:border-0 md:bg-transparent md:p-0 md:shadow-none',
            open ? 'flex' : 'hidden md:flex',
          ].join(' ')}
        >
          {site.nav.map((item) =>
            item.path ? (
              <Link
                key={item.path}
                to={item.path}
                className={linkClassPath(item.path)}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.sectionId}
                href={`#${item.sectionId}`}
                className={linkClassSection(item.sectionId)}
                onClick={onSectionClick(item.sectionId)}
              >
                {item.label}
              </a>
            ),
          )}
          {onHome ? (
            <a
              href={`#${site.contactSectionId}`}
              className={`mt-1 rounded-full bg-violet-400 px-4 py-2 text-center text-sm font-semibold text-zinc-950 glow-accent transition hover:bg-violet-300 md:ml-2 md:mt-0 ${
                activeId === site.contactSectionId ? 'ring-2 ring-violet-200/60' : ''
              }`}
              onClick={onSectionClick(site.contactSectionId)}
            >
              {site.contactNavLabel ?? 'Contact'}
            </a>
          ) : (
            <Link
              to={`/#${site.contactSectionId}`}
              className="mt-1 rounded-full bg-violet-400 px-4 py-2 text-center text-sm font-semibold text-zinc-950 glow-accent transition hover:bg-violet-300 md:ml-2 md:mt-0"
              onClick={() => setOpen(false)}
            >
              {site.contactNavLabel ?? 'Contact'}
            </Link>
          )}
        </div>
      </nav>
    </header>
  )
}
