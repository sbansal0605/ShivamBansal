import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Home from './Home.jsx'
import About from './About.jsx'
import Skills from './Skills.jsx'
import Certifications from './Certifications.jsx'
import Education from './Education.jsx'
import Contact from './Contact.jsx'

export default function Landing() {
  const location = useLocation()

  useEffect(() => {
    const hash = location.hash.replace(/^#/, '')
    if (!hash) return
    const el = document.getElementById(hash)
    if (!el) return
    const id = window.requestAnimationFrame(() => {
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      el.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
    })
    return () => cancelAnimationFrame(id)
  }, [location.pathname, location.hash])

  return (
    <>
      <Home />
      <About />
      <Skills />
      <Certifications />
      <Education />
      <Contact />
    </>
  )
}
