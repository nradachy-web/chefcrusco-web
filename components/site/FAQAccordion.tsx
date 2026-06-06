"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { SaffronRule } from "./Reveal";

export function FAQAccordion({
  items,
  title = "Questions, answered.",
  eyebrow = "Before you ask",
  bone,
}: {
  items: { q: string; a: string }[];
  title?: string;
  eyebrow?: string;
  bone?: boolean;
}) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className={bone ? "bg-bone" : "bg-linen"}>
      <div className="mx-auto max-w-3xl px-5 py-24 sm:px-8 sm:py-28">
        <p className="eyebrow text-oxblood">{eyebrow}</p>
        <SaffronRule className="mt-3" />
        <h2 className="mt-5 font-display text-[clamp(1.9rem,4vw,3rem)] font-medium leading-tight text-espresso">
          {title}
        </h2>
        <div className="mt-10 divide-y divide-gold/40 border-y border-gold/40">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-display text-lg text-espresso sm:text-xl">{item.q}</span>
                  <span className={`shrink-0 text-saffron transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-8 text-cocoa">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
