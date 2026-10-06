import { media } from "./media"

export type ServiceCard = {
  id: "flights" | "hotels" | "cars" | "cruises" | "trains" | "holidays"
  to: string
  icon: "plane" | "hotel" | "car" | "ship" | "train" | "palm"
  image: string
}

export type UpcomingService = {
  id: "transfers" | "activities" | "insurance"
  to: string
  icon: "car" | "ticket" | "shield"
}

export const services: ServiceCard[] = [
  { id: "flights", to: "/flights", icon: "plane", image: media.flights },
  { id: "hotels", to: "/hotels", icon: "hotel", image: media.hotels },
  { id: "cars", to: "/cars", icon: "car", image: media.carsSuv },
  { id: "cruises", to: "/cruises", icon: "ship", image: media.cruises },
  { id: "trains", to: "/trains", icon: "train", image: media.trains },
  { id: "holidays", to: "/holidays", icon: "palm", image: media.holidays },
]

export const upcomingServices: UpcomingService[] = [
  { id: "transfers", to: "/transfers", icon: "car" },
  { id: "activities", to: "/activities", icon: "ticket" },
  { id: "insurance", to: "/insurance", icon: "shield" },
]
