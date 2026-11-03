import type {
  RichSectionData,
  FaqSection as FaqSectionType,
  HomepageFaq,
} from "@/lib/types";
import {
  ServicesGrid,
  LocationsGrid,
  StepsSection,
  AreasNearYouSection,
  CustomerSaySection,
  FindUsOnGoogleSection,
  FinalCtaSection,
  GenericRichContent,
} from "./SectionRenderers";
import FaqSection from "./FaqSection";

interface SmartSectionProps {
  section: RichSectionData | FaqSectionType;
}

export default function SmartSection({ section }: SmartSectionProps) {
  // 1. FAQ Section
  if ("Faq" in section) {
    const faq: HomepageFaq = {
      heading: section.heading,
      items: section.Faq ?? [],
    };
    return <FaqSection faq={faq} />;
  }

  // 2. Rich Content Section — semantic match by heading + content shape
  const heading = (section.heading ?? "").toLowerCase();

  // Four Simple Steps — has an ordered list
  const hasOrderedList = section.lists.some((l) => l.format === "ordered");
  if (hasOrderedList) {
    return <StepsSection section={section} />;
  }

  // Services
  if (heading.includes("service") && !heading.includes("location")) {
    return <ServicesGrid section={section} />;
  }

  // Locations / Assistance at your location
  if (
    heading.includes("assistance at your location") ||
    (heading.includes("location") && !heading.includes("near you"))
  ) {
    return <LocationsGrid section={section} />;
  }

  // Near You / suburbs
  if (
    heading.includes("near you") ||
    heading.includes("near me") ||
    heading.includes("suburbs")
  ) {
    return <AreasNearYouSection section={section} />;
  }

  // Customer reviews
  if (
    heading.includes("what our customers say") ||
    heading.includes("customer")
  ) {
    return <CustomerSaySection section={section} />;
  }

  // Google
  if (heading.includes("google") || heading.includes("find us")) {
    return <FindUsOnGoogleSection section={section} />;
  }

  // Final CTA
  if (
    heading.includes("need mobile tyre repair") ||
    heading.includes("sorted")
  ) {
    return <FinalCtaSection section={section} />;
  }

  // Fallback
  return <GenericRichContent section={section} />;
}
