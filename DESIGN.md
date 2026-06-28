# Design System — Muhammad Kamal Portfolio

> Single source of truth for all styling decisions.
> Every CSS value in the project should trace back to a token defined here.

---

## Color Tokens

### Core Palette

| Token | Hex | Usage |
|---|---|---|
| `--primary` | `#14213D` | Ink navy — headings, nav text, hero gradient start, primary brand color |
| `--primary-deep` | `#0C1425` | 40% darker shade of `--primary` — hero gradient end stop only |
| `--secondary` | `#FCA311` | Bright amber — **the only CTA / action color sitewide**: buttons, active states, underlines, hover accents, progress bars |
| `--accent` | `#457B9D` | Dusty steel-blue — section dividers, timeline dots, skill bar fills, subtle informational highlights |

### Restricted-Use Color

| Token | Hex | Usage |
|---|---|---|
| `--positive` | `#2A9D8F` | Teal-green — **reserved exclusively** for positive-outcome indicators inside the "Selected Work" section (e.g. metric badges showing growth %, revenue impact). Not used anywhere else on the site. |

### Surfaces & Backgrounds

| Token | Hex | Usage |
|---|---|---|
| `--background` | `#F1F0EB` | Warm off-white page background (parchment-tinted) |
| `--surface` | `#FFFFFF` | Card / panel / modal background |

### Text

| Token | Hex | Usage |
|---|---|---|
| `--text-primary` | `#212529` | Ink-dark — body text, primary readable content |
| `--text-muted` | `#6C757D` | Neutral grey — captions, dates, secondary labels |
| `--text-on-primary` | `#FFFFFF` | White text when placed on `--primary` or dark backgrounds |
| `--text-on-secondary` | `#14213D` | Dark text when placed on `--secondary` (amber) for contrast |

### Shadows

| Token | Value |
|---|---|
| `--shadow-sm` | `0 1px 3px rgba(20, 33, 61, 0.08)` |
| `--shadow-md` | `0 4px 12px rgba(20, 33, 61, 0.12)` |
| `--shadow-lg` | `0 8px 24px rgba(20, 33, 61, 0.16)` |

### Hero Gradient

```css
background: linear-gradient(135deg, var(--primary) 0%, var(--primary-deep) 100%);
```

---

## Typography

### Font Stack

| Role | Family | Weights | Source |
|---|---|---|---|
| Headings | `"Outfit", sans-serif` | 500 (section heads), 600 (h1/h2), 700 (hero name) | Google Fonts |
| Body | `"Inter", sans-serif` | 400 (body), 500 (labels/nav), 600 (bold inline) | Google Fonts |

### Type Scale

| Element | Size | Weight | Line-height | Letter-spacing |
|---|---|---|---|---|
| Hero name (h1) | `2.5rem` | 700 | 1.2 | `-0.02em` |
| Section heading (h2) | `1.75rem` | 600 | 1.3 | `-0.01em` |
| Card heading (h3) | `1.125rem` | 600 | 1.4 | `0` |
| Body text | `1rem` | 400 | 1.6 | `0` |
| Caption / meta | `0.875rem` | 400 | 1.5 | `0.01em` |
| Small label | `0.75rem` | 500 | 1.4 | `0.03em` |
| Nav link | `0.85rem` | 500 | 1 | `0.06em` |

---

## Spacing Scale

Based on a 4px (0.25rem) base unit.

| Token | Value |
|---|---|
| `--space-1` | `0.25rem` (4px) |
| `--space-2` | `0.5rem` (8px) |
| `--space-3` | `1rem` (16px) |
| `--space-4` | `1.5rem` (24px) |
| `--space-5` | `2rem` (32px) |
| `--space-6` | `3rem` (48px) |
| `--space-7` | `4rem` (64px) |
| `--space-8` | `6rem` (96px) |
| `--space-9` | `8rem` (128px) |
| `--section-max-width` | `68.75rem` (1100px) |

### Section Padding

- Section vertical padding: `--space-8` (6rem) top/bottom on desktop, `--space-6` (3rem) on mobile
- Card internal padding: `--space-4` (1.5rem)

---

## Border Radius

| Token | Value | Usage |
|---|---|---|
| `--radius-sm` | `0.375rem` | Inputs, small elements |
| `--radius-md` | `0.75rem` | Cards, panels |
| `--radius-lg` | `1rem` | Hero panels, modals, lightbox |
| `--radius-pill` | `100px` | Buttons, nav pills, filter chips |

---

## Motion & Animation

### Duration Defaults

| Token | Value | Usage |
|---|---|---|
| `--duration-micro` | `200ms` | Hover states, button press, icon scale |
| `--duration-reveal` | `450ms` | Scroll-triggered section/card reveals |
| `--duration-modal` | `300ms` | Lightbox open/close, overlay fade |

### Easing Curves

| Token | Value | Usage |
|---|---|---|
| `--ease-micro` | `ease-out` | Hover, small interactions |
| `--ease-reveal` | `cubic-bezier(0.22, 1, 0.36, 1)` | Section scroll-in — snappy spring feel |
| `--ease-modal` | `ease` | Modal/overlay transitions |

### Reduced Motion

All animations must be wrapped in:
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Component Rules

### Buttons (CTA)

- Background: `--secondary` (`#FCA311`)
- Text: `--text-on-secondary` (`#14213D`)
- Border-radius: `--radius-pill`
- Padding: `0.75rem 1.75rem`
- Hover: lighten background 8%, lift `translateY(-2px)`, apply `--shadow-md`
- Font: Inter 600, `0.9rem`

### Cards

- Background: `--surface`
- Border: `1px solid rgba(20, 33, 61, 0.06)`
- Border-radius: `--radius-md`
- Shadow: `--shadow-sm` → `--shadow-md` on hover
- Hover lift: `translateY(-4px)`
- Transition: `--duration-micro` `--ease-micro`

### Nav (Floating Glass Pill)

- Background: `rgba(255, 255, 255, 0.1)` with `backdrop-filter: blur(12px)`
- Border-radius: `--radius-pill`
- Active underline color: `--secondary`
- Link text: `--text-on-primary` at 85% opacity → 100% on hover

### Positive Outcome Badge (Selected Work section only)

- Background: `rgba(42, 157, 143, 0.12)` (teal at 12% opacity)
- Text: `--positive` (`#2A9D8F`)
- Border-radius: `--radius-sm`
- Font: Inter 600, `0.8rem`
- **Must not appear outside the Selected Work section.**
