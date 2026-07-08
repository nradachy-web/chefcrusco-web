import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/site/PageHero";
import { SectionHead, ClosingCTA, ImageBand } from "@/components/site/sections";
import { Gallery } from "@/components/site/Gallery";
import { InquiryPlate } from "@/components/site/InquiryPlate";
import { Reveal } from "@/components/site/Reveal";
import { tapasSavory, tapasSweet, dropOffPlatters, cuisinePaths, cookingClasses } from "@/lib/content";

export const metadata: Metadata = {
  title: "Menus",
  description:
    "Chef Crusco menus, course by course. Prix-fixe and private dinners, Spanish tapas, drop-off platters, and the Dinner for Eight program. Real dishes and honest pricing.",
};

const courses = [
  { n: "01", label: "Prix-Fixe & Private", price: "155 to 165" },
  { n: "02", label: "Tapas & Appetizers", price: "80 to 140" },
  { n: "03", label: "Drop-Off Platters", price: "50 to 75" },
  { n: "04", label: "Customer Specific", price: "from 215" },
];

const gallery = [
  { img: "/photos/food-antipasto-tapas.jpg", alt: "Antipasto and tapas spread" },
  { img: "/photos/food-oysters-persillade.jpg", alt: "Oysters persillade" },
  { img: "/photos/dish-spaghetti-alle-vongole.jpeg", alt: "Spaghetti alle vongole" },
  { img: "/photos/food-empanadas-fox7.jpeg", alt: "Argentine empanadas" },
  { img: "/photos/food-tapas-membrillo.jpg", alt: "Tapas with membrillo" },
  { img: "/photos/dish-tiramisu.jpeg", alt: "Tiramisu" },
  { img: "/photos/food-chocolate-truffles.jpg", alt: "Chocolate truffles" },
  { img: "/photos/food-endive-boats.jpg", alt: "Blue cheese endive boats" },
];

export default function Menus() {
  return (
    <>
      <PageHero
        eyebrow="The menus"
        lines={["The menus.", "Course by course."]}
        sub="The real dishes that usually hide inside a form. Browse the food, then tell us what you are dreaming of."
        image="/photos/food-provencal-lamb.jpg"
        alt="Provencal lamb, the signature plate"
      />

      {/* course navigator */}
      <section className="border-b border-gold/40 bg-bone">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5 py-6 sm:px-8">
          {courses.map((c) => (
            <span key={c.n} className="flex items-baseline gap-2 text-sm font-medium text-cocoa">
              <span className="font-display text-saffron">{c.n}</span>
              {c.label}
              <span className="text-cocoa/60 tnum">${c.price}</span>
            </span>
          ))}
        </div>
      </section>

      {/* prix fixe / private */}
      <section id="prix-fixe" className="scroll-mt-24 bg-linen">
        <div className="mx-auto max-w-[1280px] px-5 py-24 sm:px-8 sm:py-28">
          <SectionHead eyebrow="01  Prix-Fixe and Private" title="Five cuisines, four courses each." intro="Plated, seated, four courses. 155 to 165 per person, menu dependent. Customer Specific menus from 215 per person." />
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {cuisinePaths.map((c, i) => (
              <Reveal key={c.name} delay={i * 0.05}>
                <div className="border-t border-gold/40 pt-5">
                  <h3 className="font-display text-2xl font-medium text-espresso">{c.name}</h3>
                  <p className="mt-1 text-sm text-cocoa">{c.note}</p>
                  <ol className="mt-4 space-y-2.5">
                    {c.courses.map((course, n) => (
                      <li key={n} className="flex gap-3 text-[0.95rem] text-cocoa">
                        <span className="font-display text-saffron tnum">{String(n + 1).padStart(2, "0")}</span>
                        <span>{course}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </Reveal>
            ))}
          </div>
          <Link href="/private-chef" className="btn-ghost mt-10 inline-flex text-saffron">
            See private chef dinners
          </Link>
        </div>
      </section>

      {/* tapas */}
      <section id="tapas" className="scroll-mt-24 bg-bone">
        <div className="mx-auto max-w-[1280px] px-5 py-24 sm:px-8 sm:py-28">
          <SectionHead eyebrow="02  Tapas and Appetizers" title="Spanish small plates, passed and stationed." intro="80 to 140 per person. 1,000 minimum." />
          <div className="mt-10 grid gap-12 md:grid-cols-2">
            <Reveal>
              <p className="eyebrow text-oxblood">Savory</p>
              <ul className="mt-4 space-y-2.5">
                {tapasSavory.map((t) => (
                  <li key={t} className="border-b border-gold/30 pb-2.5 font-display text-lg text-espresso">{t}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="eyebrow text-oxblood">Sweet</p>
              <ul className="mt-4 space-y-2.5">
                {tapasSweet.map((t) => (
                  <li key={t} className="border-b border-gold/30 pb-2.5 font-display text-lg text-espresso">{t}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* drop off */}
      <section id="drop-off" className="scroll-mt-24 bg-linen">
        <div className="mx-auto max-w-[1280px] px-5 py-24 sm:px-8 sm:py-28">
          <SectionHead eyebrow="03  Drop-Off Platters" title="Beautiful boards, delivered ready to serve." intro="50 to 75 per person. 800 minimum. Delivery is 30 dollars within 30 miles of Austin." />
          <ul className="mt-10 grid grid-cols-2 gap-x-10 gap-y-3 sm:grid-cols-3 lg:grid-cols-5">
            {dropOffPlatters.map((p) => (
              <li key={p} className="border-t border-gold/40 pt-3 font-display text-lg text-espresso">{p}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* cooking classes */}
      <section className="bg-bone">
        <div className="mx-auto max-w-[1280px] px-5 py-24 sm:px-8 sm:py-28">
          <SectionHead eyebrow="Hands-on" title="Cooking classes, plated and seated." intro="Four courses, 155 to 165 per person, menu dependent. Minimum 1,000 per event. A dinner party where the kitchen is the entertainment." />
          <ul className="mt-10 grid grid-cols-2 gap-x-10 gap-y-3 sm:grid-cols-3 lg:grid-cols-4">
            {cookingClasses.map((c) => (
              <li key={c} className="border-t border-gold/40 pt-3 text-[0.95rem] text-espresso">{c}</li>
            ))}
          </ul>
        </div>
      </section>

      <ImageBand image="/photos/event-vday-dinner.jpg" alt="A candlelit customer specific tasting" />

      {/* customer specific */}
      <section id="customer-specific" className="scroll-mt-24 bg-espresso text-linen">
        <div className="mx-auto max-w-3xl px-5 py-24 text-center sm:px-8 sm:py-28">
          <SectionHead eyebrow="04  Customer Specific" title="When you want something all your own." light intro="Five to nine courses, designed around your taste and your table. From 215 per person. 1,600 minimum." />
        </div>
      </section>

      <Gallery images={gallery} />
      <InquiryPlate />
      <ClosingCTA title="Found something you love?" sub="Tell us what caught your eye and get a personalized estimate within 24 hours." />
    </>
  );
}
