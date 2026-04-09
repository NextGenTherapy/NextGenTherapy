# Prompt 12c — Open Graph, social sharing, and favicons

## COMPLETED: 2026-04-08

### What was done:
- Created Playwright script (`scripts/generate-og-images.ts`) to capture OG images from page heroes at 1200x630
- Created `apple-touch-icon.png` (copied from existing 192x192 icon)
- Modernized `layout.tsx` with `Viewport` export and `icons`/`manifest` metadata properties
- Fixed `manifest.json` theme_color from `#164b39` to `#3D5940`
- Updated all 6 cornerstone pages to reference page-specific OG images in `/images/og/`
- Added `og:generate` npm script

### To generate OG images:
```bash
npm run dev &
sleep 10
npm run og:generate
```

### Commit: e89678b

---

**Goal:** When someone shares a page on Facebook, Instagram, WhatsApp, LinkedIn, iMessage, or any other platform, the preview should look professional and reflect the brand. Currently this is undefined — most pages probably show no image, a generic title, or default Next.js metadata.

**Prereq:** Run AFTER all content prompts. This is a polish prompt.

---

## Why this matters

- Facebook and Instagram are both active per the project brief — Andreea posts there, and posts get shared
- Word-of-mouth referrals often start as "I found this person, here's their site" — the link preview is the first impression
- A site that has no OG image looks unprofessional and unfinished
- It's a one-time setup that pays off forever

---

## Instructions for Claude Code

### Step 1 — Audit current state

Check if there are existing OG images or metadata. Look in:
- `public/` for any `og-*.png`, `og-*.jpg`, `social.png` files
- `src/app/layout.tsx` for `openGraph` metadata
- Individual page `metadata` exports

Document at `docs/seo-audit/og-audit.md`.

### Step 2 — Default Open Graph image

Create a default OG image at `public/og-default.png`. Specs:

- **Dimensions:** 1200 × 630 px (Facebook/LinkedIn standard, also works for Twitter/X large card)
- **File size:** under 300 KB (compress with `tinypng` or similar)
- **Format:** PNG or JPG (PNG preferred for text rendering)
- **Content:**
  - Background: Linen (#F8F6F1)
  - Sage accent strip down the left side (#3D5940)
  - Andreea's name in Cormorant Garamond, large
  - "Psychodynamic Therapy in Colchester & Online" in DM Sans below
  - "BACP Registered" badge or text in bottom right
  - Subtle warm sand (#A89070) accent

This is a design task. *{{ FLAG FOR LUKE — this image needs to be created in Figma or similar and exported. The prompt can't generate the image itself, but it can set up the metadata that points at it. }}*

### Step 3 — Per-cornerstone OG images (optional but recommended)

Create variants for each cornerstone page so shares of those pages have specific imagery:

- `public/og-home.png`
- `public/og-about.png`
- `public/og-therapy-for-women.png`
- `public/og-neurodiversity.png`
- `public/og-romanian-therapy.png`
- `public/og-online-therapy.png`
- `public/og-teen-therapy.png`
- `public/og-child-therapy.png`

Each follows the same template but with the page-specific title in place of the tagline.

*{{ FLAG FOR LUKE — phase 2 if time-pressed; the default image is enough for launch }}*

### Step 4 — Root layout metadata

In `src/app/layout.tsx`, add the default Open Graph and Twitter card metadata:

```tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.nextgentherapy.co.uk'),
  title: {
    default: 'Next Generation Therapy — Psychodynamic Therapy Colchester',
    template: '%s | Next Generation Therapy',
  },
  description:
    'Psychodynamic therapy in Colchester and online with Andreea Horhocea, BACP-registered therapist. Therapy for women, neurodivergent adults, teenagers and children. English and Romanian.',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://www.nextgentherapy.co.uk',
    siteName: 'Next Generation Therapy',
    title: 'Next Generation Therapy — Psychodynamic Therapy Colchester',
    description:
      'Psychodynamic therapy in Colchester and online. BACP registered. Therapy for women, neurodivergent adults, teenagers and children. English and Romanian.',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Next Generation Therapy — Andreea Horhocea, BACP Registered Psychotherapist in Colchester',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next Generation Therapy — Psychodynamic Therapy Colchester',
    description:
      'Psychodynamic therapy in Colchester and online. BACP registered. English and Romanian.',
    images: ['/og-default.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.nextgentherapy.co.uk',
  },
};
```

Note the use of `metadataBase` — this lets per-page metadata use relative URLs for OG images and Next.js will resolve them correctly.

### Step 5 — Per-page Open Graph overrides

For each cornerstone page, extend the metadata with page-specific OG values. Example for `/therapy-for-women`:

```tsx
export const metadata: Metadata = {
  title: 'Therapy for Women in Colchester & Online',
  description: '...',
  openGraph: {
    title: 'Therapy for Women — Burnout, Anxiety, Self-Worth',
    description:
      'Psychodynamic therapy for women dealing with burnout, overthinking, anxiety, body image and identity. Colchester and online. BACP registered.',
    url: '/therapy-for-women',
    images: [
      {
        url: '/og-therapy-for-women.png', // or fall back to og-default.png
        width: 1200,
        height: 630,
        alt: 'Therapy for Women — Next Generation Therapy',
      },
    ],
  },
  twitter: {
    title: 'Therapy for Women — Burnout, Anxiety, Self-Worth',
    description: '...',
    images: ['/og-therapy-for-women.png'],
  },
};
```

Repeat for every cornerstone, location page, and the homepage. If page-specific OG images don't exist yet, fall back to `/og-default.png`.

### Step 6 — Favicons

Audit `public/` for existing favicons. Modern browsers and platforms expect:

- `favicon.ico` (16x16, 32x32, 48x48 multi-size ICO)
- `icon-192.png` (192x192, for Android home screen)
- `icon-512.png` (512x512, for Android splash screens)
- `apple-icon-180.png` (180x180, for iOS home screen)
- `manifest.json` referencing the above

If any are missing, generate them from a single source SVG using a tool like [realfavicongenerator.net](https://realfavicongenerator.net/) or `sharp` programmatically.

The favicon should be a simple, recognisable mark — probably a stylised "NGT" or a single sage-coloured glyph. *{{ FLAG FOR LUKE — needs design input }}*

In `src/app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  // ...
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-icon-180.png',
  },
  manifest: '/manifest.json',
};
```

Create `public/manifest.json`:

```json
{
  "name": "Next Generation Therapy",
  "short_name": "NextGen Therapy",
  "description": "Psychodynamic therapy in Colchester and online with Andreea Horhocea",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#F8F6F1",
  "theme_color": "#3D5940",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

### Step 7 — Theme color

In root layout, set the browser chrome colour to match the brand:

```tsx
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F8F6F1' },
    { media: '(prefers-color-scheme: dark)', color: '#3D5940' },
  ],
};
```

### Step 8 — Test

After implementation, test the OG previews using:

- **Facebook Sharing Debugger:** https://developers.facebook.com/tools/debug/
- **LinkedIn Post Inspector:** https://www.linkedin.com/post-inspector/
- **Twitter Card Validator:** https://cards-dev.twitter.com/validator (or now via X's developer tools)
- **Local preview:** `npx open-graph-preview-tool` or just paste the deployed URL into a Slack DM and see what comes up

Document results at `docs/seo-audit/og-test-results.md`.

---

## Acceptance criteria

- `npm run lint` passes
- `npx tsc --noEmit` passes
- `npm run build` passes
- `metadataBase` set in root layout
- Default Open Graph image exists at `public/og-default.png` (or flagged for Luke if design work pending)
- Twitter card metadata present
- Per-cornerstone OG metadata in place (with default fallback if page-specific images don't exist yet)
- Favicons audited and any missing ones flagged or generated
- `manifest.json` present
- `themeColor` set
- Tested on Facebook Sharing Debugger and at least one other platform

---

## Things to flag when done

- Whether the OG images need to be created (likely yes — flag for Luke)
- Whether the favicon set needs to be regenerated
- Screenshot of the Facebook share preview
- Any pages where the OG title or description had to be cut for character limits (Facebook OG title cuts at ~60 chars, description at ~150)
