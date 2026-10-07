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

/** Dedicated US train reservations TFN. */
export const TRAINS_PHONE_DISPLAY = "888-720-0121"

export const contactInfo = {
  phoneDisplay: MAIN_PHONE_DISPLAY,
  phoneHref: toTelHref(MAIN_PHONE_DISPLAY),
  trainsPhoneDisplay: TRAINS_PHONE_DISPLAY,
  trainsPhoneHref: toTelHref(TRAINS_PHONE_DISPLAY),
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

export const contactAddressQuery = `${contactInfo.address.street}, ${contactInfo.address.city}, ${contactInfo.address.state} ${contactInfo.address.zip}, ${contactInfo.address.country}`

export const contactMapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactAddressQuery)}`

export const contactCityLine = `${contactInfo.address.city}, ${contactInfo.address.state}`
