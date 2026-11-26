import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";

const baseUrl = process.env.SMOKE_BASE_URL ?? "http://127.0.0.1:3000";
const outputDirectory = "artifacts/browser-qa";
const failures = [];
const locales = ["id", "en"];
const homeWidths = [320, 375, 768, 1024, 1440];
const reviewWidths = [320, 1440];

await mkdir(outputDirectory, { recursive: true });

const browser = await chromium.launch({ headless: true });

async function openPage(page, path) {
  const response = await page.goto(new URL(path, baseUrl).toString(), { waitUntil: "domcontentloaded" });
  if (!response?.ok()) failures.push(`${path}: navigation returned HTTP ${response?.status() ?? "no response"}`);
  await page.locator("main h1").first().waitFor({ state: "visible" });
}

async function assertNoHorizontalOverflow(page, path, width) {
  const dimensions = await page.evaluate(() => ({
    viewport: window.innerWidth,
    document: document.documentElement.scrollWidth,
    body: document.body.scrollWidth
  }));
  if (dimensions.document > dimensions.viewport + 1 || dimensions.body > dimensions.viewport + 1) {
    failures.push(`${path} at ${width}px: horizontal overflow (viewport ${dimensions.viewport}, document ${dimensions.document}, body ${dimensions.body})`);
  }
}

async function capture(page, locale, route, width, height = 1000) {
  await page.setViewportSize({ width, height });
  await openPage(page, `/${locale}${route}`);
  await assertNoHorizontalOverflow(page, `/${locale}${route}`, width);
  const safeRoute = route ? route.replaceAll("/", "-").replace(/^-/, "") : "home";
  await page.screenshot({
    path: `${outputDirectory}/${locale}-${safeRoute}-${width}px.png`,
    fullPage: true,
    animations: "disabled"
  });
}

for (const locale of locales) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  page.on("pageerror", (error) => failures.push(`/${locale}: uncaught browser error: ${error.message}`));

  for (const width of homeWidths) {
    await page.setViewportSize({ width, height: 1000 });
    await openPage(page, `/${locale}`);
    await assertNoHorizontalOverflow(page, `/${locale}`, width);

    const skipLink = page.locator('a[href="#main-content"]').first();
    await page.keyboard.press("Tab");
    const firstFocusedHref = await page.evaluate(() => document.activeElement?.getAttribute("href"));
    if (firstFocusedHref !== "#main-content") {
      failures.push(`/${locale} at ${width}px: skip-to-content is not the first keyboard stop`);
    }
    if (!(await skipLink.isVisible())) {
      failures.push(`/${locale} at ${width}px: skip-to-content link is not visible on keyboard focus`);
    }

    const logo = page.locator('header img[alt="ZiroCraft"]').first();
    await logo.waitFor({ state: "visible" });
    try {
      await page.waitForFunction(() => {
        const image = document.querySelector('header img[alt="ZiroCraft"]');
        return image instanceof HTMLImageElement && image.complete && image.naturalWidth > 0;
      }, null, { timeout: 10_000 });
    } catch {
      const imageState = await logo.evaluate((image) => ({ src: image.currentSrc, complete: image.complete, naturalWidth: image.naturalWidth }));
      failures.push(`/${locale} at ${width}px: header logo did not load (${JSON.stringify(imageState)})`);
    }

    if (width < 1024) {
      const summary = page.locator("header details > summary");
      if (!(await summary.isVisible())) failures.push(`/${locale} at ${width}px: mobile menu trigger is hidden`);
      await summary.click();
      if (!(await page.locator("#mobile-navigation").isVisible())) {
        failures.push(`/${locale} at ${width}px: mobile menu did not open`);
      }
      await summary.click();
      if (await page.locator("#mobile-navigation").isVisible()) {
        failures.push(`/${locale} at ${width}px: mobile menu did not close`);
      }
    } else if (!(await page.locator("header nav").first().isVisible())) {
      failures.push(`/${locale} at ${width}px: desktop navigation is hidden`);
    }

    if ([320, 768, 1440].includes(width)) {
      await page.screenshot({
        path: `${outputDirectory}/${locale}-home-${width}px.png`,
        fullPage: true,
        animations: "disabled"
      });
    }
  }

  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.setViewportSize({ width: 1440, height: 1000 });
  await openPage(page, `/${locale}`);
  const animationDuration = await page.locator(".motion-rise").first().evaluate((element) => getComputedStyle(element).animationDuration);
  if (Number.parseFloat(animationDuration) > 0.001) {
    failures.push(`/${locale}: reduced-motion preference was not respected (animation duration ${animationDuration})`);
  }

  for (const route of ["/products/ziropos", "/contact"]) {
    for (const width of reviewWidths) {
      await capture(page, locale, route, width);
    }
  }

  if (locale === "en") {
    await page.setViewportSize({ width: 1440, height: 1000 });
    await openPage(page, "/en/products/ziropos");
    if (!(await page.getByText("In development", { exact: false }).isVisible())) {
      failures.push("/en/products/ziropos: product development status is not visible");
    }
  } else {
    await page.setViewportSize({ width: 1440, height: 1000 });
    await openPage(page, "/id/products/ziropos");
    if (!(await page.getByText("Dalam pengembangan", { exact: false }).isVisible())) {
      failures.push("/id/products/ziropos: product development status is not visible");
    }
  }

  await page.close();
}

await browser.close();

if (failures.length) {
  console.error("Browser QA failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
} else {
  console.log("Browser QA passed: 320–1440px responsive layouts, localized navigation, mobile menu, keyboard skip link, reduced motion, product status, logo loading, and screenshots.");
}
