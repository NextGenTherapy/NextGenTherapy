# Content Review — Items Pending Andreea

**Date:** 9 April 2026
**Status:** 8 items pending review

---

## Hard Blockers (Must Complete Before Launch)

### 1. ICO Registration Number

**File:** `src/app/privacy-policy/page.tsx`
**Line:** 123

```tsx
{/* {{ CONFIRM WITH ANDREEA: ICO registration number }} */}
```

**Action Required:**
- Andreea needs to provide ICO registration number
- Insert number at line 123
- ICO registration is required for UK GDPR compliance

**How to obtain:**
- Register at https://ico.org.uk/registration/
- Fee: £40-£60 depending on circumstances
- Processing time: Usually immediate online

---

## Soft Blockers (Should Complete, Not Launch-Blocking)

### 2. About Page — Romanian Background

**File:** `src/app/about/page.tsx`
**Line:** 302

```tsx
{/* {{ CONFIRM WITH ANDREEA: a single sentence about her own Romanian background if she wants to include it, otherwise delete this last sentence }} */}
```

**Context:**
The Romanian section on About page could include a personal touch about Andreea's own background. This is optional but would add authenticity.

**Options:**
- A) Add 1 sentence about personal Romanian connection
- B) Keep section as-is without personal detail
- C) Remove Romanian mention from About page entirely

---

### 3. About Page — Romanian CTA Phrasing

**File:** `src/app/about/page.tsx`
**Line:** 304

```tsx
{/* {{ CONFIRM WITH ANDREEA }}: Romanian CTA phrasing */}
```

**Context:**
The call-to-action text linking to the Romanian therapy page needs approval.

**Current text:** (needs review)

---

### 4. Neurodiversity Page — Room Photo

**File:** `src/app/neurodiversity/page.tsx`
**Line:** 210

```tsx
{/* {{ CONFIRM WITH ANDREEA: room photo }} */}
```

**Context:**
The sensory-aware therapy room is a key selling point for neurodivergent clients. A photo showing:
- Soft lighting
- Plants
- Calm colors
- Fidgets available
- Comfortable seating

Would strengthen the page significantly.

**Action:**
- Andreea to provide room photo
- Or confirm placeholder should remain

---

## Romanian Translation Reviews (4 items)

These are professional translations that Andreea should verify for accuracy and tone.

### 5. Romanian Therapy — Paragraph 1

**File:** `src/app/romanian-therapy/page.tsx`
**Line:** 126

```tsx
{/* {{ CONFIRM WITH ANDREEA — Romanian translation below is provisional }} */}
```

---

### 6. Romanian Therapy — Paragraph 2

**File:** `src/app/romanian-therapy/page.tsx`
**Line:** 182

```tsx
{/* {{ CONFIRM WITH ANDREEA — Romanian translation below is provisional }} */}
```

---

### 7. Romanian Therapy — Paragraph 3

**File:** `src/app/romanian-therapy/page.tsx`
**Line:** 255

```tsx
{/* {{ CONFIRM WITH ANDREEA — Romanian translation below is provisional }} */}
```

---

### 8. Romanian Therapy — Paragraph 4

**File:** `src/app/romanian-therapy/page.tsx`
**Line:** 327

```tsx
{/* {{ CONFIRM WITH ANDREEA — Romanian translation below is provisional }} */}
```

**Action for all 4:**
- Review Romanian text for accuracy
- Verify tone matches English version
- Check for any cultural nuances
- Confirm or provide corrections

---

## Summary Table

| # | Item | File | Line | Priority | Blocking |
|---|------|------|------|----------|----------|
| 1 | ICO Registration Number | privacy-policy/page.tsx | 123 | **CRITICAL** | **YES** |
| 2 | Romanian Background | about/page.tsx | 302 | Low | No |
| 3 | Romanian CTA | about/page.tsx | 304 | Low | No |
| 4 | Room Photo | neurodiversity/page.tsx | 210 | Medium | No |
| 5-8 | Romanian Translations | romanian-therapy/page.tsx | 126, 182, 255, 327 | Medium | No |

---

## How to Resolve

### For Luke

Once Andreea provides answers:

1. **ICO Number:**
   ```bash
   # Edit privacy-policy/page.tsx line 123
   # Replace placeholder with actual number
   ```

2. **Romanian sections:**
   - If approved, remove the comment markers
   - If changes needed, update text and remove markers

3. **Room photo:**
   - Add image to `/public/images/`
   - Update component to display image

### For Andreea

Please review each item and provide:
1. ICO registration number (REQUIRED)
2. Decision on Romanian background sentence (A/B/C above)
3. Approval or changes for Romanian CTA
4. Room photo or confirmation to skip
5. Translation approval or corrections

---

## After Resolution

Once all items are resolved:
1. Remove all `{{ CONFIRM WITH ANDREEA }}` comments
2. Run `npm run lint && npm run build` to verify
3. Update this document with "RESOLVED" status

---

*Generated: 9 April 2026*
