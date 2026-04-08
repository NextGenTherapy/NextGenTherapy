# Legal Pages Audit — April 2026

## Summary

This audit documents the creation and restructuring of legal pages to ensure UK GDPR/DPA 2018 compliance for Next Generation Therapy's website.

**Status:** DRAFT — All pages are pending review by Andreea and a legal advisor before going live.

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

**Schema:**
- WebPage JSON-LD
- BreadcrumbList JSON-LD

---

### 2. Privacy Policy (RESTRUCTURED)

**File:** `src/app/privacy-policy/page.tsx`

**Updated:** 8 April 2026

**Changes:**
- Added DRAFT banner at top
- Restructured from 10 to 13 sections for clarity
- Added **Special Category Data (Health Information)** section (Article 9)
- Added **Clinical Supervision and Confidentiality** section (BACP requirement)
- Added **Online Therapy Sessions** section with 16+ age restriction
- Added **Clinical Notes Retention**: 7 years per BACP guidelines
- Added link to new Cookie Policy page
- Updated date from "28 May 2025" to "8 April 2026"

**New Sections:**
1. Data Controller
2. Information We Collect
3. Special Category Data (Health Information) — **NEW**
4. Legal Basis for Processing
5. How We Use Your Information
6. Clinical Supervision and Confidentiality — **NEW**
7. Online Therapy Sessions — **NEW**
8. Data Retention
9. Third-Party Data Processors
10. Your Rights
11. Cookies
12. Complaints
13. Contact

---

### 3. Terms of Service (SIMPLIFIED)

**File:** `src/app/terms/page.tsx`

**Updated:** 8 April 2026

**Changes:**
- Added DRAFT banner at top
- Simplified from 10 to 7 sections (website terms only)
- Removed "Use License" legalese section
- Added note: Online sessions require age 16+
- Added note: Separate therapy agreement for services
- Added link to Cookie Policy page
- Updated date from "January 1, 2025" to "8 April 2026"

**New Structure:**
1. About This Website
2. Website Content
3. Your Use of This Website
4. Privacy and Cookies
5. Emergency Support
6. Governing Law
7. Contact

---

### 4. Cookie Banner (UPDATED)

**File:** `src/components/layout/CookieConsent.tsx`

**Changes:**
- Changed link from `/privacy-policy` to `/cookies`
- Updated link text from "Privacy policy" to "Learn more about cookies"

**File:** `src/components/layout/CookieConsent.module.scss`

**Changes:**
- Added `prefers-reduced-motion: reduce` support for accessibility

---

### 5. Footer (UPDATED)

**File:** `src/components/layout/footer.tsx`

**Changes:**
- Added Cookies link between Privacy Policy and Terms in legal links section

---

### 6. Legal Navigation (UPDATED)

**File:** `src/components/layout/legal-navigation.tsx`

**Changes:**
- Extended `currentPage` type to include `'cookies'`
- Updated navigation to show links to other two legal pages dynamically
- Removed emoji from Home button for consistency

---

## Placeholders Requiring Andreea's Input

The following placeholders were added and need confirmation:

| File | Line | Placeholder | Question |
|------|------|-------------|----------|
| `privacy-policy/page.tsx` | 157 | ICO registration number | Is Next Generation Therapy registered with ICO? Number? |
| `privacy-policy/page.tsx` | 247 | Clinical supervisor | Name for disclosure, or just confirm existence? |
| `privacy-policy/page.tsx` | 257 | Online platform | Which video platform? (Zoom, Google Meet, other) |

---

## Compliance Checklist

### UK GDPR / DPA 2018

- [x] Data controller identified
- [x] Legal basis for processing stated (Article 6)
- [x] Special category data addressed (Article 9)
- [x] Data retention periods specified
- [x] Third-party processors listed
- [x] Data subject rights explained
- [x] ICO complaint rights mentioned
- [ ] ICO registration number (pending confirmation)

### BACP Requirements

- [x] Clinical supervision disclosure
- [x] 7-year record retention mentioned
- [x] Confidentiality limits addressed

### Cookie Compliance

- [x] Cookie consent banner with Accept/Decline options
- [x] Essential vs analytics cookies distinguished
- [x] Cookie duration disclosed
- [x] Instructions for changing preferences
- [x] Link to GA opt-out browser add-on

### Accessibility

- [x] `prefers-reduced-motion` support in cookie banner
- [x] Semantic HTML structure
- [x] Link text is descriptive
- [x] Form elements have labels (contact form)

---

## Items for Andreea's Review

1. **ICO Registration**: Is Next Generation Therapy registered with ICO? If yes, what is the registration number?

2. **Online Platform**: Which video platform is used for online sessions? (Zoom, Google Meet, other)

3. **Clinical Supervisor**: For the privacy policy disclosure, should we:
   - Just confirm that clinical supervision exists (current approach)
   - Name the supervisor
   - Provide supervisor's credentials

4. **Data Retention**: Confirm 7-year retention period for clinical notes per BACP guidelines is correct.

5. **Gmail**: Contact email is Gmail (`andreeatherapytoday@gmail.com`). Is this acceptable for processing client enquiries, or should a business email domain be used?

6. **Legal Review**: All three pages are marked DRAFT. Before publishing, a legal advisor should review for:
   - Accuracy of GDPR article references
   - Completeness of data subject rights
   - Adequacy of clinical supervision disclosure
   - Any missing required disclosures

---

## Technical Notes

### GA4 vs Privacy-Friendly Analytics

The site uses Google Analytics 4 (ID: `G-3528EDPEXW`) with:
- IP anonymization enabled
- Consent-gated activation (only loads when user clicks Accept)

**Decision**: Cookie banner must remain consent-based with Accept/Decline options. No change to GA4 recommended at this time.

### Vercel Analytics

Vercel Analytics and SpeedInsights are also consent-gated. When user clicks "Essential only", both GA4 and Vercel Analytics should be disabled.

**Verified**: The `declineCookies` function disables GA4. Vercel Analytics reads the consent state on initial load and does not track if consent is declined.

### Therapy Contract

These website terms explicitly state that therapy services are covered by a separate agreement signed before the first session. This separation is intentional to:
- Keep website terms simple and accessible
- Allow therapy terms to be more detailed (cancellation, confidentiality limits, etc.)
- Avoid mixing website/digital consent with therapeutic consent

---

## Files Changed

| File | Action |
|------|--------|
| `src/app/cookies/page.tsx` | Created |
| `src/app/cookies/cookies.module.scss` | Created |
| `src/app/privacy-policy/page.tsx` | Modified |
| `src/app/privacy-policy/privacy-policy.module.scss` | Modified |
| `src/app/terms/page.tsx` | Modified |
| `src/app/terms/terms.module.scss` | Modified |
| `src/components/layout/CookieConsent.tsx` | Modified |
| `src/components/layout/CookieConsent.module.scss` | Modified |
| `src/components/layout/footer.tsx` | Modified |
| `src/components/layout/legal-navigation.tsx` | Modified |

---

Last updated: 8 April 2026
