"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import type { HowItWorksData } from "@/lib/types";
import ScrollReveal from "@/components/ScrollReveal";

interface HowItWorksProps {
  data: HowItWorksData;
}

const MICHELIN_WHEEL_URL =
  "https://quickfitmobiletyres.com.au/wp-content/uploads/2026/04/continental-tyres.png";

export default function HowItWorksSection({ data }: HowItWorksProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const wheelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Continuous smooth rotation of the Michelin tyre wheel
    if (wheelRef.current) {
      const tween = gsap.to(wheelRef.current, {
        rotation: 360,
        duration: 10,
        repeat: -1,
        ease: "none",
      });

      return () => {
        tween.kill();
      };
    }
  }, []);

  if (!data || !data.steps || data.steps.length === 0) return null;

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      aria-labelledby="how-it-works-title"
      className="relative py-20 lg:py-28 bg-[#f8f9fa] text-black border-b border-gray-200 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Michelin Wheel on Right */}
        <ScrollReveal
          variant="up"
          className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-14 lg:mb-20"
        >
          <div className="max-w-2xl">
            {data.eyebrow && (
              <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-4 rounded-full bg-primary/20 border border-primary/30 text-black font-heading font-bold text-xs uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-black" />
                <span>{data.eyebrow}</span>
              </div>
            )}
            <h2
              id="how-it-works-title"
              className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-secondary uppercase tracking-tight leading-tight"
            >
              {data.title ??
                "Get Your Tyre Problem Sorted in Four Simple Steps"}
            </h2>
          </div>

          {/* Continuous Rotating Michelin Tyre Wheel (Desktop/Tablet) */}
          <div className="hidden sm:flex items-center gap-4 bg-white border border-gray-200 rounded-2xl px-5 py-3 shadow-md shrink-0">
            <div className="flex flex-col text-right">
              <span className="font-heading font-black text-sm uppercase tracking-wider text-secondary">
                Mobile Fitting
              </span>
              <span className="text-xs text-gray-500 font-medium">
                Fast Roadside Service
              </span>
            </div>

            <div
              ref={wheelRef}
              className="w-16 h-16 md:w-20 md:h-20 relative drop-shadow-md select-none shrink-0"
              style={{ willChange: "transform" }}
            >
              <Image
                src={MICHELIN_WHEEL_URL}
                alt="Quickfit Moving Michelin Tyre Wheel"
                fill
                sizes="80px"
                className="object-contain pointer-events-none"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Steps Grid / Stepper */}
        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div
            className="hidden lg:block absolute top-[52px] left-[60px] right-[60px] h-[3px] bg-gray-200 z-0"
            aria-hidden="true"
          >
            <div className="h-full bg-gradient-to-r from-primary via-primary/70 to-primary/30 w-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10">
            {data.steps.map((step) => {
              const numStr = String(step.stepNumber).padStart(2, "0");
              return (
                <ScrollReveal
                  key={step.stepNumber}
                  variant="up"
                  delay={(step.stepNumber - 1) * 110}
                  className="group relative flex flex-col p-7 rounded-2xl bg-white border-2 border-gray-200 hover:border-primary shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full"
                >
                  {/* Step Number Badge (Clean, step text removed) */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary text-black font-heading font-black text-xl flex items-center justify-center shadow-md shadow-primary/30 group-hover:scale-110 transition-transform duration-300">
                      {numStr}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-black text-xl text-black uppercase tracking-tight mb-3 group-hover:text-primary transition-colors duration-200">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-700 text-sm leading-relaxed flex-1 font-normal">
                    {step.description}
                  </p>

                  {/* Phone CTA if present on step (e.g. Call 0404 730 738) */}
                  {step.phoneUrl && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <a
                        href={step.phoneUrl}
                        className="inline-flex items-center gap-2 !text-primary hover:!text-[#cfbe0a] font-heading font-bold text-sm underline decoration-primary underline-offset-4 transition-colors"
                      >
                        <svg
                          className="w-4 h-4 text-primary"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        <span>{step.phoneLabel || "0404 730 738"}</span>
                      </a>
                    </div>
                  )}
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
