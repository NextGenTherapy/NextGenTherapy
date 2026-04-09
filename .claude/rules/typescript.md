# TypeScript Rules

## Strict Types
- Never use `any` type - use proper types or `unknown`
- Props interface named `{ComponentName}Props`, defined before component
- Extend HTML element attributes when applicable

## Import Ordering
Imports must follow this order with blank lines between groups:

1. `'use client'` directive (if needed)
2. React/Next.js (`React`, `useState`, `Link`, `Image`, `Metadata`)
3. Third-party libraries
4. Internal components (relative imports)
5. Lib utilities (`@/lib/...`)
6. Types
7. SCSS modules (always last)

## Naming Conventions
- File names: kebab-case (`contact-form.tsx`)
- Component exports: PascalCase (`ContactForm`)
- Event handlers: `handleX` (handleSubmit, handleClick)
- Data fetching: `fetchX` (fetchServices, fetchPosts)
- Formatting: `formatX` (formatDate, formatPrice)
- Validation: `validateX` (validateEmail, validateForm)
- Boolean checks: `isX` (isValid, isEmpty, isLoading)
