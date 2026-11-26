# Architecture Audit — Baseline and Target

**Status:** First-pass audit; no application code moved or removed.  
**Audited ref:** `feature/official-site-rebuild` at `f679b6fa737e36df5172a69ece0414f591be9fe2`.

## Executive summary

The project is already a Next.js App Router application with a small, understandable top-level structure. It is not a monolith in the sense of a single application file or a legacy Pages Router application. The main maintainability opportunity is that several route files currently own both routing concerns and substantial page-section markup/content. The next step should be incremental feature extraction, not a wholesale rewrite.

## Current structure observed

- `src/app/`: root and locale route groups, route pages, global stylesheet, not-found, robots, and sitemap.
- `src/components/layout/`: navbar, footer, and language switcher.
- `src/lib/`: metadata helper, product model/content, and i18n dictionary.
- `scripts/`: smoke and browser QA scripts.
- `docs/`: project and release documentation.

No legacy `pages/` router or duplicate root-level `components/` / `lib/` trees were observed in the inspected repository tree.

## Findings from source review

### 1. Route files combine page composition and feature presentation

The localized home page currently contains multiple substantial sections (hero, point of view, product listing, working approach, and closing CTA) in one route file. The products listing and services page similarly define their presentation sections and localized copy inline.

**Recommendation:** keep `src/app/[locale]/...` responsible for route entry, metadata, locale validation, and composing feature components. Move substantial sections into feature-owned components in small, behavior-preserving changes.

### 2. Product domain already has a useful shared model

`src/lib/products.ts` defines a typed product model and localized product copy, consumed by the home and product routes.

**Recommendation:** move this domain data behind `src/features/products/` (for example `data/products.ts` and `model/types.ts`) only when imports can be migrated together. Avoid duplicating product definitions or creating a second source of truth.

### 3. Shared layout has a clear home

Navbar, footer, and language switcher already live under `src/components/layout/`.

**Recommendation:** retain this separation. Add shared UI primitives only when at least two independent features genuinely need them; do not create a large generic component library pre-emptively.

### 4. i18n has mixed usage patterns that need a deliberate migration

A typed dictionary exists in `src/lib/i18n/dictionaries.ts`, and product copy has its own localized model. Several route pages also contain inline `id` / `en` ternaries and localized arrays.

**Recommendation:** do not blindly move every string into one dictionary. Keep content close to its feature where appropriate, define a consistent approach for shared navigation/layout copy, and add coverage to prevent missing locale content.

### 5. Feature boundaries should stay pragmatic

Recommended initial feature modules:

- `features/home/`: home page sections.
- `features/products/`: product listing/detail presentation, product data, and product types.
- `features/services/`: service page sections and service content.
- `features/portfolio/`: portfolio-specific sections/content.
- `features/about/`: about page sections.
- `features/contact/`: contact presentation and contact-specific validation if a form is introduced.

Keep routing in `app/`, global layout in `components/layout/`, and cross-feature primitives in `components/ui/` or `components/shared/` only when reuse is real.

## Proposed target structure

```text
src/
├── app/
│   ├── (root)/
│   └── [locale]/
├── components/
│   ├── layout/
│   ├── ui/
│   └── shared/
├── features/
│   ├── home/
│   ├── about/
│   ├── services/
│   ├── portfolio/
│   ├── products/
│   └── contact/
├── lib/
│   ├── i18n/
│   ├── seo/
│   └── utils/
├── config/
└── types/
```

The target is a guide, not a requirement to create empty folders. Add a module only when it owns real code.

## Migration guardrails

1. Preserve every public route and its localized URL.
2. Preserve page metadata, canonical/alternate URLs, Open Graph, sitemap, and robots behavior.
3. Keep all product statuses factually accurate (ZiroPOS and ZiroLogistics remain in development).
4. Do not change visual design or copy as part of structural-only extraction.
5. Avoid circular imports and cross-feature imports into another feature's internal component tree.
6. Move one feature at a time and run lint, production build, route smoke, Playwright, and accessibility checks after each meaningful batch.
7. Delete files only after repository-wide reference checks prove they are unused.

## Suggested migration order

1. Products (existing shared model gives a natural seam).
2. Home page sections.
3. Services and portfolio.
4. About and contact.
5. Consolidate shared UI only after duplication is demonstrated.

## Audit limitations

This is a first-pass architecture baseline, not a claim that every source file, import, or runtime path has been exhaustively inspected. A follow-up pass should inventory all route files, identify actual duplication and unused exports, and measure oversized modules before any destructive cleanup.
