"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { staticImages } from "@/lib/site-images";

const PHONE_HREF = "tel:0404730738";
const PHONE_LABEL = "0404 730 738";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-white/10 shadow-2xl py-3"
          : "bg-transparent border-b border-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo: white by default, brand yellow when scrolled */}
        <Link
          href="/"
          className="flex items-center gap-2 transition-transform duration-200 hover:scale-[1.02] rounded"
          aria-label="Quickfit Mobile Tyres Home"
        >
          <Image
            src={staticImages.logo.src}
            alt={staticImages.logo.alt}
            width={staticImages.logo.width}
            height={staticImages.logo.height}
            priority
            className={
              scrolled
                ? "transition-[filter] duration-300"
                : "brightness-0 invert transition-[filter] duration-300"
            }
          />
        </Link>

        {/* Desktop Nav Links */}
        {/* <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs lg:text-sm font-heading font-bold uppercase tracking-wider text-white/80">
          <a href="#services" className="hover:text-primary transition-colors">
            Services
          </a>
          <a href="#locations" className="hover:text-primary transition-colors">
            Locations
          </a>
          <a href="#how-it-works" className="hover:text-primary transition-colors">
            How It Works
          </a>
          <a href="#service-area" className="hover:text-primary transition-colors">
            Service Area
          </a>
          <a href="#faq" className="hover:text-primary transition-colors">
            FAQ
          </a>
          <a href="#reviews" className="hover:text-primary transition-colors">
            Reviews
          </a>
        </nav> */}

        {/* Right Call CTA Button */}
        <div className="flex items-center gap-3">
          <a
            href={PHONE_HREF}
            className="btn-primary flex items-center gap-2 text-xs sm:text-sm font-heading font-black tracking-wider uppercase !py-2.5 !px-3.5 sm:!px-5 rounded shadow-lg group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={`Call Quickfit Mobile Tyres at ${PHONE_LABEL}`}
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-ping inline-block sm:hidden" />
            <svg
              className="w-4 h-4 flex-shrink-0 transition-transform duration-200 group-hover:rotate-12"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span className="font-bold tracking-normal">{PHONE_LABEL}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
