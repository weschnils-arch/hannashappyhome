import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-heading text-bg">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link to="/" className="block mb-4">
              <img src="/images/logo-full.webp" alt="Hannas Happy Home" className="h-20 md:h-24 w-auto brightness-0 invert opacity-90" />
            </Link>
            <p className="text-bg/50 text-sm leading-relaxed max-w-xs">
              Alltagstaugliche Familienrezepte,<br />
              selbstgemacht mit Liebe.
            </p>
          </div>

          {/* Nav */}
          <div className="md:col-span-3">
            <h4 className="text-xs tracking-[0.15em] uppercase text-bg/30 mb-5">Navigation</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-sm text-bg/60 hover:text-bg transition-colors">Startseite</Link>
              <Link to="/rezepte" className="text-sm text-bg/60 hover:text-bg transition-colors">Rezepte</Link>
              <Link to="/hausgemachtes" className="text-sm text-bg/60 hover:text-bg transition-colors">Hausgemachtes</Link>
              <Link to="/ueber-mich" className="text-sm text-bg/60 hover:text-bg transition-colors">Über mich</Link>
            </nav>
          </div>

          {/* Social */}
          <div className="md:col-span-4">
            <h4 className="text-xs tracking-[0.15em] uppercase text-bg/30 mb-5">Folge mir</h4>
            <a
              href="https://www.instagram.com/hannas.happyhome/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-bg/60 hover:text-bg transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
              @hannas.happyhome
            </a>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-bg/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="text-xs text-bg/25">&copy; {new Date().getFullYear()} Hannas Happy Home</p>
          <p className="text-xs text-bg/25">
            Design by{' '}
            <a href="https://digitalisierungshilfe.at" target="_blank" rel="noopener noreferrer" className="text-bg/35 hover:text-bg/60 transition-colors">
              Digitalisierungshilfe.at
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
