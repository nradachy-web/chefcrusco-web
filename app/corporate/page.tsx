import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/site/PageHero";
import { SectionHead, PricingTiers, TermsBlock, ClosingCTA } from "@/components/site/sections";
import { Proof } from "@/components/site/Proof";
import { InquiryPlate } from "@/components/site/InquiryPlate";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { Reveal, SaffronRule } from "@/components/site/Reveal";
import { df8Tiers, corporateParty, corporateStaffScope, corporateLunch, faqs, terms } from "@/lib/content";

const corpFaqs = [faqs[0], faqs[1], faqs[4], faqs[5], faqs[13], faqs[8]];

export const metadata: Metadata = {
  title: "Corporate Catering in Austin",
  description:
    "Corporate catering in Austin. Recurring office lunches, corporate events, and the Dinner for Eight client gifting program. Reliable, certified, and simple to book.",
};

const doorways = [
  { title: "Recurring Office Lunch", body: "A standing order your team looks forward to. One contact, zero hassle.", img: "/photos/food-platter-display.png", alt: "An office lunch platter spread" },
  { title: "Corporate Events", body: "Launches, holidays, and client dinners, fully staffed and served.", img: "/photos/event-2024-img0735.jpg", alt: "A catered corporate event" },
  { title: "Client Gifting", body: "The Dinner for Eight program. A chef-prepared dinner, delivered as a gift.", img: "/photos/event-dinner-for-eight-1.jpg", alt: "An elegant plated dinner for client gifting" },
];

const reliability = [
  "One point of contact, start to finish",
  "Certified, professional crew (TABC and TFSM)",
  "Dietary needs handled, never improvised",
  "We leave the space cleaner than we found it",
  "A simple, written estimate every time",
];

export default function Corporate() {
  return (
    <>
      <PageHero
        eyebrow="Corporate catering in Austin"
        lines={["The best table in town.", "Now at your office."]}
        sub="Recurring office lunches, corporate events, and client gifting. Reliable, certified, and simple to book, with one point of contact."
        image="/photos/event-dinner-for-eight-1.jpg"
        alt="An elegant plated corporate dinner"
        cta="Request your corporate estimate"
      />

      <section className="bg-linen">
        <div className="mx-auto max-w-[1280px] px-5 py-24 sm:px-8 sm:py-28">
          <SectionHead eyebrow="Three ways we serve teams" title="From a standing lunch to a flagship event." />
          <div className="mt-12 grid gap-7 md:grid-cols-3">
            {doorways.map((d, i) => (
              <Reveal key={d.title} delay={i * 0.08}>
                <div className="group border border-gold/50 bg-linen">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={d.img} alt={d.alt} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]" />
                  </div>
                  <div className="p-7">
                    <h3 className="font-display text-xl font-medium text-espresso">{d.title}</h3>
                    <p className="mt-2 text-[0.95rem] text-cocoa">{d.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PricingTiers
        eyebrow="Corporate party service and pricing"
        title="Pick a service level. We scale to your team."
        tiers={corporateParty}
        footnote={corporateStaffScope}
        cols={4}
        bone
      />

      {/* corporate lunch subscription */}
      <section className="bg-linen">
        <div className="mx-auto max-w-[1280px] px-5 py-24 sm:px-8 sm:py-28">
          <SectionHead eyebrow="Recurring office lunch" title={corporateLunch.headline} intro={corporateLunch.terms} />
          <div className="mt-12 grid gap-7 md:grid-cols-3">
            {corporateLunch.plans.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.08}>
                <div className="flex h-full flex-col border border-gold/50 bg-bone p-8">
                  <h3 className="font-display text-xl font-medium text-espresso">{p.name}</h3>
                  <p className="mt-3 text-[0.95rem] text-cocoa">{p.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <ul className="mt-10 grid gap-x-10 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {corporateLunch.features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-[0.95rem] text-cocoa">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="mt-0.5 shrink-0 text-rosemary">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* why companies trust */}
      <section className="bg-bone">
        <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-5 py-24 sm:px-8 sm:py-28 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image src="/photos/event-2024-img4218.jpg" alt="The Chef Crusco team at a corporate event" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow text-oxblood">Why companies trust Crusco</p>
            <SaffronRule className="mt-3" />
            <h2 className="mt-5 font-display text-[clamp(1.9rem,3.6vw,3rem)] font-medium leading-tight text-espresso">
              Built for people who cannot afford a surprise.
            </h2>
            <ul className="mt-8 space-y-4">
              {reliability.map((r) => (
                <li key={r} className="flex items-start gap-3 text-cocoa">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="mt-0.5 shrink-0 text-rosemary">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {r}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Dinner for Eight */}
      <section className="relative overflow-hidden bg-espresso text-linen">
        <div aria-hidden className="absolute inset-0" style={{ background: "radial-gradient(46% 50% at 30% 35%, rgba(232,197,138,0.16), transparent 70%)" }} />
        <div className="relative mx-auto max-w-[1280px] px-5 py-24 sm:px-8 sm:py-28">
          <SectionHead eyebrow="Client gifting" title="The Dinner for Eight program." light intro="A chef-prepared dinner for eight, delivered as a gift to your most valued clients. Choose a package and we handle the rest." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {df8Tiers.map((t, i) => (
              <Reveal key={t.tier} delay={i * 0.07}>
                <div className="flex h-full flex-col border border-gold/40 bg-espresso/40 p-7">
                  <p className="font-display text-2xl font-medium text-candle">{t.tier}</p>
                  <p className="mt-3 text-linen/75 tnum">{t.dinners}</p>
                  <p className="text-linen/75 tnum">{t.per}</p>
                  <p className="mt-5 font-display text-3xl font-medium text-linen tnum">${t.total}</p>
                  <p className="text-sm text-linen/55">total</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Proof />
      <FAQAccordion items={corpFaqs} bone />
      <TermsBlock items={terms} />
      <InquiryPlate />
      <ClosingCTA title="Bring Crusco to your team." sub="Tell us what your company needs and get a clear, written estimate within 24 hours." />
    </>
  );
}
