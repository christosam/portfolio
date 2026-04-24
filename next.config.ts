import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repo = "portfolio";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? `/${repo}` : "",
  },
};

export default nextConfig;
