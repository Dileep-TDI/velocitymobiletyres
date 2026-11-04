/**
 * Verify Campbelltown landing copy against the brief.
 * Run: node scripts/check-content.mjs
 */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = readFileSync(join(root, "content/siteContent.ts"), "utf8");

function has(text) {
  return src.includes(text);
}

function check(label, expected, optional = false) {
  const ok = expected.every((t) => has(t));
  const missing = expected.filter((t) => !has(t));
  return { label, ok, missing, optional };
}

const checks = [
  check("1. Hero", [
    "Campbelltown, Sydney NSW",
    "Need Mobile Tyre Repair in Campbelltown?",
    "Got a flat tyre, puncture or damaged tyre in Campbelltown? Quickfit Mobile Tyres brings professional mobile tyre services directly to your location.",
    "Whether you're at home, at work or dealing with a tyre problem on the road, we come to you, assess the issue and help get you back on the road.",
    "Call Quickfit Mobile Tyres: 0404 730 738",
    "Operating Hours: 7 am – 9 pm",
    "Call Now",
  ]),
  check("2. What We Do", [
    "From unexpected punctures to tyre replacements, Quickfit Mobile Tyres provides practical mobile tyre services across Campbelltown.",
    "Puncture Repair",
    "A puncture does not always mean you need a new tyre. The damage and tyre condition must be assessed to determine whether a safe repair is possible. If replacement is necessary, we can discuss the available options.",
    "Tyre Replacement",
    "Experiencing steering wheel vibrations? We come to your location to assess the issue and help improve your wheel balance.",
    "Wheel Balancing",
    "Need tyre maintenance for your business vehicles? We come to your location to assess your fleet’s tyre needs and provide the required service.",
    "Fleet Tyre Maintenance",
    "Keep your business vehicles moving with mobile tyre maintenance support. We help businesses manage tyre replacement, puncture repairs and wheel balancing for their fleets.",
  ]),
  check("3. We Come To You", [
    "We Come to You in Campbelltown",
    "A tyre problem can interrupt your day, especially when you have somewhere to be. With Quickfit Mobile Tyres, you don't need to organise a trip to a tyre shop.",
    "We bring mobile tyre services to your location in Campbelltown, whether you're:",
    "At home with a flat or damaged tyre.",
    "At your workplace and unable to leave your vehicle.",
    "Managing vehicles at a business or fleet location.",
    "In a safe location on the roadside and need tyre assistance.",
    "Our mobile service is designed to make tyre repairs and replacements more convenient.",
    "Need help with a tyre problem in Campbelltown? Call 0404 730 738.",
  ]),
  check("Route", ["mobile-tyre-repair-campbelltown"]),
  check("4. How It Works", [
    "Get Your Tyre Problem Sorted in Four Simple Steps",
    "Give Us a Call",
    "Call Quickfit Mobile Tyres on 0404 730 738 and explain the tyre problem.",
    "Share Your Location",
    "Let us know where your vehicle is located in Campbelltown and what assistance you need.",
    "We Come to You",
    "Our mobile tyre service comes to your location to assess the issue.",
    "Get Your Tyre Problem Resolved",
    "We carry out the required tyre service, whether it's a suitable puncture repair, tyre replacement or wheel balancing.",
  ]),
  check("5. Partners", ["Partnering with Major Tyre Brands"]),
  check("6. Reviews", [
    "What Our Customers Say",
    "We value the trust our customers place in Quickfit Mobile Tyres.",
    "Read genuine customer feedback about our mobile tyre services and the experience of having tyre assistance brought directly to their location.",
    "Read Our Google Reviews",
  ]),
  check("7. Local Area", [
    "Mobile Tyre Services Across Campbelltown NSW",
    "Looking for mobile tyre repair in Campbelltown? Quickfit Mobile Tyres provides mobile assistance for drivers who need help with damaged, punctured or worn tyres.",
    "Instead of taking time out of your day to visit a tyre shop, you can contact us and have the tyre service brought to your location.",
    "From tyre replacement and puncture repair to wheel balancing and fleet tyre maintenance, we're here to make dealing with tyre problems simpler.",
    "Whether you searched for mobile tyre repair near me, tyre repair Campbelltown or mobile tyre replacement, contact Quickfit Mobile Tyres for assistance.",
    "7 am – 9 pm",
  ]),
  check("8. Find Us on Google", ["Find Us on Google"]),
  check("9. FAQ", [
    "Do you provide mobile tyre repair in Campbelltown?",
    "Yes. Quickfit Mobile Tyres provides mobile tyre services in Campbelltown NSW, including puncture repair, tyre replacement, wheel balancing and fleet tyre maintenance.",
    "Can you come to my home or workplace?",
    "Yes. Our mobile service is designed to assist you at your location, including your home or workplace.",
    "Can every punctured tyre be repaired?",
    "No. It depends on the location and extent of the damage. We assess the tyre first and only recommend a repair when it is safe and suitable. A replacement may be necessary in some cases.",
    "Do you offer same-day mobile tyre assistance?",
    "We aim to help resolve your tyre problem on the same day. The work required depends on the condition of the tyre and the service needed.",
    "What are your operating hours?",
    "Quickfit Mobile Tyres operates from 7 am to 9 pm.",
    "How do I arrange mobile tyre service in Campbelltown?",
    "Simply call 0404 730 738, explain your tyre problem and share your location.",
  ]),
  check("10. Final CTA", [
    "Need Mobile Tyre Assistance in Campbelltown?",
    "Don't let a flat, punctured or damaged tyre disrupt your day. Call Quickfit Mobile Tyres and get mobile tyre assistance at your location.",
    "7 am – 9 pm",
    "Call Now",
  ]),
];

let failed = 0;
for (const c of checks) {
  if (c.ok) {
    console.log(`PASS  ${c.label}`);
  } else {
    failed += 1;
    console.log(`FAIL  ${c.label}`);
    for (const m of c.missing) {
      console.log(
        `      missing: ${m.slice(0, 100)}${m.length > 100 ? "…" : ""}`,
      );
    }
  }
}

console.log("");
console.log(
  failed === 0
    ? `ALL MATCH (${checks.length}/${checks.length})`
    : `${failed} SECTION(S) WITH GAPS`,
);
process.exit(failed === 0 ? 0 : 1);
