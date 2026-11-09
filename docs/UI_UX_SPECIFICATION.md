# Zirocraft Official Website — UI/UX Specification

**Document:** UI/UX Specification v1.0  
**Status:** Proposed baseline for implementation  
**Repository:** `Youuzzi/Zirocraft-Official-Website`  
**Target branch:** `feature/corporate-product-portfolio`  
**Last updated:** 2026-11-10

## 1. Product and website direction

Zirocraft is the corporate website and parent brand for a growing portfolio of software products. It must communicate the company first, then make its products discoverable.

- Maintain one official corporate website and one product catalogue.
- Present ZiroPOS and ZiroLogistics WMS as separate products under Zirocraft.
- Keep each product's operational application separate from the corporate website. Do not imply that the marketing website is the application login or dashboard.
- Keep the information architecture extensible so future products can be added without redesigning the corporate structure.
- Treat this as a real long-term company website and a public engineering portfolio.
- Both current products are in development. Clearly label them **In Development**; do not imply general availability, production readiness, customer adoption, certifications, or capabilities that have not been verified.

## 2. Audiences and primary journeys

### Audiences
1. Business owners and operators evaluating software for their operations.
2. Potential partners, collaborators, and prospective customers.
3. Recruiters and developers evaluating Zirocraft's engineering work.
4. Existing visitors returning to learn about a product or contact the company.

### Primary journeys
- Understand what Zirocraft is → browse the product portfolio → inspect a product → contact Zirocraft.
- Arrive from a product-specific search → understand the product's purpose and current development status → explore its direction → contact Zirocraft.
- Learn about the company → review its approach and portfolio → contact Zirocraft.

## 3. Information architecture and routes

Use locale-prefixed routes as the canonical URL structure:

| Page | Indonesian | English |
|---|---|---|
| Home | `/id` | `/en` |
| About | `/id/about` | `/en/about` |
| Product catalogue | `/id/products` | `/en/products` |
| ZiroPOS | `/id/products/ziropos` | `/en/products/ziropos` |
| ZiroLogistics WMS | `/id/products/zirologistics` | `/en/products/zirologistics` |
| Contact | `/id/contact` | `/en/contact` |
| Privacy policy | `/id/privacy-policy` | `/en/privacy-policy` |
| Terms of service | `/id/terms` | `/en/terms` |

Implementation requirements:
- Indonesian is the default locale; English is available through a visible language switcher.
- Locale switching should preserve the equivalent page when a translation exists. If it does not, send the visitor to the corresponding locale home or catalogue rather than a broken URL.
- Migrate existing unprefixed public routes to their Indonesian equivalents with permanent redirects where appropriate. Do not leave duplicate indexable copies.
- Keep product slugs stable across locales.
- Provide working not-found handling and ensure all internal links use canonical locale-aware paths.

## 4. Global shell

### Header and navigation
- Use the official Zirocraft logo asset from `public/MyLogo/`; do not recreate or replace the logo with plain text where the asset is suitable.
- Primary navigation: Products, About, Contact.
- Products navigation must expose both ZiroPOS and ZiroLogistics WMS, plus a link to the full catalogue.
- Include a clearly visible ID/EN language switcher.
- Use one restrained primary CTA, such as **Explore Products**. Do not privilege ZiroPOS over WMS in the corporate header.
- Sticky header is acceptable if it remains compact and does not obscure anchors.
- Mobile navigation must be keyboard accessible, have a clear expanded/collapsed state, and close after navigation.

### Footer
- Company identity and concise corporate positioning.
- Product links for ZiroPOS and ZiroLogistics WMS.
- Company links: About and Contact.
- Legal links: Privacy Policy and Terms of Service.
- Copyright year should be generated dynamically.
- Do not add social links, addresses, phone numbers, or legal claims unless verified and supplied.

## 5. Page specifications

### 5.1 Home
Purpose: communicate the Zirocraft company proposition and introduce the product portfolio equally.

Required sections:
1. **Corporate hero:** clear statement about building practical technology for business operations; concise supporting copy; CTA to products and secondary CTA to About.
2. **Company introduction:** who Zirocraft is and what kinds of problems it aims to solve. Avoid unsupported claims about company size, years of operation, or customer base.
3. **Product portfolio:** two balanced product cards for ZiroPOS and ZiroLogistics WMS. Each card includes purpose, In Development status, and a product-detail link.
4. **Engineering approach:** practical, adaptable, maintainable; explain these as principles rather than proven outcomes.
5. **Contact CTA:** invite business enquiries and collaboration.

The current homepage features ZiroPOS alone. Replace that imbalance with a portfolio section where both products receive comparable visual priority.

### 5.2 About
Purpose: explain the company identity, mission, vision, and development principles.

Required sections:
1. About hero with corporate positioning.
2. Who we are: factual description of Zirocraft as a software/technology product builder.
3. Mission and vision: grounded in useful, practical technology for real operational needs.
4. Working principles: practical, adaptable, maintainable.
5. Portfolio overview linking to both products.
6. Contact CTA.

Do not invent founders, team size, office locations, company history, awards, or customer testimonials.

### 5.3 Products catalogue
Purpose: make the complete Zirocraft portfolio easy to understand and compare.

Required sections:
1. Catalogue hero.
2. Product cards for ZiroPOS and ZiroLogistics WMS.
3. Each card includes product name, category, short purpose statement, In Development status, and detail-page link.
4. A short explanation that products are developed for distinct operational domains.
5. Contact CTA.

The layout must accommodate additional product cards without requiring a new page template.

### 5.4 ZiroPOS detail
Purpose: describe the product direction without presenting unfinished functionality as available.

Required sections:
1. Product hero and In Development status.
2. Product overview: multi-tenant point-of-sale and business-management platform.
3. Intended business environments: retail, cafe, restaurant, and other suitable businesses, framed as design scope rather than guaranteed fit.
4. Product direction and high-level principles: flexible business context, structured operations/access, and support for multi-store growth.
5. Link back to catalogue and contact CTA.

Avoid publishing pricing, release dates, live-demo claims, customer logos, performance figures, or a feature checklist unless each item has been validated and approved.

### 5.5 ZiroLogistics WMS detail
Purpose: introduce the warehouse-management product and its intended audience.

Required sections:
1. Product hero and In Development status.
2. Product overview: warehouse management software intended to help structure warehouse operations.
3. Intended audience and scope: small-to-medium warehouse operations as the current development focus.
4. High-level operational domains may include warehouse/location structure, item/SKU handling, inbound and outbound flows, stock visibility, and internal stock movement only where confirmed against the current product implementation.
5. Explain that the product is being developed iteratively, with future expansion possible; do not market enterprise-scale or advanced capabilities as already delivered.
6. Link back to catalogue and contact CTA.

Do not imply that ZiroLogistics WMS is production-ready, fully audited, or available for customer deployment.

### 5.6 Contact
Purpose: provide a reliable path for enquiries.

Required sections:
1. Contact hero with clear invitation.
2. Available verified contact channel(s) only.
3. If a form is implemented, include accessible labels, validation, loading/success/error states, spam protection, and a real backend delivery path. Never show a fake success state or a nonfunctional submit button.
4. Provide a clear fallback contact method if the form is unavailable.

Do not fabricate an email address, phone number, or office address.

### 5.7 Privacy policy and terms
- Keep both pages accessible from every locale's footer.
- Legal content must reflect the actual data collection, services, and operating practices.
- Do not invent a legal entity name, jurisdiction, data retention period, third-party processor, or contractual commitment.
- If the actual practices are not yet confirmed, mark the content as requiring owner/legal review before publication.

## 6. Visual design system

The current baseline is a light, clean corporate interface with Geist typography and blue as the primary accent. Retain the established identity while improving consistency.

- **Brand:** use the supplied official logo; preserve its aspect ratio and clear space.
- **Typography:** Geist Sans for interface and body; Geist Mono only for purposeful technical details.
- **Palette:** white and subtle slate surfaces, dark navy for high-contrast hero areas, blue accent for links and primary actions. Avoid making every section a dark panel.
- **Layout:** consistent content container, predictable spacing scale, clear section rhythm, and restrained card borders/shadows.
- **Components:** shared buttons, links, badges/status labels, product cards, section headings, and page containers.
- **Imagery:** only use assets with documented usage rights or generated visuals. Current confirmed owned visual asset is the official logo. Do not fabricate product screenshots or imply generated dashboard art is a real product interface.
- **Responsive behavior:** mobile-first; no horizontal overflow; readable line lengths; product cards stack cleanly; navigation and CTAs remain usable on narrow screens.
- **Motion:** restrained transitions only; respect reduced-motion preferences.

## 7. Accessibility and interaction

Target WCAG 2.2 AA:
- Semantic landmarks and logical heading hierarchy.
- Keyboard-operable navigation, language switcher, menus, and forms.
- Visible focus indicators and sufficient color contrast.
- Accessible names for icon-only controls; decorative visuals hidden from assistive technology.
- Form errors associated with their fields and announced appropriately.
- Touch targets sized for comfortable mobile use.
- Respect `prefers-reduced-motion`.

## 8. SEO and localization

- Unique localized title and description for every page.
- Correct canonical URL and reciprocal `hreflang` alternate links for Indonesian and English pages.
- Localized Open Graph title/description and social preview metadata.
- Sitemap includes only canonical, indexable routes.
- Robots rules must not block public product and company pages.
- Structured data must reflect only verified company and product facts; do not invent ratings, offers, prices, or reviews.
- Use natural Indonesian and English copy, not literal machine-style translation.

## 9. Content governance

Allowed:
- Describe product purpose and development direction using verified repository/product context.
- Label both products In Development.
- Explain intended audiences and high-level domains with appropriately qualified language.

Not allowed without explicit evidence/approval:
- “Production ready”, “available now”, guaranteed outcomes, customer counts, testimonials, partner logos, certifications, security/compliance guarantees, pricing, release dates, uptime/performance claims, or unsupported feature promises.

## 10. Implementation and acceptance checklist

- [ ] Read the repository's `AGENTS.md` instructions and the relevant installed Next.js 16.4.3 documentation before implementing Next.js code.
- [ ] Inspect existing routes and preserve useful content while migrating to the new information architecture.
- [ ] Build shared locale-aware layout, header, footer, navigation, and product-card components.
- [ ] Implement Indonesian and English routes with correct language switching and metadata.
- [ ] Give ZiroPOS and ZiroLogistics WMS equal portfolio visibility.
- [ ] Implement all specified page templates and legal/contact routes without fabricated information.
- [ ] Verify all internal links, redirects, canonical URLs, and not-found behavior.
- [ ] Check responsive layouts at mobile, tablet, and desktop widths.
- [ ] Check keyboard navigation, focus, contrast, and reduced-motion behavior.
- [ ] Run lint, type checks (if configured), and production build using the repository's installed toolchain.
- [ ] Review the final diff and report what was changed, what was tested, and what remains blocked.

## 11. Known repository-specific implementation gate

The repository's root `AGENTS.md` explicitly requires consulting the installed Next.js documentation under `node_modules/next/dist/docs/` because this project uses Next.js 16.4.3 and may have breaking API/convention differences. The GitHub-hosted repository does not contain that installed package documentation. Before writing or changing Next.js application code, the implementation environment must provide access to the local checkout and installed dependencies so the required documentation can be read. Do not substitute assumptions from older Next.js versions.
