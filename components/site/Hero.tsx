"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { site } from "@/lib/site";
import { BOOK_HREF } from "./Nav";
import { Stars } from "./Stars";

const ease = [0.22, 1, 0.36, 1] as const;

const line = {
  hidden: { y: "115%" },
  show: (i: number) => ({
    y: "0%",
    transition: { duration: 1, delay: 0.25 + i * 0.13, ease },
  }),
};

export function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-espresso">
      {/* Hero image: blur-to-sharp resolve, then a slow Ken Burns drift */}
      <motion.div
        initial={{ scale: 1.1, filter: "blur(16px)" }}
        animate={{ scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.7, ease }}
        className="absolute inset-0"
      >
        <motion.div
          animate={{ scale: [1, 1.07] }}
          transition={{ duration: 20, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0"
        >
          <Image
            src="/photos/food-provencal-lamb.jpg"
            alt="Provencal lamb with peppercorns and demi-glace on a wood serving board"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[68%_center]"
          />
        </motion.div>
      </motion.div>

      {/* candlelight wash + legibility scrims */}
      <motion.div
        aria-hidden
        className="absolute inset-0"
        style={{ background: "radial-gradient(58% 50% at 26% 40%, rgba(232,197,138,0.26), transparent 70%)" }}
        animate={{ opacity: [0.75, 1, 0.75] }}
        transition={{ duration: 9, ease: "easeInOut", repeat: Infinity }}
      />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-espresso/92 via-espresso/35 to-espresso/30" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-espresso/85 via-espresso/25 to-transparent" />

      {/* content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1280px] flex-col justify-center px-5 pb-28 pt-28 sm:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="eyebrow text-candle"
        >
          Austin Private Chef and Catering
        </motion.p>

        <h1 className="mt-5 font-display font-medium leading-[0.96] text-linen">
          <span className="block overflow-hidden pb-1">
            <motion.span variants={line} custom={0} initial="hidden" animate="show" className="block text-[clamp(2.9rem,9vw,7rem)]">
              The best table
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-1">
            <motion.span variants={line} custom={1} initial="hidden" animate="show" className="block text-[clamp(2.9rem,9vw,7rem)]">
              in town.
            </motion.span>
          </span>
          <span className="mt-3 block overflow-hidden pb-1">
            <motion.span variants={line} custom={2} initial="hidden" animate="show" className="block font-display text-[clamp(1.5rem,4.4vw,3rem)] font-normal italic text-candle">
              Your home and office.
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.8, ease }}
          className="mt-7 max-w-xl text-base text-linen/85 sm:text-lg"
        >
          Plated dinners, tapas parties, and corporate events, cooked fresh in
          your space. {site.serviceArea}.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.8, ease }}
          className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4"
        >
          <a href={BOOK_HREF} className="btn-saffron">
            Plan your event
          </a>
          <a href={site.phoneHref} className="btn-ghost text-linen">
            Call {site.phone}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.35, duration: 0.8 }}
          className="mt-7 flex items-center gap-2.5 text-sm text-linen/85"
        >
          <Stars />
          <span>Rated 5.0 on Google by Austin hosts</span>
        </motion.div>
      </div>

      <motion.a
        href="#doorways"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-[0.7rem] uppercase tracking-[0.22em] text-linen/70 hover:text-linen"
      >
        See the menu
      </motion.a>
    </section>
  );
}
