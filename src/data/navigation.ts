export type NavLinkItem = {
  labelKey: string
  to: string
}

export const primaryNav: NavLinkItem[] = [
  { labelKey: "nav.flights", to: "/flights" },
  { labelKey: "nav.hotels", to: "/hotels" },
  { labelKey: "nav.cars", to: "/cars" },
  { labelKey: "nav.cruises", to: "/cruises" },
  { labelKey: "nav.trains", to: "/trains" },
]

export const moreNav: NavLinkItem[] = [
  { labelKey: "nav.holidays", to: "/holidays" },
  { labelKey: "nav.transfers", to: "/transfers" },
  { labelKey: "nav.destinations", to: "/destinations" },
  { labelKey: "nav.offers", to: "/offers" },
]

export const footerTravelNav: NavLinkItem[] = [
  ...primaryNav,
  { labelKey: "nav.holidays", to: "/holidays" },
  { labelKey: "nav.transfers", to: "/transfers" },
]

export const exploreNav: NavLinkItem[] = [
  { labelKey: "footer.popularDestinations", to: "/destinations" },
  { labelKey: "footer.inspiration", to: "/inspiration" },
  { labelKey: "footer.guides", to: "/guides" },
  { labelKey: "footer.tips", to: "/tips" },
  { labelKey: "footer.offers", to: "/offers" },
]
