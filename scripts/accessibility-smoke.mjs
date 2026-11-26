import AxeBuilder from "@axe-core/playwright";
import { chromium } from "playwright";
import { mkdir, writeFile } from "node:fs/promises";

const baseUrl = process.env.SMOKE_BASE_URL ?? "http://127.0.0.1:3000";
const outputDirectory = "artifacts/accessibility";
const locales = ["id", "en"];
const routes = [
  "",
  "/about",
  "/services",
  "/portfolio",
  "/products",
  "/products/ziropos",
  "/products/zirologistics",
  "/contact",
  "/privacy-policy",
  "/terms"
];
const viewports = [
  { width: 320, height: 900, routes: [""] },
  { width: 1440, height: 1000, routes }
];
const results = [];
const failures = [];

await mkdir(outputDirectory, { recursive: true });
const browser = await chromium.launch({ headless: true });

try {
  for (const locale of locales) {
    // axe-playwright requires pages created from an explicit browser context.
    const context = await browser.newContext();
    const page = await context.newPage();
    page.on("pageerror", (error) => {
      failures.push(`/${locale}: uncaught browser error: ${error.message}`);
    });

    for (const viewport of viewports) {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });

      for (const route of viewport.routes) {
        const path = `/${locale}${route}`;
        const response = await page.goto(new URL(path, baseUrl).toString(), {
          waitUntil: "domcontentloaded"
        });

        if (!response?.ok()) {
          failures.push(`${path}: navigation returned HTTP ${response?.status() ?? "no response"}`);
          continue;
        }

        try {
          await page.locator("main h1").first().waitFor({ state: "visible", timeout: 10_000 });
        } catch {
          failures.push(`${path}: main heading was not visible before accessibility scan`);
          continue;
        }

        const accessibility = await new AxeBuilder({ page })
          .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa", "best-practice"])
          .analyze();

        results.push({
          path,
          viewport: viewport.width,
          passes: accessibility.passes.length,
          incomplete: accessibility.incomplete.length,
          violations: accessibility.violations.map((violation) => ({
            id: violation.id,
            impact: violation.impact,
            help: violation.help,
            helpUrl: violation.helpUrl,
            nodes: violation.nodes.map((node) => ({
              target: node.target,
              html: node.html,
              summary: node.failureSummary
            }))
          }))
        });

        for (const violation of accessibility.violations) {
          failures.push(
            `${path} at ${viewport.width}px: [${violation.impact ?? "unknown"}] ${violation.id} — ${violation.help} (${violation.nodes.length} node(s))`
          );
          for (const node of violation.nodes) {
            failures.push(`  target: ${node.target.join(", ")}`);
            if (node.failureSummary) failures.push(`  ${node.failureSummary.replaceAll("\\n", " ")}`);
          }
        }
      }
    }

    await context.close();
  }
} finally {
  await browser.close();
}

await writeFile(
  `${outputDirectory}/axe-results.json`,
  JSON.stringify({ generatedAt: new Date().toISOString(), results, failures }, null, 2)
);

if (failures.length) {
  console.error("Accessibility audit failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  console.error(`Detailed report: ${outputDirectory}/axe-results.json`);
  process.exitCode = 1;
} else {
  const scanned = results.length;
  console.log(
    `Accessibility audit passed: ${scanned} localized page/viewport combinations scanned against WCAG 2.0/2.1/2.2 A/AA and axe best-practice rules.`
  );
}
