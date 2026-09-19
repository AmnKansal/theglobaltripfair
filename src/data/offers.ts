import { media } from "./media"

export type OfferCategory = "flights" | "hotels" | "holidays" | "transfers"
export type OfferBadge = "limited" | "hot" | "flash" | "value" | "early"
export type OfferImageFit = "cover" | "contain"

export const OFFER_AUTOPLAY_MS = 6000

export type TravelOffer = {
  id: string
  category: OfferCategory
  locationKey: string
  titleKey: string
  descriptionKey: string
  altKey: string
  image: string
  imagePosition: string
  imageFit: OfferImageFit
  expiresAt: string
  badge: OfferBadge
  availableSpots: number | null
  to: string
}

export const offers: TravelOffer[] = [
  {
    id: "parisEscape",
    category: "holidays",
    locationKey: "offers.items.parisEscape.location",
    titleKey: "offers.items.parisEscape.title",
    descriptionKey: "offers.items.parisEscape.description",
    altKey: "offers.items.parisEscape.alt",
    image: media.parisOffer,
    imagePosition: "center 18%",
    imageFit: "contain",
    expiresAt: "2026-10-15T18:30:00.000Z",
    badge: "limited",
    availableSpots: 7,
    to: "/holidays",
  },
  {
    id: "maldivesAtoll",
    category: "hotels",
    locationKey: "offers.items.maldivesAtoll.location",
    titleKey: "offers.items.maldivesAtoll.title",
    descriptionKey: "offers.items.maldivesAtoll.description",
    altKey: "offers.items.maldivesAtoll.alt",
    image: media.maldivesOffer,
    imagePosition: "center 58%",
    imageFit: "cover",
    expiresAt: "2026-10-09T12:00:00.000Z",
    badge: "hot",
    availableSpots: 5,
    to: "/hotels",
  },
  {
    id: "dubaiSkyline",
    category: "holidays",
    locationKey: "offers.items.dubaiSkyline.location",
    titleKey: "offers.items.dubaiSkyline.title",
    descriptionKey: "offers.items.dubaiSkyline.description",
    altKey: "offers.items.dubaiSkyline.alt",
    image: media.dubaiOffer,
    imagePosition: "58% 28%",
    imageFit: "cover",
    expiresAt: "2026-10-22T08:00:00.000Z",
    badge: "value",
    availableSpots: 12,
    to: "/holidays",
  },
  {
    id: "baliRetreat",
    category: "holidays",
    locationKey: "offers.items.baliRetreat.location",
    titleKey: "offers.items.baliRetreat.title",
    descriptionKey: "offers.items.baliRetreat.description",
    altKey: "offers.items.baliRetreat.alt",
    image: media.baliOffer,
    imagePosition: "center 38%",
    imageFit: "cover",
    expiresAt: "2026-10-06T16:45:00.000Z",
    badge: "flash",
    availableSpots: 6,
    to: "/holidays",
  },
  {
    id: "swissAlps",
    category: "flights",
    locationKey: "offers.items.swissAlps.location",
    titleKey: "offers.items.swissAlps.title",
    descriptionKey: "offers.items.swissAlps.description",
    altKey: "offers.items.swissAlps.alt",
    image: media.swissOffer,
    imagePosition: "center 42%",
    imageFit: "cover",
    expiresAt: "2026-11-04T09:00:00.000Z",
    badge: "early",
    availableSpots: null,
    to: "/flights",
  },
  {
    id: "santoriniBlue",
    category: "hotels",
    locationKey: "offers.items.santoriniBlue.location",
    titleKey: "offers.items.santoriniBlue.title",
    descriptionKey: "offers.items.santoriniBlue.description",
    altKey: "offers.items.santoriniBlue.alt",
    image: media.santoriniOffer,
    imagePosition: "center 46%",
    imageFit: "cover",
    expiresAt: "2026-10-18T14:20:00.000Z",
    badge: "hot",
    availableSpots: 3,
    to: "/hotels",
  },
  {
    id: "tokyoNights",
    category: "flights",
    locationKey: "offers.items.tokyoNights.location",
    titleKey: "offers.items.tokyoNights.title",
    descriptionKey: "offers.items.tokyoNights.description",
    altKey: "offers.items.tokyoNights.alt",
    image: media.tokyoOffer,
    imagePosition: "center 40%",
    imageFit: "cover",
    expiresAt: "2026-09-19T08:00:00.000Z",
    badge: "flash",
    availableSpots: 8,
    to: "/flights",
  },
  {
    id: "londonTransfer",
    category: "transfers",
    locationKey: "offers.items.londonTransfer.location",
    titleKey: "offers.items.londonTransfer.title",
    descriptionKey: "offers.items.londonTransfer.description",
    altKey: "offers.items.londonTransfer.alt",
    image: media.londonOffer,
    imagePosition: "center 22%",
    imageFit: "cover",
    expiresAt: "2026-10-28T10:00:00.000Z",
    badge: "value",
    availableSpots: 14,
    to: "/transfers",
  },
  {
    id: "singaporeStay",
    category: "hotels",
    locationKey: "offers.items.singaporeStay.location",
    titleKey: "offers.items.singaporeStay.title",
    descriptionKey: "offers.items.singaporeStay.description",
    altKey: "offers.items.singaporeStay.alt",
    image: media.singaporeOffer,
    imagePosition: "center 36%",
    imageFit: "cover",
    expiresAt: "2026-10-30T00:00:00.000Z",
    badge: "early",
    availableSpots: 9,
    to: "/hotels",
  },
  {
    id: "newYorkLights",
    category: "flights",
    locationKey: "offers.items.newYorkLights.location",
    titleKey: "offers.items.newYorkLights.title",
    descriptionKey: "offers.items.newYorkLights.description",
    altKey: "offers.items.newYorkLights.alt",
    image: media.newYorkOffer,
    imagePosition: "center 40%",
    imageFit: "cover",
    expiresAt: "2026-09-16T00:00:00.000Z",
    badge: "limited",
    availableSpots: 4,
    to: "/flights",
  },
]

