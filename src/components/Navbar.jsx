import { useEffect, useState } from 'react'
import { Menu } from 'lucide-react'

function Navbar() {
  const [menu, setMenu] = useState([])
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
    fetch(`${baseUrl}/api/menus/main`).then(r => r.json()).then(data => setMenu(data.items || [])).catch(() => setMenu([]))

    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-colors ${scrolled ? 'bg-black/70 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="text-white font-bold tracking-wide">Engineered Excellence</a>
        <nav className="hidden md:flex items-center gap-6">
          {menu.map((m, i) => (
            <a key={i} href={m.href} className="text-violet-100 hover:text-white transition-colors">{m.label}</a>
          ))}
        </nav>
        <button className="md:hidden text-white" aria-label="Open menu"><Menu /></button>
      </div>
    </header>
  )
}

export default Navbar
