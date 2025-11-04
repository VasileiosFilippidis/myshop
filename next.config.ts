// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Don't fail the Vercel build on ESLint issues
    ignoreDuringBuilds: true,
  },
  images: {
    // Optional: allow Unsplash etc. if you switch to next/image later
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
