export const slides = [
  {
    id: 0,
    title: "Welcome",
    chapter: "Introduction",
    theme: "hero",
    eyebrow: "East Rutherford, NJ · 3 Million Sq Ft · 40M+ Annual Visitors",
    body: "Where retail, entertainment, dining, and live events converge at a scale never seen before — creating the most ambitious mixed-use destination in North America.",
    image: null,
    logo: "/1efe316670ecd3434ef1d2f0486583ea.svg",
    badges: ["450+ Stores", "55% Entertainment", "Luxury Collection", "Dream Live Venue"]
  },
  {
    id: 1,
    title: "The Opportunity",
    chapter: "Vision",
    theme: "city",
    layout: "split",
    lightText: true,
    eyebrow: "Why American Dream",
    titleMain: "An Unrivaled",
    titleEm: "Opportunity",
    body: "7 miles from Midtown Manhattan. 20 million people within a one-hour drive. The largest retail and entertainment complex in the Northeast.",
    image: "/images/Watches_of_Switzerland__2_.webp",
    stats: [
      { num: 40, suffix: "M+", label: "Annual Visitors" },
      { num: 3, suffix: "M", label: "Square Feet" }
    ],
    facts: [
      { title: "NYC Metro Access", text: "Direct NJ Transit. 33,000 parking spaces. 7 mi from Manhattan." },
      { title: "Premium Demographics", text: "$120K+ avg household income. High-intent, high-spend audience." },
      { title: "89% Leased", text: "Rapid tenant absorption. Strong demand across all categories." }
    ]
  },
  {
    id: 2,
    title: "Retail",
    chapter: "Lifestyle",
    theme: "retail",
    layout: "split-reverse",
    lightText: true,
    eyebrow: "Retail Environment",
    titleMain: "Where Brands",
    titleEm: "Thrive",
    body: "From global flagships to emerging concepts, American Dream offers every format — luxury, mid-tier, pop-up, and flagship — in an environment built to drive conversion.",
    image: "/images/retail_bg.png",
    video: "/videos/Retail_Muted_15min.mp4",

    cta: { text: "Explore Leasing", link: "https://www.americandream.com/" }
  },
  {
    id: 3,
    title: "Luxury Collection",
    chapter: "Lifestyle",
    theme: "luxury",
    layout: "luxury",
    video: "/videos/Retail_Muted_15min.mp4",
    poster: "/images/luxury_bg.png",
    image: "/images/luxury_bg.png",
    eyebrow: "The Luxury Collection",
    titleMain: "Where Luxury Meets",
    titleEm: "40 Million",
    titleSuffix: "Visitors",
    body: "A curated enclave of the world's most prestigious brands, within an architectural environment designed to elevate every interaction.",
    brands: [
      { id: "hermes", name: "HERMÈS", image: "/images/Hermes___2_.webp" },
      { id: "saint-laurent", name: "SAINT LAURENT", image: "/images/240808_Saint_Laurent_-_Desktop.webp" },
      { id: "balenciaga", name: "BALENCIAGA", image: "/images/Balenciaga_1333.webp" },
      { id: "gucci", name: "GUCCI", image: "/images/Avenue_Gucci_Desktop1333x952.webp" },
      { id: "dolce", name: "DOLCE & GABBANA", image: "/images/Shops-Web_Dolce-Desktop.webp" },
      { id: "cartier", name: "CARTIER", image: "/images/Watches_of_Switzerland__2_.webp" }
    ]
  },
  {
    id: 4,
    title: "Dining & Lifestyle",
    chapter: "Lifestyle",
    theme: "dining",
    layout: "split",
    lightText: true,
    image: "/images/dining_bg.png",
    video: "/videos/Dining_Muted_720p.mp4",
    eyebrow: "Dining & Lifestyle",
    titleMain: "Food Is The",
    titleEm: "Destination",
    body: "100+ dining options — from Michelin-caliber experiences to global street food, anchored by H-Mart and curated food halls. Every meal is an event.",
    diningHighlights: [
      { tag: "Fine Dining", text: "Elevated culinary experiences" },
      { tag: "Casual", text: "Global flavors & fast-casual" },
      { tag: "Market", text: "H-Mart anchor grocer" },
      { tag: "Nightlife", text: "Bars, lounges & social" }
    ]
  },
  {
    id: 5,
    title: "Events & Platform",
    chapter: "Partnerships",
    theme: "events",
    layout: "split-reverse",
    lightText: true,
    video: "/videos/Events_Hero___May_25_desktop_compressed.mp4",
    image: "/images/MicrosoftTeams-image__122_.png",
    eyebrow: "Events & Platform",
    titleMain: "Your Audience Is",
    titleEm: "Already Here",
    body: "Concerts, brand activations, celebrity appearances, esports tournaments, seasonal spectacles. American Dream isn't just a venue — it's a platform with 40 million built-in viewers.",
    eventTypes: [
      { title: "Live Music", text: "Headline concerts at Dream Live" },
      { title: "Brand Activation", text: "Immersive pop-up experiences" },
      { title: "Corporate", text: "Expos, conferences & team events" },
      { title: "Seasonal", text: "Year-round programming" }
    ],
    cta: { text: "Book Your Event", link: "https://www.americandream.com/" }
  },
  {
    id: 6,
    title: "Get in Touch",
    chapter: "Contact",
    theme: "contact",
    layout: "contact",
    image: "/images/MicrosoftTeams-image__122_.png",
    imageOpacity: 0.3,
    eyebrow: "Let's Talk",
    titleMain: "Let's Build Something",
    titleEm: "Extraordinary",
    body: "Whether you're exploring a retail lease, planning a brand activation, or booking a world-class venue — we'd love to start the conversation.",
    contactCards: [
      { link: "https://www.americandream.com/", title: "Leasing Inquiry", text: "Luxury, flagship, specialty, or pop-up" },
      { link: "https://www.americandream.com/", title: "Sponsorship", text: "Align your brand with 40M visitors" },
      { link: "https://www.americandream.com/", title: "Event Booking", text: "Dream Live & custom experiences" }
    ],
    socials: [],
  }
];

export const modalData = {
  brand: {
    hermes: {
      title: 'HERMÈS',
      eyebrow: 'The Luxury Collection',
      image: '/images/Hermes___2_.webp',
      body: 'A flagship destination for the iconic French luxury house. Part of American Dream’s architectural Avenue, offering an unrivaled selection of leather goods, fashion, and lifestyle accessories.',
      stats: [
        { val: 'Flagship', label: 'Store Format' },
        { val: 'The Avenue', label: 'Location' },
        { val: 'Premium', label: 'Experience' },
        { val: 'Iconic', label: 'Heritage' }
      ]
    },
    'saint-laurent': {
      title: 'SAINT LAURENT',
      eyebrow: 'The Luxury Collection',
      image: '/images/240808_Saint_Laurent_-_Desktop.webp',
      body: 'Saint Laurent represents the ultimate in modern Parisian chic. Experience the brands full range of fashion and accessories in a stunning architectural setting.',
      stats: [
        { val: 'Flagship', label: 'Store Format' },
        { val: 'The Avenue', label: 'Location' },
        { val: 'Luxury', label: 'Category' }
      ]
    },
    balenciaga: {
      title: 'BALENCIAGA',
      eyebrow: 'The Luxury Collection',
      image: '/images/Balenciaga_1333.webp',
      body: 'Founded in Spain and based in Paris, Balenciaga has a reputation as a couturier of uncompromising standards.',
      stats: [
        { val: 'The Avenue', label: 'Location' },
        { val: 'Avant-Garde', label: 'Style' }
      ]
    },
    gucci: {
      title: 'GUCCI',
      eyebrow: 'The Luxury Collection',
      image: '/images/Avenue_Gucci_Desktop1333x952.webp',
      body: 'Influential, innovative and progressive, Gucci is reinventing a wholly modern approach to fashion.',
      stats: [
        { val: 'The Avenue', label: 'Location' },
        { val: 'Iconic', label: 'Brand' }
      ]
    },
    dolce: {
      title: 'DOLCE & GABBANA',
      eyebrow: 'The Luxury Collection',
      image: '/images/Shops-Web_Dolce-Desktop.webp',
      body: 'Dolce & Gabbana is the dream: a luxury brand that is distinguished by its stylistic originality in combination with the superior sartorial content of its creations.',
      stats: [
        { val: 'The Avenue', label: 'Location' },
        { val: 'Italian', label: 'Heritage' }
      ]
    },
    watches: {
      title: 'WATCHES OF SWITZERLAND',
      eyebrow: 'The Luxury Collection',
      image: '/images/Watches_of_Switzerland__2_.webp',
      body: 'A global leader in the luxury watch market, providing a curated selection of the worlds finest timepieces.',
      stats: [
        { val: 'The Avenue', label: 'Location' },
        { val: 'Premium', label: 'Timepieces' }
      ]
    }
  },
  attraction: {
    nick: {
      title: 'Nickelodeon Universe',
      eyebrow: 'Theme Park',
      image: '/images/Nick_U_Review_500.webp',
      body: 'Experience the largest indoor theme park in North America. Home to record-breaking coasters and your favorite Nickelodeon characters.',
      stats: [
        { val: '7 Acres', label: 'Total Area' },
        { val: '35+', label: 'Rides & Attractions' },
        { val: '3', label: 'World Records' },
        { val: '365', label: 'Days Open' }
      ]
    },
    water: {
      title: 'DreamWorks Water Park',
      eyebrow: 'Water Park',
      image: "/images/Nick_U_Review_500.webp",
      body: 'The largest indoor water park in North America. Featuring the worlds tallest indoor body slide and a massive wave pool.',
      stats: [
        { val: '8.5 Acres', label: 'Total Area' },
        { val: '40+', label: 'Slides' },
        { val: '84°F', label: 'Year-Round Temp' },
        { val: '1.5M', label: 'Gallons of Water' }
      ]
    },
    snow: {
      title: 'Big SNOW American Dream',
      eyebrow: 'Indoor Skiing',
      image: '/images/MicrosoftTeams-image__122_.png',
      body: 'North America’s first and only indoor, real-snow year-round ski and snowboard resort. Perfect for beginners and pros alike.',
      stats: [
        { val: '180,000', label: 'Square Feet' },
        { val: '16 Stories', label: 'Total Height' },
        { val: '28°F', label: 'Constant Temp' },
        { val: '4 Acres', label: 'Snow Surface' }
      ]
    },
    sea: {
      title: 'SEA LIFE Aquarium',
      eyebrow: 'Aquarium',
      image: '/images/MicrosoftTeams-image__122_.png',
      body: 'Explore an underwater world with a City Under the Sea theme. Features a 180-degree ocean tunnel and interactive touch pools.',
      stats: [
        { val: '3,000+', label: 'Creatures' },
        { val: '10+', label: 'Exhibits' },
        { val: '180°', label: 'Ocean Tunnel' },
        { val: 'NYC', label: 'Themed Decor' }
      ]
    },
    rink: {
      title: 'The Rink',
      eyebrow: 'Ice Skating',
      image: '/images/MicrosoftTeams-image__122_.png',
      body: 'An NHL-regulation size ice rink perfect for public skating, figure skating, and hockey. Located in the heart of the complex.',
      stats: [
        { val: 'NHL', label: 'Regulation Size' },
        { val: '200+', label: 'Skate Rentals' },
        { val: 'Public', label: 'Sessions Daily' },
        { val: 'Events', label: 'Private Rentals' }
      ]
    },
    lego: {
      title: 'LEGOLAND Discovery Center',
      eyebrow: 'Family Fun',
      image: '/images/MicrosoftTeams-image__122_.png',
      body: 'The ultimate indoor LEGO playground. Features a 4D cinema, MINILAND, and multiple build-and-play zones for the whole family.',
      stats: [
        { val: '10+', label: 'Play Zones' },
        { val: '4D', label: 'Cinema' },
        { val: 'Millions', label: 'LEGO Bricks' },
        { val: 'MINILAND', label: 'NYC Models' }
      ]
    }
  }
};
