"use client";

import { useState } from "react";
import type { HomepageFaq } from "@/lib/types";
import ScrollReveal from "@/components/ScrollReveal";

function FaqItem({ item }: { item: HomepageFaq["items"][number] }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`bg-white border rounded-xl overflow-hidden transition-all duration-200 ${
        open
          ? "border-primary shadow-md"
          : "border-border shadow-sm hover:border-gray-300"
      }`}
    >
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        aria-expanded={open}
      >
        <span className="font-heading font-bold text-secondary text-base sm:text-xl group-hover:text-black transition-colors">
          {item.question}
        </span>
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-200 ${
            open
              ? "bg-primary text-black rotate-45"
              : "bg-muted text-gray-500 group-hover:text-black"
          }`}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </span>
      </button>
      {open && (
        <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-gray-600 text-sm sm:text-base leading-relaxed border-t border-border/60 pt-4">
          {item.answer}
        </div>
      )}
    </div>
  );
}

export default function FaqSection({ faq }: { faq: HomepageFaq | null }) {
  if (!faq || !faq.items || faq.items.length === 0) return null;

  return (
    <section id="faq" className="py-16 sm:py-24 bg-muted/60 text-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal
          variant="up"
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-14"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-primary/10 border border-primary/30 text-black font-heading font-bold text-xs uppercase tracking-widest mb-3">
            Help &amp; Advice
          </span>
          {faq.heading && (
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black uppercase tracking-tight text-secondary">
              {faq.heading}
            </h2>
          )}
        </ScrollReveal>

        <div className="space-y-3 sm:space-y-4">
          {faq.items.map((item, idx) => (
            <ScrollReveal key={item.id} variant="up" delay={idx * 70}>
              <FaqItem item={item} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
