/**
 * Central content for Quickfit Mobile Tyres landing pages.
 * Edit copy, CTAs, and section data here — page components read from this file.
 */

export const site = {
  brand: "Quickfit Mobile Tyres",
  phone: "0404 730 738",
  phoneTel: "tel:0404730738",
  hours: "7 am – 9 pm",
  nav: {
    ctaLabel: "Call Now",
  },
} as const;

/** Kingsgrove landing — /mobile-tyre-repair-kingsgrove/ */
export const kingsgrove = {
  slug: "mobile-tyre-repair-kingsgrove",
  location: {
    suburb: "Kingsgrove",
    region: "Sydney NSW",
    label: "Kingsgrove, Sydney NSW",
    postalCode: "2208",
    streetAddress: "Kingsgrove",
    addressLine: "Kingsgrove NSW 2208, Australia",
    shortAddress: "Kingsgrove NSW 2208",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Quickfit%20Mobile%20Tyres%20Kingsgrove%2C%20Kingsgrove%20NSW%202208%2C%20Australia&t=&z=15&ie=UTF8&iwloc=&output=embed",
    mapTitle: "Quickfit Mobile Tyres Kingsgrove — Kingsgrove NSW 2208",
    googleSearchUrl:
      "https://www.google.com/search?q=Quickfit%20Mobile%20Tyres%20Kingsgrove",
    googleReviewsUrl:
      "https://www.google.com/search?q=Quickfit%20Mobile%20Tyres%20Kingsgrove%20reviews",
    geo: { latitude: -33.93937, longitude: 151.09952 },
  },
  seo: {
    metaTitle:
      "Mobile Tyre Repair Kingsgrove | Quickfit Mobile Tyres",
    metaDescription:
      "Need mobile tyre repair in Kingsgrove? Quickfit Mobile Tyres comes to you for puncture repair, tyre replacement, wheel balancing and fleet tyre maintenance. Open 7 am – 9 pm. Call 0404 730 738.",
    canonicalUrl:
      "https://quickfitmobiletyres.com.au/mobile-tyre-repair-kingsgrove/",
  },
  hero: {
    eyebrow: "Kingsgrove, Sydney NSW",
    title: "Flat or Damaged Tyre in Kingsgrove? We Come to You.",
    highlight: "Kingsgrove",
    descriptions: [
      "A flat tyre or unexpected puncture can happen when you least expect it. If you're in Kingsgrove and need help, Quickfit Mobile Tyres brings mobile tyre services directly to your location.",
      "From puncture repairs to tyre replacements, we assess the problem and help you get back on the road without needing to take your vehicle to a tyre shop.",
      "Call Quickfit Mobile Tyres: 0404 730 738",
    ],
    hours: {
      label: "Operating Hours:",
      value: "7 am – 9 pm",
      text: "Operating Hours: 7 am – 9 pm",
    },
    phoneCta: {
      label: "Call Now",
      url: "tel:0404730738",
      type: "tel" as const,
    },
    secondaryCtas: [] as { label: string; url: string }[],
  },
  whatWeDo: {
    id: 1,
    eyebrow: "Services",
    title: "What We Do",
    description:
      "Quickfit Mobile Tyres provides mobile tyre assistance in Kingsgrove for everyday drivers and businesses.",
    cards: [
      {
        title: "Tyre Replacement",
        description:
          "If your tyre is worn, damaged or beyond repair, we can come to your location in Kingsgrove and carry out the required tyre replacement.",
      },
      {
        title: "Puncture Repair",
        description:
          "A puncture doesn't always mean you need a new tyre. We assess the damage and repair the tyre where it is safe and suitable. If it cannot be safely repaired, replacement may be needed.",
      },
      {
        title: "Wheel Balancing",
        description:
          "Notice unusual vibrations while driving? Our mobile wheel balancing service helps improve driving comfort and supports even tyre wear.",
      },
      {
        title: "Fleet Tyre Maintenance",
        description:
          "Managing multiple business vehicles? We provide mobile tyre maintenance support for fleets, including tyre replacement, puncture repair and wheel balancing.",
      }
    ],
  },
  weComeToYou: {
    id: 2,
    eyebrow: "We come to you",
    title: "Mobile Tyre Services at Your Location in Kingsgrove",
    description:
      "A tyre issue shouldn't mean rearranging your entire day. Quickfit Mobile Tyres makes it easier by bringing tyre services to you in Kingsgrove.",
    paragraphs: [
      "We can assist at locations such as:",
      "You can contact us, explain the problem and let us bring the required mobile tyre service to your location.",
      "Call 0404 730 738 for mobile tyre assistance in Kingsgrove.",
    ],
    cards: [
      {
        title: "At Home",
        description:
          "Your home or residential parking area.",
      },
      {
        title: "At Work",
        description:
          "Your workplace or business premises.",
      },
      {
        title: "Business or Fleet",
        description:
          "A business vehicle or fleet location.",
      },
      {
        title: "Roadside",
        description:
          "A safe roadside location where mobile tyre assistance can be carried out.",
      }
    ],
  },
  howItWorks: {
    id: 3,
    eyebrow: "How It Works",
    title: "Get Your Tyre Problem Sorted in Four Simple Steps",
    steps: [
      {
        stepNumber: 1,
        title: "Call Our Team",
        description:
          "Contact Quickfit Mobile Tyres on 0404 730 738 and tell us what has happened.",
        phoneUrl: "tel:0404730738",
        phoneLabel: "0404 730 738",
      },
      {
        stepNumber: 2,
        title: "Tell Us Where You Are",
        description:
          "Share your location in Kingsgrove and the type of tyre assistance you need.",
      },
      {
        stepNumber: 3,
        title: "We Come to Your Location",
        description:
          "Our mobile service comes to your vehicle and assesses the tyre problem.",
      },
      {
        stepNumber: 4,
        title: "We Carry Out the Required Service",
        description:
          "Depending on the condition of the tyre, we carry out a suitable repair, replacement or wheel balancing service.",
      }
    ],
  },
  partners: {
    id: 4,
    heading: "Partnering with Major Tyre Brands",
  },
  reviews: {
    id: 5,
    eyebrow: "What Our Customers Say",
    title: "What Our Customers Say",
    description:
      "Our customers' experiences matter to us. See what people say about Quickfit Mobile Tyres and our mobile tyre services.",
    ctaLabel: "Read Our Google Reviews",
  },
  findOnGoogle: {
    id: 6,
    eyebrow: "Find Us on Google",
    title: "Find Us on Google",
    description:
      "Looking for mobile tyre repair in Kingsgrove or nearby suburbs? Find Quickfit Mobile Tyres on Google to view our business profile, customer reviews and location information.",
  },
  localArea: {
    id: 7,
    heading: "Looking for Tyre Repair in Kingsgrove NSW?",
    paragraphs: [
      "If you're searching for tyre repair near me, mobile tyre repair Kingsgrove or mobile tyre replacement, Quickfit Mobile Tyres is here to help.",
      "We provide mobile tyre services in Kingsgrove, helping drivers deal with punctures, damaged tyres and other tyre-related problems at their location.",
      "Our services include puncture repair, tyre replacement, wheel balancing and fleet tyre maintenance. Rather than making a separate trip to a tyre shop, you can call us and arrange mobile assistance.",
      "We operate from 7 am to 9 pm to help make tyre services more convenient.",
    ],
    phoneCta: {
      label: "Call 0404 730 738",
      url: "tel:0404730738",
      type: "tel" as const,
    },
    hours: "7 am – 9 pm",
  },
  faq: {
    heading: "Frequently Asked Questions",
    items: [
      {
        id: 1,
        question: "Do you offer mobile tyre repair in Kingsgrove?",
        answer:
          "Yes. We provide mobile tyre services in Kingsgrove, including puncture repairs, tyre replacement, wheel balancing and fleet tyre maintenance.",
      },
      {
        id: 2,
        question: "Can you replace a tyre at my location?",
        answer:
          "Yes. We provide mobile tyre replacement services and can come to your location in Kingsgrove to assess your requirements and carry out the work.",
      },
      {
        id: 3,
        question: "Is it possible to repair a punctured tyre?",
        answer:
          "Some punctures can be repaired, but not all. The damage must be assessed to determine whether a repair is safe. If it is not suitable for repair, a replacement may be required.",
      },
      {
        id: 4,
        question: "Do you provide same-day tyre assistance?",
        answer:
          "We aim to resolve tyre problems on the same day. The work required depends on the tyre's condition and the service needed.",
      },
      {
        id: 5,
        question: "What time do you operate?",
        answer:
          "Our operating hours are 7 am–9 pm.",
      },
      {
        id: 6,
        question: "How can I contact Quickfit Mobile Tyres?",
        answer:
          "Call us on 0404 730 738 and share your location and tyre problem.",
      }
    ],
  },
  finalCta: {
    id: 8,
    eyebrow: "Get Mobile Assistance",
    title: "Need Mobile Tyre Repair in Kingsgrove?",
    paragraphs: [
      "Don't let a tyre problem slow you down. Quickfit Mobile Tyres brings mobile tyre services directly to your location in Kingsgrove.",
    ],
    phoneCta: {
      label: "Call Now",
      url: "tel:0404730738",
      type: "tel" as const,
    },
    hours: "7 am – 9 pm",
    hasForm: false,
  },
} as const;
