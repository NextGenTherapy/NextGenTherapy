# Prompt 07c — Rewrite the Child Therapy page

**Goal:** Rewrite `/child-therapy` for Persona 3 (The Worried Parent) of younger children aged 4–12. This page also absorbs the old `/parent-support` content as a "For parents" section, per Prompt 03.

**Prereq:** Read `docs/content-prompts/00-positioning-brief.md`. Run AFTER Prompt 03 (which absorbed parent-support) and ideally after Prompt 07b (Teen therapy) for tone consistency.

---

## Why this page matters

- Children 4–12 is a real part of Andreea's practice — she does play-based psychodynamic work, in person at Colchester Business Centre
- The page needs to speak to parents (the buyers and gatekeepers) while making clear the child is the client
- Andreea's NHS, SEN, Mind, and YMCA experience all involved primary-school-aged children — this is where her experience is deepest
- The old `/parent-support` content needs to land here as a `#for-parents` section (the redirect from Prompt 03 points here)

Target queries:
- `child therapy colchester`
- `play therapy essex`
- `therapist for children colchester`
- `child anxiety therapy`
- `school refusal child therapy`
- `child therapist near me`

---

## Instructions for Claude Code

Read before writing:
- `src/app/child-therapy/page.tsx` (which now contains absorbed parent-support content from Prompt 03)
- The teen therapy page from Prompt 07b for tone consistency
- About page (Prompt 01)

Replace the main copy. **Preserve the absorbed parent-support content** — it should appear in the new structure as the `#for-parents` section.

---

## Page structure

### Section 1 — PageHero

```tsx
<PageHero
  eyebrow="Therapy for Children"
  title="When something's not quite right with your child, but you can't put it into words yet."
  lead="Play-based psychodynamic therapy for children aged 4–12, in person in Colchester. For anxiety, behavioural changes, school difficulties, family transitions, neurodiversity, and the things children can't say but can show."
/>
```

### Section 2 — "When parents come to me"

**Heading:** *When parents bring children to me*

**Body:**

> Parents usually contact me when something has shifted with their child and they can't quite name what. Sleep changes. New fears. A child who used to love school not wanting to go. Tantrums that don't fit the situation. Withdrawal. A bright kid who's stopped enjoying things.
>
> Sometimes there's an obvious trigger — a house move, a parental separation, a bereavement, a new sibling, a hospital stay, a difficult year at school. Sometimes there isn't. Either way, what often shows up first is behaviour, because children at this age don't yet have the words to explain what's happening inside them. Behaviour is the language they have.
>
> My job is to give them another language — through play, through drawing, through the relationship we build over time — so they can tell us what's actually going on.

### Section 3 — "What I work with"

**Heading:** *What I often work with*

Clean list:

- **Anxiety and worry** — including separation anxiety, social anxiety, and fears that have started to limit daily life
- **School-related difficulties** — refusal, avoidance, friendship problems, learning differences, bullying
- **Family transitions** — separation, divorce, blended families, new siblings, bereavement
- **Behavioural changes** — withdrawal, anger, regression, things that have changed and you don't know why
- **Sleep difficulties and night fears**
- **Neurodiversity** — ADHD, autism, sensory processing differences (with or without formal diagnosis)
- **Trauma and difficult experiences** — including hospital stays, accidents, witnessing distressing events
- **Self-confidence and self-esteem**
- **The things you can't quite put into words**

### Section 4 — "How play therapy works"

**Heading:** *How I work with younger children*

**Body:**

> Children don't process feelings the same way adults do. A 7-year-old can't sit on a couch and explain her anxiety to me — but she can show me, through how she arranges figures in the sand tray, what she chooses to draw, the stories she tells with the toys, the way she plays with the puppets, what she avoids touching, what she returns to.
>
> This isn't entertainment, and it isn't a distraction technique. In psychodynamic play therapy, the play itself is the work. Patterns appear in the play that mirror what's happening for the child internally, and over time, in the safety of the relationship between us, those patterns begin to shift.
>
> My therapy room at Colchester Business Centre is set up for this. There's a desk with toys for younger people, a sand tray, drawing materials, fidgets, and space to move. The lighting is soft and the room is quiet. Stimming is welcome. Children don't have to sit still or make eye contact for the work to happen — in fact, often the opposite.

### Section 5 — "Sessions in practice"

**Heading:** *What sessions actually look like*

**Body:**

> Sessions are 50 minutes, weekly, same day and time each week. The consistency matters — children settle into therapy more deeply when they know the rhythm.
>
> Younger children are usually accompanied to the building by a parent or carer, who waits in the reception area during the session itself. We might start sessions with a short check-in together (parent, child, and me) and end the same way, depending on the child's age and what works best for them.
>
> I follow the child's lead during the session. Some children want to draw. Some want to play out elaborate stories with the toys. Some want to tell me about their week first and then play. A few want to talk almost the whole time. There isn't a right way to do this — there's just the way that works for that particular child, on that particular day.

### Section 6 — "For parents" (this is the absorbed section — anchor `#for-parents`)

This is where the old `/parent-support` content lives. The redirect from Prompt 03 (`/parent-support` → `/child-therapy#for-parents`) lands here. Make sure the section has `id="for-parents"` so the anchor works.

**Heading:** *For parents: how I work with you*

**Body:**

> Parents are part of the work, not on the sidelines of it.
>
> Before I start with your child, I'll have an initial conversation with you — usually a phone call or a brief in-person meeting — where you tell me what's been happening, what you're worried about, and what you're hoping might change. This is also where I explain how I work, what's confidential, and what to expect.
>
> Throughout the work, I offer **parent review meetings** every few weeks where we step back together and look at what's been going on, what's shifting, and how things are at home. These are not me reporting on the content of your child's sessions — that confidentiality matters even with younger clients — but they are a chance to think together about your child, the patterns you're noticing, and what might be helpful.
>
> When it's useful, I also offer **parent-only sessions** where we focus on you. Looking after a child who's struggling is exhausting, and parents often arrive at therapy with their own backlog of feelings — guilt, frustration, exhaustion, grief for the version of family life you'd hoped for. These sessions are a place to work with that, separate from your child's therapy.
>
> I've spent years working with parents alongside children — through NHS school workshops, my SEN work at Sir Bobby Robson School, my youth work with Mind in Mid & North East Essex, and my current YMCA projects. I know how hard it is, and I'm not going to add to it.

### Section 7 — "Working with school and other professionals"

**Heading:** *Working with school and other professionals*

**Body:**

> Children rarely live in just one context. With your consent, I can liaise with your child's school — class teacher, SENCo, ELSA — when it would help. I can write supporting letters for EHCP applications or assessments where I've been working with the child long enough to have something useful to contribute.
>
> If your child is also seeing a paediatrician, an OT, a speech and language therapist, or another mental health professional, I can communicate with them as part of the wider team supporting your child.

### Section 8 — "What I don't work with"

**Heading:** *What I don't work with at this age*

**Body:**

> I don't work with children who are in **acute crisis**, in danger of harming themselves or others, or who need a level of intervention that weekly individual therapy can't provide. Those children need a multidisciplinary team, usually NHS-led.
>
> I also **don't offer online sessions for under-16s** — read more about [why that is](/online-therapy). Children aged 4–12 see me in person at Colchester Business Centre.

### Section 9 — Crisis signposting

**Heading:** *If your child is in crisis right now*

**Body:**

> If you're worried about your child's immediate safety, please contact:
>
> - **NHS 111** (option 2 for mental health) — 24/7
> - **Your GP** — for an emergency same-day appointment
> - **A&E at Colchester General Hospital** — if there's immediate physical risk
> - **Childline** — 0800 1111, free 24/7 for children and young people themselves
>
> Therapy is part of the longer-term picture, not the right tool for an emergency.

### Section 10 — CTA

**Heading:** *Start with a free 15-minute call*

**Body:**
> The free 15-minute call is a parent-only conversation. You can ask me anything about how I work, what to expect, and whether I sound like the right person to work with your child. There's no pressure and no commitment to book sessions afterwards.

**Button:** `Book a Free 15-Minute Call` → `/book-now`

---

## Metadata

```ts
export const metadata: Metadata = {
  title: "Child Therapy in Colchester | Play-Based Psychodynamic Therapy 4–12",
  description:
    "Play-based psychodynamic therapy for children aged 4–12 in Colchester. Anxiety, school refusal, behavioural changes, family transitions, neurodiversity. BACP registered with NHS and SEN background.",
};
```

---

## Acceptance criteria

- `npm run lint` passes
- `npx tsc --noEmit` passes
- No banned phrases
- Section 6 has `id="for-parents"` so the `/parent-support` redirect works
- Crisis signposting section present with all four resources
- Page addresses parents as readers while framing child as client
- "Online only for 16+" rule mentioned and linked
- Sensory-aware room details present
- Named organisations (NHS, Sir Bobby Robson, Mind, YMCA) appear in Section 6

---

## Things to flag when done

- Screenshot desktop, tablet, mobile
- Test the `/parent-support` → `/child-therapy#for-parents` redirect actually scrolls to the right section
- Any places where the play therapy explanation feels too clinical
