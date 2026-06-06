import type { Metadata } from "next";
import { PageHero } from "@/components/site/PageHero";
import { TrustStrip, ClosingCTA } from "@/components/site/sections";
import { InquiryPlate } from "@/components/site/InquiryPlate";
import { Proof } from "@/components/site/Proof";

export const metadata: Metadata = {
  title: "Book Chef Crusco",
  description:
    "Reserve Chef Crusco for your private dinner, catering, or corporate event in Austin. Tell us about your event and get a free personalized estimate within 24 hours.",
};

export default function Book() {
  return (
    <>
      <PageHero
        eyebrow="Reserve the table"
        lines={["Let us cook", "for your event."]}
        sub="Tell us a little about your event below. You will get a free personalized estimate within 24 hours, and a real person to talk it through."
        image="/photos/event-vday-dinner.jpg"
        alt="A candlelit table set for a private dinner"
      />

      <InquiryPlate />

      <TrustStrip items={["A spotless kitchen, every time", "Certified, professional team", "Austin and 30 miles around", "A real reply within 24 hours"]} />

      <Proof />
      <ClosingCTA title="Prefer to talk it through?" sub="Call us any time. We love talking food, dates, and details." />
    </>
  );
}
