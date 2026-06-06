import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/site/PageHero";
import { SectionHead, ClosingCTA } from "@/components/site/sections";
import { ChefsHands } from "@/components/site/ChefsHands";
import { ThreeDoorways } from "@/components/site/ThreeDoorways";
import { Proof } from "@/components/site/Proof";
import { Reveal } from "@/components/site/Reveal";
import { team } from "@/lib/content";

export const metadata: Metadata = {
  title: "The Chef",
  description:
    "Chef Carlos Crusco. Argentine roots, Escoffier Paris training, and over forty years of combined chef experience cooking for Austin tables.",
};

export default function Story() {
  return (
    <>
      <PageHero
        eyebrow="The chef"
        lines={["The hands", "behind the table."]}
        sub="Argentine roots, an Escoffier Paris education, and a kitchen built on travel through South America and Europe."
        image="/photos/carlos-portrait-about.jpg"
        alt="Portrait of Chef Carlos Crusco"
        objectPosition="center 30%"
      />

      {/* creed */}
      <section className="bg-bone">
        <div className="mx-auto max-w-3xl px-5 py-24 text-center sm:px-8 sm:py-28">
          <Reveal>
            <blockquote className="font-display text-[clamp(1.6rem,3.4vw,2.6rem)] font-normal italic leading-[1.3] text-espresso">
              &ldquo;A chef must think like a scientist, organize like an
              accountant, and plate like an artist.&rdquo;
            </blockquote>
            <p className="mt-6 eyebrow text-oxblood">Carlos Crusco</p>
          </Reveal>
        </div>
      </section>

      {/* story */}
      <section className="bg-linen">
        <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-5 py-24 sm:px-8 sm:py-28 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image src="/photos/carlos-in-action.jpg" alt="Chef Carlos Crusco cooking" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHead eyebrow="The story" title="From Buenos Aires to your Austin table." />
            <div className="mt-5 space-y-4 text-cocoa">
              <p>
                Carlos grew up with Argentine parents and Italian and Spanish
                heritage, in a family where the table was the center of the
                house. That start became a career built on travel, fire, and an
                obsession with doing the simple things perfectly.
              </p>
              <p>
                He trained at The Escoffier Cooking School in Paris and with
                Maria Affinita in S. Agata, Italy, and has cooked and
                demonstrated alongside some of the best, including Chef Francis
                Mallmann. Today that same standard comes to Austin homes and
                offices, plate by plate.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <ChefsHands />
      <Proof />

      {/* the team */}
      <section className="bg-bone">
        <div className="mx-auto max-w-[1280px] px-5 py-24 sm:px-8 sm:py-28">
          <SectionHead eyebrow="The team" title="Forty years of combined experience." intro="Servers TABC certified. Chefs TFSM certified." />
          <div className="mt-12 grid gap-7 md:grid-cols-3">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.08}>
                <div className="h-full border border-gold/50 bg-linen p-8">
                  <h3 className="font-display text-xl font-medium text-espresso">{m.name}</h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-cocoa">{m.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ThreeDoorways />
      <ClosingCTA title="Let us cook for you." />
    </>
  );
}
