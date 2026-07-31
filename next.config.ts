import type { NextConfig } from "next";

// Set by the GitHub Actions Pages workflow only — local dev and any future
// custom-domain deploy (e.g. Vercel) are unaffected.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGithubPages ? "/inaslein-redesign" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: isGithubPages ? `${basePath}/` : "",
  trailingSlash: true,
  images: {
    // GitHub Pages serves plain static files — no image optimization server.
    unoptimized: true,
  },
  env: {
    // src/lib/basePath.ts reads this to prefix <img>/<Image> src strings by
    // hand — Next only auto-rewrites next/link and internal navigation.
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
