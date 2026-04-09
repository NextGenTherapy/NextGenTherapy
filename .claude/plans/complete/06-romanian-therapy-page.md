# Prompt 06 — Create the Romanian therapy page

**Goal:** Build `/romanian-therapy` as a dedicated landing page for Romanian-speaking clients. Bilingual (English + Romanian). This targets a near-empty SEO niche — there are very few Romanian-speaking BACP therapists in the UK, and essentially none optimised for search.

**Prereq:** Read `docs/content-prompts/00-positioning-brief.md`. Run AFTER Prompt 03 (which created the stub). All Romanian text in this prompt needs `{{ CONFIRM WITH ANDREEA }}` review before publishing — I've written plausible Romanian but Andreea is the native speaker and should refine phrasing.

---

## Why this page matters

- Romanian is Andreea's native language
- There are an estimated 500,000+ Romanian speakers in the UK, many in Essex/East Anglia/London
- "Terapeut român UK" returns almost no dedicated websites — this page can rank on page 1 quickly
- Cultural specificity (immigrant identity, bicultural upbringing, parenting across cultures) is a genuine clinical offering, not marketing fluff

Target queries:
- `romanian therapist uk`
- `romanian speaking therapist essex`
- `terapeut român anglia`
- `psihoterapeut român uk`
- `terapie online limba română`
- `romanian counsellor colchester`

---

## Instructions for Claude Code

Read before writing:
- `src/app/romanian-therapy/page.tsx` (currently a stub)
- `src/components/ui/PageHero.tsx`
- The About page (Prompt 01)

Replace the stub with a full bilingual page. Remove `robots: noindex`.

**All Romanian copy in this prompt is provisional and marked `{{ CONFIRM WITH ANDREEA }}`.** Do not publish without her review. Keep the markers visible in the code as HTML comments or as `{{ }}` placeholders so Andreea knows exactly what needs review.

**No Romanian flag imagery, no nationalistic clichés, no Dracula jokes.** Keep it dignified and linguistic, not touristy.

---

## Page structure

### Section 1 — PageHero (English primary, Romanian subtitle)

```tsx
<PageHero
  eyebrow="Therapy in English & Romanian"
  title="Sunt aici. And I'm here, in both languages."
  lead="Psychodynamic therapy with a Romanian-speaking BACP-registered therapist. In person in Colchester, or online across the UK. For adults and young adults navigating life between two cultures, two languages, and sometimes two versions of themselves."
/>
```

### Section 2 — English intro (primary for SEO)

**Heading:** *Therapy in your first language*

**Body:**
> I'm Andreea — a psychodynamic psychotherapist based in Colchester and online across the UK. I grew up speaking Romanian, and I offer therapy sessions in Romanian as well as English.
>
> There are things that are easier to say in your first language. There are memories that only exist in Romanian, feelings that don't have an English word, family dynamics that don't translate, and a kind of tiredness that comes from explaining your life to people who've never lived it. In Romanian, you don't have to translate any of it. You just get to talk.
>
> I work with adults and young adults who are navigating the experience of being between two cultures — whether you came to the UK as a child, as a student, as an adult, or whether you were born here to Romanian parents. There's no single "right" version of the Romanian-in-the-UK experience, and I'm not going to assume yours.

### Section 3 — Romanian intro (mirrored)

Full-width section, visually distinct (slight background shift, perhaps `var(--color-accent-light)`).

**Heading (italic serif):** *Terapie în limba română*

**Body (all marked `{{ CONFIRM WITH ANDREEA — native speaker review }}`):**

> *{{ CONFIRM WITH ANDREEA — Romanian translation below is provisional }}*
>
> Sunt Andreea — psihoterapeut psihodinamic acreditat BACP, cu sediul în Colchester și cu sesiuni online în toată Marea Britanie. Ofer terapie în limba română pentru adulți și tineri adulți care trăiesc între două culturi, două limbi, și uneori două versiuni ale lor înșile.
>
> Sunt lucruri pe care e mai ușor să le spui în limba ta maternă. Sunt amintiri care există doar în română, sentimente care nu au un echivalent în engleză, și o oboseală aparte care vine din a-ți explica viața oamenilor care nu au trăit-o niciodată. În română, nu trebuie să traduci nimic. Doar vorbești.
>
> Am terminat masteratul în Psihoterapie Psihodinamică la Universitatea din Essex în 2020 și sunt membru înregistrat BACP. Lucrez psihodinamic, ceea ce înseamnă că luăm timpul necesar să înțelegem de ce anumite tipare apar și reapar în viața ta, de unde vin, și ce ar putea să însemne.

### Section 4 — "What I often work with" (bilingual list)

**Heading:** *What I often work with Romanian-speaking clients*

**English list:**
- **Cultural identity and belonging** — "Where is home?" when the answer isn't simple
- **Immigrant experience** — the tiredness of adapting, the grief of what's been left behind
- **Family dynamics across distance** — parents and siblings you talk to on WhatsApp, the guilt of being the one who left
- **Bicultural parenting** — raising children between two languages and two sets of expectations
- **Romanian-speaking couples' family dynamics** — not couples therapy, but individual work on relationships
- **Burnout, anxiety, and self-esteem** — often shaped by expectations you absorbed growing up
- **Young adults born in the UK to Romanian parents** — navigating two identities that don't always agree

**Romanian mirror list** `{{ CONFIRM WITH ANDREEA }}`:
- **Identitate culturală și sentimentul de apartenență** — "Unde e acasă?" când răspunsul nu e simplu
- **Experiența de imigrant** — oboseala adaptării, doliul pentru ce a rămas în urmă
- **Dinamica familiei la distanță** — părinții și frații cu care vorbești pe WhatsApp, vinovăția de a fi cel care a plecat
- **Părinția biculturală** — să crești copii între două limbi și două seturi de așteptări
- **Burnout, anxietate și stimă de sine** — adesea modelate de așteptări absorbite din copilărie
- **Tineri adulți născuți în UK din părinți români** — navigând două identități care nu sunt întotdeauna de acord

### Section 5 — Practical details (bilingual)

**Heading:** *The practical bits / Detalii practice*

Two-column on desktop. English left, Romanian right.

**English column:**
- **Where:** In person at Colchester Business Centre, or online across the UK
- **Online:** Wednesdays, for clients aged 16+
- **Language:** You can choose English, Romanian, or switch between them in the same session
- **Cost:** £60 per 50-minute session
- **Start:** Free 15-minute call to see if we're the right fit

**Romanian column** `{{ CONFIRM WITH ANDREEA }}`:
- **Unde:** Personal la Colchester Business Centre, sau online în toată Marea Britanie
- **Online:** Miercurea, pentru clienți de 16 ani sau mai mari
- **Limbă:** Poți alege engleza, româna, sau să le alternezi în aceeași sesiune
- **Cost:** £60 per sesiune de 50 de minute
- **Început:** Apel gratuit de 15 minute pentru a vedea dacă suntem potriviți

### Section 6 — CTA (bilingual buttons)

**Heading:** *Let's talk / Hai să vorbim*

**Body:**
> Whichever language feels easier — that's the one we'll start in. Book a free 15-minute call and we can see if working together is the right next step for you.
>
> *Oricare limbă îți este mai ușoară — aceea este limba în care vom începe. Rezervă un apel gratuit de 15 minute și putem vedea dacă este pasul potrivit pentru tine.* `{{ CONFIRM WITH ANDREEA }}`

**Button:** `Book a Free 15-Minute Call` → `/book-now`

---

## Metadata

```ts
export const metadata: Metadata = {
  title: "Romanian Therapist UK — Terapie în Limba Română | BACP Registered",
  description:
    "Romanian-speaking psychodynamic therapist in Colchester and online across the UK. Sesiuni de terapie în limba română. BACP registered, MSc University of Essex.",
  alternates: {
    languages: {
      'en-GB': '/romanian-therapy',
      'ro': '/romanian-therapy',
    },
  },
};
```

---

## Schema

Add `MedicalBusiness` or `ProfessionalService` JSON-LD with `availableLanguage: ["English", "Romanian"]` explicitly. This is a direct ranking signal.

---

## Acceptance criteria

- `npm run lint` passes
- `npx tsc --noEmit` passes
- No hardcoded colours, px values, or Romanian flag emoji/imagery
- No banned phrases
- All Romanian copy wrapped in `{{ CONFIRM WITH ANDREEA }}` markers (as HTML comments or inline placeholders)
- `robots: noindex` removed
- Schema includes `availableLanguage` with both English and Romanian
- `hreflang` alternates configured in metadata
- Page uses existing PageHero and alternating section pattern

---

## Things to flag when done

- Screenshot desktop, tablet, mobile
- **All Romanian copy needs native speaker review before publishing** — make this the #1 flag for Luke
- Any places where the English/Romanian split layout breaks on mobile
- Whether the page should be fully duplicated at `/terapie` as a Romanian-first mirror (discuss with Luke — probably phase 2)
