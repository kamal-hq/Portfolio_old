---
name: Insight & Influence
colors:
  surface: '#faf9f4'
  surface-dim: '#dbdad5'
  surface-bright: '#faf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f4ef'
  surface-container: '#efeee9'
  surface-container-high: '#e9e8e3'
  surface-container-highest: '#e3e3de'
  on-surface: '#1b1c19'
  on-surface-variant: '#45464d'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f1ec'
  outline: '#75777e'
  outline-variant: '#c5c6ce'
  surface-tint: '#525e7d'
  primary: '#000a24'
  on-primary: '#ffffff'
  primary-container: '#14213d'
  on-primary-container: '#7c89aa'
  inverse-primary: '#b9c6ea'
  secondary: '#855300'
  on-secondary: '#ffffff'
  secondary-container: '#ffa515'
  on-secondary-container: '#684000'
  tertiary: '#000d17'
  on-tertiary: '#ffffff'
  tertiary-container: '#002537'
  on-tertiary-container: '#5a8fb2'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d9e2ff'
  primary-fixed-dim: '#b9c6ea'
  on-primary-fixed: '#0d1b36'
  on-primary-fixed-variant: '#3a4664'
  secondary-fixed: '#ffddb8'
  secondary-fixed-dim: '#ffb95f'
  on-secondary-fixed: '#2a1700'
  on-secondary-fixed-variant: '#653e00'
  tertiary-fixed: '#c7e7ff'
  tertiary-fixed-dim: '#98cdf2'
  on-tertiary-fixed: '#001e2e'
  on-tertiary-fixed-variant: '#064c6b'
  background: '#faf9f4'
  on-background: '#1b1c19'
  surface-variant: '#e3e3de'
typography:
  display-lg:
    fontFamily: Outfit
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Outfit
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Outfit
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Outfit
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.2'
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  container-max: 1280px
  stack-xl: 8rem
  stack-lg: 4rem
  stack-md: 2rem
  gutter: 1.5rem
  margin-mobile: 1rem
  margin-desktop: 2.5rem
---

## Brand & Style
This design system is tailored for a dual-expertise professional in Digital Marketing and Data Analytics. The brand personality is **authoritative yet approachable**, combining the precision of data science with the creative energy of marketing. 

The aesthetic follows a **Modern Editorial** movement. It leverages generous whitespace, high-contrast typography, and premium textures to create a sense of calm professionalism. Key stylistic influences include:
- **Minimalism:** A focus on essential content and structural clarity.
- **Glassmorphism:** Reserved specifically for navigation to create a sense of depth and modernity.
- **Tactile Accents:** High-fidelity shadows and glowing elements that guide the user's eye to conversion points.

## Colors
The palette is grounded in a warm, sophisticated foundation to differentiate from cold, standard "tech" portfolios.

- **Background (#F1F0EB):** A warm off-white that reduces eye strain and provides a premium "gallery" feel.
- **Primary Deep Navy (#14213D):** Used for primary headings and hero sections to establish trust and weight.
- **Accent Amber (#FCA311):** Reserved for high-priority CTAs and interactive markers. It should "glow" against the navy and off-white.
- **Steel Blue (#457B9D):** A technical secondary color used for data visualization, progress bars, and utility icons.
- **Teal Green (#2A9D8F):** Specifically for "Outcome Badges" and positive data trends (e.g., "+24% ROI").

## Typography
The typography strategy creates a clear hierarchy between creative marketing (Outfit) and technical data (Inter).

- **Headlines:** Use **Outfit** for all titles. The geometric nature of the font feels modern and precise. Large display titles should use tight letter spacing for a high-impact editorial look.
- **Body & Data:** Use **Inter** for all functional text, descriptions, and data labels. Its high legibility ensures that complex analytical insights remain readable at smaller sizes.
- **Labels:** Uppercase labels with slight letter spacing should be used for section eyebrows (e.g., "CASE STUDY") to provide organizational structure.

## Layout & Spacing
The layout follows a **Fluid Grid** system within a centered container. 

- **Grid:** Use a 12-column grid for desktop with 24px gutters. For mobile, collapse to a single column with 16px side margins.
- **Vertical Rhythm:** Utilize "Stack" units to maintain generous white space between sections (Stack-XL for section breaks).
- **Alignment:** Content is generally left-aligned to mirror editorial layouts, with the exception of hero headers and the floating navigation bar which are centered.
- **Responsive Behavior:** On mobile, padding should be reduced slightly, and large display fonts should scale down significantly to prevent awkward word breaks.

## Elevation & Depth
Depth is used sparingly to maintain the clean, minimal aesthetic.

- **Level 1 (Cards):** Low-contrast outlines (1px solid #E5E5E0) or extremely soft ambient shadows (0% spread, 15% opacity, #14213D tint).
- **Level 2 (Navigation/Popovers):** Glassmorphism. Apply a backdrop-filter (blur: 12px) with a semi-transparent white fill (70% opacity). A subtle 0.5px white border enhances the "glass" edge.
- **Level 3 (Interactive):** Floating CTAs use a localized amber outer glow (`box-shadow: 0 4px 20px rgba(252, 163, 17, 0.3)`) when hovered to simulate light emission.

## Shapes
The shape language is primarily **Pill-shaped (3)** for interactive elements and **Soft-rounded** for containers.

- **Primary Elements:** Buttons and the floating navigation bar must use full pill-shaped (100px+) radii to contrast against the sharp grid.
- **Structural Elements:** Large cards and images use a `rounded-lg` (1rem) radius to feel modern but stable.
- **Visual Accents:** Timeline markers and status dots are perfect circles.

## Components

- **Buttons:** 
  - *Primary:* Pill-shaped, Amber background, Navy text. High-contrast and bold.
  - *Secondary:* Ghost style with Navy border and Navy text.
- **Navigation:** A floating, centered pill-shaped bar. Use glassmorphic background with blurred content underneath. Active links are indicated by a small Amber dot below the text.
- **Cards:** Wide, horizontal layout for case studies. Use white backgrounds against the off-white page background to create a subtle "lift."
- **Timeline:** A vertical 2px line in Steel-blue. Each milestone is marked by a 12px Amber circle. Milestone titles use Outfit (Bold).
- **Progress Bars:** Use a dual-tone Steel-blue gradient. The background track should be a very faint version of the same hue (10% opacity).
- **Outcome Badges:** Small, pill-shaped tags with Teal-green background and white text. These are placed inside cards to highlight specific KPIs or results.
- **Input Fields:** Minimalist design with only a bottom border (Navy) that transitions to a full border on focus.