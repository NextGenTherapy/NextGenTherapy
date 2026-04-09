# Prompt 05 — Rewrite the Neurodiversity page

**Goal:** Rewrite `/neurodiversity` (renamed from `/neurodiversity-therapy` in Prompt 03) as a cornerstone page for adult ADHD and autism, affirmative-practice, with the sensory-aware room setup as a genuine differentiator.

**Prereq:** Read `docs/content-prompts/00-positioning-brief.md`. Run AFTER Prompt 03.

---

## Why this page matters

Second-priority niche. The late-diagnosed neurodivergent adult persona (usually a woman in her 20s–40s, often after her child's diagnosis) is actively searching for affirmative therapists. Most therapy websites treat neurodiversity as a footnote. Andreea has specific CPD training *and* a sensory-aware room — those are real differentiators nobody else in Colchester is surfacing.

Target queries:
- `adult adhd therapist colchester`
- `autism therapist essex`
- `affirmative autism therapy uk`
- `late diagnosed adhd therapy`
- `neurodivergent therapist online`
- `adhd therapy for women`

---

## Instructions for Claude Code

Read before writing:
- `src/app/neurodiversity/page.tsx` (renamed from neurodiversity-therapy in Prompt 03)
- Existing hero / section components
- The About page (Prompt 01) and Women cornerstone (Prompt 04) for tone calibration

Replace all copy. Keep PageHero, keep the alternating section pattern, keep metadata export structure. Update the metadata.

---

## Page structure

### Section 1 — PageHero

```tsx
<PageHero
  eyebrow="ADHD & Autism in Adults"
  title="Affirmative therapy. Sensory-aware room. Stimming welcome."
  lead="Psychodynamic therapy for neurodivergent adults in Colchester and online. For people who've been late-diagnosed, self-identified, or finally had the words for it after their child's assessment."
/>
```

### Section 2 — "If you're reading this, you might already know"

**Heading:** *If you're reading this, you might already know*

**Body:**

> You might have been diagnosed recently. You might be self-identified and reading everything you can. You might have spent forty years being told you were lazy, too sensitive, too much, or not enough — and somewhere along the way you started to believe it.
>
> I work with neurodivergent adults who are tired of masking, tired of being told to try harder, and looking for a therapist who isn't going to treat ADHD or autism as a problem to be solved.

### Section 3 — "How I work (and what I don't do)"

Alternating layout. Text-heavy, because this audience reads carefully.

**Heading:** *How I work*

**Body:**

> My practice is affirmative. That means I start from the assumption that your brain works the way it works, and the goal isn't to make it look like a neurotypical one. The goal is to understand how you actually function, what's been costing you, what's been hidden, and what would make your life feel more like your own.
>
> I've completed specific post-qualification training in neurodiversity, alongside my MSc in Psychodynamic Psychotherapy. I've worked in SEN provision at Sir Bobby Robson School in Ipswich and in primary and secondary schools with Mind and the YMCA. Most of what I've learned, though, has come from working with neurodivergent clients in private practice — many of whom knew more about their own neurotype than any textbook I could read.

**Sub-heading:** *What I don't do*

> I don't do ADHD or autism "coaching" — I'm a therapist, not a behavioural trainer. I don't try to reduce stimming, eye contact avoidance, or other regulating behaviours. I don't require a formal diagnosis for you to work with me. And I don't pathologise the parts of you that are actually adaptations to a world that wasn't built for your brain.

### Section 4 — "The room matters" (THIS IS THE DIFFERENTIATOR)

This is the section that no other Colchester therapist has. Give it room to breathe.

Full-width section, subtle background shift (`var(--color-surface-accent)` or similar).

**Heading:** *The room matters*

**Body:**

> My therapy room is on the ground floor at Colchester Business Centre. It's quiet, it has plants, and the lighting is soft — none of the fluorescent overheads you get in most clinical settings. There's a couch, two comfortable chairs, and a desk with fidgets on it. Stimming is welcome. You don't have to sit still. You don't have to make eye contact. You can move around if you need to, bring a drink, take breaks, or ask me to repeat something.
>
> None of this is a gimmick. Sensory environment matters for neurodivergent clients, and I designed the room knowing that.

*(Optional: if there's a photo of the room that shows the sensory-aware setup — plants, soft lighting, fidgets visible — place it here. If not, leave space and mark `{{ CONFIRM WITH ANDREEA: room photo }}`.)*

### Section 5 — "What I often work with"

Clean list layout. No cards.

**Heading:** *What neurodivergent adults often come to me with*

- **Burnout from masking** — the exhaustion that comes from years of performing neurotypical
- **Late diagnosis grief and relief** — the strange double-feeling of "I finally understand" and "I've lost so much time"
- **Anxiety and overwhelm** — sensory, social, or both
- **Relationship difficulties** — especially mixed-neurotype relationships and family dynamics
- **Rejection sensitivity** — the pain that doesn't match the situation
- **Identity** — who were you before you started masking, and who are you now
- **Executive function and self-compassion** — not skills-based coaching, but the emotional work underneath the struggle
- **Parenting a neurodivergent child while being one yourself** — the exhaustion no one talks about

### Section 6 — "You don't need a formal diagnosis"

Short and direct.

**Heading:** *You don't need a formal diagnosis*

**Body:**
> If you've identified yourself as autistic, ADHD, or both — that's enough for me. NHS waiting lists for assessment are years long and private assessment is expensive. I work with self-identified clients, and I treat your understanding of your own neurotype as credible.

### Section 7 — Online note

**Heading:** *Online therapy for neurodivergent adults*

**Body:**
> I work online on Wednesdays, UK-wide, for clients aged 16 and over. For a lot of neurodivergent adults, online therapy is more accessible than in-person — no commute, familiar environment, ability to fidget off-camera, no fluorescent waiting room. If that's what works for you, it works for me.
>
> [More about online therapy →](/online-therapy)

### Section 8 — CTA

**Heading:** *Start with a free 15-minute call*

**Body:**
> If you want to ask about the approach, the room, online options, or anything else — the free call is the place to do it. It's 15 minutes, informal, and you can ask absolutely anything.

**Button:** `Book a Free 15-Minute Call` → `/book-now`

---

## Metadata

```ts
export const metadata: Metadata = {
  title: "ADHD & Autism Therapy for Adults — Colchester & Online | Affirmative Practice",
  description:
    "Psychodynamic, affirmative therapy for neurodivergent adults in Colchester and online. Sensory-aware room, stimming welcome, no formal diagnosis required. BACP registered.",
};
```

---

## Acceptance criteria

- `npm run lint` passes
- `npx tsc --noEmit` passes
- No hardcoded colours or px values
- No banned phrases
- Section 4 ("The room matters") is visually distinct from the rest of the page — it's the conversion section
- "You don't need a formal diagnosis" present and unambiguous
- No references to "overcoming" ADHD or autism, no deficit-framing language
- Alternating section layout consistent with other redesigned pages

---

## Things to flag when done

- Screenshot desktop, tablet, mobile
- Confirm Section 4 renders with enough visual weight
- Any place where a room photo would strengthen the page but doesn't exist yet
