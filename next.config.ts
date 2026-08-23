import type { NextConfig } from "next";

/**
 * Static export. Runs on two hosts during the migration:
 *   - GitHub Pages: project page under /chefcrusco-web (CI sets NEXT_PUBLIC_BASE_PATH).
 *   - Vercel: served at the domain root (env unset -> basePath "").
 * The base path is env-driven so one branch builds correctly for both. Keep the
 * three basePath readers in sync: next.config.ts, lib/imageLoader.ts, lib/asset.ts.
 */
const repoBase = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: repoBase,
  trailingSlash: true,
  images: {
    loader: "custom",
    loaderFile: "./lib/imageLoader.ts",
  },
};

export default nextConfig;
