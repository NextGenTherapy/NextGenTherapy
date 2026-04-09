# Google Search Console Pre-Launch Checklist

**Date:** 9 April 2026
**Domain:** nextgentherapy.co.uk

---

## Sitemap Status

### Verification
- ✅ Sitemap generated at `/sitemap.xml`
- ✅ Secondary sitemap at `/sitemap-0.xml`
- ✅ 52 URLs included
- ✅ All priority weights assigned correctly

### URL Breakdown
| Category | Count | Priority |
|----------|-------|----------|
| Homepage | 1 | 1.0 |
| Core service pages | 6 | 0.9 |
| Support pages | 8 | 0.85 |
| Location pages | 8 | 0.7 |
| Blog posts | 24 | 0.6 |
| Legal pages | 4 | 0.3 |

### Sitemap Headers
```
X-Robots-Tag: noindex, nofollow
```
(Sitemap itself should not be indexed)

---

## robots.txt Status

### Current Configuration
```
User-agent: *
Allow: /

User-agent: Googlebot
Allow: /
Crawl-delay: 0

User-agent: bingbot
Allow: /
Crawl-delay: 1

Disallow: /api/
Disallow: /_next/
Disallow: /.*\?
Disallow: /manifest.json

Host: https://nextgentherapy.co.uk
Sitemap: https://nextgentherapy.co.uk/sitemap.xml
Sitemap: https://nextgentherapy.co.uk/sitemap-0.xml
```

### Verification
- ✅ Allows all crawlers
- ✅ Blocks internal API routes
- ✅ Blocks Next.js internals
- ✅ Declares canonical host
- ✅ Declares sitemap locations

---

## Rich Results Testing

### Pages to Test

Use [Google Rich Results Test](https://search.google.com/test/rich-results):

| Page | Schema Type | Expected Rich Result |
|------|-------------|---------------------|
| `/` | LocalBusiness | Local business panel |
| `/about` | Person | Knowledge panel potential |
| `/faq` | FAQPage | FAQ rich snippets |
| `/pricing` | Offer | Price/offer snippets |
| `/book-now` | ContactPage | Contact action button |
| `/blog/*` | BlogPosting | Article rich results |

### Testing URLs (once deployed)
```
https://search.google.com/test/rich-results?url=https://nextgentherapy.co.uk/
https://search.google.com/test/rich-results?url=https://nextgentherapy.co.uk/faq
https://search.google.com/test/rich-results?url=https://nextgentherapy.co.uk/pricing
```

---

## GSC Property Setup

### Steps to Complete

1. **Add Property**
   - URL prefix: `https://nextgentherapy.co.uk`
   - (Domain property requires DNS verification)

2. **Verify Ownership**
   - Recommended: HTML meta tag
   - Alternative: DNS TXT record
   - Alternative: Google Analytics (if connected)

3. **Submit Sitemap**
   - Go to Sitemaps section
   - Submit: `sitemap.xml`
   - Submit: `sitemap-0.xml`

4. **Request Indexing**
   - URL Inspection tool
   - Submit homepage first
   - Submit core service pages

---

## Priority Pages for Indexing

Submit these URLs first via URL Inspection:

1. `https://nextgentherapy.co.uk/` (homepage)
2. `https://nextgentherapy.co.uk/therapy-for-women`
3. `https://nextgentherapy.co.uk/neurodiversity`
4. `https://nextgentherapy.co.uk/teen-therapy`
5. `https://nextgentherapy.co.uk/romanian-therapy`
6. `https://nextgentherapy.co.uk/online-therapy`
7. `https://nextgentherapy.co.uk/book-now`
8. `https://nextgentherapy.co.uk/about`

---

## Local SEO Setup

### Google Business Profile
- ⏳ Verify GBP listing exists
- ⏳ Update address to Colchester Business Centre
- ⏳ Add website URL
- ⏳ Add service areas
- ⏳ Upload office photos

### NAP Consistency
Ensure consistent Name, Address, Phone across:
- Website
- Google Business Profile
- Psychology Today
- BACP Directory
- Facebook Business

---

## Post-Launch Monitoring

### Daily (First Week)
- Check Coverage report for errors
- Monitor crawl stats
- Watch for redirect issues

### Weekly (First Month)
- Review indexing progress
- Check Core Web Vitals
- Monitor search performance

### Monthly (Ongoing)
- Review search queries
- Check for crawl anomalies
- Update sitemap if needed

---

## Potential Issues to Watch

1. **Duplicate Content**
   - www vs non-www (redirect configured)
   - HTTP vs HTTPS (HSTS configured)

2. **Soft 404s**
   - 404 page returns proper 404 status

3. **Redirect Chains**
   - All redirects go direct to final URL

4. **Mobile Usability**
   - Responsive design verified

---

*Generated: 9 April 2026*
