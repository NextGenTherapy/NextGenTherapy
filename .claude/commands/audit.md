---
description: Run visual audit workflow for design system compliance
---

Perform a visual audit of the specified component or page:

1. Read the component/page file
2. Read the associated `.module.scss` file
3. Check for design token compliance:
   - All colours use `var(--color-*)` tokens
   - All spacing uses `var(--spacing-*)` tokens
   - All font sizes use `var(--font-size-*)` tokens
   - No hardcoded hex values, px values, or arbitrary sizes
4. Check for inline styles (should be none)
5. Verify responsive breakpoints use standard values
6. Check accessibility patterns (ARIA labels, semantic HTML)

Report findings in this format:
- Token violations found
- Inline style violations
- Accessibility concerns
- Recommendations for fixes
