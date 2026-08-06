# CLAUDE.md — MCN Webservices Site Rules

Applies to: all content in this repo (HTML, CSS, JS, markdown, meta tags, JSON-LD text fields).

## Site structure (read this before editing any page)

This is a multi-page static site generated from a small build script. **Never hand-edit the
generated `.html` files in the project root** (index.html, about.html, work.html, etc.) -
they are overwritten by every build.

- Page content lives in `build/pages/*.html` (body fragments only, no header/footer/head)
- Header and footer live in `build/partials.js` (single source, shared by every page)
- Per-page metadata (title, description, schema, breadcrumbs) lives in `build/pages.config.js`
- After editing anything in `build/`, regenerate the site: `node build/build.js`
- This also regenerates `sitemap.xml` automatically from `pages.config.js`

To add a new page: add a body fragment in `build/pages/`, add an entry to the `pages` array
in `build/pages.config.js`, add a nav link in `build/partials.js` if it belongs in the header
or footer, then run the build.

---

## Writing style

- **Never use an em dash ("—") in any content.** Rewrite with a period, comma, colon, or
  "and"/"but" instead. This applies to visible copy, meta descriptions, OG/Twitter tags,
  JSON-LD text fields, code comments, and any markdown files in this repo.
  - Bad: "We build websites — fast, clean, effective."
  - Good: "We build websites that are fast, clean, and effective."
- No filler intros ("In today's world...", "When it comes to...").
- Short paragraphs and sentences. Answer-first where the copy is making a claim.

## SEO contract (do not break on any edit)

- Title tag: unique, 50 to 60 characters, primary keyword in the first 3 words.
- Meta description: unique, 150 to 160 characters.
- Canonical URL present and absolute.
- One H1 per page, sequential H2/H3 hierarchy, no skipped levels.
- All images have descriptive alt text.
- JSON-LD (Organization, WebSite, ProfessionalService, FAQPage) stays valid; re-check with
  Google's Rich Results Test after any structural change.
- robots.txt, sitemap.xml, and llms.txt stay in sync with any new page or removed section.

## Content honesty

- Do not invent client names, testimonials, statistics, or "according to [source]" citations.
  If a stat is illustrative rather than sourced, either remove it or keep it generic. Never
  attach a fabricated source and year to make it look verified.
