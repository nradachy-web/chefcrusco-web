import type { Metadata } from "next";
import { PageHero } from "@/components/site/PageHero";
import { TermsBlock, ClosingCTA } from "@/components/site/sections";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { InquiryPlate } from "@/components/site/InquiryPlate";
import { faqs, terms } from "@/lib/content";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about booking Chef Crusco: services and prices, deposits, guest count guarantee, staffing, alcohol, rentals, and terms.",
};

export default function FAQ() {
  return (
    <>
      <PageHero
        eyebrow="Good to know"
        lines={["Questions,", "answered."]}
        sub="Everything you might want to know before you book, straight and clear. If we missed something, just ask."
        image="/photos/event-dinner-for-eight-9.jpg"
        alt="A plated dinner course ready to serve"
        cta="Plan your event"
      />

      <FAQAccordion items={faqs} title="Frequently asked questions." eyebrow="The details" />
      <TermsBlock items={terms} bone />
      <InquiryPlate />
      <ClosingCTA title="Still have a question?" sub="Tell us about your event, or call and we will talk it through." />
    </>
  );
}
