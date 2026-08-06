const BASE_URL = 'https://mcnwebservices.com';
const TODAY = '2026-08-06';

const ORG = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'MCN Webservices',
  url: `${BASE_URL}/`,
  logo: `${BASE_URL}/assets/img/favicon.svg`,
  description:
    'MCN Webservices is a full-service digital agency covering web design and development, AI automation, app development, SEO, and GEO (Generative Engine Optimization).',
  email: 'hello@mcnwebservices.com',
  sameAs: [],
};

function serviceSchema({ name, description, serviceType }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    serviceType,
    description,
    provider: { '@type': 'Organization', name: 'MCN Webservices', url: `${BASE_URL}/` },
    areaServed: 'US',
  };
}

function faqSchema(qas) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: qas.map((qa) => ({
      '@type': 'Question',
      name: qa.q,
      acceptedAnswer: { '@type': 'Answer', text: qa.a },
    })),
  };
}

const HOME_CRUMB = { label: 'Home', href: 'index.html' };

const pages = [
  {
    slug: 'index',
    activeNav: 'home',
    title: 'Web Design, AI Automation & SEO Agency | MCN Webservices',
    description:
      'MCN Webservices builds high-converting websites and apps, automates workflows with AI, and gets you ranking in Google and AI search (GEO). Get a free quote.',
    bodyFile: 'home.html',
    schema: [
      ORG,
      { '@context': 'https://schema.org', '@type': 'WebSite', name: 'MCN Webservices', url: `${BASE_URL}/` },
      {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: 'MCN Webservices',
        url: `${BASE_URL}/`,
        description: 'Web design and development, AI automation, app development, SEO and GEO services for growing businesses.',
        email: 'hello@mcnwebservices.com',
        telephone: '+1-000-000-0000',
        priceRange: '$$',
        areaServed: 'US',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Services',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Design & Development' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Automation' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'App Development' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'GEO (Generative Engine Optimization)' } },
          ],
        },
      },
    ],
    lastmod: TODAY,
    priority: '1.0',
  },
  {
    slug: 'web-design-development',
    activeNav: 'web-design-development',
    title: 'Web Design & Development Services | MCN Webservices',
    description:
      'Custom website design and development that converts: responsive builds, WordPress and Shopify, and speed-optimized code built to turn visitors into customers.',
    bodyFile: 'web-design-development.html',
    breadcrumbs: [HOME_CRUMB, { label: 'Web Design & Development' }],
    schema: [
      ORG,
      serviceSchema({
        name: 'Web Design & Development',
        serviceType: 'Web Design and Development',
        description: 'Custom website design and development, from marketing sites to complex web applications.',
      }),
      faqSchema([
        {
          q: 'How much does a custom website cost?',
          a: 'Most marketing websites with MCN Webservices start at $1,500 for up to 5 pages. Larger sites, e-commerce builds, and custom web apps are scoped individually based on features and integrations.',
        },
        {
          q: 'How long does a website project take?',
          a: 'A standard marketing website takes 3 to 5 weeks from kickoff to launch. Custom web applications and larger e-commerce builds typically take 6 to 12 weeks depending on scope.',
        },
        {
          q: 'Do you build on WordPress, Shopify, or custom code?',
          a: 'We build on whichever platform fits the goal: WordPress for content-heavy sites, Shopify for e-commerce, and custom code (Next.js) when performance or specific functionality matters most.',
        },
        {
          q: 'Will my new website be optimized for SEO?',
          a: 'Yes. Every site we build ships with clean semantic HTML, fast load times, mobile-first responsive design, and on-page SEO basics in place: title tags, meta descriptions, and structured data.',
        },
      ]),
    ],
    lastmod: TODAY,
    priority: '0.9',
  },
  {
    slug: 'ai-automation',
    activeNav: 'ai-automation',
    title: 'AI Automation Services for Business | MCN Webservices',
    description:
      'AI automation services that handle lead follow-up, scheduling, and support around the clock. Custom AI agents and workflows built around how your team works.',
    bodyFile: 'ai-automation.html',
    breadcrumbs: [HOME_CRUMB, { label: 'AI Automation' }],
    schema: [
      ORG,
      serviceSchema({
        name: 'AI Automation',
        serviceType: 'AI Automation and Workflow Automation',
        description: 'Custom AI agents and workflow automation for lead follow-up, scheduling, support, and reporting.',
      }),
      faqSchema([
        {
          q: 'What business processes can you automate with AI?',
          a: 'We commonly automate lead follow-up and qualification, appointment scheduling, customer support responses, and recurring reporting, connected to the CRM, calendar, and email tools you already use.',
        },
        {
          q: 'Do I need technical staff to run an AI automation?',
          a: 'No. We build, test, and hand off the automation with documentation, and monitor it during the first weeks after launch to make sure it is behaving the way your team expects.',
        },
        {
          q: 'Is an AI chatbot the same as AI automation?',
          a: 'A chatbot is one type of AI automation. Our automations also run in the background with no chat interface at all, for example automatically qualifying a lead and routing it to the right salesperson.',
        },
        {
          q: 'How is AI automation priced?',
          a: 'A single automation is typically included as part of our Growth package, priced from $3,500 plus $600 per month. Larger multi-workflow automation suites are scoped as part of a custom Scale engagement.',
        },
      ]),
    ],
    lastmod: TODAY,
    priority: '0.9',
  },
  {
    slug: 'app-development',
    activeNav: 'app-development',
    title: 'App Development Agency: iOS, Android, Web | MCN',
    description:
      'App development for iOS, Android, and the web. MCN Webservices builds native and cross-platform apps from MVP through full-scale product, backed by solid APIs.',
    bodyFile: 'app-development.html',
    breadcrumbs: [HOME_CRUMB, { label: 'App Development' }],
    schema: [
      ORG,
      serviceSchema({
        name: 'App Development',
        serviceType: 'Mobile and Web Application Development',
        description: 'Native, cross-platform, and progressive web app development from MVP to full-scale product.',
      }),
      faqSchema([
        {
          q: 'Should I build a native app or a cross-platform app?',
          a: 'Cross-platform frameworks cover most business apps at a lower cost and faster timeline. Native development makes sense when you need deep device integration or the highest possible performance.',
        },
        {
          q: 'What is a Progressive Web App and do I need one?',
          a: 'A Progressive Web App runs in the browser but behaves like an installed app, with offline support and push notifications. It is a good fit when you want app-like features without an App Store listing.',
        },
        {
          q: 'Can you build the backend and API, not just the app screens?',
          a: 'Yes. We design and build the backend, database, and API alongside the app itself, so authentication, payments, and data sync are handled as one connected system.',
        },
        {
          q: 'How do you scope an MVP versus a full product build?',
          a: 'We start by identifying the smallest feature set that proves the core idea works, ship that as the MVP, then plan additional features in phases based on real user feedback.',
        },
      ]),
    ],
    lastmod: TODAY,
    priority: '0.9',
  },
  {
    slug: 'seo',
    activeNav: 'seo',
    title: 'SEO Services & Search Optimization | MCN Webservices',
    description:
      'SEO services covering technical fixes, on-page optimization, and content strategy to help you rank higher and keep ranking through algorithm updates.',
    bodyFile: 'seo.html',
    breadcrumbs: [HOME_CRUMB, { label: 'SEO' }],
    schema: [
      ORG,
      serviceSchema({
        name: 'SEO',
        serviceType: 'Search Engine Optimization',
        description: 'Technical SEO, on-page optimization, and content strategy for organic search growth.',
      }),
      faqSchema([
        {
          q: 'How long does SEO take to show results?',
          a: 'Technical fixes can improve crawlability within weeks, but meaningful ranking movement for competitive keywords typically takes 3 to 6 months of consistent technical and content work.',
        },
        {
          q: 'What is included in a technical SEO audit?',
          a: 'We check crawlability, indexing, Core Web Vitals, structured data, internal linking, and duplicate content, then prioritize fixes by how much each one is likely to move rankings.',
        },
        {
          q: 'Do you write content, or only handle technical SEO?',
          a: 'Both. We handle technical fixes and on-page optimization, and we plan and write content mapped to keywords your target customers are actually searching for.',
        },
        {
          q: 'How is SEO different from GEO?',
          a: 'SEO targets rankings in traditional search engines like Google. GEO (Generative Engine Optimization) targets citations inside AI answers from tools like ChatGPT and Perplexity. We run both together.',
        },
      ]),
    ],
    lastmod: TODAY,
    priority: '0.9',
  },
  {
    slug: 'geo',
    activeNav: 'geo',
    title: 'GEO Services: Generative Engine Optimization | MCN',
    description:
      'GEO services get your brand cited by ChatGPT, Gemini, and Perplexity. Structured content and schema markup built for AI search visibility, not just Google.',
    bodyFile: 'geo.html',
    breadcrumbs: [HOME_CRUMB, { label: 'GEO' }],
    schema: [
      ORG,
      serviceSchema({
        name: 'GEO (Generative Engine Optimization)',
        serviceType: 'Generative Engine Optimization',
        description: 'Content structuring, schema markup, and AI crawler configuration to earn citations in AI-generated answers.',
      }),
      faqSchema([
        {
          q: 'What does GEO actually mean?',
          a: 'GEO, or Generative Engine Optimization, is the practice of structuring your content and technical setup so AI tools like ChatGPT, Gemini, and Perplexity can find it, understand it, and cite it in their answers.',
        },
        {
          q: 'Is GEO a replacement for SEO?',
          a: 'No. GEO builds on top of SEO. A page still needs to be crawlable, fast, and well structured to rank in Google, and GEO adds the answer-first structure and schema that get it cited inside AI responses too.',
        },
        {
          q: 'How do I know if my site is blocking AI crawlers?',
          a: 'We check your robots.txt and CDN or firewall settings against every major AI crawler, including GPTBot, ClaudeBot, PerplexityBot, and Google-Extended, since a firewall can silently block a crawler your robots.txt allows.',
        },
        {
          q: 'How do you measure GEO results?',
          a: 'We track whether your brand is mentioned or recommended for a set of target questions across ChatGPT, Perplexity, Claude, and Gemini on a monthly basis, alongside standard organic search metrics.',
        },
      ]),
    ],
    lastmod: TODAY,
    priority: '0.9',
  },
  {
    slug: 'work',
    activeNav: 'work',
    title: 'Our Work: Web, App & AI Projects | MCN Webservices',
    description:
      'See the kind of web design, app development, AI automation, SEO, and GEO work MCN Webservices delivers, with the outcomes each project was built to drive.',
    bodyFile: 'work.html',
    breadcrumbs: [HOME_CRUMB, { label: 'Work' }],
    schema: [ORG],
    lastmod: TODAY,
    priority: '0.8',
  },
  {
    slug: 'about',
    activeNav: 'about',
    title: 'About MCN Webservices | Web & AI Growth Agency',
    description:
      'MCN Webservices combines web design, app development, AI automation, SEO, and GEO under one roof. Here is how we work and why clients stay with us long term.',
    bodyFile: 'about.html',
    breadcrumbs: [HOME_CRUMB, { label: 'About' }],
    schema: [ORG, { '@context': 'https://schema.org', '@type': 'AboutPage', name: 'About MCN Webservices', url: `${BASE_URL}/about.html` }],
    lastmod: TODAY,
    priority: '0.7',
  },
  {
    slug: 'pricing',
    activeNav: 'pricing',
    title: 'Pricing & Plans | Web Design & AI Automation Agency',
    description:
      'Transparent starting prices for website design, AI automation, and ongoing SEO and GEO programs. See what is included in each package before you book a call.',
    bodyFile: 'pricing.html',
    breadcrumbs: [HOME_CRUMB, { label: 'Pricing' }],
    schema: [ORG],
    lastmod: TODAY,
    priority: '0.8',
  },
  {
    slug: 'faq',
    activeNav: 'faq',
    title: 'FAQ: Web Design, AI Automation & SEO Agency | MCN',
    description:
      'Answers to common questions about working with MCN Webservices: timelines, pricing, what SEO and GEO actually mean, and how our AI automation projects work.',
    bodyFile: 'faq.html',
    breadcrumbs: [HOME_CRUMB, { label: 'FAQ' }],
    schema: [
      ORG,
      faqSchema([
        {
          q: "What's the difference between SEO and GEO?",
          a: 'SEO optimizes your site to rank in traditional search engines like Google. GEO (Generative Engine Optimization) optimizes your content and structured data so AI tools like ChatGPT, Gemini and Perplexity cite and recommend your brand directly in their answers. We run both together for maximum visibility.',
        },
        {
          q: 'How long does a typical website project take?',
          a: 'Most marketing websites take 3 to 5 weeks from kickoff to launch. Larger web apps and custom platforms are scoped individually based on complexity.',
        },
        {
          q: 'Can you automate our existing business processes?',
          a: 'Yes, we build custom AI automations for lead follow-up, scheduling, support, reporting and more, integrated with the tools you already use (CRM, calendar, email, etc.).',
        },
        {
          q: 'Do you work with businesses outside a specific industry?',
          a: 'We work across industries, including local services, healthcare, real estate, e-commerce and SaaS, adapting our approach to what actually moves the needle for your business.',
        },
        {
          q: 'What do you need from us to get started?',
          a: "Just a short discovery call. We'll ask about your goals, current platform, and target audience, then send over a proposal and timeline within days.",
        },
        {
          q: 'Do you offer ongoing support after launch?',
          a: 'Yes. Growth and Scale packages include ongoing SEO, AI automation monitoring, and monthly reporting. Starter clients can add ongoing support at any time.',
        },
        {
          q: 'Can you work with our existing website instead of rebuilding it?',
          a: 'Often, yes. If the existing site is technically sound, we can layer in SEO, GEO, and AI automation without a full rebuild. We will tell you honestly if a rebuild is the faster path.',
        },
        {
          q: 'Do you require long-term contracts?',
          a: 'One-time project work (like a website build) has no ongoing contract. Monthly SEO, GEO, and AI automation retainers are month-to-month after an initial 3-month minimum, since that is roughly how long it takes to see reliable movement.',
        },
      ]),
    ],
    lastmod: TODAY,
    priority: '0.7',
  },
  {
    slug: 'contact',
    activeNav: 'contact',
    title: 'Contact Us for a Free Quote | MCN Webservices',
    description:
      'Get in touch with MCN Webservices for a free quote on web design, app development, AI automation, SEO, or GEO. We reply within one business day.',
    bodyFile: 'contact.html',
    breadcrumbs: [HOME_CRUMB, { label: 'Contact' }],
    schema: [ORG, { '@context': 'https://schema.org', '@type': 'ContactPage', name: 'Contact MCN Webservices', url: `${BASE_URL}/contact.html` }],
    lastmod: TODAY,
    priority: '0.8',
  },
  {
    slug: 'privacy',
    activeNav: 'privacy',
    title: 'Privacy Policy | MCN Webservices',
    description:
      'How MCN Webservices collects, uses, and protects information submitted through this website, including contact forms and analytics.',
    bodyFile: 'privacy.html',
    breadcrumbs: [HOME_CRUMB, { label: 'Privacy Policy' }],
    schema: [ORG],
    lastmod: TODAY,
    priority: '0.3',
  },
  {
    slug: 'terms',
    activeNav: 'terms',
    title: 'Terms of Service | MCN Webservices',
    description: 'The terms that govern your use of the MCN Webservices website and the services we provide to clients.',
    bodyFile: 'terms.html',
    breadcrumbs: [HOME_CRUMB, { label: 'Terms of Service' }],
    schema: [ORG],
    lastmod: TODAY,
    priority: '0.3',
  },
];

module.exports = { pages, ORG, BASE_URL };
