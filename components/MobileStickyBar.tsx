"use client";

import { useState, useEffect } from "react";

export default function MobileStickyBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 200px se zyada scroll hone par bar visible hoga
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check in case page reloads while scrolled down
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 p-3 sm:hidden bg-black/95 backdrop-blur-md border-t border-white/10 shadow-2xl transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-col min-w-0">
          <span className="text-white font-heading font-black text-sm uppercase tracking-wide leading-tight">
            Emergency Mobile Tyres
          </span>
          <span className="text-primary text-sm font-bold leading-tight mt-0.5">
            Open 7am–9pm Today
          </span>
        </div>
        <a
          href="tel:0404730738"
          className="btn-primary btn-pulse !py-3 !px-5 text-sm font-heading font-black uppercase tracking-wide flex items-center gap-2 shadow shrink-0"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          <span>Call Now</span>
        </a>
      </div>
    </div>
  );
}
