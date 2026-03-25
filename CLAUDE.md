# Next Gen Therapy - Next.js 15 Development Guide

## Tech Stack

- **Framework**: Next.js 15.3.2 with App Router
- **Language**: TypeScript 5.2
- **Styling**: SCSS/SASS
- **Database/CMS**: Sanity & Notion integration
- **Email**: Resend
- **Analytics**: Vercel Analytics + Speed Insights
- **Testing**: Jest + React Testing Library

## Project Structure

- `src/app/`: App Router pages with Next.js 15 metadata API
- `src/components/`: Reusable React components
  - `src/components/seo/`: SEO schema components (LocalBusiness, BlogPost, Breadcrumb)
  - `src/components/ui/`: UI components
  - `src/components/forms/`: Form components
  - `src/components/layout/`: Layout components
- `src/lib/`: Utilities and API clients
- `public/`: Static assets and sitemap files
- `docs/`: Documentation
- `__tests__/`: Test files

## Commands

- `npm run dev`: Start development server with Turbopack
- `npm run build`: Build for production + generate sitemap
- `npm run start`: Start production server
- `npm run lint`: ESLint with Next.js rules
- `npm run format`: Format code with Prettier
- `npm run test`: Run Jest tests
- `npm run test:watch`: Run tests in watch mode

## Development Guidelines

### Code Style

- Use TypeScript for all new files
- Function components with hooks (no class components)
- ES modules (import/export) syntax
- Arrow functions for component definitions
- Destructure imports when possible

### SEO Best Practices (2025)

- Every page MUST have unique metadata using Next.js 15 metadata API
- Implement structured data for therapy services (LocalBusiness schema)
- Optimize Core Web Vitals (target LCP < 2.5s)
- Use semantic HTML for accessibility
- Include proper YMYL trust signals for healthcare content

### Component Patterns

- All components in TypeScript
- Use existing SEO components: LocalBusinessSchema, BlogPostSchema, BreadcrumbSchema
- Follow established project structure in `/components/{category}/`
- Include proper TypeScript interfaces for props

### Healthcare Compliance

- Never log or expose sensitive patient information
- Include medical disclaimers on therapy content
- Follow HIPAA guidelines for any data handling
- Use proper consent forms for contact submissions

### Performance

- Use Next.js Image component with priority for above-fold images
- Implement proper caching strategies
- Monitor Core Web Vitals via Vercel Analytics
- Lazy load components when appropriate

## Testing

- Write tests for all business logic
- Use React Testing Library for component tests
- Test accessibility with proper ARIA labels
- Mock external API calls (Sanity, Notion, Resend)

## Deployment

- Deploy via Vercel with automatic builds
- Monitor performance with Vercel Speed Insights
- Track user behavior with Vercel Analytics
- Verify SEO health via Google Search Console

## SEO Monitoring

- Google Search Console: nextgentherapy.co.uk (primary)
- Site verification: P2NojIbNyYheM5XtqaNmtH5Cpp1ugkxcaddXxjZF4Dc
- Sitemap: `/sitemap.xml` (auto-generated)
- Schema validation: Use Google Rich Results Test

## Local Development

- Domain: nextgentherapy.co.uk (canonical)
- Environment variables in `.env.local`
- SSL certificates auto-managed by Vercel
- DNS managed via Vercel nameservers

## Agent Rules — Read This First

Before writing any code in this project:
- Read the relevant existing files first — never assume structure
- Run `npm run lint && npx tsc --noEmit` before marking any task done
- Never use `any` in TypeScript — use proper types or `unknown`
- Never use inline styles — all styling goes in .module.scss files
- Never install a new npm package without flagging it first and explaining why
- Never modify .env.local or any environment variable files
- Never remove or modify existing tests without explicit instruction
- When creating a new page, always add a metadata export following the existing pattern in other pages
- When creating a new component, always create a matching .module.scss file in the same folder
- Always use next/image — never raw <img> tags
- Check src/components/ before creating any new component
- When unsure about a structural decision, stop and ask rather than guessing
- After any visual change, check mobile (375px) and desktop (1280px) mentally before finishing

## Styling Architecture

This project uses SCSS Modules as the primary styling approach:

- Each component and page has a co-located .module.scss file
- Global styles live in src/styles/globals.scss
- Design tokens (colours, typography, spacing, breakpoints) are defined in src/styles/variables.scss
- Never use Tailwind — this project is SCSS only
- Never use inline styles under any circumstances
- All colour values must reference CSS custom properties from variables.scss — never hardcode hex values
- All font sizes must use tokens from variables.scss — never set arbitrary sizes
- All spacing must use spacing tokens — never arbitrary px/rem values
- Responsive breakpoints are defined as tokens in variables.scss — use these values, do not invent new breakpoints
- Follow BEM-lite naming inside modules: .container, .title, .description, .wrapper, .item
- Class names should describe structure/role, not appearance (.card not .greenBox)

## Current Styling State — Active Redesign

This project is currently undergoing a full visual redesign. Important rules during this period:

- Do not replicate existing visual styles — follow the new design system tokens
- The new token values are defined in src/styles/variables.scss — always use these
- If a component has not been redesigned yet, flag it rather than mixing old and new styles
- The design system reference is in docs/agents/DESIGN-SYSTEM.md
- Typography uses Cormorant Garamond (headings) and DM Sans (body) loaded via next/font in layout.tsx
- All new components must use the new token system from day one

## File Creation Checklist

When creating any new file, follow this checklist:

- New page → metadata export + appropriate schema component + .module.scss
- New component → .module.scss in the same folder + TypeScript interface for props
- New utility → added to the relevant file in src/lib → check if root layout.tsx needs updating
- Any new dependency → flagged to user before installing, with reason

## Design System Reference

The full design system is documented in docs/agents/DESIGN-SYSTEM.md

Token categories:
- Colours: --color-bg, --color-surface, --color-text, --color-text-muted, --color-brand, --color-brand-hover, --color-accent, --color-accent-light, --color-border, --color-header, --color-header-text
- Typography: --font-display (Cormorant Garamond), --font-body (DM Sans), plus size and weight scales
- Spacing: --spacing-xs through --spacing-section
- Breakpoints: --breakpoint-mobile (480px), --breakpoint-tablet (768px), --breakpoint-desktop (1024px), --breakpoint-large (1200px)
