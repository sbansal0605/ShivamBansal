import { useEffect, useRef, useState } from 'react'

export default function CursorGlow() {
  const ref = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const coarse = window.matchMedia('(pointer: coarse)')
    const update = () => setEnabled(!motion.matches && !coarse.matches)
    update()
    motion.addEventListener('change', update)
    coarse.addEventListener('change', update)
    return () => {
      motion.removeEventListener('change', update)
      coarse.removeEventListener('change', update)
    }
  }, [])

  useEffect(() => {
    if (!enabled) return

    const onMove = (e) => {
      target.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('pointermove', onMove, { passive: true })

    let frame
    const tick = () => {
      const el = ref.current
      if (el) {
        const lerp = 0.18
        pos.current.x += (target.current.x - pos.current.x) * lerp
        pos.current.y += (target.current.y - pos.current.y) * lerp
        el.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`
      }
      frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', onMove)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed left-0 top-0 z-[2] h-[200px] w-[200px] rounded-full opacity-0 md:opacity-100"
      style={{
        background: 'radial-gradient(circle, rgba(167,139,250,0.2) 0%, rgba(124,58,237,0.07) 45%, transparent 70%)',
        filter: 'blur(2px)',
      }}
      aria-hidden="true"
    />
  )
}
