export interface Recipe {
  id: string
  slug: string
  name: string
  category: string
  image: string
  desc: string
  time: string
  difficulty: string
  servings: string
  servingsNum: number
  ingredients: string[]
  ingredientGroups?: { name: string; items: string[] }[]
  steps: string[]
  instagramUrl?: string
  meal: string
  season: string
}

export const categories = ['Alle', 'Pfannengerichte', 'Backofenrezepte', 'Süßes', 'Nudelgerichte', 'One Pot', 'Blech', 'Hausgemachtes'] as const
export const meals = ['Alle', 'Frühstück', 'Mittagessen', 'Abendessen', 'Snack', 'Dessert'] as const
export const seasons = ['Alle', 'Frühling', 'Sommer', 'Herbst', 'Winter', 'Ganzjährig'] as const
export type Category = (typeof categories)[number]

export const recipes: Recipe[] = [
  {
    id: '009', slug: 'champignon-schnitzel', name: 'Champignon Schnitzel', category: 'Pfannengerichte',
    image: '/images/recipes/009-champignon-schnitzel.webp',
    desc: 'Champignon-Schnitzel mit Bandnudeln & Salat — deftig und cremig.',
    time: '40 Min.', difficulty: 'Mittel', servings: '4 Portionen', servingsNum: 4,
    meal: 'Abendessen', season: 'Ganzjährig',
    ingredients: ['8-9 Schnitzel vom Rind', 'Senf & Mehl', '1 Zwiebel', '2 Knoblauchzehen', '400g Champignons', '500ml Rindssuppe', '1 TL Tomatenmark', '1 TL Paprikapulver', 'Salz & Pfeffer', '4 EL Sahne', '3 EL Mehl'],
    steps: ['Schnitzel klopfen, würzen, eine Seite mit Senf bestreichen, andere in Mehl wenden.', 'Beidseitig anbraten, zur Seite legen.', 'Zwiebel, Knoblauch & Champignons anrösten.', 'Mit Suppe aufgießen, Tomatenmark & Paprika einrühren.', 'Schnitzel zurücklegen, 20 Min. köcheln.', 'Sahne einrühren, mit Mehl eindicken.'],
    instagramUrl: 'https://www.instagram.com/reel/C9NJleWN8MK/',
  },
  {
    id: '010', slug: 'one-pot-schlemmertopf', name: 'One-Pot Schlemmertopf', category: 'One Pot',
    image: '/images/recipes/010-one-pot-schlemmertopf.webp',
    desc: 'Alles in einen Topf — cremig, würzig, unglaublich lecker.',
    time: '35 Min.', difficulty: 'Einfach', servings: '4-6 Portionen', servingsNum: 4,
    meal: 'Mittagessen', season: 'Ganzjährig',
    ingredients: ['500g Hackfleisch', '3 EL Tomatenmark', '2 Zwiebeln', '2 Knoblauchzehen', '2 rote Paprika', '2 Karotten', '800g Kartoffeln', '1 Dose Kidneybohnen', '1L Gemüsebrühe', '4 Schmelzkäse Ecken', 'Salz, Pfeffer, Petersilie'],
    steps: ['Gemüse in Würfel schneiden.', 'Zwiebel & Knoblauch anrösten, Hackfleisch dazu.', 'Tomatenmark einrühren, Gemüse & Kartoffeln dazu.', 'Mit Brühe aufgießen, 25 Min. kochen.', 'Kidneybohnen & Schmelzkäse einrühren.', 'Mit Creme Fraiche & Petersilie servieren.'],
  },
  {
    id: '011', slug: 'vanille-schoko-schnecken', name: 'Vanille Schoko Schnecken', category: 'Süßes',
    image: '/images/recipes/011-vanille-schoko-schnecken.webp',
    desc: 'Blätterteig-Schnecken mit Vanillecreme und Schokodrops.',
    time: '30 Min.', difficulty: 'Einfach', servings: '12 Stück', servingsNum: 12,
    meal: 'Snack', season: 'Ganzjährig',
    ingredients: ['2 Rollen Blätterteig', '1 Pkg. Vanille-Pudding', '80g Topfen', '40g Zucker', '500ml Milch', '50g Schoko-Drops'],
    steps: ['Vanille Pudding kochen & abkühlen lassen.', 'Quark einrühren & auf Blätterteig verteilen.', 'Schokodrops streuen, zweiten Teig drauf.', 'In Streifen schneiden & zu Schnecken drehen.', 'Bei 180°C ca. 20 Min. goldbraun backen.'],
  },
  {
    id: '014', slug: 'rinderschmorbraten', name: 'Rinderschmorbraten', category: 'Pfannengerichte',
    image: '/images/recipes/014-rinderschmorrbraten.webp',
    desc: 'Zarter Rinderbraten — das perfekte Sonntagsessen.',
    time: '3 Std.', difficulty: 'Mittel', servings: '4-6 Portionen', servingsNum: 4,
    meal: 'Mittagessen', season: 'Herbst',
    ingredients: ['1kg Rinderbraten', '4 Karotten', '400g Kartoffeln', '2 Zwiebeln', '2 Knoblauchzehen', '100ml Rotwein', '500ml Rinderbrühe', 'Salz, Pfeffer, Senf', '2 EL Mehl'],
    steps: ['Fleisch würzen und mit Senf bestreichen.', 'Gemüse in Spalten schneiden.', 'Fleisch scharf anbraten, herausnehmen.', 'Gemüse anrösten, Rotwein & Brühe dazu.', 'Fleisch zurück, bei 160°C 2,5 Std. schmoren.', 'Sauce eindicken und servieren.'],
  },
  {
    id: '021', slug: 'erdbeer-tiramisu', name: 'Erdbeer Tiramisu', category: 'Süßes',
    image: '/images/recipes/021-erdbeer-tiramisu.webp',
    desc: 'Sommerliches Tiramisu ohne Ei & Kaffee — fruchtig & cremig.',
    time: '30 Min. + Kühlzeit', difficulty: 'Einfach', servings: '6-8 Portionen', servingsNum: 6,
    meal: 'Dessert', season: 'Sommer',
    ingredients: ['500g Erdbeeren', '250g Mascarpone', '250g Magerquark', '200ml Sahne', '80g Zucker', '1 Pck. Vanillezucker', '1 Pck. Löffelbiskuits'],
    steps: ['Erdbeeren pürieren, etwas zum Dekorieren aufheben.', 'Mascarpone, Quark, Zucker verrühren.', 'Sahne steif schlagen und unterheben.', 'Löffelbiskuits schichten, mit Erdbeerpüree tränken.', 'Creme darüber, wiederholen.', 'Mind. 4 Stunden kühlen, dekorieren.'],
  },
  {
    id: '022', slug: 'superschnelle-haehnchenpfanne', name: 'Hähnchenpfanne', category: 'Pfannengerichte',
    image: '/images/recipes/022-superschnelle-haehnchenpfanne.webp',
    desc: 'Paprika-Champignons-Hähnchen — in 25 Minuten auf dem Tisch.',
    time: '25 Min.', difficulty: 'Einfach', servings: '4 Portionen', servingsNum: 4,
    meal: 'Abendessen', season: 'Ganzjährig',
    ingredients: ['500g Hühnerfilet', '1 rote Paprika', '1/2 gelbe Paprika', '200g Champignons', '1 Zwiebel', '200ml Gemüsebrühe', '200ml Sahne', 'Salz, Pfeffer, Paprikapulver'],
    steps: ['Hühnerfilets würfeln & würzen.', 'Zwiebel anrösten, Fleisch goldbraun braten.', 'Paprika & Champignons dazu.', 'Brühe & Sahne einrühren.', '10 Min. einkochen, mit Basilikum servieren.'],
  },
  {
    id: '025', slug: 'erdbeer-biskuitroulade', name: 'Erdbeer Biskuitroulade', category: 'Süßes',
    image: '/images/recipes/025-erdbeer-biskuitroulade.webp',
    desc: 'Frisch, fruchtig & fluffig — Erdbeer-Roulade.',
    time: '45 Min.', difficulty: 'Mittel', servings: '8-10 Stück', servingsNum: 8,
    meal: 'Dessert', season: 'Sommer',
    ingredientGroups: [
      { name: 'Biskuit', items: ['5 Eier', '150g Zucker', '100g Mehl', '1 Pkg Backpulver'] },
      { name: 'Füllung', items: ['Erdbeermarmelade', '250ml Sahne', '250g Erdbeeren'] },
    ],
    ingredients: ['5 Eier', '150g Zucker', '100g Mehl', '1 Pkg Backpulver', 'Erdbeermarmelade', '250ml Sahne', '250g Erdbeeren'],
    steps: ['Eier trennen, Eiklar steif schlagen.', 'Dotter mit Zucker schaumig, Mehl unterheben.', 'Eischnee unterziehen, auf Blech verteilen.', 'Bei 180°C 12 Min. backen.', 'Auf feuchtes Tuch stürzen, mit Marmelade bestreichen.', 'Sahne & Erdbeeren drauf, einrollen.'],
  },
  {
    id: '029', slug: 'kartoffel-jaegerpfanne', name: 'Kartoffel Jägerpfanne', category: 'Pfannengerichte',
    image: '/images/recipes/029-kartoffel-jaegerpfanne.webp',
    desc: 'Cremige 30-Minuten-Jägerpfanne — schnell, deftig, lecker.',
    time: '30 Min.', difficulty: 'Einfach', servings: '4 Portionen', servingsNum: 4,
    meal: 'Abendessen', season: 'Ganzjährig',
    ingredients: ['500g Kartoffeln', '500g Putenfleisch', '400g Champignons', '1 Zwiebel', '150ml Sahne', '150ml Gemüsebrühe', '1 EL Creme Fraiche', '1 TL Senf'],
    steps: ['Kartoffeln marinieren & im Ofen knusprig backen.', 'Putenfleisch würfeln und anbraten.', 'Zwiebel, Knoblauch & Champignons dazu.', 'Sahne, Brühe, Senf einrühren.', 'Einkochen lassen.', 'Knusprige Kartoffeln unterheben.'],
  },
  {
    id: '042', slug: 'zwetschken-zimt-schnecken', name: 'Zwetschken Zimt Schnecken', category: 'Süßes',
    image: '/images/recipes/042-zwetschken-zimt-schnecken.webp',
    desc: 'Fluffige Hefeteig-Schnecken mit Zwetschgen & Zimt.',
    time: '2 Std.', difficulty: 'Mittel', servings: '12 Stück', servingsNum: 12,
    meal: 'Snack', season: 'Herbst',
    ingredients: ['500g Mehl', '1/2 Würfel Hefe', '60g Zucker', '250ml Milch', '70g Butter', '1 Ei', '500g Zwetschken', '3 EL Zucker + 1,5 TL Zimt', '60g Butter'],
    steps: ['Hefe in lauwarmer Milch auflösen.', 'Teig kneten, 1 Stunde gehen lassen.', 'Zwetschken mit Butter, Zucker, Zimt karamellisieren.', 'Teig ausrollen, füllen, einrollen.', 'In Scheiben schneiden, 20 Min. gehen lassen.', 'Bei 180°C 25 Min. backen.'],
  },
  {
    id: '043', slug: 'tomaten-mozarella-nudeln', name: 'Tomaten Mozzarella Nudeln', category: 'Nudelgerichte',
    image: '/images/recipes/043-tomaten-mozarella-nudeln.webp',
    desc: 'Cremige Tomaten-Mozzarella-Pasta — schnell & beliebt.',
    time: '25 Min.', difficulty: 'Einfach', servings: '4 Portionen', servingsNum: 4,
    meal: 'Mittagessen', season: 'Ganzjährig',
    ingredients: ['300g Nudeln', '150g Creme Fraiche', '100g Topfen', '125g Mozzarella-Minis', '2 Tomaten', '200g passierte Tomaten', '1 Zwiebel', '1 Knoblauchzehe'],
    steps: ['Gemüse würfeln und anbraten.', 'Passierte Tomaten dazu, einkochen.', 'Nudeln kochen.', 'Creme Fraiche & Topfen einrühren.', 'Mozzarella & Nudeln unterheben.', 'Mit Basilikum servieren.'],
  },
  {
    id: '046', slug: 'honig-senf-haehnchen', name: 'Honig Senf Hähnchen', category: 'Blech',
    image: '/images/recipes/046-honig-senf-haehnchen-vom-blech.webp',
    desc: 'Alles auf ein Blech, ab in den Ofen — fertig.',
    time: '55 Min.', difficulty: 'Einfach', servings: '4 Portionen', servingsNum: 4,
    meal: 'Abendessen', season: 'Ganzjährig',
    ingredients: ['4 Hähnchenschenkel', '500g Kartoffeln', '3 Karotten', '2 rote Zwiebeln', '3 EL Honig', '2 EL Senf', '2 EL Sojasauce', '2 Knoblauchzehen'],
    steps: ['Ofen auf 200°C vorheizen.', 'Gemüse schneiden, aufs Blech.', 'Honig, Senf, Soja, Knoblauch mischen.', 'Hähnchen glasieren, aufs Gemüse.', '45 Min. backen.', 'Mit Sesam bestreuen.'],
  },
  {
    id: '053', slug: 'kohlrouladen', name: 'Kohlrouladen', category: 'Backofenrezepte',
    image: '/images/recipes/053-kohlrouladen-aus-dem-ofen.webp',
    desc: 'Schnelle Krautwickel aus dem Ofen — perfekt für den Herbst.',
    time: '1 Std. 15 Min.', difficulty: 'Mittel', servings: '4-6 Portionen', servingsNum: 4,
    meal: 'Mittagessen', season: 'Herbst',
    ingredients: ['1 Weißkohl', '500g Hackfleisch', '1 Zwiebel', '1 Ei', '3 EL Semmelbrösel', '1 TL Senf', 'Salz, Paprikapulver', '400ml Brühe', '300ml Tomatensauce'],
    steps: ['Kohlkopf 3 Min. in kochendes Wasser.', 'Blätter ablösen.', 'Fleisch mit Gewürzen mischen.', 'Füllung auf Blätter, einrollen.', 'In Auflaufform, Brühe & Sauce drüber.', 'Bei 180°C 45 Min. garen.'],
  },
  {
    id: '056', slug: 'shakshuka', name: 'Shakshuka', category: 'Pfannengerichte',
    image: '/images/recipes/056-shakshuka.webp',
    desc: 'Pochierte Eier in Tomaten-Paprika-Sauce — orientalisch gut.',
    time: '30 Min.', difficulty: 'Einfach', servings: '3-4 Portionen', servingsNum: 4,
    meal: 'Frühstück', season: 'Ganzjährig',
    ingredients: ['6 Tomaten', '1 Zwiebel', '1 Paprika', '1 Knoblauch', '200g Käse', '5 Eier', 'Salz, Pfeffer, Kreuzkümmel, Paprikapulver'],
    steps: ['Zwiebel, Knoblauch, Paprika würfeln.', 'In Olivenöl mit Tomaten dünsten.', 'Tomaten zerdrücken, würzen.', 'Mulden formen, Eier rein.', 'Käse drüber, mit Deckel garen.'],
  },
  {
    id: '058', slug: 'pfirsich-zimt-kuchen', name: 'Pfirsich Zimt Kuchen', category: 'Süßes',
    image: '/images/recipes/058-pfirsich-zimt-kuchen.webp',
    desc: 'Cremiger Kuchen mit Pfirsichen & einer Prise Zimt.',
    time: '1 Std.', difficulty: 'Mittel', servings: '8-10 Stück', servingsNum: 8,
    meal: 'Dessert', season: 'Sommer',
    ingredientGroups: [
      { name: 'Teig', items: ['3 Eier', '120g Zucker', '120g Öl', '150g Mehl', '1 TL Backpulver'] },
      { name: 'Creme', items: ['1 Pkg Qimiq', '250g Topfen', '200ml Sahne', '1 TL Zimt'] },
      { name: 'Belag', items: ['5-6 Pfirsiche'] },
    ],
    ingredients: ['3 Eier', '120g Zucker', '120g Öl', '150g Mehl', '1 TL Backpulver', '1 Pkg Qimiq', '250g Topfen', '200ml Sahne', '1 TL Zimt', '5-6 Pfirsiche'],
    steps: ['Teig rühren, in Springform, 20 Min. vorbacken.', 'Qimiq, Topfen, Sahne, Zucker, Zimt verrühren.', 'Creme auf Boden geben.', 'Pfirsichspalten auflegen.', 'Nochmals 30 Min. backen.'],
  },
  {
    id: '061', slug: 'schoko-milchbroetchen', name: 'Schoko Milchbrötchen', category: 'Süßes',
    image: '/images/recipes/061-schoko-milchbroetchen.webp',
    desc: 'Fluffige Brötchen mit Schokotropfen — ohne Zusatzstoffe.',
    time: '2 Std.', difficulty: 'Mittel', servings: '10-12 Stück', servingsNum: 10,
    meal: 'Frühstück', season: 'Ganzjährig',
    ingredients: ['500g Mehl', '200ml Milch', '50ml Sahne', '80g Zucker', '80g Butter', '1 Würfel Hefe', '1 Ei', '100g Schokotropfen'],
    steps: ['Hefe in warmer Milch auflösen.', 'Teig kneten, Schokotropfen einarbeiten.', '1 Stunde gehen lassen.', 'Brötchen formen, 20 Min. gehen lassen.', 'Mit Sahne bestreichen.', 'Bei 180°C 18 Min. backen.'],
  },
  {
    id: '062', slug: 'pulled-pork', name: 'Pulled Pork', category: 'Backofenrezepte',
    image: '/images/recipes/062-pulled-pork.webp',
    desc: 'Langsam geschmortes Pulled Pork — zart und saftig.',
    time: '5 Std.', difficulty: 'Einfach', servings: '6-8 Portionen', servingsNum: 6,
    meal: 'Abendessen', season: 'Ganzjährig',
    ingredients: ['1kg Schweineschulter', '1,5 EL brauner Zucker', '1 EL Paprikapulver', '1 TL Senf', '1 TL Knoblauchpulver', 'Salz, Pfeffer', '100ml Apfelessig-Wasser', 'BBQ-Sauce'],
    steps: ['Fleisch trocken tupfen, Gewürze mischen.', 'Fleisch einreiben.', 'In Bräter, Essig-Wasser angießen.', 'Bei 130°C 4-5 Std. schmoren.', 'Mit Gabeln zupfen.', 'Mit BBQ-Sauce in Buns servieren.'],
  },
  {
    id: '069', slug: 'pizza-schnecken', name: 'Pizza Schnecken', category: 'Backofenrezepte',
    image: '/images/recipes/069-pizza-schnecken.webp',
    desc: 'Der Hit bei Kindern — perfekt für Jause & Partys.',
    time: '1,5 Std.', difficulty: 'Einfach', servings: '15-18 Stück', servingsNum: 15,
    meal: 'Snack', season: 'Ganzjährig',
    ingredients: ['500g Mehl', '1 Würfel Hefe', '250ml Wasser', '2 EL Olivenöl', '1 TL Zucker', 'Tomatensauce', '200g Schinken', '100g Käse'],
    steps: ['Hefeteig kneten, 1 Std. gehen lassen.', 'Rechteckig ausrollen.', 'Mit Tomatensauce bestreichen.', 'Schinken & Käse drauf.', 'Aufrollen, in Scheiben schneiden.', 'Bei 200°C 20 Min. backen.'],
  },
  {
    id: '082', slug: 'faschierte-laibchen', name: 'Faschierte Laibchen', category: 'Pfannengerichte',
    image: '/images/recipes/082-faschierte-laibchen.webp',
    desc: 'Klassisch österreichisch — genau so müssen sie schmecken.',
    time: '30 Min.', difficulty: 'Einfach', servings: '4-6 Portionen', servingsNum: 4,
    meal: 'Abendessen', season: 'Ganzjährig',
    ingredients: ['800g Hackfleisch', '6 EL Semmelbrösel', '6 EL Wasser', '2 Eier', '2 TL Senf', '1 TL Majoran', '2 EL Tomatenmark', '100ml Weißwein'],
    steps: ['Alle Zutaten vermischen.', 'Laibchen formen.', 'In Öl beidseitig goldbraun braten.', 'Mit Weißwein ablöschen.', 'Kurz einkochen lassen.', 'Mit Kartoffelpüree servieren.'],
  },
  {
    id: '085', slug: 'germknoedel', name: 'Germknödel', category: 'Süßes',
    image: '/images/recipes/085-germknoedel-mit-vanillesosse.webp',
    desc: 'Skihütten-Feeling — mit Vanillesauce, Mohn & Zucker.',
    time: '1,5 Std.', difficulty: 'Mittel', servings: '6-8 Knödel', servingsNum: 6,
    meal: 'Mittagessen', season: 'Winter',
    ingredients: ['250g Mehl', '20g Hefe', '30g Zucker', '120ml Milch', '30g Butter', '1 Ei', 'Powidl (Pflaumenmus)', 'Mohn & Staubzucker'],
    steps: ['Hefe in Milch auflösen.', 'Teig kneten, 45 Min. gehen lassen.', 'Teigstücke flach drücken, Powidl rein.', 'Zu Knödeln formen, 20 Min. gehen lassen.', 'In leicht kochendem Wasser 15 Min. kochen.', 'Mit Vanillesauce, Mohn & Zucker servieren.'],
  },
  {
    id: '088', slug: 'backofen-fisch', name: 'Backofen Fisch', category: 'Backofenrezepte',
    image: '/images/recipes/088-backofen-fisch-mit-lauchsosse.webp',
    desc: 'Perfekt gegarter Fisch aus dem Ofen mit Lauchsoße.',
    time: '35 Min.', difficulty: 'Einfach', servings: '4 Portionen', servingsNum: 4,
    meal: 'Mittagessen', season: 'Ganzjährig',
    ingredients: ['4 küchenfertige Fische', '2 Bio-Zitronen', '4 Knoblauchzehen', '1 Bund Petersilie', 'Salz & Pfeffer', 'Mayonnaise'],
    steps: ['Ofen auf 180°C vorheizen.', 'Fisch abspülen, trocken tupfen.', 'Innen & außen würzen.', 'Zitrone, Knoblauch, Petersilie einfüllen.', 'Außen mit Mayo bestreichen.', '25 Min. garen, mit Lauchsoße servieren.'],
  },
  // ── Hausgemachtes ──
  {
    id: '024', slug: 'holundersirup', name: 'Holunderblüten Sirup', category: 'Hausgemachtes',
    image: '/images/recipes/024-hollundersirup.webp',
    desc: 'Nur ansetzen, nicht aufkochen — hält trotzdem ohne zu gären. Bis zu 10 Flaschen!',
    time: '20 Min. + Ziehzeit', difficulty: 'Einfach', servings: '10 Flaschen', servingsNum: 10,
    meal: 'Snack', season: 'Sommer',
    ingredients: ['ca. 30 Holunderblüten-Dolden', '3L Wasser', '3kg Zucker', '60g Zitronensäure', '3 Bio-Zitronen in Scheiben'],
    steps: ['Holunderblüten abzupfen, nicht waschen.', 'Wasser aufkochen, Zucker einrühren bis aufgelöst.', 'Zitronensäure einrühren, abkühlen lassen.', 'Holunderblüten & Zitronenscheiben dazugeben.', '3 Tage zugedeckt ziehen lassen, täglich umrühren.', 'Abseihen und in Flaschen füllen.'],
  },
  {
    id: '076', slug: 'turbo-weckerl', name: 'Turbo Weckerl', category: 'Hausgemachtes',
    image: '/images/recipes/076-turbo-weckerl.webp',
    desc: 'Schnelle Brötchen ohne Kneten — außen knusprig, innen fluffig.',
    time: '30 Min. + Gehzeit', difficulty: 'Einfach', servings: '8-10 Stück', servingsNum: 8,
    meal: 'Frühstück', season: 'Ganzjährig',
    ingredients: ['500g Weizenmehl', '10g Salz', '5g frische Hefe', '360ml Wasser', '1-2 TL Honig'],
    steps: ['Mehl und Salz vermengen.', 'Wasser, Hefe und Honig verrühren, zum Mehl geben.', 'Alles grob verrühren (nicht kneten!).', 'Zugedeckt über Nacht im Kühlschrank gehen lassen.', 'Teig auf bemehlter Fläche portionieren.', 'Bei 250°C mit Dampf ca. 20 Min. backen.'],
  },
  {
    id: '083', slug: 'mayonnaise', name: 'Selbstgemachte Mayonnaise', category: 'Hausgemachtes',
    image: '/images/recipes/083-mayonaisse.webp',
    desc: 'Selbstgemachte Mayo in 2 Minuten — für Saucen & Aufstriche.',
    time: '5 Min.', difficulty: 'Einfach', servings: '1 Glas', servingsNum: 1,
    meal: 'Snack', season: 'Ganzjährig',
    ingredients: ['1 Ei', '10g Senf', '10g Staubzucker', '10g Essig', '3g Salz', '250g Sonnenblumenöl'],
    steps: ['Alle Zutaten in ein schmales hohes Gefäß geben.', 'Pürierstab ganz unten ansetzen.', 'Mit höchster Stufe pürieren.', 'Langsam nach oben ziehen bis alles emulgiert ist.', 'Im Kühlschrank aufbewahren.'],
  },
  {
    id: '092', slug: 'toastbrot', name: 'Selbstgemachtes Toastbrot', category: 'Hausgemachtes',
    image: '/images/recipes/092-toastbrot.webp',
    desc: 'Frisches Toastbrot — scheibenweise einfrieren und bei Bedarf entnehmen.',
    time: '3 Std.', difficulty: 'Mittel', servings: '1 Laib', servingsNum: 1,
    meal: 'Frühstück', season: 'Ganzjährig',
    ingredientGroups: [
      { name: 'Vorteig', items: ['300g Mehl', '300g Wasser', '0,5g Hefe'] },
      { name: 'Hauptteig', items: ['450g Mehl', '150g Milch', '40g weiche Butter', '25g Honig', '15g Salz'] },
    ],
    ingredients: ['300g Mehl (Vorteig)', '300g Wasser', '0,5g Hefe', '450g Mehl (Hauptteig)', '150g Milch', '40g weiche Butter', '25g Honig', '15g Salz'],
    steps: ['Vorteig aus Mehl, Wasser und Hefe anrühren, über Nacht reifen lassen.', 'Vorteig mit Hauptteig-Zutaten verkneten.', '1 Stunde gehen lassen.', 'In gefettete Kastenform geben.', 'Nochmals 45 Min. gehen lassen.', 'Bei 190°C ca. 35 Min. backen.'],
  },
  {
    id: '098', slug: 'obstriegel', name: 'Obstriegel', category: 'Hausgemachtes',
    image: '/images/recipes/098-obstriegel.webp',
    desc: 'Gesunder Snack auf Vorrat — schnell gemacht und immer griffbereit.',
    time: '20 Min.', difficulty: 'Einfach', servings: '12 Riegel', servingsNum: 12,
    meal: 'Snack', season: 'Ganzjährig',
    ingredients: ['180g Datteln', '150g Cashew Kerne', '70g Apfelchips', '50g getrocknete Ananas', '50g getrocknete Mango', '20g Wasser', 'Backoblaten'],
    steps: ['Datteln, Cashews und Trockenfrüchte in den Mixer.', 'Mit Wasser zu einer klebrigen Masse pürieren.', 'Auf Backoblaten verteilen und flach drücken.', 'In Riegelform schneiden.', 'Im Kühlschrank fest werden lassen.', 'In Folie wickeln — hält 2-3 Wochen.'],
  },
  {
    id: '075', slug: 'husten-helferchen', name: 'Husten Helferchen', category: 'Hausgemachtes',
    image: '/images/recipes/075-husten-helferchen.webp',
    desc: 'Natürliches Hausmittel gegen Husten — selbstgemacht mit Honig & Kräutern.',
    time: '15 Min.', difficulty: 'Einfach', servings: '1 Glas', servingsNum: 1,
    meal: 'Snack', season: 'Winter',
    ingredients: ['Honig', 'Ingwer frisch gerieben', 'Zitronensaft', 'Thymian', 'Salbei'],
    steps: ['Ingwer schälen und fein reiben.', 'Kräuter klein hacken.', 'Alles mit Honig vermengen.', 'In ein sauberes Glas füllen.', 'Bei Bedarf 1 TL in heißes Wasser einrühren.'],
  },
]

export const hausgemachtesRecipes = recipes.filter(r => r.category === 'Hausgemachtes')

export function getRecipeBySlug(slug: string) {
  return recipes.find(r => r.slug === slug)
}

export function filterByCategory(cat: Category) {
  return cat === 'Alle' ? recipes : recipes.filter(r => r.category === cat)
}

export function filterRecipes(cat: string, meal: string, season: string) {
  return recipes.filter(r => {
    if (cat !== 'Alle' && r.category !== cat) return false
    if (meal !== 'Alle' && r.meal !== meal) return false
    if (season !== 'Alle' && r.season !== season) return false
    return true
  })
}

export function searchRecipes(query: string) {
  const q = query.toLowerCase().trim()
  if (!q) return []
  return recipes.filter(r =>
    r.name.toLowerCase().includes(q) ||
    r.desc.toLowerCase().includes(q) ||
    r.category.toLowerCase().includes(q) ||
    r.ingredients.some(ing => ing.toLowerCase().includes(q))
  )
}

export function parseIngredientQuantity(ingredient: string): { qty: number | null; unit: string; item: string } {
  const match = ingredient.match(/^([\d.,/]+(?:-[\d.,/]+)?)\s*(.*)$/)
  if (!match) return { qty: null, unit: '', item: ingredient }
  const rawQty = match[1].replace(',', '.')
  let qty: number
  if (rawQty.includes('/')) {
    const [num, den] = rawQty.split('/')
    qty = parseFloat(num) / parseFloat(den)
  } else if (rawQty.includes('-')) {
    const [lo, hi] = rawQty.split('-')
    qty = (parseFloat(lo) + parseFloat(hi)) / 2
  } else {
    qty = parseFloat(rawQty)
  }
  if (isNaN(qty)) return { qty: null, unit: '', item: ingredient }
  const rest = match[2]
  const unitMatch = rest.match(/^(g|kg|ml|L|EL|TL|Pkg\.?|Pck\.?|Dose|Bund|Würfel)\s+(.*)$/i)
  if (unitMatch) return { qty, unit: unitMatch[1], item: unitMatch[2] }
  return { qty, unit: '', item: rest }
}

export function scaleIngredient(ingredient: string, baseServings: number, targetServings: number): string {
  const { qty, unit, item } = parseIngredientQuantity(ingredient)
  if (qty === null) return ingredient
  const scaled = (qty / baseServings) * targetServings
  const display = scaled % 1 === 0 ? scaled.toString() : scaled.toFixed(1).replace('.', ',')
  return unit ? `${display}${unit} ${item}` : `${display} ${item}`
}
