"use client";

import { useState } from "react";
import Image from "next/image";
import type { WeComeToYouData } from "@/lib/types";
import ScrollReveal from "@/components/ScrollReveal";

interface WeComeToYouSectionProps {
  data: WeComeToYouData;
}

// Relevant contextual images for each of the 4 locations
const LOCATION_VISUALS = [
  {
    image:
      "https://quickfitmobiletyres.com.au/wp-content/uploads/2026/10/Classic-Red-Sports-Car-in-the-Workshop.png",
    alt: "Mobile Tyre Service At Home in West Ryde",
    badge: "Driveway Assistance",
  },
  {
    image:
      "https://quickfitmobiletyres.com.au/wp-content/uploads/2026/10/Roadside-Tire-Service-in-Action.webp",
    alt: "Mobile Tyre Service At Work in West Ryde",
    badge: "Workplace & Office Carpark",
  },
  {
    image:
      "https://quickfitmobiletyres.com.au/wp-content/uploads/2026/10/Classic-Red-Sports-Car-in-the-Workshop.png",
    alt: "Fleet Tyre Service Depot in West Ryde",
    badge: "Business Depot & Vans",
  },
  {
    image:
      "https://quickfitmobiletyres.com.au/wp-content/uploads/2026/10/Roadside-Tire-Service-in-Action.webp",
    alt: "Safe Roadside Tyre Assistance in West Ryde",
    badge: "Emergency Roadside Dispatch",
  },
];

function LocationIcon({ index, active }: { index: number; active: boolean }) {
  // Active badge is yellow (bg-primary) — icon must be black for contrast
  const strokeClass = active
    ? "text-black"
    : "text-gray-300 group-hover:text-primary";

  if (index === 0) {
    // Home icon
    return (
      <svg className={`w-6 h-6 transition-colors duration-200 ${strokeClass}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    );
  }
  if (index === 1) {
    // Work / Office icon
    return (
      <svg className={`w-6 h-6 transition-colors duration-200 ${strokeClass}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    );
  }
  if (index === 2) {
    // Business Fleet Depot icon
    return (
      <svg className={`w-6 h-6 transition-colors duration-200 ${strokeClass}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    );
  }
  // Safe Roadside icon
  return (
    <svg className={`w-6 h-6 transition-colors duration-200 ${strokeClass}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

export default function WeComeToYouSection({ data }: WeComeToYouSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeVisual = LOCATION_VISUALS[activeIndex % LOCATION_VISUALS.length];
  const activeCard = data.cards[activeIndex] ?? data.cards[0];

  return (
    <section id="locations" className="py-20 md:py-28 bg-secondary text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal variant="up" className="max-w-3xl mb-14 md:mb-18">
          {data.eyebrow && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded bg-white/10 border border-white/20 text-primary font-heading font-black text-xs uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-primary" />
              {data.eyebrow}
            </div>
          )}

          {data.title && (
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black uppercase tracking-tight text-white mb-5">
              {data.title}
            </h2>
          )}

          {data.description && (
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              {data.description}
            </p>
          )}
          {data.paragraphs?.[0] && (
            <p className="mt-4 text-gray-300 text-base sm:text-lg leading-relaxed">
              {data.paragraphs[0]}
            </p>
          )}
        </ScrollReveal>

        {/* 2-Column Responsive Layout: Column 1 (Interactive Cards) + Column 2 (Dynamic Visual) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Column 1: The 4 Cards (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {data.cards.map((card, idx) => {
              const isActive = activeIndex === idx;

              return (
                <ScrollReveal key={idx} variant="left" delay={idx * 90}>
                  <div
                    onMouseEnter={() => setActiveIndex(idx)}
                    onClick={() => setActiveIndex(idx)}
                    className={`group relative rounded-xl p-5 sm:p-6 transition-all duration-300 cursor-pointer border-2 ${
                      isActive
                        ? "bg-white/10 border-primary shadow-xl"
                        : "bg-white/5 border-white/10 hover:border-white/25 hover:bg-white/8"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${
                          isActive
                            ? "bg-primary text-black"
                            : "bg-white/10 text-gray-300 group-hover:bg-primary/20"
                        }`}
                      >
                        <LocationIcon index={idx} active={isActive} />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3
                            className={`font-heading font-bold text-lg sm:text-xl transition-colors ${
                              isActive
                                ? "text-primary"
                                : "text-white group-hover:text-primary"
                            }`}
                          >
                            {card.title}
                          </h3>
                          <span className="text-xs uppercase font-heading font-semibold text-gray-400">
                            0{idx + 1}
                          </span>
                        </div>
                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Column 2: Sticky Image Display (5 cols on lg) */}
          <div className="lg:col-span-5 relative min-h-[340px] sm:min-h-[420px] rounded-2xl overflow-hidden border-2 border-white/15 bg-black shadow-2xl flex flex-col justify-end p-6 sm:p-8">
            <Image
              src={activeVisual.image}
              alt={activeVisual.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center opacity-65 transition-all duration-500 ease-in-out"
            />
            <div className="absolute inset-0 bg-black/40" />

            {/* Bottom active card overlay info */}
            <div className="relative z-10 bg-black/85 backdrop-blur-md p-5 rounded-xl border border-white/15">
              <span className="text-primary font-heading font-bold text-xs uppercase tracking-widest block mb-1">
                {activeVisual.badge}
              </span>
              <h4 className="font-heading font-black text-xl text-white mb-2">
                {activeCard?.title}
              </h4>
              <p className="text-gray-300 text-xs sm:text-sm line-clamp-2">
                {activeCard?.description}
              </p>
            </div>
          </div>
        </div>

        {(data.paragraphs?.length ?? 0) > 1 && (
          <ScrollReveal variant="up" delay={80} className="mt-10 max-w-3xl space-y-4">
            {data.paragraphs!.slice(1).map((p, idx) => (
              <p
                key={idx}
                className="text-gray-300 text-base sm:text-lg leading-relaxed"
              >
                {p}
              </p>
            ))}
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
