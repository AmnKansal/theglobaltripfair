export function toE164(display: string): string {
  const digits = display.replace(/\D/g, "")
  if (!digits) return ""
  if (digits.startsWith("1") && digits.length === 11) return `+${digits}`
  if (digits.length === 10) return `+1${digits}`
  return `+${digits}`
}

export function toTelHref(display: string): string {
  const e164 = toE164(display)
  return e164 ? `tel:${e164}` : ""
}

/** "888-404-0651" -> "+1 888-404-0651" for US numbers. */
export function toInternationalDisplay(display: string): string {
  return display.replace(/\D/g, "").length === 10 ? `+1 ${display}` : display
}

export const MAIN_PHONE_DISPLAY = "888-404-0651"

/** Dedicated US train reservations TFN. */
export const TRAINS_PHONE_DISPLAY = "888-720-0121"

/** Dedicated car rentals number, shown in international format on the car rental page. */
export const CARS_PHONE_DISPLAY = "+1 (463) 277-4701"

/** Dedicated hotel reservations TFN, shown in international format on the hotels page. */
export const HOTELS_PHONE_DISPLAY = "+1 (888) 647-0631"

export const contactInfo = {
  phoneDisplay: MAIN_PHONE_DISPLAY,
  phoneHref: toTelHref(MAIN_PHONE_DISPLAY),
  trainsPhoneDisplay: TRAINS_PHONE_DISPLAY,
  trainsPhoneHref: toTelHref(TRAINS_PHONE_DISPLAY),
  carsPhoneDisplay: CARS_PHONE_DISPLAY,
  carsPhoneHref: toTelHref(CARS_PHONE_DISPLAY),
  hotelsPhoneDisplay: HOTELS_PHONE_DISPLAY,
  hotelsPhoneHref: toTelHref(HOTELS_PHONE_DISPLAY),
  email: "support@theglobaltripfair.com",
  emailHref: "mailto:support@theglobaltripfair.com",
  address: {
    street: "980 Creek Way Lane",
    city: "Greenwood",
    state: "Indiana",
    zip: "46143",
    country: "United States",
    countryCode: "US",
  },
} as const

export const hasTrainsPhone = toE164(TRAINS_PHONE_DISPLAY).length >= 12

export const trainsDeskPhoneDisplay = hasTrainsPhone
  ? contactInfo.trainsPhoneDisplay
  : contactInfo.phoneDisplay

export const trainsDeskPhoneHref = hasTrainsPhone ? contactInfo.trainsPhoneHref : contactInfo.phoneHref

export const isTrainsPath = (pathname: string) => pathname === "/trains"

export const hasCarsPhone = toE164(CARS_PHONE_DISPLAY).length >= 12

export const carsDeskPhoneDisplay = hasCarsPhone ? contactInfo.carsPhoneDisplay : contactInfo.phoneDisplay

export const isCarsPath = (pathname: string) => pathname === "/car-rentals"

export const hasHotelsPhone = toE164(HOTELS_PHONE_DISPLAY).length >= 12

export const hotelsDeskPhoneDisplay = hasHotelsPhone ? contactInfo.hotelsPhoneDisplay : contactInfo.phoneDisplay

export const isHotelsPath = (pathname: string) => pathname === "/hotels"

/**
 * The phone lines every page lists in its footer. vite.config.ts writes the same numbers into
 * the HTML shell, because Google Ads only approves a call-asset number it can find on the page.
 */
export const footerPhoneLines = [
  { display: contactInfo.phoneDisplay, href: contactInfo.phoneHref, labelKey: "common.reservations", callKey: "a11y.callUs" },
  ...(hasTrainsPhone
    ? [{ display: contactInfo.trainsPhoneDisplay, href: contactInfo.trainsPhoneHref, labelKey: "common.trainReservations", callKey: "a11y.callTrains" }]
    : []),
  ...(hasCarsPhone
    ? [{ display: contactInfo.carsPhoneDisplay, href: contactInfo.carsPhoneHref, labelKey: "common.carRentals", callKey: "a11y.callCarRentals" }]
    : []),
  ...(hasHotelsPhone
    ? [{ display: contactInfo.hotelsPhoneDisplay, href: contactInfo.hotelsPhoneHref, labelKey: "common.hotelReservations", callKey: "a11y.callHotels" }]
    : []),
]

export const contactAddressQuery = `${contactInfo.address.street}, ${contactInfo.address.city}, ${contactInfo.address.state} ${contactInfo.address.zip}, ${contactInfo.address.country}`

export const contactMapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactAddressQuery)}`

export const contactCityLine = `${contactInfo.address.city}, ${contactInfo.address.state}`

/** The office country in the page language, e.g. "Estados Unidos" on the Spanish homepage. */
export function contactCountryName(lang: string): string {
  try {
    return (
      new Intl.DisplayNames([lang], { type: "region" }).of(contactInfo.address.countryCode) ??
      contactInfo.address.country
    )
  } catch {
    return contactInfo.address.country
  }
}
