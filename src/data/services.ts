import { media } from "./media"

export type ServiceCard = {
  id: "flights" | "hotels" | "holidays" | "transfers"
  to: string
  icon: "plane" | "hotel" | "palm" | "car"
  image: string
}

export type UpcomingService = {
  id: "cruises" | "cabs" | "activities" | "insurance"
  to: string
  icon: "ship" | "cab" | "ticket" | "shield"
}

export const services: ServiceCard[] = [
  { id: "flights", to: "/flights", icon: "plane", image: media.flights },
  { id: "hotels", to: "/hotels", icon: "hotel", image: media.hotels },
  { id: "holidays", to: "/holidays", icon: "palm", image: media.holidays },
  { id: "transfers", to: "/transfers", icon: "car", image: media.transfers },
]

export const upcomingServices: UpcomingService[] = [
  { id: "cruises", to: "/cruises", icon: "ship" },
  { id: "cabs", to: "/cabs", icon: "cab" },
  { id: "activities", to: "/activities", icon: "ticket" },
  { id: "insurance", to: "/insurance", icon: "shield" },
]
