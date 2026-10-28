import { BRAND_NAME, COMPANY_NAME } from "./legal/brand"
import { carsDeskPhoneDisplay, contactInfo } from "./contact"
import { media } from "./media"

export type CarSlipItem = {
  label: string
  value: string
}

export type CarClass = {
  name: string
  goodFor: string
  seats: string
  bags: string
}

export type CarStep = {
  title: string
  copy: string
}

export type CarTrip = {
  title: string
  copy: string
}

export type CarFaq = {
  question: string
  answer: string
}

export type CarRentalsDoc = {
  title: string
  lead: string
  heroImage: string
  heroAlt: string
  slipTitle: string
  route: [CarSlipItem, CarSlipItem]
  slip: CarSlipItem[]
  intro: string
  classesTitle: string
  classesLead: string
  classes: CarClass[]
  classesNote: string
  includedTitle: string
  includedImage: string
  includedAlt: string
  included: string[]
  stepsTitle: string
  steps: CarStep[]
  tripsTitle: string
  tripsLead: string
  trips: CarTrip[]
  pickupTitle: string
  pickupLead: string
  pickup: string[]
  faqTitle: string
  faqs: CarFaq[]
  notice: string
  ctaTitle: string
  ctaCopy: string
  ctaImage: string
}

export const carRentals: CarRentalsDoc = {
  title: "The right rental car for every trip,\nbooked in one call.",
  lead: "Tell us where you pick up, where you return and who is driving. Our car rental team compares major rental companies and books the car that fits your group, with the full total quoted before you pay.",
  heroImage: media.carsSuv,
  heroAlt: "A white SUV parked on a mountain road, ready for a rental road trip",
  slipTitle: "Your rental, arranged by one team",
  route: [
    { label: "Pickup", value: "Airport, city or hotel" },
    { label: "Return", value: "Same place or another city" },
  ],
  slip: [
    { label: "Car", value: "Sized to your group and bags" },
    { label: "Extras", value: "Child seats, drivers, toll passes" },
    { label: "Total", value: "Quoted in full before you pay" },
  ],
  intro: `${COMPANY_NAME} books rental cars at airports, city locations and hotels around the world, for a day, a weekend road trip or a month-long stay. The team that makes your booking is the team you call for any change along the way.`,
  classesTitle: "Choose by seats and bags",
  classesLead: "Category names differ between rental companies, so we match the class to your passengers, your luggage and the roads ahead.",
  classes: [
    { name: "Economy and compact", goodFor: "City trips and couples", seats: "4–5", bags: "1–2" },
    { name: "Midsize and full-size sedans", goodFor: "Business travel and long highway days", seats: "5", bags: "2–3" },
    { name: "SUVs", goodFor: "Families, mountain roads and winter trips", seats: "5–7", bags: "3–5" },
    { name: "Minivans", goodFor: "Groups and family holidays", seats: "7–8", bags: "4–6" },
    { name: "Premium and convertibles", goodFor: "Celebrations, business and coastal drives", seats: "2–5", bags: "1–3" },
  ],
  classesNote: "Typical capacity. Models vary by company, so we confirm seats and luggage space for your booking.",
  includedTitle: "Everything the booking covers",
  includedImage: media.transfers,
  includedAlt: "A driver at the wheel of a rental car on a city drive at dusk",
  included: [
    "A comparison of major rental companies at your pickup location.",
    "One clear total before you pay, with taxes and fees included.",
    "A car class matched to your passengers and luggage.",
    "Pickup timed to your flight when we book both.",
    "Child seats, additional drivers and toll passes reserved in advance.",
    "Written confirmation with the counter address, opening hours and cancellation terms.",
    "One team to call for extensions and changes.",
  ],
  stepsTitle: "From your call to the keys",
  steps: [
    { title: "Share your trip", copy: "Pickup and return locations, dates and times, the driver’s age, and how many people and bags are coming." },
    { title: "Compare your options", copy: "Your agent checks availability across major rental companies and recommends the class that fits, with the full total for each." },
    { title: "Confirm the booking", copy: "We read back the car, the total, the counter hours and the cancellation terms, and book once you say yes." },
    { title: "Pick up the keys", copy: "Your written confirmation lists the counter address and what to bring, so you are ready at the desk." },
  ],
  tripsTitle: "Rentals for every kind of trip",
  tripsLead: "Tell us what the trip looks like and we arrange the car around it.",
  trips: [
    { title: "One-way trips", copy: "Pick up in one city and return in another. We compare one-way totals across companies for your route." },
    { title: "Road trips", copy: "National parks, coastal highways and long weekends, with mileage terms checked for the distance you plan to drive." },
    { title: "Family holidays", copy: "Minivans and SUVs with room for everyone, and child seats reserved before you arrive." },
    { title: "Business travel", copy: "A comfortable sedan at the airport or near your hotel, with the booking details sent to your inbox." },
    { title: "Monthly stays", copy: "Weekly and monthly rates compared, with extensions arranged when plans run longer." },
    { title: "Rentals abroad", copy: "The license, permit and border rules for your destination explained before you book." },
  ],
  pickupTitle: "What to bring to the counter",
  pickupLead: "Your confirmation repeats this list, along with the counter address and hours.",
  pickup: [
    "A valid driver’s license for every driver.",
    "A credit card in the main driver’s name.",
    "Your confirmation number.",
    "Your passport, plus an International Driving Permit where the country asks for one.",
  ],
  faqTitle: "Car rental questions",
  faqs: [
    { question: "How old do I need to be to rent a car?", answer: "Most US locations rent from age 21, and drivers under 25 usually pay a daily young-driver fee. New York and Michigan allow rentals from 18. Minimum ages abroad vary by country, and any age fee is included in your quote." },
    { question: "Can I pick up in one city and return in another?", answer: "Yes, on many routes. Drop fees vary by company and route, so we compare one-way totals and you see the full price before you confirm." },
    { question: "Do I need the rental company’s insurance?", answer: "Not always. Your personal auto policy or credit card may already cover rental cars, so check with them before you travel. Cover abroad varies more, and we explain the options for your destination." },
    { question: "Can I rent with a debit card?", answer: "Many locations accept debit cards with extra ID and a larger hold, while premium cars usually need a credit card. Tell us how you plan to pay and we book a location that accepts it." },
    { question: "Can I add a child seat or another driver?", answer: "Yes. Infant, toddler and booster seats can be reserved for a daily fee, subject to availability. Additional drivers are added at the counter and bring their own license." },
    { question: "How does fuel work?", answer: "Most rentals are full-to-full: you collect the car with a full tank and return it full. We confirm the fuel policy for your booking before you pay." },
    { question: "What if my flight arrives late?", answer: "When we book your flight and car together, the flight number goes on the rental. For late arrivals we choose a counter whose hours suit your arrival time." },
    { question: "Can I extend or change my rental?", answer: `Usually, yes. Call ${carsDeskPhoneDisplay} as soon as plans change. Extensions and return changes depend on availability, and we explain any price difference before you agree.` },
  ],
  notice: `${BRAND_NAME} is an independent booking service operated by ${COMPANY_NAME} and is not affiliated with any car rental company. Rates and availability are confirmed with the rental company when you book, and any service fee is included in the total we quote before you pay.`,
  ctaTitle: "Ready to drive? Call and we will line up the right car.",
  ctaCopy: `Call ${carsDeskPhoneDisplay} or email ${contactInfo.email} with your pickup city, dates and group size.`,
  ctaImage: media.cars,
}
