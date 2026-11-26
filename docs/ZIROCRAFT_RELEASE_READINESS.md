# ZiroCraft Website Release Readiness

This checklist separates repository quality from launch readiness. A passing CI build does not mean the site has been visually approved or deployed.

## Before merging the rebuild

- [ ] Manually inspect the Playwright screenshot artifact for Indonesian and English homepages at 320px, 768px, and 1440px, plus all supporting, product, and legal pages at 320px and 1440px.
- [x] Automated Chromium checks verify mobile menu open/close, desktop navigation visibility, and responsive overflow at 320, 375, 768, 1024, and 1440px across home, about, services, portfolio, product catalogue/details, contact, privacy, and terms routes.
- [x] Production smoke tests verify the root redirect, crawl internal navigation links, and cover localized product, service, portfolio, and legal routes.
- [x] Browser QA verifies the skip-to-content link is the first keyboard stop; manual keyboard review remains recommended.
- [x] Browser QA verifies the reduced-motion preference is respected.
- [x] Automated axe-core scans cover every localized route at 320px and 1440px against WCAG 2.0/2.1/2.2 A/AA and axe best-practice rules. Any remaining incomplete/manual-review items must still be reviewed.
- [ ] Inspect the generated Open Graph image for both `/id` and `/en` routes.
- [ ] Confirm product descriptions still identify ZiroPOS and ZiroLogistics as **In Development**.
- [ ] Confirm no illustrative product artwork is mistaken for a live product screenshot.
- [ ] Verify the contact email and mailto link.
- [ ] Review privacy and terms content for legal accuracy before treating it as a final legal instrument.

## Before production deployment

- [ ] Confirm ownership and DNS control of the production domain.
- [ ] Configure `NEXT_PUBLIC_SITE_URL` to the verified canonical origin.
- [ ] Verify HTTPS, redirects, canonical metadata, `robots.txt`, and `sitemap.xml` on the deployed host.
- [ ] Check the Open Graph preview using a social-sharing debugger after deployment.
- [ ] Confirm hosting, environment variables, and deployment settings.
- [ ] Re-test the deployed site on real mobile and desktop browsers.

## Current validation boundary

GitHub Actions validates ESLint, the Next.js production build, production-server route/security/SEO smoke tests, internal navigation links, Chromium browser behavior at 320–1440px, and automated axe-core accessibility rules on localized routes. It uploads responsive screenshots and a machine-readable accessibility report as short-lived workflow artifacts. Automated scans cannot establish full WCAG conformance or replace keyboard/screen-reader testing, manual visual approval, testing on physical devices, domain ownership, DNS, and production deployment; those checks remain separate and must not be reported as complete until they have actually been performed.
