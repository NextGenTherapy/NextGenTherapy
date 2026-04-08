# Lighthouse Baseline - Next Generation Therapy

**Last updated:** April 2026
**Status:** Template ready for measurements

---

## How to Run Lighthouse

### Option 1: Chrome DevTools
1. Open the page in Chrome
2. Press F12 to open DevTools
3. Go to "Lighthouse" tab
4. Select "Mobile" and all categories
5. Click "Analyze page load"

### Option 2: Command Line
```bash
# Build and start production server
npm run build && npm start

# In another terminal
npx lighthouse http://localhost:3000 --output=html --output-path=./lighthouse-report.html
```

### Option 3: PageSpeed Insights
Visit https://pagespeed.web.dev/ and enter your URL.

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

> **Instructions:** Run Lighthouse on each page and record the scores below.
> Use mobile emulation for accurate scores.

### Homepage (`/`)

| Category | Score | Notes |
|----------|-------|-------|
| Performance | {{ MEASURE }} | |
| Accessibility | {{ MEASURE }} | |
| Best Practices | {{ MEASURE }} | |
| SEO | {{ MEASURE }} | |

#### Core Web Vitals
| Metric | Value | Rating |
|--------|-------|--------|
| LCP | {{ MEASURE }} | |
| INP | {{ MEASURE }} | |
| CLS | {{ MEASURE }} | |

---

### Book Now (`/book-now`)

| Category | Score | Notes |
|----------|-------|-------|
| Performance | {{ MEASURE }} | |
| Accessibility | {{ MEASURE }} | |
| Best Practices | {{ MEASURE }} | |
| SEO | {{ MEASURE }} | |

#### Core Web Vitals
| Metric | Value | Rating |
|--------|-------|--------|
| LCP | {{ MEASURE }} | |
| INP | {{ MEASURE }} | |
| CLS | {{ MEASURE }} | |

---

### About (`/about`)

| Category | Score | Notes |
|----------|-------|-------|
| Performance | {{ MEASURE }} | |
| Accessibility | {{ MEASURE }} | |
| Best Practices | {{ MEASURE }} | |
| SEO | {{ MEASURE }} | |

---

### Therapy for Women (`/therapy-for-women`)

| Category | Score | Notes |
|----------|-------|-------|
| Performance | {{ MEASURE }} | |
| Accessibility | {{ MEASURE }} | |
| Best Practices | {{ MEASURE }} | |
| SEO | {{ MEASURE }} | |

---

### Neurodiversity (`/neurodiversity`)

| Category | Score | Notes |
|----------|-------|-------|
| Performance | {{ MEASURE }} | |
| Accessibility | {{ MEASURE }} | |
| Best Practices | {{ MEASURE }} | |
| SEO | {{ MEASURE }} | |

---

### Blog (`/blog`)

| Category | Score | Notes |
|----------|-------|-------|
| Performance | {{ MEASURE }} | |
| Accessibility | {{ MEASURE }} | |
| Best Practices | {{ MEASURE }} | |
| SEO | {{ MEASURE }} | |

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

## Next Steps

1. [ ] Run Lighthouse on all key pages
2. [ ] Record baseline scores above
3. [ ] Address any scores below 90
4. [ ] Set up automated Lighthouse CI (optional)
5. [ ] Schedule monthly performance reviews
