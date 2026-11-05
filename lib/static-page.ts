import { site, chippingNorton } from "@/content/siteContent";
import type {
  HomepageHero,
  WhatWeDoData,
  WeComeToYouData,
  HowItWorksData,
  PartnersData,
  LocalAreaData,
  HomepageFaq,
  ReviewsData,
  FindOnGoogleData,
  FinalCtaData,
} from "@/lib/types";

export type StaticLandingPage = typeof chippingNorton;

/** Active landing page content — sourced only from content/siteContent.ts */
export const activePage: StaticLandingPage = chippingNorton;

export type LandingViewModel = {
  hero: HomepageHero;
  whatWeDo: WhatWeDoData;
  weComeToYou: WeComeToYouData;
  howItWorks: HowItWorksData;
  partners: PartnersData;
  reviews: ReviewsData;
  findOnGoogle: FindOnGoogleData;
  localArea: LocalAreaData;
  faq: HomepageFaq;
  finalCta: FinalCtaData;
  businessSchema: Record<string, unknown>;
  faqSchema: Record<string, unknown>;
};

export function buildLandingView(
  page: StaticLandingPage = activePage
): LandingViewModel {
  const hero: HomepageHero = {
    title: page.hero.title,
    eyebrow: page.hero.eyebrow,
    highlight: page.hero.highlight,
    descriptions: [...page.hero.descriptions],
    hours: { ...page.hero.hours },
    phoneCta: { ...page.hero.phoneCta },
    secondaryCtas: [...page.hero.secondaryCtas],
  };

  const whatWeDo: WhatWeDoData = {
    id: page.whatWeDo.id,
    eyebrow: page.whatWeDo.eyebrow,
    title: page.whatWeDo.title,
    description: page.whatWeDo.description,
    cards: page.whatWeDo.cards.map((c) => ({ ...c })),
  };

  const weComeToYou: WeComeToYouData = {
    id: page.weComeToYou.id,
    eyebrow: page.weComeToYou.eyebrow,
    title: page.weComeToYou.title,
    description: page.weComeToYou.description,
    paragraphs: [...(page.weComeToYou.paragraphs ?? [])],
    cards: page.weComeToYou.cards.map((c) => ({ ...c })),
  };

  const howItWorks: HowItWorksData = {
    id: page.howItWorks.id,
    eyebrow: page.howItWorks.eyebrow,
    title: page.howItWorks.title,
    steps: page.howItWorks.steps.map((s) => ({ ...s })),
  };

  const partners: PartnersData = {
    id: page.partners.id,
    heading: page.partners.heading,
  };

  const reviews: ReviewsData = {
    id: page.reviews.id,
    eyebrow: page.reviews.eyebrow,
    title: page.reviews.title,
    description: page.reviews.description,
    ctaLabel: page.reviews.ctaLabel,
    googleReviewsUrl: page.location.googleReviewsUrl,
    locationLabel: page.location.label,
  };

  const findOnGoogle: FindOnGoogleData = {
    id: page.findOnGoogle.id,
    eyebrow: page.findOnGoogle.eyebrow,
    title: page.findOnGoogle.title,
    description: page.findOnGoogle.description,
    googleSearchUrl: page.location.googleSearchUrl,
    businessLabel: `${site.brand} ${page.location.suburb}`,
  };

  const localArea: LocalAreaData = {
    id: page.localArea.id,
    heading: page.localArea.heading,
    paragraphs: [...page.localArea.paragraphs],
    phoneCta: { ...page.localArea.phoneCta },
    hours: page.localArea.hours,
    mapEmbedUrl: page.location.mapEmbedUrl,
    mapTitle: page.location.mapTitle,
  };

  const faq: HomepageFaq = {
    heading: page.faq.heading,
    items: page.faq.items.map((item) => ({ ...item })),
  };

  const finalCta: FinalCtaData = {
    id: page.finalCta.id,
    eyebrow: page.finalCta.eyebrow,
    title: page.finalCta.title,
    paragraphs: [...page.finalCta.paragraphs],
    phoneCta: { ...page.finalCta.phoneCta },
    hours: page.finalCta.hours,
    hasForm: page.finalCta.hasForm,
  };

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: site.brand,
    description: page.seo.metaDescription,
    url: page.seo.canonicalUrl,
    telephone: site.phone.replace(/\s/g, ""),
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: page.location.streetAddress,
      addressLocality: page.location.suburb,
      addressRegion: "NSW",
      postalCode: page.location.postalCode,
      addressCountry: "AU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: page.location.geo.latitude,
      longitude: page.location.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "07:00",
        closes: "21:00",
      },
    ],
    areaServed: [page.location.suburb, "Sydney"],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return {
    hero,
    whatWeDo,
    weComeToYou,
    howItWorks,
    partners,
    reviews,
    findOnGoogle,
    localArea,
    faq,
    finalCta,
    businessSchema,
    faqSchema,
  };
}
