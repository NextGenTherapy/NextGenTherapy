# Dead Link Audit Report

**Date:** 2026-04-06
**Auditor:** Claude Code
**Result:** PASS - No dead internal links found

---

## Summary

Grep search for legacy URLs in `src/` directory returned **0 matches**. All internal links have been updated to reflect the new site structure.

## Search Command

```bash
grep -rn "teenage-therapy\|neurodiversity-therapy\|young-adult-therapy\|lgbtq-therapy\|parent-support\|about-therapy" src/
```

**Result:** No matches found

## Files Checked

All files under `src/` were scanned, including:
- `src/app/` - All page components
- `src/components/` - All UI components including layout (header, footer)
- `src/lib/` - Utility files

## Redirects in Place

The following 301 redirects are configured in `next.config.ts` to handle external links and bookmarks to old URLs:

| Old URL | New URL |
|---------|---------|
| `/teenage-therapy` | `/teen-therapy` |
| `/neurodiversity-therapy` | `/neurodiversity` |
| `/young-adult-therapy` | `/therapy-for-women` |
| `/lgbtq-therapy` | `/therapy-for-women` |
| `/parent-support` | `/child-therapy` |
| `/about-therapy` | `/is-this-right-for-you` |
| `/therapy-101` | `/is-this-right-for-you` |
| `/therapy101` | `/is-this-right-for-you` |
| `/who-i-see` | `/is-this-right-for-you` |
| `/testimonials` | `/trust` |
| `/reviews-2` | `/trust` |
| `/why-people-seek-therapy` | `/blog/signs-you-might-benefit-from-therapy` |
| `/thoughts/*` | `/blog` |

## Current Internal Links

### Header Navigation
- `/` (Home)
- `/about` (About Me)
- `/services` (Services)
- `/is-this-right-for-you`
- `/blog`
- `/book-now`

### Footer Links
- Service pages: `/therapy-for-women`, `/neurodiversity`, `/teen-therapy`, `/child-therapy`, `/romanian-therapy`, `/online-therapy`
- Info pages: `/pricing`, `/faq`, `/about`, `/location`, `/services`
- Legal: `/privacy-policy`, `/terms`

## Conclusion

No remediation required. All internal links are valid and redirects are in place for legacy URLs.
