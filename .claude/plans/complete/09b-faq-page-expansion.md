# Prompt 09b — Expand the FAQ page

**Goal:** Rewrite and expand `/faq` from its current thin state into a substantial, useful FAQ that handles real practical questions, links to the right cornerstones, and ranks for long-tail queries.

**Prereq:** Read `docs/content-prompts/00-positioning-brief.md`. Run AFTER all the cornerstone pages exist so links resolve.

---

## Why this matters

- FAQs are one of the most reliable ways to capture long-tail organic search traffic ("how much does therapy cost", "what's the difference between counselling and psychotherapy", "do I need a referral")
- A well-built FAQ with `FAQPage` schema can earn rich-result snippets in Google
- Right now, the FAQ page is thin and doesn't surface real practical information
- It's also a low-friction way for hesitant clients to learn enough to feel comfortable booking

---

## Instructions for Claude Code

Read before writing:
- `src/app/faq/page.tsx` (or wherever the FAQ lives)
- About page (Prompt 01) for tone
- The Is This Right For You page (Prompt 09) for style consistency

Replace existing content. Keep PageHero, metadata structure, schema components.

If a `FaqAccordion` or similar component exists, use it. If not, create a simple accessible accordion component at `src/components/ui/FaqAccordion.tsx` with:
- Click to expand/collapse
- Keyboard accessible (Tab, Enter, Space, Arrow keys)
- `aria-expanded` and `aria-controls` correctly set
- Smooth height transition (CSS, no JS animation libraries)
- Single-open behaviour optional — multi-open is fine

---

## Page structure

### Section 1 — PageHero

```tsx
<PageHero
  eyebrow="Frequently Asked Questions"
  title="The questions I get asked most often."
  lead="Practical questions about how I work, what therapy costs, who I work with, and what to expect. If your question isn't answered here, the free 15-minute call is the best place to ask it."
/>
```

### Section 2 — FAQ groups

Organise the FAQ into themed groups. Each group has its own H2 heading, with FAQs as accordions underneath.

---

#### Group 1 — Getting started

**Q: How do I book a first session?**

A: The first step is always a free 15-minute call. You can request one by [filling in the contact form](/book-now), emailing me directly, or calling. I'll get back to you within 1–2 working days with some times that work. We do the call (phone or video, your choice), and if we both think it's a good fit, we book a first session at that point.

**Q: What's the free 15-minute call for? Is it actually free?**

A: It's genuinely free, with no booking fee or commitment to sessions afterwards. It exists for two reasons. First, you get to ask anything you want about how I work, what to expect, and whether I sound like someone you could talk to. Second, I get a sense of what's bringing you to therapy, whether I'm the right person for it, and whether I'd recommend someone else instead. Plenty of people use the call to decide I'm not the right fit, and that's exactly what it's for.

**Q: How quickly can I start?**

A: It depends on my current availability. As of writing, I have some weekly slots available — the free call is the quickest way to find out what's open right now. If we're a good fit but I don't have a slot that works for you, I'll be honest about that and may suggest other Colchester therapists.

**Q: Do I need a referral from my GP?**

A: No. I'm a private practitioner — you can contact me directly, no referral needed. If you're already working with a GP or another professional and want me to liaise with them with your consent, I can.

---

#### Group 2 — How therapy works

**Q: What is psychodynamic therapy?**

A: It's an approach that takes time to understand why certain patterns — overthinking, anxiety, avoidance, self-criticism, whatever brought you to therapy — keep showing up in your life. We work weekly, open-endedly, focused on understanding rather than techniques. There's [a longer explanation here](/blog/what-is-psychodynamic-therapy) if you want it.

**Q: How is psychodynamic therapy different from CBT?**

A: CBT (Cognitive Behavioural Therapy) is structured, time-limited, goal-focused, and tool-based. It works well for many specific issues — phobias, OCD, certain anxiety disorders. Psychodynamic therapy is slower and more open-ended. It's about understanding *why* something keeps happening rather than learning techniques to manage it. Neither is better — they suit different people and different problems. [More detail here](/is-this-right-for-you).

**Q: How long will I be in therapy?**

A: There's no fixed length. Some people work with me for a few months around a specific life event. Others stay for a few years because the patterns we're working with took a long time to form. We review how things are going as we go, and there's no contract that locks you in. You can stop at any time.

**Q: How often will we meet?**

A: Weekly, same day and time each week. Therapy works because of regularity — weekly sessions build a rhythm that lets the work go deeper than fortnightly or ad-hoc sessions can.

**Q: What happens in a first session?**

A: Mostly listening. You tell me what brought you here in whatever order makes sense, and I ask questions to understand the context. We don't do deep work in the first session — we're getting a feel for each other and the work. If by the end you're not sure, we can talk about that. There's a longer answer in [this blog post](/blog/first-therapy-session-what-to-expect).

---

#### Group 3 — Practical and money

**Q: How much does a session cost?**

A: £60 per 50-minute session. The free 15-minute call is genuinely free. Full pricing details are [here](/pricing).

**Q: How do I pay?**

A: By bank transfer. *{{ CONFIRM WITH ANDREEA — weekly or monthly billing? }}* I'll provide payment details when we begin.

**Q: Do you offer a sliding scale or reduced fees?**

A: *{{ CONFIRM WITH ANDREEA — current policy }}*

**Q: Do you take insurance?**

A: I don't currently work with insurance providers directly. If your insurer has an out-of-network reimbursement option, I can provide receipts on request.

**Q: What's your cancellation policy?**

A: *{{ CONFIRM WITH ANDREEA — current policy. Standard psychodynamic practice is 48 hours notice, with full session fee charged for late cancellations because the slot is held for you each week. }}*

**Q: Where is your practice?**

A: Colchester Business Centre, 1 George Williams Way, Colchester CO1 2JS. Ground floor, on-site parking, accessible building.

---

#### Group 4 — Online therapy

**Q: Do you offer online therapy?**

A: Yes, on Wednesdays, for clients aged 16 and over, anywhere in the UK. [Full details on the online therapy page](/online-therapy).

**Q: Why don't you offer online therapy to under-16s?**

A: Confidentiality. Online sessions depend on the client being in a private space where they can speak freely. In my experience, this is rarely the case for younger clients who live with parents or carers — and the work suffers when a young person is watching the door instead of focusing on the session. For under-16s, I only work in person.

**Q: What platform do you use for online sessions?**

A: *{{ CONFIRM WITH ANDREEA — Zoom, Google Meet, or other }}*

---

#### Group 5 — Who I work with

**Q: What ages do you work with?**

A: Children aged 4 and over, teenagers, young adults, and adults up to their late 30s / early 40s. I don't work with clients aged 41 and over — that's a deliberate choice based on where my training and experience are strongest.

**Q: Do you work with couples?**

A: No, individuals only. If you're looking for couples work, I'd suggest Relate or a therapist who specialises in couples work — many advertise on Counselling Directory.

**Q: Do you work with neurodivergent clients?**

A: Yes — adult ADHD, autism, and self-identified neurodivergence are a significant part of my practice. I have post-qualification training in working with neurodiverse clients, and the therapy room is sensory-aware (soft lighting, fidgets, stimming welcome). I don't require a formal diagnosis for you to work with me. [More on the neurodiversity page](/neurodiversity).

**Q: Do you work with LGBTQ+ clients?**

A: Yes — particularly with women in same-sex relationships. I have post-qualification training in working with LGBTQ+ clients. [More details](/therapy-for-women#lgbtq).

**Q: Do you offer therapy in Romanian?**

A: Yes. [Full details on the Romanian therapy page](/romanian-therapy).

---

#### Group 6 — Confidentiality

**Q: Is what I tell you confidential?**

A: Yes, with the standard exceptions every BACP-registered therapist works under. I'd break confidentiality only if there's a serious and immediate risk of harm to you or someone else, or if I'm legally required to (which is rare). I'd always try to discuss this with you first if it ever came up. Beyond that, what we talk about stays between us.

**Q: Will you tell my parents what we talk about? (For young clients)**

A: Within the same limits above, no. I explain confidentiality clearly to every young client at the start of our work, and I'm clear with their parents too about what stays in the room. If something happens in a session that I think parents need to know about for safety reasons, I'd talk about it with the young client first wherever possible.

**Q: Are you in supervision?**

A: Yes — ongoing clinical supervision is a requirement of BACP membership and a core part of psychodynamic practice. Supervision discussions are themselves confidential and don't identify clients by name. I'm also in personal therapy, which is another standard part of being a psychodynamic therapist.

---

#### Group 7 — When therapy isn't right

**Q: What if therapy isn't working?**

A: We'd talk about it. Therapy isn't a smooth upward line, and there are usually patches where things feel stuck or harder. That's often part of the work, not a sign it isn't working. But if you're consistently feeling that we're a mismatch, or you'd like to try a different approach, I'd rather you tell me so we can think about it together. I'd never take it personally.

**Q: When wouldn't you recommend therapy with you?**

A: If you're looking for short-term, structured, or CBT-style work, we'd be a mismatch. If you're in acute crisis, you need a specialist team rather than weekly individual therapy. If you're aged 41+, looking for couples therapy, or needing forensic or court-related work, those aren't things I do. There's a more honest version of all this on the [Is This Right For You? page](/is-this-right-for-you).

**Q: What if I'm in crisis right now?**

A: Therapy is for ongoing work, not emergencies. If you're in immediate danger or thinking about suicide, please contact NHS 111 (option 2), your GP, A&E, or text Shout on 85258 (free, 24/7). I'm happy to be part of the longer-term picture once you're safe, but I'm not a crisis service.

---

### Section 3 — Final CTA

**Heading:** *Still have questions?*

**Body:**
> The free 15-minute call is the best place to ask anything I haven't covered here. There's no pressure to book sessions afterwards.

**Button:** `Book a Free 15-Minute Call` → `/book-now`

---

## Metadata

```ts
export const metadata: Metadata = {
  title: "FAQ — Therapy Questions Answered | Next Generation Therapy Colchester",
  description:
    "Honest answers to the questions I get asked most: cost, how therapy works, online sessions, who I work with, confidentiality, and what to expect. Psychodynamic therapy in Colchester and online.",
};
```

---

## Schema

Add `FAQPage` JSON-LD schema with all questions and answers. This is what enables Google rich-result snippets.

Either build the schema component at `src/components/seo/FaqSchema.tsx` or extend the existing schema components folder. The component should take an array of `{ question: string; answer: string }` objects and produce valid JSON-LD.

---

## Acceptance criteria

- `npm run lint` passes
- `npx tsc --noEmit` passes
- All FAQ items render in an accessible accordion
- `FAQPage` JSON-LD schema present and valid (test with Google's Rich Results Test)
- All `{{ CONFIRM WITH ANDREEA }}` markers visible in the source
- No banned phrases
- Internal links resolve to existing pages (cross-check against the prompt sequence — links to blog posts that don't exist yet should be marked or removed)

---

## Things to flag when done

- Screenshot desktop, tablet, mobile (FAQ collapsed and one expanded)
- Run Google's Rich Results Test on the deployed page and confirm FAQ schema is valid
- The four `{{ CONFIRM WITH ANDREEA }}` items: payment frequency, sliding scale, cancellation policy, online platform
