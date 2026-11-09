# Zirocraft Website — Visual Redesign Direction

**Document:** Visual Redesign Direction v2.0  
**Status:** Active implementation direction  
**Target branch:** `feature/corporate-product-portfolio`  
**Supersedes:** v1.0 visual execution direction; factual, accessibility, responsive, and trust constraints remain active.

## 1. Creative concept — The Systems Behind Business

Position Zirocraft as a product-building technology company through an editorial technology-studio language combined with industrial systems design. The experience should feel authored, structured, confident, and recognizably Zirocraft—not like a configurable SaaS landing-page template.

The visual idea is that businesses are made of connected processes. Zirocraft builds practical digital systems for parts of those processes, currently point-of-sale/business operations and warehouse workflows.

## 2. Art direction

- Warm paper canvas, near-black ink, cobalt signal accent.
- Teal product accent for ZiroPOS and amber for ZiroLogistics.
- Large editorial typography, asymmetric grids, strong rules, and purposeful whitespace.
- Alternate light editorial sections with occasional dark system panels.
- Original SVG/CSS diagrams for connected operations, transaction flow, and warehouse flow. These are conceptual illustrations—not product interfaces, screenshots, or claims about implemented functionality.
- Selective contextual photography, never the primary brand identity.
- Prefer sharp or modestly rounded geometry over a site-wide collection of pill controls and oversized cards.

## 3. Route-specific character

- **Homepage:** dark editorial hero, original systems artwork, company point of view, balanced POS/WMS portfolio, numbered principles, contact close.
- **About:** company perspective and working principles; no invented history, founders, or team claims.
- **Catalogue:** editorial portfolio index with distinct POS and warehouse artwork; extensible for future products.
- **ZiroPOS:** teal-led conceptual transaction and business-operations artwork.
- **ZiroLogistics:** amber-led conceptual warehouse-flow artwork.
- **Contact:** typography-led page with verified email and a real mailto action.
- **Legal:** retain readable legal content and owner/legal review before publication.

## 4. Imagery and asset governance

Only official Zirocraft logo assets are owned brand assets. External stock images are contextual illustrations only and must not imply Zirocraft staff, premises, customers, deployments, endorsements, or actual product UI. Record selected source pages and creators in `IMAGE_ASSET_REGISTER.md`. Review the applicable license and depicted-person, trademark, and property rights before launch. Prefer locally stored, optimized assets when practical; do not rely on undocumented hotlinked image URLs for final production.

## 5. Product and company truth

- ZiroPOS and ZiroLogistics remain **Dalam Pengembangan / In Development**.
- ZiroPOS is a POS and business-management SaaS platform under development.
- ZiroLogistics has an initial focus on small-to-medium warehouse operations.
- Do not invent features, customers, testimonials, metrics, certifications, uptime, pricing, launch dates, company size, or business history.
- Do not imply general availability, production readiness, or customer deployments.
- Future products should be added through the central product catalogue.

## 6. Interaction and accessibility

- Keep routes as Server Components by default; use Client Components only for genuine interactions.
- Maintain keyboard-visible focus, semantic landmarks, accessible navigation, and touch-friendly targets.
- Respect `prefers-reduced-motion`; motion must never be required to understand content.
- Avoid scroll-jacking, heavy parallax, autoplay, and animation that delays content access.

## 7. Responsive acceptance

- Mobile: single-column reading order, no horizontal overflow, legible display typography, usable navigation.
- Tablet: split layouts only when text remains comfortable.
- Desktop: asymmetric grids, intentional alignment, purposeful whitespace.
- Check narrow mobile, standard mobile, tablet, laptop, and wide desktop.

## 8. Acceptance criteria

- [ ] All main routes have distinct but coherent compositions.
- [ ] Homepage communicates Zirocraft before individual products.
- [ ] ZiroPOS and ZiroLogistics have equal prominence and distinct visual identities.
- [ ] Indonesian and English content remain equivalent and natural.
- [ ] Conceptual artwork cannot be mistaken for product screenshots.
- [ ] External imagery is documented and rights reviewed.
- [ ] No unsupported claims are introduced.
- [ ] Keyboard, focus, contrast, responsive behavior, and reduced motion are reviewed.
- [ ] Lint, TypeScript, and production build pass after implementation.
- [ ] Temporary domain references are replaced before launch.
