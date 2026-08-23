/**
 * Custom next/image loader for static export. Prepends the deploy's base path to
 * absolute /public image paths. Env-driven so it matches next.config.ts on both
 * hosts (GitHub Pages: /chefcrusco-web; Vercel: "" / domain root).
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function imageLoader({ src }: { src: string }): string {
  if (/^https?:\/\//.test(src)) return src;
  if (src.startsWith(basePath)) return src;
  if (src.startsWith("/")) return `${basePath}${src}`;
  return src;
}
