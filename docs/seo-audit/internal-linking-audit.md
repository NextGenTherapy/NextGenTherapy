# Internal Linking Audit

**Audit Date:** 2026-04-08
**Standard:** Homepage links to all cornerstones, cornerstones link to 2+ others, location pages link to 3-4 cornerstones

---

## Summary

| Metric | Target | Current | Status |
|--------|--------|---------|--------|
| Homepage → Cornerstones | 6/6 | 4/6 | Needs Improvement |
| Cornerstone cross-linking | 2+ each | 0-2 | Needs Improvement |
| Location → Cornerstones | 3-4 each | 5 each | Pass |
| Services Hub → Cornerstones | 6/6 | 6/6 | Pass |

---

## Cornerstone Pages

The six cornerstone pages that should be prominently linked:
1. `/therapy-for-women`
2. `/neurodiversity`
3. `/teen-therapy`
4. `/child-therapy`
5. `/online-therapy`
6. `/romanian-therapy`

---

## 1. Homepage Linking

**Target:** Link to all 6 cornerstones from homepage services grid

| Cornerstone | Linked from Homepage | Status |
|-------------|---------------------|--------|
| `/therapy-for-women` | Yes | Pass |
| `/neurodiversity` | Yes | Pass |
| `/teen-therapy` | Yes | Pass |
| `/child-therapy` | **No** | **Missing** |
| `/online-therapy` | **No** | **Missing** |
| `/romanian-therapy` | Yes | Pass |

**Issues:**
- Missing `/child-therapy` from homepage services grid
- Missing `/online-therapy` from homepage services grid

**Recommendation:** Add both missing cornerstones to homepage services section.

---

## 2. Cornerstone Cross-Linking

**Target:** Each cornerstone should link to 2+ other cornerstones

| Page | Links to Cornerstones | Count | Status |
|------|----------------------|-------|--------|
| `/therapy-for-women` | None | 0 | **Needs Links** |
| `/neurodiversity` | `/online-therapy` | 1 | **Needs +1** |
| `/teen-therapy` | `/online-therapy` | 1 | **Needs +1** |
| `/child-therapy` | `/online-therapy` | 1 | **Needs +1** |
| `/online-therapy` | `/child-therapy`, `/romanian-therapy` | 2 | Pass |
| `/romanian-therapy` | None | 0 | **Needs Links** |

**Most Isolated Pages:**
- `/therapy-for-women` - Zero cornerstone cross-links
- `/romanian-therapy` - Zero cornerstone cross-links

**Recommendations:**

1. **Therapy for Women** should link to:
   - `/neurodiversity` (neurodivergent women)
   - `/romanian-therapy` (bilingual clients)

2. **Romanian Therapy** should link to:
   - `/therapy-for-women` (related audience)
   - `/online-therapy` (UK-wide availability)

3. **Neurodiversity** should add link to:
   - `/therapy-for-women` (many clients are women)

4. **Teen Therapy** should add link to:
   - `/child-therapy` (younger siblings)

5. **Child Therapy** should add link to:
   - `/teen-therapy` (older siblings)

---

## 3. Location Pages

**Target:** Each location page links to 3-4 cornerstones

All 8 location pages link to 5 cornerstones consistently:

| Location Page | Cornerstone Links |
|---------------|-------------------|
| `/therapy-in-colchester` | therapy-for-women, neurodiversity, teen-therapy, child-therapy, romanian-therapy |
| `/therapy-in-wivenhoe` | therapy-for-women, neurodiversity, teen-therapy, child-therapy, romanian-therapy |
| `/therapy-in-mersea` | therapy-for-women, neurodiversity, teen-therapy, child-therapy, romanian-therapy |
| `/therapy-in-tiptree` | therapy-for-women, neurodiversity, teen-therapy, child-therapy, romanian-therapy |
| `/therapy-in-marks-tey` | therapy-for-women, neurodiversity, teen-therapy, child-therapy, romanian-therapy |
| `/therapy-in-manningtree` | therapy-for-women, neurodiversity, teen-therapy, child-therapy, romanian-therapy |
| `/therapy-in-clacton` | therapy-for-women, neurodiversity, teen-therapy, child-therapy, romanian-therapy |
| `/therapy-in-ipswich` | therapy-for-women, neurodiversity, teen-therapy, child-therapy, romanian-therapy |

**Status:** Pass - All location pages exceed the 3-4 cornerstone target with 5 links each.

**Note:** `/online-therapy` is mentioned in the "Getting here" section, so effectively 6/6 cornerstones are represented.

---

## 4. Services Hub

**File:** `/services`

Links to all 6 cornerstones: **Pass**

---

## 5. Other Notable Pages

| Page | Cornerstone Links | Notes |
|------|-------------------|-------|
| `/faq` | 4 | online-therapy, neurodiversity, therapy-for-women, romanian-therapy |
| `/youth-family-faq` | 3 | child-therapy, teen-therapy, therapy-for-women |
| `/is-this-right-for-you` | 0 | Links to `/book-now` only |

---

## CTABlock Component

The `CTABlock` component used across pages only links to `/book-now`:

```tsx
<Link href="/book-now">Book Now</Link>
```

**Observation:** Generic CTA doesn't provide context-aware linking. Consider adding "Related Services" section alongside booking CTA.

---

## Priority Actions

### Critical (Homepage)
1. [ ] Add `/child-therapy` to homepage services grid
2. [ ] Add `/online-therapy` to homepage services grid

### High Priority (Isolated Cornerstones)
3. [ ] Add cross-links to `/therapy-for-women` (link to neurodiversity, romanian-therapy)
4. [ ] Add cross-links to `/romanian-therapy` (link to therapy-for-women, online-therapy)

### Medium Priority (Strengthen Cross-Linking)
5. [ ] Add link from `/neurodiversity` to `/therapy-for-women`
6. [ ] Add link from `/teen-therapy` to `/child-therapy`
7. [ ] Add link from `/child-therapy` to `/teen-therapy`

### Lower Priority
8. [ ] Consider context-aware CTA blocks for related services
9. [ ] Add internal links from `/is-this-right-for-you` to cornerstones

---

## Link Equity Flow

**Current State:**
```
Homepage → Services Hub → All Cornerstones
         → 4/6 Cornerstones directly
         → Location Pages → 5/6 Cornerstones

Location Pages → 5/6 Cornerstones

Cornerstones → Weak inter-linking
```

**Target State:**
```
Homepage → All 6 Cornerstones directly
         → Services Hub → All Cornerstones

Location Pages → All 6 Cornerstones

Cornerstones → Strong inter-linking (2+ each)
             → Blog posts (when relevant)
```

---

## Notes

- Services Hub serves as a good central hub linking to all cornerstones
- Location pages have strong, consistent linking
- Main gap is cornerstone-to-cornerstone linking
- Blog posts should be linked from relevant cornerstone pages (future task)
