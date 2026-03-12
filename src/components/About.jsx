const skills = [
  'React',
  'JavaScript',
  'HTML & CSS',
  'Tailwind CSS',
  'Node.js',
  'Git',
  'Full-stack Development',
]

import useInView from '../hooks/useInView'

export default function About() {
  const section = useInView()

  return (
    <section id="about" className="py-20 px-4">
      <div ref={section.ref} className={`max-w-4xl mx-auto fx-reveal ${section.inView ? 'is-in' : ''}`}>
        <h2 className="section-title">About me</h2>
        <p className="section-subtitle mb-8">
          I'm a Full-stack Web Developer from Cebu City with a passion for building clean, 
          responsive applications. I enjoy turning ideas into reality with code and 
          continuously learning new technologies.
        </p>
        <div className="card card-hover">
          <h3 className="text-lg font-semibold text-white mb-4">Skills & technologies</h3>
          <ul className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <li
                key={skill}
                className="px-4 py-2 rounded-lg bg-surface-lighter/80 border border-slate-600/50 text-slate-300 font-medium text-sm"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
