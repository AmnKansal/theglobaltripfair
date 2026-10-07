import { BRAND_NAME, COMPANY_NAME } from "../legal/brand"
import { media } from "../media"
import { carsDeskPhoneDisplay, contactInfo } from "../contact"
import type { ServiceDoc } from "./types"

export const carsPage: ServiceDoc = {
  slug: "cars",
  eyebrow: "Car rental",
  title: "The right car, timed to the flight you actually land on.",
  lead: `Pickup city, dates and how many people are riding — ${BRAND_NAME} compares major rental companies and reads back the vehicle, the total and the counter hours before you confirm.`,
  intro: [
    "A rental that looks simple online often hides the details that matter: a desk that closes before a delayed arrival, a one-way fee at return, or a “minivan” that seats six when you needed seven.",
    `${COMPANY_NAME} books cars in the United States and abroad, at airports and in town, for a weekend or a longer stay. When you also need flights or a hotel, the car is aligned with those times so you are not paying for an extra day you will not use.`,
  ],
  heroImage: media.carsSuv,
  heroAlt: "A silver SUV on an open road, ready for a rental trip",
  highlights: [
    { title: "Airport and city pickup", copy: "On-airport counters when you need speed; in-town locations when the rate or hours fit better." },
    { title: "The all-in number", copy: "Airport fees, tax, young-driver or one-way charges are quoted before you pay — not at the desk." },
    { title: "Sized for people and bags", copy: "We check seating and cargo, not just the category name on the screen." },
    { title: "Changes after you drive away", copy: "Extend, shorten or switch the return city through the same team that reserved the car." },
  ],
  included: [
    "A comparison across major rental brands at your pickup location, including mileage and fuel policy.",
    "Pickup timed to your flight, with the flight number on the reservation when we book both.",
    "Extras reserved in advance: child seats, additional drivers, toll tags and GPS.",
    "Written confirmation with the counter address, hours, documents and cancellation terms.",
    "One contact for extensions, one-way changes or a missed pickup.",
  ],
  steps: [
    { title: "Share the drive", copy: "Where you collect the car, where you return it, who is driving, ages, luggage and whether you are flying in." },
    { title: "We compare totals", copy: "Your advisor flags after-hours desks, cross-border limits and drop fees, then recommends a class that actually fits." },
    { title: "Confirm the details", copy: "We read back vehicle, total, hours and cancellation terms. Most rentals hold without prepayment; we say when a rate is pay-now." },
    { title: "Collect with a checklist", copy: "License, a credit card in the driver’s name, confirmation number — plus passport or permit where the country requires it." },
  ],
  picksTitle: "Choose the class that fits the trip",
  picksCopy: "Category names vary by company. We match the metal to your people, bags and roads.",
  picks: [
    { title: "Compact and mid-size", copy: "City driving, tight parking and two or three travellers with carry-ons.", image: media.cars, imageAlt: "A sedan on a scenic coastal highway" },
    { title: "SUVs", copy: "Extra cargo, mountain roads or winter weather. All-wheel drive is not automatic — ask if you need it.", image: media.carsSuv, imageAlt: "A silver SUV parked on an open road" },
    { title: "Family and one-way trips", copy: "Minivans for seven, or a sedan collected in one city and left in another with the drop fee compared first.", image: media.transfers, imageAlt: "A car driving an open road at sunrise" },
    { title: "Scenic and longer stays", copy: "Coastal weeks, national-park loops and snowbird months — we look at weekly versus monthly rates.", image: media.holidays, imageAlt: "A winding road through green hills" },
  ],
  knowTitle: "The fine print that usually appears at the counter",
  knowItems: [
    { title: "Driver age", copy: "Most US locations rent from 21, with a daily fee under 25. Rules abroad differ. We quote the surcharge when it applies." },
    { title: "License and credit card", copy: "The driver needs a valid license and a credit card in their own name. Expect an authorization hold that releases after return." },
    { title: "Insurance", copy: "The desk will offer a damage waiver. Your own auto policy or card may already cover US rentals; cover abroad is patchier. Check before you travel." },
    { title: "Fuel", copy: "Full-to-full is the usual rule: bring it back at the same level or pay the company’s refuel rate." },
    { title: "Tolls and one-way fees", copy: "Cashless roads often mean a transponder fee or an admin charge later. Drop fees on one-way routes vary widely by company — we compare them." },
    { title: "Borders", copy: "Canada is often allowed with notice. Mexico frequently needs specific locations and extra cover, or is refused. Tell us the full route." },
  ],
  faqs: [
    { question: "What do I need at pickup?", answer: "A valid licence, a credit card in the driver’s name for the hold, and your confirmation number. Abroad, bring your passport and an International Driving Permit where the country asks for one." },
    { question: "Can I rent with a debit card?", answer: "Some locations allow it with extra ID and a larger hold; others require credit, especially for premium cars. Tell us how you plan to pay and we book a desk whose policy matches." },
    { question: "Can I collect in one city and return in another?", answer: "Yes, on many US and international routes. Drop fees differ a lot. We compare one-way totals so you see the real cost before confirming." },
    { question: "Are child seats available?", answer: "Infant, toddler and booster seats can be reserved for a daily fee, subject to stock. Many families bring their own; we can also check the airline’s policy for gate-checking a seat." },
    { question: "What if my flight is late?", answer: "When we book the flight with the car, the flight number goes on the rental. For night arrivals we pick desks that stay open, or we move pickup to the morning." },
    { question: "Can I extend after I have the keys?", answer: `Usually. Call ${carsDeskPhoneDisplay} as soon as plans change. Extensions depend on availability; we explain any rate difference before you agree.` },
  ],
  ctaTitle: "Need the car waiting when you land?",
  ctaCopy: `Call the car rental desk on ${carsDeskPhoneDisplay} or email ${contactInfo.email}. ${COMPANY_NAME} will match the vehicle to your group and the counter hours to your arrival.`,
}
