import type { PartnersData } from "@/lib/types";
import ScrollReveal from "@/components/ScrollReveal";

interface PartnersProps {
  data: PartnersData;
}

const PARTNERS = [
  { name: "Continental", tag: "Premium Contact" },
  { name: "Michelin", tag: "Pilot Sport" },
  { name: "Bridgestone", tag: "Turanza & Potenza" },
  { name: "Goodyear", tag: "Eagle F1" },
  { name: "Pirelli", tag: "P Zero" },
  { name: "Dunlop", tag: "SP Sport" },
  { name: "Hankook", tag: "Ventus Prime" },
  { name: "Yokohama", tag: "Advan" },
  { name: "Kumho", tag: "Ecsta" },
];

export default function PartnersSection({ data }: PartnersProps) {
  if (!data) return null;

  const displayHeading = data.heading?.replace(/:$/, "").trim() || "Our Partners";

  // Double the list for seamless continuous infinite marquee
  const marqueeItems = [...PARTNERS, ...PARTNERS];

  return (
    <section
      aria-label="Tyre Brand Partners"
      className="relative py-12 lg:py-16 bg-[#0d0d0d] border-b border-white/5 overflow-hidden"
    >
      <ScrollReveal
        variant="fade"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center"
      >
        <p className="text-white/40 font-heading font-black text-xs uppercase tracking-[0.25em]">
          {displayHeading} — Fitted & Supplied Across Sydney
        </p>
      </ScrollReveal>

      {/* Marquee Container with edge gradients */}
      <ScrollReveal variant="up" delay={120} className="relative w-full overflow-hidden mask-fade">
        {/* Left Fade */}
        <div
          className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#0d0d0d] to-transparent z-10 pointer-events-none"
          aria-hidden="true"
        />
        {/* Right Fade */}
        <div
          className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#0d0d0d] to-transparent z-10 pointer-events-none"
          aria-hidden="true"
        />

        {/* Marquee Track */}
        <div className="animate-marquee flex items-center gap-6 sm:gap-10 py-2">
          {marqueeItems.map((partner, idx) => (
            <div
              key={`${partner.name}-${idx}`}
              className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-primary/50 transition-colors shrink-0 group select-none"
            >
              <div className="w-2 h-2 rounded-full bg-primary/60 group-hover:bg-primary transition-colors" />
              <div className="flex flex-col">
                <span className="font-heading font-black text-base sm:text-lg text-white/80 group-hover:text-primary uppercase tracking-wider transition-colors">
                  {partner.name}
                </span>
                <span className="text-[10px] text-white/40 tracking-wider uppercase font-semibold">
                  {partner.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
