import Image from "next/image";
import { site } from "@/lib/site";
import { Reveal, SaffronRule } from "./Reveal";
import { BOOK_HREF } from "./Nav";

export function SectionHead({
  eyebrow,
  title,
  intro,
  light,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  light?: boolean;
}) {
  return (
    <Reveal>
      <p className={`eyebrow ${light ? "text-candle" : "text-oxblood"}`}>{eyebrow}</p>
      <SaffronRule className="mt-3" />
      <h2 className={`mt-5 max-w-2xl font-display text-[clamp(1.9rem,4vw,3.2rem)] font-medium leading-[1.06] ${light ? "text-linen" : "text-espresso"}`}>
        {title}
      </h2>
      {intro && <p className={`mt-4 max-w-xl ${light ? "text-linen/75" : "text-cocoa"}`}>{intro}</p>}
    </Reveal>
  );
}

export function Benefits({
  eyebrow,
  title,
  items,
  note,
}: {
  eyebrow: string;
  title: string;
  items: { title: string; body: string }[];
  note?: string;
}) {
  return (
    <section className="bg-linen">
      <div className="mx-auto max-w-[1280px] px-5 py-24 sm:px-8 sm:py-28">
        <SectionHead eyebrow={eyebrow} title={title} />
        <div className="mt-14 grid gap-px overflow-hidden border border-gold/40 bg-gold/40 md:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.08} className="bg-linen">
              <div className="flex h-full flex-col p-8">
                <span className="font-display text-3xl font-medium text-saffron tnum">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-xl font-medium text-espresso">{it.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-cocoa">{it.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        {note && <p className="mt-6 text-sm text-cocoa">{note}</p>}
      </div>
    </section>
  );
}

export function Steps({
  eyebrow = "How it works",
  title,
  steps,
  bone,
}: {
  eyebrow?: string;
  title: string;
  steps: string[];
  bone?: boolean;
}) {
  return (
    <section className={bone ? "bg-bone" : "bg-linen"}>
      <div className="mx-auto max-w-[1280px] px-5 py-24 sm:px-8 sm:py-28">
        <SectionHead eyebrow={eyebrow} title={title} />
        <ol className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {steps.map((s, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <li className="flex gap-5 border-t border-gold/40 pt-5">
                <span className="font-display text-3xl font-medium text-saffron tnum">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="pt-1.5 text-cocoa">{s}</span>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function PricingTiers({
  eyebrow,
  title,
  tiers,
  footnote,
  bone,
}: {
  eyebrow: string;
  title: string;
  tiers: { name: string; price: string; unit: string; min?: string; note?: string }[];
  footnote?: string;
  bone?: boolean;
}) {
  return (
    <section className={bone ? "bg-bone" : "bg-linen"}>
      <div className="mx-auto max-w-[1280px] px-5 py-24 sm:px-8 sm:py-28">
        <SectionHead eyebrow={eyebrow} title={title} />
        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <div className="flex h-full flex-col border border-gold/50 bg-linen p-8">
                <h3 className="font-display text-2xl font-medium text-espresso">{t.name}</h3>
                <p className="mt-4 font-display text-4xl font-medium text-saffron tnum">
                  ${t.price}
                </p>
                <p className="text-sm text-cocoa">{t.unit}</p>
                {t.min && <p className="mt-1 text-sm text-cocoa tnum">{t.min}</p>}
                {t.note && <p className="mt-5 flex-1 text-[0.95rem] leading-relaxed text-cocoa">{t.note}</p>}
              </div>
            </Reveal>
          ))}
        </div>
        {footnote && <p className="mt-6 max-w-2xl text-sm text-cocoa tnum">{footnote}</p>}
      </div>
    </section>
  );
}

export function FeatureDish({
  eyebrow,
  name,
  body,
  price,
  image,
  alt,
  flip,
  bone,
}: {
  eyebrow: string;
  name: string;
  body: string;
  price?: string;
  image: string;
  alt: string;
  flip?: boolean;
  bone?: boolean;
}) {
  return (
    <section className={bone ? "bg-bone" : "bg-linen"}>
      <div className="mx-auto grid max-w-[1280px] items-center gap-10 px-5 py-24 sm:px-8 sm:py-28 lg:grid-cols-2">
        <Reveal className={flip ? "lg:order-2" : ""}>
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image src={image} alt={alt} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
          </div>
        </Reveal>
        <Reveal delay={0.1} className={flip ? "lg:order-1" : ""}>
          <p className="eyebrow text-oxblood">{eyebrow}</p>
          <SaffronRule className="mt-3" />
          <h2 className="mt-5 font-display text-[clamp(1.9rem,3.6vw,3rem)] font-medium leading-tight text-espresso">
            {name}
          </h2>
          <p className="mt-4 text-cocoa">{body}</p>
          {price && <p className="mt-6 font-display text-xl text-saffron tnum">{price}</p>}
        </Reveal>
      </div>
    </section>
  );
}

export function TrustStrip({ items }: { items: string[] }) {
  return (
    <section className="border-y border-gold/40 bg-bone">
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5 py-6 sm:px-8">
        {items.map((it) => (
          <span key={it} className="flex items-center gap-2 text-sm font-medium text-cocoa">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="text-rosemary">
              <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {it}
          </span>
        ))}
      </div>
    </section>
  );
}

export function ClosingCTA({
  title = "Your next event starts here.",
  sub = "Tell us about your event and get a free personalized estimate within 24 hours.",
}: {
  title?: string;
  sub?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-espresso text-linen">
      <div aria-hidden className="absolute inset-0" style={{ background: "radial-gradient(50% 60% at 50% 40%, rgba(232,197,138,0.18), transparent 70%)" }} />
      <div className="relative mx-auto max-w-3xl px-5 py-24 text-center sm:px-8 sm:py-32">
        <Reveal>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.6rem)] font-medium leading-[1.05]">{title}</h2>
          <p className="mx-auto mt-5 max-w-xl text-linen/80">{sub}</p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
            <a href={BOOK_HREF} className="btn-saffron">Plan your event</a>
            <a href={site.phoneHref} className="btn-ghost text-linen">Or call {site.phone}</a>
          </div>
          <p className="mt-6 text-sm text-linen/55">{site.serviceArea}.</p>
        </Reveal>
      </div>
    </section>
  );
}

export function ImageBand({ image, alt }: { image: string; alt: string }) {
  return (
    <section className="relative h-[42vh] w-full overflow-hidden bg-espresso sm:h-[56vh]">
      <Image src={image} alt={alt} fill sizes="100vw" className="object-cover" />
      <div aria-hidden className="absolute inset-0 bg-espresso/20" />
    </section>
  );
}
