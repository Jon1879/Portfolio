export default function Hero({ profile }) {
  const { name, bio, avatar_url } = profile

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.1s' }}>
          <img
            src={avatar_url}
            alt={name}
            className="w-28 h-28 sm:w-36 sm:h-36 rounded-full border-4 border-accent/50 shadow-lg shadow-accent/20 mx-auto mb-6 object-cover"
          />
        </div>
        <h1 className="animate-slide-up opacity-0 text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4" style={{ animationDelay: '0.2s' }}>
          Hi, I'm <span className="text-accent">{name}</span>
        </h1>
        <p className="animate-slide-up opacity-0 text-xl sm:text-2xl text-slate-400 mb-6 font-medium" style={{ animationDelay: '0.3s' }}>
          {bio}
        </p>
        <p className="animate-slide-up opacity-0 text-slate-500 text-sm sm:text-base mb-8" style={{ animationDelay: '0.4s' }}>
          Based in Cebu City, Philippines
        </p>
        <div className="animate-slide-up opacity-0 flex flex-wrap justify-center gap-4" style={{ animationDelay: '0.5s' }}>
          <a href="#projects" className="btn-primary">
            View my work
          </a>
          <a
            href="https://github.com/Jon1879"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
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
