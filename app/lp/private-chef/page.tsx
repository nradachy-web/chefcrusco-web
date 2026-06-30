import type { Metadata } from "next";
import { PageHero } from "@/components/site/PageHero";
import {
  PricingTiers,
  Benefits,
  Steps,
  FeatureDish,
  TrustStrip,
  ClosingCTA,
} from "@/components/site/sections";
import { Proof } from "@/components/site/Proof";
import { InquiryPlate } from "@/components/site/InquiryPlate";
import { cateringTiers, cateringFootnote } from "@/lib/content";

// Paid landing page. Not for organic search; the live site at chefcrusco.com
// owns SEO. Keep these out of the index to avoid duplicate-content confusion.
export const metadata: Metadata = {
  title: "Private Chef in Austin | In-Home Plated Dinners",
  description:
    "Hire a private chef in Austin. Four-course dinners cooked fresh in your kitchen, served and cleaned up after. Free personalized estimate within 24 hours. Rated 5 stars on Google.",
  robots: { index: false, follow: true },
};

const steps = [
  "Tell us about your dinner. You get a free personalized estimate within 24 hours.",
  "An event expert emails your estimate and calls to talk through the menu.",
  "A 25 percent deposit reserves your date and is credited to your final balance.",
  "We arrive, cook, serve, and clean. You enjoy your night.",
];

export default function LpPrivateChef() {
  return (
    <>
      <PageHero
        eyebrow="Private chef in Austin · Rated 5.0 on Google"
        lines={["A private chef", "in your kitchen."]}
        sub="Four-course plated dinners, cooked fresh in your home and served by a certified team. We even leave the kitchen spotless. Free estimate within 24 hours."
        image="/photos/event-dinner-for-eight-1.jpg"
        alt="An elegant plated private dinner course"
        cta="Plan your dinner"
      />

      <TrustStrip
        items={[
          "Rated 5.0 on Google",
          "Cooked fresh in your home",
          "We leave your kitchen spotless",
          "TABC and TFSM certified team",
        ]}
      />

      <PricingTiers
        eyebrow="Menus and honest pricing"
        title="Four ways to set your table."
        tiers={cateringTiers}
        footnote={cateringFootnote}
        cols={4}
      />

      <Benefits
        eyebrow="The experience"
        title="Dinner, handled from first plate to last dish."
        items={[
          {
            title: "Your table, your menu",
            body: "We design the menu around your taste, your guests, and any dietary needs. French, Italian, Latin, Spanish, or steak house.",
          },
          {
            title: "Cooked in front of you",
            body: "Carlos and the team cook fresh in your kitchen and plate each course to order. The kitchen becomes part of the evening.",
          },
          {
            title: "We leave it spotless",
            body: "We arrive, set up, serve, then wash every dish and wipe the counters. You just enjoy your night.",
          },
        ]}
        note="Dinners from 6 to 30 guests. Larger gatherings on request."
      />

      <Steps title="How a private dinner works." steps={steps} bone />

      <FeatureDish
        eyebrow="The signature plate"
        name="Provencal Lamb, Peppercorns, Demi-Glace"
        body="Slow, confident cooking and a clean finish. The plate the menu is built around, and a good place to start the conversation about yours."
        price="Four-course private dinners from 155 to 165 per person. Customer Specific menus from 215. Staffing and gratuity additional."
        image="/photos/food-provencal-lamb.jpg"
        alt="Provencal lamb with peppercorns and demi-glace on a wood board"
      />

      <Proof />
      <InquiryPlate />
      <ClosingCTA
        title="Reserve your private dinner."
        sub="Tell us about your evening and get a free personalized estimate within 24 hours."
      />
    </>
  );
}
