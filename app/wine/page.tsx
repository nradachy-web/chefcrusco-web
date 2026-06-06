import type { Metadata } from "next";
import { PageHero } from "@/components/site/PageHero";
import { SectionHead, ClosingCTA } from "@/components/site/sections";
import { InquiryPlate } from "@/components/site/InquiryPlate";
import { Reveal } from "@/components/site/Reveal";
import { austinWinery, miximMenus, miximUrl } from "@/lib/content";

export const metadata: Metadata = {
  title: "Wine & Beverages",
  description:
    "Chef Crusco is an Ambassador for The Austin Winery and partners with the Mixim cocktail program for cuisine-matched pairings. Wine and cocktail pairing for your Austin event.",
};

export default function Wine() {
  return (
    <>
      <PageHero
        eyebrow="Wine and beverages"
        lines={["Wine and cocktails,", "paired to the plate."]}
        sub={austinWinery.hero}
        image="/photos/event-wine-cooking-class.jpg"
        alt="A wine and cooking event hosted by Chef Crusco"
        cta="Plan your event"
      />

      {/* Austin Winery */}
      <section className="bg-linen">
        <div className="mx-auto max-w-3xl px-5 py-24 sm:px-8 sm:py-28">
          <SectionHead eyebrow="The Austin Winery" title="An ambassadorship built on shared taste." />
          <p className="mt-5 text-cocoa">{austinWinery.body}</p>
          <figure className="mt-10 border-l-2 border-saffron pl-6">
            <blockquote className="font-display text-xl italic leading-relaxed text-espresso">
              &ldquo;{austinWinery.testimonial.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-4 text-sm font-semibold uppercase tracking-wide text-cocoa">
              {austinWinery.testimonial.name}
            </figcaption>
          </figure>
          <div className="mt-10 border border-gold/50 bg-bone p-7">
            <p className="text-cocoa">{austinWinery.pairing}</p>
            <p className="mt-4 text-sm text-cocoa">
              Use code{" "}
              <span className="font-semibold text-saffron">{austinWinery.code}</span>{" "}
              at checkout.
            </p>
            <a href={austinWinery.url} target="_blank" rel="noopener noreferrer" className="btn-ghost mt-5 inline-flex text-saffron">
              Visit The Austin Winery
            </a>
          </div>
        </div>
      </section>

      {/* Mixim cocktails */}
      <section className="relative overflow-hidden bg-espresso text-linen">
        <div aria-hidden className="absolute inset-0" style={{ background: "radial-gradient(46% 50% at 28% 30%, rgba(232,197,138,0.15), transparent 70%)" }} />
        <div className="relative mx-auto max-w-[1280px] px-5 py-24 sm:px-8 sm:py-28">
          <SectionHead eyebrow="The Mixim cocktail program" title="Five menus, matched to your cuisine." light intro="Cocktail pairings that complement the food, for before and after the meal. Want something all your own? We will build a bespoke menu for your event." />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {miximMenus.map((m, i) => (
              <Reveal key={m.name} delay={(i % 3) * 0.06}>
                <div className="flex h-full flex-col border border-gold/40 bg-espresso/40 p-7">
                  <h3 className="font-display text-xl font-medium text-candle">{m.name}</h3>
                  <p className="mt-1 text-xs uppercase tracking-wide text-linen/55">Pairs with {m.pairs}</p>
                  <ul className="mt-4 space-y-2.5 text-[0.92rem] text-linen/80">
                    {m.drinks.map((d) => (
                      <li key={d} className="border-t border-linen/12 pt-2.5">{d}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <a href={miximUrl} target="_blank" rel="noopener noreferrer" className="btn-saffron mt-12 inline-flex">
            Make your reservation
          </a>
        </div>
      </section>

      <InquiryPlate />
      <ClosingCTA title="Add a pairing to your event." sub="Tell us about your event and we will build the wine and cocktail pairing to match." />
    </>
  );
}
