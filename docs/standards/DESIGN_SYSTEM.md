# Zirocraft Design System

Status: project standard, to be finalized visually in Phase 4.
Scope: public company website and product-marketing pages. This is a system of constraints, not a preselected visual identity.

## Brand architecture
- Zirocraft is the parent technology company. Products (including ZiroPOS) are presented as a portfolio, never as the whole company identity.
- Company pages explain who Zirocraft is, what it builds, why it exists, and how to engage.
- Product pages explain a specific product, its real audience, workflows, capabilities, and next action.
- Never invent customers, testimonials, adoption numbers, certifications, awards, integrations, or product capabilities.

## Design principles
1. Specific before decorative: derive the concept and imagery from Zirocraft's real work, name, product interfaces, and business context.
2. Distinctive, not derivative: study design references for principles and composition; do not reproduce another brand's identity, copy, proprietary assets, or signature layouts.
3. Substance before ornament: every section must communicate a claim supported by content, evidence, a real visual, or a useful action.
4. Editorial hierarchy: clear type scale, intentional line lengths, strong contrast, consistent spacing, purposeful section rhythm.
5. Product truth: product UI shown in marketing must be an authentic screenshot or a carefully implemented representation of a verified workflow; no invented vanity metrics.
6. Accessible by default: semantic landmarks, keyboard access, visible focus, sufficient contrast, meaningful alt text, reduced-motion support, and touch targets.
7. Responsive by design: compose for narrow screens first, then adapt deliberately to tablet and desktop; no horizontal overflow.

## Tokens and components
- Centralize color, typography, spacing, radius, border, shadow, and motion tokens in the global theme layer. Avoid scattered one-off hex values and arbitrary spacing.
- Use semantic tokens (background, foreground, muted, surface, border, accent, focus) rather than naming colors by appearance in components.
- Establish a restrained type system with display, heading, body, label, and code roles. Body text must remain comfortably readable.
- Components must have clear variants and documented intent; avoid near-duplicate components and unbounded boolean props.
- Buttons and links must be distinguishable. Every interactive control needs hover, focus-visible, active, disabled, and loading states where applicable.
- Use real image assets with known provenance and appropriate optimization. Set dimensions/aspect ratio to avoid layout shift; lazy-load below-the-fold imagery.
- Motion must communicate state or guide attention, never block content. Respect prefers-reduced-motion.

## Page composition
- Build page structure from the argument: audience, claim, supporting proof, and one primary visitor action.
- Do not force every page into a generic hero + three cards + testimonial + CTA sequence.
- Use a clear heading hierarchy and one H1 per page. Keep paragraphs and measure readable.
- Use cards only when the content is genuinely grouped; do not wrap every section in a card.
- Keep navigation predictable and concise. Mobile navigation must be keyboard- and screen-reader-operable.

## Content and assets
- Write in plain, specific language. Avoid empty claims such as “revolutionary”, “world-class”, or “seamless” without proof.
- Public-facing copy should use one consistent language per page; localization decisions belong to the content plan.
- Maintain attribution and license records for third-party images, fonts, icons, and copied code.
- Prefer original diagrams, product captures, and commissioned/generated assets where they better explain Zirocraft's actual work.

## Deferred decision
The final Zirocraft art direction (visual concept, palette, typography, imagery, logo treatment, motion language) is intentionally not locked here. It must be decided in Phase 4 after the repository audit and brand inventory.
