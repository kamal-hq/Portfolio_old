# Portfolio Website Codebase Audit (Post-Rebuild)

This document provides a read-only, comprehensive audit of the portfolio website codebase following the completion of the 9-Phase Rebuild.

## 1. Site Map & Structure

### Pages
*   **`index.html`**: Home page containing the interactive 3D hero, case studies (Selected Work), timeline, skills, and Resources.
*   **`pages/certificates.html`**: A dedicated showcase page for all certificates, featuring a dynamic filtering system and keyboard-accessible lightbox.
*   **`pages/contact.html`**: The contact page featuring a communication form, accessible location map, and resume download link.

### Folder Structure
```text
/ (Project Root)
├── index.html
├── pages/
│   ├── certificates.html
│   └── contact.html
├── css/
│   └── main.css
├── JavaScript/
│   ├── script.js
│   ├── scroll-animation.js
│   └── testimonial.js
├── assets/
│   ├── data/
│   │   └── certificates.js
│   ├── Certificates Images/
│   ├── icons/
│   ├── images/
│   ├── pdfs/
│   ├── thumbnails/
│   └── MuhammadKamal_Resume.pdf
├── DESIGN.md
├── PROGRESS.md
├── robots.txt
└── sitemap.xml
```

### Navigation Flow
*   The main navigation uses a glassmorphic pill design and is present in the header of all three pages, providing bidirectional flow between: `Home`, `Certificates`, and `Contact`.
*   Relative paths are handled appropriately based on the page's directory depth.

## 2. Tech Stack & Dependencies

*   **Core Stack**: Vanilla HTML5, CSS3, and JavaScript.
*   **Libraries/Frameworks**: None. The project relies entirely on vanilla web technologies.
*   **CDNs & External Resources**:
    *   **Fonts**: Google Fonts (Outfit, Inter).
    *   **Icons**: Font Awesome v6.5.0 (loaded via CDN).
*   **Build Tools**: None. 
*   **Browser APIs Used**:
    *   `IntersectionObserver`: Used in `scroll-animation.js` for scroll-reveal effects.
    *   `Fetch API`: Used in `testimonial.js`.
    *   `matchMedia`: Used for `prefers-reduced-motion` detection in JS.

## 3. HTML Audit (per page)

*   **`index.html`**
    *   **Semantic Structure**: Clean `<header>`, `<nav>`, `<section>`, and `<footer>` layout.
    *   **Meta Tags**: Contains `viewport`, `description`, `og:image`, `shortcut icon`, and JSON-LD structured data.
    *   **Accessibility**: No inline CSS/JS. Images have `alt` attributes. 
*   **`pages/certificates.html`**
    *   **Semantic Structure**: Uses dynamic data generation for certificates (rendered via `certificates.js`).
    *   **Meta Tags**: Fully present and populated, including a unique `og:image`.
    *   **Accessibility**: `onclick` attributes have been stripped. Lightbox contains a dynamic `alt` fallback and full Tab-trapping for keyboard users.
*   **`pages/contact.html`**
    *   **Semantic Structure**: Clean and semantic.
    *   **Accessibility**: The iframe for the map now has a descriptive `title` attribute. Heading hierarchy is strictly sequential (`h1` -> `h2`).

## 4. CSS Audit

*   **Architecture**: Centralized global stylesheet (`css/main.css`). Dead references to `carousel-scrollanimation.css` have been purged.
*   **CSS Variables (Design System)**: Follows the `DESIGN.md` "Direction C" tokens (Off-white backgrounds, Ink-Navy gradients, Amber CTAs).
*   **Responsiveness**: Verified down to 360px. CSS Grid `minmax` rules and Flexbox wrapping handle micro-viewports gracefully.
*   **Accessibility (Motion)**: A robust `@media (prefers-reduced-motion: reduce)` block disables scroll reveals and freezes the interactive 3D hero orbits at static staggered angles.
*   **Code Quality**: Well-commented, organized, and free of bare hex values outside the `:root` tokens.

## 5. JavaScript Audit

*   **`assets/data/certificates.js`**: Pure data array decoupling content from markup.
*   **`script.js`**: Handles certificate generation (`buildCertCard`), filtering, and a fully accessible, keyboard-operable Lightbox modal (Escape to close, Tab trapping).
*   **`scroll-animation.js`**: Sets up the `IntersectionObserver` and the keyboard-accessible image carousel (which disables auto-play if reduced-motion is preferred).
*   **Code Quality Improvements**:
    *   **Global Scope Pollution**: `window.*` assignments and `onclick` inline handlers have been replaced with unobtrusive `addEventListener` blocks bound within `DOMContentLoaded`.
    *   **Defer**: All scripts are loaded with the `defer` attribute.

## 6. Performance Check

*   **Image Optimization**: Heavy use of modern `.webp` formats.
*   **Render-Blocking Resources**: CSS loaded in `<head>`, all JavaScript deferred. No inline render-blocking scripts remain in the HTML.
*   **DOM Size**: `certificates.html` DOM is injected asynchronously, reducing initial parse time. 

## 7. SEO & Accessibility Basics

*   **Titles & Meta Descriptions**: Each page possesses a unique `<title>` and `<meta>`.
*   **Structured Data**: `index.html` contains `schema.org/Person` JSON-LD data.
*   **Sitemaps & Robots**: Both `sitemap.xml` and `robots.txt` exist at the project root.
*   **Accessibility Highlights**: Full keyboard operability for modals and carousels, responsive line-wrapping (`text-wrap: balance`), strict heading hierarchies, and robust reduced-motion support.

## 8. Summary Snapshot

*   The 9-Phase rebuild successfully transformed a functional vanilla site into a highly optimized, accessible, and premium web property.
*   The architecture is deeply decoupled (Data in JS, Styles in CSS, Structure in HTML), completely eliminating the original anti-patterns (inline `onclick`, inline `<style>`, hardcoded HTML data lists).
*   The site successfully respects user accessibility preferences natively at the browser level (Motion, Keyboard, Screen-Reader).
