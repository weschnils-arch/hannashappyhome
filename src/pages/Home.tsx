import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'motion/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { recipes } from '../data/recipes'
import SectionDivider from '../components/SectionDivider'

gsap.registerPlugin(ScrollTrigger)

const featured1 = recipes.filter(r => r.category !== 'DIY').slice(0, 4)
const featured2 = recipes.filter(r => r.category !== 'DIY').slice(4, 8)

const heroSlides = [
  { image: '/images/recipes/046-honig-senf-haehnchen-vom-blech.webp', name: 'Honig Senf Hähnchen' },
  { image: '/images/recipes/021-erdbeer-tiramisu.webp', name: 'Erdbeer Tiramisu' },
  { image: '/images/recipes/085-germknoedel-mit-vanillesosse.webp', name: 'Germknödel' },
  { image: '/images/recipes/058-pfirsich-zimt-kuchen.webp', name: 'Pfirsich Zimt Kuchen' },
  { image: '/images/recipes/062-pulled-pork.webp', name: 'Pulled Pork' },
]
const cats = ['Pfannengerichte', 'Backofenrezepte', 'Süßes', 'Nudelgerichte', 'One Pot', 'Blech', 'DIY']

function RecipeCard({ r }: { r: typeof recipes[number] }) {
  return (
    <Link
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
  )
}

export default function Home() {
  const [heroSlide, setHeroSlide] = useState(0)
  const mainRef = useRef<HTMLElement>(null)
  const heroSectionRef = useRef<HTMLElement>(null)
  const cards1Ref = useRef<HTMLDivElement>(null)
  const cards2Ref = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: heroSectionRef,
    offset: ['start start', 'end start'],
  })
  const heroImgY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const heroImgScale = useTransform(scrollYProgress, [0, 1], [1, 0.9])
  const heroImgRotate = useTransform(scrollYProgress, [0, 1], [0, 5])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-label', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.1 })
      gsap.fromTo('.hero-title', { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1.1, ease: 'power3.out', delay: 0.2 })
      gsap.fromTo('.hero-desc', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', delay: 0.45 })
      gsap.fromTo('.hero-cta', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.6 })
      gsap.fromTo('.hero-img', { opacity: 0, scale: 0.9, rotate: -3 }, { opacity: 1, scale: 1, rotate: 0, duration: 1.4, ease: 'power3.out', delay: 0.3 })
      gsap.fromTo('.hero-badge', { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.7)', delay: 1.0 })

      if (cards1Ref.current) {
        gsap.fromTo(cards1Ref.current.querySelectorAll('.r-card'), { opacity: 0, y: 50 }, {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
          scrollTrigger: { trigger: cards1Ref.current, start: 'top 80%' },
        })
      }
      if (cards2Ref.current) {
        gsap.fromTo(cards2Ref.current.querySelectorAll('.r-card'), { opacity: 0, y: 50 }, {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
          scrollTrigger: { trigger: cards2Ref.current, start: 'top 80%' },
        })
      }
      if (aboutRef.current) {
        gsap.fromTo(aboutRef.current, { opacity: 0, y: 50 }, {
          opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: aboutRef.current, start: 'top 80%' },
        })
      }
    }, mainRef)
    return () => ctx.revert()
  }, [])

  // Hero slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlide(prev => (prev + 1) % heroSlides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <main ref={mainRef}>

      {/* ════════════════ HERO — Foody curved style ════════════════ */}
      <section ref={heroSectionRef} className="relative min-h-screen overflow-hidden">
        <SectionDivider circleSize={8} dotCount={2} />
        {/* Beige base */}
        <div className="absolute inset-0 bg-bg" />

        {/* Sage section — top right with concave circular cutout */}
        <div className="absolute hidden lg:block" style={{
          top: 0, right: 0, width: '55%', height: '100%',
          background: 'var(--color-sage)',
          borderRadius: '0 0 0 50%',
        }} />

        {/* Content */}
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10 min-h-screen flex flex-col justify-center pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center w-full">

            {/* Left — text on beige */}
            <div className="max-w-lg">
              {/* Full logo centered above the left text column */}
              <div className="flex justify-center mb-8 lg:mb-10">
                <img src="/images/logo-full.webp" alt="Hannas Happy Home" className="hero-label h-40 md:h-48 lg:h-56 w-auto" style={{ opacity: 0 }} />
              </div>

              {/* Accent bar + heading like Foody */}
              <div className="flex items-start gap-4 mb-6">
                <div className="hero-title w-1 h-24 md:h-28 bg-sage rounded-full mt-1 shrink-0" style={{ opacity: 0 }} />
                <div>
                  <h1 className="hero-title font-display text-[clamp(2.6rem,5.5vw,4.5rem)] leading-[1.05] tracking-tight text-heading font-medium" style={{ opacity: 0 }}>
                    Selbstgemacht.
                  </h1>
                  <h1 className="hero-title font-display text-[clamp(2.8rem,6vw,5rem)] leading-[1] tracking-tight text-sage font-bold italic" style={{ opacity: 0 }}>
                    Mit Liebe!
                  </h1>
                </div>
              </div>

              <p className="hero-desc text-body text-base md:text-[1.05rem] leading-relaxed max-w-md mb-8" style={{ opacity: 0 }}>
                Alltagstaugliche Rezepte aus meiner ehrlichen Familienküche — einfach, lecker und immer mit einer Prise Liebe.
              </p>

              <div className="hero-cta flex items-center gap-4 flex-wrap" style={{ opacity: 0 }}>
                <Link to="/rezepte" className="bg-sage hover:bg-sage-dark text-white text-sm font-medium px-7 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-sage/20">
                  Rezepte entdecken
                </Link>
                <Link to="/diy" className="text-sm text-muted hover:text-heading transition-colors border border-line rounded-full px-6 py-3 hover:border-sage/40">
                  DIY &amp; Selbstgemachtes
                </Link>
              </div>

              {/* Mini recipe previews */}
              <div className="hero-cta mt-12 flex items-center gap-4" style={{ opacity: 0 }}>
                {recipes.slice(0, 2).map(r => (
                  <Link key={r.id} to={`/rezepte/${r.slug}`} className="flex items-center gap-3 bg-white rounded-xl p-2.5 pr-5 shadow-sm hover:shadow-md transition-all group border border-line/50">
                    <img src={r.image} alt={r.name} className="w-12 h-12 rounded-lg object-cover" />
                    <div>
                      <p className="text-xs font-medium text-heading group-hover:text-sage transition-colors">{r.name}</p>
                      <p className="text-[0.65rem] text-muted">{r.time} · {r.difficulty}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Right — circular plate sitting in the concave curve */}
            <div className="flex justify-center relative">
              <motion.div
                className="hero-img relative z-10"
                style={{ y: heroImgY, scale: heroImgScale, rotate: heroImgRotate }}
              >
                {/* Circular slideshow with thin white ring */}
                <div className="w-[320px] h-[320px] md:w-[400px] md:h-[400px] lg:w-[460px] lg:h-[460px] rounded-full bg-white p-1.5 shadow-2xl shadow-black/10">
                  <div className="w-full h-full rounded-full overflow-hidden relative">
                    {heroSlides.map((slide, i) => (
                      <img
                        key={i}
                        src={slide.image}
                        alt={slide.name}
                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
                        style={{ opacity: heroSlide === i ? 1 : 0 }}
                      />
                    ))}
                  </div>
                </div>

                {/* Slide dots */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
                  {heroSlides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setHeroSlide(i)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        heroSlide === i ? 'bg-sage w-5' : 'bg-line hover:bg-muted'
                      }`}
                      aria-label={`Bild ${i + 1}`}
                    />
                  ))}
                </div>

                {/* Floating badge — top right, synced with slideshow */}
                <div className="hero-badge absolute -top-2 -right-2 md:top-2 md:-right-6 bg-white rounded-2xl p-3 shadow-lg z-20" style={{ opacity: 0 }}>
                  <div className="flex items-center gap-2">
                    <img src={heroSlides[heroSlide].image} alt="" className="w-10 h-10 rounded-lg object-cover transition-opacity duration-500" />
                    <div>
                      <p className="text-xs font-medium text-heading transition-opacity duration-500">{heroSlides[heroSlide].name}</p>
                      <p className="text-[0.65rem] text-sage">Neu &amp; beliebt</p>
                    </div>
                  </div>
                </div>

                {/* Stats badge — bottom */}
                <div className="hero-badge absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-lg z-20" style={{ opacity: 0 }}>
                  <div className="flex items-center gap-5">
                    <div className="text-center">
                      <p className="font-display text-xl text-sage font-bold">{recipes.length}+</p>
                      <p className="text-[0.6rem] text-muted uppercase tracking-wider">Rezepte</p>
                    </div>
                    <div className="w-px h-8 bg-line" />
                    <div className="text-center">
                      <p className="font-display text-xl text-sage font-bold">7</p>
                      <p className="text-[0.6rem] text-muted uppercase tracking-wider">Kategorien</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════ LIEBLINGSREZEPTE — Sektion 1 ════════════════ */}
      <section className="relative py-20 md:py-24 bg-bg">
        <SectionDivider circleSize={10} dotCount={3} />
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-sage mb-2 font-medium">Beliebte Rezepte</p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-heading font-medium tracking-tight">
                Unsere Lieblingsrezepte
              </h2>
            </div>
            <Link to="/rezepte" className="text-sm text-sage hover:text-sage-dark font-medium transition-colors">
              Alle ansehen &rarr;
            </Link>
          </div>
          <div ref={cards1Ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featured1.map(r => <RecipeCard key={r.id} r={r} />)}
          </div>
        </div>
      </section>

      {/* ════════════════ KATEGORIEN ════════════════ */}
      <section className="relative py-16 bg-bg-warm">
        <SectionDivider circleSize={14} dotCount={2} />
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 text-center">
          <h2 className="font-display text-2xl md:text-3xl text-heading font-medium mb-8">Kategorien</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {cats.map(c => (
              <Link key={c} to={`/rezepte?category=${encodeURIComponent(c)}`}
                className="bg-white hover:bg-sage hover:text-white text-body text-sm px-6 py-3 rounded-full border border-line hover:border-sage transition-all duration-200 shadow-sm"
              >{c}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ LIEBLINGSREZEPTE — Sektion 2 ════════════════ */}
      <section className="relative py-20 md:py-24 bg-bg">
        <SectionDivider circleSize={18} dotCount={3} />
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-sage mb-2 font-medium">Noch mehr entdecken</p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-heading font-medium tracking-tight">
                Weitere Favoriten
              </h2>
            </div>
            <Link to="/rezepte" className="text-sm text-sage hover:text-sage-dark font-medium transition-colors">
              Alle Rezepte &rarr;
            </Link>
          </div>
          <div ref={cards2Ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featured2.map(r => <RecipeCard key={r.id} r={r} />)}
          </div>
        </div>
      </section>

      {/* ════════════════ ABOUT TEASER ════════════════ */}
      <section className="relative py-20 md:py-28 bg-bg-warm">
        <SectionDivider circleSize={22} dotCount={4} />
        <div ref={aboutRef} className="max-w-[1280px] mx-auto px-6 md:px-10" style={{ opacity: 0 }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="rounded-[2rem] overflow-hidden shadow-lg">
              <img src="/images/about/IMG_5047.webp" alt="Hanna" loading="lazy" className="w-full h-[360px] md:h-[480px] object-cover" />
            </div>
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-sage mb-3 font-medium">Über Hanna</p>
              <h2 className="font-display text-3xl md:text-4xl text-heading font-medium tracking-tight mb-6 leading-tight">
                Kochen mit Herz<br /><span className="text-sage italic">&amp; Seele</span>
              </h2>
              <p className="text-body leading-relaxed mb-4">
                Ich bin Mama von zwei Kindern und liebe alles, was das Leben leckerer macht. Bei mir findest du keine komplizierten Gourmet-Gerichte, sondern Rezepte die wirklich funktionieren.
              </p>
              <p className="text-body leading-relaxed mb-8">
                Das Selbermachen liegt mir am Herzen — ich will genau wissen, was ich meiner Familie auf den Tisch stelle.
              </p>
              <Link to="/ueber-mich" className="inline-flex items-center gap-2 text-sage hover:text-sage-dark font-medium text-sm transition-colors">
                Mehr erfahren
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════ NEWSLETTER ════════════════ */}
      <section className="py-20 bg-bg">
        <div className="max-w-[600px] mx-auto px-6 md:px-10 text-center">
          <p className="text-xs tracking-[0.2em] uppercase text-sage mb-3 font-medium">Newsletter</p>
          <h2 className="font-display text-3xl md:text-4xl text-heading font-medium mb-4">Bleib auf dem Laufenden</h2>
          <p className="text-muted text-sm mb-8">Neue Rezepte &amp; saisonale Inspiration — direkt in dein Postfach.</p>
          <form onSubmit={e => e.preventDefault()} className="flex flex-col sm:flex-row gap-3">
            <input type="email" placeholder="Deine E-Mail Adresse" className="flex-1 px-5 py-3.5 rounded-full bg-white border border-line text-sm text-heading placeholder:text-muted/50 focus:outline-none focus:border-sage focus:ring-2 focus:ring-sage/15 transition-all" />
            <button className="bg-sage hover:bg-sage-dark text-white text-sm font-medium px-7 py-3.5 rounded-full transition-colors cursor-pointer">Abonnieren</button>
          </form>
        </div>
      </section>
    </main>
  )
}
