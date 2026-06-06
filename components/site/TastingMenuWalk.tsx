"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValueEvent,
} from "motion/react";

const dishes = [
  { n: "01", name: "Oysters Persillade", desc: "Gulf brightness, garlic, parsley, butter.", img: "/photos/food-oysters-persillade.jpg", alt: "Oysters persillade with garlic, parsley and butter" },
  { n: "02", name: "Provencal Lamb", desc: "Peppercorns and demi-glace. The signature plate.", img: "/photos/food-provencal-lamb.jpg", alt: "Provencal lamb with peppercorns and demi-glace" },
  { n: "03", name: "Braised Short Rib", desc: "Apple, radish, lemon. Slow heat, clean finish.", img: "/photos/food-braised-short-rib.jpg", alt: "Braised short rib plated with apple, radish and lemon" },
  { n: "04", name: "Matambre Argentino", desc: "Mustard crema. Carlos's Argentine roots on a plate.", img: "/photos/food-matambre.jpg", alt: "Matambre Argentino rolled and sliced with mustard crema" },
  { n: "05", name: "Bomba Arroz, Mariscos", desc: "Azafran and shellfish. Saffron rice, done right.", img: "/photos/food-bomba-arroz-mariscos.jpg", alt: "Bomba saffron rice with shellfish and mariscos" },
  { n: "06", name: "Crema Catalana", desc: "Chocolate and cinnamon, torched to order.", img: "/photos/food-crema-catalana.jpg", alt: "Chocolate and cinnamon crema catalana torched to order" },
];

function Panel({ d }: { d: (typeof dishes)[number] }) {
  return (
    <article className="flex h-full w-[78vw] shrink-0 items-center gap-8 px-[3vw] md:w-[64vw]">
      <div className="relative aspect-[4/5] h-[64vh] shrink-0 overflow-hidden">
        <Image src={d.img} alt={d.alt} fill sizes="64vw" className="object-cover" />
      </div>
      <div className="max-w-xs">
        <span className="font-display text-6xl font-medium text-saffron">{d.n}</span>
        <h3 className="mt-3 font-display text-3xl font-medium leading-tight text-espresso">
          {d.name}
        </h3>
        <p className="mt-3 text-cocoa">{d.desc}</p>
      </div>
    </article>
  );
}

export function TastingMenuWalk() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const x = useSpring(useTransform(scrollYProgress, [0, 1], ["1%", "-76%"]), {
    stiffness: 70,
    damping: 22,
    restDelta: 0.0005,
  });
  const [course, setCourse] = useState(1);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setCourse(Math.min(dishes.length, Math.max(1, Math.ceil(v * dishes.length))));
  });

  return (
    <section className="bg-linen">
      {/* Desktop: pinned horizontal walk */}
      <div ref={ref} className="relative hidden h-[360vh] md:block">
        <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
          <div className="mx-auto flex w-full max-w-[1280px] items-end justify-between px-8 pb-6 pt-28">
            <div>
              <p className="eyebrow text-oxblood">The tasting menu</p>
              <h2 className="mt-3 font-display text-[clamp(2rem,3.6vw,3rem)] font-medium leading-tight text-espresso">
                Six courses, one table.
              </h2>
            </div>
            <p className="font-display text-xl text-cocoa tnum">
              <span className="text-saffron">
                {String(course).padStart(2, "0")}
              </span>{" "}
              / {String(dishes.length).padStart(2, "0")}
            </p>
          </div>
          <div className="relative flex-1">
            <motion.div style={{ x }} className="absolute inset-y-0 left-0 flex items-center">
              {dishes.map((d) => (
                <Panel key={d.n} d={d} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile: clean vertical stack, one course per viewport */}
      <div className="md:hidden">
        <div className="px-5 pb-4 pt-20">
          <p className="eyebrow text-oxblood">The tasting menu</p>
          <h2 className="mt-3 font-display text-3xl font-medium text-espresso">
            Six courses, one table.
          </h2>
        </div>
        <div className="flex flex-col gap-12 px-5 pb-16">
          {dishes.map((d) => (
            <motion.article
              key={d.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-12% 0px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image src={d.img} alt={d.alt} fill sizes="100vw" className="object-cover" />
              </div>
              <div className="mt-4 flex items-baseline gap-3">
                <span className="font-display text-3xl font-medium text-saffron">{d.n}</span>
                <h3 className="font-display text-2xl font-medium text-espresso">{d.name}</h3>
              </div>
              <p className="mt-2 text-cocoa">{d.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
