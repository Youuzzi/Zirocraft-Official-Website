# Zirocraft Website — Visual Redesign Direction

**Document:** Visual Redesign Direction v1.0  
**Status:** Approved design direction for implementation  
**Target branch:** `feature/corporate-product-portfolio`  
**Scope:** Full visual and interaction redesign of the corporate website

## 1. Design objective

Move the website from a generic dark-hero / repeated-card marketing template to a distinctive, editorial corporate technology presence.

The site must feel like the home of a serious, product-building technology company. It should communicate Zirocraft first, then present ZiroPOS and ZiroLogistics as two equally important products in a growing portfolio.

The redesign is structural, not cosmetic: page composition, typography, spacing, color, navigation, product storytelling, responsive behavior, and interaction patterns are all in scope.

## 2. Creative direction: Clear, considered, quietly confident

Use a light-first visual language with strong typography, generous whitespace, precise alignment, subtle technical motifs, and a restrained accent palette.

The experience should feel:
- **Confident:** clear statements and strong hierarchy, without exaggerated marketing language.
- **Considered:** editorial layouts, intentional whitespace, and fewer but more meaningful components.
- **Technical:** subtle diagrams, modular geometry, grid references, and abstract system motifs.
- **Human:** natural Indonesian and English copy, approachable contact prompts, and readable content.
- **Expandable:** the design system supports future products without making the homepage feel crowded.

Avoid:
- Repeating the same navy full-width hero on every page.
- Blue gradients, glowing blobs, and grid backgrounds as the default visual identity.
- Generic SaaS dashboard mockups that could be mistaken for real product screenshots.
- Excessive pill badges, rounded cards, decorative borders, and oversized empty hero sections.
- Fake metrics, client logos, testimonials, awards, release dates, or unsupported product capabilities.

## 3. Visual system

### Color direction

Use a warm, near-white canvas rather than pure white everywhere. Use deep ink for primary text and a confident cobalt accent sparingly. Give each product a secondary identity accent while retaining the parent Zirocraft system.

Suggested starting tokens (adjust after implementation review):
- Canvas: `#F7F8FA`
- Surface: `#FFFFFF`
- Soft surface: `#EEF1F5`
- Primary ink: `#111827`
- Secondary text: `#667085`
- Subtle border: `#E3E7ED`
- Zirocraft accent: `#3157D5`
- ZiroPOS accent: `#167C78`
- ZiroLogistics accent: `#C47732`
- Dark contrast surface: `#111827`

Product accents are navigational/illustrative cues, not separate brands. Keep logo use faithful to the supplied assets.

### Typography

- Geist Sans remains the primary family.
- Use larger editorial headlines with tight but readable line-height.
- Body copy should be calm, short, and comfortable to scan.
- Use Geist Mono only for small technical labels, section indices, or metadata—not ordinary paragraphs.
- Establish a consistent type scale and readable maximum line lengths.

### Shape, depth, and imagery

- Prefer clean rectangular compositions with moderate corner radii over rounding every component.
- Use shadows only to establish hierarchy for overlays or floating navigation.
- Create abstract CSS/SVG compositions that express systems, flow, inventory, and connected operations.
- Never present conceptual graphics as actual application UI.
- Use the official logo assets only; no invented product screenshots or customer imagery.

## 4. Global shell

### Header

Create a compact, refined header with:
- Official Zirocraft logo at a consistent visual size.
- Products navigation with an accessible dropdown/panel containing the catalogue, ZiroPOS, and ZiroLogistics.
- About and Contact links.
- A clear ID / EN switcher.
- One restrained primary action leading to the portfolio or contact page.

On mobile, use a real accessible menu button with explicit expanded state, keyboard operation, and close-on-navigation behavior. Avoid relying on an unlabelled decorative interaction.

### Footer

Use a visually distinct deep-ink footer to anchor the page:
- Brand mark and concise company positioning.
- Product links, company links, and legal links in clear columns.
- Contact email only where already verified in repository content.
- A quiet copyright line.
- No invented social profiles, addresses, phone numbers, or company registration details.

## 5. Page composition

### Homepage

The homepage should tell a coherent company story rather than behaving like a generic product landing page.

1. **Editorial hero:** asymmetric two-column composition. Left: short company positioning, strong headline, concise support copy, primary portfolio CTA, secondary About link. Right: original abstract system/architecture artwork built from typography, modular shapes, lines, and product markers. It must not resemble a real software screenshot.
2. **Company statement:** a focused, high-contrast statement about building practical technology around real operational needs.
3. **Portfolio feature:** two balanced but visually distinct product presentations. ZiroPOS and ZiroLogistics receive equal prominence, each with its own accent, concise purpose, In Development status, and detail link.
4. **How we think:** three principles—Practical, Adaptable, Maintainable—presented as editorial numbered items rather than repetitive floating cards.
5. **Company-to-product bridge:** short copy explaining that the products address different operational domains under one company.
6. **Contact close:** clear invitation with a memorable visual transition into the dark footer.

### About

1. A restrained page intro with a clear company statement.
2. A two-column “Who we are” section with a large editorial pull-quote or statement.
3. Mission and vision presented as concise text, not invented corporate history.
4. Working principles as a numbered vertical sequence.
5. A compact portfolio strip linking to both products.
6. Contact CTA.

### Product catalogue

1. A light editorial intro with clear page title and short context.
2. Product entries arranged as a flexible portfolio index, not identical generic cards.
3. Each entry includes product name, category, purpose, In Development status, and detail link.
4. Give ZiroPOS and ZiroLogistics distinct accent treatments while preserving equal hierarchy.
5. Include a short explanation of the different operational domains and a contact close.
6. Layout must scale naturally as products are added.

### Product detail pages

Keep a shared information architecture but give each product a distinct visual treatment:
- Product identity and category.
- Clear In Development status.
- Concise overview and intended audience.
- Carefully qualified development direction based on verified project context.
- A conceptual visual unique to the product domain (point-of-sale/business operations for ZiroPOS; warehouse flow/storage for ZiroLogistics), never a fake screenshot.
- Clear navigation back to the portfolio and contact.

ZiroPOS may be described as being developed for retail, F&B, cafe, restaurant, and multi-store contexts only as intended scope. ZiroLogistics should retain its initial small-to-medium warehouse focus. Do not publish unverified feature inventories.

### Contact and legal pages

Keep the pages visually consistent with the new shell, but prioritize clarity and readability over decorative layouts. Legal text should remain easy to read and must be owner-reviewed before publication.

## 6. Interaction and motion

- Use purposeful hover, focus, and pressed states.
- Use subtle entrance or scroll-linked motion only where it improves comprehension.
- Respect `prefers-reduced-motion`.
- Avoid scroll-jacking, parallax-heavy effects, auto-playing media, and animation that delays access to content.
- All interactive elements must work by keyboard and touch.
- Dropdowns and mobile navigation must expose correct accessible state.

## 7. Responsive behavior

Design from small screens upward:
- Mobile: one-column editorial flow, compact header, readable headlines, no horizontal overflow, full-width portfolio entries.
- Tablet: introduce split layouts where space allows without compressing text.
- Desktop: use asymmetric grids, generous margins, and balanced whitespace.
- Avoid fixed-height hero sections that clip content at short viewport heights.
- Test at narrow mobile, standard mobile, tablet, laptop, and wide desktop widths.

## 8. Content and trust

- Indonesian remains the default language; English must be natural and equivalent in meaning.
- Both products remain visibly **Dalam Pengembangan / In Development**.
- Do not imply that either product is generally available or production-ready.
- Do not fabricate company size, founding story, team, customer base, certifications, pricing, dates, or measurable outcomes.
- The temporary `zirocraft.com` URL is a development placeholder only. It is not a confirmed owned domain and must be replaced with the purchased domain before launch.

## 9. Acceptance criteria

- [ ] All main pages receive a coherent visual redesign, not only the homepage.
- [ ] ZiroPOS and ZiroLogistics have equal portfolio prominence and distinct but related visual identities.
- [ ] The visual system is consistent across Indonesian and English.
- [ ] Desktop, tablet, and mobile layouts are deliberately composed and usable.
- [ ] Header, dropdown, mobile menu, language switcher, and footer links work.
- [ ] Keyboard focus, contrast, semantic structure, and reduced-motion behavior are reviewed.
- [ ] Conceptual graphics cannot be mistaken for product screenshots.
- [ ] No unsupported business or product claims are introduced.
- [ ] Lint, TypeScript, and production build pass after implementation.
- [ ] Temporary domain usage is clearly documented and replaced before production launch.
