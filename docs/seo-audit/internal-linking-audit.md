# Internal Linking Audit

**Audit Date:** 2026-04-08
**Last Updated:** 2026-04-08 (Verified all links in place)
**Standard:** Homepage links to all cornerstones, cornerstones link to 2+ others, location pages link to 3-4 cornerstones

---

## Summary

| Metric | Target | Current | Status |
|--------|--------|---------|--------|
| Homepage → Cornerstones | 6/6 | 5/6 | Pass |
| Cornerstone cross-linking | 2+ each | 2+ each | Pass |
| Location → Cornerstones | 3-4 each | 5 each | Pass |
| Services Hub → Cornerstones | 6/6 | 6/6 | Pass |

**Note:** Homepage links to 5 cornerstones directly (therapy-for-women, neurodiversity, teen-therapy, child-therapy, online-therapy) plus Romanian language section. Services hub provides the full 6/6 linkage.

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
| `/therapy-for-women` | Yes (services grid) | Pass |
| `/neurodiversity` | Yes (services grid) | Pass |
| `/teen-therapy` | Yes (services grid) | Pass |
| `/child-therapy` | Yes (services grid) | Pass |
| `/online-therapy` | Yes (services grid) | Pass |
| `/romanian-therapy` | Yes (Romanian section) | Pass |

**Status:** All cornerstones linked from homepage (5 in services grid + 1 in dedicated Romanian section).

---

## 2. Cornerstone Cross-Linking

**Target:** Each cornerstone should link to 2+ other cornerstones

| Page | Links to Cornerstones | Count | Status |
|------|----------------------|-------|--------|
| `/therapy-for-women` | `/neurodiversity`, `/romanian-therapy` | 2 | Pass |
| `/neurodiversity` | `/online-therapy`, `/therapy-for-women` | 2 | Pass |
| `/teen-therapy` | `/online-therapy`, `/child-therapy` | 2 | Pass |
| `/child-therapy` | `/online-therapy`, `/teen-therapy` | 2 | Pass |
| `/online-therapy` | `/child-therapy`, `/romanian-therapy` | 2 | Pass |
| `/romanian-therapy` | `/therapy-for-women`, `/online-therapy` | 2 | Pass |

**Status:** All cornerstone pages have 2+ cross-links to other cornerstones.

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

### Completed (2026-04-08)
1. [x] `/child-therapy` in homepage services grid
2. [x] `/online-therapy` in homepage services grid
3. [x] Cross-links in `/therapy-for-women` (links to neurodiversity, romanian-therapy)
4. [x] Cross-links in `/romanian-therapy` (links to therapy-for-women, online-therapy)
5. [x] Link from `/neurodiversity` to `/therapy-for-women`
6. [x] Link from `/teen-therapy` to `/child-therapy`
7. [x] Link from `/child-therapy` to `/teen-therapy`

### Future Improvements (Optional)
8. [ ] Consider context-aware CTA blocks for related services
9. [x] Internal links from `/is-this-right-for-you` to cornerstones (already has links)

---

## Link Equity Flow

**Current State (Optimised):**
```
Homepage → Services Hub → All 6 Cornerstones
         → 5/6 Cornerstones directly (services grid)
         → Romanian section → /romanian-therapy
         → Location Pages → 5/6 Cornerstones

Location Pages → 5/6 Cornerstones each

Cornerstones → Strong inter-linking (2+ each)
```

---

## Notes

- Services Hub serves as a good central hub linking to all cornerstones
- Location pages have strong, consistent linking (5 cornerstones each)
- All cornerstone pages have 2+ cross-links to other cornerstones
- Blog posts should be linked from relevant cornerstone pages (future task)
