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
