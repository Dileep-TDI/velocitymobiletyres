"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { HomepageHero, ResolvedImage } from "@/lib/types";

const FALLBACK_HERO_URL =
  "https://quickfitmobiletyres.com.au/wp-content/uploads/2026/10/Classic-Red-Sports-Car-in-the-Workshop.png";

const CONTINENTAL_TYRE_URL =
  "https://quickfitmobiletyres.com.au/wp-content/uploads/2026/04/cropped-continental-tyres.png";

const STATS = [
  { value: "30 MIN", label: "Avg Response Time" },
  { value: "5,000+", label: "Jobs Completed" },
  { value: "7AM–9PM", label: "7 Days Open" },
  { value: "4.9 ★", label: "Google Rating" },
];

interface HeroSectionProps {
  hero: HomepageHero;
  backgroundImage?: ResolvedImage | null;
}

export default function HeroSection({
  hero,
  backgroundImage,
}: HeroSectionProps) {
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const statsBarRef = useRef<HTMLDivElement>(null);
  const rollingTyreRef = useRef<HTMLDivElement>(null);

  const title =
    hero.title ?? "Mobile Tyre Repair in West Ryde - We Come to You";
  const imgSrc = backgroundImage?.src ?? FALLBACK_HERO_URL;
  const imgAlt =
    backgroundImage?.alt ?? "Quickfit Mobile Tyres Workshop Service";

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const ctx = gsap.context(() => {
      const content = contentRef.current;
      const media = mediaRef.current;
      const tyre = rollingTyreRef.current;
      const bar = statsBarRef.current;

      if (!reduceMotion && content) {
        const items = content.querySelectorAll("[data-hero-animate]");
        gsap.set(items, { opacity: 0, y: 28 });
        gsap.to(items, {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.15,
        });
      }

      if (!reduceMotion && media) {
        gsap.fromTo(
          media,
          { scale: 1.12, opacity: 0.45 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.4,
            ease: "power2.out",
          },
        );

        gsap.to(media, {
          yPercent: 18,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      if (!reduceMotion && bar) {
        const stats = bar.querySelectorAll("[data-stat]");
        gsap.from(stats, {
          opacity: 0,
          y: 16,
          duration: 0.55,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: bar,
            start: "top 92%",
          },
        });
      }

      if (!tyre || !bar || reduceMotion) return;

      const getMaxTravel = () => Math.max(bar.offsetWidth - 56, 0);
      let hasCompleted = false;

      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        onUpdate: (self) => {
          const progress = self.progress;
          const maxTravel = getMaxTravel();

          if (progress < 0.4) {
            hasCompleted = false;
            const partial = progress / 0.4;
            const currentX = partial * (maxTravel * 0.35);
            const currentRot = (currentX / 24) * 60;

            gsap.to(tyre, {
              x: currentX,
              rotation: currentRot,
              duration: 0.15,
              ease: "none",
              overwrite: "auto",
            });
          } else if (!hasCompleted) {
            hasCompleted = true;
            gsap.to(tyre, {
              x: maxTravel,
              rotation: "+=720",
              duration: 1.1,
              ease: "power2.out",
              overwrite: "auto",
            });
          }
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const renderHeading = () => {
    const target = hero.highlight?.trim() || "West Ryde";
    const parts = title.split(
      new RegExp(`(${target.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi"),
    );
    return parts.map((part, i) =>
      part.toLowerCase() === target.toLowerCase() ? (
        <span
          key={i}
          className="text-primary underline decoration-primary/50 underline-offset-4"
        >
          {part}
        </span>
      ) : (
        <span key={i} className="text-white">
          {part}
        </span>
      ),
    );
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-[92dvh] sm:min-h-screen flex flex-col justify-between overflow-hidden bg-black text-white"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div ref={mediaRef} className="absolute inset-0 will-change-transform">
          <Image
            src={imgSrc}
            alt={imgAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-70"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/55 via-black/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-12 sm:pb-16 w-full flex-1 flex flex-col justify-center">
        <div ref={contentRef} className="max-w-3xl">
          <div
            data-hero-animate
            className="flex flex-wrap items-center gap-2.5 mb-4 sm:mb-6"
          >
            {hero.eyebrow && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-primary/20 border border-primary/40 text-primary font-heading font-bold text-xs sm:text-sm uppercase tracking-wider">
                <svg
                  className="w-3.5 h-3.5 text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                {hero.eyebrow}
              </span>
            )}
          </div>

          <h1
            data-hero-animate
            className="font-heading font-black text-white uppercase text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-4 sm:mb-6"
          >
            {renderHeading()}
          </h1>

          {hero.descriptions.length > 0 && (
            <div className="space-y-3 mb-6 sm:mb-8">
              {hero.descriptions.map((desc, i) => (
                <p
                  key={i}
                  data-hero-animate
                  className="text-gray-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl"
                >
                  {desc}
                </p>
              ))}
            </div>
          )}

          {hero.hours && (
            <p
              data-hero-animate
              className="mb-6 sm:mb-8 text-sm sm:text-base text-white/90 font-heading font-bold uppercase tracking-wider"
            >
              <span className="text-primary">{hero.hours.label}</span>{" "}
              <span>{hero.hours.value}</span>
            </p>
          )}

          <div
            data-hero-animate
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4"
          >
            {hero.phoneCta && (
              <a
                href={hero.phoneCta.url}
                className="btn-primary btn-pulse flex items-center justify-center gap-3 text-base sm:text-lg font-heading font-black uppercase tracking-wider !py-3.5 sm:!py-4 !px-6 sm:!px-8 rounded shadow-2xl group"
              >
                <svg
                  className="w-5 h-5 flex-shrink-0 group-hover:rotate-12 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>{hero.phoneCta.label}</span>
              </a>
            )}

            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-primary bg-black/40 hover:bg-black/60 backdrop-blur-md text-white hover:text-primary font-heading font-bold uppercase tracking-wider text-sm sm:text-base py-3.5 sm:py-4 px-6 rounded transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>Explore Services</span>
            </a>
          </div>
        </div>
      </div>

      <div
        ref={statsBarRef}
        className="relative z-10 w-full bg-primary border-t border-black/10 overflow-hidden"
      >
        <div
          ref={rollingTyreRef}
          className="hidden md:block absolute bottom-0 left-2 z-20 pointer-events-none drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]"
          style={{ width: "48px", height: "48px", willChange: "transform" }}
        >
          <Image
            src={CONTINENTAL_TYRE_URL}
            alt="Rolling Continental Tyre"
            width={48}
            height={48}
            className="w-full h-full object-contain pointer-events-none"
            priority
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-black/15 py-3 sm:py-4">
            {STATS.map((stat) => (
              <div
                key={stat.value}
                data-stat
                className="flex flex-col items-center justify-center px-2 py-1 text-center"
              >
                <span className="font-heading font-black text-black text-lg sm:text-2xl md:text-3xl leading-none">
                  {stat.value}
                </span>
                <span className="text-black/80 font-medium text-[11px] sm:text-xs md:text-sm uppercase tracking-wider mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div
          className="h-2 w-full hazard-stripe"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
