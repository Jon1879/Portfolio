export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="py-8 px-4 border-t border-slate-800/50">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-sm">
          © {year} Jon. Built with React & Tailwind CSS.
        </p>
        <a
          href="https://github.com/Jon1879"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-500 hover:text-accent transition-colors text-sm font-medium"
        >
          GitHub
        </a>
      </div>
    </footer>
  )
}
