import { BRAND_NAME, COMPANY_NAME } from "../legal/brand"
import { media } from "../media"
import { contactInfo } from "../contact"
import type { ServiceDoc } from "./types"

export const cruisesPage: ServiceDoc = {
  slug: "cruises",
  eyebrow: "Cruise holidays",
  title: "Unpack once. Wake up somewhere new.",
  lead: `Book the sailing with ${BRAND_NAME} and we can add flights into the home port, a hotel the night before, and the transfers in between — priced as one itinerary.`,
  intro: [
    "A cruise suits first-time travellers, mixed-age families and anyone who would rather not change hotels every other night. Meals, shows and most onboard time sit in the fare; the ship moves while you sleep.",
    `${COMPANY_NAME} plans sailings from US ports and fly-cruise trips to Europe, Alaska and beyond. You tell us the region, cabin style and who is travelling. We come back with two or three complete options, not a wall of departure dates.`,
  ],
  heroImage: media.cruises,
  heroAlt: "A cruise ship on open water at sunset",
  highlights: [
    { title: "Fly, sleep, sail", copy: "Round-trip flights, a pre-cruise night near the pier, and transfers so embarkation morning is not a scramble." },
    { title: "The cabin that matches the trip", copy: "Inside, ocean-view, balcony or suite — we explain what you actually gain on that itinerary." },
    { title: "Weather and season, said plainly", copy: "Caribbean winter, Alaska summer, Mediterranean shoulder months — we steer you to the window that fits." },
    { title: "One team if a port changes", copy: "If a flight moves or the line substitutes a call, you are not bouncing between airline, hotel and cruise desk." },
  ],
  included: [
    "Cruise fare on major lines, in the stateroom category you choose, with main dining, buffet and entertainment included.",
    "Flights to the embarkation city, arriving the day before sailing whenever schedules allow.",
    "A hotel night near the terminal, then transfers between airport, hotel and pier.",
    "Optional extras quoted beside the fare: drinks packages, specialty dining, shore tours and travel protection.",
    "Help with cabin moves, flight changes and questions before and during the voyage.",
  ],
  steps: [
    { title: "Set the brief", copy: "Home city, dates, region, who is sailing and whether you want a balcony, connecting cabins or an accessible stateroom." },
    { title: "Compare complete packages", copy: "Your advisor builds two or three options with ship, cabin, flights, hotel and transfers on one quote." },
    { title: "Confirm and receive documents", copy: "Pay securely by phone. Itinerary, cruise documents and hotel confirmation follow by email." },
    { title: "We remain on the sailing", copy: "The same desk handles upgrades, a missed connection or a last-minute passenger change." },
  ],
  picksTitle: "Waters we book most often",
  picksCopy: "Warm-water weekends, glacier seasons and culture-heavy Mediterranean weeks — start here, then we match a ship to your dates.",
  picks: [
    { title: "Caribbean & Bahamas", copy: "Florida and Texas departures, private-island days and short first cruises that keep the flight simple.", image: media.cruiseCaribbean, imageAlt: "Turquoise water beside a white cruise ship" },
    { title: "Alaska", copy: "Seattle and Vancouver sailings, glacier days and a balcony that earns its keep. Season runs late spring through early autumn.", image: media.swissOffer, imageAlt: "Snow-capped mountains above deep water" },
    { title: "Mediterranean", copy: "Barcelona, Rome and other European home ports, with island and city calls packed into one week.", image: media.santoriniOffer, imageAlt: "Whitewashed cliffs above a blue sea" },
    { title: "Mexico, Bermuda & more", copy: "Mexican Riviera from the West Coast, Bermuda from the Northeast, plus canal, Hawaii and river itineraries on request.", image: media.maldivesOffer, imageAlt: "Tropical water and a distant shoreline" },
  ],
  knowTitle: "How a cruise holiday actually feels",
  knowItems: [
    { title: "What the fare covers", copy: "Cabin, main restaurants, buffet, theatre and most onboard activities. Drinks, specialty dining, Wi-Fi, spa, tours and daily gratuities are usually extra unless you add a package." },
    { title: "Best months", copy: "Caribbean is driest December–April. Alaska is May–September. Mediterranean is gentler in May, June, September and October. Late-summer Caribbean sits in hurricane season — ships reroute, fares are often softer." },
    { title: "Cabin choice", copy: "Inside cabins suit guests who spend the day ashore. Balconies matter more in Alaska and on scenic days at sea. Families often want connecting rooms; solo travellers can ask about studio cabins on newer ships." },
    { title: "Passports", copy: "Closed-loop US sailings can sometimes use a birth certificate plus photo ID, but a valid passport is the sensible default and is required when the trip starts or ends abroad." },
    { title: "Families and older travellers", copy: "Kids’ clubs, pools and flexible dining make large ships easy for mixed ages. Accessible cabins, elevators and staffed tours help guests who want a gentler pace." },
    { title: "When to book", copy: "Six to twelve months is comfortable for holidays, Alaska summer, balconies and groups. Quieter Caribbean months can be shorter-lead, but flights and the pre-cruise hotel are easier when booked together." },
  ],
  faqs: [
    { question: "Is a cruise all-inclusive?", answer: "The sailing fare covers a great deal of food and entertainment. Alcohol, specialty restaurants, shore tours, Wi-Fi and gratuities are typically extra. We quote those options next to the fare so the total is not a surprise onboard." },
    { question: "Do I need a passport?", answer: "Use a passport whenever you can. Some closed-loop US itineraries allow other proof of citizenship, but foreign home ports and one-way Alaska trips through Canada require a passport. We confirm the rule for your sailing." },
    { question: "Are cruises good for children?", answer: "Most large ships have age-grouped clubs, pools and children’s menus. Short Bahamas and Caribbean sailings from Florida are a common first family cruise because the flight is short." },
    { question: "How long is the flight to the port?", answer: "Florida ports are a short domestic hop from much of the East Coast and a longer one from the West. Mediterranean embarkation is an overnight from the eastern US. We fly you in the day before whenever we can." },
    { question: "What about tipping and money onboard?", answer: "Ships generally charge in US dollars to a cabin account. Daily gratuities are often added automatically and can be prepaid. A little local cash is useful in port for taxis and small tips." },
    { question: "How do I start a cruise package?", answer: `Call ${contactInfo.phoneDisplay} with dates, home city and cabin preference, or send the same notes to ${contactInfo.email}. We return complete options you can compare side by side.` },
  ],
  ctaTitle: "Ready to see a few complete sailings?",
  ctaCopy: `${COMPANY_NAME} will pair a ship with flights and the night before you board. Call ${contactInfo.phoneDisplay} or write to ${contactInfo.email}.`,
}
