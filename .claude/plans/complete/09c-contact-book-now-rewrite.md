# Prompt 09c — Audit and rewrite the Contact / Book Now page

**Goal:** Audit the existing `/book-now` page and rewrite it as the conversion endpoint of the entire site. Every CTA in the prompt sequence sends people here. It needs to do its job properly.

**Prereq:** Read `docs/content-prompts/00-positioning-brief.md`. Run AFTER all cornerstones exist.

---

## Why this matters

- This page is the **single conversion point** of the site. Every other page funnels here
- Currently it likely has a generic contact form with no context, possibly missing GDPR consent, possibly missing the explicit framing of "this isn't therapy, it's a free call"
- For a healthcare site under UK GDPR, the form must have explicit consent, clear data handling info, and proper accessibility
- People landing here are often anxious — the page needs to reduce friction and reassure, not add forms and small print

---

## Instructions for Claude Code

Read before writing:
- `src/app/book-now/page.tsx` (or wherever the contact page lives)
- The contact form component (probably `src/components/forms/ContactForm.tsx` or similar)
- `src/components/forms/` folder generally
- The privacy policy page to confirm what data handling claims you can make

Audit findings should be documented at `docs/seo-audit/contact-page-audit.md` listing:
- Current form fields
- Current validation behaviour
- Whether GDPR consent is present
- Whether the form sends successfully and where the data goes
- Accessibility issues (label associations, error handling, focus management)

Then rewrite per the structure below.

---

## Page structure

### Section 1 — PageHero

```tsx
<PageHero
  eyebrow="Book a Free 15-Minute Call"
  title="Let's start with a free call. No commitment, no forms to fill in afterwards."
  lead="The free 15-minute call is an informal conversation — phone or video, your choice. You can ask anything you want about how I work, I'll answer honestly, and we can both see whether working together feels right."
/>
```

### Section 2 — "What happens next"

Three-step explainer, visually clean (numbered steps in a row on desktop, stacked on mobile).

**Heading:** *What happens after you send this*

**Steps:**

1. **I'll be in touch within 1–2 working days** — usually by email, unless you've asked me to call. I'll suggest a few times for the free 15-minute call.

2. **We'll have the call** — phone or video, whichever you prefer. It's 15 minutes, informal, no pressure. You can ask anything you want.

3. **We'll decide together** — if working with me feels right, we'll book a first session. If it doesn't, that's completely fine, and I'll try to suggest someone else who might be a better fit.

### Section 3 — Contact form

The form itself. Use the existing form component if it works, otherwise rebuild.

**Form fields:**

- **Your name** (required, text)
- **Email** (required, email validation)
- **Phone** (optional, tel input)
- **Preferred contact method** (required, radio: Email / Phone / Either)
- **What's bringing you to therapy?** (optional, textarea, max 1000 characters, with placeholder text: *"A sentence or two is fine — you don't have to explain everything. This just helps me prepare for our call."*)
- **Are you contacting me about yourself, or someone else?** (required, radio: Myself / My child or teenager / A family member or partner)
- **GDPR consent** (required, checkbox): *"I understand that the information I'm sending will be used to respond to my enquiry and arrange a free 15-minute call. I've read the [Privacy Policy](/privacy-policy)."*

**Submit button:** `Send Message` (full width on mobile)

**Implementation requirements:**
- Every input has a properly associated `<label>` (not just placeholder text)
- Error states are announced to screen readers (`aria-invalid`, `aria-describedby` pointing to error text)
- The form does not submit until validation passes
- Submission shows a clear success state ("Thanks — I'll be in touch within 1–2 working days") not a redirect to a separate page
- If submission fails, the error is clearly displayed with what to do next ("Please try again, or email me directly at andreeatherapytoday@gmail.com")
- Honeypot field for spam protection (hidden, ignored by humans, caught when bots fill it)
- *{{ CONFIRM WITH LUKE — current form submission backend: Resend? Formspree? Custom API route? }}*

### Section 4 — Other ways to reach me

For people who prefer not to use forms.

**Heading:** *Or reach me directly*

- **Email:** [andreeatherapytoday@gmail.com](mailto:andreeatherapytoday@gmail.com)
- **Phone:** [+44 7448 036017](tel:+447448036017) — *I'm in sessions for most of the day, so if I don't pick up, please leave a voicemail and I'll call you back*

### Section 5 — Where to find me

**Heading:** *Where to find me*

- **In person:** Colchester Business Centre, 1 George Williams Way, Colchester CO1 2JS — ground floor, on-site parking, accessible entrance
- **Online:** UK-wide, Wednesdays only, age 16+ — [more details](/online-therapy)

*{{ CONFIRM WITH LUKE — does an embedded map make sense here? Google Maps embed adds tracking and slows the page. Static OpenStreetMap image, or just a "Get directions" link to Google Maps, might be better. }}*

### Section 6 — "If this is an emergency"

This must be on every page that touches mental health, but especially this one.

**Heading:** *If this is an emergency*

**Body:**

> I'm not a crisis service and I don't monitor messages outside of working hours. If you or someone you care about is in immediate danger, please contact:
>
> - **NHS 111** (option 2 for mental health) — 24/7
> - **Samaritans** — 116 123, free, 24/7
> - **Shout** — text **85258**, free, 24/7
> - **A&E at Colchester General Hospital** — for immediate physical risk
>
> I'll respond to messages sent through this form within 1–2 working days, but please don't wait for me if you need urgent help.

---

## Metadata

```ts
export const metadata: Metadata = {
  title: "Book a Free 15-Minute Call | Next Generation Therapy Colchester",
  description:
    "Book a free 15-minute introductory call with Andreea Horhocea, BACP-registered psychotherapist in Colchester. No commitment. In-person and online (UK-wide, age 16+).",
};
```

---

## Acceptance criteria

- `npm run lint` passes
- `npx tsc --noEmit` passes
- Form has all required fields with proper labels (not placeholder-only)
- GDPR consent checkbox is present and required
- Error states are accessible to screen readers
- Submission works end-to-end (test with a real send)
- Success state is shown inline, not via page redirect
- Crisis signposting section is present and clearly visible
- All required `{{ CONFIRM WITH LUKE }}` markers in place: form backend, map embed
- Form has a honeypot or other spam protection

---

## Accessibility checklist for the form (test before marking done)

- [ ] All inputs have associated `<label>` elements (not just `placeholder`)
- [ ] Required fields have `aria-required="true"` and a visible required indicator (not just colour)
- [ ] Error messages are announced to screen readers via `aria-describedby` and `aria-invalid="true"` on the field
- [ ] Focus moves to the first error on submission
- [ ] Submit button is keyboard-focusable and has a visible focus state
- [ ] Form is fully usable with keyboard alone (Tab, Shift+Tab, Space, Enter)
- [ ] Colour contrast on all text and form elements meets WCAG AA (4.5:1 for normal text, 3:1 for large text and UI components)
- [ ] Radio buttons are grouped with `<fieldset>` and `<legend>`
- [ ] Success and error messages use `role="status"` or `role="alert"` as appropriate

---

## Things to flag when done

- Screenshot desktop, tablet, mobile (empty form, filled form, success state, error state)
- Confirm form submission goes to the right place
- Document the spam protection approach
- Note any places where the existing form backend needed to change
