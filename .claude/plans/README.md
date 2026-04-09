# Content Prompts — Next Generation Therapy

This folder contains the sequential prompt set for the content + SEO overhaul of nextgentherapy.co.uk. The prompts are numbered in the order they should be run.

**Before running any prompt, read [`00-positioning-brief.md`](./00-positioning-brief.md).** It's the strategic reference that every prompt points back to. If a prompt contradicts the brief, the brief wins.

**Workflow:** One prompt at a time. Run in Claude Code in Cursor. Confirm `npm run lint && npx tsc --noEmit` pass before moving to the next. Take screenshots after each prompt for review before proceeding. Do not batch or parallelise.

---

## Full prompt sequence

| # | Prompt | What it does | Phase |
|---|--------|--------------|-------|
| 00 | [Positioning brief](./00-positioning-brief.md) | Strategic reference — read first | Reference |
| 01 | [About page rewrite](./01-about-page-rewrite.md) | Rewrites `/about` with real CV and credentials | Content |
| 02 | [Homepage copy rewrite](./02-homepage-copy-rewrite.md) | Rewrites `/` with real client phrases | Content |
| 03 | [Service pages audit & consolidation](./03-service-pages-audit-and-consolidation.md) | Restructures, sets up redirects, creates stubs | Structure |
| 03b | [Global UI audit](./03b-global-ui-audit.md) | Nav, footer, breadcrumbs, sitemap, 404 — runs immediately after 03 | Structure |
| 04 | [Therapy for Women cornerstone](./04-therapy-for-women-cornerstone.md) | Builds `/therapy-for-women` (primary niche) | Content |
| 05 | [Neurodiversity page rewrite](./05-neurodiversity-page-rewrite.md) | Rewrites `/neurodiversity` | Content |
| 06 | [Romanian therapy page](./06-romanian-therapy-page.md) | Builds bilingual `/romanian-therapy` | Content |
| 07 | [Online therapy UK page](./07-online-therapy-page.md) | Builds `/online-therapy` | Content |
| 07b | [Teen therapy rewrite](./07b-teen-therapy-rewrite.md) | Rewrites `/teen-therapy` for parent-of-teen persona | Content |
| 07c | [Child therapy rewrite](./07c-child-therapy-rewrite.md) | Rewrites `/child-therapy`, absorbs parent-support content | Content |
| 08 | [Location landing pages](./08-location-landing-pages.md) | Creates 8 town-specific landing pages | Content |
| 09 | [Is this right for you? page](./09-is-this-right-for-you-page.md) | Qualifying page — stops CBT-seeker leaks | Content |
| 09b | [FAQ page expansion](./09b-faq-page-expansion.md) | Expanded FAQ with FAQPage schema | Content |
| 09c | [Contact / Book Now page](./09c-contact-book-now-rewrite.md) | Rewrites the conversion endpoint | Content |
| 10 | [Pricing page strengthen](./10-pricing-page-strengthen.md) | Rewrites pricing with substance | Content |
| 11 | [Blog pillar content briefs](./11-blog-pillar-content-briefs.md) | Creates 10 evergreen blog briefs | Content |
| 12 | [Technical SEO and GBP](./12-technical-seo-and-gbp.md) | Schema, sitemap, metadata audit, GBP checklist | Polish |
| 12b | [Accessibility audit (WCAG AA)](./12b-accessibility-audit.md) | Full WCAG AA audit and fixes | Polish |
| 12c | [Open Graph and favicons](./12c-open-graph-and-favicons.md) | Social sharing previews and brand icons | Polish |
| 12d | [Analytics, Search Console, performance](./12d-analytics-search-console-performance.md) | Measurement infrastructure and Core Web Vitals | Polish |
| 13 | [Legal pages audit](./13-legal-pages-audit.md) | Privacy Policy, Terms, Cookies, UK GDPR | Polish |
| 14 | [Pre-launch QA + migration safety](./14-pre-launch-qa.md) | Final gate before pushing to production | Launch |

---

## Phases (rough timeline)

### Phase 1 — Foundation (Prompts 01–03b)
The about page, homepage, and the structural restructure that makes the rest of the site possible. Run these first because the rest of the prompts depend on the new structure.

### Phase 2 — Cornerstone content (Prompts 04–07c)
The seven specialism and cornerstone pages — Women, Neurodiversity, Romanian, Online, Teen, Child. These are the highest-leverage content pages on the site. Run them in order, with Andreea reviewing each one before moving on.

### Phase 3 — Supporting content (Prompts 08–11)
Location pages, qualifying page, FAQ, contact page, pricing, and blog briefs. These build the long tail.

### Phase 4 — Polish and infrastructure (Prompts 12–13)
Technical SEO, accessibility, social sharing, analytics, legal compliance. These are non-negotiable for launch but don't change content.

### Phase 5 — Launch (Prompt 14)
Pre-launch QA, migration safety, rollback prep, go/no-go decision.

---

## What's in this prompt set vs what's not

### In scope
- Every page on the site (rewrite or rebuild)
- Global UI: nav, footer, breadcrumbs, 404, sitemap
- Schema markup, metadata, OG images, favicons
- Accessibility (WCAG AA)
- Analytics, Search Console, performance monitoring
- Legal pages (Privacy, Terms, Cookies)
- Migration safety and pre-launch QA

### Out of scope (future work)
- **Drafting the 10 actual blog posts.** Prompt 11 creates the briefs. Each post then needs its own drafting prompt (11a through 11j), to be run one at a time with Andreea's review. This is a 2–3 month effort spread over time.
- **Ongoing GBP posts.** Prompt 12 sets up GBP. Monthly post creation is a recurring task, not a one-time prompt.
- **Email list / lead magnet build.** Priority 5 in the SEO order. Should be built once organic traffic starts coming in.
- **Quarterly content audit.** Schedule for 3–6 months post-launch.
- **Social media content** — Facebook and Instagram are active and managed separately by Andreea.

---

## Key decisions baked into these prompts

(If any of these are wrong, stop and fix the positioning brief before running the prompts.)

1. **SEO priority order:** local Colchester → Romanian niche → neurodiversity adult → women burnout → email list → directories. `Confirmed.`
2. **Timeline:** no fixed deadline, done properly. `Confirmed.`
3. **Off-limits content:** standard therapist discretion only. `Confirmed.`
4. **Social media:** Facebook and Instagram both active, linked in footer, out of scope for this work. `Confirmed.`
5. **Brand name:** "Next Generation Therapy" / "NextGenTherapy" stays. `Confirmed.`
6. **Upper age cap:** 41+ is dropped from the site's target audience.
7. **LGBTQ+ page merged into Women cornerstone.**
8. **Parent support merged into child/teen pages.**
9. **No client testimonials, ever.** Compensate with named credentials.
10. **Blog is evergreen-only, low cadence.** 10 cornerstone posts, then largely left alone to rank.

---

## Voice and style guardrails (applies to every prompt)

### Never use
- "Safe, nurturing space"
- "Empowering"
- "Journey" (as a metaphor for therapy)
- "Unlock your potential"
- "Holistic wellness"
- "Transformative"
- "Ready to take the first step?"
- "Compassionate support for..."
- Any sentence that could apply to any therapist in the UK

### Always use
- First person (Andreea writes "I")
- Short paragraphs with breathing room
- Real client phrases from the positioning brief as headlines where possible
- Named organisations (University of Essex, NHS, Sir Bobby Robson, Mind, YMCA) instead of vague experience claims
- Honest statements of what she doesn't do
- `{{ CONFIRM WITH ANDREEA }}` markers instead of inventing content in her voice

### Hard rule
**Never invent a client story, testimonial, or anecdote.** If a section needs Andreea's personal voice, mark it `{{ CONFIRM WITH ANDREEA }}` and leave space.

---

## How to run a prompt

1. Open Cursor in the `nextgentherapy` repo
2. Open `docs/content-prompts/00-positioning-brief.md` and skim if you haven't recently
3. Open the numbered prompt file and copy its full contents
4. Paste into Claude Code with the instruction: "Run this prompt. Do not proceed if lint or type checks fail."
5. When Claude Code finishes, verify:
   - `npm run lint` passes
   - `npx tsc --noEmit` passes
   - `npm run dev` starts cleanly
   - Visit the affected pages in the browser and check the redesign tokens are intact
   - Take screenshots at mobile, tablet, desktop
6. Share screenshots with Andreea for content review
7. Only after she's approved the content, move to the next prompt

If something goes wrong, stop and fix it before moving on. Do not let fixes pile up across prompts.

---

## Master checklist of items needing Andreea's input

Every prompt that needs Andreea's input has flagged markers. Send these in batches as each prompt is about to run, not all at once. She'll be more responsive to small focused asks.

**About page (Prompt 01)**
- Optional single sentence about her own Romanian background

**Neurodiversity (Prompt 05)**
- Room photo, if one exists that shows the sensory-aware setup

**Romanian page (Prompt 06)**
- All Romanian copy needs native-speaker review before publishing
- Whether to add a `/terapie` Romanian-first mirror page (phase 2)

**Online therapy (Prompt 07)**
- Online platform: Zoom / Google Meet / other?

**Contact page (Prompt 09c)**
- Form submission backend (Resend / Formspree / custom?)
- Whether to embed a map on the page

**Pricing (Prompt 10)**
- Cancellation policy
- Payment frequency (per session / monthly / other?)
- Sliding scale availability

**Technical SEO (Prompt 12)**
- GBP exact opening hours
- Whether her BACP directory location shows London or Colchester (likely needs fixing in her BACP account)

**Analytics (Prompt 12d)**
- Preferred analytics platform: Vercel Analytics / Plausible / GA4

**Privacy Policy (Prompt 13)**
- ICO registration number
- Email provider (Gmail / Workspace / other?)
- Confirmation of 7-year retention period for clinical notes
- Confirm clinical supervisor exists for the disclosure section
- **Strongly recommend legal review of all three legal pages before publishing**

**Open Graph (Prompt 12c)**
- OG images need to be designed (1200×630 px, sage and linen palette)
- Favicon may need to be regenerated

---

## Items that need Luke's input or action

**Throughout**
- Each prompt requires running `npm run lint && npx tsc --noEmit` before marking done
- Each prompt requires screenshots at desktop, tablet, mobile

**Pre-launch (Prompt 14)**
- Create git rollback tag
- Confirm DNS, SSL, www-canonical
- Test Search Console submission
- Submit sitemap to GSC and Bing
- Confirm form submission backend works
