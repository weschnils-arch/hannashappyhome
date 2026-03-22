export default function UeberMich() {
  return (
    <main className="min-h-screen bg-bg pt-28 pb-20">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-heading font-medium tracking-tight mb-14">Über mich</h1>

        {/* Hero section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-20">
          <div className="rounded-[2rem] overflow-hidden shadow-lg">
            <img src="/images/about/IMG_5037.webp" alt="Hanna" className="w-full h-[400px] md:h-[550px] object-cover" />
          </div>
          <div className="flex flex-col justify-center lg:pt-8">
            <h2 className="font-display text-3xl md:text-4xl text-heading font-medium italic mb-8">Griaß eich, i bin di Hanna.</h2>
            <div className="space-y-5 text-body leading-relaxed">
              <p>Ich bin Mama von zwei Kindern und liebe alles, was unseren Familienalltag ein bisschen leichter, unser Zuhause gemütlicher und das Leben vor allem leckerer macht.</p>
              <p>Einige kennen mich vielleicht von Instagram <a href="https://www.instagram.com/hannas.happyhome/" target="_blank" rel="noopener noreferrer" className="text-sage hover:underline">@hannas.happyhome</a> — dort nehme ich euch schon länger mit in unseren Alltag und teile Ideen rund ums Kochen, Backen, Selbermachen und Wohlfühlen.</p>
              <p>Auf Instagram rutscht leider alles immer weiter nach unten. Die Rezepte verschwinden im Feed — genau deshalb gibt's ab jetzt diesen Foodblog. Hier sind meine Rezepte gebündelt, übersichtlich und für euch jederzeit schnell auffindbar.</p>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20">
          <div>
            <h2 className="font-display text-2xl md:text-3xl text-heading font-medium mb-6">Ehrliche Familienküche</h2>
            <div className="space-y-5 text-body leading-relaxed">
              <p>Das Selbermachen liegt mir besonders am Herzen. Ich möchte einfach genau wissen, was ich meiner Familie zum Essen hinstelle. Ich will Gerichte, die schmecken, satt machen und dabei möglichst ohne unnötige Zusatzstoffe auskommen.</p>
              <p>Ich bin davon überzeugt, dass nicht immer alles gekauft werden muss. Man kann so viel selbst machen. Früher war vieles selbstverständlich: es wurden Lebensmittel hergestellt, Reste verwertet, Vorräte angelegt und Dinge haltbar gemacht. Dieses Wissen möchte ich nicht verloren gehen lassen.</p>
            </div>
          </div>
          <div className="rounded-[2rem] overflow-hidden shadow-lg">
            <img src="/images/about/IMG_5042.webp" alt="Hanna" loading="lazy" className="w-full h-[360px] md:h-[440px] object-cover" />
          </div>
        </div>

        {/* Section 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20">
          <div className="rounded-[2rem] overflow-hidden shadow-lg order-2 lg:order-1">
            <img src="/images/about/IMG_5029.webp" alt="Hanna" loading="lazy" className="w-full h-[360px] md:h-[440px] object-cover" />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-display text-2xl md:text-3xl text-heading font-medium mb-6">Wissen teilen</h2>
            <div className="space-y-5 text-body leading-relaxed">
              <p>Alles was ich auf meinem Weg lerne, teile ich gerne mit euch. Ihr bekommt von mir Einblicke in meine ehrliche Familienküche, alltagstaugliche Rezepte und viele Ideen rund ums Selbermachen, die wirklich funktionieren.</p>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="max-w-2xl mx-auto text-center py-12">
          <p className="font-display text-2xl md:text-3xl text-heading italic leading-relaxed mb-6">
            „Schön, dass ihr da seid, fühlt euch wohl &amp; lasst es euch schmecken!"
          </p>
          <div className="w-12 h-[2px] bg-sage mx-auto mb-6" />
          <p className="text-muted text-sm">— Hanna</p>
        </div>

        {/* Instagram CTA */}
        <div className="bg-white rounded-3xl p-8 md:p-14 text-center border border-line mt-8">
          <p className="text-xs tracking-[0.2em] uppercase text-sage mb-3 font-medium">Instagram</p>
          <h2 className="font-display text-2xl md:text-3xl text-heading font-medium mb-4">@hannas.happyhome</h2>
          <p className="text-muted text-sm max-w-md mx-auto mb-8">Tägliche Einblicke, neue Rezepte und Inspiration rund ums Selbermachen.</p>
          <a
            href="https://www.instagram.com/hannas.happyhome/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-sage hover:bg-sage-dark text-white text-sm font-medium px-7 py-3.5 rounded-full transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            Auf Instagram folgen
          </a>
        </div>
      </div>
    </main>
  )
}
