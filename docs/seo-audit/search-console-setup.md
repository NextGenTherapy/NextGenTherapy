# Search Console Setup - Next Generation Therapy

**Last updated:** April 2026
**Status:** Verification in place, submit sitemap

---

## Google Search Console

### Verification Status

**Verification method:** HTML meta tag
**Verification code:** `P2NojIbNyYheM5XtqaNmtH5Cpp1ugkxcaddXxjZF4Dc`
**Location:** `/src/app/layout.tsx` line 96

The verification tag is already in place:
```tsx
other: {
  'google-site-verification': 'P2NojIbNyYheM5XtqaNmtH5Cpp1ugkxcaddXxjZF4Dc',
}
```

### Setup Steps

1. **Go to Google Search Console**
   https://search.google.com/search-console

2. **Add Property**
   - Select "URL prefix" property type
   - Enter: `https://nextgentherapy.co.uk`

3. **Verify Ownership**
   - Select "HTML tag" verification method
   - The meta tag is already in place, click "Verify"

4. **Submit Sitemap**
   - Go to Sitemaps in the left menu
   - Enter: `sitemap.xml`
   - Click "Submit"

5. **Configure URL Parameters** (if needed)
   - Go to Settings → URL Parameters
   - Mark any tracking parameters (utm_*) as "No, doesn't affect page content"

---

## Sitemap Configuration

**Location:** `/next-sitemap.config.js`
**URL:** `https://nextgentherapy.co.uk/sitemap.xml`

### Current Priority Settings

| Page Type | Priority | Changefreq |
|-----------|----------|------------|
| Homepage `/` | 1.0 | daily |
| Book Now | 0.9 | monthly |
| Pricing | 0.9 | monthly |
| Cornerstone pages | 0.9 | monthly |
| About, FAQ, Services | 0.85 | monthly |
| Blog index | 0.75 | weekly |
| Location pages | 0.7 | monthly |
| Blog posts | 0.6 | monthly |
| Legal pages | 0.3 | yearly |

### Cornerstone Pages (Highest Priority)
- `/therapy-for-women`
- `/neurodiversity`
- `/teen-therapy`
- `/child-therapy`
- `/romanian-therapy`
- `/online-therapy`

---

## Bing Webmaster Tools

### Setup Steps

1. **Go to Bing Webmaster Tools**
   https://www.bing.com/webmasters

2. **Import from Google Search Console**
   - Click "Import"
   - Sign in with Google account
   - Select `nextgentherapy.co.uk`
   - Automatic verification via GSC

3. **Alternative: Manual Setup**
   - Add site: `https://nextgentherapy.co.uk`
   - Choose XML file verification
   - Download BingSiteAuth.xml
   - Add to `/public/BingSiteAuth.xml`
   - Verify

4. **Submit Sitemap**
   - Go to Sitemaps
   - Submit: `https://nextgentherapy.co.uk/sitemap.xml`

---

## Target Keywords to Track

### Primary (Local)
- `therapist colchester`
- `psychotherapist colchester`
- `counsellor colchester`
- `therapy colchester`

### Service-Specific
- `women therapist colchester`
- `burnout therapy essex`
- `adhd therapist colchester`
- `autism therapy essex`
- `neurodivergent therapist uk`
- `teen therapy colchester`
- `child psychologist colchester`

### Romanian Niche
- `romanian therapist uk`
- `terapeut roman uk`
- `terapie online uk`
- `psihoterapeut roman essex`

### Online Therapy
- `online therapy uk`
- `online psychotherapist uk`
- `video therapy uk`

### Location Variations
- `therapist wivenhoe`
- `therapist mersea`
- `therapist tiptree`
- `therapist marks tey`
- `therapist manningtree`
- `therapist clacton`
- `therapist ipswich`

---

## Monitoring Checklist

### Weekly
- [ ] Check for crawl errors in GSC
- [ ] Review any security issues
- [ ] Check index coverage status

### Monthly
- [ ] Review search performance report
- [ ] Check Core Web Vitals status
- [ ] Monitor mobile usability
- [ ] Review backlink profile
- [ ] Check for manual actions

### Quarterly
- [ ] Audit keyword rankings
- [ ] Review and update target keywords
- [ ] Check competitor rankings
- [ ] Review site structure and internal linking

---

## Search Console Reports to Monitor

### Performance
- Total clicks, impressions, CTR, average position
- Top queries and pages
- Geographic performance (UK focus)
- Device breakdown (mobile vs desktop)

### Coverage
- Valid pages indexed
- Excluded pages (and why)
- Errors to fix

### Experience
- Core Web Vitals (LCP, INP, CLS)
- Mobile usability issues
- HTTPS status

### Enhancements
- Breadcrumbs
- FAQ schema
- LocalBusiness schema
- Other structured data

---

## IndexNow (Bing Instant Indexing)

**Location:** `/src/lib/indexnow.ts`

IndexNow is configured for instant indexing on Bing when content changes. This notifies Bing immediately when pages are updated, rather than waiting for crawl.

### Usage
```typescript
import { notifyIndexNow } from '@/lib/indexnow';

// Notify Bing of updated content
await notifyIndexNow(['/blog/new-post', '/services']);
```

---

## Action Items

- [ ] Verify Google Search Console ownership
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Bing Webmaster Tools (import from GSC)
- [ ] Submit sitemap to Bing
- [ ] Set up weekly GSC monitoring
- [ ] Configure GSC email notifications for issues
- [ ] Bookmark GSC Performance report for quick access
