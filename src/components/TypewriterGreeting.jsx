import { useEffect, useMemo, useState } from 'react'

const DEFAULT_TYPE_MS = 58
const DEFAULT_DELETE_MS = 36
const DEFAULT_PAUSE_FULL_MS = 2400
const DEFAULT_GAP_MS = 450
const DEFAULT_PAUSE_EMOJI_MS = 2200

/** Grapheme-ish segments: keeps emoji as one unit when deleting. */
function toChars(s) {
  return [...s]
}

function isReplaceTailPhrase(p) {
  return (
    p &&
    typeof p === 'object' &&
    p.type === 'replaceTail' &&
    typeof p.prefix === 'string' &&
    typeof p.tail === 'string' &&
    typeof p.replacement === 'string'
  )
}

/**
 * Cycles through `phrases`: each item is a string, or `{ type: 'replaceTail', prefix, tail, replacement }`
 * (types `prefix`+`tail`, pauses, deletes `tail`, shows `prefix`+`replacement` e.g. cricket → 🏏).
 */
export default function TypewriterGreeting({
  phrases: phrasesProp,
  text,
  className = '',
  typeMs = DEFAULT_TYPE_MS,
  deleteMs = DEFAULT_DELETE_MS,
  pauseFullMs = DEFAULT_PAUSE_FULL_MS,
  pauseEmojiMs = DEFAULT_PAUSE_EMOJI_MS,
  gapMs = DEFAULT_GAP_MS,
}) {
  const phrases = useMemo(() => {
    if (phrasesProp?.length) return phrasesProp
    if (text) return [text]
    return ['Hi']
  }, [phrasesProp, text])

  const reducedMotionPhrases = useMemo(
    () =>
      phrases.map((p) => {
        if (typeof p === 'string') return p
        if (isReplaceTailPhrase(p)) return `${p.prefix}${p.replacement}`
        return String(p)
      }),
    [phrases],
  )

  const [display, setDisplay] = useState('')
  const [reduceMotion, setReduceMotion] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setReduceMotion(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (!phrases.length) return

    if (reduceMotion) {
      let i = 0
      const boot = window.setTimeout(() => setDisplay(reducedMotionPhrases[0]), 0)
      const id = window.setInterval(() => {
        i = (i + 1) % reducedMotionPhrases.length
        setDisplay(reducedMotionPhrases[i])
      }, 4000)
      return () => {
        window.clearTimeout(boot)
        window.clearInterval(id)
      }
    }

    let alive = true
    let timeoutId
    let phraseIndex = 0
    let current = ''

    const set = (s) => {
      current = s
      if (alive) setDisplay(s)
    }

    const clearT = () => {
      if (timeoutId) window.clearTimeout(timeoutId)
    }

    const schedule = (fn, ms) => {
      clearT()
      timeoutId = window.setTimeout(() => {
        if (alive) fn()
      }, ms)
    }

    const deleteAllAndAdvance = () => {
      const chars = toChars(current)
      if (chars.length === 0) {
        phraseIndex = (phraseIndex + 1) % phrases.length
        schedule(runCurrentPhrase, gapMs)
        return
      }
      chars.pop()
      set(chars.join(''))
      schedule(deleteAllAndAdvance, deleteMs)
    }

    const runSimplePhrase = (full) => {
      let charIndex = 0
      let deleting = false

      const loop = () => {
        if (!alive) return
        if (!deleting) {
          if (charIndex < full.length) {
            charIndex += 1
            set(full.slice(0, charIndex))
            schedule(loop, typeMs)
          } else {
            schedule(() => {
              deleting = true
              loop()
            }, pauseFullMs)
          }
        } else if (charIndex > 0) {
          charIndex -= 1
          set(full.slice(0, charIndex))
          schedule(loop, deleteMs)
        } else {
          deleting = false
          phraseIndex = (phraseIndex + 1) % phrases.length
          schedule(runCurrentPhrase, gapMs)
        }
      }

      charIndex = 0
      deleting = false
      set('')
      loop()
    }

    const runReplaceTailPhrase = (phrase) => {
      const full = phrase.prefix + phrase.tail
      let charIndex = 0
      let phase = 'typing'

      const afterTypingPause = () => {
        phase = 'deletingTail'
        let k = phrase.tail.length
        const delTail = () => {
          if (!alive) return
          if (k > 0) {
            k -= 1
            set(phrase.prefix + phrase.tail.slice(0, k))
            schedule(delTail, deleteMs)
          } else {
            set(phrase.prefix + phrase.replacement)
            schedule(afterEmojiPause, pauseEmojiMs)
          }
        }
        delTail()
      }

      const afterEmojiPause = () => {
        schedule(deleteAllAndAdvance, pauseFullMs)
      }

      const loop = () => {
        if (!alive) return
        if (phase === 'typing') {
          if (charIndex < full.length) {
            charIndex += 1
            set(full.slice(0, charIndex))
            schedule(loop, typeMs)
          } else {
            schedule(afterTypingPause, pauseFullMs)
          }
        }
      }

      set('')
      loop()
    }

    const runCurrentPhrase = () => {
      if (!alive) return
      const p = phrases[phraseIndex]
      if (typeof p === 'string') {
        runSimplePhrase(p)
      } else if (isReplaceTailPhrase(p)) {
        runReplaceTailPhrase(p)
      } else {
        runSimplePhrase(String(p))
      }
    }

    phraseIndex = 0
    set('')
    runCurrentPhrase()

    return () => {
      alive = false
      clearT()
    }
  }, [
    phrases,
    reducedMotionPhrases,
    reduceMotion,
    typeMs,
    deleteMs,
    pauseFullMs,
    pauseEmojiMs,
    gapMs,
  ])

  const showCursor = display.length > 0 || reduceMotion

  return (
    <p
      className={`mx-auto min-h-[3.25rem] w-full max-w-xl px-2 text-center text-xl font-semibold leading-snug tracking-tight text-white sm:min-h-[3.5rem] sm:text-2xl md:text-3xl ${className}`}
      aria-live="polite"
    >
      <span className="break-words">{display}</span>
      {showCursor ? (
        <span
          className={`ml-0.5 font-light text-violet-400 ${reduceMotion ? '' : 'animate-blink-cursor'}`}
          aria-hidden="true"
        >
          |
        </span>
      ) : null}
    </p>
  )
}
