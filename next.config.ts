import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  trailingSlash: true,
  cacheComponents: true,
  partialPrefetching: true,
  async redirects() {
    return [
      {
        source: "/mobile-tyre-repair-campbelltown",
        destination: "/",
        permanent: true,
      },
      {
        source: "/mobile-tyre-repair-campbelltown/",
        destination: "/",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "quickfitmobiletyres.com.au",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
      },
    ],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
