"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { site } from "@/lib/site";
import { BOOK_HREF } from "./Nav";

const ease = [0.22, 1, 0.36, 1] as const;
const line = {
  hidden: { y: "115%" },
  show: (i: number) => ({ y: "0%", transition: { duration: 0.95, delay: 0.2 + i * 0.12, ease } }),
};

export function PageHero({
  eyebrow,
  lines,
  sub,
  image,
  alt,
  objectPosition = "center",
  cta = "Request your estimate",
}: {
  eyebrow: string;
  lines: string[];
  sub: string;
  image: string;
  alt: string;
  objectPosition?: string;
  cta?: string;
}) {
  return (
    <section className="relative flex min-h-[82svh] w-full items-center overflow-hidden bg-espresso pt-24">
      <motion.div
        initial={{ scale: 1.08, filter: "blur(14px)" }}
        animate={{ scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.6, ease }}
        className="absolute inset-0"
      >
        <Image src={image} alt={alt} fill priority sizes="100vw" className="object-cover" style={{ objectPosition }} />
      </motion.div>
      <div aria-hidden className="absolute inset-0" style={{ background: "radial-gradient(60% 55% at 25% 40%, rgba(232,197,138,0.22), transparent 70%)" }} />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-espresso/92 via-espresso/40 to-espresso/35" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-espresso/85 via-espresso/25 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-5 pb-16 sm:px-8">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1, duration: 0.8 }} className="eyebrow text-linen! drop-shadow-[0_1px_3px_rgba(26,18,12,0.55)]">
          {eyebrow}
        </motion.p>
        <h1 className="mt-5 font-display font-medium leading-[1.0] text-linen">
          {lines.map((l, i) => (
            <span key={i} className="block overflow-hidden pb-1">
              <motion.span variants={line} custom={i} initial="hidden" animate="show" className="block text-[clamp(2.4rem,7vw,5.2rem)]">
                {l}
              </motion.span>
            </span>
          ))}
        </h1>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.8, ease }} className="mt-6 max-w-xl text-base text-linen/85 sm:text-lg">
          {sub}
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.8, ease }} className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
          <a href={BOOK_HREF} className="btn-saffron">{cta}</a>
          <a href={site.phoneHref} className="btn-ghost text-linen">Call {site.phone}</a>
        </motion.div>
      </div>
    </section>
  );
}
