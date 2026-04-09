# Prompt 12 — Technical SEO and Google Business Profile optimisation

**Goal:** Lock in the technical SEO foundation and optimise the existing Google Business Profile. This is the last content-phase prompt — after this, the site is ready for organic traffic to start compounding.

**Prereq:** Read `docs/content-prompts/00-positioning-brief.md`. Run AFTER all previous prompts (01–11) so the pages and structure exist.

---

## Part A — On-site technical SEO

### A1. Metadata audit

Read every page in `src/app/` and confirm each one has:

- `export const metadata: Metadata = { title, description }`
- **Title format:** `[Specific thing] | [Brand or context]` — max ~60 characters
- **Description:** 140–160 characters, ends with a call-to-action or distinctive hook
- Unique title and description per page (no duplicates)

Create a summary table at `docs/seo-audit/metadata-audit.md` listing every page, its current title and description, and any flags.

### A2. Schema markup

The site should have the following JSON-LD schemas in place:

- **`LocalBusiness` / `MedicalBusiness`** on the homepage with:
  - Name, address, phone, opening hours
  - `areaServed` covering Colchester + surrounding towns + "United Kingdom" (for online)
  - `availableLanguage: ["English", "Romanian"]`
  - `priceRange: "£60"`
  - BACP membership as a credential

- **`Person`** schema on the About page with:
  - Name, job title, qualifications
  - `alumniOf: University of Essex`
  - `memberOf: BACP`

- **`WebPage` with `about` reference** on each cornerstone page

- **`BreadcrumbList`** on all non-homepage pages

- **`FAQPage`** on the FAQ page (if it exists)

- **`Article`** on all blog posts (when they're written)

If schema components don't exist as shared components, create them in `src/components/seo/`:
- `LocalBusinessSchema.tsx`
- `PersonSchema.tsx`
- `BreadcrumbSchema.tsx`
- `ArticleSchema.tsx`
- `FaqSchema.tsx`

Each takes typed props. No inline JSON-LD scattered through pages.

### A3. Sitemap

Check `src/app/sitemap.ts`. It should:

- Include every indexable page (all cornerstones, all location pages, all blog posts, legal pages)
- Set `priority` — homepage 1.0, cornerstones 0.9, location pages 0.7, blog posts 0.6, legal 0.3
- Set `changeFrequency` — homepage weekly, cornerstones monthly, location pages yearly, blog yearly, legal yearly
- Exclude any pages marked `robots: noindex`

### A4. robots.txt

Confirm `public/robots.txt` (or `src/app/robots.ts`) allows all major crawlers and points to the sitemap.

```txt
User-agent: *
Allow: /
Disallow: /api/

Sitemap: https://www.nextgentherapy.co.uk/sitemap.xml
```

### A5. Internal linking

Audit internal linking. Every cornerstone should:

- Link to at least 2 other cornerstones
- Link to at least 2 relevant blog posts (when they exist)
- Be linked to from the homepage
- Be linked to from at least 1 relevant location page

Every location page should:
- Link to the 3–4 most relevant cornerstones
- Link back to `/services`
- NOT link to every other location page (that's footer's job)

Create or update the footer to have a "Service areas" block listing all 8 location pages.

### A6. Image alt text

Audit all `<Image>` usages across the site. Every image needs:

- A descriptive, specific alt attribute — not "therapy image" or "photo of room"
- Correct `width` and `height` props
- `priority` on above-the-fold images only
- `sizes` prop on responsive images

### A7. Page speed

Run `npm run build` and check the bundle size. Flag any pages where:

- First Load JS > 200 kB
- A component is loaded client-side that could be server-side
- Images are imported rather than using `next/image`

### A8. Heading hierarchy

Every page should have exactly one `<h1>` (usually in PageHero). All subsequent headings should nest logically (h1 → h2 → h3, no skipping levels). Audit and fix.

---

## Part B — Google Business Profile optimisation

Google Business Profile is already live — this section is a checklist for Luke to work through with Andreea, since it requires GBP admin access. Document in `docs/seo-audit/gbp-checklist.md`.

### Profile completeness

- [ ] Business name: "Next Generation Therapy" (or "Andreea Horhocea — Next Generation Therapy" if policies allow)
- [ ] Category (primary): "Psychotherapist"
- [ ] Category (secondary): "Mental Health Service", "Counselor"
- [ ] Full address: Colchester Business Centre, 1 George Williams Way, Colchester CO1 2JS
- [ ] Service area: Colchester + surrounding towns (list all 7)
- [ ] Phone: +44 7448 036017
- [ ] Website: https://www.nextgentherapy.co.uk
- [ ] Hours: Mon all day, Tue all day, Wed (online only), Fri 9–2 — *{{ CONFIRM exact hours with Andreea }}*
- [ ] Description: 750-character max, using the positioning brief's one-sentence positioning as the backbone
- [ ] Languages: English, Romanian

### Photos

Upload at least:
- 1 exterior shot of the building
- 1 interior shot of the therapy room (emphasising the sensory-aware setup — plants, soft lighting, fidgets visible)
- 1 professional headshot of Andreea
- 1 BACP logo / credential image

### Services

Add all of these as GBP services:
- Individual psychotherapy
- Psychodynamic therapy
- Online therapy
- Romanian-speaking therapy
- Therapy for women
- Neurodiversity-affirmative therapy
- Adult ADHD therapy
- Adult autism therapy
- Teen therapy
- Child therapy
- Parent support

### Posts

Plan to post 1 GBP update per month. Topics: new blog posts, seasonal reminders, specific service spotlights. These help ranking signals and cost nothing to produce once the blog content exists.

### Q&A

Seed the GBP Q&A section with 3–5 questions Andreea commonly gets asked, with her real answers:
- "Do you offer CBT?" → No, psychodynamic. Link to `/is-this-right-for-you`
- "Do you see couples?" → No, individuals only
- "What age groups do you work with?" → 4 to late 30s / early 40s
- "Do you offer online therapy?" → Yes, Wednesdays, age 16+
- "Do you speak Romanian?" → Yes

### Reviews

Because BACP ethical constraints prevent soliciting client testimonials, the review strategy is:
- Do not solicit reviews from clients
- If unsolicited reviews appear, respond professionally and briefly — never confirming or denying therapeutic relationship
- Flag clearly fake or malicious reviews for removal through GBP support

---

## Part C — External SEO

### C1. BACP directory profile

Audit her BACP profile at https://www.bacp.co.uk/therapists/385976/andreea-horhocea/london-e16

- Flag if location shows London instead of Colchester — that's a significant SEO issue and should be corrected in her BACP account
- Confirm specialisms listed match the site: psychodynamic, women, neurodiversity, Romanian language
- Confirm website link is correct

### C2. Psychology Today profile

Audit her Psychology Today profile at psychologytoday.com/gb/counselling/andreea-horhocea-colchester/1079547

- Confirm specialisms and client ages match site
- Confirm fee shows £60
- Confirm online therapy and Romanian language are both listed
- Confirm website link is correct

### C3. Counselling Directory

Check whether she has a profile on counselling-directory.org.uk — if yes, audit; if no, flag as a potential add.

### C4. Welldoing.org

Check welldoing.org — another major UK therapy directory. Flag for profile creation if absent.

---

## Acceptance criteria

- `npm run lint` passes
- `npx tsc --noEmit` passes
- `npm run build` passes with no warnings about metadata
- All schema components created in `src/components/seo/` and used consistently
- `docs/seo-audit/metadata-audit.md` created with full page-by-page audit
- `docs/seo-audit/gbp-checklist.md` created with the GBP checklist for Luke/Andreea to work through
- Sitemap updated to include all new pages
- robots.txt confirmed
- Footer updated with "Service areas" block
- Every page has unique metadata
- No page has more than one `<h1>`

---

## Things to flag when done

- Any pages where metadata couldn't be made unique without changing content
- Any schema warnings when running Google's Rich Results Test
- The BACP location issue (London vs Colchester) if it exists — this needs Andreea to fix in her BACP account, we can't do it from the codebase
- A prioritised list of follow-up actions for Luke, separated into "requires Andreea" and "code-only"
