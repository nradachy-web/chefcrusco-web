import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/site/PageHero";
import { Benefits, Steps, FeatureDish, SectionHead, ClosingCTA } from "@/components/site/sections";
import { ChefsHands } from "@/components/site/ChefsHands";
import { Proof } from "@/components/site/Proof";
import { InquiryPlate } from "@/components/site/InquiryPlate";
import { Reveal } from "@/components/site/Reveal";
import { cuisinePaths } from "@/lib/content";

export const metadata: Metadata = {
  title: "Private Chef in Austin",
  description:
    "A private chef in your Austin home. Four-course plated dinners cooked fresh in your kitchen, from 155 to 165 per person. Rated 5 stars on Google.",
};

const steps = [
  "Tell us about your dinner. You get a free personalized estimate within 24 hours.",
  "An event expert emails your estimate and calls to talk through the menu.",
  "A 25 percent deposit reserves your date and is credited to your final balance.",
  "We arrive, cook, serve, and clean. You enjoy your night.",
];

export default function PrivateChef() {
  return (
    <>
      <PageHero
        eyebrow="Private Chef in Austin"
        lines={["A private chef", "in your home."]}
        sub="Four courses, plated and seated, cooked fresh in your kitchen. Dinners from 6 to 30 guests. Larger gatherings on request."
        image="/photos/event-dinner-for-eight-1.jpg"
        alt="An elegant plated private dinner course"
        objectPosition="center"
      />

      <Benefits
        eyebrow="The experience"
        title="Dinner, handled from first plate to last dish."
        items={[
          { title: "Your table, your menu", body: "We design the menu around your taste, your guests, and any dietary needs. French, Italian, Latin, Spanish, or steak house." },
          { title: "Cooked in front of you", body: "Carlos and the team cook fresh in your kitchen and plate each course to order. The kitchen becomes part of the evening." },
          { title: "We leave it spotless", body: "We arrive, set up, serve, then wash every dish and wipe the counters. You just enjoy your night." },
        ]}
        note="Dinners from 6 to 30 guests. Larger gatherings on request."
      />

      <Steps title="How a private dinner works." steps={steps} bone />

      <FeatureDish
        eyebrow="The signature plate"
        name="Provencal Lamb, Peppercorns, Demi-Glace"
        body="Slow, confident cooking and a clean finish. The plate the menu is built around, and a good place to start the conversation about yours."
        price="Four-course private dinners from 155 to 165 per person. 1,000 minimum per event. Staffing and gratuity additional."
        image="/photos/food-provencal-lamb.jpg"
        alt="Provencal lamb with peppercorns and demi-glace on a wood board"
      />

      {/* sample menus */}
      <section className="bg-bone">
        <div className="mx-auto max-w-[1280px] px-5 py-24 sm:px-8 sm:py-28">
          <SectionHead eyebrow="Sample menus" title="Five ways to set the table." />
          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {cuisinePaths.map((c, i) => (
              <Reveal key={c.name} delay={i * 0.06}>
                <div className="group border border-gold/50 bg-linen">
                  <div className="relative aspect-[5/4] overflow-hidden">
                    <Image src={c.img} alt={c.alt} fill sizes="(max-width:1024px) 50vw, 33vw" className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-medium text-espresso">{c.name}</h3>
                    <p className="mt-2 text-[0.95rem] text-cocoa">{c.note}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-sm text-cocoa tnum">
            155 to 165 per person, four courses plated and seated. Customer Specific menus from 215 per person.
          </p>
        </div>
      </section>

      <ChefsHands />

      <FeatureDish
        eyebrow="And it ends in caramel"
        name="Chocolate and Cinnamon Crema Catalana"
        body="Torched to order at the table. The kind of last course people remember long after the night is over."
        image="/photos/food-crema-catalana.jpg"
        alt="Chocolate and cinnamon crema catalana torched to order"
        flip
        bone
      />

      <Proof />
      <InquiryPlate />
      <ClosingCTA title="Reserve your private dinner." />
    </>
  );
}
