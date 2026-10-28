import { cruisesPage } from "./cruises"
import { hotelsPage } from "./hotels"
import { trainsPage } from "./trains"
import type { ServiceDoc, ServicePageSlug } from "./types"

export type { ServiceDoc, ServicePageSlug } from "./types"

export const servicePages: Record<ServicePageSlug, ServiceDoc> = {
  hotels: hotelsPage,
  cruises: cruisesPage,
  trains: trainsPage,
}

export const getServicePage = (slug: ServicePageSlug) => servicePages[slug]

/** Cross-links between the service pages. Car rentals has its own page at /car-rentals but is linked here too. */
export const servicePageLinks: { to: string; labelKey: string }[] = [
  { to: "/hotels", labelKey: "nav.hotels" },
  { to: "/car-rentals", labelKey: "nav.cars" },
  { to: "/cruises", labelKey: "nav.cruises" },
  { to: "/trains", labelKey: "nav.trains" },
]
