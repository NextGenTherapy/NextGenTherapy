# Prompt 11 — Blog pillar content briefs (10 evergreen posts)

**Goal:** Create 10 evergreen cornerstone blog posts that pull targeted organic traffic into the site over time. These are not weekly-treadmill content — these are 1,500–2,500 word pillar pieces that each rank for a specific search query and link into a cornerstone page.

**Prereq:** Read `docs/content-prompts/00-positioning-brief.md`. Run AFTER Prompts 01–09 so all the cornerstone pages exist to link into.

---

## Strategy

- **Evergreen only.** No news, no current events, no dated content.
- **Each post targets one specific search query** and maps to one cornerstone page.
- **Each post is written in Andreea's voice** — first person, warm, direct, specific.
- **Publishing cadence:** one post at a time. This prompt produces all 10 briefs so they exist as a roadmap, but the posts themselves are drafted and published one by one with Andreea's review in between.
- **Internal linking discipline:** every blog post links to at least 2 cornerstones and 1 location page. Every cornerstone page links to the 2–3 most relevant blog posts.

---

## Instructions for Claude Code

This prompt has two deliverables:

1. **Create `docs/content-prompts/blog-posts/`** — a directory containing 10 individual brief files, one per post
2. **Create a blog-post template component** (if one doesn't already exist) at `src/components/blog/BlogPostLayout.tsx` that can be reused for all 10 posts, handling header image, title, reading time, published date, body prose, and a "see also" linked cornerstones block

Do NOT draft the actual post content yet. This prompt creates the briefs and the layout component only. Each post gets its own separate prompt (prompts 11a, 11b, 11c...) once the briefs are approved.

### The 10 briefs

Create one file per brief, named `docs/content-prompts/blog-posts/[number]-[slug].md`. Each brief uses this template:

```markdown
# Blog post brief: [title]

**Slug:** /blog/[slug]
**Target query:** [primary search term]
**Secondary queries:** [2–3 related terms]
**Cornerstone link:** [which cornerstone page this post drives traffic to]
**Target length:** 1,500–2,500 words
**Persona:** [which of the 5 personas this post is for]

## Angle
[One paragraph — what makes this post specifically Andreea's, not a generic rewrite]

## Structure
[Rough outline of sections]

## Must include
[Specific phrases, facts, or perspectives that must be in the final draft]

## Must NOT include
[Traps to avoid]

## Internal links
- [cornerstone page 1]
- [cornerstone page 2]
- [one location page where relevant]
```

---

## The 10 posts (briefs to create)

### 1. `01-high-functioning-anxiety-women.md`
**Title:** "High-functioning anxiety: what it actually looks like (and why it hides so well)"  
**Slug:** `/blog/high-functioning-anxiety`  
**Target query:** `high functioning anxiety`  
**Secondary:** `high achieving women anxiety`, `anxiety that looks like productivity`  
**Cornerstone:** `/therapy-for-women`  
**Persona:** Persona 1 (High-Functioning Woman)  
**Angle:** The paradox of being told you're "doing great" while internally falling apart. Why anxiety in high-achieving women is so often missed by GPs and by the women themselves.  
**Structure:** What it looks like from outside / what it feels like from inside / why it hides / why CBT-style approaches often don't reach it / what psychodynamic work does differently  
**Must include:** At least one real client phrase from the positioning brief as a section header  
**Must NOT:** Pathologise productivity; recommend meditation as a fix; use "journey"

---

### 2. `02-late-diagnosed-adhd-women.md`
**Title:** "Late-diagnosed ADHD in women: the grief and the relief"  
**Slug:** `/blog/late-diagnosed-adhd-women`  
**Target query:** `late diagnosed adhd women`  
**Secondary:** `adhd diagnosis in 30s`, `adhd after child's diagnosis`  
**Cornerstone:** `/neurodiversity`  
**Persona:** Persona 2 (Late-Diagnosed Neurodivergent Adult)  
**Angle:** The specific strange double-feeling of late ADHD diagnosis — "I finally understand" and "I've lost so much time." Why this needs its own kind of grief work.  
**Structure:** The moment of recognition / the grief of the years behind / the relief of explanation / why this isn't "just" a diagnosis but a re-authoring of your whole life story / how therapy helps with the re-authoring  
**Must include:** Affirmative framing throughout; acknowledgment that many women are diagnosed after their child's assessment  
**Must NOT:** Suggest ADHD is "just a label"; recommend medication as a solution; conflate ADHD with autism

---

### 3. `03-burnout-vs-depression.md`
**Title:** "Burnout or depression? How to tell the difference (and why it matters)"  
**Slug:** `/blog/burnout-vs-depression`  
**Target query:** `burnout vs depression`  
**Secondary:** `am i burnt out or depressed`, `burnout symptoms women`  
**Cornerstone:** `/therapy-for-women`  
**Persona:** Persona 1  
**Angle:** The diagnostic blur in plain English. Why burnout isn't just depression with a better PR team, and why the difference changes what actually helps.  
**Structure:** What burnout is / what depression is / where they overlap / where they diverge / why the difference matters for treatment / what to do if you're not sure  
**Must include:** Clear distinction; acknowledgment that they can co-occur  
**Must NOT:** Over-simplify; give diagnostic-sounding advice

---

### 4. `04-should-my-teenager-see-a-therapist.md`
**Title:** "Should my teenager see a therapist? A parent's honest guide"  
**Slug:** `/blog/should-my-teenager-see-a-therapist`  
**Target query:** `should my teenager see a therapist`  
**Secondary:** `teen therapy colchester`, `signs my teen needs therapy`  
**Cornerstone:** `/teen-therapy`  
**Persona:** Persona 3 (Worried Parent)  
**Angle:** An honest list of when therapy is likely to help, when it might be premature, and when it might not be the right thing yet. Written for parents who are scared of over-pathologising normal teenage stuff.  
**Structure:** The signs therapy might help / the signs it might be too early / the signs something more urgent is needed (GP, crisis line) / how to talk to your teenager about it without forcing it / what the first session is like  
**Must include:** Emergency signposting (111, Shout); respect for teenager's autonomy  
**Must NOT:** Over-diagnose; imply every parent should get their teen into therapy

---

### 5. `05-what-is-psychodynamic-therapy.md`
**Title:** "What is psychodynamic therapy — and how is it different from CBT?"  
**Slug:** `/blog/what-is-psychodynamic-therapy`  
**Target query:** `what is psychodynamic therapy`  
**Secondary:** `psychodynamic vs cbt`, `psychodynamic therapy explained`  
**Cornerstone:** `/is-this-right-for-you`  
**Persona:** All personas (general educational piece)  
**Angle:** An honest, jargon-free explainer. Neither "CBT is bad" nor "psychodynamic is better" — both are valid approaches for different things. Help readers work out which is right for them.  
**Structure:** What psychodynamic is / what CBT is / how they differ / when each is the right fit / how to decide which to look for  
**Must include:** Respect for CBT; specific mention of BACP for finding CBT therapists; link to `/is-this-right-for-you`  
**Must NOT:** Disparage CBT; oversell psychodynamic

---

### 6. `06-body-image-and-eating-difficulties-therapy.md`
**Title:** "When body image and eating feel like the problem (but aren't quite)"  
**Slug:** `/blog/body-image-eating-difficulties`  
**Target query:** `body image therapy`  
**Secondary:** `disordered eating therapy`, `therapy for body image issues`  
**Cornerstone:** `/therapy-for-women`  
**Persona:** Persona 1  
**Angle:** How body image and eating difficulties are often the surface of something else — and how psychodynamic therapy works with that something else without dismissing the surface concerns.  
**Structure:** When it's about the body / when it's about something else wearing the body's clothes / why restricting / bingeing / compulsive exercise make sense emotionally even when they hurt physically / what therapy actually does with this  
**Must include:** Non-shaming language; clear referral to eating disorder specialists (Beat UK, specialist services) for acute ED; crisis signposting  
**Must NOT:** Minimise physical risk of eating disorders; replace specialist ED treatment; trigger-warning unnecessarily

---

### 7. `07-neurodivergent-burnout-masking.md`
**Title:** "Neurodivergent burnout: when masking costs more than you can afford"  
**Slug:** `/blog/neurodivergent-burnout-masking`  
**Target query:** `autistic burnout`  
**Secondary:** `adhd burnout`, `masking exhaustion`, `neurodivergent burnout therapy`  
**Cornerstone:** `/neurodiversity`  
**Persona:** Persona 2  
**Angle:** Masking as a survival strategy that stops being sustainable. Why this is different from ordinary burnout and why it needs a neurodiversity-affirmative therapist to unpick.  
**Structure:** What masking is / why it works (for a while) / what happens when it stops working / what recovery looks like / why the usual burnout advice often doesn't fit  
**Must include:** Affirmative framing; acknowledgment that masking isn't always bad (sometimes it's necessary for safety)  
**Must NOT:** Shame people for masking; suggest unmasking is always the goal

---

### 8. `08-first-session-what-to-expect.md`
**Title:** "What actually happens in a first therapy session (and what doesn't)"  
**Slug:** `/blog/first-therapy-session-what-to-expect`  
**Target query:** `first therapy session what to expect`  
**Secondary:** `nervous about first therapy session`, `what to say in first therapy session`  
**Cornerstone:** `/is-this-right-for-you`  
**Persona:** All personas  
**Angle:** Demystifying the first session. Not the clinical textbook version — Andreea's actual version. Addresses the specific fear of "I don't know what to say."  
**Structure:** The free call / before the first session / walking in / the first few minutes / what you might be asked / what you don't have to do / the end of the session / leaving / when to book again  
**Must include:** "You don't have to prepare"; vibe-check framing; comfort and fit over assessment  
**Must NOT:** Make it sound scripted; imply there's a "right" way to do a first session

---

### 9. `09-romanian-therapy-between-cultures.md`
**Title:** "Therapy between two languages: on being Romanian in the UK"  
**Slug:** `/blog/therapy-between-two-languages`  
**Target query:** `romanian therapist uk`  
**Secondary:** `therapy in romanian`, `bicultural identity therapy`, `immigrant therapy uk`  
**Cornerstone:** `/romanian-therapy`  
**Persona:** Persona 5 (Romanian Speaker)  
**Angle:** The specific experience of doing therapy in your second language vs your first, and what it means to have a therapist who doesn't need you to translate. Andreea's personal perspective (with her review).  
**Structure:** What happens to your inner life when it moves into a second language / the things that only exist in Romanian / the tiredness of translating yourself / why having a Romanian-speaking therapist matters / practical details for Romanian speakers in the UK  
**Must include:** Bilingual elements — perhaps a section header or pull-quote in Romanian; `{{ CONFIRM WITH ANDREEA — personal content }}` markers  
**Must NOT:** Romanticise or flatten the Romanian experience; assume all Romanian-UK clients have the same story

---

### 10. `10-how-long-does-therapy-take.md`
**Title:** "How long does therapy take? An honest answer"  
**Slug:** `/blog/how-long-does-therapy-take`  
**Target query:** `how long does therapy take`  
**Secondary:** `how many therapy sessions do i need`, `long term vs short term therapy`  
**Cornerstone:** `/is-this-right-for-you`  
**Persona:** All personas  
**Angle:** The honest answer is "it depends" — but here's what it depends on. Written to address the anxiety about cost and time commitment that holds a lot of people back from starting.  
**Structure:** Why there's no single answer / the factors that shape how long / what a few months looks like / what a few years looks like / how we review as we go / how you know when you're done  
**Must include:** Honesty about cost; acknowledgment that cost is a real barrier; no pressure to commit to long-term work up front  
**Must NOT:** Sell long-term therapy as superior; minimise cost concerns

---

## Acceptance criteria

- `docs/content-prompts/blog-posts/` directory created with 10 brief files (one per post)
- `src/components/blog/BlogPostLayout.tsx` created (or confirmed to exist) with props for title, published date, reading time, body, and `seeAlso` linked cornerstones
- Matching `.module.scss` for the layout component
- Layout component uses PageHero patterns from the redesign
- `npm run lint` passes
- `npx tsc --noEmit` passes
- No actual post content drafted yet — only briefs and the layout component

---

## Things to flag when done

- Confirm with Luke that the 10 topics are the right 10 before starting to draft any of them
- Confirm the `BlogPostLayout` design before using it for actual posts
- Any briefs that feel too similar or would benefit from merging
