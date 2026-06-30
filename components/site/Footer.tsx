"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, footerNav, site } from "@/lib/site";

export function Footer() {
  const pathname = usePathname();
  const minimal = pathname?.startsWith("/lp");

  // Slim footer for paid landing pages: contact + trust + legal only,
  // no sitemap links that would pull the visitor off the offer.
  if (minimal) {
    return (
      <footer className="bg-espresso text-linen/80">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-8 px-5 py-12 sm:flex-row sm:items-end sm:justify-between sm:px-8">
          <div className="max-w-sm">
            <p className="font-display text-2xl text-linen">Chef Crusco</p>
            <p className="mt-3 text-sm leading-relaxed text-linen/65">
              {site.tagline}. {site.subTagline}. Private chef and catering serving{" "}
              {site.serviceArea}.
            </p>
          </div>
          <div className="flex flex-col gap-1 text-sm sm:items-end">
            <a
              href={site.phoneHref}
              className="font-semibold text-linen hover:text-candle"
            >
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="hover:text-candle">
              {site.email}
            </a>
            <p className="mt-2 text-linen/60">Rated 5 stars on Google</p>
            <p className="text-linen/60">TABC and TFSM certified team</p>
          </div>
        </div>
        <div className="border-t border-linen/12">
          <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-2 px-5 py-6 text-xs text-linen/45 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <p>
              &copy; {new Date().getFullYear()} {site.legalName}. {site.serviceArea}.
            </p>
            <p>
              Website and marketing by{" "}
              <a
                href="https://modernapexstrategies.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-linen/60 hover:text-linen"
              >
                Modern Apex Strategies
              </a>
            </p>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-espresso text-linen/80">
      <div className="mx-auto grid w-full max-w-[1280px] gap-10 px-5 py-16 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="max-w-xs">
          <p className="font-display text-2xl text-linen">Chef Crusco</p>
          <p className="mt-4 text-sm leading-relaxed text-linen/65">
            {site.tagline}. {site.subTagline}. Private chef and catering serving{" "}
            {site.serviceArea}.
          </p>
          <p className="mt-5 text-sm">
            <a href={site.phoneHref} className="font-semibold text-linen hover:text-candle">
              {site.phone}
            </a>
          </p>
          <p className="text-sm">
            <a href={`mailto:${site.email}`} className="hover:text-candle">
              {site.email}
            </a>
          </p>
        </div>

        <nav className="flex flex-col gap-3 text-sm">
          <p className="eyebrow text-candle">Explore</p>
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-linen/75 hover:text-linen">
              {item.label}
            </Link>
          ))}
          {footerNav.map((item) => (
            <Link key={item.href} href={item.href} className="text-linen/75 hover:text-linen">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-3 text-sm">
          <p className="eyebrow text-candle">The kitchen</p>
          <p className="text-linen/70">Chefs TFSM certified</p>
          <p className="text-linen/70">Servers and bartenders TABC certified</p>
          <p className="text-linen/70">Over 40 years combined experience</p>
          <p className="mt-2 text-linen/70">Rated 5 stars on Google</p>
        </div>
      </div>

      <div className="border-t border-linen/12">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-2 px-5 py-6 text-xs text-linen/45 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            &copy; {new Date().getFullYear()} {site.legalName}. {site.serviceArea}.
          </p>
          <p>
            Website and marketing by{" "}
            <a
              href="https://modernapexstrategies.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-linen/60 hover:text-linen"
            >
              Modern Apex Strategies
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
