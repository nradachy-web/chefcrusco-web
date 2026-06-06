"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Stars } from "./Stars";

const reviews = [
  {
    quote:
      "Carlos and his team were absolutely phenomenal. The food was delicious and beautifully presented, and the servers were so kind, professional, and ready to do whatever was needed. I could not have asked for a better experience.",
    name: "Amanda Garrett",
  },
  {
    quote:
      "This was a 10 out of 10 experience. The food was absolutely amazing and so was the service. They accommodated food restrictions and allergies. We were thrilled and it was money well spent.",
    name: "Betsy Grosser",
  },
  {
    quote:
      "From the moment I started talking with him, I knew he was my caterer. They cooked and served the best meal I could ever have hoped for, then washed every dish and cleaned my counters. Best decision ever.",
    name: "Judy Carr",
  },
];

const trustedBy = [
  "The Austin Winery",
  "Texas Beef Council",
  "Founding Austin",
  "Le Cordon Bleu",
  "Austin Culture Map",
];

export function Proof() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((v) => (v + 1) % reviews.length), 5500);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <section className="bg-linen">
      <div
        className="mx-auto max-w-4xl px-5 py-24 text-center sm:px-8 sm:py-32"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="flex flex-col items-center gap-3">
          <Stars />
          <p className="eyebrow text-oxblood">Rated 5 stars on Google</p>
        </div>

        <div className="relative mt-8 min-h-[16rem] sm:min-h-[13rem]">
          <AnimatePresence mode="wait">
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <blockquote className="font-display text-[clamp(1.4rem,3vw,2.3rem)] font-normal italic leading-[1.3] text-espresso">
                &ldquo;{reviews[i].quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-cocoa">
                {reviews[i].name}
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2.5">
          {reviews.map((_, n) => (
            <button
              key={n}
              type="button"
              aria-label={`Review ${n + 1}`}
              onClick={() => setI(n)}
              className={`h-2 rounded-full transition-all duration-300 ${
                n === i ? "w-7 bg-saffron" : "w-2 bg-gold/50 hover:bg-gold"
              }`}
            />
          ))}
        </div>

        <div className="mt-16 border-t border-gold/40 pt-10">
          <p className="eyebrow text-cocoa">Trusted by</p>
          <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium text-cocoa/80">
            {trustedBy.map((t) => (
              <li key={t} className="font-display text-lg italic">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
