import type { SearchTab } from "../components/travel/SearchCard"
import { media } from "./media"

export type CategoryKind = "flights" | "hotels" | "holidays" | "transfers"

type CategoryContent = {
  tab: SearchTab
  image: string
}

export const categories: Record<CategoryKind, CategoryContent> = {
  flights: { tab: "flights", image: media.flights },
  hotels: { tab: "hotels", image: media.hotels },
  holidays: { tab: "holidays", image: media.holidays },
  transfers: { tab: "transfers", image: media.transfers },
}
