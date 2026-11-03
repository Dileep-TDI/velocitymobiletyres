"use client";

import { useState } from "react";
import type { FinalCtaData } from "@/lib/types";
import ScrollReveal from "@/components/ScrollReveal";

interface FinalCtaProps {
  data: FinalCtaData;
}

export default function FinalCtaSection({ data }: FinalCtaProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    suburb: "",
    notes: "",
  });

  if (!data) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section
      id="contact"
      aria-labelledby="final-cta-title"
      className="relative py-20 lg:py-28 bg-gray-50 text-black overflow-hidden border-t border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT COLUMN: Headings, Descriptions, Direct Call CTA & Hours */}
          <ScrollReveal
            variant="up"
            className={`${data.hasForm ? "lg:col-span-6" : "lg:col-span-8 lg:col-start-3 text-center"} flex flex-col justify-center`}
          >
            {/* Eyebrow */}
            {data.eyebrow && (
              <div
                className={`inline-flex items-center gap-2 px-3.5 py-1 mb-5 rounded-full bg-primary/25 border border-primary/40 text-black font-heading font-bold text-xs uppercase tracking-widest w-fit ${
                  data.hasForm ? "" : "mx-auto"
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-black" />
                <span>{data.eyebrow}</span>
              </div>
            )}

            {/* Heading */}
            <h2
              id="final-cta-title"
              className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-secondary uppercase tracking-tight leading-tight mb-5"
            >
              {data.title ?? "Need Mobile Tyre Repair in West Ryde?"}
            </h2>

            {/* Description Paragraphs from Strapi */}
            <div className="space-y-4 mb-8">
              {data.paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  className="text-gray-700 text-base sm:text-lg leading-relaxed font-normal"
                >
                  {p}
                </p>
              ))}
            </div>

            {/* Call Button & Operating Hours Row */}
            <div
              className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 border-t border-gray-200 ${
                data.hasForm ? "" : "justify-center"
              }`}
            >
              {data.phoneCta && (
                <a
                  href={data.phoneCta.url}
                  className="btn-primary !py-4 !px-8 text-base font-heading font-black uppercase tracking-wider flex items-center justify-center gap-3 shadow-xl shadow-primary/25 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <svg
                    className="w-5 h-5 text-black"
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
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white border border-gray-200 shadow-sm text-gray-800">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500 shrink-0" />
                  <div className="text-xs">
                    <span className="text-gray-500 uppercase font-semibold block">
                      Operating Daily
                    </span>
                    <span className="font-heading font-black text-secondary text-sm">
                      {data.hours}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </ScrollReveal>

          {/* RIGHT COLUMN: Quick Online Assistance / Callback Form Card */}
          {data.hasForm && (
            <ScrollReveal variant="scale" delay={120} className="lg:col-span-6">
              <div className="p-6 sm:p-8 rounded-2xl bg-white border-2 border-gray-200 shadow-xl">
                <h3 className="font-heading font-black text-2xl text-secondary uppercase tracking-tight mb-2">
                  Request Rapid Tyre Assistance
                </h3>
                <p className="text-gray-500 text-xs mb-6">
                  Our mobile technician will call you within 5 minutes to confirm tyre size &amp; arrival.
                </p>

                {formSubmitted ? (
                  <div className="p-6 rounded-xl bg-primary/15 border border-primary/40 text-center space-y-3">
                    <div className="w-12 h-12 mx-auto rounded-full bg-primary text-black flex items-center justify-center font-bold text-xl">
                      ✓
                    </div>
                    <h4 className="font-heading font-black text-lg text-secondary uppercase">
                      Request Received!
                    </h4>
                    <p className="text-gray-700 text-sm">
                      A technician is reviewing your details and will call{" "}
                      <strong className="text-black">{formData.phone || "you"}</strong>{" "}
                      shortly.
                    </p>
                    <div className="pt-2">
                      <a
                        href="tel:0404730738"
                        className="text-xs font-heading font-bold text-black hover:underline uppercase tracking-wider"
                      >
                        Urgent emergency? Call 0404 730 738 now →
                      </a>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-left">
                    <div>
                      <label
                        htmlFor="client-name"
                        className="block text-gray-800 text-xs font-heading font-bold uppercase tracking-wider mb-1.5"
                      >
                        Your Name
                      </label>
                      <input
                        id="client-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. John Smith"
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-300 text-black placeholder-gray-400 text-sm focus:outline-none focus:bg-white focus:border-primary transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="client-phone"
                        className="block text-gray-800 text-xs font-heading font-bold uppercase tracking-wider mb-1.5"
                      >
                        Phone Number (Required for callout)
                      </label>
                      <input
                        id="client-phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="e.g. 0404 730 738"
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-300 text-black placeholder-gray-400 text-sm focus:outline-none focus:bg-white focus:border-primary transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="client-suburb"
                        className="block text-gray-800 text-xs font-heading font-bold uppercase tracking-wider mb-1.5"
                      >
                        Location / Suburb
                      </label>
                      <input
                        id="client-suburb"
                        type="text"
                        value={formData.suburb}
                        onChange={(e) =>
                          setFormData({ ...formData, suburb: e.target.value })
                        }
                        placeholder="e.g. West Ryde, Meadowbank, Eastwood"
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-300 text-black placeholder-gray-400 text-sm focus:outline-none focus:bg-white focus:border-primary transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="client-notes"
                        className="block text-gray-800 text-xs font-heading font-bold uppercase tracking-wider mb-1.5"
                      >
                        Tyre Issue / Car Model
                      </label>
                      <textarea
                        id="client-notes"
                        rows={2}
                        value={formData.notes}
                        onChange={(e) =>
                          setFormData({ ...formData, notes: e.target.value })
                        }
                        placeholder="e.g. Flat front tyre, nail in tread, need urgent replacement"
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-300 text-black placeholder-gray-400 text-sm focus:outline-none focus:bg-white focus:border-primary transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full btn-primary !py-3.5 text-sm font-heading font-black uppercase tracking-wider mt-2 shadow-lg shadow-primary/25"
                    >
                      Request Fast Callout →
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          )}
        </div>
      </div>
    </section>
  );
}
