import useInView from '../hooks/useInView'

export default function Hero({ profile }) {
  const { name, bio, location } = profile
  const hero = useInView()

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 px-4 overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-grid opacity-60" />
      <div aria-hidden className="absolute -top-24 -left-20 w-72 h-72 rounded-full bg-accent/20 blur-3xl fx-float" />
      <div aria-hidden className="absolute -bottom-24 -right-20 w-80 h-80 rounded-full bg-purple-500/20 blur-3xl fx-float-delayed" />

      <div ref={hero.ref} className={`relative max-w-3xl mx-auto text-center fx-reveal ${hero.inView ? 'is-in' : ''}`}>
        <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-700/60 bg-surface-light/40 text-slate-300 text-sm mb-6">
          <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_18px_rgba(14,165,233,0.8)]" />
          Available for opportunities
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
          Hi, I’m <span className="text-gradient">{name}</span>
        </h1>
        <p className="text-xl sm:text-2xl text-slate-300/90 mb-6 font-medium">
          {bio}
        </p>
        <p className="text-slate-500 text-sm sm:text-base mb-8">
          {location ? `Based in ${location}` : 'Based in Cebu City, Philippines'}
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a href="#projects" className="btn-primary">
            View project samples
          </a>
          <a href="#contact" className="btn-outline">
            Contact
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-slate-500 hover:text-accent transition-colors" aria-label="Scroll to about">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  )
}
