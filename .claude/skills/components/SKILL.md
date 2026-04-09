---
name: components
description: Trigger when creating new components or modifying component structure
allowed-tools: Read, Grep, Glob
---

# Component Creation Skill

## File Structure
Every component requires two files:
```
src/components/{category}/
├── component-name.tsx
└── component-name.module.scss
```

## Standard Component Template
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

## Component Categories
- `src/components/ui/` - UI components (buttons, cards, inputs)
- `src/components/forms/` - Form components
- `src/components/layout/` - Layout components (header, footer)
- `src/components/seo/` - SEO schema components

## Naming Conventions
- File names: kebab-case (`contact-form.tsx`)
- Component exports: PascalCase (`ContactForm`)
- SCSS modules: Match component (`contact-form.module.scss`)

## Props Interface
- Named `{ComponentName}Props`
- Defined before component
- Extend HTML attributes when applicable:

```typescript
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}
```

## Pre-Creation Checklist
1. Check `src/components/` for existing similar components
2. Determine correct category folder
3. Plan props interface
4. Review design tokens needed

## Post-Creation Checklist
1. Component has matching `.module.scss` file
2. Props interface is defined
3. All styling uses design tokens
4. No inline styles
5. Uses `next/image` for any images

## Gotchas
- Always check for existing components first
- Never create components without SCSS module
- Use `'use client'` only when needed (state, effects, event handlers)
- Follow existing patterns in the codebase
