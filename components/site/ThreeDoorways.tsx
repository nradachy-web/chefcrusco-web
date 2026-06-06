import Image from "next/image";
import Link from "next/link";
import { Reveal, SaffronRule } from "./Reveal";

const doorways = [
  {
    n: "01",
    title: "Private Chef",
    line: "Four courses, plated and seated in your home, from 155 to 165 per person.",
    verb: "Plan a private dinner",
    href: "/private-chef",
    img: "/photos/event-vday-dinner.jpg",
    alt: "An intimate candlelit private dinner table set for a plated meal",
  },
  {
    n: "02",
    title: "Catering & Events",
    line: "Tapas spreads, grazing tables, and full celebrations from 80 to 140 per person.",
    verb: "Cater my event",
    href: "/catering",
    img: "/photos/food-antipasto-tapas.jpg",
    alt: "A generous antipasto and tapas spread on a wood table",
  },
  {
    n: "03",
    title: "Corporate",
    line: "Office lunches and the Dinner for Eight client gifting program.",
    verb: "Cater for my team",
    href: "/corporate",
    img: "/photos/event-dinner-for-eight-9.jpg",
    alt: "A plated corporate dinner course ready to serve",
  },
];

export function ThreeDoorways() {
  return (
    <section id="doorways" className="bg-bone">
      <div className="mx-auto max-w-[1280px] px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <p className="eyebrow text-oxblood">Three ways to set your table</p>
          <SaffronRule className="mt-3" />
          <h2 className="mt-5 max-w-2xl font-display text-[clamp(2rem,4.5vw,3.4rem)] font-medium leading-[1.05] text-espresso">
            Pick the experience. We bring the rest.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {doorways.map((d, i) => (
            <Reveal key={d.n} delay={i * 0.1}>
              <Link
                href={d.href}
                className="group flex h-full flex-col border border-gold/50 bg-linen transition-colors hover:border-saffron"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={d.img}
                    alt={d.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-4 top-3 font-display text-5xl font-medium text-linen/90 mix-blend-soft-light">
                    {d.n}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-2xl font-medium text-espresso">
                    {d.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-cocoa">
                    {d.line}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-saffron">
                    {d.verb}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform duration-300 group-hover:translate-x-1">
                      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
