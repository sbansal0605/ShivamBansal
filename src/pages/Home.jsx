import { site } from '../data/site.js'
import TypewriterGreeting from '../components/TypewriterGreeting.jsx'

export default function Home() {
  return (
    <section id="home" className="scroll-mt-24 sm:scroll-mt-28">
      <div className="relative flex justify-center overflow-hidden px-4 pb-10 pt-32 sm:pb-14 sm:pt-36">
        {/* Soft radial backdrop — avoids a hard “circle frame” around content */}
        <div
          className="pointer-events-none absolute left-1/2 top-[48%] h-[min(90vw,28rem)] w-[min(90vw,28rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(124,58,237,0.14)_0%,_rgba(76,29,149,0.06)_45%,_transparent_70%)] blur-2xl sm:top-[46%] sm:h-[32rem] sm:w-[32rem]"
          aria-hidden
        />
        <div className="relative flex w-full max-w-lg flex-col items-center text-center">
          <div className="relative mb-7 sm:mb-9">
            <div
              className="pointer-events-none absolute -inset-3 rounded-full bg-gradient-to-b from-violet-400/20 via-violet-600/10 to-transparent opacity-80 blur-xl sm:-inset-4"
              aria-hidden
            />
            <div className="relative rounded-full p-[2px] shadow-[0_12px_40px_-12px_rgba(124,58,237,0.45)] [background:linear-gradient(145deg,rgba(167,139,250,0.5),rgba(91,33,182,0.15)_40%,rgba(255,255,255,0.12))]">
              <img
                src={site.profileImage}
                alt={site.name}
                className="h-[5.5rem] w-[5.5rem] rounded-full border border-white/10 object-cover object-top shadow-inner sm:h-32 sm:w-32"
              />
            </div>
          </div>

          <p className="mb-6 text-[0.7rem] font-medium uppercase tracking-[0.4em] text-zinc-500 sm:mb-8 sm:text-xs sm:tracking-[0.35em]">
            {site.mastheadRole}
          </p>

          <TypewriterGreeting phrases={site.mastheadTypewriterPhrases} />
        </div>
      </div>
    </section>
  )
}
