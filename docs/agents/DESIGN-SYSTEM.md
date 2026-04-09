# Design System

This document defines the design tokens and patterns for the Next Gen Therapy visual design.

## Typefaces

Loaded via `next/font` in `layout.tsx`:

- **Display**: Cormorant Garamond — headings, hero text
- **Body**: DM Sans — body copy, UI elements

Values TBC during redesign.

## Colour Tokens

All colours are defined as CSS custom properties in `src/styles/variables.scss`.

### Core Palette

| Token | Purpose | Value |
|-------|---------|-------|
| `--color-bg` | Page background | TBC |
| `--color-surface` | Card/section backgrounds | TBC |
| `--color-text` | Primary text | TBC |
| `--color-text-muted` | Secondary/subtle text | TBC |

### Brand Colours

| Token | Purpose | Value |
|-------|---------|-------|
| `--color-brand` | Primary brand colour | TBC |
| `--color-brand-hover` | Brand hover state | TBC |
| `--color-accent` | Accent/highlight colour | TBC |
| `--color-accent-light` | Light accent variant | TBC |

### UI Colours

| Token | Purpose | Value |
|-------|---------|-------|
| `--color-border` | Borders and dividers | TBC |
| `--color-header` | Header background | TBC |
| `--color-header-text` | Header text | TBC |

### State Colours

| Token | Purpose | Value |
|-------|---------|-------|
| `--color-success` | Success states | TBC |
| `--color-error` | Error states | TBC |

## Typography Scale

| Token | Size | Usage |
|-------|------|-------|
| `--font-size-xs` | TBC | Small labels |
| `--font-size-sm` | TBC | Secondary text |
| `--font-size-base` | TBC | Body copy |
| `--font-size-lg` | TBC | Lead paragraphs |
| `--font-size-xl` | TBC | H4 headings |
| `--font-size-2xl` | TBC | H3 headings |
| `--font-size-3xl` | TBC | H2 headings |
| `--font-size-4xl` | TBC | H1 headings |
| `--font-size-5xl` | TBC | Hero headings |

## Font Weight Tokens

| Token | Weight | Usage |
|-------|--------|-------|
| `--font-weight-light` | 300 | Decorative text |
| `--font-weight-regular` | 400 | Body copy |
| `--font-weight-medium` | 500 | Emphasis |
| `--font-weight-semibold` | 600 | Subheadings |
| `--font-weight-bold` | 700 | Headings |

## Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--spacing-xs` | TBC | Tight spacing |
| `--spacing-sm` | TBC | Small gaps |
| `--spacing-md` | TBC | Default spacing |
| `--spacing-lg` | TBC | Comfortable spacing |
| `--spacing-xl` | TBC | Large gaps |
| `--spacing-2xl` | TBC | Section padding |
| `--spacing-section` | TBC | Between sections |

## Breakpoints

| Token | Value | Description |
|-------|-------|-------------|
| `--breakpoint-mobile` | 480px | Small mobile |
| `--breakpoint-tablet` | 768px | Tablet/large mobile |
| `--breakpoint-desktop` | 1024px | Desktop |
| `--breakpoint-large` | 1200px | Large desktop |

Usage in SCSS:

```scss
.container {
  padding: var(--spacing-md);

  @media (min-width: 768px) {
    padding: var(--spacing-lg);
  }

  @media (min-width: 1024px) {
    padding: var(--spacing-xl);
  }
}
```

## Component Patterns

### Buttons

- Primary: Brand colour background, white text
- Secondary: Transparent with brand border
- Ghost: Text only with hover state

### Cards

- Surface background
- Border radius TBC
- Shadow TBC
- Padding using spacing tokens

### Navigation

- Fixed header
- Mobile hamburger menu at tablet breakpoint
- Smooth scroll behaviour

## Accessibility

- **Contrast**: WCAG AA minimum (4.5:1 for text)
- **Focus states**: Visible focus ring on all interactive elements
- **Reduced motion**: Respect `prefers-reduced-motion` media query
- **Font sizing**: Relative units (rem) for scalability
- **Touch targets**: Minimum 44x44px on mobile

## Usage Rules

1. Never hardcode colour values — always use tokens
2. Never hardcode spacing — always use spacing scale
3. Never hardcode font sizes — always use typography scale
4. All new components must use these tokens from day one
5. During redesign, do not mix old and new visual styles
