import Image from "next/image";
import type { RichSectionData, CtaLink } from "@/lib/types";

/* ============================================================
   SHARED HELPERS
   ============================================================ */

function PhoneCta({ link, className }: { link: CtaLink; className?: string }) {
  return (
    <a href={link.url} className={className}>
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
      </svg>
      {link.label}
    </a>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight mb-6 text-black">
      {children}
    </h2>
  );
}

/* ============================================================
   1. SERVICES GRID
   Sections with heading + subheadings (h3) + paragraphs
   ============================================================ */

export function ServicesGrid({ section }: { section: RichSectionData }) {
  // Pair each heading with the paragraph that follows it
  const items: { title: string; description: string }[] = [];

  for (let i = 0; i < section.headings.length; i++) {
    const h = section.headings[i];
    const nextDesc = section.paragraphs[i + 1] ?? "";
    items.push({ title: h.text, description: nextDesc });
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {section.heading && <SectionHeading>{section.heading}</SectionHeading>}
        {section.paragraphs[0] && (
          <p className="text-gray-600 text-lg max-w-3xl mb-12">
            {section.paragraphs[0]}
          </p>
        )}

        {items.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {items.map((item, i) => (
              <div
                key={i}
                className="bg-white border border-border rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all"
              >
                <h3 className="font-heading font-black text-xl uppercase mb-3 text-black">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* ============================================================
   2. LOCATIONS GRID (At Home, At Work, etc.)
   ============================================================ */

export function LocationsGrid({ section }: { section: RichSectionData }) {
  const items: { title: string; description: string }[] = [];

  for (let i = 0; i < section.headings.length; i++) {
    const h = section.headings[i];
    const nextDesc = section.paragraphs[i + 1] ?? "";
    items.push({ title: h.text, description: nextDesc });
  }

  return (
    <section className="py-16 md:py-24 bg-secondary text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {section.heading && (
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight mb-6 text-white">
            {section.heading}
          </h2>
        )}
        {section.paragraphs[0] && (
          <p className="text-gray-300 text-lg max-w-3xl mb-12">
            {section.paragraphs[0]}
          </p>
        )}

        {items.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {items.map((item, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-lg p-6"
              >
                <h3 className="font-heading font-black text-xl uppercase mb-3 text-primary">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* ============================================================
   3. STEPS SECTION (numbered)
   ============================================================ */

export function StepsSection({ section }: { section: RichSectionData }) {
  const orderedList = section.lists.find((l) => l.format === "ordered");

  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4 max-w-5xl">
        {section.heading && <SectionHeading>{section.heading}</SectionHeading>}

        {section.paragraphs[0] && (
          <p className="text-gray-600 text-lg mb-12">{section.paragraphs[0]}</p>
        )}

        {orderedList && (
          <ol className="space-y-6">
            {orderedList.items.map((item, i) => {
              // Split "Title: Description" pattern
              const [title, ...rest] = item.split(":");
              const desc = rest.join(":").trim();

              return (
                <li key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-black font-heading font-black text-xl flex items-center justify-center">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    {desc ? (
                      <>
                        <h3 className="font-heading font-bold text-lg text-black mb-1">
                          {title.trim()}
                        </h3>
                        <p className="text-gray-600">{desc}</p>
                      </>
                    ) : (
                      <p className="text-black">{item}</p>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        )}
      </div>
    </section>
  );
}

/* ============================================================
   4. AREAS NEAR YOU
   ============================================================ */

export function AreasNearYouSection({ section }: { section: RichSectionData }) {
  const phoneCta = section.links.find((l) => l.type === "tel");

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        {section.heading && <SectionHeading>{section.heading}</SectionHeading>}

        <div className="space-y-4 mb-8">
          {section.paragraphs.map((p, i) => (
            <p key={i} className="text-gray-600 text-lg leading-relaxed">
              {p}
            </p>
          ))}
        </div>

        {phoneCta && (
          <PhoneCta
            link={phoneCta}
            className="inline-flex items-center gap-3 bg-primary hover:bg-primary-hover text-black font-heading font-black uppercase tracking-wider px-8 py-4 rounded-lg shadow-lg transition-colors"
          />
        )}
      </div>
    </section>
  );
}

/* ============================================================
   5. CUSTOMER SAY
   ============================================================ */

export function CustomerSaySection({ section }: { section: RichSectionData }) {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        {section.heading && <SectionHeading>{section.heading}</SectionHeading>}
        {section.paragraphs.map((p, i) => (
          <p key={i} className="text-gray-600 text-lg leading-relaxed mb-4">
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   6. FIND US ON GOOGLE
   ============================================================ */

export function FindUsOnGoogleSection({
  section,
}: {
  section: RichSectionData;
}) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        {section.heading && <SectionHeading>{section.heading}</SectionHeading>}
        {section.paragraphs.map((p, i) => (
          <p key={i} className="text-gray-600 text-lg leading-relaxed mb-4">
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   7. FINAL CTA
   ============================================================ */

export function FinalCtaSection({ section }: { section: RichSectionData }) {
  const phoneCta = section.links.find((l) => l.type === "tel");

  return (
    <section className="py-16 md:py-24 bg-secondary text-white">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        {section.heading && (
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight mb-6 text-white">
            {section.heading}
          </h2>
        )}

        <div className="space-y-4 mb-8">
          {section.paragraphs.map((p, i) => (
            <p key={i} className="text-gray-300 text-lg leading-relaxed">
              {p}
            </p>
          ))}
        </div>

        {phoneCta && (
          <PhoneCta
            link={phoneCta}
            className="inline-flex items-center gap-3 bg-primary hover:bg-primary-hover text-black font-heading font-black uppercase tracking-wider px-8 py-4 rounded-lg shadow-lg transition-colors"
          />
        )}
      </div>
    </section>
  );
}

/* ============================================================
   8. GENERIC RICH CONTENT (fallback)
   ============================================================ */

export function GenericRichContent({ section }: { section: RichSectionData }) {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-4xl rich-content">
        {section.heading && <SectionHeading>{section.heading}</SectionHeading>}

        {section.paragraphs.map((p, i) => (
          <p key={i} className="text-gray-700 mb-4 leading-relaxed">
            {p}
          </p>
        ))}

        {section.headings.map((h, i) => {
          const Tag = `h${h.level}` as keyof React.JSX.IntrinsicElements;
          return (
            <Tag key={i} className="font-heading font-bold mt-6 mb-3">
              {h.text}
            </Tag>
          );
        })}

        {section.lists.map((list, i) => {
          const Tag = list.format === "ordered" ? "ol" : "ul";
          const cls =
            list.format === "ordered"
              ? "list-decimal ml-6 space-y-2 my-4"
              : "list-disc ml-6 space-y-2 my-4";
          return (
            <Tag key={i} className={cls}>
              {list.items.map((item, j) => (
                <li key={j} className="text-gray-700">
                  {item}
                </li>
              ))}
            </Tag>
          );
        })}

        {section.links
          .filter((l) => l.type === "tel")
          .map((link, i) => (
            <PhoneCta
              key={i}
              link={link}
              className="inline-flex items-center gap-3 bg-primary hover:bg-primary-hover text-black font-heading font-black uppercase tracking-wider px-6 py-3 rounded-lg mt-4"
            />
          ))}
      </div>
    </section>
  );
}
