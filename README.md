# Zirocraft Official Website

The official corporate website of **Zirocraft**, a technology company developing practical digital solutions for growing businesses.

The corporate website presents Zirocraft as a company and provides a central portfolio for current and future products. Product applications remain independent from this website.

## Product Portfolio

| Product | Category | Public status |
| --- | --- | --- |
| ZiroPOS | Point of Sale & Business Management | In Development |
| ZiroLogistics | Warehouse Management System (WMS) | In Development |

Product descriptions communicate current development direction and should not be interpreted as a guarantee that every capability is already available.

## Languages and Routes

Indonesian is the default language. English is also supported.

- `/` redirects to `/id`.
- `/id/*` contains Indonesian pages.
- `/en/*` contains English pages.
- Previous non-localized routes redirect to their Indonesian equivalents.

The language switcher keeps the current page path when an equivalent page exists in the other language.

## Technology Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint 9

## Getting Started

### Requirements

- Node.js 20.9 or later
- npm

### Installation

```bash
git clone https://github.com/Youuzzi/Zirocraft-Official-Website.git
cd Zirocraft-Official-Website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run lint` | Run ESLint |
| `npm run build` | Create a production build |
| `npm run start` | Start the production server |

## Project Structure

```text
src/
  app/
    (root)/             # Root redirect and default document layout
    [locale]/           # Indonesian and English routes
      products/
        [slug]/         # Data-driven product detail pages
  components/
    layout/             # Navbar, footer, language switcher
  lib/
    i18n/               # Locale dictionaries
    products.ts         # Central product catalog

public/
  MyLogo/               # Official Zirocraft logo assets
```

## Adding a Product

Add a product record to `src/lib/products.ts`. The catalog is shared by the homepage, product catalogue, portfolio overview, and product detail route. Use a stable slug, localized category and copy, and an accurate status.

Supported product statuses are `available`, `in-development`, and `coming-soon`. Only use `available` when public availability has been confirmed.

## Ownership

This repository contains proprietary source code and brand materials owned by Zirocraft.
