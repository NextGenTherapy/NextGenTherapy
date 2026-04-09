# Legal Pages Audit — April 2026

## Summary

This audit documents the creation and restructuring of legal pages to ensure UK GDPR/DPA 2018/DUAA 2025 compliance for Next Generation Therapy's website.

**Status:** DRAFT — All pages are pending review by Andreea and a legal advisor before going live.

**Last Updated:** 9 April 2026

---

## Pages Modified/Created

### 1. Cookie Policy (NEW)

**File:** `src/app/cookies/page.tsx`

**Created:** 8 April 2026

**Content:**
- What cookies are (plain English explanation)
- Essential cookies (`cookie-consent` in localStorage)
- Analytics cookies (GA4: `_ga`, `_ga_*` — Vercel: `va_*`)
- How to control cookies (banner, browser settings, GA opt-out)
- Third-party content disclosure (none currently)
- Contact information
- PECR 2003/DUAA 2025 compliant cookie inventory

**Schema:**
- WebPage JSON-LD
- BreadcrumbList JSON-LD

---

### 2. Privacy Policy (COMPREHENSIVE)

**File:** `src/app/privacy-policy/page.tsx`

**Updated:** 9 April 2026

**Current State:**
- 21 comprehensive sections covering UK GDPR, DPA 2018, and DUAA 2025
- Article 6 and Article 9 legal basis documentation
- Full data subject rights enumeration
- Third-party processor inventory (Vercel, Google Analytics, Resend)
- International data transfer documentation (UK-US Data Bridge, SCCs)
- BACP-compliant clinical supervision disclosure
- Online therapy age restrictions (16+) clearly stated
- ICO complaint rights included

**Sections:**
1. Data Controller
2. Information We Collect
3. Special Category Data (Health Information) — Article 9
4. Legal Basis for Processing — Article 6
5. How We Use Your Information
6. Clinical Supervision and Confidentiality
7. Online Therapy Sessions
8. Data Retention (7-year clinical notes, 8-year records)
9. Third-Party Data Processors
10. International Data Transfers
11. Data Security
12. Your Rights (full Article 12-23 enumeration)
13. Right to Withdraw Consent
14. Automated Decision Making
15. Children's Privacy
16. Marketing Communications
17. Cookies
18. Changes to This Policy
19. ICO Registration
20. Complaints
21. Contact

**Placeholder Remaining:**
- Line 124: ICO Registration Number `[Registration number to be inserted]`

---

### 3. Terms of Service (SIMPLIFIED)

**File:** `src/app/terms/page.tsx`

**Updated:** 9 April 2026

**Content:**
- Consumer Contracts Regulations 2013 reference
- Website terms only (separate therapy agreement for services)
- Online sessions require age 16+
- Crisis resources clearly displayed
- UK jurisdiction and governing law

**Structure:**
1. About This Website
2. Website Content
3. Your Use of This Website
4. Privacy and Cookies
5. Emergency Support
6. Governing Law
7. Contact

---

### 4. Accessibility Statement (NEW)

**File:** `src/app/accessibility/page.tsx`

**Created:** 9 April 2026

**Content:**
- WCAG 2.1 AA compliance commitment
- Equality Act 2010 reference
- Accessibility features enumerated
- Known limitations documented
- Contact for accessibility issues
- Testing methodology

**Schema:**
- WebPage JSON-LD
- BreadcrumbList JSON-LD

---

### 5. Cookie Banner (UPDATED)

**File:** `src/components/layout/CookieConsent.tsx`

**Features:**
- Accept/Decline options with equal button prominence (PECR 2026)
- Consent-gated analytics (GA4 and Vercel)
- "Manage Cookies" option in footer
- `prefers-reduced-motion` support for accessibility

---

### 6. Footer (UPDATED)

**File:** `src/components/layout/footer.tsx`

**Legal Links Section (9 April 2026):**
- Privacy Policy
- Cookies
- Terms
- Accessibility
- Manage Cookies button

---

### 7. Legal Navigation Component

**File:** `src/components/layout/legal-navigation.tsx`

**Supports:**
- Privacy Policy
- Cookies
- Terms
- Accessibility (4 pages total)

---

## Placeholders Requiring Andreea's Input

| File | Line | Placeholder | Status |
|------|------|-------------|--------|
| `privacy-policy/page.tsx` | 124 | ICO registration number | Documented in `docs/andreea-todos/action-items.md` — Andreea confirmed registered, needs to provide number |

---

## Compliance Checklist

### UK GDPR / DPA 2018 / DUAA 2025

- [x] Data controller identified
- [x] Legal basis for processing stated (Article 6)
- [x] Special category data addressed (Article 9)
- [x] Data retention periods specified (7-year clinical, 8-year records)
- [x] Third-party processors listed (Vercel, Google Analytics, Resend)
- [x] International data transfers documented (UK-US Data Bridge, SCCs)
- [x] Data subject rights explained (Articles 12-23)
- [x] ICO complaint rights mentioned
- [ ] ICO registration number (pending — Andreea to provide)
- [x] DUAA 2025 provisions addressed

### BACP Requirements

- [x] Clinical supervision disclosure
- [x] 7-year record retention mentioned
- [x] Confidentiality limits addressed
- [x] Professional membership displayed (MBACP 385976)

### Cookie Compliance (PECR 2003/2026)

- [x] Cookie consent banner with Accept/Decline options
- [x] Equal button prominence (PECR 2026)
- [x] Essential vs analytics cookies distinguished
- [x] Cookie duration disclosed
- [x] Full cookie inventory in policy
- [x] Instructions for changing preferences
- [x] Link to GA opt-out browser add-on
- [x] Consent properly gates GA4 and Vercel Analytics

### Accessibility (Equality Act 2010 / WCAG 2.1)

- [x] Accessibility statement page exists
- [x] WCAG 2.1 AA commitment stated
- [x] Contact method for accessibility issues
- [x] `prefers-reduced-motion` support in cookie banner
- [x] Semantic HTML structure throughout
- [x] Link text is descriptive
- [x] Form elements have labels

### Sitemap Coverage

- [x] `/privacy-policy` (priority: 0.3, changefreq: yearly)
- [x] `/terms` (priority: 0.3, changefreq: yearly)
- [x] `/cookies` (priority: 0.3, changefreq: yearly)
- [x] `/accessibility` (priority: 0.3, changefreq: yearly)

---

## Items for Andreea's Review

1. **ICO Registration Number (BLOCKING)**: Provide the number to insert at Privacy Policy line 124. Already confirmed registered.

2. **Legal Review**: All pages marked DRAFT. Recommend BACP-aware legal advisor review before removing DRAFT status.

---

## Technical Notes

### GA4 vs Privacy-Friendly Analytics

The site uses Google Analytics 4 (ID: `G-3528EDPEXW`) with:
- IP anonymization enabled
- Consent-gated activation (only loads when user clicks Accept)

**Decision**: Cookie banner must remain consent-based with Accept/Decline options. No change to GA4 recommended at this time.

### Vercel Analytics

Vercel Analytics and SpeedInsights are also consent-gated. When user clicks "Essential only", both GA4 and Vercel Analytics are disabled.

**Verified**: The `declineCookies` function disables GA4. Vercel Analytics reads the consent state on initial load and does not track if consent is declined.

### Therapy Contract

Website terms explicitly state that therapy services are covered by a separate agreement signed before the first session. This separation is intentional to:
- Keep website terms simple and accessible
- Allow therapy terms to be more detailed (cancellation, confidentiality limits, etc.)
- Avoid mixing website/digital consent with therapeutic consent

---

## Files Changed

| File | Action |
|------|--------|
| `src/app/cookies/page.tsx` | Created |
| `src/app/cookies/cookies.module.scss` | Created |
| `src/app/privacy-policy/page.tsx` | Modified (21 sections) |
| `src/app/privacy-policy/privacy-policy.module.scss` | Modified |
| `src/app/terms/page.tsx` | Modified |
| `src/app/terms/terms.module.scss` | Modified |
| `src/app/accessibility/page.tsx` | Created |
| `src/app/accessibility/accessibility.module.scss` | Created |
| `src/components/layout/CookieConsent.tsx` | Modified |
| `src/components/layout/CookieConsent.module.scss` | Modified |
| `src/components/layout/footer.tsx` | Modified (accessibility link added) |
| `src/components/layout/legal-navigation.tsx` | Modified (4-page support) |
| `next-sitemap.config.js` | Modified (all legal pages) |

---

Last updated: 9 April 2026
