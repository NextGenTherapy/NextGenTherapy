# Prompt 13 — Legal pages audit (Privacy Policy, Terms, Cookies, UK GDPR)

**Goal:** Audit and update the legal pages so they accurately reflect the new site structure, the contact form, the analytics setup, the Romanian language offering, the online sessions, and current UK GDPR / DPA 2018 requirements.

**Prereq:** Run AFTER all content prompts and after the analytics prompt (12d), because the privacy policy needs to reflect what's actually being tracked.

---

## Why this matters

- **Legal:** A psychotherapy practice in the UK is a controller of special-category data under UK GDPR. The privacy policy is not optional — it's a legal document that protects both Andreea and her clients.
- **BACP ethical framework:** BACP requires registered members to be transparent about data handling and confidentiality.
- **Trust:** Clients dealing with sensitive issues need to know their information is handled properly. A vague or boilerplate privacy policy undermines that trust.
- **Compliance:** ICO (Information Commissioner's Office) can investigate any data complaint. Having a thorough, accurate policy is the first defence.

**Important:** This prompt produces a high-quality starting draft, but the final policies should be reviewed by Andreea and ideally by a BACP-aware legal advisor or the BACP itself before going live. Mark them clearly as DRAFT until that review happens.

---

## Instructions for Claude Code

Read before writing:
- `src/app/privacy-policy/page.tsx`
- `src/app/terms/page.tsx` (if it exists)
- `src/app/cookies/page.tsx` (if it exists)
- The cookie banner component
- The contact form (Prompt 09c) to understand what data is collected
- The analytics setup (Prompt 12d) to understand what's being tracked

Document the audit at `docs/seo-audit/legal-pages-audit.md`.

---

## Page 1 — Privacy Policy (`/privacy-policy`)

Replace existing content with the structure below. Mark the entire page as DRAFT in a comment at the top of the file: `{/* DRAFT — pending review by Andreea and legal advisor */}`.

### Structure

#### Header

```tsx
<PageHero
  eyebrow="Privacy Policy"
  title="How I handle your information"
  lead="Last updated: [auto-generate from build date or manual]. This policy explains what information I collect when you use this website or contact me, why I collect it, what I do with it, and what rights you have over it."
/>
```

#### Section 1 — Who I am

> I am Andreea Horhocea, a self-employed psychotherapist trading as Next Generation Therapy. I'm registered with the British Association for Counselling and Psychotherapy (BACP) and I am the data controller for the information described in this policy.
>
> **Contact:**
> Andreea Horhocea, Next Generation Therapy
> Colchester Business Centre, 1 George Williams Way, Colchester CO1 2JS
> andreeatherapytoday@gmail.com
> +44 7448 036017

#### Section 2 — Information I collect

> I collect different categories of information depending on how you interact with me.
>
> **When you use this website**
> - Anonymous analytics data (page views, country-level location, device type, referrer) collected via *{{ analytics platform name from Prompt 12d }}*. This does not identify individual users and does not require cookies.
>
> **When you contact me through the website**
> - Your name
> - Your email address
> - Your phone number (if you choose to share it)
> - The content of any message you send me, including any details you share about why you're contacting me
> - Your preferred contact method
>
> **When you book a free 15-minute call or first session**
> - Everything in the contact form, plus
> - Date and time of your appointment
> - Whether the appointment is in person or online
>
> **When you become a client**
> - Limited personal details for administration (full name, contact details, GP details if relevant, emergency contact)
> - Session notes — handwritten or typed clinical notes I make about our work together
> - Payment records (date and amount of each session paid; I do not hold card details)
> - Any safeguarding information disclosed during sessions

#### Section 3 — Special category data

> Information about your mental and physical health is "special category data" under UK GDPR and gets extra protection. The lawful basis for me processing this kind of data is:
>
> - **Article 9(2)(h)** — provision of health or social care
> - **Article 6(1)(b)** — necessary for the performance of a contract (the therapy contract between us)
>
> I process this data only for the purpose of providing you with therapy and managing my practice.

#### Section 4 — Why I collect this information

> - **To respond to your enquiry** — I can't get back to you about a free call or first session without your name and contact details
> - **To provide you with therapy** — clinical notes are an essential part of safe, ethical practice and are required by my professional registration with BACP
> - **To meet my legal obligations** — I'm required to keep certain records for tax, insurance, and professional registration purposes
> - **To make sure I can contact you in an emergency** — emergency contact details are part of safe practice
> - **To improve the website** — anonymous analytics help me understand what's useful

#### Section 5 — Who I share information with

> I do not sell or share your information for marketing. I share data only when:
>
> - **You ask me to** — for example, writing a letter to your GP with your consent
> - **I'm legally required to** — for example, by court order or to comply with safeguarding obligations where there's a serious risk of harm to you or someone else
> - **I'm using a third-party service to run my practice** — these are listed below and are bound by data processing agreements

> **Third parties I use:**
> - **My website host** — *{{ Vercel — confirm }}* — stores the website itself and processes anonymous visitor data
> - **My email provider** — *{{ Gmail / Google Workspace — confirm with Andreea }}* — receives messages sent through the contact form
> - **My analytics provider** — *{{ Plausible / Vercel Analytics — confirm from Prompt 12d }}* — anonymous traffic statistics only
> - **My clinical supervisor** — clinical material is discussed in supervision in line with BACP requirements, but you are never identified by name
> - **My accountant** — for tax purposes, with no clinical content shared

#### Section 6 — How long I keep your information

> - **Website enquiries that don't lead to therapy:** deleted within 6 months
> - **Therapy notes:** retained for 7 years after the end of our work together, or for 7 years after a young client's 18th birthday, in line with BACP guidance and insurance requirements
> - **Financial records:** retained for 6 years in line with HMRC requirements

#### Section 7 — Your rights

> Under UK GDPR, you have the right to:
>
> - **Be informed** about how I use your data (this policy)
> - **Access** the personal data I hold about you
> - **Rectify** any inaccurate data
> - **Erase** your data (with some exceptions where I'm legally required to retain records)
> - **Restrict processing** of your data in certain circumstances
> - **Object** to certain types of processing
> - **Data portability** — receive your data in a structured, commonly used format
>
> If you want to exercise any of these rights, contact me at andreeatherapytoday@gmail.com.

#### Section 8 — How I keep your information secure

> - All electronic records are stored on password-protected, encrypted devices
> - Paper notes (when used) are stored in a locked filing cabinet at my practice
> - I use secure email and follow BACP guidance on professional communication
> - I am registered with the Information Commissioner's Office (ICO) as a data controller — registration number *{{ CONFIRM WITH ANDREEA }}*

#### Section 9 — Cookies

> This website uses minimal cookies. See the [Cookie Policy](/cookies) for full details.

#### Section 10 — Complaints

> If you're unhappy with how I've handled your data, please contact me first so I have a chance to put things right. You also have the right to complain to the Information Commissioner's Office:
>
> Information Commissioner's Office
> Wycliffe House, Water Lane, Wilmslow, Cheshire SK9 5AF
> 0303 123 1113
> ico.org.uk

#### Section 11 — Changes to this policy

> I may update this policy from time to time. The "Last updated" date at the top will reflect any changes. Significant changes will be communicated to current clients directly.

---

## Page 2 — Terms of Service (`/terms`)

This is a lighter document — most of what would normally be in "terms" for a service business is actually in the therapy contract that clients sign before their first session. The web terms cover use of the website itself.

### Structure

```tsx
<PageHero
  eyebrow="Terms of Use"
  title="Website terms"
  lead="The terms below cover use of this website. The terms of the therapy itself — fees, cancellation, confidentiality — are covered in a separate therapy agreement that we go through together before any first session."
/>
```

#### Section 1 — About the website

> This website is operated by Andreea Horhocea, trading as Next Generation Therapy, based in Colchester, UK. The information on this site is provided in good faith and for general informational purposes about my practice.

#### Section 2 — Not medical advice

> Nothing on this website is medical or psychological advice. The information here is general and not a substitute for professional consultation. If you're in mental health crisis, please contact NHS 111, Samaritans (116 123), Shout (text 85258), or your nearest A&E department.

#### Section 3 — No therapeutic relationship through the website

> Reading this website, contacting me through the form, or having a free 15-minute call does not create a therapeutic relationship. A therapeutic relationship begins only after we have agreed to work together and signed a therapy contract.

#### Section 4 — Intellectual property

> All content on this website (text, images, design) is the copyright of Andreea Horhocea / Next Generation Therapy unless otherwise credited. You're welcome to share links to the site or quote short extracts with attribution, but please don't reproduce substantial content without permission.

#### Section 5 — External links

> This website links to other websites I think might be useful. I don't control those sites and I'm not responsible for their content or their privacy practices.

#### Section 6 — Limitation of liability

> The website is provided "as is." I make reasonable efforts to keep it accurate and up to date, but I can't guarantee that all information is current or error-free. To the maximum extent permitted by law, I'm not liable for any loss or damage arising from your use of the site.

#### Section 7 — Governing law

> These terms are governed by the laws of England and Wales.

---

## Page 3 — Cookie Policy (`/cookies`)

If using a privacy-friendly analytics platform (Plausible, Vercel Analytics), the cookie policy can be very short.

### Structure

```tsx
<PageHero
  eyebrow="Cookie Policy"
  title="What this site stores on your device"
  lead="The short version: this site uses minimal cookies and does not track you across the web."
/>
```

#### Section 1 — What cookies I use

**If using Plausible or Vercel Analytics (preferred):**

> This website uses **no analytics cookies and no tracking cookies**. Visitor statistics are collected anonymously using *{{ analytics platform }}*, which doesn't identify individual users or use cookies.
>
> The only cookies that may be set are:
>
> - **Essential cookies** required for the website to function (for example, remembering whether you've dismissed the cookie banner). These cannot be disabled.

**If using GA4:**

> This website uses Google Analytics 4 to understand how visitors use the site. Google Analytics sets cookies that allow it to recognise returning visitors and track behaviour across sessions. These cookies only run if you've accepted them in the cookie banner.
>
> You can decline analytics cookies at any time by clearing your browser data and choosing "Decline" the next time the banner appears.

#### Section 2 — Third-party content

> If pages on this site embed content from other websites (for example, a YouTube video), those websites may set their own cookies. I have no control over these cookies. I try to minimise embedded third-party content for this reason.

#### Section 3 — Your choices

> You can control or delete cookies through your browser settings. Help guides for the most common browsers:
>
> - [Chrome](https://support.google.com/chrome/answer/95647)
> - [Safari](https://support.apple.com/en-gb/guide/safari/sfri11471/mac)
> - [Firefox](https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox)

#### Section 4 — Changes

> If I change how the site uses cookies, I'll update this page and the date below.

---

## Cookie banner

Per the project memory, the cookie banner has had bugs (covering content). Audit it here:

- It should be a fixed bottom bar, not a modal that blocks the page
- It should have **Accept** and **Decline** buttons of equal prominence
- It should not block scrolling or focus
- It should have a slide-up animation respecting `prefers-reduced-motion`
- It should remember the user's choice (essential cookie or localStorage — flag if a non-cookie alternative is preferred)
- For privacy-friendly analytics, the banner can be **informational only** (no Accept/Decline needed because no tracking cookies are set)

---

## Acceptance criteria

- `npm run lint` passes
- `npx tsc --noEmit` passes
- All three legal pages exist and are complete
- Pages are clearly marked as DRAFT pending review
- Privacy Policy reflects the actual contact form fields, analytics platform, and third parties used
- Cookie Policy matches the actual cookie behaviour
- Cookie banner is functional, accessible, and not covering content
- Footer links to all three legal pages
- All `{{ CONFIRM WITH ANDREEA }}` markers visible in source

---

## Things to flag when done

- Send the Privacy Policy draft to Andreea for review with these specific questions:
  - Confirm her ICO registration number
  - Confirm her email provider (Gmail / Workspace / other)
  - Confirm her clinical supervisor exists for the disclosure section (no name needed)
  - Confirm 7-year retention period matches her insurance requirements
- Send the Terms draft to Andreea for review (lighter — mostly just a sense check)
- Strongly recommend Andreea has these reviewed by a BACP-aware legal advisor or via BACP's member resources before publishing
- Document any places where the existing legal pages had clauses we removed and confirm this is intentional
