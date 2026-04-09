---
name: seo
description: Trigger when creating pages, adding metadata, implementing schema, or discussing SEO
allowed-tools: Read, Grep, Glob
---

# SEO Skill

## Business Context
- **Business**: Next Gen Therapy - Psychodynamic Therapy
- **Location**: Colchester, Essex, UK
- **Services**: In-person therapy (Colchester) + Online therapy (UK-wide)
- **Domain**: nextgentherapy.co.uk

## Healthcare SEO Context
This is a therapy/healthcare website - SEO follows YMYL (Your Money Your Life) guidelines with heightened trust requirements.

## Metadata Requirements
Every page MUST export metadata using Next.js 15 API:

```typescript
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Title | Next Gen Therapy',
  description: 'Page description for SEO (150-160 chars)',
  alternates: {
    canonical: 'https://nextgentherapy.co.uk/page-slug',
  },
};
```

## Schema Components
Use existing SEO components in `src/components/seo/`:
- `LocalBusinessSchema` - For therapy services
- `BlogPostSchema` - For blog content
- `BreadcrumbSchema` - For navigation structure

## LocalBusiness Schema
Required for therapy services:
```json
{
  "@type": "LocalBusiness",
  "name": "Next Gen Therapy",
  "description": "Psychodynamic therapy in Colchester and online",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Colchester",
    "addressRegion": "Essex",
    "addressCountry": "GB"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Colchester"
    },
    {
      "@type": "Country",
      "name": "United Kingdom"
    }
  ],
  "serviceType": ["Psychodynamic Therapy", "Online Therapy"]
}
```

## Local SEO Keywords
Target keywords should include:
- "therapist Colchester"
- "psychodynamic therapy Colchester"
- "counselling Colchester Essex"
- "online therapy UK"
- "psychodynamic therapist near me"

## Core Web Vitals Targets
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

## Image Optimization
- Always use `next/image` component
- Set `priority` for above-fold images
- Include descriptive `alt` text
- Use appropriate `sizes` attribute

## YMYL Trust Signals
Healthcare content requires:
- BACP registration details
- Professional credentials
- Colchester practice address
- Contact information
- Privacy policy (UK GDPR compliant)
- Clear service descriptions

## SEO Monitoring
- Google Search Console: nextgentherapy.co.uk
- Site verification: P2NojIbNyYheM5XtqaNmtH5Cpp1ugkxcaddXxjZF4Dc
- Sitemap: `/sitemap.xml` (auto-generated)
- Schema validation: Google Rich Results Test

## Gotchas
- Never duplicate title tags across pages
- Always include canonical URLs
- Check schema with Rich Results Test before deploying
- Include structured data on all service pages
- Local SEO important for Colchester visibility
- Online therapy pages should target UK-wide keywords
