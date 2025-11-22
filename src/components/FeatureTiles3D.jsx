import { motion } from 'framer-motion'
import { Cpu, CreditCard, BatteryCharging, Factory } from 'lucide-react'

const ICONS = { Cpu, CreditCard, BatteryCharging, Factory }

function Tile({ title, subtitle, icon = 'Cpu', delay = 0 }) {
  const Icon = ICONS[icon] || Cpu
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay }}
      className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 hover:shadow-[0_0_50px_rgba(59,130,246,0.25)]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="flex items-center gap-4">
        <div className="shrink-0 rounded-xl bg-violet-600/20 p-3 ring-1 ring-white/10 text-violet-200 group-hover:text-white transition-colors">
          <Icon size={28} />
        </div>
        <div>
          <h3 className="text-white font-semibold text-lg">{title}</h3>
          {subtitle && <p className="text-violet-200/80 text-sm mt-1">{subtitle}</p>}
        </div>
      </div>
      <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-violet-500/10 blur-2xl group-hover:bg-violet-500/20 transition-colors" />
    </motion.div>
  )
}

function FeatureTiles3D({ title, items = [] }) {
  return (
    <section id="verticals" className="relative py-20">
      <div className="container mx-auto px-6">
        {title && (
          <div className="mb-10">
            <h2 className="text-2xl md:text-4xl font-bold text-white">{title}</h2>
            <p className="text-violet-200/80 mt-2">Explore our core lines of business</p>
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, idx) => (
            <Tile key={idx} title={it.title} subtitle={it.subtitle} icon={it.icon} delay={idx * 0.08} />)
          )}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.12),transparent_60%)]" />
    </section>
  )
}

export default FeatureTiles3D
