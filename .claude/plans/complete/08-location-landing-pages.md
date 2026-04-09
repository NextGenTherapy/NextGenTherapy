# Prompt 08 — Build location landing pages for the in-person catchment

**Goal:** Create 8 lightweight location-specific landing pages, one for each town in Andreea's in-person catchment. Each targets `therapist [town]` and related queries. This is the single biggest local-SEO lever the site has.

**Prereq:** Read `docs/content-prompts/00-positioning-brief.md`. Run AFTER Prompts 01–07 so the cornerstone pages exist to link to.

---

## Why this matters

The site currently has no location-specific pages beyond the main Colchester mention. Google strongly rewards location-specific landing pages for local service businesses. Each of these pages is cheap to produce and cumulatively pulls in significant organic traffic for the easiest-to-rank queries in her niche.

**None of these pages should be thin duplicate content.** They share a structure but each has genuine location-specific detail: travel time, route, nearest parking, who in that town typically comes to her, and a town-specific opening line.

---

## Pages to create

```
/therapy-in-colchester       (primary — this is her actual location)
/therapy-in-wivenhoe
/therapy-in-mersea
/therapy-in-tiptree
/therapy-in-marks-tey
/therapy-in-manningtree
/therapy-in-clacton
/therapy-in-ipswich
```

---

## Shared page template

Each page uses this structure. Variables in `[BRACKETS]` are filled per town.

### Section 1 — PageHero

```tsx
<PageHero
  eyebrow="Therapy in [TOWN]"
  title="Psychodynamic therapy for people in [TOWN] and the surrounding area."
  lead="[TOWN_OPENING_LINE] — and my practice is a [TRAVEL_TIME] drive from [TOWN] town centre, at Colchester Business Centre. I also offer online therapy for anyone aged 16+, UK-wide."
/>
```

### Section 2 — "Getting to me from [TOWN]"

**Heading:** *Getting to me from [TOWN]*

**Body template:**
> My practice is at Colchester Business Centre, 1 George Williams Way, Colchester CO1 2JS. From [TOWN], it's roughly a [TRAVEL_TIME] drive [VIA_ROUTE]. There's parking on site and the building is ground-floor accessible.
>
> If driving isn't practical for you, online sessions are available on Wednesdays for clients aged 16 and over — you can read more about how that works [here](/online-therapy).

### Section 3 — "What I work with"

Identical short block across all pages, linking to the cornerstones. This is intentional — each location page is a signpost, not a cornerstone in itself.

**Heading:** *What I work with*

> I'm a BACP-registered psychodynamic psychotherapist with an MSc from the University of Essex. My main areas of work are:
>
> - **[Therapy for women](/therapy-for-women)** — burnout, anxiety, self-esteem, body image, identity
> - **[ADHD and autism in adults](/neurodiversity)** — affirmative practice, sensory-aware room
> - **[Therapy for teenagers](/teen-therapy)** (in person only)
> - **[Therapy for children](/child-therapy)** (in person only)
> - **[Sessions in Romanian](/romanian-therapy)** — terapie în limba română

### Section 4 — Town-specific paragraph

This is the section that prevents the pages from being thin duplicate content. Each town gets its own paragraph — see the per-town content below.

**Heading:** *From [TOWN]*

**Body:** See per-town content below.

### Section 5 — CTA

Standard CTA block.

**Heading:** *Start with a free 15-minute call*

**Body:**
> If you're in [TOWN] or nearby and wondering whether therapy with me might be the right fit, the free 15-minute call is the place to start. It's informal, there's no pressure, and you can ask anything you want to.

**Button:** `Book a Free 15-Minute Call` → `/book-now`

---

## Per-town content

### `/therapy-in-colchester`

**Travel time / route:** 0 min — practice is in Colchester

**Town-specific paragraph:**
> Colchester is where I practise and where I've built most of my client base. Plenty of the people I see grew up in Colchester or moved here for the university, for work, or because family is nearby. I also see a lot of Essex University students and recent graduates working through the transition from student life into whatever comes next.

**Opening line:** `Colchester is where I practise`

**Metadata:**
```ts
title: "Psychodynamic Therapist in Colchester | BACP Registered | Next Generation Therapy"
description: "Psychodynamic therapy in Colchester for women, neurodivergent adults, teenagers and children. Based at Colchester Business Centre. BACP registered. Free 15-minute call."
```

---

### `/therapy-in-wivenhoe`

**Travel time / route:** ~15 min drive via A133 / Colchester Road

**Town-specific paragraph:**
> Wivenhoe is just down the road from me. A lot of the people I see from Wivenhoe are connected to the University of Essex — staff, postgraduates, or people who settled in the village after studying here. It's the kind of place where everyone knows everyone, which is lovely and also sometimes exactly the reason people want a therapist a short drive away instead of round the corner.

**Opening line:** `Wivenhoe is a short drive from me`

**Metadata:**
```ts
title: "Therapist in Wivenhoe | Psychodynamic Therapy Colchester | BACP Registered"
description: "Psychodynamic therapy for Wivenhoe residents. 15 minutes from Wivenhoe to my practice at Colchester Business Centre. BACP registered. Free 15-minute intro call."
```

---

### `/therapy-in-mersea`

**Travel time / route:** ~25 min drive via B1025 and Mersea Road

**Town-specific paragraph:**
> Mersea is roughly 25 minutes from my practice — along the B1025 and through the causeway if the tide's with you. I see clients from both West and East Mersea. Island life has its own particular rhythm, and so do the reasons people from Mersea tend to come to therapy: the slower pace can be a gift or a pressure, sometimes both at once.

**Opening line:** `Mersea is about 25 minutes from me`

---

### `/therapy-in-tiptree`

**Travel time / route:** ~20 min drive via A12 and B1022

**Town-specific paragraph:**
> Tiptree is about 20 minutes from Colchester Business Centre, straight up the B1022. Most of the clients I see from Tiptree work in Colchester or Chelmsford and want somewhere a bit closer to home than either.

**Opening line:** `Tiptree is about 20 minutes away`

---

### `/therapy-in-marks-tey`

**Travel time / route:** ~15 min drive via A12

**Town-specific paragraph:**
> Marks Tey is about 15 minutes up the A12 from me. It's a commuter village for a lot of people — with the London train line running through it — and a lot of the clients I see from Marks Tey are dealing with the particular kind of exhaustion that comes from commuting long hours and still trying to have a full life at either end.

**Opening line:** `Marks Tey is 15 minutes up the A12`

---

### `/therapy-in-manningtree`

**Travel time / route:** ~25 min drive via A120 / A137

**Town-specific paragraph:**
> Manningtree is around 25 minutes from me, up the A137. It's on the London train line, which makes it a popular spot for people who work in the city but want to live somewhere quieter. A lot of the clients I see from Manningtree are navigating the kind of overstretch that comes from doing two lives at once — work self and home self, rarely in the same postcode.

**Opening line:** `Manningtree is a short drive up the A137`

---

### `/therapy-in-clacton`

**Travel time / route:** ~30 min drive via A133

**Town-specific paragraph:**
> Clacton is about 30 minutes from me, straight along the A133. For clients who don't want to make the drive every week, I also offer online sessions on Wednesdays for anyone aged 16 or over — and a lot of my Clacton clients prefer that option, at least for part of the work.

**Opening line:** `Clacton is around 30 minutes along the A133`

---

### `/therapy-in-ipswich`

**Travel time / route:** ~30 min drive via A12

**Town-specific paragraph:**
> Ipswich is around 30 minutes from me, up the A12. I've worked in Ipswich for years — I spent a year at Sir Bobby Robson School providing SEN therapeutic work, and I currently work with the YMCA in Ipswich on two ongoing projects. A lot of my neurodivergent adult clients and parents of neurodivergent children come from Ipswich; the affirmative, sensory-aware approach isn't easy to find locally.

**Opening line:** `Ipswich is where a lot of my current NHS and charity work is based`

**Metadata:**
```ts
title: "Therapist for Ipswich Residents | ADHD, Autism, SEN-Aware | BACP Registered"
description: "Psychodynamic therapy for adults and teenagers in Ipswich. Specialist experience with neurodiversity and SEN. 30 minutes from Ipswich to Colchester Business Centre. Also online (16+)."
```

---

## Implementation notes

- **File structure:** Each page at `src/app/therapy-in-[slug]/page.tsx` with matching `.module.scss`
- **Shared component:** If it makes sense, create a `LocationLandingPage` component that takes props for the variable content. If that adds complexity, just duplicate — these pages are simple enough.
- **Internal linking:** Every location page links to at least 3 cornerstone pages. The cornerstone pages do NOT need to link back to every location page (that would bloat them). Instead, add a single "Service areas" block to the footer linking to all 8 location pages.
- **Sitemap:** Add all 8 pages to `src/app/sitemap.ts` (or wherever the sitemap lives).
- **Schema:** Each location page gets `LocalBusiness` JSON-LD with `areaServed` set to that town.

---

## Acceptance criteria

- `npm run lint` passes
- `npx tsc --noEmit` passes
- All 8 pages build successfully
- Each page has:
  - Unique PageHero title and lead
  - Unique town-specific paragraph
  - Correct travel-time and route
  - Metadata title + description including the town name
  - `LocalBusiness` schema with `areaServed`
- All 8 pages added to sitemap
- Footer has a "Service areas" block linking to all 8
- No thin-content flags (each page has at least 400 words of unique content)

---

## Things to flag when done

- Screenshot one of each at desktop and mobile (pick Wivenhoe, Ipswich, and Mersea)
- Confirm the travel times are roughly accurate
- Any towns where the paragraph feels forced — those can be reworked by Andreea later
