/**
 * Apply location landing content for a branch.
 * Usage: node scripts/apply-location.mjs <chipping-norton|kingsgrove|kirrawee|west-ryde>
 */
import { writeFileSync, mkdirSync, rmSync, existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const key = process.argv[2];

const locations = {
  "chipping-norton": {
    exportName: "chippingNorton",
    pageFn: "ChippingNortonPage",
    slug: "mobile-tyre-repair-chipping-norton",
    suburb: "Chipping Norton",
    region: "Sydney NSW",
    label: "Chipping Norton, Sydney NSW",
    postalCode: "2170",
    streetAddress: "Chipping Norton",
    addressLine: "Chipping Norton NSW 2170, Australia",
    shortAddress: "Chipping Norton NSW 2170",
    geo: { latitude: -33.91992, longitude: 150.95859 },
    hero: {
      title: "Mobile Tyre Repair in Chipping Norton - We Come to You",
      highlight: "Chipping Norton",
      descriptions: [
        "Got a flat tyre, a puncture or a damaged tyre? Quickfit Mobile Tyres provides mobile tyre repair and replacement services across Chipping Norton and nearby suburbs.",
        "We come directly to your location to get your tyre issue sorted, so you don't need to travel to a tyre shop.",
        "Need mobile tyre assistance in Chipping Norton?",
        "Call us now for mobile tyre assistance at your location.",
      ],
    },
    whatWeDo: {
      description:
        "From unexpected punctures to worn tyres and routine vehicle maintenance, Quickfit Mobile Tyres provides mobile tyre services to help keep your vehicle on the road.",
      cards: [
        {
          title: "Puncture Repair",
          description:
            "A puncture does not always mean you need a new tyre. The damage and tyre condition must be assessed to determine whether a safe repair is possible. If replacement is necessary, we can discuss the available options.",
        },
        {
          title: "Tyre Replacement",
          description:
            "Have a worn, damaged or unrepairable tyre? We come to your location to assess your requirements and carry out the necessary tyre replacement.",
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
        },
      ],
    },
    weComeToYou: {
      title: "Mobile Tyre Assistance at Your Location",
      description:
        "A tyre problem can happen at any time and make it difficult to continue your day. Quickfit Mobile Tyres comes to your location in Chipping Norton and nearby suburbs to help resolve your tyre issues.",
      paragraphs: [
        "We bring mobile tyre services to your location in Chipping Norton, whether you're:",
        "Need help with your tyres? Call Quickfit Mobile Tyres on 0404 730 738.",
      ],
      cards: [
        {
          title: "At Home",
          description:
            "Got a flat tyre while your vehicle is parked at home? We come to your location, assess the problem and carry out the required tyre service.",
        },
        {
          title: "At Work",
          description:
            "Don't let a damaged tyre interrupt your work commitments. We come to your workplace to help resolve your tyre issue.",
        },
        {
          title: "Business or Fleet",
          description:
            "Managing multiple business vehicles? We provide mobile tyre services at business locations to help keep your fleet moving and your operations running.",
        },
        {
          title: "Roadside",
          description:
            "Stranded with a flat or damaged tyre? Contact us for mobile tyre assistance. We come to your location to assess the issue and help get you back on the road. Always prioritise your safety while waiting for assistance.",
        },
      ],
    },
    howItWorks: {
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
            "Tell us where your vehicle is located in Chipping Norton or a nearby suburb, along with your vehicle details.",
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
        },
      ],
    },
    reviewsDescription:
      "Choosing a mobile tyre service is easier when you can hear about other customers' experiences. Read genuine feedback from customers who have used Quickfit Mobile Tyres.",
    findOnGoogleDescription:
      "Looking for mobile tyre repair in Chipping Norton or nearby suburbs? Find Quickfit Mobile Tyres on Google to view our business profile, customer reviews and location information.",
    localArea: {
      heading: "Mobile Tyre Repair Near You in Chipping Norton",
      paragraphs: [
        "Looking for mobile tyre repair near me, tyre replacement or mobile tyre fitting in Chipping Norton? Quickfit Mobile Tyres brings tyre assistance directly to your location.",
        "We service Chipping Norton and nearby suburbs, helping drivers deal with punctures, damaged tyres and replacement needs without having to travel to a tyre shop.",
        "Whether you're at home, at work or managing business vehicles, we bring mobile tyre services to your location to help get your tyre problem sorted.",
        "Need mobile tyre repair in Chipping Norton? Call 0404 730 738.",
      ],
    },
    faq: [
      {
        id: 1,
        question: "Do you provide mobile tyre repair in Chipping Norton?",
        answer:
          "Yes. Quickfit Mobile Tyres provides mobile tyre services in Chipping Norton and nearby suburbs. We come to your location to assess and resolve your tyre problem.",
      },
      {
        id: 2,
        question: "What are your operating hours?",
        answer: "We operate from 7 am to 9 pm.",
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
        question: "Do you service suburbs near Chipping Norton?",
        answer:
          "Yes. We service Chipping Norton and nearby suburbs, bringing mobile tyre assistance directly to your location.",
      },
      {
        id: 7,
        question: "What information should I provide when I call?",
        answer:
          "Tell us your location, vehicle make and model, and what happened to your tyre. If you know your tyre size, have that information ready too.",
      },
    ],
    finalCta: {
      title: "Need Mobile Tyre Repair in Chipping Norton?",
      paragraphs: [
        "Don't let a tyre problem disrupt your day. Quickfit Mobile Tyres comes to your location in Chipping Norton and nearby suburbs to assess your tyre issue and get it sorted.",
        "From puncture repairs and tyre replacements to wheel balancing and fleet tyre maintenance, we're here to help.",
        "Your tyre problem, our priority. We'll come to you and help get you back on the road.",
      ],
    },
  },

  kingsgrove: {
    exportName: "kingsgrove",
    pageFn: "KingsgrovePage",
    slug: "mobile-tyre-repair-kingsgrove",
    suburb: "Kingsgrove",
    region: "Sydney NSW",
    label: "Kingsgrove, Sydney NSW",
    postalCode: "2208",
    streetAddress: "Kingsgrove",
    addressLine: "Kingsgrove NSW 2208, Australia",
    shortAddress: "Kingsgrove NSW 2208",
    geo: { latitude: -33.93937, longitude: 151.09952 },
    hero: {
      title: "Flat or Damaged Tyre in Kingsgrove? We Come to You.",
      highlight: "Kingsgrove",
      descriptions: [
        "A flat tyre or unexpected puncture can happen when you least expect it. If you're in Kingsgrove and need help, Quickfit Mobile Tyres brings mobile tyre services directly to your location.",
        "From puncture repairs to tyre replacements, we assess the problem and help you get back on the road without needing to take your vehicle to a tyre shop.",
        "Call Quickfit Mobile Tyres: 0404 730 738",
      ],
    },
    whatWeDo: {
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
        },
      ],
    },
    weComeToYou: {
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
          description: "Your home or residential parking area.",
        },
        {
          title: "At Work",
          description: "Your workplace or business premises.",
        },
        {
          title: "Business or Fleet",
          description: "A business vehicle or fleet location.",
        },
        {
          title: "Roadside",
          description:
            "A safe roadside location where mobile tyre assistance can be carried out.",
        },
      ],
    },
    howItWorks: {
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
        },
      ],
    },
    reviewsDescription:
      "Our customers' experiences matter to us. See what people say about Quickfit Mobile Tyres and our mobile tyre services.",
    findOnGoogleDescription:
      "Looking for mobile tyre repair in Kingsgrove or nearby suburbs? Find Quickfit Mobile Tyres on Google to view our business profile, customer reviews and location information.",
    localArea: {
      heading: "Looking for Tyre Repair in Kingsgrove NSW?",
      paragraphs: [
        "If you're searching for tyre repair near me, mobile tyre repair Kingsgrove or mobile tyre replacement, Quickfit Mobile Tyres is here to help.",
        "We provide mobile tyre services in Kingsgrove, helping drivers deal with punctures, damaged tyres and other tyre-related problems at their location.",
        "Our services include puncture repair, tyre replacement, wheel balancing and fleet tyre maintenance. Rather than making a separate trip to a tyre shop, you can call us and arrange mobile assistance.",
        "We operate from 7 am to 9 pm to help make tyre services more convenient.",
      ],
    },
    faq: [
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
        answer: "Our operating hours are 7 am–9 pm.",
      },
      {
        id: 6,
        question: "How can I contact Quickfit Mobile Tyres?",
        answer:
          "Call us on 0404 730 738 and share your location and tyre problem.",
      },
    ],
    finalCta: {
      title: "Need Mobile Tyre Repair in Kingsgrove?",
      paragraphs: [
        "Don't let a tyre problem slow you down. Quickfit Mobile Tyres brings mobile tyre services directly to your location in Kingsgrove.",
      ],
    },
  },

  kirrawee: {
    exportName: "kirrawee",
    pageFn: "KirraweePage",
    slug: "mobile-tyre-repair-kirrawee",
    suburb: "Kirrawee",
    region: "Sydney NSW",
    label: "Kirrawee, Sydney NSW",
    postalCode: "2232",
    streetAddress: "Kirrawee",
    addressLine: "Kirrawee NSW 2232, Australia",
    shortAddress: "Kirrawee NSW 2232",
    geo: { latitude: -34.0353, longitude: 151.0697 },
    hero: {
      title: "Mobile Tyre Repair in Kirrawee - We Come to You",
      highlight: "Kirrawee",
      descriptions: [
        "Got a flat tyre, a puncture or a damaged tyre? Quickfit Mobile Tyres provides mobile tyre repair and replacement services across Kirrawee and nearby suburbs.",
        "We come directly to your location to get your tyre issue sorted, so you don't need to travel to a tyre shop.",
        "Need mobile tyre assistance in Kirrawee?",
        "Call us now for mobile tyre assistance at your location.",
      ],
    },
    whatWeDo: {
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
        },
      ],
    },
    weComeToYou: {
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
        },
      ],
    },
    howItWorks: {
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
        },
      ],
    },
    reviewsDescription:
      "Choosing a mobile tyre service is easier when you can hear from other customers. See what customers have shared about their experience with Quickfit Mobile Tyres.",
    findOnGoogleDescription:
      "Looking for mobile tyre repair in Kirrawee or nearby suburbs? Find Quickfit Mobile Tyres on Google to view our business profile, customer reviews and location information.",
    localArea: {
      heading: "Mobile Tyre Repair Near You in Kirrawee",
      paragraphs: [
        "Looking for mobile tyre repair near me, tyre replacement or mobile tyre fitting in Kirrawee? Quickfit Mobile Tyres brings tyre assistance directly to your location.",
        "We service Kirrawee and nearby suburbs, helping drivers deal with punctures, damaged tyres and replacement needs without having to travel to a tyre shop.",
        "Whether you're at home, at work or managing business vehicles, we're here to help get your tyre problem sorted.",
        "Need mobile tyre repair in Kirrawee? Call 0404 730 738.",
      ],
    },
    faq: [
      {
        id: 1,
        question: "Do you provide mobile tyre repair in Kirrawee?",
        answer:
          "Yes. Quickfit Mobile Tyres provides mobile tyre services in Kirrawee and nearby suburbs. We come to your location to assess and resolve your tyre problem.",
      },
      {
        id: 2,
        question: "What are your operating hours?",
        answer: "We operate from 7 am to 9 pm.",
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
      },
    ],
    finalCta: {
      title: "Need Mobile Tyre Repair in Kirrawee?",
      paragraphs: [
        "Don't let a tyre problem disrupt your day. Quickfit Mobile Tyres comes to your location in Kirrawee and nearby suburbs to assess your tyre issue and get it sorted.",
        "From puncture repairs and tyre replacements to wheel balancing and fleet tyre maintenance, we're here to help.",
        "Your tyre problem, our priority. We'll come to you and help get you back on the road.",
      ],
    },
  },

  "west-ryde": {
    exportName: "westRyde",
    pageFn: "WestRydePage",
    slug: "mobile-tyre-repair-west-ryde",
    suburb: "West Ryde",
    region: "Sydney NSW",
    label: "West Ryde, Sydney NSW",
    postalCode: "2114",
    streetAddress: "West Ryde",
    addressLine: "West Ryde NSW 2114, Australia",
    shortAddress: "West Ryde NSW 2114",
    geo: { latitude: -33.80728, longitude: 151.08639 },
    hero: {
      title: "Mobile Tyre Repair in West Ryde - We Come to You",
      highlight: "West Ryde",
      descriptions: [
        "Got a flat tyre, a puncture or a damaged tyre? Quickfit Mobile Tyres provides mobile tyre repair and replacement services across West Ryde and nearby suburbs.",
        "We come directly to your location to get your tyre issue sorted, so you don't need to travel to a tyre shop.",
        "Need mobile tyre assistance in West Ryde?",
        "Call us now for mobile tyre assistance at your location.",
      ],
    },
    whatWeDo: {
      description:
        "Whether your tyre has a puncture, needs replacing or requires attention as part of routine vehicle maintenance, we can discuss the service you need and confirm whether it is available at your location.",
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
            "Experiencing steering wheel vibrations? We come to your location to assess the issue and help improve your wheel balance.",
        },
        {
          title: "Fleet Tyre Maintenance",
          description:
            "Need tyre maintenance for your business vehicles? We come to your location to assess your fleet's tyre needs and provide the required tyre services.",
        },
      ],
    },
    weComeToYou: {
      title: "Mobile Tyre Assistance at Your Location",
      description:
        "A tyre problem can disrupt your entire day. That's why Quickfit Mobile Tyres comes to your location in West Ryde and nearby suburbs to help resolve your tyre issues.",
      paragraphs: [
        "We bring mobile tyre services to your location in West Ryde, whether you're:",
        "Need help with your tyres? Call Quickfit Mobile Tyres on 0404 730 738.",
      ],
      cards: [
        {
          title: "At Home",
          description:
            "Got a flat tyre in your driveway? We come to your home, assess the problem and carry out the required tyre service.",
        },
        {
          title: "At Work",
          description:
            "Don't let a tyre problem interrupt your workday. We come to your workplace to help resolve your tyre issue.",
        },
        {
          title: "Business or Fleet",
          description:
            "We provide tyre services at business locations to help keep your vehicles moving and your operations running.",
        },
        {
          title: "Roadside",
          description:
            "Stranded with a flat or damaged tyre? Contact us for mobile tyre assistance. We come to your location to assess the issue and help get you back on the road. Always prioritise your safety while waiting for assistance.",
        },
      ],
    },
    howItWorks: {
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
            "Tell us where your vehicle is located in West Ryde or a nearby suburb, along with your vehicle details.",
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
            "We carry out the required tyre service to help get you back on the road, with same-day service for your tyre needs.",
        },
      ],
    },
    reviewsDescription:
      "Choosing a mobile tyre service is easier when you can hear from other customers. See what customers have shared about their experience with Quickfit Mobile Tyres.",
    findOnGoogleDescription:
      "Looking for mobile tyre repair in West Ryde or nearby suburbs? Find Quickfit Mobile Tyres on Google to view our business profile, customer reviews and location information.",
    localArea: {
      heading: "Mobile Tyre Repair Near You in West Ryde",
      paragraphs: [
        "Looking for mobile tyre repair near me, tyre replacement or mobile tyre fitting in West Ryde? Quickfit Mobile Tyres brings tyre assistance directly to your location.",
        "We service West Ryde and nearby suburbs, helping drivers deal with punctures, damaged tyres and replacement needs without having to travel to a tyre shop.",
        "Whether you're at home, at work or managing business vehicles, we're here to help get your tyre problem sorted.",
        "Need mobile tyre repair in West Ryde? Call 0404 730 738.",
      ],
    },
    faq: [
      {
        id: 1,
        question: "Do you provide mobile tyre repair in West Ryde?",
        answer:
          "Yes. Quickfit Mobile Tyres provides mobile tyre services in West Ryde and nearby suburbs. We come to your location to assess and resolve your tyre problem.",
      },
      {
        id: 2,
        question: "What are your operating hours?",
        answer: "We operate from 7 am to 9 pm.",
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
        question: "Do you service suburbs near West Ryde?",
        answer:
          "Yes. We service West Ryde and nearby suburbs, bringing mobile tyre assistance directly to your location.",
      },
      {
        id: 7,
        question: "What information should I provide when I call?",
        answer:
          "Tell us your location, vehicle make and model, and what happened to your tyre. If you know your tyre size, have that information ready too.",
      },
    ],
    finalCta: {
      title: "Need Mobile Tyre Repair in West Ryde?",
      paragraphs: [
        "Don't let a tyre problem disrupt your day. Quickfit Mobile Tyres comes to your location in West Ryde and nearby suburbs to assess your tyre issue and get it sorted.",
        "From puncture repairs and tyre replacements to wheel balancing and fleet tyre maintenance, we're here to help.",
        "Your tyre problem, our priority. We'll come to you and help get you back on the road.",
      ],
    },
  },
};

if (!locations[key]) {
  console.error(
    `Unknown location "${key}". Use: ${Object.keys(locations).join(", ")}`,
  );
  process.exit(1);
}

const loc = locations[key];
const mapQuery = encodeURIComponent(
  `Quickfit Mobile Tyres ${loc.suburb}, ${loc.addressLine}`,
);
const mapEmbedUrl = `https://maps.google.com/maps?q=${mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
const mapTitle = `Quickfit Mobile Tyres ${loc.suburb} — ${loc.shortAddress}`;
const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(`Quickfit Mobile Tyres ${loc.suburb}`)}`;
const googleReviewsUrl = `https://www.google.com/search?q=${encodeURIComponent(`Quickfit Mobile Tyres ${loc.suburb} reviews`)}`;
const canonicalUrl = `https://quickfitmobiletyres.com.au/${loc.slug}/`;
const metaTitle = `Mobile Tyre Repair ${loc.suburb} | Quickfit Mobile Tyres`;
const metaDescription = `Need mobile tyre repair in ${loc.suburb}? Quickfit Mobile Tyres comes to you for puncture repair, tyre replacement, wheel balancing and fleet tyre maintenance. Open 7 am – 9 pm. Call 0404 730 738.`;

function esc(str) {
  return str.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$/g, "\\$");
}

function quote(str) {
  return JSON.stringify(str);
}

function renderCards(cards) {
  return cards
    .map(
      (c) => `      {
        title: ${quote(c.title)},
        description:
          ${quote(c.description)},
      }`,
    )
    .join(",\n");
}

function renderSteps(steps) {
  return steps
    .map((s) => {
      const phone = s.phoneUrl
        ? `,\n        phoneUrl: ${quote(s.phoneUrl)},\n        phoneLabel: ${quote(s.phoneLabel)}`
        : "";
      return `      {
        stepNumber: ${s.stepNumber},
        title: ${quote(s.title)},
        description:
          ${quote(s.description)}${phone},
      }`;
    })
    .join(",\n");
}

function renderFaq(items) {
  return items
    .map(
      (f) => `      {
        id: ${f.id},
        question: ${quote(f.question)},
        answer:
          ${quote(f.answer)},
      }`,
    )
    .join(",\n");
}

function renderParagraphs(arr, indent = 6) {
  const pad = " ".repeat(indent);
  return arr.map((p) => `${pad}${quote(p)},`).join("\n");
}

const siteContent = `/**
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

/** ${loc.suburb} landing — /${loc.slug}/ */
export const ${loc.exportName} = {
  slug: ${quote(loc.slug)},
  location: {
    suburb: ${quote(loc.suburb)},
    region: ${quote(loc.region)},
    label: ${quote(loc.label)},
    postalCode: ${quote(loc.postalCode)},
    streetAddress: ${quote(loc.streetAddress)},
    addressLine: ${quote(loc.addressLine)},
    shortAddress: ${quote(loc.shortAddress)},
    mapEmbedUrl:
      ${quote(mapEmbedUrl)},
    mapTitle: ${quote(mapTitle)},
    googleSearchUrl:
      ${quote(googleSearchUrl)},
    googleReviewsUrl:
      ${quote(googleReviewsUrl)},
    geo: { latitude: ${loc.geo.latitude}, longitude: ${loc.geo.longitude} },
  },
  seo: {
    metaTitle:
      ${quote(metaTitle)},
    metaDescription:
      ${quote(metaDescription)},
    canonicalUrl:
      ${quote(canonicalUrl)},
  },
  hero: {
    eyebrow: ${quote(loc.label)},
    title: ${quote(loc.hero.title)},
    highlight: ${quote(loc.hero.highlight)},
    descriptions: [
${renderParagraphs(loc.hero.descriptions, 6)}
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
      ${quote(loc.whatWeDo.description)},
    cards: [
${renderCards(loc.whatWeDo.cards)}
    ],
  },
  weComeToYou: {
    id: 2,
    eyebrow: "We come to you",
    title: ${quote(loc.weComeToYou.title)},
    description:
      ${quote(loc.weComeToYou.description)},
    paragraphs: [
${renderParagraphs(loc.weComeToYou.paragraphs, 6)}
    ],
    cards: [
${renderCards(loc.weComeToYou.cards)}
    ],
  },
  howItWorks: {
    id: 3,
    eyebrow: "How It Works",
    title: "Get Your Tyre Problem Sorted in Four Simple Steps",
    steps: [
${renderSteps(loc.howItWorks.steps)}
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
      ${quote(loc.reviewsDescription)},
    ctaLabel: "Read Our Google Reviews",
  },
  findOnGoogle: {
    id: 6,
    eyebrow: "Find Us on Google",
    title: "Find Us on Google",
    description:
      ${quote(loc.findOnGoogleDescription)},
  },
  localArea: {
    id: 7,
    heading: ${quote(loc.localArea.heading)},
    paragraphs: [
${renderParagraphs(loc.localArea.paragraphs, 6)}
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
${renderFaq(loc.faq)}
    ],
  },
  finalCta: {
    id: 8,
    eyebrow: "Get Mobile Assistance",
    title: ${quote(loc.finalCta.title)},
    paragraphs: [
${renderParagraphs(loc.finalCta.paragraphs, 6)}
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
`;

writeFileSync(join(root, "content/siteContent.ts"), siteContent);

// Update static-page.ts imports/export
{
  let src = readFileSync(join(root, "lib/static-page.ts"), "utf8");
  src = src.replace(
    /import \{ site, \w+ \} from "@\/content\/siteContent";/,
    `import { site, ${loc.exportName} } from "@/content/siteContent";`,
  );
  src = src.replace(
    /export type StaticLandingPage = typeof \w+;/,
    `export type StaticLandingPage = typeof ${loc.exportName};`,
  );
  src = src.replace(
    /export const activePage: StaticLandingPage = \w+;/,
    `export const activePage: StaticLandingPage = ${loc.exportName};`,
  );
  src = src.replace(
    /streetAddress: "Farrow Rd",/,
    `streetAddress: page.location.streetAddress,`,
  );
  if (!src.includes("streetAddress: page.location.streetAddress")) {
    src = src.replace(
      /streetAddress: page\.location\.streetAddress,/,
      `streetAddress: page.location.streetAddress,`,
    );
  }
  writeFileSync(join(root, "lib/static-page.ts"), src);
}

// page.tsx home redirect
writeFileSync(
  join(root, "app/page.tsx"),
  `import { redirect } from "next/navigation";
import { ${loc.exportName} } from "@/content/siteContent";

/** Canonical ${loc.suburb} landing lives at /${loc.slug}/ */
export default function HomePage() {
  redirect(\`/\${${loc.exportName}.slug}/\`);
}
`,
);

// layout metadata
{
  let src = readFileSync(join(root, "app/layout.tsx"), "utf8");
  src = src.replace(
    /import \{ site, \w+ \} from "@\/content\/siteContent";/,
    `import { site, ${loc.exportName} } from "@/content/siteContent";`,
  );
  src = src.replace(/\bcampbelltown\b/g, loc.exportName);
  writeFileSync(join(root, "app/layout.tsx"), src);
}

// API homepage
writeFileSync(
  join(root, "app/api/homepage/route.ts"),
  `import { NextResponse } from "next/server";
import { site, ${loc.exportName} } from "@/content/siteContent";
import { buildLandingView } from "@/lib/static-page";

/** Serves static landing content from content/siteContent.ts (Strapi disabled). */
export async function GET() {
  const view = buildLandingView(${loc.exportName});

  return NextResponse.json({
    ok: true,
    source: "static",
    brand: site.brand,
    data: {
      seo: ${loc.exportName}.seo,
      location: ${loc.exportName}.location,
      hero: view.hero,
      whatWeDo: view.whatWeDo,
      weComeToYou: view.weComeToYou,
      howItWorks: view.howItWorks,
      partners: view.partners,
      reviews: view.reviews,
      findOnGoogle: view.findOnGoogle,
      localArea: view.localArea,
      faq: view.faq,
      finalCta: view.finalCta,
    },
  });
}
`,
);

// site-content business location
{
  let src = readFileSync(join(root, "lib/site-content.ts"), "utf8");
  src = src.replace(
    /location: "[^"]+",/,
    `location: ${quote(loc.label)},`,
  );
  writeFileSync(join(root, "lib/site-content.ts"), src);
}

// Route page: remove campbelltown route, add new
const oldRoute = join(root, "app/mobile-tyre-repair-campbelltown");
if (existsSync(oldRoute)) rmSync(oldRoute, { recursive: true, force: true });
for (const folder of [
  "mobile-tyre-repair-chipping-norton",
  "mobile-tyre-repair-kingsgrove",
  "mobile-tyre-repair-kirrawee",
  "mobile-tyre-repair-west-ryde",
]) {
  const p = join(root, "app", folder);
  if (folder !== loc.slug && existsSync(p)) rmSync(p, { recursive: true, force: true });
}
const newRoute = join(root, "app", loc.slug);
mkdirSync(newRoute, { recursive: true });
writeFileSync(
  join(newRoute, "page.tsx"),
  `import type { Metadata } from "next";
import { site, ${loc.exportName} } from "@/content/siteContent";
import LandingPageView from "@/components/LandingPageView";

export const metadata: Metadata = {
  title: ${loc.exportName}.seo.metaTitle,
  description: ${loc.exportName}.seo.metaDescription,
  alternates: { canonical: ${loc.exportName}.seo.canonicalUrl },
  openGraph: {
    title: ${loc.exportName}.seo.metaTitle,
    description: ${loc.exportName}.seo.metaDescription,
    url: ${loc.exportName}.seo.canonicalUrl,
    siteName: site.brand,
    locale: "en_AU",
    type: "website",
  },
};

export default function ${loc.pageFn}() {
  return <LandingPageView page={${loc.exportName}} />;
}
`,
);

// googleReviews meta
{
  let src = readFileSync(join(root, "content/googleReviews.ts"), "utf8");
  src = src.replace(
    /Google Business reviews — .+?\./,
    `Google Business reviews — ${loc.suburb} listing.`,
  );
  src = src.replace(
    /name: "Quickfit Mobile Tyres [^"]+",/,
    `name: "Quickfit Mobile Tyres ${loc.suburb}",`,
  );
  src = src.replace(
    /address: "[^"]+",/,
    `address: ${quote(loc.addressLine)},`,
  );
  src = src.replace(
    /searchQuery:\s*\n?\s*"[^"]+",/,
    `searchQuery:\n    "Quickfit Mobile Tyres ${loc.shortAddress}",`,
  );
  src = src.replace(
    /location: "Campbelltown"/g,
    `location: ${quote(loc.suburb)}`,
  );
  writeFileSync(join(root, "content/googleReviews.ts"), src);
}

// Footer location strings
{
  let src = readFileSync(join(root, "components/layout/Footer.tsx"), "utf8");
  if (!src.includes('from "@/lib/static-page"')) {
    src = src.replace(
      'import { staticImages } from "@/lib/site-images";',
      'import { staticImages } from "@/lib/site-images";\nimport { activePage } from "@/lib/static-page";',
    );
  }
  src = src.replace(
    /Mobile tyre repair and replacement services in .+? and nearby suburbs\. We come to you\./,
    `{&#96;Mobile tyre repair and replacement services in \${activePage.location.suburb} and nearby suburbs. We come to you.&#96;}`,
  );
  // Convert HTML entities back to template literal JSX
  src = src.replace(
    /\{&#96;Mobile tyre repair and replacement services in \$\{activePage\.location\.suburb\} and nearby suburbs\. We come to you\.&#96;\}/,
    '{`Mobile tyre repair and replacement services in ${activePage.location.suburb} and nearby suburbs. We come to you.`}',
  );
  src = src.replace(
    /(?:Farrow Rd, Campbelltown NSW 2560|Chipping Norton NSW 2170|Kingsgrove NSW 2208|Kirrawee NSW 2232|West Ryde NSW 2114|\{activePage\.location\.shortAddress\})/,
    "{activePage.location.shortAddress}",
  );
  writeFileSync(join(root, "components/layout/Footer.tsx"), src);
}

// ReviewsSection address line
{
  let src = readFileSync(
    join(root, "components/sections/ReviewsSection.tsx"),
    "utf8",
  );
  src = src.replace(
    /Quickfit Mobile Tyres Campbelltown/g,
    `Quickfit Mobile Tyres ${loc.suburb}`,
  );
  src = src.replace(
    /100% Mobile Service in Campbelltown/g,
    `100% Mobile Service in ${loc.suburb}`,
  );
  src = src.replace(
    /Farrow Rd, Campbelltown NSW 2560 • Open 7:00 AM – 9:00 PM/,
    `${loc.shortAddress} • Open 7:00 AM – 9:00 PM`,
  );
  writeFileSync(join(root, "components/sections/ReviewsSection.tsx"), src);
}

// LocalAreaSection fallbacks
{
  let src = readFileSync(
    join(root, "components/sections/LocalAreaSection.tsx"),
    "utf8",
  );
  src = src.replace(
    /Quickfit Mobile Tyres Roadside Service in Campbelltown/g,
    `Quickfit Mobile Tyres Roadside Service in ${loc.suburb}`,
  );
  src = src.replace(
    /Quickfit Mobile Tyres Campbelltown — Farrow Rd, Campbelltown NSW 2560/g,
    mapTitle,
  );
  src = src.replace(
    /https:\/\/maps\.google\.com\/maps\?q=Quickfit\+Mobile\+Tyres\+Campbelltown%2C\+Farrow\+Rd%2C\+Campbelltown\+NSW\+2560%2C\+Australia&t=&z=15&ie=UTF8&iwloc=&output=embed/g,
    mapEmbedUrl,
  );
  src = src.replace(
    /Mobile Tyre Services Across Campbelltown NSW/g,
    loc.localArea.heading,
  );
  writeFileSync(join(root, "components/sections/LocalAreaSection.tsx"), src);
}

// FinalCta placeholder
{
  let src = readFileSync(
    join(root, "components/sections/FinalCtaSection.tsx"),
    "utf8",
  );
  src = src.replace(
    /placeholder="e\.g\. [^"]+"/,
    `placeholder="e.g. ${loc.shortAddress}"`,
  );
  writeFileSync(join(root, "components/sections/FinalCtaSection.tsx"), src);
}

// google-reviews API location fallback
{
  const apiPath = join(root, "app/api/google-reviews/route.ts");
  if (existsSync(apiPath)) {
    let src = readFileSync(apiPath, "utf8");
    src = src.replace(
      /location: "Campbelltown"/g,
      `location: ${quote(loc.suburb)}`,
    );
    writeFileSync(apiPath, src);
  }
}

console.log(`Applied location content: ${loc.label} (/${loc.slug}/)`);
