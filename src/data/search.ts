export type SearchTab = "flights" | "hotels" | "holidays" | "transfers"

export type PlaceKind = "city" | "airport" | "place"

export type PlaceRef = {
  id: string
  name: string
  subtitle: string
  code?: string
  kind: PlaceKind
  country?: string
  countryCode?: string
}

export type Party = {
  adults: number
  children: number
}

export type FlightSearch = {
  type: "flights"
  from: PlaceRef | null
  to: PlaceRef | null
  departure: string
  returnDate: string
  party: Party
}

export type HotelSearch = {
  type: "hotels"
  destination: PlaceRef | null
  checkIn: string
  checkOut: string
  party: Party
}

export type HolidaySearch = {
  type: "holidays"
  destination: PlaceRef | null
  month: string
  durationNights: number
  party: Party
}

export type TransferSearch = {
  type: "transfers"
  pickup: PlaceRef | null
  dropoff: PlaceRef | null
  date: string
  party: Party
}

export type SearchRequest = FlightSearch | HotelSearch | HolidaySearch | TransferSearch

export const LAST_SEARCH_KEY = "tgtf.lastSearch"

export const defaultParty = (): Party => ({ adults: 2, children: 0 })

export const emptyFlight = (): FlightSearch => ({
  type: "flights",
  from: null,
  to: null,
  departure: "",
  returnDate: "",
  party: defaultParty(),
})

export const emptyHotel = (): HotelSearch => ({
  type: "hotels",
  destination: null,
  checkIn: "",
  checkOut: "",
  party: defaultParty(),
})

export const emptyHoliday = (): HolidaySearch => ({
  type: "holidays",
  destination: null,
  month: "",
  durationNights: 7,
  party: defaultParty(),
})

export const emptyTransfer = (): TransferSearch => ({
  type: "transfers",
  pickup: null,
  dropoff: null,
  date: "",
  party: defaultParty(),
})

export const emptySearchByType = (type: SearchTab): SearchRequest => {
  if (type === "hotels") return emptyHotel()
  if (type === "holidays") return emptyHoliday()
  if (type === "transfers") return emptyTransfer()
  return emptyFlight()
}

export const partyTotal = (party: Party) => party.adults + party.children

export const persistLastSearch = (request: SearchRequest) => {
  try {
    window.sessionStorage.setItem(LAST_SEARCH_KEY, JSON.stringify(request))
  } catch {
    /* private mode / quota */
  }
}

export const readLastSearch = (): SearchRequest | null => {
  try {
    const raw = window.sessionStorage.getItem(LAST_SEARCH_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as SearchRequest
    if (!parsed || typeof parsed !== "object" || !parsed.type) return null
    return parsed
  } catch {
    return null
  }
}

export const todayISO = () => {
  const now = new Date()
  const month = String(now.getMonth() + 1).padStart(2, "0")
  const day = String(now.getDate()).padStart(2, "0")
  return `${now.getFullYear()}-${month}-${day}`
}

export const currentMonthISO = () => todayISO().slice(0, 7)

export const formatPlace = (place: PlaceRef) =>
  place.code ? `${place.name} (${place.code})` : place.name
