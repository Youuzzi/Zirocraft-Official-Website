const baseUrl = process.env.SMOKE_BASE_URL ?? "http://127.0.0.1:3000";

const routes = [
  ["/id", "Membangun teknologi yang bergerak bersama bisnis"],
  ["/en", "Building technology that moves with business"],
  ["/id/about", "ZiroCraft"],
  ["/en/about", "ZiroCraft"],
  ["/id/services", "Layanan"],
  ["/en/services", "Services"],
  ["/id/portfolio", "ZiroLogistics"],
  ["/en/portfolio", "ZiroLogistics"],
  ["/id/products", "ZiroPOS"],
  ["/en/products", "ZiroPOS"],
  ["/id/products/ziropos", "ZiroPOS"],
  ["/en/products/ziropos", "ZiroPOS"],
  ["/id/products/zirologistics", "ZiroLogistics"],
  ["/en/products/zirologistics", "ZiroLogistics"],
  ["/id/contact", "percakapan"],
  ["/en/contact", "conversation"],
  ["/id/privacy-policy", "Kebijakan Privasi"],
  ["/en/privacy-policy", "Privacy Policy"],
  ["/id/terms", "Ketentuan"],
  ["/en/terms", "Terms"]
];

async function request(path) {
  const response = await fetch(new URL(path, baseUrl), { redirect: "manual" });
  return response;
}

async function waitForServer() {
  const deadline = Date.now() + 30_000;
  while (Date.now() < deadline) {
    try {
      const response = await fetch(new URL("/id", baseUrl));
      if (response.ok) return;
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
  throw new Error("Next.js production server did not become ready within 30 seconds.");
}

await waitForServer();

const failures = [];

try {
  const response = await request("/");
  const location = response.headers.get("location");
  if (response.status !== 307 || !location?.endsWith("/id")) {
    failures.push(`/: expected HTTP 307 redirect to /id, received ${response.status} ${location ?? ""}`);
  }
} catch (error) {
  failures.push(`/: ${error instanceof Error ? error.message : String(error)}`);
}

const internalPaths = new Set();
for (const [path, expected] of routes) {
  try {
    const response = await request(path);
    const html = await response.text();
    for (const [, href] of html.matchAll(/href="([^"]+)"/g)) {
      if (href.startsWith("/") && !href.startsWith("//") && !href.startsWith("/#")) {
        internalPaths.add(new URL(href, baseUrl).pathname);
      }
    }
    if (!response.ok) failures.push(`${path}: expected HTTP 200, received ${response.status}`);
    if (!html.includes(expected)) failures.push(`${path}: expected page marker "${expected}" was not found`);
    if (!html.includes("<title>")) failures.push(`${path}: document title is missing`);
    const locale = path.startsWith("/id") ? "id" : "en";
    const expectedOgLocale = locale === "id" ? "id_ID" : "en_US";
    if (!html.includes(`<html lang="${locale}"`)) failures.push(`${path}: document language should be ${locale}`);
    const metaTags = html.match(/<meta\b[^>]*>/g) ?? [];
    const hasMeta = (attribute, value) => metaTags.some((tag) => tag.includes(`${attribute}="${value}"`));
    if (!hasMeta("property", "og:title")) failures.push(`${path}: Open Graph title is missing`);
    if (!hasMeta("property", "og:description")) failures.push(`${path}: Open Graph description is missing`);
    if (!hasMeta("property", "og:locale") || !metaTags.some((tag) => tag.includes(`property="og:locale"`) && tag.includes(`content="${expectedOgLocale}"`))) {
      failures.push(`${path}: Open Graph locale should be ${expectedOgLocale}`);
    }
    if (!metaTags.some((tag) => tag.includes('name="twitter:card"') && tag.includes('content="summary_large_image"'))) {
      failures.push(`${path}: Twitter summary-large-image card is missing`);
    }
  } catch (error) {
    failures.push(`${path}: ${error instanceof Error ? error.message : String(error)}`);
  }
}

for (const [path, expectedType] of [["/id/opengraph-image", "image/png"], ["/en/opengraph-image", "image/png"]]) {
  try {
    const response = await request(path);
    if (!response.ok) failures.push(`${path}: expected HTTP 200, received ${response.status}`);
    if (!response.headers.get("content-type")?.includes(expectedType)) {
      failures.push(`${path}: expected content type ${expectedType}, received ${response.headers.get("content-type")}`);
    }
  } catch (error) {
    failures.push(`${path}: ${error instanceof Error ? error.message : String(error)}`);
  }
}

try {
  const robots = await request("/robots.txt");
  const robotsText = await robots.text();
  if (!robots.ok || !robotsText.includes("https://example.test/sitemap.xml")) {
    failures.push("/robots.txt: canonical sitemap reference is missing");
  }

  const sitemap = await request("/sitemap.xml");
  const sitemapText = await sitemap.text();
  for (const requiredUrl of ["https://example.test/id", "https://example.test/en", "https://example.test/id/products/ziropos", "https://example.test/en/products/zirologistics"]) {
    if (!sitemap.ok || !sitemapText.includes(requiredUrl)) failures.push(`/sitemap.xml: missing ${requiredUrl}`);
  }
} catch (error) {
  failures.push(`SEO endpoints: ${error instanceof Error ? error.message : String(error)}`);
}

for (const path of [...internalPaths].sort()) {
  try {
    const response = await fetch(new URL(path, baseUrl));
    if (!response.ok) failures.push(`Internal navigation link ${path}: expected a successful response, received HTTP ${response.status}`);
  } catch (error) {
    failures.push(`Internal navigation link ${path}: ${error instanceof Error ? error.message : String(error)}`);
  }
}

const securityHeaders = [
  ["x-content-type-options", "nosniff"],
  ["x-frame-options", "DENY"],
  ["referrer-policy", "strict-origin-when-cross-origin"],
  ["permissions-policy", "camera=(), microphone=(), geolocation=()"],
  ["cross-origin-opener-policy", "same-origin"],
  ["strict-transport-security", "max-age=31536000; includeSubDomains"]
];

try {
  const homepage = await request("/id");
  for (const [header, expected] of securityHeaders) {
    const actual = homepage.headers.get(header);
    if (actual !== expected) failures.push(`/id: expected ${header} "${expected}", received "${actual}"`);
  }
} catch (error) {
  failures.push(`Security response headers: ${error instanceof Error ? error.message : String(error)}`);
}

for (const [path, expectedLocation] of [
  ["/about", "/id/about"],
  ["/services", "/id/services"],
  ["/portfolio", "/id/portfolio"],
  ["/products/ziropos", "/id/products/ziropos"]
]) {
  try {
    const response = await request(path);
    const location = response.headers.get("location");
    if (![301, 308].includes(response.status) || !location?.endsWith(expectedLocation)) {
      failures.push(`${path}: expected permanent redirect to ${expectedLocation}, received ${response.status} ${location ?? ""}`);
    }
  } catch (error) {
    failures.push(`${path}: ${error instanceof Error ? error.message : String(error)}`);
  }
}

for (const path of ["/fr", "/id/products/not-a-real-product"]) {
  try {
    const response = await request(path);
    const body = (await response.text()).toLowerCase();
    const isNotFoundPage = body.includes("not found") || body.includes("tidak ditemukan") || body.includes("could not be found");
    // Next.js may stream a not-found boundary after headers have been sent, yielding HTTP 200.
    if (response.status !== 404 && !(response.status === 200 && isNotFoundPage)) {
      failures.push(`${path}: expected a not-found response, received HTTP ${response.status}`);
    }
    if (!isNotFoundPage) failures.push(`${path}: not-found page content was not rendered`);
  } catch (error) {
    failures.push(`${path}: ${error instanceof Error ? error.message : String(error)}`);
  }
}

if (failures.length) {
  console.error("Production route smoke tests failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
} else {
  console.log(`Production route smoke tests passed: root redirect, ${routes.length} localized pages, redirects, internal navigation links, localized SEO metadata, invalid-route 404s, security headers, 2 Open Graph images, robots.txt, and sitemap.xml.`);
}
