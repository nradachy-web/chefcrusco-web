import Image from "next/image";

/** Gapless edge-to-edge gallery, lazy loaded, gentle warm lift on hover. */
export function Gallery({ images }: { images: { img: string; alt: string }[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4">
      {images.map((g) => (
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
  );
}
