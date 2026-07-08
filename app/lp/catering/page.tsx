import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/site/PageHero";
import {
  SectionHead,
  PricingTiers,
  Steps,
  TrustStrip,
  MenuLinks,
  ClosingCTA,
} from "@/components/site/sections";
import { Proof } from "@/components/site/Proof";
import { InquiryPlate } from "@/components/site/InquiryPlate";
import { Reveal } from "@/components/site/Reveal";
import { cateringTiers, cateringFootnote } from "@/lib/content";

// Paid landing page. Live site at chefcrusco.com owns SEO; keep this out of index.
export const metadata: Metadata = {
  title: "Catering in Austin | Weddings, Parties & Events",
  description:
    "Austin catering for weddings, dinner parties, and events from 6 to 200 people. Tapas, grazing, drop-off, and full plated service, cooked fresh on site. Free estimate in 24 hours. Rated 5 stars on Google.",
  robots: { index: false, follow: true },
};

const paths = [
  {
    title: "Weddings & Rehearsal Dinners",
    body: "Plated, seated, and unforgettable. Menus built around your day.",
    img: "/photos/event-vday-dinner.jpg",
    alt: "A candlelit wedding dinner table",
  },
  {
    title: "Parties & Social Gatherings",
    body: "From backyard to ballroom. Passed bites, stations, and full service.",
    img: "/photos/event-2024-img0008.jpg",
    alt: "Guests at a catered social gathering",
  },
  {
    title: "Tapas & Grazing",
    body: "Spanish small plates and grazing tables that keep the night moving.",
    img: "/photos/food-antipasto-tapas.jpg",
    alt: "A grazing table of tapas and antipasto",
  },
];

const steps = [
  "Tell us about your event. You get a free personalized estimate within 24 hours.",
  "An event expert emails your estimate and calls to talk it through.",
  "A 25 percent deposit reserves your date and is credited to your final balance.",
  "Sit back while our team cooks, serves, and cleans up.",
];

export default function LpCatering() {
  return (
    <>
      <PageHero
        eyebrow="Austin catering and events · Rated 5.0 on Google"
        lines={["Catering in Austin,", "done beautifully."]}
        sub="Weddings, dinner parties, and social events from 6 to 200 people. Tapas, grazing tables, and full plated service, cooked fresh on site."
        image="/photos/event-2024-img5873.jpg"
        alt="A full holiday catering spread on a long table"
        cta="Plan your event"
      />

      <TrustStrip
        items={[
          "Rated 5.0 on Google",
          "From intimate dinners to 200 people",
          "Austin and 30 miles around",
          "TABC and TFSM certified team",
        ]}
      />

      <section className="bg-linen">
        <div className="mx-auto max-w-[1280px] px-5 py-24 sm:px-8 sm:py-28">
          <SectionHead
            eyebrow="What we cater"
            title="Three kinds of celebration, one standard."
          />
          <div className="mt-12 grid gap-7 md:grid-cols-3">
            {paths.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="group border border-gold/50 bg-linen">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={p.img}
                      alt={p.alt}
                      fill
                      sizes="(max-width:768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="p-7">
                    <h3 className="font-display text-xl font-medium text-espresso">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-[0.95rem] text-cocoa">{p.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PricingTiers
        eyebrow="Menus and honest pricing"
        title="Four ways to serve your guests."
        tiers={cateringTiers}
        footnote={cateringFootnote}
        cols={4}
        bone
      />

      <MenuLinks
        title="Browse the menus."
        links={[
          {
            label: "Tapas and Appetizers",
            desc: "Spanish small plates, passed and stationed. 80 to 140 per person.",
            href: "/menus#tapas",
          },
          {
            label: "Drop-Off Platters",
            desc: "Beautiful boards delivered ready to serve. 50 to 75 per person.",
            href: "/menus#drop-off",
          },
          {
            label: "Prix-Fixe Cuisine Menus",
            desc: "Plated four-course dinners in five cuisines. 155 to 165 per person.",
            href: "/menus#prix-fixe",
          },
        ]}
      />

      <Proof />
      <Steps title="How it works." steps={steps} />
      <InquiryPlate />
      <ClosingCTA
        title="Let us cater your celebration."
        sub="Tell us about your event and get a free personalized estimate within 24 hours."
      />
    </>
  );
}
