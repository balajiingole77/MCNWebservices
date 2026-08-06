const NAV_LINKS = [
  { id: 'work', label: 'Work', href: 'work.html' },
  { id: 'pricing', label: 'Pricing', href: 'pricing.html' },
  { id: 'about', label: 'About', href: 'about.html' },
  { id: 'faq', label: 'FAQ', href: 'faq.html' },
  { id: 'contact', label: 'Contact', href: 'contact.html' },
];

const SERVICE_LINKS = [
  { id: 'web-design-development', label: 'Web Design & Development', href: 'web-design-development.html' },
  { id: 'ai-automation', label: 'AI Automation', href: 'ai-automation.html' },
  { id: 'app-development', label: 'App Development', href: 'app-development.html' },
  { id: 'seo', label: 'SEO', href: 'seo.html' },
  { id: 'geo', label: 'GEO (AI Search)', href: 'geo.html' },
];

function logoMark(id) {
  return `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="30" height="30" rx="8" fill="url(#${id})"/>
          <path d="M7 21V9l8 7 8-7v12" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
          <defs><linearGradient id="${id}" x1="0" y1="0" x2="30" y2="30" gradientUnits="userSpaceOnUse">
            <stop stop-color="#8B7CFF"/><stop offset="1" stop-color="#6F5CF6"/>
          </linearGradient></defs>
        </svg>`;
}

function header(activeId) {
  const servicesActive = SERVICE_LINKS.some((l) => l.id === activeId);
  const navItems = NAV_LINKS.map(
    (l) => `      <a href="${l.href}"${l.id === activeId ? ' class="active" aria-current="page"' : ''}>${l.label}</a>`
  ).join('\n');
  const serviceItems = SERVICE_LINKS.map(
    (l) => `        <a href="${l.href}"${l.id === activeId ? ' class="active" aria-current="page"' : ''}>${l.label}</a>`
  ).join('\n');

  return `<header class="site-header" id="header">
  <div class="container header-inner">
    <a href="index.html" class="brand">
      <span class="brand-mark" aria-hidden="true">
        ${logoMark('gradLogo')}
      </span>
      <span class="brand-name">MCN <span>Webservices</span></span>
    </a>

    <nav class="main-nav" id="mainNav" aria-label="Primary">
      <div class="nav-dropdown${servicesActive ? ' active' : ''}">
        <button class="nav-dropdown-toggle" aria-expanded="false" aria-haspopup="true">
          Services <span class="nav-caret" aria-hidden="true">&#9662;</span>
        </button>
        <div class="nav-dropdown-menu">
${serviceItems}
        </div>
      </div>
${navItems}
    </nav>

    <div class="header-actions">
      <a href="contact.html" class="btn btn-primary btn-sm">Get a Free Quote</a>
      <button class="nav-toggle" id="navToggle" aria-label="Toggle menu" aria-expanded="false" aria-controls="mainNav">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</header>`;
}

function footer() {
  const serviceItems = SERVICE_LINKS.map((l) => `      <a href="${l.href}">${l.label}</a>`).join('\n');
  return `<footer class="site-footer">
  <div class="container footer-inner">
    <div class="footer-brand">
      <a href="index.html" class="brand">
        <span class="brand-mark" aria-hidden="true">
          ${logoMark('gradLogo2')}
        </span>
        <span class="brand-name">MCN <span>Webservices</span></span>
      </a>
      <p>Web design and development, AI automation, app development, SEO and GEO, all under one roof.</p>
    </div>

    <div class="footer-col">
      <h4>Services</h4>
${serviceItems}
    </div>

    <div class="footer-col">
      <h4>Company</h4>
      <a href="about.html">About</a>
      <a href="work.html">Our Work</a>
      <a href="pricing.html">Pricing</a>
      <a href="faq.html">FAQ</a>
      <a href="contact.html">Contact</a>
    </div>

    <div class="footer-col">
      <h4>Connect</h4>
      <a href="mailto:hello@mcnwebservices.com">hello@mcnwebservices.com</a>
      <a href="tel:+10000000000">+1 (000) 000-0000</a>
    </div>
  </div>
  <div class="container footer-bottom">
    <span>&copy; <span id="year"></span> MCN Webservices. All rights reserved.</span>
    <div class="footer-legal"><a href="privacy.html">Privacy Policy</a><a href="terms.html">Terms of Service</a></div>
  </div>
</footer>

<a href="contact.html" class="back-to-top" id="backToTop" aria-label="Back to top">&uarr;</a>`;
}

function breadcrumb(items) {
  // items: [{label, href}] — last item has no href (current page)
  const parts = items
    .map((item, i) => {
      if (i === items.length - 1) {
        return `<span aria-current="page">${item.label}</span>`;
      }
      return `<a href="${item.href}">${item.label}</a>`;
    })
    .join('<span class="crumb-sep" aria-hidden="true">/</span>');
  return `<nav class="breadcrumb container" aria-label="Breadcrumb">${parts}</nav>`;
}

function breadcrumbSchema(items, baseUrl) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      item: item.href ? `${baseUrl}/${item.href}` : undefined,
    })).map((it) => {
      if (!it.item) delete it.item;
      return it;
    }),
  };
}

module.exports = { header, footer, breadcrumb, breadcrumbSchema, NAV_LINKS, SERVICE_LINKS };
