# Prompt 04 — Create the Therapy for Women cornerstone page

**Goal:** Build `/therapy-for-women` as the site's primary SEO and conversion cornerstone. This is where the highest-priority persona lands, and it needs to be the single best page on the site.

**Prereq:** Read `docs/content-prompts/00-positioning-brief.md`. Run AFTER Prompt 03 (which created the stub page).

---

## Why this page matters

The positioning brief's Persona 1 is "The High-Functioning Woman" — the primary niche. This page is her landing page. It targets:

- `therapist for women colchester`
- `burnout therapy for women`
- `therapy for high achieving women`
- `women's therapy essex`
- `anxiety therapist for women`

It also absorbs the LGBTQ+ specialism as a section, because Andreea's LGBTQ+ work is specifically with women in same-sex relationships.

---

## Instructions for Claude Code

Read before writing:
- `src/app/therapy-for-women/page.tsx` (currently a stub)
- `src/components/ui/PageHero.tsx`
- The About page you wrote in Prompt 01 (for tone calibration)
- `src/styles/variables.scss`

Replace the stub with a full page. Remove `robots: noindex` from the metadata.

Use only existing components. Do not introduce new ones. Structure the page with the existing alternating-section pattern from the redesign.

---

## Page structure

### Section 1 — PageHero

```tsx
<PageHero
  eyebrow="Therapy for Women"
  title="You look fine. You're not fine."
  lead="For the overthinking, the burnout, the body image stuff, the 'I don't know who I am anymore.' Psychodynamic therapy for women in Colchester and online, with a therapist who takes your inner life seriously."
/>
```

### Section 2 — "You might recognise yourself here"

Full-width, sage-tinted background (`var(--color-surface-accent)` or equivalent). No cards — just a simple heading and a list, generous spacing.

**Heading:** *You might recognise yourself here*

**Intro paragraph:**
> Most of the women I work with say some version of the same thing in the first session. If any of these sound familiar, you're in the right place.

**List (styled as large italic serif pull-quotes, one per line, with breathing room between):**
- "I can't stop overthinking."
- "I'm avoiding situations because of how I feel about my body."
- "I feel stuck and burnt out, but I can't stop doing any of the things that are burning me out."
- "I fit everything in and somehow I still feel like I'm slipping something."
- "I can't seem to stop worrying."
- "I don't know who I am anymore."
- "I feel like I'm failing at everything — even though everyone tells me I'm doing well."
- "I can't switch off."

**Closing paragraph:**
> These aren't symptoms to be tidied up in six sessions. They're usually telling you something important about how you've been living, and what's been asked of you for a long time. That's the work I do.

### Section 3 — "How I work with women"

Alternating layout — text left, image right (reuse an existing atmospheric image, no stock photos of strangers).

**Heading:** *How I work*

**Body:**

> I'm a psychodynamic therapist, which means we don't start with a worksheet. We start with what's on your mind today, and we notice what comes up — patterns, feelings you weren't expecting, things you haven't said out loud before. Over time, we build a shared understanding of why you are the way you are, and what you'd like to be different.
>
> This is weekly, open-ended work. Some women come for a few months around a specific life event. Others stay longer, because the patterns we're working with took a long time to form and take a while to loosen.
>
> I draw on other approaches when they help — mindfulness, some CBT-informed tools, writing prompts between sessions. But the foundation is psychodynamic: slow, considered, and curious about the whole of you.

### Section 4 — "What I often work with"

Clean two-column layout or definition list. No cards.

**Heading:** *What I often work with*

**Columns / list:**

- **Burnout and overwhelm** — especially the kind that hides behind competence
- **Anxiety and overthinking** — the mind that won't switch off
- **Self-esteem and self-criticism** — the internal voice that never lets up
- **Body image and disordered eating** — including patterns you haven't called disordered before
- **Identity and life transitions** — "I don't know who I am anymore"
- **Relationship patterns** — why the same thing keeps happening
- **High-functioning depression** — the kind that looks like productivity
- **Perfectionism** — and what it's costing you

### Section 5 — LGBTQ+ section (with anchor for redirect)

Give this section `id="lgbtq"` so the redirect from the old `/lgbtq-therapy` page lands here.

**Heading:** *For women in same-sex relationships*

**Body:**
> A lot of my LGBTQ+ work is with women in same-sex relationships. Sometimes that's about the relationship itself — dynamics, family, whose family we're at for Christmas, the micro-negotiations of being visible or not visible in different contexts. Sometimes it's about identity: coming out late, internalised shame, or questions about gender expression that don't have obvious answers.
>
> You won't need to explain the basics of your life to me, and I'm not going to treat your sexuality as the reason you're in therapy unless you tell me it is. I've completed specific post-qualification training in working with LGBTQ+ clients.

### Section 6 — "Is this right for you?"

Short section, direct language, links out.

**Heading:** *Is this right for you?*

**Body:**
> I'm not the right therapist for everyone. If you're looking for a toolkit, a six-week programme, or a CBT approach, we'd be a mismatch — and there are good therapists in Colchester who work that way. If you want to understand *why* the patterns keep showing up and do slow, considered work, that's what I do.
>
> [More on whether we're a good fit →](/is-this-right-for-you)

### Section 7 — CTA

**Heading:** *Start with a free 15-minute call*

**Body:**
> The free call is an informal 15-minute conversation, not a first session. You can ask anything you want, I'll answer honestly, and we'll decide together whether working with me feels like the right next step.

**Button:** `Book a Free 15-Minute Call` → `/book-now`

---

## Metadata

```ts
export const metadata: Metadata = {
  title: "Therapy for Women in Colchester & Online | Burnout, Anxiety, Self-Worth",
  description:
    "Psychodynamic therapy for women dealing with burnout, overthinking, anxiety, body image and self-worth. Colchester and online across the UK. BACP registered. Includes work with women in same-sex relationships.",
};
```

---

## Schema

Add `TherapeuticProcedure` or `MedicalBusiness` JSON-LD schema. If the site already has a shared schema component, use it. Otherwise reuse the pattern from the existing service pages.

Include:
- `name`: "Psychodynamic Therapy for Women"
- `provider`: Andreea Horhocea / Next Generation Therapy
- `areaServed`: Colchester, Essex, and online UK
- `availableLanguage`: English, Romanian

---

## Acceptance criteria

- `npm run lint` passes
- `npx tsc --noEmit` passes
- No hardcoded colours or px values
- No banned phrases
- Anchor `id="lgbtq"` present on the LGBTQ+ section so the `/lgbtq-therapy` redirect works
- `robots: noindex` removed from metadata
- Page uses existing PageHero and alternating section pattern
- All real client phrases from the positioning brief present as pull-quotes in Section 2
- No invented client stories or testimonials anywhere

---

## Things to flag when done

- Screenshot desktop, tablet, mobile
- Confirm the pull-quote list in Section 2 renders with enough breathing room on mobile (it's a long list)
- Any spots where copy feels too generic and should be marked `{{ CONFIRM WITH ANDREEA }}` for her personal voice
