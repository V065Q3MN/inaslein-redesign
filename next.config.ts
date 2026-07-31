import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/inaslein-redesign",
  assetPrefix: "/inaslein-redesign/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
