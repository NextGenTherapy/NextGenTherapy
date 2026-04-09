# Prompt 02 — Homepage copy rewrite

**Goal:** Replace generic homepage copy with Andreea's real voice and the client phrases that actually convert. Keep the sage/linen visual design from the recent redesign — this prompt only changes text content and section structure, not the visual tokens or layout components.

**Prereq:** Read `docs/content-prompts/00-positioning-brief.md` first. This prompt assumes the visual redesign from `docs/redesign-prompts/` is already applied.

---

## Instructions for Claude Code

Read these files before writing anything:
- `src/app/page.tsx`
- `src/app/page.module.scss` (or equivalent)
- `src/components/ui/PageHero.tsx`
- `src/styles/variables.scss`

Keep: PageHero component, section structure, grid layout, card components, CTA block. Do not introduce new components.

Change: hero copy, sub-headings, card copy, quote, meta description.

---

## New homepage copy

### Hero section

**Eyebrow:** `COLCHESTER & ONLINE · BACP REGISTERED`

**Title (main headline):** 
> You fit everything in. And somehow you still feel like you're slipping something.

**Lead paragraph:**
> I'm Andreea — a psychodynamic psychotherapist in Colchester and online. I work mainly with women, neurodivergent adults, and teenagers who look fine from the outside and are exhausted on the inside.

**Primary CTA:** `Book a Free 15-Minute Call` → `/book-now`  
**Secondary link:** `See if we're the right fit →` → `/is-this-right-for-you`

---

### Trust bar (keep existing structure)

Three items:
- `BACP REGISTERED`
- `COLCHESTER & ONLINE (UK)`
- `ENGLISH & ROMANIAN`

The third one replaces "All Ages Welcome" — it's factually accurate (upper age cap is 40, so "all ages" was wrong anyway) and introduces the Romanian angle immediately.

---

### Section — "What I work with"

Keep the existing 3-card grid but change the cards. These cards should map to the top 3 niches, not the old age-group framing.

**Card 1 — Therapy for Women**
> **Therapy for women**
>
> For the overthinking, the burnout, the body image stuff, the "I don't know who I am anymore." Work that takes your inner life seriously without pathologising it.
>
> *Learn more →* → `/therapy-for-women`

**Card 2 — Neurodiversity**
> **ADHD & autism in adults**
>
> Affirmative therapy for late-diagnosed and self-identified neurodivergent adults. The room is quiet, sensory-aware, and stimming is welcome.
>
> *Learn more →* → `/neurodiversity`

**Card 3 — Teenagers**
> **Therapy for teenagers**
>
> For teens aged 13–17 navigating anxiety, self-harm, school, friendships, identity. I work alongside parents when it's helpful and always on the young person's terms.
>
> *Learn more →* → `/teen-therapy`

---

### Section — About quote

Keep the existing quote-block treatment, but replace the quote.

**Quote:**
> "I've worked in NHS schools, SEN provision, Mind, and YMCA alongside my private practice. What I do now is a continuation of all of that — slower, more considered, and one person at a time."

**Attribution:**
> Andreea Horhocea — MSc Psychodynamic Psychotherapy (University of Essex, 2020), BACP Registered

**Link:** `More about me →` → `/about`

---

### Section — Romanian language note (NEW section)

This is a new section. Insert between the About quote and the final CTA block.

Background: `var(--color-accent-light)` (the warm sand). Full width. Text centred, generous padding.

**Heading (italic serif):**
> Terapie în limba română

**Body:**
> I also offer therapy in Romanian. If you grew up between Romania and the UK, there are things that are easier to talk about in your first language — and things about the experience of moving between cultures that are hard to explain to someone who hasn't lived it.
>
> *Learn more →* → `/romanian-therapy`

---

### Final CTA

Replace current copy:

**Heading:**
> Not sure yet? That's what the free call is for.

**Body:**
> The free 15-minute call is not a first session. It's an informal conversation — you ask what you want, I answer honestly, and we both decide whether working together feels right. No pressure, no commitment.

**Button:** `Book a Free 15-Minute Call` → `/book-now`

---

## Metadata

```ts
export const metadata: Metadata = {
  title: "Psychodynamic Therapy in Colchester & Online | Andreea Horhocea",
  description:
    "Psychodynamic therapy in Colchester and online (UK-wide) for women, neurodivergent adults and teenagers. BACP registered. Sessions in English and Romanian. Free 15-minute intro call.",
};
```

---

## Acceptance criteria

- `npm run lint` passes
- `npx tsc --noEmit` passes
- No hardcoded colours or px values
- No banned phrases ("safe nurturing space", "journey", "empowering", "ready to take the first step", "compassionate support for...")
- All links route to existing or to-be-created pages (flag `/therapy-for-women`, `/is-this-right-for-you`, `/romanian-therapy`, `/teen-therapy` as pages that don't exist yet — stub them with `export default function Page() { return <p>Coming soon</p> }` if needed to avoid 404s)
- Hero headline uses the full sentence "You fit everything in. And somehow you still feel like you're slipping something."
- Trust bar items updated to BACP / Colchester & Online / English & Romanian
- Romanian section present
- Final CTA copy replaced

---

## Things to flag when done

- Screenshot desktop, tablet, mobile
- Confirm hero headline doesn't wrap awkwardly at common breakpoints (it's a long sentence — may need line-break control)
- Any CSS changes needed for the new Romanian section
