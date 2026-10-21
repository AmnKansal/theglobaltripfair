import { BRAND_NAME } from "../legal/brand"
import { contactInfo } from "../contact"
import { destinationFlightPages } from "./destinations"
import { flightTypePages } from "./flightTypes"

export type { DestinationFlightDoc, FlightTypeDoc, FlightFaq, FlightSeason } from "./types"
export { destinationFlightPages, flightTypePages }

/** Keyword URLs that match each page heading, e.g. /flights/cheap-flights-to-los-angeles. */
export const destinationFlightPath = (slug: string) => `/flights/cheap-flights-to-${slug}`
export const flightTypePath = (slug: string) => `/flights/${slug}`

export const getDestinationFlightPage = (slug?: string) =>
  destinationFlightPages.find((doc) => doc.slug === slug)

export const getFlightTypePage = (slug?: string) => flightTypePages.find((doc) => doc.slug === slug)

export const destinationFlightLinks = destinationFlightPages.map((doc) => ({
  slug: doc.slug,
  to: destinationFlightPath(doc.slug),
  label: `Flights to ${doc.shortName}`,
  city: doc.shortName,
}))

export const flightTypeLinks = flightTypePages.map((doc) => ({
  slug: doc.slug,
  to: flightTypePath(doc.slug),
  label: doc.name,
}))

/**
 * IATA codes for the cities named in routes and destination lists.
 * Metropolitan codes (NYC, LON, PAR…) are used where a city has several airports.
 */
const cityCodes: Record<string, string> = {
  "New York": "NYC",
  "Los Angeles": "LAX",
  Chicago: "CHI",
  Miami: "MIA",
  "Las Vegas": "LAS",
  Orlando: "MCO",
  "San Francisco": "SFO",
  Seattle: "SEA",
  Dallas: "DFW",
  Atlanta: "ATL",
  Houston: "HOU",
  Denver: "DEN",
  Boston: "BOS",
  Washington: "WAS",
  London: "LON",
  Dubai: "DXB",
  Paris: "PAR",
  Toronto: "YTO",
  Singapore: "SIN",
  Tokyo: "TYO",
  Sydney: "SYD",
  Bangkok: "BKK",
  Frankfurt: "FRA",
  Melbourne: "MEL",
  Delhi: "DEL",
  Mumbai: "BOM",
  Rome: "ROM",
  Amsterdam: "AMS",
}

export const cityCode = (city: string) => cityCodes[city] ?? ""

/** The destination flight page for a city, when one exists. */
export const cityFlightPath = (city: string) => {
  const doc = destinationFlightPages.find((page) => page.shortName === city)
  return doc ? destinationFlightPath(doc.slug) : undefined
}

export type BookingStep = { title: string; copy: string }

const phone = contactInfo.phoneDisplay

/** The quote form records the trip, then the travel team prices and books it. */
export const onlineBookingSteps = (noun: string): BookingStep[] => [
  { title: "Enter your trip", copy: "Add your departure city, destination, dates and travelers in the quote form at the top of this page." },
  { title: "Check your trip summary", copy: "We show the details you entered so you can review them before you contact us." },
  { title: "Get your quote", copy: `Call ${phone} or email ${contactInfo.email}. An advisor checks current ${noun} fares and schedules for your dates.` },
  { title: "Confirm and travel", copy: "Your advisor reads back the itinerary and the full total, service fee included, before you pay. Your confirmation follows by email." },
]

export const phoneBookingSteps: BookingStep[] = [
  { title: `Call ${phone}`, copy: "Connect with a travel specialist and share your route, dates, travelers and budget." },
  { title: "Review the options", copy: "Your advisor compares the available flights and fares and explains the trade-offs." },
  { title: "Choose your itinerary", copy: "Pick the flights that suit you. Dates and times can still change before anything is booked." },
  { title: "Complete your booking", copy: "We confirm the total before you pay and send the confirmation by email." },
]

export const whyBookWithUs: string[] = [
  "Competitive fares for every travel budget, compared for your dates.",
  "One advisor for the search, the comparison and the booking.",
  "One-way, round-trip and multi-city options.",
  "Flight choices across major airlines, with schedules explained.",
  "The full total, service fee included, before you pay.",
  "Support by phone and email before and after you book.",
]

export const flightNotice = `${BRAND_NAME} is an independent travel booking service and is not affiliated with any airline or airport. Fares, schedules and availability are confirmed with the airline when you book, and any service fee is included in the total we quote before you pay.`
