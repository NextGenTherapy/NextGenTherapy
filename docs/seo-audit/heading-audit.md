# Heading Hierarchy Audit

**Audit Date:** 2026-04-08
**Standard:** One H1 per page, logical h2 → h3 → h4 hierarchy, no skipped levels

---

## Summary

| Status | Count |
|--------|-------|
| Pages with correct H1 | 27/28 |
| Pages with proper hierarchy | 27/28 |
| Issues found | 1 |

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
| `/blog` | No PageHero | **No** | **Broken** | **CRITICAL: Missing H1** |

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

## Critical Issue

### `/blog` Page Missing H1

The blog index page (`/blog`) is missing an H1 tag entirely. The page uses a `BlogSection` component that renders `<h2>` as section titles, but there is no `<h1>` on the page.

**Impact:**
- SEO: Search engines may not understand the primary topic
- Accessibility: Screen readers won't find a main heading

**Fix Required:**
Add PageHero component at the top of the blog page with appropriate title, OR add a direct `<h1>` tag before the blog sections.

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

### Required Fix
1. **Add H1 to `/blog` page** - Either use PageHero for consistency or add direct `<h1>` tag

### Verification Steps
1. Check `/blog/[slug]` pages also have H1 (blog post title should render as H1)
2. After fix, verify with browser dev tools or accessibility checker

---

## Notes

- PageHero component is well-designed and enforces H1 consistency
- No skipped heading levels found anywhere
- All pages with headings follow proper hierarchy
