/**
 * Prepends the deploy's base path to absolute /public paths for assets that do NOT
 * pass through next/image (video <source> and <video> poster, etc.). Mirrors
 * lib/imageLoader.ts and is env-driven to match next.config.ts on both hosts
 * (GitHub Pages: /chefcrusco-web; Vercel: "" / domain root).
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(src: string): string {
  if (!src.startsWith("/")) return src;
  if (src.startsWith(basePath)) return src;
  return `${basePath}${src}`;
}
