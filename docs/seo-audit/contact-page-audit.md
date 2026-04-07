# Book Now Page Audit & Rewrite

**Date:** April 2026
**Page URL:** /book-now

---

## Pre-Rewrite Issues Identified

### Critical Issues

1. **Missing GDPR Consent Checkbox**
   - The form collected personal data but had no explicit consent checkbox
   - UK GDPR requires explicit opt-in for healthcare contact forms
   - **Status:** Fixed

2. **Ban-Listed Phrase Used**
   - Page contained "Ready to Take the First Step?" which is on the positioning brief ban list
   - **Status:** Fixed - removed entire section

3. **Emojis in Content**
   - Trust signals section used emojis (🎓, ✅, ⏱️, etc.)
   - Violates CLAUDE.md styling rules
   - **Status:** Fixed - removed trust signals section entirely

4. **Missing Crisis Signposting**
   - No emergency contact information despite being a mental health service page
   - Required per healthcare compliance rules
   - **Status:** Fixed - added comprehensive crisis section

5. **Minimal Form Fields**
   - Original form only had: First Name, Last Name, Email, Message
   - Missing phone, contact preference, and enquiry context fields
   - **Status:** Fixed - form now includes all necessary fields

6. **No Spam Protection Beyond Rate Limiting**
   - No honeypot field; relied only on IP-based rate limiting
   - **Status:** Fixed - added honeypot field

---

## Changes Made

### Form Enhancements

| Field | Before | After |
|-------|--------|-------|
| Name | First Name + Last Name | Single Name field |
| Email | Required | Required |
| Phone | Not present | Optional, UK validation |
| Contact Preference | Not present | Radio: Email / Phone / Either |
| Enquiry For | Not present | Radio: Myself / My child or teenager / A family member or partner |
| Message | Required, no limit | Optional, 1000 char limit with counter |
| GDPR Consent | Not present | Required checkbox - "I understand that the information I'm sending will be used to respond to my enquiry and arrange a free 15-minute call. I've read the Privacy Policy." |
| Honeypot | Not present | Hidden field for bot detection |

### Accessibility Improvements

- Added `aria-required="true"` on required fields
- Added `aria-invalid="true"` + `aria-describedby` on error fields
- Radio buttons grouped with `<fieldset>`/`<legend>`
- Added `role="alert"` on error messages
- Added `role="status"` on success message
- Focus management: moves to first error on validation failure
- Visible focus indicators on all interactive elements

### Page Structure Changes

**Removed:**
- "Ready to Take the First Step?" section (ban-listed phrase)
- Trust signals section with emojis
- CTABlock component (redundant on contact page)
- Bottom button links section (redundant)
- Google Maps iframe (privacy concern, page load impact)

**Added:**
- "What happens next" section with numbered steps
- "Other ways to reach me" section with email/phone
- "Where to find me" section with location details and accessibility info
- "If this is an emergency" crisis signposting section
- Link to /is-this-right-for-you for client self-selection

### API Route Updates

- Added honeypot check (silent success if filled)
- Added validation for new fields
- Server-side GDPR consent validation
- Updated email template with table format
- Added human-readable labels for enquiry type

### Metadata Updates

```
Title: "Book a Free 15-Minute Call | Next Generation Therapy Colchester"

Description: "Book a free 15-minute introductory call with Andreea,
BACP-registered psychotherapist in Colchester. No commitment.
In-person and online (UK-wide, age 16+)."
```

---

## Files Modified

| File | Change Type |
|------|-------------|
| `src/types/index.ts` | Extended interfaces |
| `src/lib/utils.ts` | Added validation function |
| `src/app/api/contact/route.ts` | Accept new fields, honeypot |
| `src/components/forms/contact-form.tsx` | Complete rewrite |
| `src/components/forms/contact-form.module.scss` | Add new styles |
| `src/app/book-now/page.tsx` | Complete rewrite |
| `src/app/book-now/book-now.module.scss` | Simplified, new sections |

---

## Verification Checklist

- [x] GDPR checkbox is required and blocks submission without consent
- [x] Honeypot field catches bot submissions (returns silent success)
- [x] Error states are accessible (announced to screen readers)
- [x] Focus moves to first error on validation failure
- [x] Crisis signposting section visible on page
- [x] Ban-listed phrases removed
- [x] Emojis removed
- [x] UK phone validation implemented

---

## Confirmation Markers

- **Form backend:** Resend via `/api/contact` route ✓
- **Map embed:** Removed - replaced with text link to Google Maps (removes tracking, improves page load)
- **Static map image:** Not implemented - would need to be provided separately if desired

---

## April 2026 Content Refinement

### Form Updates

1. **Contact Method** - Added "Either" option to allow flexible contact preference
2. **Enquiry Labels** - Updated for clarity:
   - "My child" → "My child or teenager"
   - "Someone else" → "A family member or partner"
3. **GDPR Text** - Simplified: "I understand that the information I'm sending will be used to respond to my enquiry and arrange a free 15-minute call. I've read the Privacy Policy."

### Page Content Updates

1. **PageHero Title** - Changed to: "Let's start with a free call. No commitment, no forms to fill in afterwards."
2. **PageHero Lead** - Updated to: "The free 15-minute call is an informal conversation — phone or video, your choice. You can ask anything you want about how I work, I'll answer honestly, and we can both see whether working together feels right."
3. **Process Section Heading** - Changed from "What happens next" to "What happens after you send this"
4. **Process Steps** - Rewritten per positioning brief requirements
5. **Contact Section Heading** - Changed from "Other ways to reach me" to "Or reach me directly"
6. **Phone Number** - Changed to international format: +44 7448 036017
7. **Location Features** - Added "On-site parking" and changed "step-free access" to "accessible entrance"

### API Route Updates

1. **Contact Method Validation** - Now accepts 'either' in addition to 'email' and 'phone'
2. **Label Updates** - getContactMethodLabel returns "Either email or phone" for 'either' value
3. **Enquiry Labels** - Updated to match form: "Their child or teenager", "A family member or partner"

---

## Technical Notes

### UK Phone Validation Regex
```javascript
const ukPhoneRegex = /^(?:(?:\+44|0)(?:7\d{9}|[123]\d{8,9}))$/;
```
Accepts:
- UK mobile: 07xxx or +447xxx
- UK landline: 01xxx, 02xxx, 03xxx

### Honeypot Implementation
- Hidden field using `position: absolute; left: -9999px` (not `display: none`)
- Named "website" to attract bots
- If filled, API returns success without sending email
