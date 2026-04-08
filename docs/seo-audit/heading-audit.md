# Heading Hierarchy Audit

**Audit Date:** 2026-04-08
**Standard:** One H1 per page, logical h2 → h3 → h4 hierarchy, no skipped levels

---

## Summary

| Status | Count |
|--------|-------|
| Pages with correct H1 | 28/28 |
| Pages with proper hierarchy | 28/28 |
| Issues found | 0 (all resolved) |

---

## Audit Results

### Main Pages

| Page | H1 Source | H1 Present | Hierarchy | Issues |
|------|-----------|------------|-----------|--------|
| `/` (Homepage) | Direct `<h1>` in hero | Yes | H1 → H2 → H3 | None |
| `/about` | PageHero | Yes | H1 → H2 → H3 | None |
| `/services` | PageHero | Yes | H1 → H2 → H3 | None |
| `/pricing` | PageHero | Yes | H1 → H2 → H3 | None |
| `/book-now` | PageHero | Yes | H1 → H2 → H3 | None |
| `/location` | PageHero | Yes | H1 → H2 → H3 | None |
| `/faq` | PageHero | Yes | H1 → H2 | None |

### Cornerstone Pages

| Page | H1 Source | H1 Present | Hierarchy | Issues |
|------|-----------|------------|-----------|--------|
| `/therapy-for-women` | PageHero | Yes | H1 → H2 → H3 | None |
| `/neurodiversity` | PageHero | Yes | H1 → H2 → H3 | None |
| `/teen-therapy` | PageHero | Yes | H1 → H2 → H3 | None |
| `/child-therapy` | PageHero | Yes | H1 → H2 → H3 | None |
| `/online-therapy` | PageHero | Yes | H1 → H2 → H3 | None |
| `/romanian-therapy` | PageHero | Yes | H1 → H2 | None |

### Support Pages

| Page | H1 Source | H1 Present | Hierarchy | Issues |
|------|-----------|------------|-----------|--------|
| `/is-this-right-for-you` | PageHero | Yes | H1 → H2 | None |
| `/trust` | PageHero | Yes | H1 → H2 → H3 | None |
| `/youth-family-faq` | PageHero | Yes | H1 → H2 → H3 | None |
| `/blog` | PageHero | Yes | H1 → H2 | **FIXED** (PageHero added) |

### Legal Pages

| Page | H1 Source | H1 Present | Hierarchy | Issues |
|------|-----------|------------|-----------|--------|
| `/privacy-policy` | Direct `<h1>` | Yes | H1 → H2 | None |
| `/terms` | Direct `<h1>` | Yes | H1 → H2 | None |

### Location Pages

| Page | H1 Source | H1 Present | Hierarchy | Issues |
|------|-----------|------------|-----------|--------|
| `/therapy-in-colchester` | PageHero | Yes | H1 → H2 → H3 | None |
| `/therapy-in-wivenhoe` | PageHero | Yes | H1 → H2 → H3 | None |
| `/therapy-in-mersea` | PageHero | Yes | H1 → H2 → H3 | None |
| `/therapy-in-tiptree` | PageHero | Yes | H1 → H2 → H3 | None |
| `/therapy-in-marks-tey` | PageHero | Yes | H1 → H2 → H3 | None |
| `/therapy-in-manningtree` | PageHero | Yes | H1 → H2 → H3 | None |
| `/therapy-in-clacton` | PageHero | Yes | H1 → H2 → H3 | None |
| `/therapy-in-ipswich` | PageHero | Yes | H1 → H2 → H3 | None |

---

## Resolved Issues

### `/blog` Page H1 — FIXED

**Previous Issue:** The blog index page was missing an H1 tag entirely.

**Resolution:** PageHero component added to `/blog` page with appropriate title and H1.

**Fixed Date:** 2026-04-08

---

## Heading Patterns

### Pattern 1: PageHero Component (Most Common)
- Component renders `<h1>` from `title` prop
- Used by: All cornerstone pages, main pages, location pages
- Consistent and reliable

### Pattern 2: Direct H1 Tags
- Used by: Homepage hero, legal pages
- Properly implemented

### Pattern 3: No H1 (Issue)
- Used by: `/blog` page only
- Needs fixing

---

## Recommendations

### Completed
1. ~~**Add H1 to `/blog` page**~~ - DONE: PageHero added

### Ongoing Verification
1. Blog post pages (`/blog/[slug]`) - Verified: Blog post titles render as H1
2. Continue to verify new pages have proper H1 via PageHero or direct tag

---

## Notes

- PageHero component is well-designed and enforces H1 consistency
- No skipped heading levels found anywhere
- All pages with headings follow proper hierarchy
