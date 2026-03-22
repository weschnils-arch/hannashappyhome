import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { searchRecipes } from '../data/recipes'

const links = [
  { to: '/', label: 'Startseite' },
  { to: '/rezepte', label: 'Rezepte' },
  { to: '/diy', label: 'DIY' },
  { to: '/ueber-mich', label: 'Über mich' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const location = useLocation()
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const results = query.length >= 2 ? searchRecipes(query).slice(0, 6) : []

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false); setSearchOpen(false); setQuery('') }, [location])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    if (searchOpen && inputRef.current) inputRef.current.focus()
  }, [searchOpen])

  // Close search on click outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchOpen(false); setQuery('')
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-bg/60 backdrop-blur-xl border-b ${
        scrolled ? 'border-line/50 shadow-[0_1px_20px_rgba(0,0,0,0.06)]' : 'border-line/20'
      }`}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src="/images/icon.webp" alt="" className="h-9 md:h-10 w-auto" />
            <img src="/images/wordmark.webp" alt="Hannas Happy Home" className="h-7 md:h-8 w-auto" />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <Link key={l.to} to={l.to}
                className={`text-[0.9rem] transition-colors duration-200 ${
                  location.pathname === l.to ? 'text-sage font-medium' : 'text-muted hover:text-heading'
                }`}
              >{l.label}</Link>
            ))}

            {/* Search */}
            <div ref={searchRef} className="relative">
              <button onClick={() => setSearchOpen(!searchOpen)} className="w-9 h-9 rounded-full bg-white/80 hover:bg-white flex items-center justify-center border border-line/50 transition-all cursor-pointer">
                <svg className="w-4 h-4 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" strokeWidth="1.5"/><path d="M21 21l-4.35-4.35" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </button>

              {searchOpen && (
                <div className="absolute right-0 top-12 w-80 bg-white rounded-2xl shadow-xl border border-line/50 overflow-hidden">
                  <div className="p-3">
                    <input
                      ref={inputRef}
                      type="text"
                      value={query}
                      onChange={e => setQuery(e.target.value)}
                      placeholder="Rezept suchen..."
                      className="w-full px-4 py-2.5 rounded-xl bg-bg text-sm text-heading placeholder:text-muted/50 focus:outline-none"
                    />
                  </div>
                  {results.length > 0 && (
                    <div className="border-t border-line/50 max-h-80 overflow-y-auto">
                      {results.map(r => (
                        <Link key={r.id} to={`/rezepte/${r.slug}`}
                          className="flex items-center gap-3 px-4 py-3 hover:bg-bg transition-colors"
                        >
                          <img src={r.image} alt="" className="w-10 h-10 rounded-lg object-cover shrink-0" />
                          <div>
                            <p className="text-sm text-heading font-medium">{r.name}</p>
                            <p className="text-xs text-muted">{r.category} · {r.time}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                  {query.length >= 2 && results.length === 0 && (
                    <div className="px-4 py-6 text-center text-sm text-muted border-t border-line/50">Keine Rezepte gefunden</div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-3 md:hidden">
            <button onClick={() => { setSearchOpen(!searchOpen); setOpen(false) }} className="w-9 h-9 rounded-full bg-white/80 flex items-center justify-center border border-line/50 cursor-pointer">
              <svg className="w-4 h-4 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" strokeWidth="1.5"/><path d="M21 21l-4.35-4.35" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </button>
            <button onClick={() => { setOpen(!open); setSearchOpen(false) }} className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 cursor-pointer" aria-label="Menü">
              <span className={`block w-6 h-[2px] bg-heading transition-all duration-300 origin-center ${open ? 'rotate-45 translate-y-[5px]' : ''}`} />
              <span className={`block w-6 h-[2px] bg-heading transition-all duration-300 ${open ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`block w-6 h-[2px] bg-heading transition-all duration-300 origin-center ${open ? '-rotate-45 -translate-y-[5px]' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile search dropdown */}
        {searchOpen && (
          <div className="md:hidden px-6 pb-4">
            <div className="bg-white rounded-2xl shadow-lg border border-line/50 overflow-hidden">
              <div className="p-3">
                <input
                  type="text"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder="Rezept suchen..."
                  autoFocus
                  className="w-full px-4 py-2.5 rounded-xl bg-bg text-sm text-heading placeholder:text-muted/50 focus:outline-none"
                />
              </div>
              {results.length > 0 && (
                <div className="border-t border-line/50 max-h-60 overflow-y-auto">
                  {results.map(r => (
                    <Link key={r.id} to={`/rezepte/${r.slug}`} className="flex items-center gap-3 px-4 py-3 hover:bg-bg transition-colors">
                      <img src={r.image} alt="" className="w-10 h-10 rounded-lg object-cover shrink-0" />
                      <div>
                        <p className="text-sm text-heading font-medium">{r.name}</p>
                        <p className="text-xs text-muted">{r.category} · {r.time}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-40 bg-bg md:hidden">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {links.map(l => (
              <Link key={l.to} to={l.to} className="font-display text-4xl text-heading hover:text-sage transition-colors">{l.label}</Link>
            ))}
            <a href="https://www.instagram.com/hannas.happyhome/" target="_blank" rel="noopener noreferrer" className="mt-4 text-sm text-muted hover:text-sage transition-colors">@hannas.happyhome</a>
          </div>
        </div>
      )}
    </>
  )
}
