# Prompt 03 — Service pages audit and consolidation

**Goal:** The site currently has 7+ overlapping service pages that cannibalise each other in Google and dilute authority. Consolidate down to a focused set aligned with Andreea's actual specialisms. This is a structural change, not just a copy change.

**Prereq:** Read `docs/content-prompts/00-positioning-brief.md` first. Run this prompt AFTER 01 (About) and 02 (Homepage), because the homepage will link to several of the pages that change here.

---

## Context — what's currently on the site

Existing service pages:
- `/services`
- `/child-therapy`
- `/teenage-therapy`
- `/young-adult-therapy`
- `/neurodiversity-therapy`
- `/lgbtq-therapy`
- `/parent-support`
- `/about-therapy`

**Problems:**
1. `teenage-therapy` and `young-adult-therapy` have nearly identical content
2. `lgbtq-therapy` is a standalone page but Andreea's LGBTQ+ specialism is specifically with women in same-sex relationships — it belongs inside the women's therapy cornerstone, not as its own page
3. `parent-support` duplicates content that should live inside `child-therapy` and `teen-therapy`
4. `about-therapy` is generic psychodynamic-explainer content that belongs inside `/is-this-right-for-you`
5. None of them reference Andreea's actual experience, CPD, or room setup
6. None of them are consolidated around her real primary niche: women

---

## Target structure after this prompt

```
/services                   Services hub — lightweight, signposts to cornerstones
/therapy-for-women          NEW cornerstone (created in Prompt 04)
/neurodiversity             Rewritten (Prompt 05)
/teen-therapy               Renamed from teenage-therapy, absorbs young-adult content
/child-therapy              Kept, trimmed, parent-support absorbed
/romanian-therapy           NEW (Prompt 06)
/online-therapy             NEW (Prompt 07)
```

**Pages to delete (with 301 redirects):**
- `/teenage-therapy` → `/teen-therapy`
- `/young-adult-therapy` → `/therapy-for-women` (since her young adult clients are mostly women in their 20s)
- `/lgbtq-therapy` → `/therapy-for-women#lgbtq` (anchor link to a section within)
- `/parent-support` → `/child-therapy#for-parents`
- `/about-therapy` → `/is-this-right-for-you` (created in Prompt 09)
- `/neurodiversity-therapy` → `/neurodiversity` (rename only)

---

## Instructions for Claude Code — THIS PROMPT

This prompt only handles the structural work: redirects, the `/services` hub rewrite, renaming `teenage-therapy` → `teen-therapy`, renaming `neurodiversity-therapy` → `neurodiversity`, and absorbing `parent-support` into `child-therapy`. 

**Do NOT create the new pages in this prompt** (`/therapy-for-women`, `/romanian-therapy`, `/online-therapy`, `/is-this-right-for-you`). Those have dedicated prompts. For now, create stub pages so redirects don't 404:

```tsx
// src/app/therapy-for-women/page.tsx
export default function TherapyForWomenPage() {
  return <p>This page is coming soon.</p>;
}
```

### Step 1 — Rename `teenage-therapy` to `teen-therapy`

- Move `src/app/teenage-therapy/` → `src/app/teen-therapy/`
- Update all internal links across the codebase (grep for `/teenage-therapy`)
- Add redirect in `next.config.js`:

```js
async redirects() {
  return [
    { source: '/teenage-therapy', destination: '/teen-therapy', permanent: true },
    { source: '/neurodiversity-therapy', destination: '/neurodiversity', permanent: true },
    { source: '/young-adult-therapy', destination: '/therapy-for-women', permanent: true },
    { source: '/lgbtq-therapy', destination: '/therapy-for-women#lgbtq', permanent: true },
    { source: '/parent-support', destination: '/child-therapy#for-parents', permanent: true },
    { source: '/about-therapy', destination: '/is-this-right-for-you', permanent: true },
  ];
},
```

### Step 2 — Rename `neurodiversity-therapy` to `neurodiversity`

- Move `src/app/neurodiversity-therapy/` → `src/app/neurodiversity/`
- Update all internal links

### Step 3 — Merge `parent-support` content into `child-therapy`

- Read `src/app/parent-support/page.tsx` and extract the genuinely useful parent-facing content
- In `src/app/child-therapy/page.tsx`, add a new section at the end: `<section id="for-parents">` with an H2 `"For parents"` containing the absorbed content
- Delete `src/app/parent-support/` after absorbing its content
- The redirect handles existing traffic

### Step 4 — Create stubs for the new cornerstone pages

Create these files as stubs so the homepage and redirects don't break:
- `src/app/therapy-for-women/page.tsx`
- `src/app/romanian-therapy/page.tsx`
- `src/app/online-therapy/page.tsx`
- `src/app/is-this-right-for-you/page.tsx`

Each stub:

```tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Coming soon | Next Generation Therapy",
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <main>
      <p>This page is coming soon.</p>
    </main>
  );
}
```

`robots: { index: false }` prevents Google indexing these until they have real content.

### Step 5 — Rewrite `/services` as a lightweight hub

Read the existing `src/app/services/page.tsx`. Replace the main content with a clean hub page that signposts to the cornerstones. Keep PageHero, keep metadata export, keep schema.

**PageHero props:**
```tsx
<PageHero
  eyebrow="What I Work With"
  title="Therapy for women, neurodivergent adults, teenagers, and children."
  lead="I'm a psychodynamic therapist in Colchester and online. Here's an honest look at the kinds of things I work with, and who I work best with."
/>
```

**Body — a simple list of linked cards, one per cornerstone:**

1. **Therapy for women** → `/therapy-for-women`  
   *For overthinking, burnout, self-esteem, body image, anxiety, identity. Includes work with women in same-sex relationships.*

2. **ADHD and autism in adults** → `/neurodiversity`  
   *Affirmative therapy for late-diagnosed and self-identified neurodivergent adults. Sensory-aware room.*

3. **Therapy for teenagers** → `/teen-therapy`  
   *Ages 13–17. Anxiety, self-harm, school, identity, friendships. In-person only.*

4. **Therapy for children** → `/child-therapy`  
   *Ages 4–12. Play-based psychodynamic work with parent involvement.*

5. **Therapy in Romanian** → `/romanian-therapy`  
   *Terapie în limba română pentru adulți și adolescenți.*

6. **Online therapy (UK-wide)** → `/online-therapy`  
   *Wednesdays. Age 16 and over only. Zoom.*

Then a short honest closing paragraph:

> **What I don't offer:** couples therapy, short-term CBT, forensic work, or therapy for active psychosis and untreated addiction. If that's what you need, I'm happy to point you toward people who specialise in it.

---

## Metadata for `/services`

```ts
export const metadata: Metadata = {
  title: "Therapy Services — Colchester & Online | Next Generation Therapy",
  description:
    "Psychodynamic therapy services for women, neurodivergent adults, teenagers and children. In-person in Colchester and online across the UK. BACP registered. English and Romanian.",
};
```

---

## Acceptance criteria

- `npm run lint` passes
- `npx tsc --noEmit` passes
- `npm run build` succeeds with no broken links
- All redirects in `next.config.js` tested (visit old URLs, confirm 301 to new ones)
- All internal links across the codebase updated to new paths (no dangling `/teenage-therapy` or `/parent-support` references)
- Stub pages created for the four new pages with `robots: noindex`
- `/services` hub page rewritten with the cornerstone list
- `parent-support` content absorbed into `child-therapy#for-parents` section
- Sitemap (if it exists at `src/app/sitemap.ts`) updated to reflect new structure

---

## Things to flag when done

- Any links in the footer, header, or blog posts that needed updating
- Any unexpected places the old URLs appeared (schema markup, structured data, etc.)
- Screenshot of new `/services` page at desktop, tablet, mobile
- List of all files touched
