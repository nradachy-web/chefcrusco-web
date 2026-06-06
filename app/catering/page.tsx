import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/site/PageHero";
import { SectionHead, PricingTiers, Steps, TrustStrip, ClosingCTA } from "@/components/site/sections";
import { Gallery } from "@/components/site/Gallery";
import { ChefsHands } from "@/components/site/ChefsHands";
import { Proof } from "@/components/site/Proof";
import { InquiryPlate } from "@/components/site/InquiryPlate";
import { Reveal } from "@/components/site/Reveal";
import { cateringTiers, cateringFootnote } from "@/lib/content";

export const metadata: Metadata = {
  title: "Catering & Events in Austin",
  description:
    "Austin catering for weddings, parties, and social events. Tapas, grazing tables, and full plated celebrations from 80 to 165 per person. Rated 5 stars on Google.",
};

const paths = [
  { title: "Weddings & Rehearsal Dinners", body: "Plated, seated, and unforgettable. Menus built around your day.", img: "/photos/event-vday-dinner.jpg", alt: "A candlelit wedding dinner table" },
  { title: "Parties & Social Gatherings", body: "From backyard to ballroom. Passed bites, stations, and full service.", img: "/photos/event-2024-img0008.jpg", alt: "Guests at a catered social gathering" },
  { title: "Tapas & Grazing", body: "Spanish small plates and grazing tables that keep the night moving.", img: "/photos/food-antipasto-tapas.jpg", alt: "A grazing table of tapas and antipasto" },
];

const gallery = [
  { img: "/photos/event-2024-img0547.jpg", alt: "A catered event spread" },
  { img: "/photos/event-2024-img6882.jpg", alt: "Plated courses at an event" },
  { img: "/photos/event-2024-img0008.jpg", alt: "Guests at a catered gathering" },
  { img: "/photos/food-oysters-persillade.jpg", alt: "Oysters persillade" },
  { img: "/photos/food-bomba-arroz-mariscos.jpg", alt: "Bomba saffron rice with shellfish" },
  { img: "/photos/food-braised-short-rib.jpg", alt: "Braised short rib course" },
  { img: "/photos/food-matambre.jpg", alt: "Matambre Argentino" },
  { img: "/photos/event-wine-cooking-class.jpg", alt: "A wine and cooking event" },
];

const steps = [
  "Tell us about your event. You get a free personalized estimate within 24 hours.",
  "An event expert emails your estimate and calls to talk it through.",
  "A 25 percent deposit reserves your date and is credited to your final balance.",
  "Sit back while our team handles every detail.",
];

export default function Catering() {
  return (
    <>
      <PageHero
        eyebrow="Austin catering and events"
        lines={["The best table in town.", "Brought to your celebration."]}
        sub="Weddings, parties, and social events from 6 to 150 guests. Tapas, grazing tables, and full plated service, cooked fresh on site."
        image="/photos/event-2024-img5873.jpg"
        alt="A full holiday catering spread on a long table"
      />

      <TrustStrip items={["Rated 5.0 on Google", "6 to 150 guests", "Austin and 30 miles around", "TABC and TFSM certified team"]} />

      <section className="bg-linen">
        <div className="mx-auto max-w-[1280px] px-5 py-24 sm:px-8 sm:py-28">
          <SectionHead eyebrow="What we cater" title="Three kinds of celebration, one standard." />
          <div className="mt-12 grid gap-7 md:grid-cols-3">
            {paths.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="group border border-gold/50 bg-linen">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={p.img} alt={p.alt} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]" />
                  </div>
                  <div className="p-7">
                    <h3 className="font-display text-xl font-medium text-espresso">{p.title}</h3>
                    <p className="mt-2 text-[0.95rem] text-cocoa">{p.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Gallery images={gallery} />

      <PricingTiers
        eyebrow="Menus and honest pricing"
        title="Three ways to serve your guests."
        tiers={cateringTiers}
        footnote={cateringFootnote}
        bone
      />

      <ChefsHands />
      <Steps title="How it works." steps={steps} />
      <Proof />
      <InquiryPlate />
      <ClosingCTA title="Let us cater your celebration." />
    </>
  );
}
