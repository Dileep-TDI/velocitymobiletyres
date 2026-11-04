"use client";

import type { WhatWeDoData } from "@/lib/types";
import ScrollReveal from "@/components/ScrollReveal";

interface WhatWeDoSectionProps {
  data: WhatWeDoData;
}

/* Service Tyre Wheel SVG that rotates like real wheels on hover */
function ServiceWheelIcon({ type }: { type: number }) {
  if (type === 0) {
    // Puncture repair icon
    return (
      <svg
        className="w-8 h-8 text-black transition-transform duration-700 ease-out group-hover:rotate-180 group-hover:scale-110"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v4" />
        <path d="M12 18v4" />
        <path d="M4.93 4.93l2.83 2.83" />
        <path d="M16.24 16.24l2.83 2.83" />
        <path d="M2 12h4" />
        <path d="M18 12h4" />
        <circle cx="16" cy="8" r="1" fill="currentColor" />
      </svg>
    );
  }
  if (type === 1) {
    // Tyre replacement icon
    return (
      <svg
        className="w-8 h-8 text-black transition-transform duration-700 ease-out group-hover:rotate-180 group-hover:scale-110"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="3" />
        <path d="M4 12h4" />
        <path d="M16 12h4" />
        <path d="M12 4v4" />
        <path d="M12 16v4" />
        <path d="M6.34 6.34l2.83 2.83" />
        <path d="M14.83 14.83l2.83 2.83" />
        <path d="M6.34 17.66l2.83-2.83" />
        <path d="M14.83 9.17l2.83-2.83" />
      </svg>
    );
  }
  // Wheel balancing icon
  return (
    <svg
      className="w-8 h-8 text-black transition-transform duration-700 ease-out group-hover:rotate-180 group-hover:scale-110"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="5" />
      <path d="M12 7v10" />
      <path d="M7 12h10" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}

export default function WhatWeDoSection({ data }: WhatWeDoSectionProps) {
  return (
    <section id="services" className="py-20 md:py-28 bg-white text-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow & Main Section Header */}
        <ScrollReveal variant="up" className="max-w-3xl mb-14 md:mb-18">
          {data.eyebrow && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded bg-primary/15 border border-primary/40 text-black font-heading font-black text-xs uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-primary" />
              {data.eyebrow}
            </div>
          )}

          {data.title && (
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black uppercase tracking-tight text-secondary mb-5">
              {data.title}
            </h2>
          )}

          {data.description && (
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              {data.description}
            </p>
          )}
        </ScrollReveal>

        {/* Service cards with wheel rotation on hover */}
        <div
          className={`grid grid-cols-1 gap-8 ${
            data.cards.length >= 4
              ? "md:grid-cols-2 xl:grid-cols-4"
              : "md:grid-cols-3"
          }`}
        >
          {data.cards.map((card, idx) => (
            <ScrollReveal
              key={idx}
              variant="up"
              delay={idx * 100}
              className="group relative bg-muted/50 hover:bg-white border-2 border-border hover:border-primary rounded-2xl p-7 sm:p-9 transition-all duration-300 hover:shadow-2xl flex flex-col justify-between overflow-hidden cursor-default h-full"
            >
              {/* Wheel Icon Badge */}
              <div>
                <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center mb-6 shadow-md transition-all duration-300 group-hover:scale-105 group-hover:shadow-primary/30">
                  <ServiceWheelIcon type={idx % 3} />
                </div>

                <h3 className="font-heading font-black text-2xl uppercase tracking-tight text-secondary mb-4 group-hover:text-black transition-colors">
                  {card.title}
                </h3>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Card action — solid primary button */}
              <a
                href="tel:0404730738"
                aria-label="Call Quickfit Mobile Tyres at 0404 730 738 for fast on-site service"
                className="btn-primary mt-6 w-full !py-3 !px-3 sm:!px-4 text-[11px] sm:text-xs font-heading font-black uppercase tracking-wide whitespace-nowrap flex items-center justify-center gap-1.5 no-underline shadow-md shadow-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Fast On-Site Service
                <span aria-hidden="true" className="text-sm leading-none shrink-0">
                  →
                </span>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

