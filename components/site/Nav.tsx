"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site } from "@/lib/site";

export const BOOK_HREF = "#inquiry";

export function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const pathname = usePathname();
  const minimal = pathname?.startsWith("/lp");

  // Distraction-free header for paid landing pages: brand + phone + one CTA.
  // No menu links, so we never invite the visitor away from the offer.
  if (minimal) {
    return (
      <header
        className={`fixed inset-x-0 top-0 z-[65] transition-colors duration-500 ${
          solid
            ? "bg-linen/92 backdrop-blur-md border-b border-gold/30"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-5 py-4 sm:px-8">
          <span
            className={`font-display text-xl font-medium tracking-tight transition-colors ${
              solid ? "text-espresso" : "text-linen"
            }`}
          >
            Chef Crusco Catering
          </span>
          <div className="flex items-center gap-3 sm:gap-5">
            <a
              href={site.phoneHref}
              className={`text-sm font-semibold transition-colors hover:text-saffron ${
                solid ? "text-espresso" : "text-linen"
              }`}
            >
              {site.phone}
            </a>
            <a
              href={BOOK_HREF}
              className="btn-saffron hidden text-sm sm:inline-flex"
            >
              Plan your event
            </a>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[65] transition-colors duration-500 ${
        solid
          ? "bg-linen/92 backdrop-blur-md border-b border-gold/30"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-5 py-4 sm:px-8">
        <Link
          href="/"
          className={`font-display text-xl font-medium tracking-tight transition-colors ${
            solid ? "text-espresso" : "text-linen"
          }`}
        >
          Chef Crusco
        </Link>

        <nav
          className={`hidden items-center gap-7 text-sm font-medium md:flex ${
            solid ? "text-cocoa" : "text-linen/90"
          }`}
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-saffron"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={site.phoneHref}
            className={`hidden text-sm font-semibold transition-colors hover:text-saffron sm:block ${
              solid ? "text-espresso" : "text-linen"
            }`}
          >
            {site.phone}
          </a>
          <a href={BOOK_HREF} className="btn-saffron hidden text-sm sm:inline-flex">
            Plan your event
          </a>
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={`md:hidden ${solid ? "text-espresso" : "text-linen"}`}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <>
                  <path d="M3 7h18" strokeLinecap="round" />
                  <path d="M3 12h18" strokeLinecap="round" />
                  <path d="M3 17h18" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-gold/30 bg-linen px-5 py-5 md:hidden">
          <nav className="flex flex-col gap-4 text-base font-medium text-espresso">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-5 flex items-center gap-4">
            <a href={site.phoneHref} className="btn-ghost text-sm">
              {site.phone}
            </a>
            <a href={BOOK_HREF} onClick={() => setOpen(false)} className="btn-saffron text-sm">
              Plan your event
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
