# Prompt 09 — Create the "Is this right for you?" qualifying page

**Goal:** Build `/is-this-right-for-you` — a page that honestly qualifies potential clients in or out before they book a free call. This solves the single biggest lost-lead problem: clients who wanted CBT / short-term / structured therapy, discovered too late that Andreea doesn't offer that, and walked away.

**Prereq:** Read `docs/content-prompts/00-positioning-brief.md`. Run AFTER Prompt 03 (stub created).

---

## Why this page matters

Andreea currently loses most disqualified leads late in the process — after the 15-minute call, sometimes after session one. That's wasted time for both her and the client. A well-written qualifying page:

1. Builds trust with the *right* clients (honesty is rare in therapy marketing)
2. Saves the *wrong* clients from wasting their time
3. Ranks well because nobody else writes pages like this
4. Becomes the destination for the `/about-therapy` 301 redirect

It's counterintuitive — most therapists fear saying "I'm not for everyone" — but it converts better than the alternative.

---

## Instructions for Claude Code

Read before writing:
- `src/app/is-this-right-for-you/page.tsx` (stub from Prompt 03)
- About page (Prompt 01), Women cornerstone (Prompt 04), and Neurodiversity (Prompt 05) for tone calibration

Replace the stub. Remove `robots: noindex`. This page should index.

---

## Page structure

### Section 1 — PageHero

```tsx
<PageHero
  eyebrow="Is This Right For You?"
  title="I'm not the right therapist for everyone. Let's work out whether I'm right for you."
  lead="Therapists don't usually write pages like this, which is maybe why so many first sessions end in a mismatch. Before you book anything, here's an honest look at how I work, what I do well, and what I don't offer — so you can decide with full information."
/>
```

### Section 2 — "What I actually do"

**Heading:** *What I actually do*

**Body:**

> I'm a psychodynamic psychotherapist. In practical terms, that means:
>
> **We meet weekly, in 50-minute sessions.** Same day, same time, ideally for as long as we're working together.
>
> **The work is open-ended.** We don't start with a fixed number of sessions or a predetermined structure. Some people work with me for a few months around a specific life event. Others stay for a few years because the patterns we're working with took a long time to form and take a while to loosen. We review how things are going as we go.
>
> **The focus is on understanding, not techniques.** Rather than giving you tools to manage symptoms, we try to understand why certain patterns — overthinking, anxiety, avoidance, self-criticism, whatever's brought you here — keep showing up in your life. Where they came from, what they're protecting, and what it would mean to work with them differently.
>
> **We take your inner life seriously.** Dreams, feelings that don't make sense, memories that come up unexpectedly, the things you haven't said out loud to anyone — all of that is part of the material we work with.
>
> **I'll draw on other approaches when they help.** Mindfulness, some CBT-informed tools, creative work with younger clients, writing prompts between sessions — but the foundation is always psychodynamic.

### Section 3 — "What I don't do (and who does that well)"

This is the section that makes the page. Be genuinely helpful — name actual alternatives.

**Heading:** *What I don't do — and who does*

**Body:**

> Being honest about what I don't offer is important, because if any of the following is what you're looking for, we'd be a mismatch. Here's what I don't do and some pointers toward people who do those things well:
>
> **Short-term, structured therapy (6–12 sessions with a clear endpoint).** If you want something time-limited and goal-focused, CBT or brief solution-focused therapy is likely a better fit. In Colchester, the Turner Centre, Colchester Counselling & Psychotherapy Practice, and NHS Therapy For You all offer structured short-term work.
>
> **CBT.** Cognitive Behavioural Therapy is an evidence-based approach that works well for many people, especially for specific anxiety disorders, phobias, and OCD. It's not what I practise. If you know you want CBT, look for a BABCP-accredited therapist — BABCP is to CBT what BACP is to counselling and psychotherapy more broadly.
>
> **Couples therapy.** I only work with individuals. If you're looking for couples work, Relate or individual psychotherapists who specialise in couples work (many advertise on Counselling Directory) are the right place to start.
>
> **Forensic work or therapy for open court cases.** This is a specialist area that requires specific training I don't have.
>
> **Work with active psychosis.** If you or a family member is currently experiencing psychosis, you need a specialist team — usually NHS-led — rather than private psychotherapy.
>
> **Active addiction work.** I don't work with clients in the acute phase of addiction without a wraparound treatment team in place. If you're looking for addiction-specific support, Colchester has specialist services through the NHS and charities like Open Road.
>
> **Work with clients aged 41 and over.** I work with children, teenagers, young adults, and adults up to their late 30s / early 40s. That's a deliberate choice — it's where my experience and training are strongest.

### Section 4 — "When I'm probably the right therapist for you"

**Heading:** *When I'm probably the right therapist for you*

**Body:**

> You might be in the right place if:
>
> - You've tried short-term or CBT-based approaches and found they didn't quite get to the thing you were trying to reach
> - You want to understand *why* a pattern keeps showing up, not just manage the symptoms
> - You're willing to commit to weekly sessions for at least a few months
> - You'd rather explore your inner life than work from a manual
> - You're a woman dealing with burnout, anxiety, self-worth, body image, or identity questions
> - You're a neurodivergent adult looking for an affirmative therapist who won't try to "fix" you
> - You're a parent looking for therapy for a teenager or child aged 4–17
> - You'd prefer sessions in Romanian, or the option to move between English and Romanian
> - You want a therapist who'll be honest with you about what the work is and isn't

### Section 5 — "When I'm probably not"

**Heading:** *When I'm probably not*

**Body:**

> You might be in the wrong place if:
>
> - You want a 6-session plan with clear homework and measurable goals
> - You're hoping for advice, coaching, or a therapist who'll tell you what to do
> - You're looking for couples therapy
> - You're in acute crisis and need immediate, intensive support — in which case please contact your GP, call 111, or text SHOUT on 85258
> - You're over 40 — I'd happily recommend excellent colleagues who work with older clients

### Section 6 — "What the first session is actually like"

**Heading:** *What the first session is actually like*

**Body:**

> Before the first session, we have a free 15-minute call. That's not therapy — it's an informal conversation where you can ask me anything, I can answer honestly, and we can both see whether it feels workable. No assessment, no forms, no pressure.
>
> If we decide to go ahead, the first session is mostly me listening. You tell me what brought you here in whatever order makes sense, and I ask questions to understand the context. We don't use the first session for deep exploration — we use it to get a feel for each other and for the work. If by the end you're not sure, we can talk about that. If by the end I'm not sure I'm the right fit, I'll tell you, and I'll try to point you somewhere that might be better.
>
> I take comfort and fit seriously. No amount of clinical skill replaces the feeling of sitting across from someone you can actually talk to.

### Section 7 — CTA

**Heading:** *Still think I might be a fit?*

**Body:**
> Book a free 15-minute call and we can take it from there.

**Button:** `Book a Free 15-Minute Call` → `/book-now`

---

## Metadata

```ts
export const metadata: Metadata = {
  title: "Is Psychodynamic Therapy Right For You? | Honest Guide | Next Generation Therapy",
  description:
    "An honest guide to whether I'm the right therapist for you — what psychodynamic therapy offers, what I don't do, and where to go if I'm not a fit. Colchester and online.",
};
```

---

## Acceptance criteria

- `npm run lint` passes
- `npx tsc --noEmit` passes
- No banned phrases
- `robots: noindex` removed — this page should index
- Redirect from `/about-therapy` lands here correctly (tested by visiting the old URL)
- Section 3 names specific local alternatives (Turner Centre, Colchester Counselling & Psychotherapy Practice, NHS Therapy For You, Relate, Open Road, BABCP)
- Crisis signposting in Section 5 (111 and SHOUT text line)
- No false humility — the page is honest, not self-deprecating

---

## Things to flag when done

- Screenshot desktop, tablet, mobile
- Any place where the "who does this well" recommendations feel too promotional for competitors — dial back if needed, but don't remove them
- Whether any of the named alternatives should be verified with Andreea before publishing
