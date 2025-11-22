import Spline from '@splinetool/react-spline'

function HeroSpline({ headline, subheadline, cta, splineUrl }) {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene={splineUrl} />
      </div>

      <div className="pointer-events-none relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_0_25px_rgba(168,85,247,0.35)]">
              {headline}
            </h1>
            {subheadline && (
              <p className="mt-4 text-lg md:text-2xl text-violet-200/90">
                {subheadline}
              </p>
            )}
            {cta && (
              <div className="pointer-events-auto mt-8">
                <a href={cta.href} className="inline-flex items-center gap-2 rounded-full bg-violet-600/80 hover:bg-violet-500 text-white px-6 py-3 transition-colors shadow-[0_0_30px_rgba(168,85,247,0.35)]">
                  <span>{cta.label}</span>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* cinematic gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.15),transparent_60%)]" />
    </section>
  )
}

export default HeroSpline
