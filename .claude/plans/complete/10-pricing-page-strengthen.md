# Prompt 10 — Strengthen the Pricing page

**Goal:** Rewrite the Pricing page with enough substance to justify £60/session and to build trust. The current page is dangerously thin — a single price with no context reads as either arbitrary or cheap (even though neither is true).

**Prereq:** Read `docs/content-prompts/00-positioning-brief.md`.

---

## Context

- £60 per 50-minute session — top of the £50–60 market range for individual therapists in Colchester, which is accurate and defensible
- No sliding scale or concessions currently offered *{{ CONFIRM WITH ANDREEA — worth offering any? }}*
- No cancellation policy currently published *{{ CONFIRM WITH ANDREEA }}*
- Free 15-minute intro call is genuinely free, no strings

The problem with the current page isn't the price. It's that the page doesn't explain *what £60 buys you* in a way that makes the value obvious.

---

## Instructions for Claude Code

Read before writing:
- `src/app/pricing/page.tsx` (or wherever pricing lives — grep for "£60" if uncertain)
- PageHero component
- About page (Prompt 01) for tone

Keep PageHero, metadata export structure, schema if present. Replace all copy.

---

## Page structure

### Section 1 — PageHero

```tsx
<PageHero
  eyebrow="Fees & Booking"
  title="£60 per 50-minute session. Free 15-minute intro call."
  lead="Here's an honest breakdown of what therapy with me costs, what's included, and how booking works — so there are no surprises and no awkward money conversations later."
/>
```

### Section 2 — "What's included in a session"

**Heading:** *What's included in a session*

**Body:**

> Each session is **50 minutes** of your time with a BACP-registered psychodynamic psychotherapist who has an MSc from the University of Essex and over six years of practice experience. That's the headline — here's what's actually in the £60:
>
> - **A weekly, dedicated slot** — same day, same time, held for you for as long as we're working together. I don't rearrange, double-book, or fit you in around other things.
> - **A private, ground-floor therapy room** at Colchester Business Centre — quiet, sensory-aware, and designed for focused work
> - **Worksheets, journalling prompts, and between-session materials** where they're genuinely helpful (not as filler)
> - **Email contact between sessions** for scheduling, logistics, and anything practical — though therapy work itself happens in the room, not over email
> - **Clinical accountability** — I'm in ongoing personal therapy and clinical supervision, which means the work I do with you is supported by senior colleagues and my own reflective practice
> - **BACP-registered professional standards** — which means you have independent recourse if anything goes wrong, and I'm held to a published ethical framework

### Section 3 — "What the free 15-minute call is (and isn't)"

**Heading:** *The free 15-minute call*

**Body:**

> Before we start anything, we have a free 15-minute call. It's genuinely free — no booking fee, no deposit, no pressure to commit to sessions afterwards.
>
> **What it is:** an informal conversation. You can tell me a little about what's bringing you to therapy, ask me anything you want about how I work, and we can talk about practical things like availability and whether in-person or online is going to suit you better.
>
> **What it isn't:** a first session. We don't do therapy in the 15 minutes. I'm not assessing you, and you're not committing to anything. Plenty of people use the call to decide I'm not the right fit for them, and that's completely fine — it's what the call is for.

### Section 4 — "How booking works"

**Heading:** *How booking works*

**Body:**

> 1. **Get in touch.** Either via the [contact form](/book-now), by email, or by phone. Tell me a bit about what's bringing you — one or two sentences is fine.
> 2. **Free 15-minute call.** I'll suggest a few times. Call is by phone or video, whichever you prefer.
> 3. **First session.** If we decide to go ahead, I'll offer you a weekly slot. First session is 50 minutes, same as any other session, paid at the standard rate.
> 4. **Weekly sessions.** Same day and time each week, in person or online.

### Section 5 — "Cancellation and missed sessions"

**Heading:** *Cancellation and missed sessions*

**Body** `{{ CONFIRM WITH ANDREEA — current policy }}`:

> *{{ CONFIRM WITH ANDREEA — policy below is a standard psychodynamic practice template, please adjust to your actual policy }}*
>
> Because your session slot is held for you every week,these are non refundable. Sessions cancelled  are charged at the full rate. This isn't a penalty — it's how I'm able to hold a specific time in my week just for you.
>
> Holidays and illness are discussed as we go. I take a few weeks of planned leave a year, which I let you know about well in advance.

### Section 6 — "Payment"

**Heading:** *Payment*

**Body:**

> Sessions are paid by **bank transfer** at the end of each session *{{ CONFIRM WITH ANDREEA — weekly, monthly, other? }}*. I'll provide you with payment details when we begin. I don't take cash or card.

### Section 7 — "What I don't offer"

**Heading:** *What I don't offer*

**Body:**

> - **Sliding scale or reduced-fee sessions** *{{ CONFIRM WITH ANDREEA — correct? }}*
> - **Insurance billing** — I don't currently work with insurance providers. If your insurer has an out-of-network reimbursement option, I can provide receipts on request.
> - **Sessions under 50 minutes**
> - **Pay-as-you-go bookings** — therapy works because it's regular, so I only take on clients who can commit to a weekly slot

### Section 8 — CTA

**Heading:** *Ready to start with a free 15-minute call?*

**Body:**

> No pressure, no commitment, and genuinely free.

**Button:** `Book a Free 15-Minute Call` → `/book-now`

---

## Metadata

```ts
export const metadata: Metadata = {
  title: "Pricing & Booking | £60 Per Session | Free 15-Minute Call",
  description:
    "Psychodynamic therapy £60 per 50-minute session, Colchester and online. Free 15-minute intro call. BACP registered. Transparent pricing with no hidden fees.",
};
```

---

## Schema

Add `Offer` JSON-LD if feasible, with `price: 60`, `priceCurrency: GBP`.

---

## Acceptance criteria

- `npm run lint` passes
- `npx tsc --noEmit` passes
- No hardcoded values
- No banned phrases
- Three `{{ CONFIRM WITH ANDREEA }}` markers in place — cancellation policy, payment frequency, sliding scale availability
- Free 15-minute call clearly distinguished from first session
- £60 figure appears in PageHero, metadata, and at least one section body
- No misleading language about "investment in yourself" — it's a price, not a lifestyle choice

---

## Things to flag when done

- Screenshot desktop, tablet, mobile
- Three questions for Andreea flagged clearly at the top of the PR / commit message: cancellation policy, payment frequency, sliding scale
