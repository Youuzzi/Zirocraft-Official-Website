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
for (const [path, expected] of routes) {
  try {
    const response = await request(path);
    const html = await response.text();
    if (!response.ok) failures.push(`${path}: expected HTTP 200, received ${response.status}`);
    if (!html.includes(expected)) failures.push(`${path}: expected page marker "${expected}" was not found`);
    if (!html.includes("<title>")) failures.push(`${path}: document title is missing`);
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

if (failures.length) {
  console.error("Production route smoke tests failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
} else {
  console.log(`Production route smoke tests passed: ${routes.length} localized pages, 2 Open Graph images, robots.txt, and sitemap.xml.`);
}
