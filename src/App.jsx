import { useEffect, useState } from 'react'
import HeroSpline from './components/HeroSpline'
import FeatureTiles3D from './components/FeatureTiles3D'
import Navbar from './components/Navbar'

function App() {
  const [page, setPage] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/pages/home`)
        if (!res.ok) throw new Error('Failed to load page')
        const data = await res.json()
        setPage(data)
      } catch (e) {
        setPage(null)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  const renderSection = (s) => {
    if (!s || s.is_visible === false) return null
    if (s.type === 'hero_spline') {
      return (
        <HeroSpline
          key={`hero-${s.position}`}
          headline={s.data.headline}
          subheadline={s.data.subheadline}
          cta={s.data.cta}
          splineUrl={s.data.splineUrl}
        />
      )
    }
    if (s.type === 'feature_grid') {
      return (
        <FeatureTiles3D key={`fg-${s.position}`} title={s.data.title} items={s.data.items || []} />
      )
    }
    return null
  }

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      {loading && (
        <div className="pt-24 text-center text-violet-200">Loading experience…</div>
      )}
      {!loading && page && (
        <main className="pt-16">
          {Array.isArray(page.sections) ? page.sections.sort((a,b)=>a.position-b.position).map(renderSection) : null}
        </main>
      )}
      {!loading && !page && (
        <main className="pt-24 px-6 text-center text-violet-200">
          <HeroSpline
            headline="Engineered Excellence. Delivered Globally."
            subheadline="Cinematic 3D experience. Dynamic CMS-powered sections."
            cta={{ label: 'Explore Verticals', href: '#verticals' }}
            splineUrl={'https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode'}
          />
          <FeatureTiles3D
            title="Business Verticals"
            items={[
              { title: 'Payment Devices', subtitle: 'POS, Tap & Pay, QR', icon: 'CreditCard' },
              { title: 'Smart Home & IoT', subtitle: 'AI cameras, locks, sensors', icon: 'Cpu' },
              { title: 'Mobile Accessories', subtitle: 'GaN chargers, power banks', icon: 'BatteryCharging' },
              { title: 'R&D & Manufacturing', subtitle: 'Vertically integrated', icon: 'Factory' },
            ]}
          />
        </main>
      )}
      <footer className="border-t border-white/10 py-10 text-center text-violet-200/70">
        © {new Date().getFullYear()} Engineered Excellence. All rights reserved.
      </footer>
    </div>
  )
}

export default App
