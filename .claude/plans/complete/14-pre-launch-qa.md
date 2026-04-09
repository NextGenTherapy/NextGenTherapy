# Prompt 14 — Pre-launch QA and migration safety

**Goal:** Final gate before pushing the rebuilt site to production. This prompt is a comprehensive checklist run, not a build prompt — its job is to catch anything the previous prompts missed and to make sure the migration is reversible if something goes wrong.

**Prereq:** Run AFTER every other prompt in the sequence (01–13). This is the last prompt before launch.

---

## Why this matters

- The previous 22 prompts have made significant structural changes — page deletions, renames, redirects, new components, schema, analytics, legal pages
- Any one of those changes could have introduced a regression
- Without a final pass, you'll discover problems after launch when real users hit them
- Migration safety means: if something is wrong, we can roll back without losing data or breaking SEO

---

## Instructions for Claude Code

This prompt has six parts. Work through them in order. Document everything at `docs/seo-audit/pre-launch-qa.md`.

---

## Part A — Build and lint (the easy gates)

```bash
npm run lint
npx tsc --noEmit
npm run build
npm run test
```

Every command must exit cleanly. No warnings, no errors. Document any warnings that exist as known issues — they should be fixed if possible.

If any of these fail, **stop and fix before proceeding**.

---

## Part B — Page-by-page verification

For every page in the new site structure, verify:

| Page | Renders | Metadata | Schema | Mobile | A11y | Links work |
|------|---------|----------|--------|--------|------|------------|
| `/` | | | | | | |
| `/about` | | | | | | |
| `/services` | | | | | | |
| `/therapy-for-women` | | | | | | |
| `/neurodiversity` | | | | | | |
| `/teen-therapy` | | | | | | |
| `/child-therapy` | | | | | | |
| `/romanian-therapy` | | | | | | |
| `/online-therapy` | | | | | | |
| `/is-this-right-for-you` | | | | | | |
| `/pricing` | | | | | | |
| `/blog` | | | | | | |
| `/faq` | | | | | | |
| `/book-now` | | | | | | |
| `/therapy-in-colchester` | | | | | | |
| `/therapy-in-wivenhoe` | | | | | | |
| `/therapy-in-mersea` | | | | | | |
| `/therapy-in-tiptree` | | | | | | |
| `/therapy-in-marks-tey` | | | | | | |
| `/therapy-in-manningtree` | | | | | | |
| `/therapy-in-clacton` | | | | | | |
| `/therapy-in-ipswich` | | | | | | |
| `/privacy-policy` | | | | | | |
| `/terms` | | | | | | |
| `/cookies` | | | | | | |
| `/not-found` (404) | | | | | | |

For each page, fill in the table:
- **Renders:** loads cleanly with no console errors
- **Metadata:** unique title and description, OG image
- **Schema:** valid JSON-LD per Google's Rich Results Test
- **Mobile:** works at 375px width
- **A11y:** axe-core returns zero critical issues
- **Links work:** every internal link resolves to a real page

Output the filled table to `docs/seo-audit/pre-launch-qa.md`.

---

## Part C — Redirect verification

Test every redirect from Prompt 03. Use `curl -I` to confirm 301 status and the right destination:

```bash
curl -I https://staging.nextgentherapy.co.uk/teenage-therapy
# Expect: HTTP/2 308 (or 301) and Location: /teen-therapy

curl -I https://staging.nextgentherapy.co.uk/neurodiversity-therapy
# Expect: 301 → /neurodiversity

curl -I https://staging.nextgentherapy.co.uk/young-adult-therapy
# Expect: 301 → /therapy-for-women

curl -I https://staging.nextgentherapy.co.uk/lgbtq-therapy
# Expect: 301 → /therapy-for-women#lgbtq

curl -I https://staging.nextgentherapy.co.uk/parent-support
# Expect: 301 → /child-therapy#for-parents

curl -I https://staging.nextgentherapy.co.uk/about-therapy
# Expect: 301 → /is-this-right-for-you
```

Then visit each redirected URL in a browser and confirm:
- Page loads at the new URL
- For anchor redirects (#lgbtq, #for-parents), the page scrolls to the right section
- No redirect loops

---

## Part D — Search Console pre-launch tasks

Before pushing to production:

1. **Submit the staging site to GSC for pre-indexing checks** (if a staging environment exists)
2. **Generate the new sitemap** and verify it lists all the new pages
3. **Use the URL Inspection tool** in GSC for the homepage and at least 3 cornerstones — confirm they're indexable
4. **Test rich results** for FAQ, LocalBusiness, and Person schemas using https://search.google.com/test/rich-results

Document at `docs/seo-audit/gsc-pre-launch.md`.

---

## Part E — Migration safety

### Step 1 — Git tag the current production state

Before pushing the new content live, tag the current production state so it can be rolled back:

```bash
git tag pre-content-overhaul-rollback-point
git push origin pre-content-overhaul-rollback-point
```

This means if something is catastrophically wrong, we can `git checkout pre-content-overhaul-rollback-point` and redeploy in minutes.

### Step 2 — Database backup (if any)

If the site has a database (form submissions, blog content in a CMS, etc.) — back it up and document where the backup lives.

If form submissions are stored, export them now. If blog content is in MDX files in the repo, the git tag covers it.

### Step 3 — DNS and hosting check

Confirm:
- DNS records are unchanged (no accidental changes during the redesign)
- Vercel deployment is targeting the right branch (probably `main` or `production`)
- SSL certificate is valid and not expiring soon
- The www / non-www canonical is consistent (we want `https://www.nextgentherapy.co.uk` everywhere or `https://nextgentherapy.co.uk` everywhere — pick one and 301 the other)

### Step 4 — Email deliverability

Test the contact form by submitting it as a real user. Confirm:
- Email arrives in Andreea's inbox (not spam)
- Email contains all the form fields
- Reply-to address is set to the user's email so Andreea can reply directly
- Submission shows the success state to the user

Then test the failure path:
- Disable network temporarily
- Submit the form
- Confirm a clear error message appears

### Step 5 — Backup of redirected URLs

Document the full list of old URLs and where they redirect to at `docs/seo-audit/url-migration-map.md`. Format:

```
/teenage-therapy        → /teen-therapy             (renamed)
/neurodiversity-therapy → /neurodiversity           (renamed)
/young-adult-therapy    → /therapy-for-women        (merged)
/lgbtq-therapy          → /therapy-for-women#lgbtq  (merged with anchor)
/parent-support         → /child-therapy#for-parents (merged with anchor)
/about-therapy          → /is-this-right-for-you    (merged)
```

This file is the recovery key if anything breaks in the future.

---

## Part F — Content review

Walk through every page one more time looking specifically for:

### `{{ CONFIRM WITH ANDREEA }}` markers

Search the codebase for any markers that haven't been resolved:

```bash
grep -rn "CONFIRM WITH ANDREEA" src/
```

Document every remaining marker in `docs/seo-audit/content-review-pending.md` so Andreea can address them in batches.

### `{{ FLAG FOR LUKE }}` markers

```bash
grep -rn "FLAG FOR LUKE" src/
```

Same — list outstanding items.

### Banned phrases sweep

Final grep for the banned phrases from the positioning brief:

```bash
grep -rni "safe nurturing space\|empowering\|holistic wellness\|unlock your potential\|ready to take the first step\|compassionate support for" src/
```

Should return zero matches.

### Romanian content review

Confirm all Romanian content is still flagged for native speaker review and hasn't accidentally been removed.

### Crisis signposting

Confirm crisis signposting appears on:
- Homepage (somewhere accessible)
- Teen therapy page
- Child therapy page
- Therapy for women page
- Contact / Book Now page
- 404 page (optional but recommended)

Each should list at least: NHS 111, Samaritans, Shout text line, A&E.

---

## Part G — Final pre-launch checklist

Before flipping the switch:

- [ ] All builds and tests pass
- [ ] All pages render correctly at desktop, tablet, and mobile
- [ ] All redirects tested and working
- [ ] Sitemap submitted to Google Search Console
- [ ] Bing Webmaster Tools set up (if applicable)
- [ ] Analytics tracking confirmed working
- [ ] Conversion event firing on contact form submission
- [ ] Privacy policy reflects actual data practices
- [ ] Cookie banner working and not covering content
- [ ] Contact form sends and Andreea receives test submissions
- [ ] All `{{ CONFIRM WITH ANDREEA }}` items either resolved or documented for follow-up
- [ ] Romanian content marked for native speaker review
- [ ] Git rollback tag created
- [ ] DNS, SSL, www-canonical confirmed
- [ ] Schema validates in Google's Rich Results Test for: homepage, About, FAQ, at least one cornerstone
- [ ] Lighthouse scores: Performance 90+, Accessibility 100, Best Practices 90+, SEO 100
- [ ] Robots.txt allows indexing and points to sitemap
- [ ] Open Graph previews tested in Facebook Sharing Debugger
- [ ] No console errors on any key page
- [ ] No `console.log` left in production code
- [ ] No banned phrases anywhere in copy
- [ ] All cornerstones link to at least 2 other cornerstones and 1 location page
- [ ] All location pages link back to at least 3 cornerstones
- [ ] Footer has Service Areas block linking to all 8 location pages
- [ ] Crisis signposting present on every relevant page
- [ ] BACP membership badge linked to her actual BACP profile
- [ ] Pricing page reflects £60 and current cancellation policy
- [ ] Online therapy day (Wednesday) and age limit (16+) consistently stated

---

## Acceptance criteria

- `docs/seo-audit/pre-launch-qa.md` is complete with the page-by-page verification table
- `docs/seo-audit/url-migration-map.md` documents every redirect
- `docs/seo-audit/content-review-pending.md` lists all outstanding `{{ CONFIRM WITH ANDREEA }}` items
- Git rollback tag is in place
- The pre-launch checklist (Part G) is fully completed with no unchecked items, OR each unchecked item has a documented reason and a follow-up plan
- All builds and tests pass
- Lighthouse scores meet targets
- Schema validates

---

## Things to flag when done

- A summary of everything completed
- A separate summary of everything that needs Andreea's input before publish (the `{{ CONFIRM WITH ANDREEA }}` items)
- A separate summary of everything Luke needs to do post-launch (Search Console submissions, social posts, GBP updates)
- The git tag for rollback
- A go / no-go recommendation
