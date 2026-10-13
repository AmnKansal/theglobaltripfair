import type { PlaceRef } from "../search"

export type FlightFaq = {
  question: string
  answer: string
}

export type FlightAirport = {
  code: string
  name: string
  note?: string
}

/** `text` is the full sentence; when it starts with `when`, that lead is set in bold. */
export type FlightSeason = {
  when: string
  text: string
}

export type DestinationFlightDoc = {
  slug: string
  /** Full name used in headings, e.g. "New York City". */
  city: string
  /** Short name used in links, e.g. "New York". */
  shortName: string
  /** Prefills the "To" field of the quote form. */
  place: PlaceRef
  heroImage: string
  heroAlt: string
  title: string
  lead: string
  intro: string[]
  whyVisit: string[]
  attractions: string[]
  airportsIntro: string
  airports: FlightAirport[]
  seasonsIntro: string
  seasons: FlightSeason[]
  tipsIntro: string
  tips: string[]
  faqs: FlightFaq[]
  ctaTitle: string
  ctaCopy: string
  seoTitle: string
  seoDescription: string
}

export type FlightDeal = {
  title: string
  copy: string
  /** A matching flight page, when one exists. */
  to?: string
}

export type FlightTypeDoc = {
  slug: string
  /** Short label used in links, e.g. "Domestic flights". */
  name: string
  /** Lowercase noun used inside sentences, e.g. "domestic flight". */
  noun: string
  heroImage: string
  heroAlt: string
  title: string
  lead: string
  intro: string[]
  whyTitle: string
  whyCopy: string
  why: string[]
  dealsTitle: string
  dealsCopy: string
  deals: FlightDeal[]
  findTitle: string
  findCopy: string
  findTips: string[]
  bestTimeTitle: string
  bestTimeCopy: string
  bestTime: string[]
  destinationsTitle: string
  destinationsCopy: string
  destinations: string[]
  routesTitle: string
  routesCopy: string
  /** Each route lists its stops in order: ["Los Angeles", "New York"]. */
  routes: string[][]
  faqs: FlightFaq[]
  ctaTitle: string
  ctaCopy: string
  seoTitle: string
  seoDescription: string
}
