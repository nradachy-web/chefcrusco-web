import type { NextConfig } from "next";

/**
 * Static export for GitHub Pages.
 * Staging as a project page at /chefcrusco-web. When this moves to the
 * custom domain chefcrusco.com, set repoBase to "" (and update
 * lib/imageLoader.ts) and add a public/CNAME file.
 */
const repoBase = "/chefcrusco-web";

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
