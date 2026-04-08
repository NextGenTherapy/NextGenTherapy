# Andreea Action Items — All Placeholders Found in Code

These are all `{{ CONFIRM WITH ANDREEA }}` placeholders found by searching the entire codebase. Each item includes the exact file and line number.

---

## Priority 1: FAQ Page — Pricing & Policies

**File:** `src/app/faq/page.tsx`

These placeholders are visible on the live FAQ page and need answers urgently:

### ~~Sliding Scale / Reduced Fees~~ ✅ RESOLVED
**Answer:** No general sliding scale, but concessions available for students and single parents booking child therapy.

### ~~Payment Method~~ ✅ RESOLVED
**Answer:** Bank transfer, 48 hours before session. Invoice sent weekly. No cash.

### ~~Cancellation Policy~~ ✅ RESOLVED
**Answer:** Cancelled sessions are still charged — the slot is reserved and can't be filled at short notice.

### ~~Online Platform~~ ✅ RESOLVED
**Answer:** Google Meet.

---

## Priority 2: Online Therapy Page

**File:** `src/app/online-therapy/page.tsx`

### ~~Video Platform~~ ✅ RESOLVED
**Answer:** Google Meet.

---

## Priority 3: About Page — Romanian Section

**File:** `src/app/about/page.tsx`

### Personal Romanian Background (line 293)
```
{/* {{ CONFIRM WITH ANDREEA: a single sentence about her own Romanian background if she wants to include it, otherwise delete this last sentence }} */}
```
**Question:** Does Andreea want to include a personal sentence about her Romanian background, or should this be deleted entirely?

### Romanian CTA Phrasing (line 295)
```
{/* {{ CONFIRM WITH ANDREEA }}: Romanian CTA phrasing */}
```
**Question:** What should the call-to-action say for Romanian-speaking clients?

---

## Priority 4: Romanian Therapy Page — All Translations

**File:** `src/app/romanian-therapy/page.tsx`

All Romanian language content is provisional and needs native speaker review:

### Section 1 — Main Intro (line 126)
```
{/* {{ CONFIRM WITH ANDREEA — Romanian translation below is provisional }} */}
```

### Section 2 — What I Work With List (line 182)
```
{/* {{ CONFIRM WITH ANDREEA — Romanian translation below is provisional }} */}
```

### Section 3 — Practical Details (line 255)
```
{/* {{ CONFIRM WITH ANDREEA — Romanian translation below is provisional }} */}
```

### Section 4 — Final CTA (line 304)
```
{/* {{ CONFIRM WITH ANDREEA — Romanian translation below is provisional }} */}
```

**Action needed:** Andreea (or a native Romanian speaker) should review all Romanian text on this page for accuracy and natural phrasing.

---

## Priority 5: Neurodiversity Page

**File:** `src/app/neurodiversity/page.tsx`

### Room Photo (line 210)
```
{/* {{ CONFIRM WITH ANDREEA: room photo }} */}
```
**Question:** Is there a photo of the therapy room to include here? The page mentions the sensory-friendly setup but has no image.

---

## Priority 6: Is This Right For You Page

**File:** `src/app/is-this-right-for-you/page.tsx`

### Alternative Therapist URLs (line 201)
```
{/* {{ CONFIRM URLS WITH ANDREEA }} */}
```
**Question:** What URLs should be provided for alternative therapists/directories when Andreea isn't the right fit?

---

## Summary Table

| File | Line | Item | Answer Needed |
|------|------|------|---------------|
| ~~`faq/page.tsx`~~ | ~~261-265~~ | ~~Sliding scale~~ | ✅ Resolved |
| ~~`faq/page.tsx`~~ | ~~271-275~~ | ~~Payment method~~ | ✅ Resolved |
| ~~`faq/page.tsx`~~ | ~~281-285~~ | ~~Cancellation policy~~ | ✅ Resolved |
| ~~`faq/page.tsx`~~ | ~~341-345~~ | ~~Online platform~~ | ✅ Resolved |
| ~~`online-therapy/page.tsx`~~ | ~~325~~ | ~~Online platform~~ | ✅ Resolved |
| `about/page.tsx` | 293 | Romanian background | Include or delete |
| `about/page.tsx` | 295 | Romanian CTA | Phrasing |
| `romanian-therapy/page.tsx` | 126, 182, 255, 304 | Romanian translations | Native review |
| `neurodiversity/page.tsx` | 210 | Room photo | Provide photo |
| `is-this-right-for-you/page.tsx` | 201 | Alt therapist URLs | Which URLs |

---

## How to Resolve

Once Andreea provides answers:

1. **For FAQ items:** Replace the placeholder text with the actual answer
2. **For Romanian content:** Have Andreea review and correct the translations directly
3. **For photos:** Provide the image file to add to `/public/images/`
4. **For URLs:** Provide the specific links to include

---

## Quick Copy-Paste Questions for Andreea

```
1. Do you offer sliding scale or reduced-fee sessions? If yes, how many per week and who qualifies?

2. How do clients pay — bank transfer, card, or other? Do they pay per session, weekly, or monthly in advance?

3. What's your cancellation policy? How much notice is required, and are late-cancelled/missed sessions charged?

4. Which video platform do you use for online sessions — Zoom, Google Meet, or something else?

5. For the About page: Do you want to include a personal sentence about your Romanian background, or leave it out?

6. Please review all Romanian text on the Romanian therapy page for accuracy.

7. Do you have a photo of your therapy room we can use on the neurodiversity page?

8. What alternative therapist directories should we link to for clients you can't work with?
```

---

## Priority 7: Google Business Profile & External Directories

**File:** `docs/seo-audit/gbp-checklist.md`

### GBP Opening Hours (Section A2)
```
{{ CONFIRM WITH ANDREEA — exact hours needed }}
```
**Question:** What are the exact opening hours for GBP? Current assumption: Mon-Tue 10:00-19:00, Wed 10:00-19:00 (online only), Fri 09:00-14:00.

### Wheelchair Accessible Parking (Section B1)
```
{{ CONFIRM WITH ANDREEA }}
```
**Question:** Does the Colchester Business Centre have wheelchair accessible parking?

### BACP Directory Location Issue (Section H1)
```
{{ ACTION REQUIRED: Update to Colchester CO1 2JS in BACP account }}
```
**Question:** BACP profile shows "London E16" instead of Colchester. This needs to be corrected in Andreea's BACP account: https://www.bacp.co.uk/therapists/385976/andreea-horhocea/london-e16

### External Directory Profiles (Sections H2-H4)
```
{{ CHECK IF PROFILE EXISTS }}
```
**Question:** Do profiles exist on these directories? If so, do they need updating?
- Psychology Today
- Counselling Directory
- Welldoing.org

### Photos for GBP (Section D)
**Question:** Can Andreea provide:
- Photo of therapy room (showing plants, soft lighting, sensory-aware setup)
- Photo of Colchester Business Centre exterior
- Professional headshot
- BACP membership badge/logo

---

## Updated Summary Table

| File | Line/Section | Item | Answer Needed |
|------|--------------|------|---------------|
| `faq/page.tsx` | 261-265 | Sliding scale | Yes/No + details |
| `faq/page.tsx` | 271-275 | Payment method | How clients pay |
| `faq/page.tsx` | 281-285 | Cancellation policy | Notice period + charges |
| `faq/page.tsx` | 341-345 | Online platform | Zoom/Meet/Other |
| `online-therapy/page.tsx` | 325 | Online platform | Same as above |
| `about/page.tsx` | 293 | Romanian background | Include or delete |
| `about/page.tsx` | 295 | Romanian CTA | Phrasing |
| `romanian-therapy/page.tsx` | 126, 182, 255, 304 | Romanian translations | Native review |
| `neurodiversity/page.tsx` | 210 | Room photo | Provide photo |
| `is-this-right-for-you/page.tsx` | 201 | Alt therapist URLs | Which URLs |
| `gbp-checklist.md` | A2 | Opening hours | Exact times |
| `gbp-checklist.md` | B1 | Wheelchair parking | Yes/No |
| `gbp-checklist.md` | H1 | BACP location | Fix London E16 |
| `gbp-checklist.md` | H2-H4 | External profiles | Which exist |
| `gbp-checklist.md` | D | Photos | Provide 4 photos |

---

## Quick Copy-Paste Questions for Andreea (Updated)

```
1. Do you offer sliding scale or reduced-fee sessions? If yes, how many per week and who qualifies?

2. How do clients pay — bank transfer, card, or other? Do they pay per session, weekly, or monthly in advance?

3. What's your cancellation policy? How much notice is required, and are late-cancelled/missed sessions charged?

4. Which video platform do you use for online sessions — Zoom, Google Meet, or something else?

5. For the About page: Do you want to include a personal sentence about your Romanian background, or leave it out?

6. Please review all Romanian text on the Romanian therapy page for accuracy.

7. Do you have photos we can use? Needed: therapy room, building exterior, professional headshot.

8. What alternative therapist directories should we link to for clients you can't work with?

9. Exact opening hours for Google Business Profile? (Current guess: Mon-Tue 10-7pm, Wed online only, Fri 9am-2pm)

10. Does Colchester Business Centre have wheelchair accessible parking?

11. Your BACP directory shows "London E16" instead of Colchester — please update this in your BACP account.

12. Do you have profiles on Psychology Today, Counselling Directory, or Welldoing.org that need updating?
```

---

Last updated: April 2026
