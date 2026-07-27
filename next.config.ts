import type { NextConfig } from "next";

// Set by the GitHub Actions Pages workflow only — local dev and any future
// custom-domain deploy (e.g. Vercel) are unaffected.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGithubPages ? "/inaslein-redesign" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: {
    // GitHub Pages serves plain static files — no image optimization server.
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
