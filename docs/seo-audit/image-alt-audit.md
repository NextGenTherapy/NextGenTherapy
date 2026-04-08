# Image Alt Text Audit

**Audit Date:** 2026-04-08
**Standard:** All images have descriptive alt text, proper sizing, strategic priority usage

---

## Summary

| Metric | Status |
|--------|--------|
| Total Image components | 5 |
| Images with descriptive alt | 5/5 |
| Images with proper sizing | 5/5 |
| Images with appropriate priority | 5/5 |
| **Overall Status** | **PASS** |

---

## Detailed Findings

### 1. Homepage Hero Image

**File:** `src/app/page.tsx` (lines 130-137)

```tsx
<Image
  src="/images/andreea.jpg"
  alt="Andreea Horhocea - BACP registered psychotherapist in Colchester"
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 450px"
  priority
  className={styles.heroImage}
/>
```

| Attribute | Value | Status |
|-----------|-------|--------|
| Alt text | Descriptive, specific, includes credentials | Pass |
| Sizing | `fill` with responsive `sizes` | Pass |
| Priority | Yes (above-fold hero) | Appropriate |

---

### 2. Therapy for Women - Room Image

**File:** `src/app/therapy-for-women/page.tsx` (lines 203-209)

```tsx
<Image
  src="/images/room-opt.jpg"
  alt="Therapy room at Colchester Business Centre — comfortable seating and calming atmosphere"
  fill
  sizes="(max-width: 768px) 100vw, 400px"
  className={styles.image}
/>
```

| Attribute | Value | Status |
|-----------|-------|--------|
| Alt text | Descriptive, contextual, specific | Pass |
| Sizing | `fill` with responsive `sizes` | Pass |
| Priority | Not set (below-fold) | Appropriate |

---

### 3. About Page - Andreea Portrait

**File:** `src/app/about/page.tsx` (lines 142-149)

```tsx
<Image
  src="/images/andreea.jpg"
  alt="Andreea Horhocea — Psychodynamic Psychotherapist"
  fill
  sizes="(max-width: 768px) 100vw, 400px"
  priority
  className={styles.image}
/>
```

| Attribute | Value | Status |
|-----------|-------|--------|
| Alt text | Descriptive, professional | Pass |
| Sizing | `fill` with responsive `sizes` | Pass |
| Priority | Yes (prominent section) | Appropriate |

---

### 4. Blog Post Layout - Author Photo

**File:** `src/components/ui/BlogPostLayout.tsx` (lines 68-74)

```tsx
<Image
  src="/images/andreea.jpg"
  alt="Andreea Horhocea, Psychodynamic Psychotherapist"
  width={64}
  height={64}
  className={styles.authorPhoto}
/>
```

| Attribute | Value | Status |
|-----------|-------|--------|
| Alt text | Descriptive, professional | Pass |
| Sizing | Explicit `width={64}` `height={64}` (avatar) | Pass |
| Priority | Not set (below-fold) | Appropriate |

---

### 5. Footer - BACP Badge

**File:** `src/components/layout/footer.tsx` (line 27)

```tsx
<Image
  src="/images/bacp.jpg"
  alt="BACP Registered Member"
  width={60}
  height={60}
/>
```

| Attribute | Value | Status |
|-----------|-------|--------|
| Alt text | Clear, concise, meaningful | Pass |
| Sizing | Explicit `width={60}` `height={60}` (badge) | Pass |
| Priority | Not set (footer) | Appropriate |

---

## Summary Table

| Location | Image | Alt Text | Sizing | Priority | Status |
|----------|-------|----------|--------|----------|--------|
| Homepage | `/images/andreea.jpg` | Descriptive | fill + sizes | Yes | Pass |
| Therapy for Women | `/images/room-opt.jpg` | Descriptive | fill + sizes | No | Pass |
| About | `/images/andreea.jpg` | Descriptive | fill + sizes | Yes | Pass |
| BlogPostLayout | `/images/andreea.jpg` | Descriptive | width/height | No | Pass |
| Footer | `/images/bacp.jpg` | Clear | width/height | No | Pass |

---

## Compliance Checklist

- [x] All Image components have descriptive, non-empty alt text
- [x] All images have proper sizing (fill+sizes or explicit dimensions)
- [x] Priority prop used only on above-fold images
- [x] No generic alt text (e.g., "image", "photo")
- [x] All images use Next.js Image component (no raw `<img>` tags)
- [x] Images loaded from `/images/` directory

---

## Best Practices Observed

1. **Alt text quality:** All images have meaningful, contextual descriptions
2. **Responsive sizing:** Correct use of `sizes` attribute for flexible layouts
3. **Priority optimization:** Strategic use on hero/prominent images only
4. **Accessibility ready:** All alt text would work for screen readers

---

## Recommendations

**No issues found.** Current implementation follows all best practices.

### For Future Images

When adding new images:
1. Always include descriptive alt text
2. Use `fill` with `sizes` for flexible containers
3. Use explicit `width`/`height` for fixed-size elements
4. Only add `priority` to above-fold LCP images
5. Optimize images before adding (use `-opt` suffix pattern)
