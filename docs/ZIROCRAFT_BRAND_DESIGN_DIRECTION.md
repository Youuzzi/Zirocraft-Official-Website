# ZiroCraft — Brand & Digital Experience Direction

**Status:** Design foundation for the full website rebuild  
**Branch:** `feature/official-site-rebuild`  
**Product truth:** ZiroPOS and ZiroLogistics are in development. This website must not imply that either is generally available or that illustrative visuals are real application screens.

## 1. Creative direction: Precision in Motion

ZiroCraft should feel like a focused software company that understands how real businesses operate: deliberate, capable, clear, and quietly ambitious. The visual identity is not a generic SaaS landing-page template and not a freelancer portfolio.

The central idea is **Precision in Motion**:
- Precision: strong typographic hierarchy, intentional spacing, clear information architecture, crisp edges, and direct language.
- Motion: a sense of progress through editorial composition, purposeful transitions, and visual storytelling—not constant animation.
- Human usefulness: real-world business context, approachable language, accessible controls, and obvious next steps.

The site should feel like a considered technology journal crossed with a modern product company: editorial rather than flashy, confident rather than loud.

## 2. Design principles

1. **One job per section.** Every section must answer a distinct visitor question. Remove sections that repeat the same message.
2. **Composition before decoration.** Use scale, whitespace, alignment, contrast, and image cropping to create interest before adding effects.
3. **Asymmetry with discipline.** Use editorial split layouts, offset visual anchors, large numerals, and varied section structures while preserving a consistent grid.
4. **Product truth over theatre.** Generated product visuals must be clearly illustrative. Never fabricate a functioning dashboard, customer logo, metric, testimonial, or product capability.
5. **Progressive disclosure.** Homepage introduces the company and portfolio; product pages explain each product in greater depth; contact paths remain easy to find.
6. **Responsive by design.** Recompose layouts for narrow screens instead of shrinking desktop compositions.
7. **Motion with meaning.** Animation may explain relationships, provide feedback, or guide attention. It must never delay content or block interaction.
8. **Readable, direct copy.** Lead with concrete business problems and explain what ZiroCraft is building in plain language.

## 3. Visual system

### Palette

Use a warm neutral canvas with a deep ink foundation and a confident blue signal. This gives the brand a more ownable editorial character than an all-white / all-blue SaaS template.

| Token | Value | Role |
|---|---|---|
| Ink | `#15191F` | Main text, dark surfaces |
| Ink soft | `#242B34` | Secondary dark surfaces |
| Paper | `#F5F4F0` | Primary page canvas |
| White | `#FFFFFF` | Raised surfaces and contrast |
| Slate | `#66717D` | Supporting text |
| Line | `#D9DAD6` | Hairlines, dividers |
| Signal blue | `#315FEA` | Primary action, links, focus |
| Blue deep | `#2449B8` | Hover / active state |
| Signal amber | `#E5A34B` | Small status and editorial accents only |
| Success | `#247A58` | Only for genuine success feedback |

Rules:
- Paper and white are the default light surfaces; dark ink is used selectively for high-impact moments.
- Blue is a functional accent, not a background wash for every section.
- Amber is a small accent, not a second primary brand color.
- Avoid gradient backgrounds, neon glow, glassmorphism, and decorative blobs.
- Keep text contrast at WCAG 2.2 AA or better.

### Typography

- Primary: Geist Sans (already installed by the application) or a visually compatible sans with excellent Latin and Indonesian readability.
- Display: same family, heavier weight and tighter tracking; do not introduce a second display font without a clear reason.
- Technical labels: Geist Mono sparingly for category labels, index numbers, and product metadata.
- Headlines should be short, assertive, and responsive with fluid sizing. Avoid overly wide paragraphs and all-caps body copy.

### Grid, spacing, and shape

- Desktop content width: approximately 1,280px with generous gutters.
- Use a 12-column editorial grid on wide screens; collapse to 6 / 4 columns and then one column at smaller widths.
- Base spacing rhythm: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128px.
- Prefer square or subtly rounded geometry. Use larger radii only for image frames or intentional feature panels; avoid rounding every element.
- Use thin borders and restrained shadows. Prefer separation through spacing and surface contrast.
- Keep consistent left and right content edges within each page.

## 4. Layout language

Vary layouts by content purpose, not randomly:
- **Editorial hero:** oversized left-aligned headline, concise supporting copy, one primary action, and a purposeful visual on the right or below.
- **Manifesto / company point of view:** wide statement paired with a narrower explanation; no generic three-card feature grid.
- **Portfolio:** two distinct product compositions with different visual crops and accent treatments but equal priority. Do not duplicate the same card twice.
- **Product detail:** product-specific hero, clear development status, context image / illustration, then structured narrative and scope. Use diagrams or real product captures only when verified.
- **About:** company principles and working approach told through typography and editorial blocks, not fake team photos or invented company history.
- **Contact:** calm, low-friction page with verified contact routes only. No fake form submission.
- **Footer:** compact sitemap and brand sign-off; no repeated marketing pitch.

## 5. Image and asset direction

### Photography
Use high-quality, properly licensed photography only where it adds context:
- business operations and retail environments for ZiroPOS;
- warehouse aisles, inventory handling, scanning, and logistics workflows for ZiroLogistics;
- abstract material / workspace imagery for company-level brand storytelling.

Prefer authentic documentary-style images with natural light, considered composition, realistic people and environments, and negative space for layout. Avoid generic handshakes, staged boardroom stock photos, obvious AI artifacts, and overused laptop-on-desk shots.

### Generated artwork
Generated assets may be used for brand atmosphere, abstract editorial compositions, and clearly illustrative product concepts. Generated assets must not be represented as screenshots, real devices in customer environments, or proof of shipped functionality.

For product concepts:
- ZiroPOS may use an editorial still-life of a modern point-of-sale terminal, receipt, and retail counter. Keep screens abstract or blank—no fabricated interface.
- ZiroLogistics may use an architectural warehouse scene, storage geometry, parcels, labels, and scanning equipment. Avoid fake data-heavy dashboards.
- Keep assets consistent in lighting, material, crop, and color grading.

### Asset governance
- Record source, license / usage basis, and intended use for every externally sourced image.
- Prefer generated original visuals when rights or provenance are unclear.
- Optimize images to modern formats and responsive sizes; use meaningful alt text for informative images and empty alt text for decorative images.
- Never use social-media images without explicit permission or a clear license.

## 6. Interaction and motion

Motion should be subtle and functional:
- Short opacity / transform transitions for hover, focus, menu, and disclosure states.
- Small entrance reveals only when they help establish reading order; avoid animating every section.
- No scroll hijacking, parallax by default, looping decorative animations, or animation that hides essential content.
- Respect `prefers-reduced-motion`; remove nonessential movement and smooth scrolling when requested.
- All functionality must remain available without animation and on touch devices.

## 7. Responsive behavior

Design and verify at minimum:
- Small mobile: 360px wide
- Large mobile: 430px wide
- Tablet portrait: 768px wide
- Laptop: 1280px wide
- Desktop: 1440px and above

Rules:
- No horizontal page overflow.
- Navigation becomes a clear, keyboard-operable mobile menu.
- Hero composition stacks in a deliberate order; key CTA remains visible without excessive scrolling.
- Display typography scales fluidly and must not create orphaned words or clipped text.
- Product compositions stack without losing their visual distinction.
- Touch targets should be comfortably sized (aim for 44px minimum).
- Images use art direction and cropping appropriate to each breakpoint.

## 8. Accessibility and quality bar

- Semantic landmarks and one clear H1 per page.
- Logical heading hierarchy, descriptive link names, keyboard navigation, and visible focus.
- WCAG 2.2 AA contrast for text and controls.
- Status is communicated by text, not color alone.
- Form controls, if any, have persistent labels and truthful validation / submission states.
- Reduced-motion support.
- Page content is usable with images disabled and at narrow viewport widths.

## 9. Information architecture

The corporate website is the parent brand hub:
- Home
- Products
  - ZiroPOS
  - ZiroLogistics
- About
- Portfolio / Work (only verified case studies)
- Contact
- Privacy Policy
- Terms

Indonesian is the default locale and English remains available. Language switching should preserve the equivalent route when it exists.

## 10. Content and trust boundaries

Allowed:
- Explain ZiroCraft as a software company / product builder.
- Describe intended product audiences and development direction with careful wording.
- Mark ZiroPOS and ZiroLogistics as **In Development**.
- Present real technical work as a case study with its actual status.

Not allowed without evidence:
- Customer counts, testimonials, partner logos, certifications, performance figures, uptime claims, pricing, release dates, production-readiness, or general availability.
- Presenting generated mockups as real application screens.
- Inventing contact information, office details, team size, awards, or company history.

## 11. Reference synthesis

The five user-provided repositories are used as research inputs, not as templates:

- [Vercel Agent Skills](https://github.com/vercel-labs/agent-skills): implementation quality, accessibility, responsive behavior, performance, composition, and content discipline. The design direction prioritizes readable hierarchy, semantic controls, reduced motion, and a high finish bar.
- [Microsoft Playwright CLI](https://github.com/microsoft/playwright-cli): browser-based verification of real layouts and interactions at multiple viewport sizes. Use this for visual regression and interaction checks once a browser QA environment is available.
- [VoltAgent Awesome Design MD](https://github.com/VoltAgent/awesome-design-md): design-system documentation as a first-class artifact, with explicit tokens and component/layout rules. This informed the dedicated palette, typography, grid, imagery, and motion sections in this document.
- [Taste Skill](https://github.com/Leonxlnx/taste-skill): distinctive art direction, non-generic composition, purposeful motion, strong typography, and a high finish bar. This is the primary inspiration for the editorial layout approach, adapted to ZiroCraft rather than copied.
- [Anthropic Claude Plugins Official](https://github.com/anthropics/claude-plugins-official): clear organization and maintainable conventions for project assets and supporting metadata. This is an implementation-organization reference, not a visual design reference.

The resulting ZiroCraft design must be original and grounded in the brand and product facts above.

## 12. Definition of done

- Each page has a distinct layout serving a distinct visitor task.
- No repeated section disguised with different copy.
- No generic repeated card grid across the site.
- Images have clear purpose, provenance, and correct responsive treatment.
- Product status and product claims are truthful.
- Mobile, tablet, and desktop compositions are deliberately designed.
- Keyboard, contrast, reduced-motion, and semantic checks pass.
- Lint, type checks, and production build pass in CI.
- Browser screenshots and interaction checks are reviewed before merge.
