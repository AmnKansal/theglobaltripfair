import { carsPage } from "./cars"
import { cruisesPage } from "./cruises"
import { hotelsPage } from "./hotels"
import { trainsPage } from "./trains"
import type { ServiceDoc, ServicePageSlug } from "./types"

export type { ServiceDoc, ServicePageSlug } from "./types"

export const servicePages: Record<ServicePageSlug, ServiceDoc> = {
  hotels: hotelsPage,
  cars: carsPage,
  cruises: cruisesPage,
  trains: trainsPage,
}

export const getServicePage = (slug: ServicePageSlug) => servicePages[slug]

export const servicePageLinks: { slug: ServicePageSlug; to: string; labelKey: string }[] = [
  { slug: "hotels", to: "/hotels", labelKey: "nav.hotels" },
  { slug: "cars", to: "/cars", labelKey: "nav.cars" },
  { slug: "cruises", to: "/cruises", labelKey: "nav.cruises" },
  { slug: "trains", to: "/trains", labelKey: "nav.trains" },
]
