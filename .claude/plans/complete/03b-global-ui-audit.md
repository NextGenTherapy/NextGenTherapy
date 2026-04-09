# Prompt 03b — Global UI audit: nav, footer, breadcrumbs, sitemap, 404

**Goal:** After Prompt 03 deletes, renames, and merges service pages, the global UI surfaces (navigation, footer, breadcrumbs, sitemap, 404 page) all need to be updated to reflect the new structure. This prompt handles every place a deleted or renamed URL might still appear.

**Prereq:** Read `docs/content-prompts/00-positioning-brief.md`. Run **immediately after Prompt 03**, before any cornerstone pages are built. Otherwise the nav will be inconsistent with new pages as they're created.

---

## Context

Prompt 03 made these changes:
- `/teenage-therapy` → `/teen-therapy` (renamed)
- `/neurodiversity-therapy` → `/neurodiversity` (renamed)
- `/young-adult-therapy` → `/therapy-for-women` (merged)
- `/lgbtq-therapy` → `/therapy-for-women#lgbtq` (merged)
- `/parent-support` → `/child-therapy#for-parents` (merged)
- `/about-therapy` → `/is-this-right-for-you` (merged)

Plus four new stub pages were created: `/therapy-for-women`, `/romanian-therapy`, `/online-therapy`, `/is-this-right-for-you`.

The redirects in `next.config.js` handle external traffic and bookmarks, but **internal links inside the codebase still point at dead URLs**. This prompt fixes that.

---

## Instructions for Claude Code

### Step 1 — Codebase grep for dead links

Run a grep across the entire codebase for every deleted or renamed URL. Document findings before making changes:

```bash
grep -rn "teenage-therapy\|neurodiversity-therapy\|young-adult-therapy\|lgbtq-therapy\|parent-support\|about-therapy" src/ --include="*.tsx" --include="*.ts" --include="*.scss" --include="*.json"
```

Create a file at `docs/seo-audit/dead-link-audit.md` listing every match by file and line number. Then update each one.

For renamed pages, swap the URL.  
For merged pages, swap the URL to the merge destination (with anchor where applicable).

### Step 2 — Desktop navigation

Find the navigation component. It's likely at `src/components/layout/Navigation.tsx` or `src/components/layout/Header.tsx`. Read it carefully before changing.

**Current nav (assumed) probably looks like:**
- Home / About / Services (dropdown with all the old service pages) / Blog / Contact

**New nav structure:**

The nav should have at most **6 top-level items** to stay clean. Use a "What I Work With" dropdown to surface the cornerstones without bloating the bar.

```
Home
About
What I Work With (dropdown)
  ├─ Therapy for Women
  ├─ ADHD & Autism in Adults
  ├─ Therapy for Teenagers
  ├─ Therapy for Children
  ├─ Therapy in Romanian
  ├─ Online Therapy
  └─ ─────────────────
  └─ Is This Right For You?
Pricing
Blog
Book a Free Call (highlighted CTA button, not a regular link)
```

**Implementation notes:**
- The dropdown should be keyboard-accessible (Tab to open, Enter to select, Esc to close)
- The "Book a Free Call" item should be visually distinct — use the existing button styling from the redesign, not a regular nav link
- The dropdown divider before "Is This Right For You?" is intentional — it's a qualifying page, not a service

### Step 3 — Mobile navigation

Mobile nav is often a separate component (hamburger menu, drawer, or modal). Find it — it might be `MobileNav.tsx`, `MobileMenu.tsx`, or inline in the Header component.

The mobile nav should mirror the desktop structure but as an expandable accordion rather than a hover dropdown:

```
Home
About
What I Work With ▼ (tap to expand)
  Therapy for Women
  ADHD & Autism in Adults
  Therapy for Teenagers
  Therapy for Children
  Therapy in Romanian
  Online Therapy
  Is This Right For You?
Pricing
Blog
Book a Free Call (CTA button at the bottom)
```

The mobile menu must:
- Close when a link is tapped
- Be fully scrollable if it overflows
- Have proper focus trapping (focus stays inside the open menu)
- Close on Esc
- Have an obvious close button

### Step 4 — Footer audit and rebuild

Find the footer component, likely at `src/components/layout/Footer.tsx`. Read it before changing.

**New footer structure:**

Five-column layout on desktop, stacking to single column on mobile.

**Column 1 — Brand**
- Site logo
- One-line description: *"Psychodynamic therapy in Colchester and online. BACP registered."*
- BACP membership badge with link to BACP profile

**Column 2 — What I Work With**
- Therapy for Women
- ADHD & Autism in Adults
- Therapy for Teenagers
- Therapy for Children
- Therapy in Romanian
- Online Therapy

**Column 3 — Service Areas**
- Therapy in Colchester
- Therapy in Wivenhoe
- Therapy in Mersea
- Therapy in Tiptree
- Therapy in Marks Tey
- Therapy in Manningtree
- Therapy in Clacton
- Therapy in Ipswich

**Column 4 — Site**
- About
- Pricing
- Is This Right For You?
- Blog
- FAQ
- Book a Free Call

**Column 5 — Contact & Connect**
- Address: Colchester Business Centre, 1 George Williams Way, Colchester CO1 2JS
- Phone: +44 7448 036017 *(click-to-call on mobile)*
- Email: andreeatherapytoday@gmail.com *(mailto link)*
- Social: Facebook + Instagram icons (both active — keep linked)

**Footer bottom strip (full width):**
- © Year Next Generation Therapy. All rights reserved.
- Links: Privacy Policy · Terms · Cookies
- Small text: *"BACP Registered Member. Psychodynamic Psychotherapy. UK GDPR compliant."*

### Step 5 — Social media icons

If the footer currently uses placeholder SVGs or has the "blank white circles" issue from your memory, fix it now. Use proper inline SVG icons from a clean source (Lucide, Heroicons, or hand-built):

```tsx
// Use lucide-react if available, or inline SVG
import { Facebook, Instagram } from 'lucide-react';
```

Each social icon should:
- Have an `aria-label` (e.g., `"Andreea on Facebook"`, not just `"Facebook"`)
- Open in a new tab with `rel="noopener noreferrer"`
- Have a visible focus state matching the rest of the design system
- Use `var(--color-text)` or equivalent token, never a hardcoded hex

### Step 6 — Breadcrumbs

If breadcrumbs exist as a component, find and audit them. They probably reference old URLs.

If breadcrumbs don't exist, **don't create them in this prompt** — leave that for the technical SEO prompt (12). Just confirm absence and note it in the audit file.

If they do exist:
- Update all hardcoded URL references to new paths
- Make sure the BreadcrumbList JSON-LD schema (if used) reflects the new URLs

### Step 7 — Sitemap

Read `src/app/sitemap.ts` (or `next-sitemap.config.js` if using the package).

Update to include:
- `/` (homepage, priority 1.0)
- `/about` (0.9)
- `/services` (0.8)
- `/therapy-for-women` (0.9)
- `/neurodiversity` (0.9)
- `/teen-therapy` (0.8)
- `/child-therapy` (0.8)
- `/romanian-therapy` (0.9)
- `/online-therapy` (0.9)
- `/is-this-right-for-you` (0.8)
- `/pricing` (0.7)
- `/blog` (0.7)
- `/faq` (0.6)
- `/book-now` (0.8)
- `/therapy-in-colchester` through `/therapy-in-ipswich` (0.7 each)
- `/privacy-policy` (0.3)
- `/terms` (0.3)

Exclude:
- Any page with `robots: noindex` metadata
- The four stub pages until they're filled in (Prompts 04, 06, 07, 09 will remove the noindex)

### Step 8 — 404 page

Find or create `src/app/not-found.tsx`. The current 404 (if it exists) is probably the Next.js default.

Replace with a branded 404 that:
- Uses the existing PageHero or a similar layout primitive
- Doesn't apologise excessively or use cute "Oops!" language
- Offers genuinely useful next steps

**404 page content:**

```tsx
<PageHero
  eyebrow="Page not found"
  title="That page doesn't exist — at least not anymore."
  lead="Some of the older pages on this site have been merged or renamed. Here's where you might have been heading."
/>
```

Then a clean list of the most likely destinations:

- **Therapy for Women** → `/therapy-for-women`
- **ADHD & Autism in Adults** → `/neurodiversity`
- **Therapy for Teenagers** → `/teen-therapy`
- **Therapy for Children** → `/child-therapy`
- **Therapy in Romanian** → `/romanian-therapy`
- **Online Therapy** → `/online-therapy`
- **About Andreea** → `/about`
- **Book a free 15-minute call** → `/book-now`

Closing line:
> Still can't find what you were looking for? [Send me a message](/book-now) and I'll point you in the right direction.

### Step 9 — Header logo and CTA

While you're in the header component, audit:
- Logo: links to `/`, has correct alt text, uses `next/image`, sized appropriately
- Header CTA button (if separate from nav): "Book a Free Call" → `/book-now`
- Sticky behaviour: confirm the header sticks correctly on scroll, doesn't overlap content
- Mobile breakpoint: confirm the hamburger appears at the right breakpoint and the desktop nav hides cleanly

### Step 10 — Final grep

After all changes, run the dead-link grep again to confirm zero matches:

```bash
grep -rn "teenage-therapy\|neurodiversity-therapy\|young-adult-therapy\|lgbtq-therapy\|parent-support\|about-therapy" src/
```

Expected output: nothing.

---

## Acceptance criteria

- `npm run lint` passes
- `npx tsc --noEmit` passes
- `npm run build` passes
- Final dead-link grep returns zero matches
- `docs/seo-audit/dead-link-audit.md` exists and documents what was found and fixed
- Desktop nav has ≤6 top-level items, with cornerstones in a "What I Work With" dropdown
- Mobile nav mirrors desktop structure as an accordion
- Footer has 5 columns desktop / 1 column mobile, with all the sections listed above
- Social icons render properly (no blank white circles), with `aria-label` and `rel="noopener noreferrer"`
- 404 page is branded and offers real navigation options
- Sitemap reflects new structure and excludes noindex stubs
- All keyboard accessibility checks pass for nav and mobile menu (Tab, Esc, Enter)

---

## Things to flag when done

- Screenshot desktop nav (open and dropdown-open states)
- Screenshot mobile nav (closed and open states)
- Screenshot footer at desktop and mobile
- Screenshot 404 page
- List of all files touched
- Any places where the existing component structure made the rebuild harder than expected
