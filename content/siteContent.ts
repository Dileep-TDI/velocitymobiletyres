/**
 * Central content for Quickfit Mobile Tyres landing pages.
 * Edit copy, CTAs, and section data here — page components read from this file.
 */

export const site = {
  brand: "Quickfit Mobile Tyres",
  phone: "0404 730 738",
  phoneTel: "tel:0404730738",
  hours: "7 am–9 pm",
  nav: {
    ctaLabel: "Call Now",
  },
} as const;

/** Campbelltown landing — home page `/` */
export const campbelltown = {
  slug: "",
  location: {
    suburb: "Campbelltown",
    region: "Sydney NSW",
    label: "Campbelltown, Sydney NSW",
    postalCode: "2560",
    addressLine: "Farrow Rd, Campbelltown NSW 2560",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Campbelltown%2C%20NSW%2C%20Australia&t=&z=13&ie=UTF8&iwloc=&output=embed",
    mapTitle: "Quickfit Mobile Tyres Service Area - Campbelltown",
    googleSearchUrl:
      "https://www.google.com/search?q=Quickfit+Mobile+Tyres+Campbelltown",
    googleReviewsUrl:
      "https://www.google.com/search?q=Quickfit+Mobile+Tyres+Campbelltown+reviews",
    geo: { latitude: -34.063696, longitude: 150.811713 },
  },
  seo: {
    metaTitle:
      "Mobile Tyre Repair Campbelltown | Quickfit Mobile Tyres",
    metaDescription:
      "Need mobile tyre repair in Campbelltown? Quickfit Mobile Tyres comes to you for puncture repair, tyre replacement, wheel balancing and fleet tyre maintenance. Open 7 am–9 pm. Call 0404 730 738.",
    canonicalUrl: "https://quickfitmobiletyres.com.au/",
  },
  hero: {
    eyebrow: "Campbelltown, Sydney NSW",
    title: "Need Mobile Tyre Repair in Campbelltown?",
    highlight: "Campbelltown",
    descriptions: [
      "Got a flat tyre, puncture or damaged tyre in Campbelltown? Quickfit Mobile Tyres brings professional mobile tyre services directly to your location.",
      "Whether you're at home, at work or dealing with a tyre problem on the road, we come to you, assess the issue and help get you back on the road.",
      "Call Quickfit Mobile Tyres: 0404 730 738",
    ],
    hours: {
      label: "Operating Hours:",
      value: "7 am–9 pm",
      text: "Operating Hours: 7 am–9 pm",
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
      "From unexpected punctures to tyre replacements, Quickfit Mobile Tyres provides practical mobile tyre services across Campbelltown.",
    cards: [
      {
        title: "Puncture Repair",
        description:
          "A puncture does not always mean you need a new tyre. The damage and tyre condition must be assessed to determine whether a safe repair is possible. If replacement is necessary, we can discuss the available options.",
      },
      {
        title: "Tyre Replacement",
        description:
          "Experiencing steering wheel vibrations? We come to your location to assess the issue and help improve your wheel balance.",
      },
      {
        title: "Wheel Balancing",
        description:
          "Need tyre maintenance for your business vehicles? We come to your location to assess your fleet’s tyre needs and provide the required service.",
      },
      {
        title: "Fleet Tyre Maintenance",
        description:
          "Keep your business vehicles moving with mobile tyre maintenance support. We help businesses manage tyre replacement, puncture repairs and wheel balancing for their fleets.",
      },
    ],
  },
  weComeToYou: {
    id: 2,
    eyebrow: "We come to you",
    title: "We Come to You in Campbelltown",
    description:
      "A tyre problem can interrupt your day, especially when you have somewhere to be. With Quickfit Mobile Tyres, you don't need to organise a trip to a tyre shop. We bring mobile tyre services to your location in Campbelltown, whether you're at home, at work, managing a fleet, or need safe roadside assistance. Our mobile service is designed to make tyre repairs and replacements more convenient. Need help with a tyre problem in Campbelltown? Call 0404 730 738.",
    cards: [
      {
        title: "At Home",
        description: "At home with a flat or damaged tyre.",
      },
      {
        title: "At Work",
        description: "At your workplace and unable to leave your vehicle.",
      },
      {
        title: "Business or Fleet",
        description: "Managing vehicles at a business or fleet location.",
      },
      {
        title: "Roadside",
        description:
          "In a safe location on the roadside and need tyre assistance.",
      },
    ],
  },
  howItWorks: {
    id: 3,
    eyebrow: "How It Works",
    title: "Get Your Tyre Problem Sorted in Four Simple Steps",
    steps: [
      {
        stepNumber: 1,
        title: "Give Us a Call",
        description:
          "Call Quickfit Mobile Tyres on 0404 730 738 and explain the tyre problem.",
        phoneUrl: "tel:0404730738",
        phoneLabel: "0404 730 738",
      },
      {
        stepNumber: 2,
        title: "Share Your Location",
        description:
          "Let us know where your vehicle is located in Campbelltown and what assistance you need.",
      },
      {
        stepNumber: 3,
        title: "We Come to You",
        description:
          "Our mobile tyre service comes to your location to assess the issue.",
      },
      {
        stepNumber: 4,
        title: "Get Your Tyre Problem Resolved",
        description:
          "We carry out the required tyre service, whether it's a suitable puncture repair, tyre replacement or wheel balancing.",
      },
    ],
  },
  partners: {
    id: 4,
    heading: "Our Partners",
  },
  reviews: {
    id: 5,
    eyebrow: "What Our Customers Say",
    title: "What Our Customers Say",
    description:
      "We value the trust our customers place in Quickfit Mobile Tyres. Read genuine customer feedback about our mobile tyre services and the experience of having tyre assistance brought directly to their location.",
    ctaLabel: "Read Our Google Reviews",
  },
  findOnGoogle: {
    id: 6,
    eyebrow: "Find Us on Google",
    title: "Find Us on Google",
    description:
      "Check out our Google Business Profile for Quickfit Mobile Tyres in Campbelltown.",
  },
  localArea: {
    id: 7,
    heading: "Mobile Tyre Services Across Campbelltown NSW",
    paragraphs: [
      "Looking for mobile tyre repair in Campbelltown? Quickfit Mobile Tyres provides mobile assistance for drivers who need help with damaged, punctured or worn tyres.",
      "Instead of taking time out of your day to visit a tyre shop, you can contact us and have the tyre service brought to your location.",
      "From tyre replacement and puncture repair to wheel balancing and fleet tyre maintenance, we're here to make dealing with tyre problems simpler.",
      "Whether you searched for mobile tyre repair near me, tyre repair Campbelltown or mobile tyre replacement, contact Quickfit Mobile Tyres for assistance.",
    ],
    phoneCta: {
      label: "Call 0404 730 738",
      url: "tel:0404730738",
      type: "tel" as const,
    },
    hours: "7 am–9 pm",
  },
  faq: {
    heading: "Frequently Asked Questions",
    items: [
      {
        id: 1,
        question: "Do you provide mobile tyre repair in Campbelltown?",
        answer:
          "Yes. Quickfit Mobile Tyres provides mobile tyre services in Campbelltown NSW, including puncture repair, tyre replacement, wheel balancing and fleet tyre maintenance.",
      },
      {
        id: 2,
        question: "Can you come to my home or workplace?",
        answer:
          "Yes. Our mobile service is designed to assist you at your location, including your home or workplace.",
      },
      {
        id: 3,
        question: "Can every punctured tyre be repaired?",
        answer:
          "No. It depends on the location and extent of the damage. We assess the tyre first and only recommend a repair when it is safe and suitable. A replacement may be necessary in some cases.",
      },
      {
        id: 4,
        question: "Do you offer same-day mobile tyre assistance?",
        answer:
          "We aim to help resolve your tyre problem on the same day. The work required depends on the condition of the tyre and the service needed.",
      },
      {
        id: 5,
        question: "What are your operating hours?",
        answer: "Quickfit Mobile Tyres operates from 7 am to 9 pm.",
      },
      {
        id: 6,
        question: "How do I arrange mobile tyre service in Campbelltown?",
        answer:
          "Simply call 0404 730 738, explain your tyre problem and share your location.",
      },
    ],
  },
  finalCta: {
    id: 8,
    eyebrow: "Get Mobile Assistance",
    title: "Need Mobile Tyre Assistance in Campbelltown?",
    paragraphs: [
      "Don't let a flat, punctured or damaged tyre disrupt your day. Call Quickfit Mobile Tyres and get mobile tyre assistance at your location.",
    ],
    phoneCta: {
      label: "Call Now",
      url: "tel:0404730738",
      type: "tel" as const,
    },
    hours: "7 am–9 pm",
    hasForm: false,
  },
} as const;
