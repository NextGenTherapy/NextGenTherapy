# Testing Rules

## Framework
- Jest + React Testing Library
- Test files in `__tests__/` directory

## Requirements
- Write tests for all business logic
- Use React Testing Library for component tests
- Test accessibility with proper ARIA labels
- Mock external API calls (Sanity, Notion, Resend)

## Before Finishing
Both commands must pass with no errors:
```bash
npm run lint
npx tsc --noEmit
```

## Visual Verification
Mentally verify changes at:
- Mobile: 375px width
- Desktop: 1280px width
