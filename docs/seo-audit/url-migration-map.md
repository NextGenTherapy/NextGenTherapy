# URL Migration Map

**Date:** 9 April 2026
**Migration Type:** Content Overhaul

---

## Overview

This document maps all URL changes from the old site structure to the new architecture.

---

## Page Consolidations

### Merged into `/therapy-for-women`
| Old URL | Status | Notes |
|---------|--------|-------|
| `/young-adult-therapy` | Redirected | Young adult content merged |
| `/lgbtq-therapy` | Redirected | LGBTQ+ section added |
| (new page) | N/A | Primary women's niche page |

### Merged into `/child-therapy`
| Old URL | Status | Notes |
|---------|--------|-------|
| `/parent-support` | Redirected | #for-parents anchor section |
| (existing) | Updated | Enhanced with parent content |

### Merged into `/is-this-right-for-you`
| Old URL | Status | Notes |
|---------|--------|-------|
| `/about-therapy` | Redirected | Qualifying page |
| `/therapy-101` | Redirected | Old URL variant |
| `/therapy101` | Redirected | No-hyphen variant |
| `/who-i-see` | Redirected | Old page name |

### Renamed/Shortened
| Old URL | New URL | Notes |
|---------|---------|-------|
| `/teenage-therapy` | `/teen-therapy` | Shorter URL |
| `/neurodiversity-therapy` | `/neurodiversity` | Removed redundant suffix |
| `/testimonials` | `/trust` | Rebranded |
| `/reviews-2` | `/trust` | Duplicate page |

---

## New Pages (No Redirect Needed)

| New URL | Description |
|---------|-------------|
| `/therapy-for-women` | New cornerstone page |
| `/romanian-therapy` | New niche page |
| `/is-this-right-for-you` | New qualifying page |
| `/trust` | New (renamed from testimonials) |
| `/therapy-in-colchester` | New location page |
| `/therapy-in-wivenhoe` | New location page |
| `/therapy-in-mersea` | New location page |
| `/therapy-in-tiptree` | New location page |
| `/therapy-in-marks-tey` | New location page |
| `/therapy-in-manningtree` | New location page |
| `/therapy-in-clacton` | New location page |
| `/therapy-in-ipswich` | New location page |
| `/youth-family-faq` | New specialized FAQ |

---

## Blog Migration

### Removed Posts (Redirect to Hub)
| Old URL | Redirect To | Reason |
|---------|-------------|--------|
| `/blog/5-common-myths-about-body-image-and-eating-habits` | `/blog` | Content outdated |

### Merged Posts
| Old URL | Redirect To | Reason |
|---------|-------------|--------|
| `/blog/understanding-psychodynamic-therapy` | `/blog/understanding-different-therapy-approaches` | Content consolidated |
| `/blog/managing-anxiety-between-sessions` | `/blog/understanding-anxiety-young-people` | Content consolidated |
| `/blog/managing-anxiety-practical-tips` | `/blog/understanding-anxiety-young-people` | Content consolidated |

### Legacy Blog Structure
| Old Pattern | Redirect To | Notes |
|-------------|-------------|-------|
| `/thoughts/*` | `/blog` | Old blog URL structure |
| `/why-people-seek-therapy` | `/blog/signs-you-might-benefit-from-therapy` | Was standalone page |

---

## Current Blog Posts (Active)

| URL | Title |
|-----|-------|
| `/blog/adolescent-depression-struggles` | Adolescent depression |
| `/blog/body-image-and-eating-difficulties-therapy` | Body image therapy |
| `/blog/burnout-vs-depression` | Burnout vs depression |
| `/blog/digital-wellbeing-young-people-mental-health` | Digital wellbeing |
| `/blog/first-session-what-to-expect` | First session guide |
| `/blog/helping-young-people-friendship-difficulties-social-anxiety` | Social anxiety |
| `/blog/high-functioning-anxiety-women` | High-functioning anxiety |
| `/blog/how-long-does-therapy-take` | Therapy duration |
| `/blog/i-didnt-become` | Personal story |
| `/blog/late-diagnosed-adhd-women` | Late ADHD diagnosis |
| `/blog/neurodivergent-burnout-masking` | Neurodivergent burnout |
| `/blog/preparing-for-first-therapy-session` | Session preparation |
| `/blog/romanian-therapy-between-cultures` | Romanian therapy |
| `/blog/school-avoidance-education-feels-impossible` | School avoidance |
| `/blog/should-my-teenager-see-a-therapist` | Teen therapy guide |
| `/blog/signs-you-might-benefit-from-therapy` | Signs for therapy |
| `/blog/supporting-child-through-therapy` | Supporting children |
| `/blog/understanding` | Understanding therapy |
| `/blog/understanding-anxiety-young-people` | Youth anxiety |
| `/blog/understanding-different-therapy-approaches` | Therapy approaches |
| `/blog/understanding-different-types-therapy-young-people` | Youth therapy types |
| `/blog/what-is-psychodynamic-therapy` | Psychodynamic intro |
| `/blog/youth-mental-health-awareness-colchester` | Local awareness |

---

## Unchanged URLs

These pages retained their URLs:
- `/` (homepage)
- `/about`
- `/services`
- `/neurodiversity` (shortened from neurodiversity-therapy)
- `/teen-therapy` (renamed from teenage-therapy)
- `/child-therapy`
- `/online-therapy`
- `/pricing`
- `/location`
- `/book-now`
- `/faq`
- `/blog`
- `/privacy-policy`
- `/terms`
- `/cookies`
- `/accessibility`

---

## Redirect Implementation

All redirects are configured in `next.config.ts`:

```typescript
async redirects() {
  return [
    // www to non-www
    { source: '/:path*', has: [{ type: 'host', value: 'www.nextgentherapy.co.uk' }],
      destination: 'https://nextgentherapy.co.uk/:path*', permanent: true },

    // Page consolidations
    { source: '/teenage-therapy', destination: '/teen-therapy', permanent: true },
    { source: '/neurodiversity-therapy', destination: '/neurodiversity', permanent: true },
    // ... etc
  ];
}
```

---

## Link Equity Preservation

### High-Value Redirects
These URLs likely had external backlinks:
1. `/testimonials` → `/trust`
2. `/lgbtq-therapy` → `/therapy-for-women`
3. `/teenage-therapy` → `/teen-therapy`

### Internal Link Updates
All internal links have been updated to use new URLs directly. No internal redirect chains.

---

## Monitoring Checklist

Post-launch, verify in GSC:
- [ ] No 404 errors for old URLs
- [ ] Redirects showing as "Redirected" not "Error"
- [ ] New pages being indexed
- [ ] Old pages showing redirect status

---

*Generated: 9 April 2026*
