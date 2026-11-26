# ZiroCraft Website Release Readiness

This checklist separates repository quality from launch readiness. A passing CI build does not mean the site has been visually approved or deployed.

## Before merging the rebuild

- [ ] Review the Indonesian and English homepage at desktop, tablet, and mobile widths.
- [ ] Verify the mobile disclosure menu opens, closes, and remains usable with keyboard and touch.
- [ ] Follow every primary navigation, footer, product, service, portfolio, and legal link in both locales.
- [ ] Confirm keyboard focus is visible and the skip-to-content link reaches the main content.
- [ ] Check the site with reduced motion enabled.
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

GitHub Actions validates ESLint, the Next.js production build, and a production-server smoke suite covering localized pages, generated Open Graph images, robots.txt, and sitemap.xml. Browser-level visual QA, real-device testing, domain ownership, DNS, and production deployment are separate checks and must not be reported as complete until they have actually been performed.
