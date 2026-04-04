import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import CursorGlow from './CursorGlow.jsx'

export default function Layout({ children }) {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="relative min-h-screen page-radial-bg font-sans">
      <div className="pointer-events-none fixed inset-0 z-[1] bg-[radial-gradient(ellipse_90%_50%_at_50%_0%,_rgba(49,46,129,0.28),_transparent_55%)]" />
      <CursorGlow />
      <Navbar />
      <main className="relative z-10">{children}</main>
    </div>
  )
}
