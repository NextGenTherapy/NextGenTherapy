# Next Generation Therapy - Visual Redesign Audit

> Comprehensive codebase review for visual redesign planning
> Generated: March 2026

---

## 1. Project Structure

### Framework & Technology
- **Framework**: Next.js 15.3.2 with App Router
- **Language**: TypeScript 5.2
- **Styling**: SCSS Modules (CSS Modules with Sass)
- **Testing**: Jest + React Testing Library
- **Analytics**: Vercel Analytics + Speed Insights
- **CMS**: Sanity & Notion integration

### Directory Structure
```
src/
├── app/                          # App Router pages (20 routes)
│   ├── page.tsx                  # Homepage
│   ├── layout.tsx                # Root layout
│   ├── loading.tsx               # Global loading state
│   ├── error.tsx                 # Global error boundary
│   ├── not-found.tsx             # 404 page
│   ├── about/                    # About page
│   ├── about-therapy/            # About therapy page
│   ├── blog/                     # Blog listing + [slug]
│   ├── book-now/                 # Booking page
│   ├── child-therapy/            # Specialized service
│   ├── teenage-therapy/          # Specialized service
│   ├── young-adult-therapy/      # Specialized service
│   ├── faq/                      # FAQ page
│   ├── lgbtq-therapy/            # Specialized service
│   ├── location/                 # Location/contact page
│   ├── neurodiversity-therapy/   # Specialized service
│   ├── parent-support/           # Parent support page
│   ├── pricing/                  # Pricing page
│   ├── privacy-policy/           # Legal page
│   ├── services/                 # Services overview
│   ├── terms/                    # Legal page
│   ├── trust/                    # Trust signals page
│   └── youth-family-faq/         # Youth FAQ page
│
├── components/                   # 18 shared components
│   ├── forms/                    # Form components
│   │   └── contact-form.tsx      # Contact form + module.scss
│   ├── layout/                   # Layout components
│   │   ├── header.tsx            # Site header + module.scss
│   │   ├── footer.tsx            # Site footer + module.scss
│   │   ├── CookieConsent.tsx     # GDPR consent + module.scss
│   │   ├── ErrorBoundary.tsx     # Error handling + module.scss
│   │   ├── legal-navigation.tsx  # Legal nav + module.scss
│   │   ├── ConditionalAnalytics.tsx
│   │   ├── ConditionalVercelAnalytics.tsx
│   │   └── WebVitalsReporter.tsx
│   ├── seo/                      # SEO schema components
│   │   ├── LocalBusinessSchema.tsx
│   │   ├── BlogPostSchema.tsx
│   │   ├── BreadcrumbSchema.tsx
│   │   ├── PersonSchema.tsx
│   │   ├── ServiceSchema.tsx
│   │   └── WebsiteSchema.tsx
│   └── ui/                       # UI components
│       ├── button.tsx            # Button + module.scss
│       ├── buttonLinks.module.scss
│       ├── scroll-to-top.tsx     # Scroll button (inline styles)
│       ├── scroll-to-top.module.scss # Unused module
│       └── GoogleMapEmbed.tsx    # Map embed (inline styles)
│
├── lib/                          # Utilities & API clients
└── styles/                       # Global styles
    ├── variables.scss            # Design tokens (127 lines)
    └── globals.scss              # Global styles (212 lines)

public/
├── images/                       # 27 image assets
├── favicon.ico
├── manifest.json
└── sitemap.xml
```

### Routing Architecture
- Single `layout.tsx` wrapping all pages
- No nested layouts or route groups
- Each page has its own `.module.scss` file
- Consistent page structure: metadata export + default component

---

## 2. Styling Audit

### Approach
**CSS Modules with SCSS**: Each page and component has a co-located `.module.scss` file that provides scoped styling with Sass features.

### Design Token System (`variables.scss`)

#### Colour Tokens (30 variables)
| Category | Token | Value |
|----------|-------|-------|
| Primary | `--color-primary` | `#ffffff` |
| Background | `--color-background` | `linear-gradient(135deg, #d6e4f0 0%, #ffffff 50%, #c2d9ec 100%)` |
| Text | `--color-text-primary` | `#000000` |
| Text | `--color-text-secondary` | `#ffffff` |
| Accent | `--color-accent` | `#4a6a7a` |
| Accent | `--color-accent-hover` | `#2a4a5a` |
| Accent | `--color-accent-light` | `#b8c8d4` |
| Header | `--color-header-background` | `#164b39` |
| Header | `--color-header-accent-hover` | `#a8c8d8` |
| Button | `--color-button` | `#164b39` |
| Button | `--color-button-hover` | `#4a6b7a` |
| Status | `--color-success` | `#2e7d32` |
| Status | `--color-error` | `#d32f2f` |
| Status | `--color-info` | `#1976d2` |
| Border | `--color-border` | `#ccc` |
| Border | `--color-border-light` | `rgba(0, 0, 0, 0.2)` |
| Disabled | `--color-disabled` | `#cccccc` |
| Disabled | `--color-disabled-text` | `#595959` |

#### Spacing Tokens (11 variables)
| Token | Mobile | Tablet | Desktop |
|-------|--------|--------|---------|
| `--spacing-xs` | 4px | 4px | 4px |
| `--spacing-small` | 8px | 8px | 8px |
| `--spacing-medium` | 12px | 12px | 12px |
| `--spacing-large` | 16px | 20px | 24px |
| `--spacing-xlarge` | 24px | 30px | 36px |
| `--spacing-xxlarge` | 32px | 40px | 48px |
| `--spacing-section` | 60px | 80px | 120px |
| `--spacing-hero` | 80px | 100px | 140px |

#### Breakpoints
| Token | Value |
|-------|-------|
| `--breakpoint-mobile` | 480px |
| `--breakpoint-tablet` | 768px |
| `--breakpoint-desktop` | 1024px |
| `--breakpoint-large` | 1200px |

### CSS Module File Count: 31 files
- **Page modules**: 20 files (one per page)
- **Component modules**: 11 files
- **Global styles**: 2 files

### Issues Identified

#### 1. Undefined CSS Variables (HIGH PRIORITY)
Two variables are used but never defined:
- `--color-background-secondary` - Used in 4 files
- `--border-width-thin` - Used in 3 files

**Affected files:**
- `src/app/location/location.module.scss` (4 occurrences)
- `src/app/pricing/pricing.module.scss` (11 occurrences)
- `src/app/book-now/book-now.module.scss` (1 occurrence)

#### 2. Inline Styles Bypassing Design System (MEDIUM PRIORITY)
Two components use hardcoded inline styles instead of CSS variables:

**scroll-to-top.tsx** (lines 11-31):
```tsx
style={{
  position: 'fixed',
  bottom: '30px',
  right: '30px',
  backgroundColor: '#164b39',  // Should be var(--color-button)
  color: 'white',
  fontSize: '20px',
  // ... more hardcoded values
}}
```

**GoogleMapEmbed.tsx** (lines 12, 19):
```tsx
style={{ border: 0, borderRadius: '8px' }}
style={{ fontSize: '0.875rem', color: '#666', marginTop: '0.5rem' }}
```

#### 3. Safari Debug Code (LOW PRIORITY)
`globals.scss` (lines 173-185) contains debug/fallback code that should be cleaned up:
```scss
/* Debug styles for Safari */
body {
  background-color: #fefae0 !important; /* Fallback for Safari */
  color: #000000 !important;
}
```

#### 4. Unused CSS Module
`scroll-to-top.module.scss` exists but is not imported by `scroll-to-top.tsx` (uses inline styles instead).

---

## 3. Component Audit

### Layout Components

| Component | File | Styling | Notes |
|-----------|------|---------|-------|
| Header | `layout/header.tsx` | CSS Module | Mobile hamburger menu, responsive |
| Footer | `layout/footer.tsx` | CSS Module | Social links, copyright |
| CookieConsent | `layout/CookieConsent.tsx` | CSS Module | GDPR compliant |
| ErrorBoundary | `layout/ErrorBoundary.tsx` | CSS Module | React error boundary |
| LegalNavigation | `layout/legal-navigation.tsx` | CSS Module | Privacy/terms nav |

### UI Components

| Component | File | Styling | Notes |
|-----------|------|---------|-------|
| Button | `ui/button.tsx` | CSS Module | Primary CTA button |
| ScrollToTop | `ui/scroll-to-top.tsx` | **Inline styles** | Fixed position, needs refactor |
| GoogleMapEmbed | `ui/GoogleMapEmbed.tsx` | **Inline styles** | Google Maps iframe |

### SEO Components (No styling - render JSON-LD)

| Component | Purpose |
|-----------|---------|
| LocalBusinessSchema | Business structured data |
| BlogPostSchema | Article structured data |
| BreadcrumbSchema | Navigation structured data |
| PersonSchema | Author/therapist data |
| ServiceSchema | Service offerings data |
| WebsiteSchema | Site-wide metadata |

### Analytics Components (No styling)

| Component | Purpose |
|-----------|---------|
| ConditionalAnalytics | Google Analytics (consent-aware) |
| ConditionalVercelAnalytics | Vercel Analytics (consent-aware) |
| WebVitalsReporter | Core Web Vitals tracking |

### Forms

| Component | File | Styling | Notes |
|-----------|------|---------|-------|
| ContactForm | `forms/contact-form.tsx` | CSS Module | Resend integration |

---

## 4. Typography Audit

### Font Loading Strategy
**No next/font** - System font stack via CSS variable:
```scss
--font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
```

**Impact**:
- No font loading delay (uses system fonts)
- Limited typography control
- Inconsistent rendering across platforms

### Type Scale

| Token | Mobile | Tablet | Desktop |
|-------|--------|--------|---------|
| `--font-size-small` | 0.875rem | 0.875rem | 0.875rem |
| `--font-size-base` | 1rem | 1rem | 1rem |
| `--font-size-medium` | 1.125rem | 1.125rem | 1.125rem |
| `--font-size-large` | 1.25rem | 1.25rem | 1.25rem |
| `--font-size-h6` | 0.875rem | 0.875rem | 0.875rem |
| `--font-size-h5` | 1rem | 1rem | 1rem |
| `--font-size-h4` | 1.125rem | 1.25rem | 1.5rem |
| `--font-size-h3` | 1.25rem | 1.5rem | 1.75rem |
| `--font-size-h2` | 1.5rem | 1.75rem | 2rem |
| `--font-size-h1` | 2rem | 2.25rem | 2.5rem |
| `--font-size-logo` | 1.75rem | 2rem | 2.25rem |

### Global Typography Rules (`globals.scss`)
- All headings: `font-weight: bold`
- Base font size: `16px` (html)
- Font smoothing: `-webkit-font-smoothing: antialiased`
- Small phone clamp: `font-size: clamp(1.5rem, 5vw, 2rem)` for h1

### Issues
1. **No web fonts** - Limited brand personality
2. **Basic weight system** - Only "bold" for headings
3. **No line-height tokens** - Inconsistent vertical rhythm

---

## 5. Colour Audit

### Brand Palette

| Colour | Hex | Usage |
|--------|-----|-------|
| Forest Green | `#164b39` | Header, buttons, primary brand |
| Slate Blue | `#4a6a7a` | Accent, links |
| Dark Slate | `#2a4a5a` | Hover states |
| Light Blue-Grey | `#b8c8d4` | Accent light, borders |
| Soft Blue | `#a8c8d8` | Header hover |
| White | `#ffffff` | Primary, cards |
| Black | `#000000` | Text primary |
| Grey | `#ccc` | Borders |

### Background
Primary background is a gradient:
```scss
linear-gradient(135deg, #d6e4f0 0%, #ffffff 50%, #c2d9ec 100%)
```
This creates a soft blue-to-white-to-blue diagonal gradient.

### Status Colours (WCAG 2.1 AA Compliant)
| Status | Background | Text |
|--------|------------|------|
| Success | `#e8f5e8` | `#2e7d32` |
| Error | `#ffeaea` | `#d32f2f` |
| Info | `#e3f2fd` | `#1976d2` |

### Accessibility Modes
```scss
/* High contrast mode support */
@media (prefers-contrast: high) {
  --color-background: #ffffff;
  --color-text-primary: #000000;
  --color-accent: #0000ff;
}
```

### Issues
1. **Inconsistent colour naming** - Mix of descriptive (`header-background`) and semantic (`accent`) naming
2. **Missing tokens** - `--color-background-secondary` undefined but used
3. **Hardcoded colours** in inline styles bypass the system

---

## 6. Image & Asset Audit

### Image Inventory (`/public/images/`)

| File | Size | Optimized Version | Format | Usage |
|------|------|-------------------|--------|-------|
| adult.jpg | 2.1 MB | No | JPEG | Service page |
| andreea.jpg | 114 KB | Yes | JPEG | About/profile |
| bacp.jpg | 24 KB | Yes | JPEG | Trust badge |
| bacp.png | <1 KB | Yes | PNG | Trust badge |
| board-games.jpg | 4.3 MB | board-games-opt.jpg (164 KB) | JPEG | Child therapy |
| book-now.jpg | 348 KB | No | JPEG | Booking page |
| child.jpg | 252 KB | No | JPEG | Service page |
| default-social-share.jpg | 62 KB | Yes | JPEG | OG image |
| doll-house.jpg | 3.7 MB | doll-house-opt.jpg (172 KB) | JPEG | Child therapy |
| facebook.png | 89 KB | facebook-opt.png (4 KB) | PNG | Social link |
| instagram.png | 2.5 MB | instagram-opt.png (11 KB) | PNG | Social link |
| learn-more.jpg | 316 KB | No | JPEG | CTA section |
| logo.jpg | 227 KB | No | JPEG | Site logo |
| office.jpg | 3.6 MB | office-opt.jpg (117 KB) | JPEG | Location page |
| room.jpg | 3.2 MB | room-opt.jpg (174 KB) | JPEG | Location page |
| room-2.jpg | 3.8 MB | room-2-opt.jpg (114 KB) | JPEG | Location page |
| services.jpg | 654 KB | No | JPEG | Services page |
| shelf.jpeg | 3.0 MB | shelf-opt.jpeg (93 KB) | JPEG | Decoration |

### Image Loading Pattern
All images use Next.js `<Image>` component with proper `priority` for above-fold content.

### Issues

#### 1. Large Unoptimized Images (HIGH PRIORITY)
7 images over 1MB without optimized versions:
- `adult.jpg` - 2.1 MB
- `book-now.jpg` - 348 KB (borderline)
- `learn-more.jpg` - 316 KB
- `services.jpg` - 654 KB
- `logo.jpg` - 227 KB (used on every page)
- `child.jpg` - 252 KB

#### 2. Duplicate Assets
Original and optimized versions both exist:
- `board-games.jpg` (4.3 MB) + `board-games-opt.jpg` (164 KB)
- `instagram.png` (2.5 MB) + `instagram-opt.png` (11 KB)
- etc.

**Recommendation**: Delete originals, use only optimized versions

#### 3. Format Optimization
All images are JPEG/PNG. Consider WebP/AVIF for better compression.

#### 4. Social Icons
`instagram.png` is 2.5 MB for a social icon - this is excessive.

---

## 7. Recommendations

### Keep (No Changes Needed)

| Area | Rationale |
|------|-----------|
| CSS Modules approach | Well-organized, scoped styles, good DX |
| Design token system | Solid foundation for theming |
| Responsive breakpoints | Good mobile-first approach |
| Component structure | Clean separation of concerns |
| SEO schema components | Comprehensive structured data |
| Status colour system | WCAG compliant |
| Accessibility features | Skip links, sr-only, reduced motion |

### Rewrite/Refactor

| Area | Priority | Action |
|------|----------|--------|
| scroll-to-top.tsx | HIGH | Move inline styles to CSS Module |
| GoogleMapEmbed.tsx | MEDIUM | Move inline styles to CSS Module |
| Safari debug code | LOW | Remove lines 173-185 in globals.scss |
| Undefined variables | HIGH | Add `--color-background-secondary` and `--border-width-thin` to variables.scss |
| Unused module | LOW | Delete or use `scroll-to-top.module.scss` |

### Add (New Additions)

| Area | Priority | Recommendation |
|------|----------|----------------|
| Web fonts | MEDIUM | Add next/font with brand typeface |
| Image optimization | HIGH | Compress remaining large images, delete originals |
| WebP/AVIF | MEDIUM | Add modern format support |
| Font weight tokens | LOW | Add `--font-weight-normal`, `--font-weight-medium`, `--font-weight-bold` |
| Line height tokens | LOW | Add `--line-height-tight`, `--line-height-normal`, `--line-height-relaxed` |
| Dark mode tokens | LOW | Prepare for future dark mode support |

---

## 8. Summary

### Current State Assessment

**Strengths:**
- Well-structured Next.js 15 App Router project
- Consistent CSS Modules pattern with SCSS
- Comprehensive design token system in `variables.scss`
- Good mobile-first responsive approach
- Strong SEO foundation with structured data
- Accessibility features (skip links, reduced motion, high contrast)

**Weaknesses:**
- 2 undefined CSS variables causing potential rendering issues
- 2 components with inline styles bypassing design system
- 7 large unoptimized images (>300KB each)
- No web fonts (using system fonts)
- Safari debug code in production

### Recommended Implementation Order

1. **Critical Fixes (Do First)**
   - Define missing CSS variables (`--color-background-secondary`, `--border-width-thin`)
   - Refactor `scroll-to-top.tsx` to use CSS Module
   - Remove Safari debug code from globals.scss

2. **Image Optimization (High Impact)**
   - Compress `adult.jpg`, `services.jpg`, `logo.jpg`, `learn-more.jpg`, `book-now.jpg`, `child.jpg`
   - Delete original unoptimized versions where `-opt` exists
   - Consider WebP format for all images

3. **Component Cleanup (Medium Priority)**
   - Refactor `GoogleMapEmbed.tsx` to use CSS Module
   - Delete unused `scroll-to-top.module.scss` or wire it up

4. **Typography Enhancement (Nice to Have)**
   - Implement next/font with brand typeface
   - Add font-weight and line-height tokens
   - Review type scale for visual hierarchy

5. **Future Enhancements**
   - Prepare dark mode token structure
   - Consider CSS custom property scoping for theming
   - Evaluate Tailwind CSS or similar for rapid iteration

### Redesign Readiness Score: 7/10

The codebase is well-prepared for a visual redesign. The existing design token system provides a solid foundation for implementing new colours, typography, and spacing. The critical fixes should be addressed before major visual changes to ensure consistency.

---

*End of Audit Report*
