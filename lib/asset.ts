/**
 * Prepends the repo basePath to absolute /public paths for assets that do NOT
 * pass through next/image (video <source> and <video> poster, etc.). Mirrors
 * lib/imageLoader.ts. At custom-domain (chefcrusco.com) cutover, set basePath
 * to "" here as well, alongside next.config.ts and lib/imageLoader.ts.
 */
const basePath = "/chefcrusco-web";

export function asset(src: string): string {
  if (!src.startsWith("/")) return src;
  if (src.startsWith(basePath)) return src;
  return `${basePath}${src}`;
}
