# Zirocraft Website Testing Guide

## Purpose
A change is not complete because it compiles in the editor. Verify code quality, production compilation, browser behavior, accessibility basics, and responsive layouts. Record the command, environment, result, and any known limitation.

## Local prerequisites
- Use the Node.js version supported by the installed Next.js version and repository lockfile. Confirm with `node --version` and `npm --version`; do not silently upgrade dependencies or tooling.
- Install from the committed lockfile using the matching package manager's clean-install command.
- The Taste Skill scripts specifically require Node.js 22+ and Chrome/Edge/Chromium. Do not make them a mandatory project dependency unless the environment satisfies that requirement. Playwright CLI declares Node.js >=18 in its package metadata.

## Required checks
Run from the repository root:
```bash
npm run lint
npm run build
```
Both must complete successfully. Review warnings; do not dismiss warnings without understanding them.

## Browser smoke checks
Use Playwright (CLI or test runner) when installed and configured. At minimum verify:
- Home, About, Products, Contact, and each product detail route load without console errors.
- Internal navigation, external links, primary CTAs, and mobile menu work.
- No broken images, missing fonts, hydration errors, or unexpected network failures.
- Forms show validation and useful success/error feedback; do not submit test data to a live recipient or production service.
- Keyboard navigation, visible focus, skip/navigation behavior, and Escape handling for dismissible UI.
- Reduced-motion preference does not make content inaccessible.

## Responsive matrix
Capture and inspect at these representative widths:
- 390 px: narrow mobile
- 768 px: tablet
- 1440 px: desktop
Also inspect at an intermediate width if navigation or layout transitions occur there. Check for horizontal overflow, clipped headings, overlapping controls, unreadable text, and awkward whitespace.

## Visual review loop
1. Capture screenshots at the target widths before/after a meaningful visual change.
2. Review each route, not only the homepage.
3. List the three most important visual/interaction defects.
4. Fix them and recapture; repeat until no high-impact issue remains.
5. Keep screenshots or a short review note with the change when practical.

## Accessibility checks
- Run automated accessibility checks if available, but do not treat automation as proof of full accessibility.
- Manually test keyboard-only interaction, focus order, labels, heading order, landmarks, contrast, image alternatives, and reduced motion.
- Verify touch targets and controls at mobile sizes.

## Reporting format
For each run record:
- Date/time and commit SHA
- Node/npm and browser versions
- Exact command or route/viewport
- PASS / FAIL / BLOCKED
- Relevant output, screenshots, and defect notes
- Whether a failure is code-related, environment-related, or an unverified external dependency

## Current baseline status
No lint, build, or browser run is asserted by this document. Record the first real baseline run before or during implementation.
