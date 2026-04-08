# NextGenTherapy — Redesign Prompts

> Palette: Option B — Sage & Linen
> Typography: Cormorant Garamond + DM Sans
> Hero copy: “You don’t have to keep holding it together alone.”
> Run these prompts in order. Do not skip steps.

-----

## Prompt 1 — Token Reset (`variables.scss`)

```
Read src/styles/variables.scss carefully before making any changes.

Replace the entire colour, typography, and spacing token system with the new design system below.
Keep the existing file structure and comment style. Keep the breakpoint tokens as they are.
Save a backup of the original as src/styles/variables.scss.bak before overwriting.

### New Colour Tokens

```scss
/* ─── COLOURS ─── */
--color-bg: #F8F6F1;
--color-surface: #EEE9E1;
--color-text: #282822;
--color-text-muted: #6E7260;
--color-brand: #5B7A5E;
--color-brand-hover: #3D5940;
--color-accent: #A89070;
--color-accent-light: #EDE4D8;
--color-border: #DDD8CF;
--color-header: #3D5940;
--color-header-text: #F8F6F1;

/* Status colours — keep existing */
--color-success: #2e7d32;
--color-error: #d32f2f;
--color-info: #1976d2;

/* Disabled — keep existing */
--color-disabled: #cccccc;
--color-disabled-text: #595959;
```

### New Typography Tokens

```scss
/* ─── TYPOGRAPHY ─── */
--font-display: var(--font-cormorant); /* set by next/font in layout.tsx */
--font-body: var(--font-dm-sans);      /* set by next/font in layout.tsx */

--font-size-hero: clamp(2.8rem, 6vw, 5rem);
--font-size-h1: clamp(2rem, 4vw, 3.5rem);
--font-size-h2: clamp(1.6rem, 3vw, 2.5rem);
--font-size-h3: clamp(1.2rem, 2vw, 1.75rem);
--font-size-lead: clamp(1.1rem, 1.5vw, 1.3rem);
--font-size-body: 1rem;
--font-size-small: 0.875rem;

--font-weight-light: 300;
--font-weight-regular: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;

--line-height-tight: 1.15;
--line-height-heading: 1.25;
--line-height-body: 1.75;
--line-height-relaxed: 1.9;
```

### New Spacing Tokens

```scss
/* ─── SPACING ─── */
--spacing-xs: 4px;
--spacing-small: 8px;
--spacing-medium: 16px;
--spacing-large: 24px;
--spacing-xlarge: 40px;
--spacing-xxlarge: 64px;
--spacing-section: clamp(64px, 10vw, 120px);
--spacing-hero: clamp(80px, 12vw, 160px);
```

### Border Radius Tokens (add these — they don’t exist yet)

```scss
/* ─── BORDER RADIUS ─── */
--radius-small: 6px;
--radius-medium: 12px;
--radius-large: 20px;
--radius-pill: 100px;
```

Also add the two missing variables that were flagged in the audit:

```scss
--color-background-secondary: #EEE9E1;
--border-width-thin: 1px;
```

After saving:

- Run npm run lint
- Run npx tsc –noEmit
- Report every token that changed and every token that was added

```
---

## Prompt 2 — Font Setup (`layout.tsx`)
```

Read src/app/layout.tsx carefully before making any changes.

Add Cormorant Garamond and DM Sans via next/font/google.

Requirements:

- Import both fonts from ‘next/font/google’
- Cormorant Garamond: weights [300, 400, 500], styles [‘normal’, ‘italic’], subsets [‘latin’], variable ‘–font-cormorant’, display: ‘swap’
- DM Sans: weights [300, 400, 500, 600], subsets [‘latin’], variable ‘–font-dm-sans’, display: ‘swap’
- Apply both font variables to the <html> element via className
- Do not remove any existing className values on <html> — append to them
- Do not change any metadata, analytics, or schema components

Then update src/styles/variables.scss to confirm:
–font-display references var(–font-cormorant)
–font-body references var(–font-dm-sans)

Then update src/styles/globals.scss:

- Set body { font-family: var(–font-body), sans-serif; }
- Set h1, h2, h3, h4, h5, h6 { font-family: var(–font-display), serif; font-weight: var(–font-weight-light); }
- Do not change anything else in globals.scss yet

After saving:

- Run npm run lint
- Run npx tsc –noEmit
- Run npm run dev and confirm no font loading errors
- Report what changed in layout.tsx and globals.scss

```
---

## Prompt 3 — Globals Rebuild (`globals.scss`)
```

Read src/styles/globals.scss carefully before making any changes.
Save a backup as src/styles/globals.scss.bak

Rewrite globals.scss from scratch with the following sections.
Keep the accessibility features (skip links, sr-only, reduced motion, high contrast) — move them to the bottom.
Remove the Safari debug code (lines with !important background/colour overrides).

### Section 1: CSS Reset

Modern minimal reset:

- box-sizing: border-box on *, *::before, *::after
- margin: 0, padding: 0 on *
- html: font-size 16px, scroll-behavior smooth, -webkit-font-smoothing antialiased
- img, video: max-width 100%, display block
- input, button, textarea: font: inherit

### Section 2: Body defaults

- background: var(–color-bg)
- color: var(–color-text)
- font-family: var(–font-body), sans-serif
- font-size: var(–font-size-body)
- line-height: var(–line-height-body)
- min-height: 100vh

### Section 3: Typography defaults

- h1–h6: font-family var(–font-display), font-weight var(–font-weight-light), line-height var(–line-height-heading), color var(–color-text)
- h1: font-size var(–font-size-h1)
- h2: font-size var(–font-size-h2)
- h3: font-size var(–font-size-h3)
- p: margin-bottom var(–spacing-medium), max-width 65ch on prose paragraphs
- a: color var(–color-brand), text-decoration underline, hover color var(–color-brand-hover)
- strong: font-weight var(–font-weight-semibold)

### Section 4: Layout utilities

- .container: max-width 1200px, margin 0 auto, padding 0 var(–spacing-large)
- .section: padding var(–spacing-section) 0
- .visually-hidden / .sr-only: existing pattern, keep it

### Section 5: Focus and accessibility (keep existing patterns, update colours to new tokens)

After saving:

- Run npm run lint
- Run npm run dev and do a visual check that the background is now #F8F6F1 (linen) not the old blue gradient
- Report every section rewritten and anything removed

```
---

## Prompt 4 — Header Redesign
```

Read src/components/layout/header.tsx and src/components/layout/header.module.scss carefully.

Redesign the header component with the following spec. Keep all existing functionality
(mobile hamburger menu, navigation links, responsive behaviour). Only change the visual layer.

### Visual spec:

- Background: var(–color-header) — deep sage #3D5940
- Text and nav links: var(–color-header-text) — linen white
- Height: 68px desktop, 60px mobile
- Logo: font-family var(–font-display), font-size 1.4rem, font-weight var(–font-weight-medium), letter-spacing 0.02em
- Nav links: font-family var(–font-body), font-size var(–font-size-small), letter-spacing 0.06em, text-transform uppercase, no underline
- Nav link hover: color var(–color-accent) — warm sand, transition 200ms ease
- Active nav link: color var(–color-accent)
- “Book Now” button: pill shape (border-radius var(–radius-pill)), background var(–color-accent), color var(–color-header), font-weight var(–font-weight-medium), padding 8px 20px, hover background var(–color-accent-light) with color var(–color-brand-hover), transition 200ms ease
- Mobile menu background: var(–color-header)
- Remove any box-shadow — use a 1px bottom border: var(–border-width-thin) solid rgba(255,255,255,0.1) instead
- No gradient backgrounds anywhere in the header

### Do not change:

- The navigation links or their href values
- The mobile hamburger toggle logic
- The sticky/fixed positioning behaviour
- Any ARIA attributes or accessibility features

After saving:

- Run npm run lint
- Run npx tsc –noEmit
- Report every class that changed in the module and what it changed to

```
---

## Prompt 5 — Footer Redesign
```

Read src/components/layout/footer.tsx and src/components/layout/footer.module.scss carefully.

Redesign the footer with the following spec. Keep all existing links, content and structure.
Only change the visual layer.

### Visual spec:

- Background: var(–color-text) — warm near-black #282822
- Text: var(–color-header-text) — linen white
- Link colour: var(–color-accent-light) — pale sand, hover var(–color-accent)
- Section heading labels: font-family var(–font-display), font-size 1.1rem, font-weight var(–font-weight-light), font-style italic, color var(–color-accent)
- Divider between footer sections: var(–border-width-thin) solid rgba(255,255,255,0.1)
- Bottom bar (copyright): font-size var(–font-size-small), color var(–color-text-muted) on a slightly darker background (rgba(0,0,0,0.2))
- Social icons: 32px, filter: brightness(0) invert(1) to make them white, hover opacity 0.7
- BACP badge: max-width 48px, opacity 0.85
- Padding: var(–spacing-xxlarge) top and bottom
- Max-width container: 1200px centred

### Remove:

- Any background gradients
- Any hardcoded colour values — replace with tokens

After saving:

- Run npm run lint
- Run npx tsc –noEmit
- Report every class that changed

```
---

## Prompt 6 — Homepage Rebuild
```

Read src/app/page.tsx and its .module.scss carefully.
Read src/styles/variables.scss to confirm current token names before starting.

Rebuild the homepage layout with the following section structure.
Keep all existing metadata exports, schema components, and SEO logic.
Replace only the JSX layout and all associated styles.

### Section 1: Hero

- Two-column layout on desktop (55% content, 45% image), single column stacked on mobile (image below)
- Left/top: eyebrow text “Colchester & Online · BACP Registered” in var(–font-body), font-size var(–font-size-small), letter-spacing 0.1em, text-transform uppercase, color var(–color-brand)
- Headline: “You don’t have to keep holding it together alone.” in var(–font-display), font-size var(–font-size-hero), font-weight var(–font-weight-light), font-style italic, color var(–color-text), line-height var(–line-height-tight)
- Subheading: “Psychodynamic therapy for children, teenagers and adults — in Colchester and online across the UK.” in var(–font-body), font-size var(–font-size-lead), color var(–color-text-muted), font-weight var(–font-weight-light)
- CTA button: “Book a Free Consultation” — primary pill button using var(–color-brand) tokens
- Secondary link: “Learn about my approach →” in var(–color-brand), no button styling, underline on hover
- Right/bottom: Andreea’s photo (andreea.jpg) — border-radius var(–radius-large), aspect-ratio 4/5 on desktop, object-fit cover
- Hero padding: var(–spacing-hero) top, var(–spacing-xxlarge) bottom
- Background: var(–color-bg) — no gradient

### Section 2: Trust bar

- Single row, centred, padding var(–spacing-large) 0
- Border top and bottom: var(–border-width-thin) solid var(–color-border)
- 3 items separated by subtle dividers:
  · BACP Registered Member
  · Colchester & Online
  · All Ages Welcome
- Font: var(–font-body), var(–font-size-small), letter-spacing 0.08em, text-transform uppercase, color var(–color-text-muted)
- Background: var(–color-surface)

### Section 3: How I Can Help

- Section heading: “How I Can Help” — var(–font-display), centred, font-style italic
- 3-column card grid on desktop, 1 column on mobile
- Cards: background var(–color-surface), border var(–border-width-thin) solid var(–color-border), border-radius var(–radius-medium), padding var(–spacing-large)
- Each card: service name as h3, 2-sentence description, “Learn more →” link in var(–color-brand)
- Services to show: Child Therapy, Teenage Therapy, Adult & Young Adult Therapy

### Section 4: About Andreea (pull quote style)

- Background: var(–color-surface)
- Two column: left is a short personal statement from Andreea (2–3 sentences, warm and human), right is a small photo or decorative element
- Andreea's name and credentials below the statement: "Andreea Horhocea — MA Psychodynamic Psychotherapy, BACP Registered"
- Font: var(–font-display), font-size 1.4rem, font-style italic, font-weight var(–font-weight-light)
- Link: “More about me →”

### Section 5: CTA

- Centred, background var(–color-accent-light), padding var(–spacing-section)
- Heading: “Ready to take the first step?” — var(–font-display), italic
- Sub: “I offer a free 15-minute phone consultation. No commitment required.”
- Button: “Book Now” — primary pill button

After saving:

- Run npm run lint
- Run npx tsc –noEmit
- Check mobile layout at 375px mentally
- Report every section built and any decisions made

```
---

## Prompt 7 — Button Component
```

Read src/components/ui/button.tsx and src/components/ui/button.module.scss carefully.

Update the button component to support three variants: primary, secondary, outline.
Keep the existing TypeScript interface and extend it with a variant prop.

### Variant specs:

Primary (default):

- Background: var(–color-brand)
- Text: var(–color-header-text) — white
- Border: none
- Hover: background var(–color-brand-hover)
- Border radius: var(–radius-pill)
- Padding: 12px 28px
- Font: var(–font-body), var(–font-size-small), font-weight var(–font-weight-medium), letter-spacing 0.04em
- Transition: background 200ms ease, transform 150ms ease
- Hover transform: translateY(-1px)

Secondary:

- Background: transparent
- Text: var(–color-brand)
- Border: var(–border-width-thin) solid var(–color-brand)
- Hover: background var(–color-brand), color var(–color-header-text)
- Same radius, padding, font as primary

Outline (subtle):

- Background: transparent
- Text: var(–color-text-muted)
- Border: var(–border-width-thin) solid var(–color-border)
- Hover: border-color var(–color-brand), color var(–color-brand)
- Same radius, padding, font as primary

### All variants:

- cursor pointer
- display inline-flex, align-items center, gap var(–spacing-small)
- No box-shadow
- Focus-visible: outline 2px solid var(–color-brand), outline-offset 2px

Update buttonLinks.module.scss to use the same token-based approach if it contains hardcoded values.

After saving:

- Run npm run lint
- Run npx tsc –noEmit
- Report the variant interface added and every style token used

```
---

## Prompt 8 — Service Pages
```

Read the following service page files carefully before starting:

- src/app/child-therapy/page.tsx + .module.scss
- src/app/teenage-therapy/page.tsx + .module.scss
- src/app/young-adult-therapy/page.tsx + .module.scss
- src/app/services/page.tsx + .module.scss

Apply a consistent page template to all 4 pages. Keep all existing metadata,
schema components, and copy. Only update the layout and visual styling.

### Page template structure:

1. Page hero (not full screen — contained):
- Eyebrow: page category label, uppercase, var(–font-size-small), var(–color-brand)
- H1: existing page title, var(–font-display), font-style italic
- Lead paragraph: existing intro copy, var(–font-size-lead), var(–color-text-muted)
- Background: var(–color-bg), padding var(–spacing-xxlarge) 0
1. Content sections:
- Background alternates: var(–color-bg) and var(–color-surface) per section
- Max-width 780px centred for prose content
- Headings: var(–font-display), italic
- Body: var(–font-body), var(–line-height-body)
1. CTA block at bottom of every service page:
- “Ready to get started?” heading
- “Book a free 15-minute consultation” sub
- Primary button linking to /book-now
- Background: var(–color-accent-light)

### Shared module:

Create src/components/ui/PageHero.tsx + PageHero.module.scss
This component accepts: eyebrow, title, lead props
Use it in all 4 pages to avoid repeating the hero markup

After saving all files:

- Run npm run lint
- Run npx tsc –noEmit
- Report the shared component created and every page updated

```
---

## Prompt 9 — Fix & Clean
```

This prompt addresses all issues flagged in the redesign audit. Work through each item.

### Fix 1: scroll-to-top.tsx inline styles

Read src/components/ui/scroll-to-top.tsx
Move all inline styles to src/components/ui/scroll-to-top.module.scss
Use only CSS tokens from variables.scss — no hardcoded values
The button should use var(–color-brand) as background (was hardcoded #164b39)

### Fix 2: GoogleMapEmbed.tsx inline styles

Read src/components/ui/GoogleMapEmbed.tsx
Move inline styles to a new src/components/ui/GoogleMapEmbed.module.scss
Use var(–radius-small) for border radius
Use var(–font-size-small) and var(–color-text-muted) for the caption text

### Fix 3: Image optimisation

Check public/images/ for files that have an -opt version but the original is still there:

- board-games.jpg → delete if board-games-opt.jpg exists
- instagram.png → delete if instagram-opt.png exists
- office.jpg → delete if office-opt.jpg exists
- room.jpg → delete if room-opt.jpg exists
- room-2.jpg → delete if room-2-opt.jpg exists
- doll-house.jpg → delete if doll-house-opt.jpg exists
- shelf.jpeg → delete if shelf-opt.jpeg exists

Then search all .tsx files for references to the deleted originals and update them to the -opt versions.

### Fix 4: Remove Safari debug code

Read src/styles/globals.scss
Remove the debug block (lines with “Debug styles for Safari” comment and associated !important rules)
These should no longer exist after the globals rebuild in Prompt 3 — confirm they are gone.

### Fix 5: Unused module

Check if src/components/ui/scroll-to-top.module.scss is now properly imported after Fix 1.
If it was previously unused, confirm it is now wired up correctly.

After all fixes:

- Run npm run lint
- Run npx tsc –noEmit
- Report every file changed and confirm each fix was applied

```
---

## Prompt 10 — Visual QA
```

This is the final quality assurance pass before the redesign is complete.
Do not make any new visual changes. Only fix issues found during this audit.

### Check 1: Token consistency

Search all .module.scss files for any hardcoded hex colour values (e.g. #164b39, #4a6a7a, #ffffff, #000000, #ccc, #666)
Report every instance found. Replace each one with the correct CSS custom property from variables.scss.

### Check 2: Font consistency

Search all .module.scss files for any hardcoded font-family declarations
All fonts should reference var(–font-display) or var(–font-body) only
Report and fix any instances found.

### Check 3: Spacing consistency

Search all .module.scss files for hardcoded px or rem spacing values that should be tokens
(e.g. margin: 24px should be margin: var(–spacing-large))
Report the worst offenders — fix any that are clearly misaligned with the token scale.

### Check 4: Mobile review

For these pages, read the module.scss and mentally verify the mobile layout at 375px:

- Homepage (page.tsx)
- Header (header.tsx)
- Footer (footer.tsx)
- Any service page
  Flag any layout that would break or look wrong on a small screen.

### Check 5: Accessibility

Check all new and modified components for:

- Button components have type attribute
- All images have non-empty alt text
- All interactive elements have visible focus styles using var(–color-brand)
- No colour is used as the only means of conveying information

### Check 6: Build check

Run npm run build
Report any build errors or warnings.
If there are TypeScript errors, fix them before finishing.

### Final report

Output a summary covering:

- Tokens: any remaining hardcoded values found
- Fonts: any rogue font declarations found
- Accessibility: any issues found and fixed
- Build: pass or fail with details
- Overall redesign status: complete / items remaining

```
---

*End of redesign prompt sequence.*
*Palette: Sage & Linen · Fonts: Cormorant Garamond + DM Sans · Hero: "You don't have to keep holding it together alone."*
```