import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    const securityHeaders = [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "X-Frame-Options", value: "DENY" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
      { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
      ...(process.env.NODE_ENV === "production"
        ? [{ key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" }]
        : [])
    ];

    return [{ source: "/:path*", headers: securityHeaders }];
  },
  cacheComponents: true,
  partialPrefetching: true,
  async redirects() {
    return [
      { source: "/products", destination: "/id/products", permanent: true },
      { source: "/products/:path*", destination: "/id/products/:path*", permanent: true },
      { source: "/about", destination: "/id/about", permanent: true },
      { source: "/services", destination: "/id/services", permanent: true },
      { source: "/portfolio", destination: "/id/portfolio", permanent: true },
      { source: "/contact", destination: "/id/contact", permanent: true },
      { source: "/privacy-policy", destination: "/id/privacy-policy", permanent: true },
      { source: "/terms", destination: "/id/terms", permanent: true }
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css"
      }
    }
  }
};

export default nextConfig;
