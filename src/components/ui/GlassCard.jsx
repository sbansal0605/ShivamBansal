export default function GlassCard({ children, className = '' }) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-zinc-900/50 p-6 shadow-lg shadow-black/30 backdrop-blur-md sm:p-8 ${className}`}
    >
      {children}
    </div>
  )
}
