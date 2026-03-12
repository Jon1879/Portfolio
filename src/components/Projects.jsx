import useInView from '../hooks/useInView'

const projectSamples = [
  {
    title: 'E-commerce Dashboard (Sample)',
    description: 'Responsive admin dashboard UI with charts, tables, and role-based layouts (placeholder).',
    tags: ['React', 'Tailwind', 'UI/UX'],
    href: null,
  },
  {
    title: 'Booking App (Sample)',
    description: 'Modern landing + multi-step booking flow with validation and clean transitions (placeholder).',
    tags: ['React', 'Forms', 'Animations'],
    href: null,
  },
  {
    title: 'Portfolio Case Study (Sample)',
    description: 'A case study layout showcasing the problem, approach, and results (placeholder).',
    tags: ['Design', 'Storytelling', 'SEO'],
    href: null,
  },
]

export default function Projects() {
  const section = useInView()

  return (
    <section id="projects" className="py-20 px-4">
      <div ref={section.ref} className={`max-w-5xl mx-auto fx-reveal ${section.inView ? 'is-in' : ''}`}>
        <h2 className="section-title">Project samples</h2>
        <p className="section-subtitle mb-10">
          This section is intentionally curated (not auto-filled from repositories). Swap these placeholders with your real case studies as you build them.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectSamples.map((p) => (
            <div
              key={p.title}
              className="card card-hover group"
              onMouseMove={(e) => {
                const r = e.currentTarget.getBoundingClientRect()
                e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
                e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
              }}
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="text-lg font-semibold text-white group-hover:text-accent transition-colors">
                  {p.title}
                </h3>
                <span className="px-2 py-1 rounded-md bg-surface-lighter/70 border border-slate-600/40 text-slate-300 text-xs font-mono">
                  Coming soon
                </span>
              </div>
              <p className="text-slate-400 text-sm mb-5">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="px-2 py-1 rounded bg-accent/15 text-accent text-xs font-mono">
                    {t}
                  </span>
                ))}
              </div>
              {p.href ? (
                <a className="btn-outline text-sm mt-6 inline-flex" href={p.href} target="_blank" rel="noopener noreferrer">
                  View case study
                </a>
              ) : null}
            </div>
          ))}
          <div className="card card-hover border-dashed text-center flex flex-col justify-center">
            <p className="text-slate-300 font-semibold mb-2">Next project</p>
            <p className="text-slate-400 text-sm mb-6">Add a new case study when you’re ready.</p>
            <span className="inline-flex items-center justify-center mx-auto w-10 h-10 rounded-full bg-accent/15 text-accent border border-accent/30">
              +
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
