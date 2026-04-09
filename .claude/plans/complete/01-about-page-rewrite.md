# Prompt 01 — Rewrite the About page

**Goal:** Replace generic About page copy with Andreea's actual credentials, training, experience, and voice. This is the single highest-leverage copy change on the site because it's where trust is built in the absence of testimonials.

**Prereq:** Read `docs/content-prompts/00-positioning-brief.md` first.

---

## Instructions for Claude Code

Read these files before writing anything:
- `src/app/about/page.tsx`
- `src/app/about/about.module.scss` (or equivalent)
- `src/components/ui/PageHero.tsx`
- `src/styles/variables.scss`

Keep all existing metadata exports and schema components. Keep the PageHero structure from the recent redesign. Keep the existing photo treatment (no border, rounded corners, `objectPosition: 'center top'`).

**What to change:** the copy inside the sections, and the structure of those sections.

---

## New page structure

### Section 1 — PageHero (keep component, update props)

```tsx
<PageHero
  eyebrow="About Andreea"
  title="Hi, I'm Andreea — and I'm really glad you're here."
  lead="I'm a psychodynamic psychotherapist working with women, neurodivergent adults, teenagers and children in Colchester and online across the UK. I trained at the University of Essex and I've been in practice for over six years."
/>
```

### Section 2 — "Why I do this work"

Two-column on desktop: text left (60%), photo right (40%).

Copy (this is the only section with personal story — keep it short, dignified, single paragraph):

> I became a therapist because I grew up without access to the kind of understanding I needed, and I wanted to make sure other people — particularly women and young people — had somewhere to take the things they're carrying. That's still why I do this work now.

Then:

> The work I do is slow and open-ended. It's not a toolkit or a six-week course. We meet weekly, and we keep meeting until something has genuinely shifted. For some people that's a few months; for others, it's a few years.

### Section 3 — "My training and experience"

Full-width section, background `var(--color-surface)`.

Heading: *"Where I trained and where I've worked"*

Use a clean two-column layout or definition list. No cards, no borders, just clear typography.

**Training**
- MSc Psychodynamic Psychotherapy — University of Essex, 2020
- BACP Registered Member *(link to her BACP profile: https://www.bacp.co.uk/therapists/385976/andreea-horhocea/london-e16)*
- Ongoing clinical supervision and personal therapy

**Post-qualification training (CPD)**
- Neurodiversity — ADHD and autism, affirmative practice
- Eating disorders
- Trauma and attachment
- Working with LGBTQ+ clients
- Addiction

**Experience**
- NHS Essex — delivering workshops and seminars for children and parents in primary and secondary schools
- Sir Bobby Robson School, Ipswich — SEN-specific therapeutic provision
- Mind, Mid & North East Essex — youth work in schools
- YMCA Ipswich — ongoing, supporting a primary school and residents in YMCA accommodation
- Private practice — 3+ years

### Section 4 — "How I work"

Short, direct. This is where we qualify people in or out. Two columns or alternating rows.

Heading: *"How I work"*

Sub-sections (just paragraphs, no cards):

**The approach**
> I'm a psychodynamic therapist. That means we spend time together understanding why certain patterns keep showing up in your life, where they came from, and what they're protecting. I draw on other approaches — mindfulness, some CBT-informed tools, creative work with younger clients — but the foundation is always psychodynamic.

**The format**
> Sessions are weekly and 50 minutes long. I work open-ended, which means we don't start with a fixed number of sessions. Some people come for a few months, some come for a few years. We review how it's going as we go.

**Who I work with**
> I work with women, neurodivergent adults, teenagers aged 13–17, young adults, and children from 4 upwards. I also see parents as clients in their own right. Online sessions are available for anyone 16 or older — I don't do online work with younger clients because confidentiality is hard to guarantee at home.

**Who I don't work with**
> I don't offer couples therapy, forensic work, or work with active psychosis or untreated addiction. If that's what you need, I'm happy to point you toward people who specialise in it.

### Section 5 — Romanian language note

Short standalone section with its own visual treatment (background colour shift, perhaps `var(--color-accent-light)`).

Heading: *"Therapy in Romanian"*

> I also offer sessions in Romanian. If you grew up in Romania, or between Romania and the UK, there are things that are easier to say in your first language — and things about the experience of being between two cultures that can be hard to explain to someone who hasn't lived it. I have. *{{ CONFIRM WITH ANDREEA: a single sentence about her own Romanian background if she wants to include it, otherwise delete this last sentence }}*
>
> Dacă preferi terapia în limba română, [contactează-mă aici](/book-now). *{{ CONFIRM WITH ANDREEA — correct Romanian phrasing }}*

### Section 6 — CTA

Reuse the existing CTA block from the homepage redesign. Button: "Book a free 15-minute call". Link: `/book-now`.

Subheading above button:
> The free call is an informal 15-minute conversation, not a first session. We use it to see whether working together feels right, sort out logistics, and give you a chance to ask anything you want to.

---

## Metadata

```ts
export const metadata: Metadata = {
  title: "About Andreea Horhocea — BACP Psychotherapist in Colchester",
  description:
    "MSc Psychodynamic Psychotherapy (University of Essex, 2020). BACP registered. Working with women, neurodivergent adults, teenagers and children in Colchester and online. Sessions available in English and Romanian.",
};
```

---

## Acceptance criteria

- `npm run lint` passes
- `npx tsc --noEmit` passes
- No hardcoded colours or px values
- All `{{ CONFIRM WITH ANDREEA }}` markers left in place (do not invent)
- No reference to "all ages," "safe nurturing space," "journey," or other banned phrases from the positioning brief
- BACP link opens in new tab with `rel="noopener noreferrer"`
- Romanian section present but clearly marked for review
- Page still uses existing PageHero, metadata export, and schema components — no structural regressions

---

## Things to flag when done

- Any sections where the existing codebase made the copy swap harder than expected
- Any places where `{{ CONFIRM WITH ANDREEA }}` would benefit from restructuring instead of just a content swap
- Screenshot at desktop, tablet, and mobile for Luke's review
