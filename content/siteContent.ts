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

/** Kirrawee landing — /mobile-tyre-repair-kirrawee/ */
export const kirrawee = {
  slug: "mobile-tyre-repair-kirrawee",
  location: {
    suburb: "Kirrawee",
    region: "Sydney NSW",
    label: "Kirrawee, Sydney NSW",
    postalCode: "2232",
    streetAddress: "Kirrawee",
    addressLine: "Kirrawee NSW 2232, Australia",
    shortAddress: "Kirrawee NSW 2232",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Quickfit%20Mobile%20Tyres%20Kirrawee%2C%20Kirrawee%20NSW%202232%2C%20Australia&t=&z=15&ie=UTF8&iwloc=&output=embed",
    mapTitle: "Quickfit Mobile Tyres Kirrawee — Kirrawee NSW 2232",
    googleSearchUrl:
      "https://www.google.com/search?q=Quickfit%20Mobile%20Tyres%20Kirrawee",
    googleReviewsUrl:
      "https://www.google.com/search?q=Quickfit%20Mobile%20Tyres%20Kirrawee%20reviews",
    geo: { latitude: -34.0353, longitude: 151.0697 },
  },
  seo: {
    metaTitle:
      "Mobile Tyre Repair Kirrawee | Quickfit Mobile Tyres",
    metaDescription:
      "Need mobile tyre repair in Kirrawee? Quickfit Mobile Tyres comes to you for puncture repair, tyre replacement, wheel balancing and fleet tyre maintenance. Open 7 am – 9 pm. Call 0404 730 738.",
    canonicalUrl:
      "https://quickfitmobiletyres.com.au/mobile-tyre-repair-kirrawee/",
  },
  hero: {
    eyebrow: "Kirrawee, Sydney NSW",
    title: "Mobile Tyre Repair in Kirrawee - We Come to You",
    highlight: "Kirrawee",
    descriptions: [
      "Got a flat tyre, a puncture or a damaged tyre? Quickfit Mobile Tyres provides mobile tyre repair and replacement services across Kirrawee and nearby suburbs.",
      "We come directly to your location to get your tyre issue sorted, so you don't need to travel to a tyre shop.",
      "Need mobile tyre assistance in Kirrawee?",
      "Call us now for mobile tyre assistance at your location.",
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
      "Whether you're dealing with an unexpected puncture, need a tyre replaced or require routine tyre maintenance, Quickfit Mobile Tyres brings mobile tyre services directly to your location.",
    cards: [
      {
        title: "Puncture Repair",
        description:
          "A puncture does not always mean you need a new tyre. The damage and tyre condition must be assessed to determine whether a safe repair is possible. If replacement is necessary, we can discuss the available options.",
      },
      {
        title: "Tyre Replacement",
        description:
          "Need to replace a worn or damaged tyre? We come to your location to assess your tyre replacement needs and carry out the required service.",
      },
      {
        title: "Wheel Balancing",
        description:
          "Experiencing steering wheel vibrations while driving? We come to your location to assess the issue and help improve your wheel balance.",
      },
      {
        title: "Fleet Tyre Maintenance",
        description:
          "Need tyre maintenance for your business vehicles? We come to your location to assess your fleet's tyre needs and provide the required tyre services.",
      }
    ],
  },
  weComeToYou: {
    id: 2,
    eyebrow: "We come to you",
    title: "Mobile Tyre Assistance at Your Location",
    description:
      "A flat or damaged tyre can be inconvenient, particularly when you have somewhere to be. Quickfit Mobile Tyres comes to your location in Kirrawee and nearby suburbs to help resolve your tyre issues.",
    paragraphs: [
      "We bring mobile tyre services to your location in Kirrawee, whether you're:",
      "Need help with your tyres? Call Quickfit Mobile Tyres on 0404 730 738.",
    ],
    cards: [
      {
        title: "At Home",
        description:
          "Got a flat tyre at home? We come to your location, assess the problem and carry out the required tyre service.",
      },
      {
        title: "At Work",
        description:
          "Don't let a tyre problem get in the way of your workday. We come to your workplace to help resolve your tyre issue.",
      },
      {
        title: "Business or Fleet",
        description:
          "We provide mobile tyre services at business locations to help maintain your fleet's tyres and keep your vehicles moving.",
      },
      {
        title: "Roadside",
        description:
          "Stranded with a flat or damaged tyre? Contact us for mobile tyre assistance. We come to your location to assess the issue and help get you back on the road. Always prioritise your safety while waiting for assistance.",
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
        title: "Call Us",
        description:
          "Call 0404 730 738 and tell us about your flat tyre, puncture or replacement needs.",
        phoneUrl: "tel:0404730738",
        phoneLabel: "0404 730 738",
      },
      {
        stepNumber: 2,
        title: "Share Your Location",
        description:
          "Tell us where your vehicle is located in Kirrawee or a nearby suburb, along with your vehicle details.",
      },
      {
        stepNumber: 3,
        title: "We Come to You",
        description:
          "Our mobile tyre service comes to your location to assess the problem and determine the right solution.",
      },
      {
        stepNumber: 4,
        title: "Get Your Tyre Problem Resolved",
        description:
          "We carry out the required tyre service to help get you back on the road, aiming to resolve your tyre problem on the same day.",
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
      "Choosing a mobile tyre service is easier when you can hear from other customers. See what customers have shared about their experience with Quickfit Mobile Tyres.",
    ctaLabel: "Read Our Google Reviews",
  },
  findOnGoogle: {
    id: 6,
    eyebrow: "Find Us on Google",
    title: "Find Us on Google",
    description:
      "Looking for mobile tyre repair in Kirrawee or nearby suburbs? Find Quickfit Mobile Tyres on Google to view our business profile, customer reviews and location information.",
  },
  localArea: {
    id: 7,
    heading: "Mobile Tyre Repair Near You in Kirrawee",
    paragraphs: [
      "Looking for mobile tyre repair near me, tyre replacement or mobile tyre fitting in Kirrawee? Quickfit Mobile Tyres brings tyre assistance directly to your location.",
      "We service Kirrawee and nearby suburbs, helping drivers deal with punctures, damaged tyres and replacement needs without having to travel to a tyre shop.",
      "Whether you're at home, at work or managing business vehicles, we're here to help get your tyre problem sorted.",
      "Need mobile tyre repair in Kirrawee? Call 0404 730 738.",
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
        question: "Do you provide mobile tyre repair in Kirrawee?",
        answer:
          "Yes. Quickfit Mobile Tyres provides mobile tyre services in Kirrawee and nearby suburbs. We come to your location to assess and resolve your tyre problem.",
      },
      {
        id: 2,
        question: "What are your operating hours?",
        answer:
          "We operate from 7 am to 9 pm.",
      },
      {
        id: 3,
        question: "Can you repair a punctured tyre at my location?",
        answer:
          "We come to your location to assess the puncture and repair the tyre where it is safe to do so. If the damage cannot be repaired safely, replacement may be required.",
      },
      {
        id: 4,
        question: "Do you provide mobile tyre replacement?",
        answer:
          "Yes. We provide mobile tyre replacement services, coming to your location to assess your requirements and replace the tyre.",
      },
      {
        id: 5,
        question: "Do you offer same-day tyre service?",
        answer:
          "We aim to resolve your tyre problem on the same day. The work required will depend on the nature of the tyre damage and the service needed.",
      },
      {
        id: 6,
        question: "Do you service suburbs near Kirrawee?",
        answer:
          "Yes. We service Kirrawee and nearby suburbs, bringing mobile tyre assistance directly to your location.",
      },
      {
        id: 7,
        question: "What information should I provide when I call?",
        answer:
          "Tell us your location, vehicle make and model, and what happened to your tyre. If you know your tyre size, have that information ready too.",
      }
    ],
  },
  finalCta: {
    id: 8,
    eyebrow: "Get Mobile Assistance",
    title: "Need Mobile Tyre Repair in Kirrawee?",
    paragraphs: [
      "Don't let a tyre problem disrupt your day. Quickfit Mobile Tyres comes to your location in Kirrawee and nearby suburbs to assess your tyre issue and get it sorted.",
      "From puncture repairs and tyre replacements to wheel balancing and fleet tyre maintenance, we're here to help.",
      "Your tyre problem, our priority. We'll come to you and help get you back on the road.",
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
