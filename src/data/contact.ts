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

export const MAIN_PHONE_DISPLAY = "888-404-0651"

/** Dedicated car-rental TFN. Set this when the new number is confirmed. */
export const CARS_PHONE_DISPLAY = ""

export const contactInfo = {
  phoneDisplay: MAIN_PHONE_DISPLAY,
  phoneHref: toTelHref(MAIN_PHONE_DISPLAY),
  carsPhoneDisplay: CARS_PHONE_DISPLAY,
  carsPhoneHref: toTelHref(CARS_PHONE_DISPLAY),
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

export const hasCarsPhone = toE164(CARS_PHONE_DISPLAY).length >= 12

export const carsDeskPhoneDisplay = hasCarsPhone
  ? contactInfo.carsPhoneDisplay
  : contactInfo.phoneDisplay

export const carsDeskPhoneHref = hasCarsPhone ? contactInfo.carsPhoneHref : contactInfo.phoneHref

export const isCarsPath = (pathname: string) => pathname === "/cars" || pathname === "/cabs"

export const contactAddressQuery = `${contactInfo.address.street}, ${contactInfo.address.city}, ${contactInfo.address.state} ${contactInfo.address.zip}, ${contactInfo.address.country}`

export const contactMapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactAddressQuery)}`

export const contactCityLine = `${contactInfo.address.city}, ${contactInfo.address.state}`
