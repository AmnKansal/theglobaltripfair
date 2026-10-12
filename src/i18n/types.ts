type NamedCopy = {
  title: string
  description: string
}

type DestinationCopy = {
  name: string
  country: string
}

export type Messages = {
  meta: {
    title: string
    description: string
  }
  seo: {
    home: { title: string; description: string }
    flights: { title: string; description: string }
    hotels: { title: string; description: string }
    holidays: { title: string; description: string }
    transfers: { title: string; description: string }
    cars: { title: string; description: string }
    cruises: { title: string; description: string }
    trains: { title: string; description: string }
    destinations: { title: string; description: string }
    contact: { title: string; description: string }
    about: { title: string; description: string }
    privacy: { title: string; description: string }
    terms: { title: string; description: string }
    cancellation: { title: string; description: string }
    cookies: { title: string; description: string }
    disclaimer: { title: string; description: string }
    advertising: { title: string; description: string }
    notFound: { title: string; description: string }
    maintenance: { title: string; description: string }
  }
  a11y: {
    skipToContent: string
    primaryNav: string
    openMenu: string
    closeMenu: string
    selectLanguage: string
    home: string
    travelSearch: string
    menu: string
    callUs: string
    callTrains: string
    close: string
  }
  common: {
    planTrip: string
    planJourney: string
    talkToUs: string
    search: string
    explore: string
    sendMessage: string
    backHome: string
    exploreDestinations: string
    travelHelp: string
    talkToSpecialist: string
    reservations: string
    trainReservations: string
  }
  nav: {
    flights: string
    hotels: string
    holidays: string
    transfers: string
    cruises: string
    cars: string
    trains: string
    cabs: string
    destinations: string
    offers: string
    callForReservations: string
    callForTrainReservations: string
  }
  hero: {
    titleLine1: string
    titleLine2: string
    description: string
    imageAlt: string
  }
  search: {
    flights: string
    hotels: string
    holidays: string
    transfers: string
    from: string
    to: string
    departure: string
    return: string
    travellers: string
    destination: string
    checkIn: string
    checkOut: string
    guests: string
    month: string
    duration: string
    pickup: string
    dropoff: string
    date: string
    passengers: string
    cityOrAirport: string
    cityOrHotel: string
    whereTo: string
    pickupPlaceholder: string
    dropoffPlaceholder: string
    oneAdult: string
    twoTravellers: string
    threeTravellers: string
    fourTravellers: string
    threeNights: string
    sevenNights: string
    tenNights: string
    fourteenNights: string
    suggestions: string
    searchingPlaces: string
    noSuggestions: string
    optional: string
    swap: string
    submit: string
    adults: string
    adultsHint: string
    children: string
    childrenHint: string
    done: string
    partySummary: string
    decrease: string
    increase: string
    errors: {
      requiredFrom: string
      requiredTo: string
      sameRoute: string
      requiredDeparture: string
      pastDate: string
      returnBefore: string
      requiredDestination: string
      requiredCheckIn: string
      requiredCheckOut: string
      checkOutBefore: string
      requiredMonth: string
      requiredPickup: string
      requiredDropoff: string
      sameTransfer: string
      requiredDate: string
      requiredParty: string
    }
  }
  maintenance: {
    eyebrow: string
    title: string
    copy: string
    received: string
    callCta: string
    emailCta: string
    adjust: string
  }
  services: {
    eyebrow: string
    title: string
    copy: string
    flights: NamedCopy
    hotels: NamedCopy
    holidays: NamedCopy
    transfers: NamedCopy
    cruises: NamedCopy
    cars: NamedCopy
    trains: NamedCopy
    cabs: NamedCopy
    activities: NamedCopy
    insurance: NamedCopy
  }
  servicePage: {
    callNow: string
    callTrains: string
    requestQuote: string
    featured: string
    included: string
    includedTitle: string
    howItWorks: string
    stepsTitle: string
    goodToKnow: string
    faq: string
    related: string
  }
  destinations: {
    eyebrow: string
    title: string
    copy: string
    paris: DestinationCopy
    dubai: DestinationCopy
    london: DestinationCopy
    singapore: DestinationCopy
    bali: DestinationCopy
    newYork: DestinationCopy
  }
  whyUs: {
    eyebrow: string
    title: string
    copy: string
    together: NamedCopy
    global: NamedCopy
    simple: NamedCopy
    support: NamedCopy
    discover: NamedCopy
    plan: NamedCopy
    travel: NamedCopy
  }
  choose: {
    eyebrow: string
    title: string
    copy: string
    statement: string
    networkEyebrow: string
    networkTitle: string
    networkCopy: string
    services: string
    servicesCopy: string
    team: string
    teamCopy: string
    lines: string
    linesCopy: string
    languages: string
    languagesCopy: string
  }
  stories: {
    eyebrow: string
    title: string
    copy: string
    prev: string
    next: string
    carouselLabel: string
    slideOf: string
    ratingLabel: string
    goTo: string
    trip: {
      flights: string
      hotels: string
      holidays: string
      transfers: string
      international: string
      family: string
    }
    items: {
      flights: string
      flightsReturn: string
      flightsLongHaul: string
      flightsTiming: string
      flightsChange: string
      hotels: string
      holidays: string
      transfers: string
      international: string
      family: string
    }
  }
  promotion: {
    title: string
    copy: string
  }
  footer: {
    tagline: string
    company: string
    travel: string
    support: string
    about: string
    contact: string
    careers: string
    blog: string
    help: string
    manageBooking: string
    cancellation: string
    terms: string
    privacy: string
    legal: string
    cookies: string
    disclaimer: string
    advertising: string
    operatorNote: string
    rights: string
    explore: string
    popularDestinations: string
    inspiration: string
    guides: string
    tips: string
    offers: string
    creditBy: string
    creditLove: string
    creditLoveWord: string
    contactHeading: string
  }
  reach: {
    eyebrow: string
    title: string
    copy: string
    call: string
    callCopy: string
    callCta: string
    callTrains: string
    callTrainsCopy: string
    callTrainsCta: string
    email: string
    emailCopy: string
    emailCta: string
    visit: string
    visitCopy: string
    visitCta: string
  }
  contact: {
    title: string
    copy: string
    name: string
    namePlaceholder: string
    email: string
    emailPlaceholder: string
    interest: string
    other: string
    message: string
    messagePlaceholder: string
    successTitle: string
    successCopy: string
  }
  categories: {
    bookingLead: string
    bookingBody: string
    flightsTitle: string
    flightsCopy: string
    flightsImageAlt: string
    hotelsTitle: string
    hotelsCopy: string
    hotelsImageAlt: string
    holidaysTitle: string
    holidaysCopy: string
    holidaysImageAlt: string
    transfersTitle: string
    transfersCopy: string
    transfersImageAlt: string
  }
  comingSoon: {
    eyebrow: string
    cruisesTitle: string
    cruisesCopy: string
    cabsTitle: string
    cabsCopy: string
    activitiesTitle: string
    activitiesCopy: string
    insuranceTitle: string
    insuranceCopy: string
  }
  pages: {
    aboutTitle: string
    aboutCopy: string
    careersTitle: string
    careersCopy: string
    blogTitle: string
    blogCopy: string
    helpTitle: string
    helpCopy: string
    bookingTitle: string
    bookingCopy: string
    cancellationTitle: string
    cancellationCopy: string
    destinationsTitle: string
    destinationsCopy: string
    inspirationTitle: string
    inspirationCopy: string
    guidesTitle: string
    guidesCopy: string
    tipsTitle: string
    tipsCopy: string
    offersTitle: string
    offersCopy: string
    termsTitle: string
    termsCopy: string
    privacyTitle: string
    privacyCopy: string
    cookiesTitle: string
    cookiesCopy: string
    disclaimerTitle: string
    disclaimerCopy: string
    advertisingTitle: string
    advertisingCopy: string
  }
  legal: {
    eyebrow: string
    onThisPage: string
    lastUpdated: string
    operatedBy: string
    related: string
    questions: string
    questionsCopy: string
  }
  notFound: {
    title: string
    copy: string
  }
}
