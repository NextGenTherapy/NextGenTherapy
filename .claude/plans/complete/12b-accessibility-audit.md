# Prompt 12b — Accessibility audit (WCAG AA)

**Goal:** Audit the entire site against WCAG 2.1 AA standards and fix every issue. For a healthcare site, accessibility is both a legal requirement (Equality Act 2010) and a clinical one — neurodivergent users, users with anxiety, users in distress, and users with sensory or motor impairments are all part of the audience.

**Prereq:** Run AFTER all content prompts (01–11) and after the technical SEO prompt (12). This is one of the final polish prompts.

---

## Why this matters

- **Legal:** UK Equality Act 2010 requires reasonable adjustments for disabled users. WCAG 2.1 AA is the de facto standard.
- **Clinical:** Andreea's primary specialisms include neurodivergent adults — sensory-aware design isn't optional for them
- **Practical:** People in mental health distress often have reduced cognitive load. A site that's hard to navigate is a site that loses them at the moment they most need help.
- **SEO bonus:** Google rewards accessible sites with better rankings. Many WCAG improvements are also SEO improvements.

---

## Instructions for Claude Code

This prompt has two phases: **audit** and **fix**.

### Phase 1 — Audit

Run an automated audit using `axe-core` or `pa11y`. If neither is installed, install `@axe-core/cli` as a devDependency:

```bash
npm install --save-dev @axe-core/cli
```

Then run it against every page (locally with `npm run dev`):

```bash
npx axe http://localhost:3000 --tags wcag2a,wcag2aa --save axe-report.json
```

Repeat for every key page. Document findings in `docs/seo-audit/accessibility-audit.md` with a table of:
- Page URL
- Issue ID
- WCAG criterion
- Severity
- Element selector
- Fix applied

### Phase 2 — Fix

Walk through every issue and fix it. Below is a non-exhaustive checklist of categories to manually verify, regardless of what the automated tools say.

---

## Manual checklist

### 1. Colour contrast

- Body text: minimum **4.5:1** contrast against background
- Large text (24px+ or 18.66px+ bold): minimum **3:1**
- UI components (buttons, form borders, focus indicators): minimum **3:1**

The Sage & Linen palette needs verification:
- `#3D5940` (deep sage) on `#F8F6F1` (linen) = contrast ratio ?
- `#A89070` (warm sand) on `#F8F6F1` = contrast ratio ?
- White text on `#3D5940` = contrast ratio ?
- Footer text colours
- Link colours in body copy
- Button text on primary CTA

Use WebAIM contrast checker or `axe`. Flag any combination below threshold and either:
1. Adjust the colour token (preferred)
2. Add a darker variant for text-heavy contexts

### 2. Focus indicators

Every interactive element must have a **visible focus state** that's not just colour. Currently many sites rely on `outline: none` and rely on hover only — this fails for keyboard users.

Audit:
- All buttons
- All links
- All form inputs
- Nav dropdown items
- Mobile menu items
- Accordion triggers (FAQ)
- Skip-to-content link

Fix pattern:

```scss
.button {
  &:focus-visible {
    outline: 2px solid var(--color-focus-ring);
    outline-offset: 2px;
  }
}
```

`focus-visible` rather than `focus` so the indicator only appears for keyboard users, not mouse clicks.

### 3. Keyboard navigation

Test the entire site using only a keyboard. Tab order should be logical. Every interaction should be possible without a mouse.

Specific tests:
- Tab through the homepage from top to bottom — does the tab order match the visual order?
- Open the nav dropdown with keyboard (Enter on the trigger) — can you Tab into the menu items?
- Open the mobile menu — does focus move into it? Can you Esc to close? Does focus return to the trigger button?
- FAQ accordions — do Enter and Space toggle them? Do Arrow keys move between accordion headers?
- Contact form — can you complete and submit using only the keyboard?
- Cookie banner — can you accept/decline with the keyboard?

### 4. Screen reader testing

Test the homepage and About page with VoiceOver (Mac/iOS), NVDA (Windows), or TalkBack (Android). Listen for:
- Page title is read first
- Headings are announced with their level (h1, h2, etc.)
- Images have meaningful alt text (not "image", "photo", or empty for non-decorative images)
- Decorative images have `alt=""` (empty, not missing)
- Form inputs are announced with their labels
- Errors are announced when they appear
- Buttons say what they do ("Book a free 15-minute call", not just "click here")

### 5. Heading hierarchy

Each page should have:
- Exactly one `<h1>` (usually in PageHero)
- `<h2>`s for top-level sections
- `<h3>`s for sub-sections
- No skipped levels (no h1 → h3)

Audit using browser dev tools or `axe`. Fix any pages with:
- Multiple h1s
- Missing h1
- Skipped levels

### 6. Image alt text

Audit every `<Image>` and `<img>` (there should be no `<img>` per the project rules — use `next/image`).

For each image, the alt text should be:
- **Descriptive of content**, not filename ("Andreea sitting at her desk in the therapy room", not "andreea-photo")
- **Empty (`alt=""`) for purely decorative images** (background patterns, dividers, etc.)
- **Functional, not literal**, for functional images (a logo image inside a link should have alt text describing where the link goes, not "logo")

### 7. Form accessibility

Already covered in detail in Prompt 09c, but verify here:
- All inputs have `<label>` (not placeholder-only)
- Error messages use `aria-describedby` and `aria-invalid`
- Required fields have `aria-required` and visual indicator (not just red colour)
- Radio groups use `<fieldset>` and `<legend>`
- Submit failures move focus to first error

### 8. Skip to content link

Every page should have a "Skip to main content" link as the first focusable element. Visually hidden until focused, then visible.

```tsx
<a href="#main" className="skip-link">Skip to main content</a>
```

```scss
.skip-link {
  position: absolute;
  left: -9999px;
  
  &:focus {
    position: fixed;
    top: var(--space-md);
    left: var(--space-md);
    z-index: 1000;
    padding: var(--space-sm) var(--space-md);
    background: var(--color-bg);
    color: var(--color-text);
    border: 2px solid var(--color-focus-ring);
  }
}
```

The `<main>` element should have `id="main"`.

### 9. Reduced motion

Respect `prefers-reduced-motion`. Any animation, transition longer than 200ms, parallax effect, or auto-playing carousel should be disabled or significantly reduced for users who prefer reduced motion.

```scss
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

This is especially important for neurodivergent users.

### 10. Language attribute

The `<html>` element must have `lang="en-GB"` (or `lang="en"`).

For the Romanian therapy page, sections of Romanian content should be marked with `lang="ro"` so screen readers pronounce them correctly:

```tsx
<section lang="ro">
  <p>Sunt Andreea — psihoterapeut psihodinamic...</p>
</section>
```

### 11. Page titles

Every page must have a unique, descriptive `<title>`. Already covered in Prompt 12 metadata audit but verify here.

### 12. Link text

No "click here", "read more", "learn more" links without context. Each link should make sense out of context (screen reader users often pull up a list of all links on a page).

Find and fix:
```bash
grep -rn ">Read more<\|>Learn more<\|>Click here<" src/
```

Replace with descriptive text: "Read more about therapy for women" rather than just "Read more".

### 13. ARIA landmarks

Every page should have:
- One `<header>` (with the site nav inside)
- One `<main id="main">` containing the page content
- One `<footer>`
- `<nav>` for the main navigation, with `aria-label` if there are multiple navs ("Main navigation", "Footer navigation")

### 14. Cookie banner

Per the memory note, the cookie banner has had issues. Verify:
- Banner is keyboard accessible
- Banner has an `aria-label` or `role="dialog"` and is announced to screen readers
- Banner does NOT trap focus (users can tab away to read the page if they want)
- Accept and decline buttons are equally prominent (no dark patterns)
- Banner does not cover content that needs to be readable (especially crisis signposting)

---

## Acceptance criteria

- `npm run lint` passes
- `npx tsc --noEmit` passes
- `npx axe http://localhost:3000` returns zero critical issues for every key page
- `docs/seo-audit/accessibility-audit.md` exists with full audit findings
- Manual keyboard test passes for: homepage, About, Therapy for Women, Contact, FAQ
- Manual screen reader test passes for: homepage, About
- Skip-to-content link present on every page
- Reduced motion media query in place
- `lang="en-GB"` on `<html>` and `lang="ro"` on Romanian content sections
- All colour combinations in the Sage & Linen palette pass WCAG AA contrast

---

## Things to flag when done

- A summary of what was fixed and what was left as known limitation
- Screenshots showing focus states on key interactive elements
- Any colour token changes (this affects the design system and Andreea should sign off)
- Any pages where heading hierarchy needed restructuring
