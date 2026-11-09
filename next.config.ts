import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  images: { remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }, { protocol: "https", hostname: "images.pexels.com" }] },
  async redirects() { return [
    { source: "/products", destination: "/id/products", permanent: true },
    { source: "/products/:path*", destination: "/id/products/:path*", permanent: true },
    { source: "/about", destination: "/id/about", permanent: true },
    { source: "/contact", destination: "/id/contact", permanent: true },
    { source: "/privacy-policy", destination: "/id/privacy-policy", permanent: true },
    { source: "/terms", destination: "/id/terms", permanent: true }
  ]; },
  turbopack: { rules: { "*.css": { loaders: ["@tailwindcss/turbopack"], as: "*.css" } } }
};
export default nextConfig;