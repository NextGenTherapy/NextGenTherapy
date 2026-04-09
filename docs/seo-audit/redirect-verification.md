# Redirect Verification

**Date:** 9 April 2026
**Total Redirects:** 18 (including www)

---

## Configuration Location

All redirects are configured in `next.config.ts` using Next.js `redirects()` function.

---

## Redirect Inventory

### 1. www to non-www (SEO canonical)

```
Source:   www.nextgentherapy.co.uk/*
Target:   https://nextgentherapy.co.uk/*
Type:     301 Permanent
Priority: Highest (first in config)
```

### 2. Migration Redirects (Old URL → New URL)

| Old Path | New Path | Reason |
|----------|----------|--------|
| `/teenage-therapy` | `/teen-therapy` | URL consolidation |
| `/neurodiversity-therapy` | `/neurodiversity` | URL shortening |
| `/young-adult-therapy` | `/therapy-for-women` | Content merged |
| `/lgbtq-therapy` | `/therapy-for-women` | Content merged |
| `/parent-support` | `/child-therapy#for-parents` | Content merged with anchor |
| `/about-therapy` | `/is-this-right-for-you` | Content reorganized |

### 3. Legacy Page Redirects

| Old Path | New Path | Reason |
|----------|----------|--------|
| `/therapy-101` | `/is-this-right-for-you` | Old URL variant |
| `/therapy101` | `/is-this-right-for-you` | Old URL variant (no hyphen) |
| `/who-i-see` | `/is-this-right-for-you` | Old page name |
| `/testimonials` | `/trust` | New page name |
| `/reviews-2` | `/trust` | Duplicate testimonials page |
| `/why-people-seek-therapy` | `/blog/signs-you-might-benefit-from-therapy` | Blog reorganization |
| `/thoughts/*` | `/blog` | Old blog section |

### 4. Blog Post Redirects (GSC indexed URLs)

| Old Path | New Path | Reason |
|----------|----------|--------|
| `/blog/5-common-myths-about-body-image-and-eating-habits` | `/blog` | Post removed |
| `/blog/understanding-psychodynamic-therapy` | `/blog/understanding-different-therapy-approaches` | Post merged |
| `/blog/managing-anxiety-between-sessions` | `/blog/understanding-anxiety-young-people` | Post merged |
| `/blog/managing-anxiety-practical-tips` | `/blog/understanding-anxiety-young-people` | Post merged |

---

## Testing Instructions

### Local Testing (Development)

```bash
# Start dev server
npm run dev

# Test redirect (should return 308 in dev, 301 in prod)
curl -I http://localhost:3000/teenage-therapy
```

### Production Testing

```bash
# Replace [domain] with actual production URL
curl -I https://nextgentherapy.co.uk/teenage-therapy
# Expected: HTTP/2 301 and Location: /teen-therapy

curl -I https://nextgentherapy.co.uk/parent-support
# Expected: HTTP/2 301 and Location: /child-therapy#for-parents

curl -I https://www.nextgentherapy.co.uk/
# Expected: HTTP/2 301 and Location: https://nextgentherapy.co.uk/
```

### Anchor Redirect Testing

For `/parent-support` → `/child-therapy#for-parents`:

1. Visit `/parent-support`
2. Verify redirect to `/child-therapy`
3. Verify page scrolls to `#for-parents` section
4. Check section exists and is visible

---

## Verification Status

| Redirect | Configured | Tested | Notes |
|----------|------------|--------|-------|
| www → non-www | ✅ | ⏳ | Test on production |
| `/teenage-therapy` | ✅ | ⏳ | |
| `/neurodiversity-therapy` | ✅ | ⏳ | |
| `/young-adult-therapy` | ✅ | ⏳ | |
| `/lgbtq-therapy` | ✅ | ⏳ | |
| `/parent-support` | ✅ | ⏳ | Includes anchor |
| `/about-therapy` | ✅ | ⏳ | |
| `/therapy-101` | ✅ | ⏳ | |
| `/therapy101` | ✅ | ⏳ | |
| `/who-i-see` | ✅ | ⏳ | |
| `/testimonials` | ✅ | ⏳ | |
| `/reviews-2` | ✅ | ⏳ | |
| `/why-people-seek-therapy` | ✅ | ⏳ | |
| `/thoughts/*` | ✅ | ⏳ | Wildcard |
| `/blog/5-common-myths...` | ✅ | ⏳ | |
| `/blog/understanding-psychodynamic-therapy` | ✅ | ⏳ | |
| `/blog/managing-anxiety-between-sessions` | ✅ | ⏳ | |
| `/blog/managing-anxiety-practical-tips` | ✅ | ⏳ | |

---

## GSC Link Equity

These redirects preserve link equity from indexed URLs:

**High Priority (definitely indexed):**
- `/teenage-therapy` — was a main navigation item
- `/lgbtq-therapy` — had external backlinks
- `/testimonials` — was linked from directory listings

**Medium Priority (possibly indexed):**
- Old blog posts — had some organic traffic
- `/therapy-101` variants — multiple URL patterns existed

**Wildcard Coverage:**
- `/thoughts/*` catches any old blog URL structure

---

## Post-Launch Monitoring

After launch, monitor in Google Search Console:

1. **Coverage Report** — Check for redirect errors
2. **URL Inspection** — Verify canonical URLs
3. **Links Report** — Monitor link equity transfer
4. **Core Web Vitals** — Ensure redirects don't add latency

---

*Generated: 9 April 2026*
