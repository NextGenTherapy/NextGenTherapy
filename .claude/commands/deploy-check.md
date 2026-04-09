---
description: Run pre-deployment verification checks
---

Execute comprehensive pre-deployment checks:

## 1. Build Verification
!`npm run build`

## 2. Lint and Type Check
!`npm run lint && npx tsc --noEmit`

## 3. Test Suite
!`npm run test`

## 4. Manual Checks
After automated checks pass, verify:
- [ ] All pages have metadata exports
- [ ] No hardcoded environment values
- [ ] No console.log statements in production code
- [ ] Images use next/image component
- [ ] Contact forms include consent checkbox
- [ ] Privacy policy link present
- [ ] BACP membership displayed

Report overall deployment readiness status.
