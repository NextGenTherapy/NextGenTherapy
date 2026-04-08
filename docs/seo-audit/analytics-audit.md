# Analytics Audit - Next Generation Therapy

**Last updated:** April 2026
**Status:** Complete

---

## Analytics Stack

| Platform | Purpose | Consent Required |
|----------|---------|------------------|
| Google Analytics 4 | User behaviour, conversions | Yes |
| Vercel Analytics | Performance, page views | Yes |
| Vercel Speed Insights | Core Web Vitals | Yes |

---

## GA4 Configuration

- **Measurement ID:** `G-3528EDPEXW`
- **Implementation:** Via `@next/third-parties` script injection
- **Location:** `/src/components/layout/ConditionalAnalytics.tsx`

### Settings
- `send_page_view: true` — automatic page view tracking
- `anonymize_ip: true` — IP anonymisation for GDPR compliance

### Consent Gating
GA4 scripts are conditionally loaded based on cookie consent:
- Scripts only load after `localStorage.getItem('cookie-consent') === 'accepted'`
- Component listens for `cookie-consent-changed` custom event for real-time updates
- If consent is declined, no GA4 scripts are loaded

---

## Vercel Analytics Configuration

- **Package:** `@vercel/analytics/next`
- **Location:** `/src/components/layout/ConditionalVercelAnalytics.tsx`
- **Speed Insights:** `@vercel/speed-insights/next`

### Consent Gating
Same pattern as GA4:
- Only renders `<Analytics />` and `<SpeedInsights />` components after consent
- Listens for both `storage` and `cookie-consent-changed` events

---

## Cookie Consent Implementation

- **Location:** `/src/components/layout/CookieConsent.tsx`
- **Storage:** `localStorage` with key `cookie-consent`
- **Values:** `'accepted'` | `'declined'`

### GDPR Compliance
- Equal prominence Accept/Decline buttons
- No dark patterns (decline button not hidden or de-emphasised)
- Links to privacy policy
- Consent state persists across sessions

---

## Conversion Tracking Events

### Form Submission (`free_call_requested`)

| Parameter | Description |
|-----------|-------------|
| `enquiry_for` | Who the enquiry is about: `'myself'`, `'child'`, `'other'` |
| `source_page` | URL path where form was submitted |

**Trigger:** Contact form submission success
**Location:** `/src/components/forms/contact-form.tsx`

### Phone Click (`phone_click`)

| Parameter | Description |
|-----------|-------------|
| `location` | Where clicked: `'footer'` or `'book-now'` |

**Trigger:** Click on phone number link
**Locations:** Footer, Book Now page

### Email Click (`email_click`)

| Parameter | Description |
|-----------|-------------|
| `location` | Where clicked: `'footer'` or `'book-now'` |

**Trigger:** Click on email link
**Locations:** Footer, Book Now page

---

## Core Web Vitals Monitoring

- **Location:** `/src/lib/vitals.ts`
- **Package:** `web-vitals`

### Metrics Tracked
| Metric | Good | Needs Improvement | Poor |
|--------|------|-------------------|------|
| LCP | ≤2.5s | ≤4s | >4s |
| INP | ≤100ms | ≤300ms | >300ms |
| CLS | ≤0.1 | ≤0.25 | >0.25 |
| FCP | ≤1.8s | ≤3s | >3s |
| TTFB | ≤800ms | ≤1.8s | >1.8s |

### Reporting
- Sends to GA4 as custom events with `event_category: 'Web Vitals'`
- Sends to Vercel Analytics via `va('track', 'Web Vital', ...)`
- Logs poor performance to console in production for monitoring

---

## Analytics Utility

- **Location:** `/src/lib/analytics.ts`

### Exports
```typescript
trackFormSubmission(enquiryFor: string, sourcePage: string): void
trackPhoneClick(location: 'footer' | 'book-now'): void
trackEmailClick(location: 'footer' | 'book-now'): void
```

### Features
- Checks cookie consent before firing GA4 events
- Sends to both GA4 and Vercel Analytics in single call
- Development mode logging for debugging
- TypeScript types for event parameters

---

## Tracked Contact Links Component

- **Location:** `/src/components/ui/TrackedContactLinks.tsx`

Client-side wrapper components for phone/email links:
- `<TrackedPhoneLink location="footer" />`
- `<TrackedEmailLink location="book-now" />`

Required because footer is a server component and cannot have onClick handlers.

---

## Testing Checklist

### GA4 Events
1. Accept cookies in consent banner
2. Submit contact form → Check GA4 Real-Time for `free_call_requested`
3. Click phone in footer → Check for `phone_click`
4. Click email on book-now → Check for `email_click`

### Consent Verification
1. Decline cookies in consent banner
2. Submit form → Verify NO GA4 events fire
3. Check console in dev mode for `[Analytics] Skipped - no cookie consent`

### Development Debugging
All events log to console in development mode:
```
[Analytics] Event: Form Submission {enquiry_for: 'myself', source_page: '/book-now'}
[Analytics] GA4 event sent: free_call_requested
[Analytics] Vercel event sent: Free Call Requested
```

---

## Files Reference

| File | Purpose |
|------|---------|
| `/src/lib/analytics.ts` | Tracking utility functions |
| `/src/components/ui/TrackedContactLinks.tsx` | Client wrapper for tracked links |
| `/src/components/layout/ConditionalAnalytics.tsx` | GA4 script injection |
| `/src/components/layout/ConditionalVercelAnalytics.tsx` | Vercel Analytics components |
| `/src/components/layout/CookieConsent.tsx` | Cookie consent banner |
| `/src/lib/vitals.ts` | Core Web Vitals monitoring |
| `/src/components/forms/contact-form.tsx` | Form with conversion tracking |
| `/src/components/layout/footer.tsx` | Footer with tracked links |
| `/src/app/book-now/page.tsx` | Book page with tracked links |
