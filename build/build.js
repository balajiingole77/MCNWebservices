const fs = require('fs');
const path = require('path');
const { header, footer, breadcrumb, breadcrumbSchema } = require('./partials');
const { pages } = require('./pages.config');

const ROOT = path.resolve(__dirname, '..');
const PAGES_DIR = path.join(__dirname, 'pages');
const BASE_URL = 'https://mcnwebservices.com';

function readFragment(file) {
  return fs.readFileSync(path.join(PAGES_DIR, file), 'utf8').trim();
}

function jsonLd(obj) {
  return `<script type="application/ld+json">\n${JSON.stringify(obj, null, 2)}\n</script>`;
}

function renderHead(page) {
  const canonical = `${BASE_URL}/${page.slug === 'index' ? '' : page.slug + '.html'}`;
  const ogImage = `${BASE_URL}/assets/img/og-image.png`;

  const schemas = [...page.schema];
  if (page.breadcrumbs) {
    schemas.push(breadcrumbSchema(page.breadcrumbs, BASE_URL));
  }

  return `<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${page.title}</title>
<meta name="description" content="${page.description}">
<link rel="canonical" href="${canonical}">
<link rel="icon" href="assets/img/favicon.svg" type="image/svg+xml">
<link rel="alternate" type="text/plain" title="LLM-friendly site guide" href="/llms.txt">

<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:site_name" content="MCN Webservices">
<meta property="og:url" content="${canonical}">
<meta property="og:title" content="${page.ogTitle || page.title}">
<meta property="og:description" content="${page.ogDescription || page.description}">
<meta property="og:image" content="${ogImage}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${page.ogTitle || page.title}">
<meta name="twitter:description" content="${page.ogDescription || page.description}">
<meta name="twitter:image" content="${ogImage}">

<meta name="theme-color" content="#100e1c">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Sora:wght@500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="assets/css/style.css">

${schemas.map((s) => jsonLd(s)).join('\n\n')}`;
}

function renderPage(page) {
  const bodyFragment = readFragment(page.bodyFile);
  const crumbHtml = page.breadcrumbs && page.breadcrumbs.length > 1 ? breadcrumb(page.breadcrumbs) : '';

  return `<!DOCTYPE html>
<html lang="en">
<head>
${renderHead(page)}
</head>
<body>

${header(page.activeNav)}

<main id="main-content">
${crumbHtml}
${bodyFragment}
</main>

${footer()}

<script src="assets/js/main.js"></script>
</body>
</html>
`;
}

function buildSitemap() {
  const urls = pages
    .filter((p) => p.sitemap !== false)
    .map((p) => {
      const loc = `${BASE_URL}/${p.slug === 'index' ? '' : p.slug + '.html'}`;
      return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${p.lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${p.priority || '0.7'}</priority>\n  </url>`;
    })
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

function render404() {
  const bodyFragment = readFragment('404.html');
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Page Not Found | MCN Webservices</title>
<meta name="robots" content="noindex,follow">
<link rel="icon" href="assets/img/favicon.svg" type="image/svg+xml">
<meta name="theme-color" content="#100e1c">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Sora:wght@500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="assets/css/style.css">
</head>
<body>

${header(null)}

<main id="main-content">
${bodyFragment}
</main>

${footer()}

<script src="assets/js/main.js"></script>
</body>
</html>
`;
}

function main() {
  let written = 0;
  for (const page of pages) {
    const outPath = path.join(ROOT, `${page.slug}.html`);
    fs.writeFileSync(outPath, renderPage(page));
    written++;
  }
  fs.writeFileSync(path.join(ROOT, '404.html'), render404());
  written++;
  fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), buildSitemap());
  console.log(`Built ${written} pages + sitemap.xml`);
}

main();
