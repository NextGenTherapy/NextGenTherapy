# Next Gen Therapy

Psychodynamic therapy website for Andreea Horhocea, a BACP-registered psychotherapist based in Colchester, Essex, UK. In-person sessions at Colchester Business Centre and online sessions (age 16+) across the UK.

---

## 1. Tech Stack

- **Framework**: Next.js 15.3.2 (App Router)
- **Language**: TypeScript 5.2
- **Styling**: SCSS Modules (no Tailwind)
- **Testing**: Jest + React Testing Library
- **Deploy**: Vercel

## 2. Key Commands

```bash
npm run dev          # Development server
npm run build        # Production build
npm run lint         # ESLint
npx tsc --noEmit     # TypeScript check
npm run test         # Run tests
```

## 3. Critical Technical Rules

### Before Writing Code
- Read existing files first — never assume structure
- Check `src/components/` before creating new components
- Run `npm run lint && npx tsc --noEmit` before marking tasks done

### TypeScript
- Never use `any` — use proper types or `unknown`
- Props interface: `{ComponentName}Props`

### Styling
- Never use inline styles — all in `.module.scss` files
- All values via CSS custom properties from `src/styles/variables.scss`
- No hardcoded hex colours, px values, or arbitrary sizes

### Components
- Every component needs matching `.module.scss` file
- Always use `next/image` — never raw `<img>` tags
- New pages require metadata export

### Compliance (UK Law / BACP)
- UK GDPR & DPA 2018 — not US HIPAA
- Contact forms require explicit consent checkbox
- Display BACP membership and qualifications
- Include therapy disclaimers and emergency contacts

## 4. Project Structure

```
src/app/           # App Router pages
src/components/    # React components (ui/, forms/, layout/, seo/)
src/lib/           # Utilities
src/styles/        # Global styles, variables.scss
.claude/           # Claude Code config (rules/, skills/, commands/, agents/)
docs/              # Prompts, briefs, positioning (see content-prompts/)
```

## 5. Detailed Documentation

- Styling: `.claude/skills/styling/SKILL.md`
- SEO: `.claude/skills/seo/SKILL.md`
- Components: `.claude/skills/components/SKILL.md`
- UK Compliance: `.claude/skills/healthcare-compliance/SKILL.md`
- Rules: `.claude/rules/`
- **Positioning & voice: `docs/content-prompts/00-positioning-brief.md`** ← read this before writing any copy

## 6. Domain

- Production: nextgentherapy.co.uk
- Location: Colchester Business Centre, 1 George Williams Way, Colchester CO1 2JS
- Service area: in-person within ~30 min drive of Colchester (Wivenhoe, Mersea, Tiptree, Marks Tey, Manningtree, Clacton, Ipswich), online (age 16+) UK-wide

---

## 7. Practitioner Profile — Andreea Horhocea

> **This section is the single source of truth for all page copy, metadata, and schema. If a prompt tells you to write something about Andreea and contradicts this, the positioning brief wins. If you are unsure, mark it `{{ CONFIRM WITH ANDREEA }}` rather than inventing.**

### Credentials
- **MA Psychodynamic Psychotherapy**, University of Essex, 2020
- **BACP Registered Member** (MBACP)
- **Ongoing**: clinical supervision + personal therapy (both required markers of psychodynamic credibility)

### Post-qualification training (CPD)
- Neurodiversity (ADHD, autism — affirmative practice)
- Eating disorders
- Addiction
- Trauma and attachment
- Working with LGBTQ+ clients
- Attachment work

### Professional experience
- **NHS Essex** — workshops and seminars with children and parents in primary and secondary schools
- **Sir Bobby Robson School (Ipswich)** — SEN-specific provision, 1 year (role concluded)
- **Mind (Mid & North East Essex)** — youth work in schools
- **YMCA (ongoing)** — two current projects: primary school support + residents in YMCA accommodation in Ipswich
- Private practice: 3–5 years

### Languages
- English
- **Romanian** — offers therapy in Romanian. Specific cultural understanding of immigrant experience, cultural identity formation in a new country, bicultural upbringing.

### Why she became a therapist
She grew up without access to mental health support or understanding, and wanted to create a space specifically for children and women to unpack the expectations and challenges placed on them. *(Handle this carefully — do not over-share, do not frame as trauma narrative. Single sentence on About page, max.)*

---

## 8. How She Works

### Approach
Psychodynamic, integrating other modalities when useful (mindfulness, CBT-informed tools, creative work). Weekly, open-ended — traditional format, however long it takes. Not short-term / not solution-focused / not CBT.

### In the room
- Talking
- Play (sand tray, toys, drawing) with younger children
- Art and creative materials
- Writing/journalling prompts
- Worksheets and structured exercises between sessions where appropriate
- Parent sessions alongside child work

### The room itself (Colchester Business Centre)
Ground floor. Quiet. Plants. Green, calming. A couch plus two comfortable chairs. Desk with toys for children and younger people. Fidgets available for any age. **Stimming is welcomed.** Soft lighting for sensory-sensitive clients. This sensory-aware setup is a genuine selling point for neurodivergent clients — it should feature prominently on the Neurodiversity page.

### Session structure
- **Free 15-min informal call** — not therapy. A vibe check for both sides, logistics, Q&A.
- **Session 1** — "tell me what brought you here." Gets to know the person, current situation. Comfort and fit come before assessment.
- **Ongoing** — weekly, open-ended.

### Age groups she works with
- Children 4–7 (in-person only)
- Tweens 8–12 (in-person only)
- Teens 13–17 (in-person only)
- Young adults 18–25
- Adults through their 30s
- Parents (as clients in their own right, not just alongside child work)

**Positive framing:** Describe who Andreea works with without mentioning who she doesn't. Use "children, teenagers, young adults, and adults through their 30s" rather than "up to age 40" or "not over 40".

### Online sessions
- **Age 16+ only.** Confidentiality reason: younger clients have had sessions in houses where parents are present, which undermines the work. This is a safeguarding and clinical-integrity decision and should be stated plainly on the site — parents respect this.
- Platform: *{{ CONFIRM: Zoom or other }}*
- **Availability**: Monday, Tuesday, Wednesday, and Friday. Wednesday is online-only; other days offer both in-person and online.

### Clinical limits (will NOT work with)
- Couples
- Open court cases
- Forensic work
- Active psychosis
- Current addiction (without wraparound support)

State these plainly on an "Is this right for you?" page. Being explicit builds trust.

---

## 9. Who She's Best At Helping

The website should be rebuilt around these five real specialisms, not the current "everyone with a heartbeat" framing.

### Primary niche — Women (including LGBTQ+ women)
High-functioning, hyper-aware, often high-achievers. Self-esteem, relationship difficulties, anxiety, avoidance, burnout, eating difficulties, body image, identity questions.

Real phrases these clients use in first sessions (use these verbatim as headlines, subheadings, and blog hooks):
- *"I can't stop overthinking."*
- *"I'm avoiding situations because of my body image."*
- *"I feel stuck and burnt out."*
- *"I fit everything in and somehow still feel like I'm slipping something."*
- *"I can't seem to stop worrying."*
- *"I don't know who I am anymore."*
- *"I feel like I'm failing at everything."*
- *"I can't switch off."*

### Secondary niche — Neurodivergent adults and teens
Adult ADHD, adult autism, late-diagnosed or undiagnosed. Affirmative practice. Sensory-aware room. Stimming welcomed.

### Tertiary niche — Teenagers with mild self-harm and challenging behaviour
Girls especially. Working alongside schools and parents.

### Tertiary niche — Romanian-speaking clients
Adults and young adults navigating bicultural identity, immigrant experience, parenting across cultures. **Near-empty SEO niche in Essex.** Dedicated page with bilingual elements.

### Secondary stream — Children 4–12
Play-based psychodynamic work with parent involvement. Not the primary marketing focus but a real part of the practice.

---

## 10. Target Client Personas

### Persona 1 — "The High-Functioning Woman" (primary)
Woman aged 25–40. Professional or studying. Looks fine to everyone else. Exhausted, hyper-vigilant, can't switch off. May have body image issues or disordered eating she hasn't named. Searches at 11pm on a Sunday. Wants to understand *why* this keeps happening, not get a 6-week worksheet plan. Will pay £60/session if she trusts the therapist.

### Persona 2 — "The Late-Diagnosed Neurodivergent Adult"
Woman or non-binary person aged 20–40. Recently identified as ADHD or autistic, often after their child's diagnosis. Burned out by years of masking. Wants an affirmative therapist who won't try to "fix" them.

### Persona 3 — "The Worried Parent"
Parent (usually mother) of a 7–15-year-old who's struggling — school refusal, anxiety, self-harm, low mood, behavioural changes. CAMHS waitlist is 12+ months. Researches at night. Wants a therapist who understands SEN/neurodiversity and won't judge the child.

### Persona 4 — "The LGBTQ+ Woman"
Woman in a same-sex relationship navigating identity, family, relationship dynamics, or internalised shame. Wants a therapist who won't make her come out again or explain her life.

### Persona 5 — "The Romanian Speaker"
Adult Romanian speaker in Essex/Suffolk, often immigrant or second-generation. Struggling to find a therapist who speaks their language and understands the bicultural experience.

---

## 11. Voice & Tone

### Do
- First-person. Andreea writes "I" not "we" or "the practice."
- Warm, direct, calm. No clinical jargon on public pages.
- Specific. Name places, name experiences, name real phrases.
- Honest about limits. "I don't work with couples" beats vague "I work with individuals."
- Short paragraphs. Breathing room.
- Use the client's actual words as headlines and subheadings.

### Don't
- Never say "empowering," "journey," "unlock your potential," "holistic wellness," "transformative."
- Never say "safe, nurturing space" — it's the most generic phrase in therapy marketing.
- No stock phrases like "Ready to take the first step?" — replace with specifics.
- No fake testimonials, no composite case studies presented as real, no quotes attributed to anyone.
- No Romanian flag imagery or clichés on the Romanian page — keep it dignified and linguistic, not nationalistic.
- Don't try to appeal to clients she doesn't work with (over-40s, couples, CBT-seekers, forensic).

### Reference voice line (her real phrasing, lightly polished)
> "The first session is really a vibe check. Before anything else, you need to feel comfortable enough with me to want to come back. That matters more than any technique."

---

## 12. Content Pillars (in priority order)

The site and blog should reinforce these five pillars. Everything else gets demoted or cut.

1. **Therapy for women — burnout, overthinking, self-worth, body image**
2. **Adult neurodiversity (ADHD, autism) — affirmative, sensory-aware**
3. **Therapy for teenagers — parent-informed, school-aware**
4. **Romanian-speaking therapy in the UK**
5. **Psychodynamic therapy, explained honestly** (why open-ended, why not CBT, who it's for, who it isn't)

## 13. SEO Priorities (in order)

1. **Local Colchester SEO** — pages optimised for "[issue] therapist Colchester" searches
2. **Romanian niche** — "terapeut român UK" / "Romanian therapist Essex" — near-empty niche, easy win
3. **Neurodiversity adult** — "adult ADHD therapist Essex" / "affirmative autism therapy UK"
4. **Women burnout / high-achieving women anxiety**
5. **Email list / lead magnet** — future phase
6. **Directory visibility** — Psychology Today and BACP already strong, optimise GBP

### What the site should rank for (target queries)
- `therapy colchester` / `psychotherapist colchester` / `psychodynamic therapy colchester`
- `therapist [town]` for each of: Wivenhoe, Mersea, Tiptree, Marks Tey, Manningtree, Clacton, Ipswich
- `adult adhd therapist essex` / `autism therapy colchester` / `neurodivergent therapist uk`
- `romanian therapist uk` / `terapie online UK` / `terapeut român Essex`
- `burnout therapy for women` / `therapist for high achieving women`
- `teen therapy colchester` / `school anxiety colchester`

### What it should STOP trying to rank for
- Generic "counselling UK" (too competitive)
- "Therapy for all ages" (her focus is children through adults in their 30s)
- "Couples therapy" / "CBT" / "short-term therapy" (she doesn't offer these)

## 14. Site Architecture — Current vs Target

### Problems with current structure
- 12+ pages saying structurally the same thing (child / teen / young adult / neurodiversity / LGBTQ+ / parent support / services / about therapy)
- Thin duplicate content competing with itself in Google
- No single strong cornerstone page per niche
- No location-specific pages at all
- Romanian language offering is completely invisible

### Target structure
```
/                                  Homepage (rewritten)
/about                             About Andreea (rewritten with real CV)
/services                          Services hub (slimmer, signposts to cornerstones)
/therapy-for-women                 NEW cornerstone — primary niche
/neurodiversity                    Rewritten — adult-first, sensory-aware
/teen-therapy                      Consolidated from teen + young adult + child-behaviour
/child-therapy                     Kept, linked to parent support
/romanian-therapy                  NEW — bilingual landing
/online-therapy                    NEW/rewritten — UK-wide, age 16+
/is-this-right-for-you             NEW — qualifying page (stops CBT-seeker losses)
/pricing                           Strengthened with substance
/location                          Kept + linked to location landing pages
/therapy-in-wivenhoe               NEW location page
/therapy-in-mersea                 NEW location page
/therapy-in-manningtree            NEW location page
/therapy-in-clacton                NEW location page
/therapy-in-ipswich                NEW location page
/therapy-in-tiptree                NEW location page
/therapy-in-marks-tey              NEW location page
/blog                              Blog hub
/blog/[post]                       10 evergreen pillar posts
/book-now                          Contact (existing)
/faq                               FAQ (existing, expanded)
/privacy-policy                    Legal
/terms                             Legal
```

LGBTQ+ therapy becomes a *section* on `/therapy-for-women` rather than a standalone page, because her LGBTQ+ specialism is specifically with women in same-sex relationships. Parent support becomes a section on `/child-therapy` and `/teen-therapy`. Young-adult therapy merges into `/therapy-for-women` and `/neurodiversity`. About Therapy is cut and its content absorbed into `/is-this-right-for-you`.

**Net effect**: fewer but meatier pages, clear topical authority, no internal cannibalisation.

---

## 15. Things That Must Never Appear on the Site

- Fake or invented testimonials
- "Composite client stories" presented as real
- Exclusionary age language (avoid "no 41+", "over 40" — use positive framing instead)
- Romanian flag imagery or nationalistic phrasing
- "Safe nurturing space" stock phrase
- Any reference to CBT, short-term therapy, or solution-focused work as something she offers
- Her personal trauma history in any detail
- Stock photos of strangers in therapy rooms
- Generic "Ready to take the first step?" CTAs without specifics
- Hardcoded hex values or px values anywhere in SCSS

## 16. Things That Must Appear on the Site

- "BACP Registered Member" badge, linked to her BACP profile
- Named post-qualification training (neurodiversity, eating disorders, trauma, attachment, LGBTQ+, addiction)
- Named organisations she has worked with (NHS Essex, Sir Bobby Robson School, Mind Mid & North East Essex, YMCA Ipswich)
- MA University of Essex 2020
- Romanian language availability
- Clinical limits stated plainly (no couples, no forensic, etc.)
- Online age cap (16+) and the reason
- In-person service area towns
- Free 15-min consultation, clearly distinguished from session 1
- £60 session fee, with what's included
- Emergency / crisis signposting on every relevant page

---

## 17. Working With Prompts

Luke uses a sequential prompt workflow with Claude Code in Cursor. One prompt at a time. Verify lint + types pass before moving to the next. See `docs/content-prompts/README.md` for the current prompt sequence and order.

**For any prompt involving page copy**: read `docs/content-prompts/00-positioning-brief.md` first, then follow the prompt.

**For any ambiguity about what Andreea would say**: mark it `{{ CONFIRM WITH ANDREEA }}` and move on. Do not invent content in her voice.

**Track all placeholders**: Any `{{ CONFIRM WITH ANDREEA }}`, `{{ TODO }}`, or similar placeholders that need verification by Luke or Andreea must be added to `docs/andreea-todos/action-items.md` with the file path and line number.