import Image from "next/image";
import { site } from "@/lib/site";
import { BOOK_HREF } from "./Nav";

const gallery = [
  { img: "/photos/food-antipasto-tapas.jpg", alt: "Antipasto and tapas spread" },
  { img: "/photos/food-tortellini.jpg", alt: "Fresh tortellini plated" },
  { img: "/photos/food-swordfish.jpg", alt: "Grilled swordfish course" },
  { img: "/photos/food-duck-breast-peach.jpg", alt: "Seared duck breast with peach" },
  { img: "/photos/food-gazpacho-scallops.jpg", alt: "Chilled gazpacho with scallops" },
  { img: "/photos/food-palmitos-shrimp.jpg", alt: "Hearts of palm and shrimp appetizer" },
  { img: "/photos/food-endive-boats.jpg", alt: "Blue cheese endive boats" },
  { img: "/photos/dish-spaghetti-alle-vongole.jpeg", alt: "Spaghetti alle vongole with clams" },
  { img: "/photos/dish-tiramisu.jpeg", alt: "Classic tiramisu" },
  { img: "/photos/dish-lasagne-bolognese.jpeg", alt: "Lasagne bolognese" },
  { img: "/photos/food-empanadas-fox7.jpeg", alt: "Argentine empanadas" },
  { img: "/photos/event-wine-cooking-class.jpg", alt: "A wine and cooking class event" },
];

export function GalleryFinale() {
  return (
    <section>
      <div className="grid grid-cols-2 md:grid-cols-4">
        {gallery.map((g, i) => (
          <div key={g.img} className="group relative aspect-square overflow-hidden">
            <Image
              src={g.img}
              alt={g.alt}
              fill
              loading="lazy"
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover brightness-[0.97] saturate-[0.98] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05] group-hover:brightness-105 group-hover:saturate-105"
            />
          </div>
        ))}
      </div>

      {/* closing CTA band */}
      <div className="relative overflow-hidden bg-espresso text-linen">
        <div aria-hidden className="absolute inset-0" style={{ background: "radial-gradient(50% 60% at 50% 40%, rgba(232,197,138,0.18), transparent 70%)" }} />
        <div className="relative mx-auto max-w-3xl px-5 py-24 text-center sm:px-8 sm:py-32">
          <h2 className="font-display text-[clamp(2.2rem,5vw,4rem)] font-medium leading-[1.05]">
            Your next dinner starts here.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-linen/80">
            Tell us about your event and get a free personalized estimate within
            24 hours.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
            <a href={BOOK_HREF} className="btn-saffron">
              Plan your event
            </a>
            <a href={site.phoneHref} className="btn-ghost text-linen">
              Or call {site.phone}
            </a>
          </div>
          <p className="mt-6 text-sm text-linen/55">{site.serviceArea}.</p>
        </div>
      </div>
    </section>
  );
}
