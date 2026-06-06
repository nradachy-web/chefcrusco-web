import type { Metadata } from "next";
import { PageHero } from "@/components/site/PageHero";
import { SectionHead, ClosingCTA } from "@/components/site/sections";
import { Reveal } from "@/components/site/Reveal";
import { pressItems } from "@/lib/content";

export const metadata: Metadata = {
  title: "Press",
  description:
    "Chef Crusco in the press: Fox 7 Austin, Austin Culture Map, Austin Food Magazine, Houston Press, Austin Fit, Founding Austin, J. Lohr, and more.",
};

export default function Press() {
  return (
    <>
      <PageHero
        eyebrow="In the press"
        lines={["Featured", "in good company."]}
        sub="Live television, food magazines, podcasts, and pairings. A few of the places Chef Crusco has cooked, taught, and been written up."
        image="/photos/carlos-in-action.jpg"
        alt="Chef Carlos Crusco cooking"
        cta="Plan your event"
      />

      <section className="bg-linen">
        <div className="mx-auto max-w-[1280px] px-5 py-24 sm:px-8 sm:py-28">
          <SectionHead eyebrow="Press and articles" title="Seen, tasted, and written about." />
          <div className="mt-12 grid gap-px overflow-hidden border border-gold/40 bg-gold/40 sm:grid-cols-2">
            {pressItems.map((p, i) => (
              <Reveal key={p.url} delay={(i % 2) * 0.06} className="bg-linen">
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full items-start justify-between gap-4 p-7 transition-colors hover:bg-bone"
                >
                  <div>
                    <p className="eyebrow text-oxblood">{p.outlet}</p>
                    <p className="mt-2 font-display text-lg text-espresso">{p.title}</p>
                  </div>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-1 shrink-0 text-saffron transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <path d="M7 17L17 7M17 7H8M17 7v9" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ClosingCTA title="Bring that experience to your table." />
    </>
  );
}
