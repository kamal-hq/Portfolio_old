# Phase 1: Audit and Plan

## 1. Certificates Page (`pages/certificates.html`)

### (a) Existing Sections
1. Header / Navbar
2. Filter Section
3. Grid Section (Certifications)
4. Lightbox (Modal for zooming in on images)
5. Footer

### (b) CSS Classes Currently Used
- Header / Navbar: `hero`, `hero-compact`, `nav-wrapper`, `nav-pill`, `nav-links`, `nav-link active`, `nav-cta`, `scroll-effect slide-up`, `scroll-effect fade-in`
- Filter Section: `filter-wrapper scroll-effect fade-in`, `mobile-filter-toggle`, `filter-buttons`, `filter-btn active`, `filter-btn`
- Grid Section: `certifications`, `cert-grid`
- Lightbox: `lightbox`, `close-lightbox`, `lightbox-content`
- Footer: `v2-footer`, `v2-footer-content`, `v2-footer-left`, `v2-footer-right`, `v2-social-links`, `btn btn-primary`, `v2-footer-bottom`, `v2-copyright`, `v2-tech-stack`

### (c) Stitch Reference Equivalent
- **Navigation:** Floating glassmorphic navbar with rounded pill shape (`bg-surface/70`, `backdrop-blur-xl`, `rounded-full`). Uses center alignment, with `font-display-lg-mobile` for logo and `font-body-md` for links, and an amber pill button for CTA.
- **Hero Section:** Large padded hero area (`rounded-[2rem]`, `p-12 md:p-16`, `bg-primary-container`), center-aligned text with `font-display-lg` heading and `font-body-lg` paragraph.
- **Filter Section:** Horizontally scrolling or centered flex container. Active filter is an amber pill (`bg-secondary-container text-on-primary-fixed`), inactive filters are transparent with a primary-container border.
- **Grid Section:** CSS Grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`, `gap-8`) with max-width `1280px`. Cards have `bg-surface-container-lowest` (white), rounded corners (`rounded-DEFAULT`), subtle borders, soft shadow, hover translate-y, and scale-up effect.
- **Footer:** Simple, wide footer with dark background (`bg-primary`), flex row layout, containing copyright and simple text links.

### (d) Specific Changes Needed
1. Completely remove any leftover Tailwind CDN structures (already partially removed) and rely entirely on standard CSS.
2. Rewrite the HTML structure to match the reference tags (e.g., matching the `glass-nav` and floating navbar structure).
3. Create custom CSS classes in `main.css` for typography (`.font-display-lg`, `.font-body-md`, etc.) mapped to the actual font families and sizes defined in `DESIGN.md`.
4. Create specific card classes (e.g., `.ref-card`) combining the reference's `bg-surface-container-lowest`, border, border-radius (`1rem`), and shadow properties.
5. Create layout classes like `.max-w-container-max` (`1280px`), `.grid-3-cols` to manage the grid layout without Tailwind.
6. Update filter buttons to utilize standard classes replicating the amber pill style.

---

## 2. Contact Page (`pages/contact.html`)

### (a) Existing Sections
1. Navbar
2. Hero / Header
3. Contact Section (Form, Map, CV Download)
4. Footer

### (b) CSS Classes Currently Used
- Navbar: Inline Tailwind (`fixed top-0 left-0 right-0 z-50 flex justify-center...`, `bg-white/80 backdrop-blur-xl rounded-b-full...`)
- Hero: `hero hero-compact`, `hero-content`, `scroll-effect slide-up`, `tagline scroll-effect fade-in`
- Contact Section: `contact-page`, `contact-form`, `button`, `map-container`, `contact-info-block`, `info-item`, `download-btn`
- Footer: Same as Certificates (`v2-footer`, etc.)

### (c) Stitch Reference Equivalent
- **Navigation:** Exact same floating glassmorphic navbar as Certificates, ensuring consistency.
- **Hero:** Full-width dark hero (`bg-primary-container` or `hero-gradient`), heavily padded, with center-aligned white text. Includes a background effect (WebGL or gradient).
- **Contact Area:** A 2-column grid (`grid-cols-1 md:grid-cols-2`, `gap-12`). 
  - Left column: The form inside a rounded card with a subtle border (`bg-surface-container-lowest p-8 rounded-2xl`). Inputs have a specific `input-glow` style on focus.
  - Right column: The map inside a rounded container matching the form's height.
- **Post-Form Section (CV/Socials):** A centered layout underneath the form/map grid containing a magnetic amber pill button for downloading CV, and circular buttons for social links.

### (d) Specific Changes Needed
1. Strip all inline Tailwind classes from the HTML file, including the `<script src="https://cdn.tailwindcss.com..."></script>`.
2. Apply the unified `glass-nav` CSS classes for the Navbar (to be shared with Certificates).
3. Implement a 2-column CSS Grid layout for the contact area.
4. Restyle the form inputs to match the reference (`border: 1px solid #14213D; background: transparent; border-radius: 0.375rem;` and amber focus glow).
5. Restyle the map container to have the same border-radius (`2xl` or `1rem`) and shadow as the form card.
6. Centralize the Download CV and Social links below the form grid, styling them as pill buttons and circular icons (`bg-primary-container`, hover effects) as per the reference.
7. Integrate the `hero-gradient` or WebGL background into the hero section cleanly using custom CSS.

# Phase 2 Results (Agent-Nav-Certs)
1. Successfully moved the `<nav class="nav-wrapper">...</nav>` block outside and before the `<header>` opening tag in `pages/certificates.html`.
2. The header now contains only the `h1` and `p` subtitle.
3. Verified by reading the file structure back; `nav` clearly precedes `header` in the DOM.
4. Visual outcome: The navbar will now render independently at the top of the page rather than being constrained or affected by the header's CSS rules (`hero hero-compact`). This is necessary for implementing the floating glassmorphic nav design accurately.

# Phase 4 Results (Agent-Contact)
1. Successfully applied the nav fix to `pages/contact.html`, moving the `<nav>` before the `<header>`.
2. Removed all Tailwind CDNs, Tailwind config script, and `glow-amber` style blocks from the `<head>` of `pages/contact.html`.
3. Improved the visual design of the contact form, map embed, and CV download section using `main.css` classes (`card-base`, `btn-primary`, `form-input`) and a CSS grid layout, successfully aligning with the visual direction of `stitch-reference/Contact.html`.
4. Verified that the `v2-footer` is correctly present at the bottom of the page, and the CV link path properly points to `../assets/MuhammadKamal_Resume.pdf`.

# Phase 3 Results (Agent-Design-Certs)
1. HERO SECTION: Updated `.hero-compact` in `main.css` to match the stitch reference. The hero section now features a rounded border radius (`2rem`), adjusted padding (`4rem 2rem`), and constrained max-width with proper margins, while keeping the background gradient.
2. FILTER BUTTONS: Updated `.filter-btn:hover` and `.filter-btn.active` in `main.css` to apply the correct amber fill (`var(--secondary)`) for both the background and border.
3. CERTIFICATE CARDS: Extracted and enhanced `.cert-card` and `.cert-card .info` rules in `main.css`. The cards now accurately reflect the reference design, featuring a white surface, subtle shadows, structured info flexbox alignment, and fully styled view/download buttons at the bottom.
4. SPACING: Added the `.section-compact` class to the certifications `<section>` in `pages/certificates.html` and defined it in `main.css` to eliminate unnecessary top padding and reduce vertical gaps above the certificate grid.

# Phase 5 Results (Cross-page consistency check)
1. Read all three pages: `index.html`, `pages/certificates.html`, and `pages/contact.html`.
2. Checked nav consistency: `pages/certificates.html` and `pages/contact.html` already possessed the correct `nav-wrapper > nav-pill > nav-links` structure with proper active classes. Found that `index.html` was still using Tailwind classes on its nav.
3. Updated `index.html` to replace the Tailwind nav structure with the consistent vanilla classes (`nav-wrapper > nav-pill > nav-links`) and set the `Home` link as `.active`.
4. Checked footer consistency: All three pages use the identical `v2-footer` structure, and the CV download link properly points to the correct relative paths (`assets/MuhammadKamal_Resume.pdf` from `index.html`, and `../assets/MuhammadKamal_Resume.pdf` from the pages directory).
5. Checked Tailwind CDN: Verified that no page has the Tailwind CDN script except `index.html`.
6. Verified fixes by confirming consistent structure across all 3 HTML files.
