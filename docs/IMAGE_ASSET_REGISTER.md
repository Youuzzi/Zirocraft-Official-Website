# Website Image Asset Register

**Project:** Zirocraft Official Website  
**Status:** Initial contextual photography register  
**Review note:** Stock photography is illustrative only. It does not depict Zirocraft employees, offices, customers, partners, deployments, or endorsements.

## Current visual direction

The redesigned homepage and portfolio use original SVG conceptual artwork for the primary brand storytelling. The existing Unsplash retail and warehouse photos remain available in `src/lib/site-images.ts` for selective contextual use on pages where photography adds meaning. They should not be treated as product UI or evidence of Zirocraft operations.

| Asset use | Source / creator | Original source page | License status | Website use |
| --- | --- | --- | --- | --- |
| Retail / point-of-sale environment | Blake Wisz / Unsplash | https://unsplash.com/photos/man-buying-item-in-shop-Kx3o6_m1Yv8 | Unsplash License; verify source page before launch | Contextual retail photography |
| Warehouse interior and shelving | Russ Murray / Unsplash | https://unsplash.com/photos/a-warehouse-is-filled-with-shelves-and-boxes-M7G_m5XJ-go | Unsplash License; verify source page before launch | Contextual warehouse photography |

## Source verification note

The source pages above identify Blake Wisz for the retail reference and Russ Murray for the warehouse reference. The current CDN image URLs in `src/lib/site-images.ts` have not yet been conclusively matched to these exact source-page image files. Treat the source pages as candidates until that mapping is verified; do not publish photographer attribution as a confirmed match to a displayed CDN asset before verification.

## Usage safeguards

- Unsplash permits free personal and commercial image use under its license; attribution is appreciated but not required.
- The license does not itself grant rights to recognizable people, trademarks, logos, or other protected material depicted in an image.
- Never describe stock images as Zirocraft product screenshots, customers, staff, offices, case studies, or deployments.
- Review the original source pages and any depicted-person, trademark, and property rights before production launch.
- Prefer Zirocraft-owned photography or commissioned visuals when available.
- Re-check source pages and license terms before production launch.
