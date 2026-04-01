import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { hausgemachtesRecipes } from '../data/recipes'

gsap.registerPlugin(ScrollTrigger)

export default function Hausgemachtes() {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!gridRef.current) return
    const cards = gridRef.current.querySelectorAll('.r-card')
    gsap.fromTo(cards, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.06, ease: 'power3.out' })
  }, [])

  return (
    <main className="min-h-screen bg-bg pt-28 pb-20">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
            <div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-heading font-medium tracking-tight mb-3">Hausgemachtes</h1>
              <p className="text-muted text-base md:text-lg max-w-xl">
                Basics aus der Küche selber machen — von Toastbrot bis Mayonnaise. Weil nicht immer alles gekauft werden muss.
              </p>
            </div>
          </div>
        </div>

        {/* Grid — same style as Rezepte */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {hausgemachtesRecipes.map(r => (
            <Link
              key={r.id}
              to={`/rezepte/${r.slug}`}
              className="r-card group bg-bg-warm rounded-2xl overflow-hidden border border-line/40 hover:border-sage/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative bg-bg-warm p-4 pb-0">
                <div className="rounded-xl overflow-hidden">
                  <img src={r.image} alt={r.name} loading="lazy" className="w-full h-44 md:h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <span className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm text-sage text-[0.65rem] tracking-wider uppercase font-semibold px-2.5 py-1 rounded-full shadow-sm">
                  {r.category}
                </span>
              </div>
              <div className="p-4 pt-3">
                <h3 className="font-display text-[1.05rem] md:text-lg text-heading font-medium mb-1 group-hover:text-sage transition-colors">{r.name}</h3>
                <p className="text-xs text-muted leading-relaxed line-clamp-2 mb-3">{r.desc}</p>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeWidth="1.5"/><path d="M12 6v6l4 2" strokeWidth="1.5" strokeLinecap="round"/></svg>
                    {r.time}
                  </span>
                  <span className="bg-sage/10 text-sage font-medium px-3 py-1 rounded-full text-[0.7rem]">Ansehen</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
