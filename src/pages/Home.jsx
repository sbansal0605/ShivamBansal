import { site } from '../data/site.js'
import TypewriterGreeting from '../components/TypewriterGreeting.jsx'

export default function Home() {
  return (
    <section id="home" className="scroll-mt-24 sm:scroll-mt-28">
      <div className="flex justify-center px-4 pb-16 pt-28 sm:pb-20 sm:pt-32">
        <div className="flex w-full max-w-md flex-col items-center">
          <div className="flex aspect-square w-full max-w-[min(100%,380px)] flex-col items-center justify-center gap-6 rounded-full border border-white/15 bg-zinc-950/40 px-8 py-10 text-center shadow-[0_0_60px_rgba(124,58,237,0.12)] backdrop-blur-sm sm:gap-8 sm:px-10 sm:py-12">
            <img
              src={site.profileImage}
              alt={site.name}
              className="h-20 w-20 rounded-full border border-white/10 object-cover object-top sm:h-24 sm:w-24"
            />
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-zinc-400 sm:text-sm">
              {site.mastheadRole}
            </p>
            <TypewriterGreeting phrases={site.mastheadTypewriterPhrases} />
          </div>
        </div>
      </div>
    </section>
  )
}
