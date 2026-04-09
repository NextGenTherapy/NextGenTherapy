---
name: styling
description: Trigger when creating/modifying SCSS files, styling components, or discussing design tokens
allowed-tools: Read, Grep, Glob
---

# Styling Skill

## Design System Overview
This project uses SCSS Modules with a centralized design token system.

## Typefaces
Loaded via `next/font` in `layout.tsx`:
- **Display**: Cormorant Garamond - headings, hero text
- **Body**: DM Sans - body copy, UI elements

## Colour Tokens
Defined in `src/styles/variables.scss`:

| Token | Purpose |
|-------|---------|
| `--color-bg` | Page background |
| `--color-surface` | Card/section backgrounds |
| `--color-text` | Primary text |
| `--color-text-muted` | Secondary/subtle text |
| `--color-brand` | Primary brand colour |
| `--color-brand-hover` | Brand hover state |
| `--color-accent` | Accent/highlight colour |
| `--color-accent-light` | Light accent variant |
| `--color-border` | Borders and dividers |
| `--color-header` | Header background |
| `--color-header-text` | Header text |
| `--color-success` | Success states |
| `--color-error` | Error states |

## Typography Scale
| Token | Usage |
|-------|-------|
| `--font-size-xs` | Small labels |
| `--font-size-sm` | Secondary text |
| `--font-size-base` | Body copy |
| `--font-size-lg` | Lead paragraphs |
| `--font-size-xl` | H4 headings |
| `--font-size-2xl` | H3 headings |
| `--font-size-3xl` | H2 headings |
| `--font-size-4xl` | H1 headings |
| `--font-size-5xl` | Hero headings |

## Font Weights
| Token | Weight |
|-------|--------|
| `--font-weight-light` | 300 |
| `--font-weight-regular` | 400 |
| `--font-weight-medium` | 500 |
| `--font-weight-semibold` | 600 |
| `--font-weight-bold` | 700 |

## Spacing Scale
| Token | Usage |
|-------|-------|
| `--spacing-xs` | Tight spacing |
| `--spacing-sm` | Small gaps |
| `--spacing-md` | Default spacing |
| `--spacing-lg` | Comfortable spacing |
| `--spacing-xl` | Large gaps |
| `--spacing-2xl` | Section padding |
| `--spacing-section` | Between sections |

## Breakpoints
| Token | Value |
|-------|-------|
| `--breakpoint-mobile` | 480px |
| `--breakpoint-tablet` | 768px |
| `--breakpoint-desktop` | 1024px |
| `--breakpoint-large` | 1200px |

## SCSS Pattern
```scss
.container {
  padding: var(--spacing-md);
  background: var(--color-surface);

  @media (min-width: 768px) {
    padding: var(--spacing-lg);
  }

  @media (min-width: 1024px) {
    padding: var(--spacing-xl);
  }
}

.title {
  font-family: var(--font-display);
  font-size: var(--font-size-2xl);
  color: var(--color-text);
}
```

## Component Patterns

### Buttons
- Primary: Brand colour background, white text
- Secondary: Transparent with brand border
- Ghost: Text only with hover state

### Cards
- Surface background
- Padding using spacing tokens
- Border radius and shadow from tokens

### Navigation
- Fixed header
- Mobile hamburger at tablet breakpoint
- Smooth scroll behaviour

## Accessibility
- Contrast: WCAG AA minimum (4.5:1 for text)
- Focus states: Visible focus ring on all interactive elements
- Reduced motion: Respect `prefers-reduced-motion`
- Font sizing: Relative units (rem) for scalability
- Touch targets: Minimum 44x44px on mobile

## Gotchas
- Never hardcode colour, spacing, or font values
- Always read `src/styles/variables.scss` before styling
- Project is in active redesign - do not mix old and new styles
- Every component needs a matching `.module.scss` file
