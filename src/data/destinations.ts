import { media } from "./media"

export type Destination = {
  id: "paris" | "dubai" | "london" | "singapore" | "bali" | "newYork"
  image: string
  to: string
}

export const destinations: Destination[] = [
  { id: "paris", image: media.paris, to: "/holidays" },
  { id: "dubai", image: media.dubai, to: "/hotels" },
  { id: "london", image: media.london, to: "/flights" },
  { id: "singapore", image: media.singapore, to: "/hotels" },
  { id: "bali", image: media.bali, to: "/holidays" },
  { id: "newYork", image: media.newYork, to: "/flights" },
]
