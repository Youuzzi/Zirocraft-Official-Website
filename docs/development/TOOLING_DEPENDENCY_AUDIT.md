# Tooling and Dependency Audit — Baseline

**Status:** First-pass audit; no dependency added or removed.  
**Audited ref:** `feature/official-site-rebuild` at `f679b6fa737e36df5172a69ece0414f591be9fe2`.

## Current package configuration

The project declares:

- Runtime dependencies: `next`, `react`, and `react-dom`.
- Development dependencies: Tailwind CSS 4, TypeScript, ESLint 9, Next ESLint configuration, and Node/React type packages.
- Package scripts: `dev`, `build`, `start`, `lint`, and `test:smoke`.

This is a compact dependency set for a Next.js company website. No dependency should be removed merely because it appears small or unfamiliar; removal requires a usage and build check.

## CI/browser-test observation

The browser and accessibility workflow installs Playwright and axe Playwright into the CI environment using a no-save install rather than declaring them as normal project dependencies. This keeps the production dependency graph small, but it means the browser QA scripts rely on explicit workflow setup and pinned versions.

**Recommendation:** retain the current CI-only installation model if browser QA is exclusively run in GitHub Actions. If developers are expected to run browser QA locally, document the setup or introduce a dedicated, reproducible QA dependency strategy. Avoid silently adding browser tooling to production dependencies.

## Quality gates to retain

- ESLint.
- Next.js production build.
- Route/smoke checks.
- Playwright browser checks.
- Automated axe accessibility scan.
- Artifact upload for browser/accessibility reports.

A green lint/build alone is not sufficient to establish release readiness.

## Follow-up checks before cleanup

1. Compare declared dependencies against actual imports and scripts.
2. Inspect the lockfile for stale, duplicate, or unexpectedly large dependency trees.
3. Check Next.js configuration and Tailwind/PostCSS integration for obsolete settings.
4. Check TypeScript compiler options and lint rules for consistency.
5. Confirm scripts fail with a non-zero exit code when assertions fail.
6. Keep tool versions pinned in CI and make local instructions match the CI contract.
7. Review package overrides individually; do not remove security-related overrides without checking the dependency tree and advisory context.

## Decisions

- No production dependency is proposed for removal in this baseline.
- No new runtime dependency is proposed.
- Browser QA remains a CI concern unless local developer workflows require otherwise.
- Any dependency update or removal should be an isolated, reviewable change with a production build and test run.

## Audit limitations

This document records the package manifest and workflow approach observed during the first pass. It is not a full software composition analysis or vulnerability report. Before claiming the dependency tree is clean, run a lockfile-aware dependency inventory and the repository's supported security/advisory checks.
