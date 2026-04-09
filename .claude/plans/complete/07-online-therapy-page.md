# Prompt 07 — Create the Online Therapy UK page

**Goal:** Build `/online-therapy` as a national-scale landing page for online psychotherapy clients aged 16+. This captures Andreea's Wednesday online capacity and targets UK-wide searches that currently bypass the site entirely.

**Prereq:** Read `docs/content-prompts/00-positioning-brief.md`. Run AFTER Prompt 03.

---

## Why this page matters

- Wednesday is dedicated online-only capacity — currently unadvertised
- National online therapy searches have much higher volume than Colchester-local searches
- The "16+ only, confidentiality" framing is a trust signal that most online therapy sites don't bother with
- It expands the practice beyond the Essex geographic constraint

Target queries:
- `online therapy uk`
- `online psychodynamic therapy`
- `online therapist uk`
- `online therapy for adults`
- `online adhd therapy uk`
- `online therapy for teens` *(secondary — remember, 16+)*
- `psychotherapy online uk`

---

## Instructions for Claude Code

Read before writing:
- `src/app/online-therapy/page.tsx` (stub from Prompt 03)
- `src/components/ui/PageHero.tsx`
- The About page (Prompt 01) and Women cornerstone (Prompt 04) for voice calibration

Replace the stub with a full page. Remove `robots: noindex`.

---

## Page structure

### Section 1 — PageHero

```tsx
<PageHero
  eyebrow="Online Therapy — UK-wide"
  title="Therapy on Wednesdays, from wherever you are."
  lead="Psychodynamic therapy online, across the UK, for adults aged 16 and over. Same approach, same therapist, same commitment to slow and open-ended work — on a day that's dedicated to online clients only."
/>
```

### Section 2 — "How online therapy works with me"

Alternating layout.

**Heading:** *How online therapy works with me*

**Body:**
> I keep Wednesdays for online clients. That means when we meet, I'm not squeezing you between in-person appointments or rushing between rooms — it's a day where I'm fully set up for online work.
>
> Sessions are 50 minutes, weekly, on a secure video platform *{{ CONFIRM WITH ANDREEA: Zoom / other platform }}*. The first session works the same way it would in person: you tell me what brought you here, we get a sense of whether this feels workable for both of us, and we take it from there.
>
> I'm a psychodynamic therapist, which means we work slowly and open-endedly. We don't start with a fixed number of sessions or a structured programme. We meet weekly and we keep meeting until something has genuinely shifted — which for some people is a few months, for others a few years.

### Section 3 — "Why I only work online with clients aged 16 and over"

This section is counterintuitive but important. It's a trust signal, not a limitation.

**Heading:** *Why I only work online with clients aged 16 and over*

**Body:**
> I don't offer online therapy to children or younger teenagers, and I want to be honest about why.
>
> Online therapy depends on privacy. When a client is at home, I can't see who else is in the house, whether a parent is listening through a wall, or whether the young person feels genuinely safe to say what they need to say. I've seen this play out in practice — younger clients holding back, watching the door, rushing to end the session when they hear someone downstairs. That's not therapy; that's surveillance with a therapist on the other end of it.
>
> So for anyone under 16, I only work in person at Colchester Business Centre, where the confidentiality can be protected properly. It's not about age limits for their own sake — it's about making sure the work is actually possible.
>
> For clients aged 16 and over, online sessions work well. You're old enough to have your own space, your own device, and your own call on when and where you want to be alone.

### Section 4 — "What I work with online"

Clean list, no cards.

**Heading:** *What I work with online*

Same list as the Women cornerstone page, plus neurodiversity-specific items:

- **Burnout, overwhelm, and high-functioning depression**
- **Anxiety and overthinking**
- **Self-esteem, self-criticism, and identity**
- **Body image and disordered eating**
- **Relationship patterns and life transitions**
- **Adult ADHD and autism** — affirmative, no masking required
- **Cultural identity and the immigrant experience** — including sessions in Romanian
- **The things you haven't found words for yet**

### Section 5 — "Online vs in-person — what's the difference?"

Two columns or alternating layout.

**Heading:** *Online vs in-person — what's the difference?*

**Body:**
> In my experience, the work is essentially the same. Some clients prefer online because it means no commute, no waiting room, no getting dressed for an appointment, and the ability to be in their own space. This is especially true for neurodivergent clients, for whom the sensory load of in-person sessions can be a barrier.
>
> Others prefer in person because there's something about being in a room together that helps them open up in ways video doesn't. Neither is better. Both are real therapy.
>
> If you're not sure which is right for you, we can talk about it in the free 15-minute call.

### Section 6 — "Practical details"

Clean list.

**Heading:** *Practical details*

- **Day:** Wednesdays only
- **Age:** 16 and over
- **Length:** 50 minutes
- **Frequency:** Weekly
- **Cost:** £60 per session
- **Platform:** *{{ CONFIRM WITH ANDREEA — Zoom / Google Meet / Other }}*
- **Languages:** English or Romanian
- **Where you need to be:** Somewhere private, with a stable internet connection, where you can speak freely without being overheard

### Section 7 — CTA

**Heading:** *Start with a free 15-minute call*

**Body:**
> The free call is also online — a 15-minute video conversation where you can ask anything, I can answer honestly, and we can both see if working together feels workable. No pressure, no commitment.

**Button:** `Book a Free 15-Minute Call` → `/book-now`

---

## Metadata

```ts
export const metadata: Metadata = {
  title: "Online Therapy UK — Psychodynamic Therapy for Adults 16+ | Wednesdays",
  description:
    "Online psychodynamic therapy across the UK, Wednesdays, for adults aged 16 and over. Slow, open-ended work. BACP registered. English and Romanian. £60 per 50-minute session.",
};
```

---

## Schema

`MedicalBusiness` JSON-LD with `areaServed: "United Kingdom"` and `serviceType: "Online Psychotherapy"`.

---

## Acceptance criteria

- `npm run lint` passes
- `npx tsc --noEmit` passes
- No hardcoded values
- No banned phrases
- The "why 16+ only" section is present and framed as a clinical decision, not a limitation
- `robots: noindex` removed
- Platform placeholder marked `{{ CONFIRM WITH ANDREEA }}`
- Romanian language availability mentioned
- Link to `/romanian-therapy` included somewhere on the page

---

## Things to flag when done

- Screenshot desktop, tablet, mobile
- Confirm platform choice with Andreea before shipping
- Whether the 16+ explanation section lands gently or reads as defensive — if the latter, soften
