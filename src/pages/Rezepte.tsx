import { useState, useEffect, useRef } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { categories, filterByCategory, searchRecipes } from '../data/recipes'
import type { Category } from '../data/recipes'

gsap.registerPlugin(ScrollTrigger)

export default function Rezepte() {
  const [params, setParams] = useSearchParams()
  const urlCat = params.get('category') as Category | null
  const [active, setActive] = useState<Category>(urlCat && categories.includes(urlCat) ? urlCat : 'Alle')
  const [search, setSearch] = useState('')
  const gridRef = useRef<HTMLDivElement>(null)

  const filtered = search.trim().length >= 2
    ? searchRecipes(search)
    : filterByCategory(active)

  useEffect(() => {
    if (urlCat && categories.includes(urlCat)) setActive(urlCat)
  }, [urlCat])

  useEffect(() => {
    if (!gridRef.current) return
    const cards = gridRef.current.querySelectorAll('.r-card')
    gsap.fromTo(cards, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.06, ease: 'power3.out' })
  }, [filtered.length, active, search])

  const pick = (cat: Category) => {
    setActive(cat)
    setParams(cat === 'Alle' ? {} : { category: cat })
  }

  return (
    <main className="min-h-screen bg-bg pt-28 pb-20">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Header + Search */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
            <div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-heading font-medium tracking-tight mb-3">Rezepte</h1>
              <p className="text-muted text-base md:text-lg">Finde dein Lieblingsrezept</p>
            </div>
          </div>
          {/* Search bar */}
          <div className="relative max-w-md">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-muted pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" strokeWidth="1.5"/><path d="M21 21l-4.35-4.35" strokeWidth="1.5" strokeLinecap="round"/></svg>
            <input
              type="text"
              value={search}
              onChange={e => { setSearch(e.target.value); if (e.target.value.length >= 2) setActive('Alle') }}
              placeholder="Rezept oder Zutat suchen..."
              className="w-full pl-11 pr-4 py-3 rounded-full bg-white border border-line text-sm text-heading placeholder:text-muted/50 focus:outline-none focus:border-sage focus:ring-2 focus:ring-sage/15 transition-all"
            />
            {search && (
              <button onClick={() => setSearch('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-heading cursor-pointer">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
            )}
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2.5 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => pick(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                active === cat
                  ? 'bg-sage text-white shadow-md shadow-sage/20'
                  : 'bg-white text-muted hover:text-heading border border-line hover:border-sage/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map(r => (
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

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="font-display text-xl text-muted mb-4">Kein Rezept in dieser Kategorie</p>
            <button onClick={() => pick('Alle')} className="text-sm text-sage hover:underline cursor-pointer">Alles anzeigen</button>
          </div>
        )}
      </div>
    </main>
  )
}
