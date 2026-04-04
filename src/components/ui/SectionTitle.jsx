export default function SectionTitle({ children, className = '' }) {
  return (
    <h2
      className={`mb-10 text-center text-3xl font-bold tracking-tight text-white text-glow-accent sm:text-4xl ${className}`}
    >
      {children}
    </h2>
  )
}
