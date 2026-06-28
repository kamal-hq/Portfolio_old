# Portfolio Rebuild — Progress Tracker

## Phase 1 — Certificates architecture
- [x] 1. Create `assets/data/certificates.js` listing every certificate from `pages/certificates.html` — **Done.** 56 certificates extracted with title, fullTitle, category, provider, thumbnail, fullImage, and loading attributes. File: `assets/data/certificates.js`.
- [x] 2. Write render function in `script.js` that builds certificate cards from data file on page load — **Done.** `renderCertificates()` and `buildCertCard()` functions added. Called inside `DOMContentLoaded`. File: `JavaScript/script.js`.
- [x] 3. Replace hand-written HTML cards in `certificates.html` with a single container the render function populates — **Done.** ~900 lines of hand-coded cards replaced with empty `<div class="cert-grid" id="certGrid">`. Data script loaded before script.js. File: `pages/certificates.html`.
- [x] 4. Remove `onclick=""` attributes and `window.*` global function attachments; replace with `addEventListener`-based event handling — **Done.** Zero `onclick` attributes remain in certificates.html. `window.openLightbox` removed from script.js; lightbox open/close now uses `addEventListener`. Only `window.innerWidth` (a browser API read) remains.

### Phase 1 Verification Results
- ✅ Certificate count: 56 in data file = 56 in original HTML
- ✅ Category breakdown matches: ai-data(19), marketing(10), programming(10), finance(10), others(7)
- ✅ Filter buttons: preserved in HTML, logic preserved in script.js
- ✅ Lightbox: modal HTML preserved, open/close logic refactored to addEventListener
- ✅ No `onclick` attributes in certificates.html
- ✅ No `window.*` global function attachments in script.js

## Phase 2 — Visual direction
- [x] 5. Propose 2-3 visual directions (palette, font pairing, spacing scale) — **Done.** Presented 3 options: A (Midnight Insight / dark), B (Clean Signal / light corporate), C (Strategic Edge / warm editorial + bold accents). User approved Direction C with constraint: amber-only CTAs, teal reserved for positive-outcome badges in Selected Work.
- [x] 6. Write approved direction into `DESIGN.md` at project root — **Done.** Full design system written covering color tokens, typography (Outfit + Inter), spacing scale, border-radius, motion/easing defaults, and component rules. File: `DESIGN.md`.

### Phase 2 Verification Results
- ✅ Direction C approved with amber-only CTA rule and teal restriction
- ✅ DESIGN.md created with all token categories: colors, typography, spacing, radius, motion, component rules
- ✅ No code was modified — design system is documentation only at this stage

## Phase 3 — Stitch-assisted mockups
- [x] 7. Draft one Stitch prompt per page, show for approval before calling Stitch — **Done.** Three prompts drafted, reviewed, and approved by user (including rename of "PDF Projects" → "Resources" in Prompt 1). Approved prompts recorded below.

<details>
<summary>Approved Stitch Prompt 1 — Home Page</summary>

A premium personal portfolio home page UI design at 1440px width. Warm off-white background (#F1F0EB). At the top: a floating glassmorphic pill-shaped navigation bar with three links (Home, Certificates, Contact) in white text over a deep ink-navy (#14213D) to darker navy (#0C1425) diagonal gradient hero section. The hero features a circular profile photo with a subtle white border, the name "Muhammad Kamal" in large Outfit 700 font, and a one-line positioning subtitle beneath it.

Below the hero: a "Selected Work" section with two side-by-side project cards on white (#FFFFFF) surfaces with 0.75rem rounded corners. Each card has a project name as heading (Ascend AI, TriSyn Media), a short problem/role/tools/outcome summary in Inter body text, and an amber (#FCA311) pill-shaped CTA button. Cards have subtle shadow and a thin border.

Then an "About Me" section with a short paragraph on the off-white background. Then a "Technical & Strategic Skills" section showing 6 horizontal progress bars with dusty steel-blue (#457B9D) fills and skill labels in Inter font, followed by a row of small tool icons. Then an "Experience & Education" vertical timeline with a left border line, amber (#FCA311) dot markers, and content blocks with role titles, company names in steel-blue, and date spans. Then a small "View all 56 certifications →" text link in ink-navy pointing to the certificates page — no carousel, no certificate images on this page. Then a "Resources" section with two small white cards side by side, each with a document title, short description, and an amber download button. Finally a contact strip with email and social icons, and a dark navy footer. Typography uses Outfit for headings and Inter for body. All buttons and active indicators use only amber (#FCA311). Clean, editorial, modern layout with generous whitespace.

</details>

<details>
<summary>Approved Stitch Prompt 2 — Certificates Page</summary>

A certificate showcase page UI design at 1440px width. Warm off-white background (#F1F0EB). At the top: a compact ink-navy (#14213D) to darker navy (#0C1425) gradient hero with a glassmorphic pill nav bar and the heading "My Certifications" in Outfit 600 white text, with a subtitle line beneath. Below the hero: a horizontal row of pill-shaped filter buttons (All Certificates, AI & Data, Programming, Marketing, Finance & Excel, Academic & Soft Skills) — the active button is filled amber (#FCA311) with dark text, inactive buttons have a light outline style. Below the filters: a responsive grid of certificate cards (3 columns) on white (#FFFFFF) surface with 0.75rem border-radius. Each card has a certificate thumbnail image at top, a title in Outfit 600, a provider subtitle in grey Inter, and a row at the bottom with a "View" outline button (ink-navy border) and a small circular amber download button. At the bottom: a contact strip with social icons and a dark navy footer. Clean editorial feel, consistent spacing, no decorative clutter.

</details>

<details>
<summary>Approved Stitch Prompt 3 — Contact Page</summary>

A contact page UI design at 1440px width. Warm off-white background (#F1F0EB). At the top: a compact ink-navy (#14213D) to darker navy (#0C1425) gradient hero with a glassmorphic pill nav bar and the heading "Let's Connect" in Outfit 600 white text, with a friendly subtitle. Below the hero: a centered layout with a contact form (name, email, message text area) with light grey borders, 0.375rem border-radius on inputs, and an amber (#FCA311) "Send Message" pill button. Below the form: an embedded Google Maps iframe with rounded corners showing Sargodha, Pakistan. Below the map: a centered "Download CV" amber pill button. Then a "Contact Me" section with email link and a row of three social media icons (LinkedIn, GitHub, Instagram). Dark navy footer at the bottom. Typography uses Outfit for headings and Inter for body. Generous whitespace, warm editorial feel, all action elements in amber only.

</details>

- [x] 8. Generate flat reference images, summarize output — do not apply yet — **Done.** Used a generic image generation tool (not Stitch) to produce three flat reference images (Home, Certificates, Contact) as a visual sanity check. No real HTML/CSS export exists. Summary with embedded images and DESIGN.md compliance audit produced. No code modified.
- [x] 9. Translate approved layout/spacing decisions into CSS variable system in `css/main.css` (Note: Timeline/filter/contact-form parent classes are unprefixed, but their child/component classes use v2- prefix — use exact names from Task 9's diff when building real HTML in later phases, don't guess.)

## Phase 4 — Hero rebuild
- [ ] 10. Implement tilt-on-cursor-photo + orbiting-skill-icon hero using DESIGN.md tokens
- [ ] 11. Replace hero subtext with positioning line consistent with LinkedIn headline style

## Phase 5 — Selected work section
- [ ] 12. Add "Selected work" section with case-study entries for Ascend AI and TriSyn Media

## Phase 6 — Sitewide cleanup
- [ ] 13. Extract inline `<style>` and `<script>` blocks from `index.html` into external files
- [ ] 14. Fix or remove broken reference to `css/carousel-scrollanimation.css`
- [ ] 15. Add `defer` attribute to every `<script>` tag across all three pages
- [ ] 16. Add descriptive `title` attribute to contact page's map iframe

## Phase 7 — SEO and technical baseline
- [ ] 17. Add `sitemap.xml` and `robots.txt` at project root
- [ ] 18. Add schema.org Person structured data to `index.html`
- [ ] 19. Confirm every page has a unique `og:image`; add for certificates/contact if missing

## Phase 8 — Accessibility and motion
- [ ] 20. Make lightbox and carousel fully keyboard-operable
- [ ] 21. Wrap custom animations in `@media (prefers-reduced-motion: reduce)` fallbacks
- [ ] 22. Run heading-hierarchy and alt-text check across all pages and fix gaps

## Phase 9 — Analytics and final QA
- [ ] 23. Add lightweight analytics snippet (ask user for provider first)
- [ ] 24. Final responsive pass at 360px, 768px, 1024px, 1440px — fix overflow/wrapping issues

---

## Session Rules

1. **Log approvals immediately.** Any approval the user gives must be recorded in PROGRESS.md the moment it is given — even mid-task — not only when a task is fully checked off.
2. **Honour recorded approvals across sessions.** At the start of every session, read PROGRESS.md / DESIGN.md / AUDIT.md first. If an approval is recorded there without the task being checked off, treat it as final and resume from it — never re-ask the user to re-decide it.
