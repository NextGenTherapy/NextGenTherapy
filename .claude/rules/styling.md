# Styling Rules

## SCSS Modules Only
- Never use Tailwind - this project is SCSS only
- Never use inline styles under any circumstances
- Each component has a co-located `.module.scss` file

## Design Tokens (Required)
All values must use CSS custom properties from `src/styles/variables.scss`:

- Colours: `var(--color-*)` - never hardcode hex values
- Font sizes: `var(--font-size-*)` - never arbitrary sizes
- Spacing: `var(--spacing-*)` - never arbitrary px/rem values
- Breakpoints: Use defined token values, do not invent new breakpoints

## Class Naming
- BEM-lite inside modules: `.container`, `.title`, `.description`, `.wrapper`, `.item`
- Names describe structure/role, not appearance (`.card` not `.greenBox`)
- Maximum 3 levels of nesting

## Responsive
- Mobile-first approach with `@media (min-width: ...)`
- Breakpoints: 480px (mobile), 768px (tablet), 1024px (desktop), 1200px (large)

## Active Redesign
- Do not replicate old visual styles - follow new design system tokens
- If component not redesigned yet, flag it rather than mixing styles
- Typography: Cormorant Garamond (headings), DM Sans (body)
