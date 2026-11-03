import Image from "next/image";
import type { PartnersData } from "@/lib/types";
import ScrollReveal from "@/components/ScrollReveal";

interface PartnersProps {
  data: PartnersData;
}

/** Same partner logos as quickfitmobiletyres.com.au */
const PARTNERS = [
  { name: "Continental", src: "/images/partners/continental.png" },
  { name: "Ferentino", src: "/images/partners/ferentino.png" },
  { name: "Pirelli", src: "/images/partners/pirelli.png" },
  { name: "Michelin", src: "/images/partners/michelin.png" },
  { name: "Goodyear", src: "/images/partners/goodyear.png" },
  { name: "Goodride", src: "/images/partners/goodride.png" },
];

export default function PartnersSection({ data }: PartnersProps) {
  if (!data) return null;

  const displayHeading =
    data.heading?.replace(/:$/, "").trim() ||
    "Partnering with Major Tyre Brands";

  // Double the list for seamless continuous infinite marquee
  const marqueeItems = [...PARTNERS, ...PARTNERS];

  return (
    <section
      aria-label="Tyre Brand Partners"
      className="relative py-12 lg:py-16 bg-[#0d0d0d] border-b border-white/5 overflow-hidden"
    >
      <ScrollReveal
        variant="fade"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center"
      >
        <h2 className="text-white font-heading font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight">
          {displayHeading}
        </h2>
      </ScrollReveal>

      <ScrollReveal variant="up" delay={120} className="relative w-full overflow-hidden mask-fade">
        <div
          className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#0d0d0d] to-transparent z-10 pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#0d0d0d] to-transparent z-10 pointer-events-none"
          aria-hidden="true"
        />

        <div className="animate-marquee flex items-center gap-8 sm:gap-14 py-2">
          {marqueeItems.map((partner, idx) => (
            <div
              key={`${partner.name}-${idx}`}
              className="flex items-center justify-center shrink-0 px-4 py-3 rounded-xl bg-white border border-white/10 group select-none min-w-[140px] sm:min-w-[160px] h-[72px] sm:h-[84px]"
            >
              <Image
                src={partner.src}
                alt={`${partner.name} tyre brand`}
                width={160}
                height={80}
                className="max-h-12 sm:max-h-14 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
