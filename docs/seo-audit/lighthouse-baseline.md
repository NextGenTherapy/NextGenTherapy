# Lighthouse Baseline - Next Generation Therapy

**Last updated:** April 2026
**Status:** Ready for manual measurements

---

## How to Run Lighthouse

### Option 1: Chrome DevTools (Recommended)
1. Open the page in Chrome (production site or `npm run build && npm start`)
2. Press F12 to open DevTools
3. Go to "Lighthouse" tab
4. Select "Mobile" and all categories
5. Click "Analyze page load"

### Option 2: PageSpeed Insights
Visit https://pagespeed.web.dev/ and enter: `https://nextgentherapy.co.uk`

### Option 3: Command Line
```bash
# Build and start production server
npm run build && npm start

# In another terminal
npx lighthouse http://localhost:3000 --output=html --output-path=./lighthouse-report.html
```

### Option 4: Lighthouse CI
```bash
npm run build && npm start &
npx lhci collect --config=.lighthouserc.json
npx lhci assert --config=.lighthouserc.json
```

---

## Performance Budgets

From `/performance.config.js`:

| Metric | Target | Max |
|--------|--------|-----|
| JavaScript | 200KB | 300KB |
| CSS | 50KB | 75KB |
| Images | 500KB | 750KB |
| Fonts | 100KB | 150KB |
| Total | 850KB | 1.2MB |
| First Load JS | 90KB | - |

---

## Lighthouse Scores

> **ACTION REQUIRED:** Run Lighthouse on each page below and record the scores.
> Use mobile emulation for accurate scores.

### Homepage (`/`)

| Category | Score | Notes |
|----------|-------|-------|
| Performance | ___ | |
| Accessibility | ___ | |
| Best Practices | ___ | |
| SEO | ___ | |

#### Core Web Vitals
| Metric | Value | Rating |
|--------|-------|--------|
| LCP | ___ | |
| INP | ___ | |
| CLS | ___ | |

---

### Book Now (`/book-now`)

| Category | Score | Notes |
|----------|-------|-------|
| Performance | ___ | |
| Accessibility | ___ | |
| Best Practices | ___ | |
| SEO | ___ | |

#### Core Web Vitals
| Metric | Value | Rating |
|--------|-------|--------|
| LCP | ___ | |
| INP | ___ | |
| CLS | ___ | |

---

### About (`/about`)

| Category | Score | Notes |
|----------|-------|-------|
| Performance | ___ | |
| Accessibility | ___ | |
| Best Practices | ___ | |
| SEO | ___ | |

---

### Therapy for Women (`/therapy-for-women`)

| Category | Score | Notes |
|----------|-------|-------|
| Performance | ___ | |
| Accessibility | ___ | |
| Best Practices | ___ | |
| SEO | ___ | |

---

### Neurodiversity (`/neurodiversity`)

| Category | Score | Notes |
|----------|-------|-------|
| Performance | ___ | |
| Accessibility | ___ | |
| Best Practices | ___ | |
| SEO | ___ | |

---

### Blog (`/blog`)

| Category | Score | Notes |
|----------|-------|-------|
| Performance | ___ | |
| Accessibility | ___ | |
| Best Practices | ___ | |
| SEO | ___ | |

---

## Target Scores

| Category | Target | Acceptable |
|----------|--------|------------|
| Performance | 90+ | 80+ |
| Accessibility | 100 | 95+ |
| Best Practices | 100 | 95+ |
| SEO | 100 | 95+ |

---

## Common Issues to Watch

### Performance
- [ ] Large images not optimised
- [ ] JavaScript bundle too large
- [ ] Render-blocking resources
- [ ] Unused CSS
- [ ] Third-party scripts blocking main thread

### Accessibility
- [ ] Missing alt text on images
- [ ] Low colour contrast
- [ ] Missing form labels
- [ ] Incorrect heading hierarchy
- [ ] Missing skip links

### SEO
- [ ] Missing meta descriptions
- [ ] Missing canonical URLs
- [ ] Missing Open Graph tags
- [ ] Broken links
- [ ] Missing structured data

---

## Monitoring

### Vercel Analytics Dashboard
- Real-time performance monitoring
- Core Web Vitals tracking
- Geographic performance breakdown

### Google Search Console
- Core Web Vitals report
- Page experience signals
- Mobile usability issues

### Custom Monitoring
- `/src/lib/vitals.ts` sends poor performance warnings to console
- Consider adding error tracking service (Sentry, etc.) for production monitoring

---

## Manual Action Items for Luke

### Google Search Console Setup
1. Go to https://search.google.com/search-console
2. Add property: `https://nextgentherapy.co.uk`
3. Verify using HTML tag method (code already in `src/app/layout.tsx` line 96)
4. Submit sitemap: `sitemap.xml`
5. Set international target to **United Kingdom**
6. Enable email alerts for issues

### Bing Webmaster Tools
1. Go to https://www.bing.com/webmasters
2. Import from Google Search Console (easiest method)
3. Submit sitemap

### Vercel Dashboard
1. Enable Speed Insights if not already
2. Check Core Web Vitals in analytics dashboard

### OG Image Generation
Run when page designs are finalized:
```bash
npm run dev  # Terminal 1
npx ts-node scripts/generate-og-images.ts  # Terminal 2
```

---

## Next Steps

1. [ ] Run Lighthouse on all key pages
2. [ ] Record baseline scores above
3. [ ] Address any scores below 90
4. [ ] Verify Google Search Console ownership
5. [ ] Submit sitemap to GSC and Bing
6. [ ] Schedule monthly performance reviews
