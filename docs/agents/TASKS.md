# Task Protocol

This document defines the protocol for completing tasks in the Next Gen Therapy codebase.

## Before Starting

1. **Read relevant existing files** — never assume structure or patterns
2. **Check if component already exists** in `src/components/`
3. **State what files will be changed** before making modifications
4. **Check CLAUDE.md** for project-specific rules and constraints
5. **Understand the design system** — read DESIGN-SYSTEM.md for token values

## During Implementation

- Make the **smallest change that achieves the goal**
- Use **design tokens only** — no hardcoded hex colours, px values, or arbitrary sizes
- **Follow existing patterns** in the codebase
- **No new npm packages** without flagging to the user first with justification
- Never use inline styles — all styling in `.module.scss` files
- Never use raw `<img>` tags — always use `next/image`

## Before Finishing

Run these checks before marking any task complete:

```bash
# Lint check
npm run lint

# TypeScript check
npx tsc --noEmit
```

Both commands must pass with no errors.

### Visual Verification

Mentally verify the change at:
- Mobile: 375px width
- Desktop: 1280px width

## Completion Report

After completing a task, provide a summary in this format:

```
## Completion Report

### Files Changed
- src/components/ui/button.tsx (modified)
- src/components/ui/button.module.scss (modified)

### Tokens Modified
- None (or list any design token changes)

### Flagged for Review
- None (or list any concerns)

### Verification
- Lint: Passed
- TypeScript: Passed
```

## Common Pitfalls

Avoid these mistakes:

- Creating new components without checking if one exists
- Using `any` type in TypeScript
- Hardcoding colour values instead of using tokens
- Installing packages without approval
- Skipping lint/TypeScript checks
- Making changes beyond the scope of the task
- Mixing old and new design patterns during redesign

## Task Categories

### Bug Fix
1. Reproduce the issue
2. Identify root cause
3. Fix with minimal change
4. Verify fix works
5. Check for regressions

### New Component
1. Check no similar component exists
2. Create `.tsx` and `.module.scss` files together
3. Define props interface
4. Use design tokens for all styling
5. Add to relevant index exports if applicable

### Page Update
1. Read existing page code
2. Check metadata is present
3. Make targeted changes
4. Verify responsive behaviour

### Styling Change
1. Locate the correct `.module.scss` file
2. Use design tokens only
3. Check mobile-first breakpoints
4. Verify no hardcoded values
