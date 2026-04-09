# Code Conventions

This document defines the coding conventions for the Next Gen Therapy codebase. All agents and contributors must follow these patterns.

## Component Naming

- **File names**: kebab-case (e.g., `contact-form.tsx`, `service-card.tsx`)
- **Component exports**: PascalCase (e.g., `ContactForm`, `ServiceCard`)
- **SCSS modules**: Match component name (e.g., `contact-form.module.scss`)

## File Structure

Every `.tsx` component must have a matching `.module.scss` file in the same folder:

```
src/components/forms/
├── contact-form.tsx
└── contact-form.module.scss
```

## TypeScript Rules

- Strict mode is enabled — no implicit `any`
- Never use explicit `any` — use proper types or `unknown`
- Props interface named `{ComponentName}Props`, defined before the component
- Extend HTML element attributes when applicable:

```typescript
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}
```

## Import Ordering

Imports must follow this order, with blank lines between groups:

1. `'use client'` directive (if needed)
2. React/Next.js (`React`, `useState`, `Link`, `Image`, `Metadata`)
3. Third-party libraries
4. Internal components (relative imports)
5. Lib utilities (`@/lib/...`)
6. Types
7. SCSS modules (always last)

Example:

```typescript
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { ContactForm } from '@/components/forms/contact-form';
import { formatDate } from '@/lib/utils';

import type { Service } from '@/types';

import styles from './service-page.module.scss';
```

## SCSS Conventions

- One `.module.scss` file per component
- BEM-lite naming: `.container`, `.title`, `.statusError`, `.inputError`
- Maximum 3 levels of nesting
- Mobile-first approach with `@media (min-width: ...)`
- All values via CSS custom properties — no hardcoded hex colours or arbitrary px values

```scss
.container {
  padding: var(--spacing-md);
  background: var(--color-surface);

  @media (min-width: 768px) {
    padding: var(--spacing-lg);
  }
}

.title {
  font-family: var(--font-display);
  font-size: var(--font-size-2xl);
  color: var(--color-text);
}
```

## Function Naming

- `handleX` — event handlers (handleSubmit, handleClick, handleChange)
- `fetchX` — data fetching functions (fetchServices, fetchPosts)
- `formatX` — formatting utilities (formatDate, formatPrice)
- `validateX` — validation functions (validateEmail, validateForm)
- `isX` — boolean checks (isValid, isEmpty, isLoading)

## Component Structure

Standard component structure:

```typescript
'use client';

import { useState } from 'react';

import styles from './component-name.module.scss';

interface ComponentNameProps {
  title: string;
  description?: string;
}

export const ComponentName = ({ title, description }: ComponentNameProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
};
```

## Metadata Pattern

Every page must export metadata:

```typescript
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Title | Next Gen Therapy',
  description: 'Page description for SEO',
  alternates: {
    canonical: 'https://nextgentherapy.co.uk/page-slug',
  },
};
```
