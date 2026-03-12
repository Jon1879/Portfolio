export default function Projects({ repos }) {
  // Filter out profile readme repo and take up to 8 projects
  const projects = (repos || [])
    .filter((r) => r.name !== 'Jon1879' && !r.fork)
    .slice(0, 8)

  if (projects.length === 0) {
    return (
      <section id="projects" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle mb-10">
            A selection of my work. More on GitHub.
          </p>
          <div className="card text-center py-12">
            <p className="text-slate-400 mb-4">Loading projects from GitHub...</p>
            <a href="https://github.com/Jon1879?tab=repositories" target="_blank" rel="noopener noreferrer" className="btn-primary">
              View all on GitHub
            </a>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle mb-10">
          A selection of my work. More on{' '}
          <a href="https://github.com/Jon1879?tab=repositories" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="card block group"
            >
              <h3 className="text-lg font-semibold text-white group-hover:text-accent transition-colors mb-2">
                {repo.name.replace(/-/g, ' ')}
              </h3>
              <p className="text-slate-400 text-sm mb-4 line-clamp-2 min-h-[2.5rem]">
                {repo.description || 'No description'}
              </p>
              <div className="flex flex-wrap gap-2">
                {repo.language && (
                  <span className="px-2 py-1 rounded bg-accent/20 text-accent text-xs font-mono">
                    {repo.language}
                  </span>
                )}
                <span className="text-slate-500 text-xs">
                  ★ {repo.stargazers_count} · Updated {new Date(repo.updated_at).toLocaleDateString()}
                </span>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="https://github.com/Jon1879?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            View all repositories on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
