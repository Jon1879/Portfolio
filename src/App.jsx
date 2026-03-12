import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

const GITHUB_USER = 'Jon1879'
const defaultProfile = {
  name: 'Jon',
  bio: 'Full-stack Web Developer',
  location: 'Cebu City',
}

export default function App() {
  const [profile, setProfile] = useState(defaultProfile)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchGitHub = async () => {
      try {
        const userRes = await fetch(`https://api.github.com/users/${GITHUB_USER}`)
        if (userRes.ok) {
          const user = await userRes.json()
          setProfile({
            name: user.name || 'Jon',
            bio: user.bio || 'Full-stack Web Developer',
            location: user.location || 'Cebu City',
          })
        }
      } catch (err) {
        console.error('Failed to fetch GitHub data:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchGitHub()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-accent/30 border-t-accent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-slate-400">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero profile={profile} />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
