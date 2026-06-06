import { Hero } from "@/components/site/Hero";
import { ThreeDoorways } from "@/components/site/ThreeDoorways";
import { TastingMenuWalk } from "@/components/site/TastingMenuWalk";
import { ChefsHands } from "@/components/site/ChefsHands";
import { Proof } from "@/components/site/Proof";
import { GalleryFinale } from "@/components/site/GalleryFinale";
import { InquiryPlate } from "@/components/site/InquiryPlate";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { faqs } from "@/lib/content";
import { site } from "@/lib/site";

const homeFaqs = [faqs[0], faqs[1], faqs[2], faqs[4], faqs[5], faqs[8]];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "FoodEstablishment"],
  name: "Chef Crusco",
  description: site.description,
  telephone: "+1-512-970-2200",
  url: site.url,
  servesCuisine: ["French", "Italian", "Spanish", "Latin American"],
  areaServed: { "@type": "City", name: "Austin, TX" },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", bestRating: "5" },
  priceRange: "$$$",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <ThreeDoorways />
      <TastingMenuWalk />
      <ChefsHands />
      <Proof />
      <GalleryFinale />
      <FAQAccordion items={homeFaqs} bone />
      <InquiryPlate />
    </>
  );
}
