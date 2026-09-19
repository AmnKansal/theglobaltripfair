/** Sample testimonials for the UI. Replace with verified reviews when a real source exists. */
export type AvatarTone = "sand" | "blush" | "mist" | "stone"

export type Testimonial = {
  id: string
  name: string
  initials: string
  location: string
  rating: number
  textKey: string
  tripTypeKey: string
  tone: AvatarTone
  verified?: boolean
}

export const TESTIMONIAL_AUTOPLAY_MS = 6000

export const testimonials: Testimonial[] = [
  {
    id: "review-1",
    name: "A. K.",
    initials: "AK",
    location: "Paris, France",
    rating: 5,
    textKey: "stories.items.holidays",
    tripTypeKey: "stories.trip.holidays",
    tone: "blush",
  },
  {
    id: "review-2",
    name: "M. R.",
    initials: "MR",
    location: "London, United Kingdom",
    rating: 5,
    textKey: "stories.items.flights",
    tripTypeKey: "stories.trip.flights",
    tone: "mist",
  },
  {
    id: "review-7",
    name: "H. J.",
    initials: "HJ",
    location: "New York, United States",
    rating: 5,
    textKey: "stories.items.flightsReturn",
    tripTypeKey: "stories.trip.flights",
    tone: "sand",
  },
  {
    id: "review-3",
    name: "S. T.",
    initials: "ST",
    location: "Singapore",
    rating: 5,
    textKey: "stories.items.hotels",
    tripTypeKey: "stories.trip.hotels",
    tone: "sand",
  },
  {
    id: "review-8",
    name: "D. W.",
    initials: "DW",
    location: "Zurich, Switzerland",
    rating: 5,
    textKey: "stories.items.flightsLongHaul",
    tripTypeKey: "stories.trip.flights",
    tone: "stone",
  },
  {
    id: "review-4",
    name: "L. P.",
    initials: "LP",
    location: "Dubai, United Arab Emirates",
    rating: 5,
    textKey: "stories.items.transfers",
    tripTypeKey: "stories.trip.transfers",
    tone: "stone",
  },
  {
    id: "review-9",
    name: "R. F.",
    initials: "RF",
    location: "Amsterdam, Netherlands",
    rating: 5,
    textKey: "stories.items.flightsTiming",
    tripTypeKey: "stories.trip.flights",
    tone: "blush",
  },
  {
    id: "review-5",
    name: "N. V.",
    initials: "NV",
    location: "Tokyo, Japan",
    rating: 5,
    textKey: "stories.items.international",
    tripTypeKey: "stories.trip.international",
    tone: "blush",
  },
  {
    id: "review-10",
    name: "I. B.",
    initials: "IB",
    location: "Rome, Italy",
    rating: 5,
    textKey: "stories.items.flightsChange",
    tripTypeKey: "stories.trip.flights",
    tone: "mist",
  },
  {
    id: "review-6",
    name: "E. C.",
    initials: "EC",
    location: "Barcelona, Spain",
    rating: 5,
    textKey: "stories.items.family",
    tripTypeKey: "stories.trip.family",
    tone: "mist",
  },
]
