import { Link } from 'react-router-dom'
import { diyRecipes } from '../data/recipes'

export default function DIY() {
  return (
    <main className="min-h-screen bg-bg pt-28 pb-20">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-6">
          <p className="text-xs tracking-[0.2em] uppercase text-sage mb-2 font-medium">Selbermachen</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-heading font-medium tracking-tight mb-3">Do It Yourself</h1>
          <p className="text-muted text-base md:text-lg max-w-xl">
            Basics aus der Küche selber machen — von Toastbrot bis Mayonnaise. Weil nicht immer alles gekauft werden muss.
          </p>
        </div>

        {/* Intro banner */}
        <div className="bg-bg-warm rounded-3xl p-8 md:p-12 mb-14 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h2 className="font-display text-2xl md:text-3xl text-heading font-medium mb-4">
              Wissen, was drin ist
            </h2>
            <p className="text-body leading-relaxed">
              Früher war vieles selbstverständlich: Lebensmittel wurden hergestellt, Reste verwertet, Vorräte angelegt und Dinge haltbar gemacht. Dieses Wissen möchte ich nicht verloren gehen lassen.
            </p>
          </div>
          <div className="shrink-0 w-20 h-20 rounded-full bg-sage/10 flex items-center justify-center">
            <svg className="w-10 h-10 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.674M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
        </div>

        {/* DIY Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {diyRecipes.map(r => (
            <Link
              key={r.id}
              to={`/rezepte/${r.slug}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden">
                <img src={r.image} alt={r.name} loading="lazy" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-3 left-3 bg-sage/90 text-white text-[0.7rem] tracking-wider uppercase font-medium px-3 py-1 rounded-full">
                  DIY
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg text-heading font-medium mb-1 group-hover:text-sage transition-colors">{r.name}</h3>
                <p className="text-sm text-muted leading-relaxed line-clamp-2 mb-3">{r.desc}</p>
                <div className="flex items-center gap-3 text-xs text-muted">
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeWidth="1.5"/><path d="M12 6v6l4 2" strokeWidth="1.5" strokeLinecap="round"/></svg>
                    {r.time}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-line" />
                  <span>{r.difficulty}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
