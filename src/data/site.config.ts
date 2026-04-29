export interface Product {
  rank: number; name: string; brand: string; slug: string; image: string; brandLogo: string;
  rating: number; reviewCount: number; promoCode: string; promoPercent: number;
  originalPrice: string; discountPrice: string; affiliateLink: string; origin: string;
  availability: string; productType: string; productCategory?: string; shipping?: string; originFlag?: string; pros: string[]; cons: string[]; description: string;
}
export interface SiteConfig {
  domain: string; isIndexable?: boolean; siteName: string; brand: string; product: string;
  productCategory: string; productFormat: string; tagline: string; affiliateLink: string;
  promoCode: string; originalPrice: string; discountPrice: string; rating: number;
  author: { name: string; avatar: string; bio: string; };
  seo: { title: string; description: string; ogImage: string; };
  analyticsMeasurementId?: string; breadcrumbs: { label: string; href: string }[];
  quickSummary: { assets: string[]; considerations: string[]; };
  pros: string[]; cons: string[]; faq: { question: string; answer: string }[];
  products: Product[]; tocItems: { id: string; label: string }[];
  pages: { type: 'comparatif' | 'blog'; label: string; slug: string }[];
}

const products: Product[] = [
  {
    rank: 1,
    name: 'Electrolytes',
    brand: 'Clearly',
    slug: 'clearly-electrolytes',
    image: '/images/products/clearly-electrolytes.webp',
    brandLogo: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/68dfaffbcd9575da42dea912_67604f816f6f25a217f35605_Clearly_-_Dark_Blue_150x.avif',
    rating: 8.8,
    reviewCount: 1,
    promoCode: 'LMC',
    promoPercent: 15,
    originalPrice: '30.00€',
    discountPrice: '25.50€',
    affiliateLink: 'https://taap.it/clearly-electrolytes',
    origin: '🇳🇱 Nederland',
    availability: 'Online beschikbaar',
    productType: 'Elektrolyten poeder zonder suiker',
    pros: [
      'Nederlandse merkfit en duidelijke elektrolyten positionering',
      'Suikervrij poeder met natrium, kalium, magnesium en calcium',
      'Sterke match voor sport, warmte, reizen, vasten en dagelijks gebruik',
      '60 porties per pot en goede prijs na LMC-code'
    ],
    cons: [
      'Pot is minder handig onderweg dan losse sticks',
      'Minder brede micronutriëntenformule dan IM8',
      'Smaak en zoetheid blijven persoonlijk'
    ],
    description: 'Clearly staat op nummer 1 omdat het de Nederlandse zoekintentie het best raakt: elektrolyten poeder zonder suiker, een duidelijke mineralenlogica, lokale merkfit en een prijs die met de LMC-code logisch wordt voor dagelijks gebruik.'
  },
  {
    rank: 2,
    name: 'Daily Ultimate Essentials',
    brand: 'IM8',
    slug: 'im8',
    image: '/images/electrolytes/im8-product.webp',
    brandLogo: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/69380c53746ebfad67adf684_Header-Logo-New.webp',
    rating: 8.6,
    reviewCount: 500,
    promoCode: 'LMC',
    promoPercent: 10,
    originalPrice: '$112.00',
    discountPrice: '$100.80',
    affiliateLink: 'https://taap.it/im8health',
    origin: '🇺🇸 Verenigde Staten',
    availability: 'Online beschikbaar',
    productType: 'Premium all-in-one drink zonder suiker',
    pros: [
      'Sterkste premiumformule in deze selectie',
      'Hydratatie gecombineerd met bredere micronutriënten',
      'Interessant voor wie meerdere supplementen wil bundelen',
      'Duidelijke daily-use positionering en sterke merkperceptie'
    ],
    cons: [
      'Veel duurder dan klassiek elektrolyten poeder',
      'Niet de meest pure keuze voor alleen natrium en mineralen',
      'Voor incidenteel gebruik waarschijnlijk te uitgebreid'
    ],
    description: 'IM8 staat op plaats 2 omdat het meer is dan een elektrolytenproduct. Het is een premium daily drink voor hydratatie, micronutriënten en routine. Voor wie een high-end alles-in-een zoekt, is dit de sterkste optie.'
  },
  {
    rank: 3,
    name: 'Premium Electrolyte Drink Mix',
    brand: 'Instant Hydration',
    slug: 'instant-hydration',
    image: '/images/electrolytes/instant-product.webp',
    brandLogo: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/697f3f7c667a50a281c9875b_header-logo.webp',
    rating: 8.1,
    reviewCount: 9000,
    promoCode: 'KEVIN01488',
    promoPercent: 10,
    originalPrice: '33.17€',
    discountPrice: '29.85€',
    affiliateLink: 'https://taap.it/instant-hydration',
    origin: '🇺🇸 Verenigde Staten',
    availability: 'Online beschikbaar',
    productType: 'Elektrolyten sticks zonder suiker',
    pros: [
      'Praktische sticks voor sporttas, reizen en warme dagen',
      'Duidelijke focus op natrium, kalium, magnesium en calcium',
      'Zonder suiker en laag in calorieën',
      'Sterke keuze voor porties onderweg'
    ],
    cons: [
      'Per portie meestal duurder dan poeder uit een pot',
      'Zoute smaak kan verdelen',
      'Minder ideaal als je vooral thuis mixt'
    ],
    description: 'Instant Hydration is de beste stick-optie in dit overzicht. Het product is handig voor training, sauna, reizen en hitte. Clearly blijft bovenaan omdat poeder voordeliger en directer aansluit op elektrolyten poeder.'
  },
  {
    rank: 4,
    name: 'Biomimetic All-in-One Multivitamin',
    brand: 'Haura',
    slug: 'haura',
    image: '/images/electrolytes/haura-product.webp',
    brandLogo: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/6977d0fa520868e58a29bb0d_t%C3%A9l%C3%A9charger__1__1-removebg-preview%201.svg',
    rating: 7.9,
    reviewCount: 100,
    promoCode: 'CLUBLIONS',
    promoPercent: 15,
    originalPrice: '$39.00',
    discountPrice: '$33.15',
    affiliateLink: 'https://collabs.shop/fa4rmo',
    origin: '🇨🇭 Zwitserland',
    availability: 'Online beschikbaar',
    productType: 'Suikervrije mineralen- en vitaminendrank',
    pros: [
      'Schone premium positionering met vitamines en mineralen',
      'Suikervrij, vegan en glutenvrij gepositioneerd',
      'Goede fit voor een dagelijkse micronutriëntenroutine',
      'Interessante alternatief voor klassieke elektrolytenproducten'
    ],
    cons: [
      'Geen puur sport-elektrolytenproduct',
      'Minder bekend in Nederland',
      'Niet voor elke koper het meest directe antwoord'
    ],
    description: 'Haura is relevant voor gebruikers die meer zoeken dan alleen elektrolyten. Het past beter bij een dagelijkse mineralen- en vitaminendrank dan bij pure sporthydratie. Daarom staat het onder Clearly, IM8 en Instant Hydration.'
  },
  {
    rank: 5,
    name: 'ElectroBoost',
    brand: 'Punch Power',
    slug: 'punch-power-electroboost',
    image: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/698617a9b49409a4d54b861e_1_-_electroboost_citron_1.webp',
    brandLogo: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/698c4fc5d9578425bda69d73_punchpower-logo-e1693550769341.png',
    rating: 7.5,
    reviewCount: 700,
    promoCode: 'LMC20',
    promoPercent: 20,
    originalPrice: '8.90€',
    discountPrice: '6.68€',
    affiliateLink: 'https://fnty.co/c/r-zPRSqZPp',
    origin: '🇫🇷 Frankrijk',
    availability: 'Online beschikbaar',
    productType: 'Bruistabletten met elektrolyten',
    pros: [
      'Zeer betaalbare sportoptie',
      'Handig bruistabletformaat',
      'Met belangrijke mineralen en vitamines',
      'Goede budgetkeuze voor incidenteel gebruik'
    ],
    cons: [
      'Minder premium dan de topkeuzes',
      'Minder scherp gepositioneerd op elektrolyten poeder',
      'Eenvoudigere formule en sterker sportgericht'
    ],
    description: 'Punch Power is de budgetoptie in de ranking. Het is niet zo premium en niet zo exact als Clearly, maar voor incidentele sportmomenten en prijsbewuste kopers kan het logisch zijn.'
  },
  {
    rank: 6,
    name: 'Electrolytes',
    brand: 'Dayneeds',
    slug: 'dayneeds-electrolytes',
    image: '/images/electrolytes/dayneeds-product.webp',
    brandLogo: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/698e54a13b99cb99781ae979_logo-green.svg',
    rating: 7.3,
    reviewCount: 120,
    promoCode: 'LMC',
    promoPercent: 10,
    originalPrice: '29.95€',
    discountPrice: '26.95€',
    affiliateLink: 'https://dayneeds.com',
    origin: '🇪🇺 Europa',
    availability: 'Online beschikbaar',
    productType: 'Elektrolyten poeder voor sport en dagelijks gebruik',
    pros: [
      'Solide extra kandidaat voor kopers die poeder zoeken',
      'Goede fit voor sport, hitte en dagelijks gebruik',
      'Vult de ranking aan als klassieke alternatief',
      'Eenvoudige instap in de categorie'
    ],
    cons: [
      'Affiliate- en prijslogica minder sterk dan bij Clearly',
      'Minder merkbewijs binnen het LMC-systeem',
      'Niet onze eerste keuze voor conversie'
    ],
    description: 'Dayneeds blijft een nuttige vergelijkingsoptie voor wie meerdere poeders wil bekijken. Het haalt de top 3 niet, maar helpt om Clearly en de premiumalternatieven beter te plaatsen.'
  }
];

const config: SiteConfig = {
  domain: 'https://emd-beste-elektrolyten.pages.dev',
  isIndexable: false,
  siteName: 'Beste Elektrolyten',
  brand: 'Clearly',
  product: 'Electrolytes',
  productCategory: 'Elektrolyten poeder zonder suiker',
  productFormat: 'Poeder',
  tagline: 'De beste elektrolyten helder vergeleken.',
  affiliateLink: products[0].affiliateLink,
  promoCode: products[0].promoCode,
  originalPrice: products[0].originalPrice,
  discountPrice: products[0].discountPrice,
  rating: products[0].rating,
  author: { name: 'Tim', avatar: '/author-avatar.png', bio: 'Tester voor supplementen, hydratatie en sportvoeding sinds 2024.' },
  analyticsMeasurementId: undefined,
  seo: {
    title: 'Beste elektrolyten poeder 2026: Top 6 vergeleken',
    description: 'Beste elektrolyten poeder in Nederland: Clearly, IM8, Instant Hydration, Haura, Punch Power en Dayneeds vergeleken op formule, prijs en gebruik.',
    ogImage: '/og-image.jpg',
  },
  breadcrumbs: [{ label: 'Beste Elektrolyten', href: '/' }],
  quickSummary: {
    assets: ['Top 6 geselecteerd op formule, prijs en gebruik', 'Clearly als beste keuze voor elektrolyten poeder in Nederland', 'IM8 als premium all-in-one alternatief', 'Instant Hydration als beste stick-optie'],
    considerations: ['Niet elk product is een puur sport-elektrolyt', 'Premiumformules kosten meer per portie', 'Je behoefte aan natrium hangt af van zweten, hitte en voeding']
  },
  pros: ['Duidelijke focus op elektrolyten poeder', 'Relevant voor sport, warmte, vasten, reizen en dagelijks gebruik', 'Ranking combineert poeder, sticks en premium daily-formules'],
  cons: ['Sommige producten zijn breder dan klassieke elektrolyten', 'Prijzen en beschikbaarheid kunnen per land veranderen'],
  faq: [
    { question: 'Wat zijn de beste elektrolyten in Nederland?', answer: 'Onze nummer 1 is Clearly, omdat het product de zoekintentie het meest direct beantwoordt: elektrolyten poeder zonder suiker, duidelijke mineralen en een goede prijs na LMC-code. IM8 is de beste premium all-in-one en Instant Hydration de beste stick-optie.' },
    { question: 'Is elektrolyten poeder beter dan een sportdrank?', answer: 'Voor veel situaties wel, vooral als je geen extra suiker wilt. Bij lange duursport kan koolhydraatrijke sportdrank nog steeds nuttig zijn. Voor dagelijks gebruik, hitte, vasten of lichte training is een suikervrij elektrolyten poeder vaak logischer.' },
    { question: 'Wanneer neem je elektrolyten?', answer: 'Elektrolyten zijn vooral interessant bij veel zweten, warm weer, sauna, reizen, sport, low-carb eten of vasten. Wie weinig zweet en gevarieerd eet, heeft ze niet automatisch elke dag nodig.' },
    { question: 'Waar moet je op letten bij elektrolyten poeder?', answer: 'Kijk eerst naar natrium, daarna naar kalium, magnesium, calcium, zoetstoffen, porties, prijs per portie en of het product past bij jouw situatie.' },
    { question: 'Breken elektrolyten het vasten?', answer: 'Veel suikervrije elektrolyten zijn zeer laag in calorieën. Strikt vasten hangt wel af van zoetstoffen, aroma’s en persoonlijke regels. Controleer daarom altijd het etiket.' },
    { question: 'Kun je elke dag elektrolyten nemen?', answer: 'Voor gezonde volwassenen kan matig gebruik passen, vooral bij zweten of hitte. Mensen met nierproblemen, hoge bloeddruk, hartproblemen of medicatie moeten dit eerst medisch afstemmen.' },
  ],
  products,
  tocItems: [{ id: 'introduction', label: 'Korte conclusie' }, { id: 'ranking', label: 'Ranking' }, { id: 'methodiek', label: 'Methodiek' }, { id: 'keuzehulp', label: 'Keuzehulp' }, { id: 'situaties', label: 'Gebruik' }, { id: 'verdict', label: 'Eindoordeel' }, { id: 'faq', label: 'FAQ' }],
  pages: [
    { type: 'comparatif', label: 'Vergelijking', slug: '/' },
    { type: 'blog', label: 'Zonder suiker', slug: '/elektrolyten-zonder-suiker/' },
    { type: 'blog', label: 'Vasten', slug: '/elektrolyten-vasten/' },
    { type: 'blog', label: 'Poeder/tabletten', slug: '/elektrolyten-poeder-of-tabletten/' },
  ],
};

export default config;
