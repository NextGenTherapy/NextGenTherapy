# Prompt 12d — Analytics, Search Console, and Core Web Vitals

**Goal:** Without analytics, none of the SEO work in this prompt set can be measured. Set up the measurement infrastructure so we can tell what's working, what isn't, and what to do next.

**Prereq:** Run AFTER all content prompts. This is a launch-readiness prompt.

---

## Why this matters

- The whole point of the content overhaul is to grow from 12 to 20–22 client hours/week. Without analytics, we have no idea if the work is paying off.
- Without Search Console, we can't see what queries are bringing traffic, what pages are ranking, or what crawl errors exist.
- Without Core Web Vitals monitoring, ranking will quietly degrade if performance regresses.
- Andreea is a healthcare practitioner — analytics setup must respect UK GDPR and not be invasive.

---

## Instructions for Claude Code

This prompt has four parts: **analytics platform**, **Google Search Console**, **performance monitoring**, and **conversion tracking**.

---

## Part A — Analytics platform

The current site likely has Google Analytics 4 (GA4) or Vercel Analytics. Audit which is in place at `docs/seo-audit/analytics-audit.md` listing what's installed and what's tracked.

**Recommendation:** Use **Plausible** or **Vercel Analytics** rather than Google Analytics for a healthcare site, because:
- No cookies = no cookie banner consent required for analytics
- UK GDPR compliant by default
- Faster page load (smaller script)
- Simpler dashboards
- More respectful of user privacy

*{{ FLAG FOR LUKE — confirm preferred analytics platform: GA4, Plausible, Vercel Analytics, or Fathom. Below assumes Plausible or Vercel Analytics for the GDPR benefits, but I can adapt if Andreea prefers GA4 (which would require cookie consent for the analytics cookies). }}*

### If using Vercel Analytics

Already deployed on Vercel — installation is one line.

```bash
npm install @vercel/analytics
```

In `src/app/layout.tsx`:

```tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

Done. No cookies, no consent banner needed for analytics, automatic page view tracking.

### If using Plausible

```bash
npm install next-plausible
```

In `src/app/layout.tsx`:

```tsx
import PlausibleProvider from 'next-plausible';

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <head>
        <PlausibleProvider domain="nextgentherapy.co.uk" />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

Plausible requires a paid subscription (~£9/month) but includes funnels, goal tracking, and full UK GDPR compliance with no cookies.

### If keeping GA4

Then the cookie banner becomes load-bearing. Make sure:
- GA4 only loads after the user accepts analytics cookies
- "Decline" is as prominent as "Accept" (no dark patterns)
- Cookie banner explains what's being tracked
- IP anonymisation is enabled in GA4 settings

This is the most fragile option for a healthcare site.

---

## Part B — Google Search Console

GSC is non-negotiable. It's how we see what queries are bringing traffic, what pages are indexed, and what's broken.

### Step 1 — Verify ownership

If GSC isn't already set up, verify ownership at https://search.google.com/search-console using one of:
- DNS TXT record (most stable)
- HTML tag in `<head>` of `src/app/layout.tsx`
- File upload to `public/`

The HTML tag method is easiest:

```tsx
// In layout.tsx metadata
verification: {
  google: 'paste-verification-code-here',
},
```

*{{ FLAG FOR LUKE — needs verification code from GSC sign-up. Document the verification method used. }}*

### Step 2 — Submit sitemap

Once verified, submit the sitemap URL: `https://www.nextgentherapy.co.uk/sitemap.xml`

### Step 3 — Configure international targeting

In GSC settings, set the international target to **United Kingdom**. This helps Google rank the site for UK users.

### Step 4 — Set up Bing Webmaster Tools

Bing has 5–10% market share in the UK and is especially used by older Windows users. Bing Webmaster Tools can import directly from GSC. Set up at https://www.bing.com/webmasters.

---

## Part C — Performance monitoring (Core Web Vitals)

Core Web Vitals are a Google ranking signal. Three metrics:
- **LCP (Largest Contentful Paint):** under 2.5s
- **INP (Interaction to Next Paint):** under 200ms
- **CLS (Cumulative Layout Shift):** under 0.1

### Step 1 — Baseline measurement

Run Lighthouse on the deployed site for the homepage and at least 3 cornerstone pages. Document scores at `docs/seo-audit/lighthouse-baseline.md`.

```bash
npx lighthouse https://www.nextgentherapy.co.uk --output html --output-path lighthouse-home.html
```

Target scores:
- Performance: 90+
- Accessibility: 100 (after Prompt 12b)
- Best Practices: 90+
- SEO: 100

### Step 2 — Real user monitoring

Vercel Analytics includes Core Web Vitals tracking automatically. If using a different platform, install `web-vitals`:

```bash
npm install web-vitals
```

Send measurements to your analytics endpoint via the standard `web-vitals` reporting API.

### Step 3 — Common performance fixes

Walk through each cornerstone page and check:

**Images**
- Every image uses `next/image`
- Hero images have `priority` set
- Below-the-fold images have `loading="lazy"` (Next.js default)
- `sizes` prop is set for responsive images
- WebP or AVIF formats served (Next.js handles this automatically)

**Fonts**
- `next/font` is used for self-hosting Cormorant Garamond and DM Sans
- `font-display: swap` is set
- Font subsetting is configured (Latin only, unless Romanian content exists — then Latin Extended)

**JavaScript**
- Bundle size per page < 200kB First Load JS
- Heavy components are dynamically imported with `next/dynamic` where they're below the fold
- No client-side data fetching that should be server-side

**CSS**
- No render-blocking external stylesheets
- Critical CSS inlined where possible (Next.js default)

**Layout shift**
- Every image has explicit `width` and `height`
- Fonts use `size-adjust` or fallback metric overrides to prevent shift on load
- No content that injects after page load (e.g. cookie banners that push content down)

### Step 4 — Set up monitoring alerts

If using Vercel:
- Enable Speed Insights in Vercel dashboard
- Set up Slack or email alerts for Core Web Vitals regressions

If using a different host:
- Set up monthly Lighthouse runs via GitHub Actions or similar
- Document at `docs/seo-audit/performance-monitoring.md`

---

## Part D — Conversion tracking

The whole point of analytics is to know whether people are doing the things we want them to do.

### The single most important conversion: free 15-minute call booking

Every successful contact form submission = 1 conversion. Set this up in whichever analytics platform you're using.

**If Vercel Analytics:**

```tsx
import { track } from '@vercel/analytics';

// On successful form submission
track('Free Call Requested', {
  source: 'book-now-page', // or wherever the user came from
});
```

**If Plausible:**

```tsx
import { usePlausible } from 'next-plausible';

const plausible = usePlausible();
plausible('FreeCallRequested', { props: { source: 'book-now-page' } });
```

**If GA4:**

Set up a custom event in GA4: `free_call_requested`. Trigger it on successful form submission.

### Secondary conversions to track

- **Phone link clicks** — `<a href="tel:+447448036017">` taps
- **Email link clicks** — `<a href="mailto:...">` clicks
- **External BACP profile clicks** — outbound link tracking
- **PDF downloads** (if any future lead magnets exist)

### Goal funnel

Set up a funnel:
1. Land on cornerstone page (e.g. `/therapy-for-women`)
2. Click "Book a Free Call" CTA
3. Land on `/book-now`
4. Submit the form

Track drop-off at each step. This tells us where the conversion is leaking.

---

## Acceptance criteria

- `npm run lint` passes
- `npx tsc --noEmit` passes
- Analytics platform installed and tracking page views
- Google Search Console verified
- Sitemap submitted to GSC
- Bing Webmaster Tools set up (or flagged for Luke if access not available)
- Lighthouse baseline scores documented
- Conversion tracking configured for free call form submission
- All `{{ FLAG FOR LUKE }}` items clearly listed at the end of the PR / commit

---

## Things to flag when done

- Confirmation of analytics platform choice (Vercel / Plausible / GA4)
- GSC verification code or confirmation that ownership is verified
- Lighthouse baseline scores for the homepage and 3 cornerstones
- Any performance regressions caused by the new content
- Whether GA4 (if used) is firing only after cookie consent
