export const contactInfo = {
  phoneDisplay: "888-404-0651",
  phoneHref: "tel:+18884040651",
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

export const contactAddressQuery = `${contactInfo.address.street}, ${contactInfo.address.city}, ${contactInfo.address.state} ${contactInfo.address.zip}, ${contactInfo.address.country}`

export const contactMapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactAddressQuery)}`

export const contactCityLine = `${contactInfo.address.city}, ${contactInfo.address.state}`
