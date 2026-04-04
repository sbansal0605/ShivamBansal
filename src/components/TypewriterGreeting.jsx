import { useEffect, useMemo, useState } from 'react'

const DEFAULT_TYPE_MS = 58
const DEFAULT_DELETE_MS = 36
const DEFAULT_PAUSE_FULL_MS = 2400
const DEFAULT_GAP_MS = 450

/**
 * Cycles through `phrases`: types each line, pauses, deletes, then continues.
 * `text` (single string) still works for one phrase only.
 */
export default function TypewriterGreeting({
  phrases: phrasesProp,
  text,
  className = '',
  typeMs = DEFAULT_TYPE_MS,
  deleteMs = DEFAULT_DELETE_MS,
  pauseFullMs = DEFAULT_PAUSE_FULL_MS,
  gapMs = DEFAULT_GAP_MS,
}) {
  const phrases = useMemo(() => {
    if (phrasesProp?.length) return phrasesProp
    if (text) return [text]
    return ['Hi']
  }, [phrasesProp, text])

  const [display, setDisplay] = useState('')
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduceMotion(mq.matches)
    const onChange = () => setReduceMotion(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (!phrases.length) return

    if (reduceMotion) {
      let i = 0
      setDisplay(phrases[0])
      const id = window.setInterval(() => {
        i = (i + 1) % phrases.length
        setDisplay(phrases[i])
      }, 4000)
      return () => window.clearInterval(id)
    }

    let alive = true
    let timeoutId
    let phraseIndex = 0
    let charIndex = 0
    let deleting = false

    const clearT = () => {
      if (timeoutId) window.clearTimeout(timeoutId)
    }

    const schedule = (fn, ms) => {
      clearT()
      timeoutId = window.setTimeout(() => {
        if (alive) fn()
      }, ms)
    }

    const loop = () => {
      if (!alive) return
      const full = phrases[phraseIndex]

      if (!deleting) {
        if (charIndex < full.length) {
          setDisplay(full.slice(0, charIndex + 1))
          charIndex += 1
          schedule(loop, typeMs)
        } else {
          schedule(() => {
            deleting = true
            loop()
          }, pauseFullMs)
        }
      } else if (charIndex > 0) {
        charIndex -= 1
        setDisplay(full.slice(0, charIndex))
        schedule(loop, deleteMs)
      } else {
        deleting = false
        phraseIndex = (phraseIndex + 1) % phrases.length
        schedule(loop, gapMs)
      }
    }

    charIndex = 0
    deleting = false
    phraseIndex = 0
    setDisplay('')
    loop()

    return () => {
      alive = false
      clearT()
    }
  }, [phrases, reduceMotion, typeMs, deleteMs, pauseFullMs, gapMs])

  const showCursor = display.length > 0 || reduceMotion

  return (
    <p
      className={`mx-auto min-h-[4rem] w-full max-w-[15rem] text-center text-xl font-bold leading-snug text-white sm:min-h-[4.5rem] sm:max-w-[17rem] sm:text-2xl md:max-w-[19rem] md:text-3xl ${className}`}
      aria-live="polite"
    >
      <span className="break-words">{display}</span>
      {showCursor ? (
        <span
          className={`font-light text-violet-400 ${reduceMotion ? '' : 'animate-blink-cursor'}`}
          aria-hidden="true"
        >
          |
        </span>
      ) : null}
    </p>
  )
}
