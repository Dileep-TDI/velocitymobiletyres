import Image from "next/image";
import type { LocalAreaData } from "@/lib/types";
import ScrollReveal from "@/components/ScrollReveal";

interface LocalAreaProps {
  data: LocalAreaData;
}

export default function LocalAreaSection({ data }: LocalAreaProps) {
  if (!data) return null;

  return (
    <section
      id="service-area"
      aria-labelledby="local-area-title"
      className="relative py-16 sm:py-24 bg-[#0a0a0a] text-white overflow-hidden border-b border-white/10"
    >
      {/* Background Image — Generated specifically for Quickfit Mobile Tyres, no vintage/vignette overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/quickfit-roadside-service.jpg"
          alt="Quickfit Mobile Tyres Roadside Service in Kirrawee"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-20"
          priority={false}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* LEFT SIDE: Google Map — matches right column height */}
          <ScrollReveal
            variant="left"
            delay={80}
            className="lg:col-span-6 order-2 lg:order-1 h-full min-h-[380px] sm:min-h-[460px]"
          >
            <div className="w-full h-full min-h-[380px] sm:min-h-[460px] rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-black">
              <iframe
                title={
                  data.mapTitle ??
                  "Quickfit Mobile Tyres Kirrawee — Kirrawee NSW 2232"
                }
                src={
                  data.mapEmbedUrl ??
                  "https://maps.google.com/maps?q=Quickfit%20Mobile%20Tyres%20Kirrawee%2C%20Kirrawee%20NSW%202232%2C%20Australia&t=&z=15&ie=UTF8&iwloc=&output=embed"
                }
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-0 min-h-[380px] sm:min-h-[460px]"
              />
            </div>
          </ScrollReveal>

          {/* RIGHT SIDE: Local area copy */}
          <ScrollReveal
            variant="right"
            className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-center h-full"
          >
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-primary/20 border border-primary/30 text-primary font-heading font-bold text-xs uppercase tracking-widest w-fit">
              <svg
                className="w-3.5 h-3.5"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Service Area Coverage</span>
            </div>

            {/* Heading from Strapi */}
            <h2
              id="local-area-title"
              className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-tight leading-tight mb-5"
            >
              {data.heading ?? "Mobile Tyre Repair Near You in Kirrawee"}
            </h2>

            {/* Paragraphs from Strapi (100% dynamic) */}
            <div className="space-y-4 mb-8">
              {data.paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  className="text-white/85 text-base sm:text-lg leading-relaxed font-normal"
                >
                  {p}
                </p>
              ))}
            </div>

            {/* CTA and Operating Hours */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 border-t border-white/10">
              {data.phoneCta && (
                <a
                  href={data.phoneCta.url}
                  className="btn-primary !py-3.5 !px-7 text-sm sm:text-base font-heading font-black uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>
                    {data.phoneCta.label.toLowerCase().startsWith("call")
                      ? data.phoneCta.label
                      : `Call ${data.phoneCta.label}`}
                  </span>
                </a>
              )}

              {data.hours && (
                <div className="flex items-center gap-3 px-4 py-3.5 rounded-xl bg-white/15 border border-white/30 shadow-lg backdrop-blur-sm whitespace-nowrap">
                  <svg
                    className="w-5 h-5 text-primary shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                    <path strokeWidth="2" strokeLinecap="round" d="M12 6v6l4 2" />
                  </svg>
                  <p className="flex items-center gap-2.5 text-sm sm:text-base font-heading leading-none">
                    <span className="text-white uppercase font-bold tracking-wider">
                      Operating Hours
                    </span>
                    <span className="text-primary font-black tracking-wide">
                      {data.hours}
                    </span>
                  </p>
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
