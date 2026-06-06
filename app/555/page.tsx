import type { Metadata } from "next";
import { PageHero } from "@/components/site/PageHero";
import { SectionHead, ClosingCTA } from "@/components/site/sections";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { InquiryPlate } from "@/components/site/InquiryPlate";
import { Reveal } from "@/components/site/Reveal";
import { fiveFiveFive as f } from "@/lib/content";

export const metadata: Metadata = {
  title: "The 555 Meal Program",
  description:
    "Chef Crusco's 555 program: 5 proteins, 5 sides, 5 pound minimum. Fresh chef-cooked meals ready to reheat, picked up weekly in Austin. No planning, no grocery store, no cooking.",
};

function PriceList({ title, items }: { title: string; items: typeof f.proteins }) {
  return (
    <div>
      <p className="eyebrow text-oxblood">{title}</p>
      <ul className="mt-4 space-y-3">
        {items.map((it) => (
          <li key={it.name} className="border-t border-gold/40 pt-3">
            <div className="flex items-baseline justify-between gap-4">
              <span className="font-display text-lg text-espresso">{it.name}</span>
              <span className="font-display text-saffron tnum">${it.price}</span>
            </div>
            <p className="text-sm text-cocoa">{it.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function FiveFiveFive() {
  return (
    <>
      <PageHero
        eyebrow="The 555 program"
        lines={["Real food.", "Zero effort."]}
        sub={f.promise}
        image="/photos/food-braised-short-rib.jpg"
        alt="Fresh chef-cooked protein and sides"
        cta="Start your order"
      />

      <section className="bg-linen">
        <div className="mx-auto max-w-3xl px-5 py-24 text-center sm:px-8 sm:py-28">
          <Reveal>
            <div className="space-y-2">
              {f.hook.map((h) => (
                <p key={h} className="font-display text-2xl italic text-espresso sm:text-3xl">{h}</p>
              ))}
            </div>
            <p className="mt-8 font-display text-3xl font-medium text-saffron">5 · 5 · 5</p>
            <p className="mt-2 text-cocoa">{f.structure}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-bone">
        <div className="mx-auto max-w-[1280px] px-5 py-24 sm:px-8 sm:py-28">
          <SectionHead eyebrow="Build your order" title="Five proteins, five sides, by the pound." intro="Cooked fresh, never frozen, ready to reheat. Mix and match however you like." />
          <div className="mt-12 grid gap-12 md:grid-cols-2">
            <Reveal><PriceList title="Proteins" items={f.proteins} /></Reveal>
            <Reveal delay={0.1}><PriceList title="Sides" items={f.sides} /></Reveal>
          </div>
        </div>
      </section>

      <FAQAccordion items={f.faqs} title="How the 555 works." eyebrow="Good to know" />

      <InquiryPlate />
      <ClosingCTA title="Skip the grocery store this week." sub="Tell us what you would like and we will have it cooked fresh for Tuesday pickup at Wingman Kitchens." />
    </>
  );
}
