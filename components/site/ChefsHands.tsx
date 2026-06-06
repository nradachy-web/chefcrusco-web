"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const pedigree = [
  "Argentine parents. Italian and Spanish heritage. A kitchen built on travel through South America and Europe.",
  "Trained at The Escoffier Cooking School in Paris, and with Maria Affinita in S. Agata, Italy.",
  "Demonstrations at Le Cordon Bleu, Central Market, and the Buffalo Gap Food and Wine Festival alongside Chef Francis Mallmann.",
  "Private clients have included JJ Redick, Patrick Reed, and Anne Akiko Meyers.",
  "Over forty years of combined chef experience on the team.",
];

export function ChefsHands() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-espresso text-linen">
      <div aria-hidden className="absolute inset-0" style={{ background: "radial-gradient(50% 40% at 22% 30%, rgba(232,197,138,0.16), transparent 70%)" }} />
      <div className="relative mx-auto grid max-w-[1280px] items-center gap-12 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-[1.05fr_1fr]">
        {/* duotone portrait with parallax */}
        <div className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <motion.div style={{ y }} className="absolute inset-[-8%]">
              <Image
                src="/photos/carlos-in-action.jpg"
                alt="Chef Carlos Crusco cooking in action"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover grayscale-[0.35] contrast-[1.05] sepia-[0.25]"
              />
            </motion.div>
            <div aria-hidden className="absolute inset-0 mix-blend-multiply" style={{ background: "linear-gradient(150deg, rgba(42,33,27,0.55), rgba(122,52,20,0.35))" }} />
            <div aria-hidden className="absolute inset-0 mix-blend-soft-light" style={{ background: "linear-gradient(330deg, rgba(232,197,138,0.5), transparent 60%)" }} />
          </div>
          <div className="absolute -bottom-8 -right-4 hidden aspect-square w-40 overflow-hidden border-4 border-espresso sm:block">
            <Image
              src="/photos/carlos-chef-live-fire.jpg"
              alt="Chef Carlos Crusco cooking over live fire"
              fill
              sizes="160px"
              className="object-cover grayscale-[0.3] sepia-[0.3]"
            />
          </div>
        </div>

        {/* pedigree */}
        <div>
          <p className="eyebrow text-candle">The hands behind the table</p>
          <h2 className="mt-4 font-display text-[clamp(2.2rem,4.5vw,3.6rem)] font-medium leading-[1.04]">
            Trained in Paris.
            <br />
            Cooked over fire.
          </h2>
          <p className="mt-4 font-display text-lg italic text-candle">
            Carlos Crusco, chef and owner.
          </p>

          <div className="mt-9 space-y-5 border-l border-gold/40 pl-6">
            {pedigree.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15% 0px" }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="text-linen/80"
              >
                {line}
              </motion.p>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-9 max-w-md font-display text-xl italic leading-relaxed text-linen/90"
          >
            &ldquo;A chef must think like a scientist, organize like an accountant,
            plate like an artist, and cook like a Grandma.&rdquo;
          </motion.p>
        </div>
      </div>
    </section>
  );
}
