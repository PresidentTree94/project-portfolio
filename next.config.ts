import type { NextConfig } from "next";

const csp = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval' vercel.live https://va.vercel-scripts.com https://cdn.sanity.io;
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: blob: https://cdn.sanity.io https://avatars.githubusercontent.com https://vitals.vercel-insights.com;
  font-src 'self';
  connect-src 'self' https://*.api.sanity.io https://cdn.sanity.io https://vitals.vercel-insights.com;
  frame-ancestors 'none';
  base-uri 'self';
  form-action 'self';
`.replace(/\s{2,}/g, " ").trim();

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Content-Security-Policy", value: csp },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permission-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" }
        ],
      }
    ];
  },
};

export default nextConfig;