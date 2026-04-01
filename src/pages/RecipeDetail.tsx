import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getRecipeBySlug, recipes, scaleIngredient } from '../data/recipes'

export default function RecipeDetail() {
  const { slug } = useParams<{ slug: string }>()
  const r = slug ? getRecipeBySlug(slug) : undefined
  const [portions, setPortions] = useState(r?.servingsNum ?? 4)
  const [activeGroup, setActiveGroup] = useState(0)

  // Category-based suggestions (#7)
  const suggestions = r
    ? recipes
        .filter((rec) => rec.id !== r.id && rec.category === r.category)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
    : []
  // Fallback if not enough in same category
  if (suggestions.length < 3 && r) {
    const needed = 3 - suggestions.length
    const extra = recipes
      .filter((rec) => rec.id !== r.id && !suggestions.some(s => s.id === rec.id))
      .sort(() => Math.random() - 0.5)
      .slice(0, needed)
    suggestions.push(...extra)
  }

  if (!r) {
    return (
      <main className="min-h-screen bg-bg pt-32 flex flex-col items-center justify-center px-6">
        <h1 className="font-display text-4xl text-heading mb-4">Rezept nicht gefunden</h1>
        <Link to="/rezepte" className="bg-sage text-white text-sm px-6 py-3 rounded-full hover:bg-sage-dark transition-colors">Zurück zu allen Rezepten</Link>
      </main>
    )
  }

  const baseServings = r.servingsNum
  const hasGroups = r.ingredientGroups && r.ingredientGroups.length > 0

  const scaleIng = (ing: string) => scaleIngredient(ing, baseServings, portions)

  return (
    <main className="min-h-screen bg-bg pt-24 pb-20">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Back */}
        <Link to="/rezepte" className="inline-flex items-center gap-2 text-sm text-muted hover:text-sage mb-6 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
          Zurück zur Übersicht
        </Link>

        {/* Hero image */}
        <div className="rounded-2xl md:rounded-3xl overflow-hidden mb-10">
          <img src={r.image} alt={r.name} className="w-full h-[300px] md:h-[450px] lg:h-[500px] object-cover" />
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <span className="inline-block bg-sage/10 text-sage text-xs tracking-wider uppercase font-medium px-4 py-1.5 rounded-full mb-4">{r.category}</span>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-heading font-medium tracking-tight">{r.name}</h1>
            </div>
            {/* Apple-style share button (#14) */}
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({ title: r.name, text: r.desc, url: window.location.href })
                } else {
                  navigator.clipboard.writeText(window.location.href)
                  alert('Link kopiert!')
                }
              }}
              className="shrink-0 mt-2 w-11 h-11 rounded-full bg-white border border-line hover:border-sage/40 flex items-center justify-center transition-colors cursor-pointer group"
              aria-label="Rezept teilen"
            >
              <svg className="w-5 h-5 text-muted group-hover:text-sage transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3v12" />
                <path d="M8 7l4-4 4 4" />
                <rect x="4" y="11" width="16" height="10" rx="2" fill="none" />
              </svg>
            </button>
          </div>
          <p className="text-body text-base md:text-lg leading-relaxed mb-8">{r.desc}</p>

          {/* Meta */}
          <div className="flex flex-wrap gap-6 py-6 border-y border-line mb-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeWidth="1.5"/><path d="M12 6v6l4 2" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </div>
              <div>
                <p className="text-[0.7rem] text-muted uppercase tracking-wide">Dauer</p>
                <p className="text-sm text-heading font-medium">{r.time}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9.663 17h4.674M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div>
                <p className="text-[0.7rem] text-muted uppercase tracking-wide">Schwierigkeit</p>
                <p className="text-sm text-heading font-medium">{r.difficulty}</p>
              </div>
            </div>
            {/* Portionsrechner (#12) */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div>
                <p className="text-[0.7rem] text-muted uppercase tracking-wide">Portionen</p>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setPortions(p => Math.max(1, p - 1))}
                    className="w-7 h-7 rounded-full bg-sage/10 hover:bg-sage/20 flex items-center justify-center text-sage font-bold text-sm cursor-pointer transition-colors"
                  >-</button>
                  <span className="text-sm text-heading font-medium w-4 text-center">{portions}</span>
                  <button
                    onClick={() => setPortions(p => Math.min(12, p + 1))}
                    className="w-7 h-7 rounded-full bg-sage/10 hover:bg-sage/20 flex items-center justify-center text-sage font-bold text-sm cursor-pointer transition-colors"
                  >+</button>
                </div>
              </div>
            </div>
          </div>

        </div>

          {/* Grid: Video | Zutaten | Zubereitung */}
          <div className={`grid grid-cols-1 gap-10 items-start ${r.instagramUrl ? 'md:grid-cols-7' : 'md:grid-cols-5 max-w-3xl mx-auto'}`}>
            {/* Instagram Video — left column */}
            {r.instagramUrl && (
              <div className="md:col-span-2">
                <h2 className="font-display text-xl text-heading font-medium mb-5">Video zum Rezept</h2>
                <div className="rounded-2xl border border-line overflow-hidden bg-white">
                  <iframe
                    src={`${r.instagramUrl}embed/captioned/`}
                    className="w-full"
                    height="580"
                    allowTransparency
                    allow="encrypted-media"
                    loading="lazy"
                    style={{ border: 'none', margin: '-1px' }}
                  />
                </div>
              </div>
            )}

            {/* Zutaten (#15 heading outside box, #13 ingredient groups) */}
            <div className={`md:col-span-2`}>
              <h2 className="font-display text-xl text-heading font-medium mb-5">Zutaten</h2>

              {/* Ingredient group tabs */}
              {hasGroups && (
                <div className="flex gap-2 mb-3 overflow-x-auto pb-1">
                  {r.ingredientGroups!.map((g, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveGroup(i)}
                      className={`px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap cursor-pointer transition-all ${
                        activeGroup === i
                          ? 'bg-sage text-white'
                          : 'bg-white text-muted border border-line hover:border-sage/30'
                      }`}
                    >{g.name}</button>
                  ))}
                </div>
              )}

              <div className="bg-white rounded-2xl p-6 border border-line sticky top-24">
                <ul className="space-y-2.5">
                  {hasGroups
                    ? r.ingredientGroups![activeGroup].items.map((ing, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-body">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sage shrink-0" />
                          {scaleIng(ing)}
                        </li>
                      ))
                    : r.ingredients.map((ing, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-body">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sage shrink-0" />
                          {scaleIng(ing)}
                        </li>
                      ))
                  }
                </ul>

                {/* Swipe dots for groups on mobile */}
                {hasGroups && (
                  <div className="flex justify-center gap-1.5 mt-4 md:hidden">
                    {r.ingredientGroups!.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveGroup(i)}
                        className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                          activeGroup === i ? 'bg-sage w-4' : 'bg-line'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Zubereitung */}
            <div className={`md:col-span-3`}>
              <h2 className="font-display text-xl text-heading font-medium mb-6">Zubereitung</h2>
              <div className="space-y-6">
                {r.steps.map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="shrink-0 w-9 h-9 rounded-full bg-sage text-white text-sm font-medium flex items-center justify-center">{i + 1}</div>
                    <p className="text-sm text-body leading-relaxed pt-2">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        <div className="max-w-3xl mx-auto">

          {/* Vorschläge */}
          <div className="mt-16 pt-10 border-t border-line">
            <h2 className="font-display text-2xl text-heading font-medium mb-8">Das könnte dir auch schmecken</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {suggestions.map((s) => (
                <Link key={s.id} to={`/rezepte/${s.slug}`} className="group">
                  <div className="rounded-2xl overflow-hidden border border-line bg-white transition-shadow hover:shadow-lg">
                    <img src={s.image} alt={s.name} loading="lazy" className="w-full h-[200px] object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="p-4">
                      <span className="text-[0.65rem] tracking-widest uppercase text-sage font-medium">{s.category}</span>
                      <h3 className="font-display text-base text-heading font-medium mt-1 group-hover:text-sage transition-colors">{s.name}</h3>
                      <p className="text-xs text-muted mt-1">{s.time} · {s.difficulty}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 pt-8 border-t border-line text-center">
            <Link to="/rezepte" className="inline-flex items-center gap-2 bg-sage hover:bg-sage-dark text-white text-sm font-medium px-7 py-3.5 rounded-full transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
              Zurück zur Übersicht
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
