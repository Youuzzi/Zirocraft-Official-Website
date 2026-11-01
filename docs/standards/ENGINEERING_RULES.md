# Zirocraft Website Engineering Rules

## Project baseline
- Framework: Next.js 16.4.3 App Router.
- UI: React 19.3.0, TypeScript, Tailwind CSS 4.
- Package scripts currently available: `npm run dev`, `npm run lint`, `npm run build`, `npm run start`.
- Keep dependency changes deliberate. Do not add a library for a problem already solved cleanly by the platform or current stack.
- The project's AGENTS.md requires reading the relevant installed Next.js documentation under `node_modules/next/dist/docs/` before changing code. Follow that requirement and current deprecation guidance.

## Architecture
- Keep routes in `src/app`; shared visual primitives in a clearly organized component layer; page-specific composition belongs near the route.
- Separate company-level layout/navigation from product-specific components and content.
- Prefer Server Components. Add `"use client"` only when browser APIs, local interaction state, or event handlers require it.
- Keep data and content separate from presentation when it improves reuse, localization, or maintainability.
- Use Next.js `Link` for internal navigation and the framework image solution for optimized local/remote imagery where appropriate.
- Use semantic HTML and native browser behavior before custom abstractions.
- Avoid unnecessary client-side fetching, duplicated state, waterfalls, oversized bundles, and re-render cascades.

## TypeScript and React
- Do not use `any` to bypass type safety. Define narrow types for props and data.
- Use stable keys for mapped elements. Avoid index keys when identity can change.
- Keep components focused; extract shared components only when there is real reuse or a meaningful semantic boundary.
- Do not hide content or functionality behind hover alone.
- Avoid dangerouslySetInnerHTML unless there is a documented, sanitized requirement.

## Accessibility
- Use landmarks, ordered headings, descriptive link text, labels, and appropriate alt text.
- All functionality must be keyboard reachable and operable; focus must remain visible.
- Use ARIA only when native HTML semantics are insufficient.
- Ensure contrast, reduced-motion behavior, and responsive text sizing.
- Test mobile menu, dialogs, forms, and other interactive elements with keyboard and screen-reader semantics.

## Performance and reliability
- Optimize images and fonts; avoid layout shifts by reserving dimensions.
- Load non-critical media lazily. Keep above-the-fold content lean.
- Prefer CSS transforms and opacity for animation; avoid expensive layout/paint effects.
- Handle loading, empty, error, and success states for interactive features.
- Never hardcode secrets or expose private environment variables to client code.

## Changes and review
- Work on a feature branch; do not push unreviewed changes directly to the default branch.
- Keep commits scoped and messages descriptive.
- Do not make production-code changes as part of an audit unless explicitly authorized.
- Never claim lint, build, browser tests, or visual checks passed unless they were actually executed and their output inspected.
- Update these standards when the stack or project conventions change.
