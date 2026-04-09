# Prompt 07b — Rewrite the Teen Therapy page

**Goal:** Rewrite `/teen-therapy` (renamed from `/teenage-therapy` in Prompt 03) for **Persona 3 — The Worried Parent**. This is the page parents land on at 11pm when their 14-year-old has stopped going to school and CAMHS has a 12-month waitlist.

**Prereq:** Read `docs/content-prompts/00-positioning-brief.md`. Run AFTER Prompt 03.

---

## Why this page matters

- The Worried Parent persona is one of Andreea's strongest converting audiences — they're motivated, urgent, and willing to pay for proper care when CAMHS isn't an option
- Current `/teenage-therapy` page is generic "we help teens" copy
- The rewrite needs to speak to **the parent** as the reader, while being respectful that the **teenager** is the client
- Andreea has specific credibility here: SEN work at Sir Bobby Robson, NHS school workshops, current YMCA primary school work, Mind youth work — none of which currently appears on this page

Target queries:
- `teen therapy colchester`
- `therapist for teenagers essex`
- `teenager won't go to school`
- `school refusal therapy`
- `teen anxiety colchester`
- `self harm therapist for teen`

---

## Instructions for Claude Code

Read before writing:
- `src/app/teen-therapy/page.tsx` (renamed from `teenage-therapy` in Prompt 03)
- About page (Prompt 01) and Women cornerstone (Prompt 04) for tone
- The neurodiversity page (Prompt 05) for sensory-aware-room references

Replace all copy. Keep PageHero, alternating sections, metadata structure.

---

## Page structure

### Section 1 — PageHero

```tsx
<PageHero
  eyebrow="Therapy for Teenagers"
  title="If your teenager is struggling and you don't know what to do next."
  lead="In-person psychodynamic therapy for teenagers aged 13–17 in Colchester. Anxiety, school refusal, self-harm, low mood, identity questions, friendship and family stuff. I work alongside parents when it's helpful, and always on the young person's terms."
/>
```

### Section 2 — "If you're a parent reading this at 11pm"

This section speaks directly to the parent. It's the highest-converting section on the page.

**Heading:** *If you're a parent reading this at 11pm*

**Body:**

> A lot of the parents who contact me find the website at night, after their kid has gone to bed and the house is finally quiet enough to think. Most of them have already tried something — talking to school, GP visits, the CAMHS referral, online forums, books — and most are exhausted, scared, and quietly worried that they're somehow making it worse.
>
> If that's where you are right now, the first thing I want to say is: you haven't done anything wrong by being here, and the fact that you're looking is itself part of helping.
>
> The second thing I want to say is more practical. CAMHS waitlists in this part of the country are often 12 months or longer. School counselling is patchy and time-limited. There aren't many specialist private therapists in Colchester who work with teenagers in a way that takes both the young person and the parents seriously. I do.

### Section 3 — "What I work with"

**Heading:** *What teenagers usually come to me with*

Clean list, no cards:

- **Anxiety and panic** — including the kind that doesn't have an obvious cause
- **School refusal and school anxiety** — when getting through the school gates feels impossible
- **Mild self-harm** — cutting, scratching, hair-pulling, and other forms of self-injury that aren't immediately life-threatening but are part of how a young person is coping
- **Low mood and feeling stuck** — without it necessarily being clinical depression
- **Friendship and social difficulties** — including bullying, exclusion, and the particular cruelty of teenage social dynamics
- **Family conflict** — when home doesn't feel like a place to land
- **Identity questions** — gender, sexuality, "who am I outside of being a daughter / son / student"
- **Behavioural changes** that don't have a name yet but are worrying you as a parent
- **Late-identified ADHD or autism** — many of the teenage girls I see were missed in childhood
- **Body image and the early signs of disordered eating**

### Section 4 — "What I don't work with"

**Heading:** *What I don't work with at this age*

**Body:**

> I'm not the right therapist for every teenager, and being honest about that is part of doing the work properly.
>
> I don't work with teenagers in **acute crisis** — if your child is actively suicidal, has made an attempt, or has a severe eating disorder requiring medical monitoring, they need a specialist team rather than weekly individual therapy. I can help you think about what that might look like, but I can't be the only thing in place.
>
> I also don't work **online with under-16s** — read more about [why that is](/online-therapy). For 13–15-year-olds, sessions need to be in person at Colchester Business Centre.

### Section 5 — "How I work with teenagers"

**Heading:** *How I work*

**Body:**

> Therapy with teenagers is different from therapy with adults, and a lot of that difference is about who's in charge of the work.
>
> The teenager is the client. What we talk about in sessions is between us, with the same confidentiality I'd offer any adult — except in the rare situations where I'm legally and ethically required to involve someone else (immediate risk of harm, mainly). I explain this clearly in our first session, in language they can actually understand, and they know exactly where the limits are.
>
> I work psychodynamically, which means we're not running through worksheets and homework. We're trying to understand what's actually going on for them — what they're feeling, what they're not letting themselves feel, what's been happening at home and at school, and what their version of the situation looks like. A lot of teenagers have spent years being talked at by adults who think they know best. Therapy might be the first place they're being taken seriously.
>
> Sessions involve talking, but also writing, drawing, sometimes worksheets between sessions if it helps. I follow the teenager's lead on what works for them.

### Section 6 — "How I work with parents"

**Heading:** *How I work with parents*

**Body:**

> Parents are part of the picture, and I never pretend they're not. Here's how I usually structure the parent involvement:
>
> **Initial parent conversation.** Before I start work with your teenager, we'll have a conversation — sometimes a phone call, sometimes a brief in-person meeting — where you tell me what's been going on, what you're worried about, and what you're hoping therapy might help with. This is also where I explain how I work and what to expect.
>
> **Confidentiality boundaries.** I'm clear with both you and your teenager about what stays in the room and what doesn't. The general principle: the content of sessions is private, but I'll let you know if something happens that genuinely affects safety or wellbeing.
>
> **Parent sessions when useful.** Sometimes I offer parent-only sessions to think about what's happening at home, how to respond to specific situations, and how to look after yourself while looking after your child. These are paid sessions in their own right and they're not me reporting on your child — they're me supporting you as a parent.
>
> **Working with school where appropriate.** If your teenager has an EHCP, is engaging with SENCo support, or is having difficulties that need school involvement, I can work alongside the school with consent.

### Section 7 — "My experience with young people"

This section is the credibility section. It uses Andreea's actual CV.

**Heading:** *My experience working with young people*

**Body:**

> Most of my professional experience before private practice was with children and teenagers:
>
> - **NHS Essex** — workshops and seminars with children and parents in primary and secondary schools across Essex
> - **Sir Bobby Robson School, Ipswich** — a year of SEN-specific therapeutic provision for young people with significant additional needs
> - **Mind, Mid & North East Essex** — youth work in schools
> - **YMCA Ipswich (current)** — two ongoing projects: support work in a primary school and with residents in YMCA accommodation
>
> Alongside this I have post-qualification training in working with neurodiverse young people, eating disorders, trauma and attachment, and LGBTQ+ clients. I'm BACP registered and in ongoing clinical supervision.

### Section 8 — "What if my teenager won't come?"

This addresses the most common parent objection.

**Heading:** *"What if my teenager refuses to come?"*

**Body:**

> This is the question I get most often, and the honest answer is: it depends.
>
> Some teenagers are openly looking for therapy and just need a parent to make it possible. Others are firmly against it because they associate "therapy" with being labelled, judged, or fixed. Most are somewhere in between — curious, scared, defensive, hopeful, all at once.
>
> If your teenager is on the fence, I'd suggest two things. First, the free 15-minute call can be with you (the parent) only — you can ask me anything, decide if I sound like someone they could tolerate, and only then bring it up with them. Second, I'm comfortable having a brief introductory chat with the young person directly, with no commitment, before any first session is booked. Most teenagers find that less threatening than walking into a "therapy appointment" cold.
>
> I never pressure a young person to keep coming if they don't want to. Forced therapy isn't therapy.

### Section 9 — "Crisis signposting" (mandatory for this page)

**Heading:** *If your teenager is in crisis right now*

**Body:**

> Therapy is a slow process. If your teenager is in immediate danger — actively suicidal, has made an attempt, or is in acute mental health crisis — please contact:
>
> - **NHS 111** (option 2 for mental health) — 24/7
> - **Your GP** — for an emergency same-day appointment
> - **A&E at Colchester General Hospital** — if there's immediate physical risk
> - **Shout** — text **85258** for free, 24/7 text support
> - **Papyrus HOPELINE247** — 0800 068 4141, for under-35s with thoughts of suicide
>
> I'm not a crisis service and I can't replace one. But once the immediate danger has passed, weekly therapy can be part of what helps your teenager move forward.

### Section 10 — CTA

**Heading:** *Start with a free 15-minute call*

**Body:**
> The free 15-minute call can be with you (the parent), with your teenager, or with both of you — whatever feels easiest. I'll answer your questions honestly, and we can decide together whether working with me is the right next step.

**Button:** `Book a Free 15-Minute Call` → `/book-now`

---

## Metadata

```ts
export const metadata: Metadata = {
  title: "Therapy for Teenagers in Colchester | Anxiety, School Refusal, Self-Harm",
  description:
    "Psychodynamic therapy for teenagers aged 13–17 in Colchester. Anxiety, school refusal, self-harm, low mood, identity. BACP registered. NHS, SEN and youth work background. Free intro call for parents.",
};
```

---

## Acceptance criteria

- `npm run lint` passes
- `npx tsc --noEmit` passes
- No banned phrases
- Crisis signposting section is present, with all five resources listed
- Section 7 names Sir Bobby Robson, NHS Essex, Mind, YMCA explicitly
- Page addresses the parent as reader while clearly framing the teenager as the client
- The "online only for 16+" rule is mentioned and linked to `/online-therapy`
- No condescension toward parents, no jargon, no euphemisms about self-harm

---

## Things to flag when done

- Screenshot desktop, tablet, mobile
- Confirm the crisis signposting section is visually distinct (probably background colour shift) so it's findable in an emergency
- Any places where "the parent" framing accidentally slips into talking about the teenager in the third person in a way that feels disrespectful
