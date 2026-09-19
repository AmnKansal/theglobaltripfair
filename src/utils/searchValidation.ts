import { currentMonthISO, partyTotal, todayISO, type SearchRequest } from "../data/search"

export type SearchErrors = Record<string, string>

const isPast = (iso: string) => iso.length === 10 && iso < todayISO()

export function validateSearch(request: SearchRequest): SearchErrors {
  const errors: SearchErrors = {}

  if (partyTotal(request.party) < 1) {
    errors.party = "search.errors.requiredParty"
  }

  if (request.type === "flights") {
    if (!request.from) errors.from = "search.errors.requiredFrom"
    if (!request.to) errors.to = "search.errors.requiredTo"
    if (request.from && request.to && request.from.id === request.to.id) {
      errors.to = "search.errors.sameRoute"
    }
    if (!request.departure) errors.departure = "search.errors.requiredDeparture"
    else if (isPast(request.departure)) errors.departure = "search.errors.pastDate"
    if (request.returnDate) {
      if (isPast(request.returnDate)) errors.returnDate = "search.errors.pastDate"
      else if (request.departure && request.returnDate < request.departure) {
        errors.returnDate = "search.errors.returnBefore"
      }
    }
  }

  if (request.type === "hotels") {
    if (!request.destination) errors.destination = "search.errors.requiredDestination"
    if (!request.checkIn) errors.checkIn = "search.errors.requiredCheckIn"
    else if (isPast(request.checkIn)) errors.checkIn = "search.errors.pastDate"
    if (!request.checkOut) errors.checkOut = "search.errors.requiredCheckOut"
    else if (request.checkIn && request.checkOut <= request.checkIn) {
      errors.checkOut = "search.errors.checkOutBefore"
    }
  }

  if (request.type === "holidays") {
    if (!request.destination) errors.destination = "search.errors.requiredDestination"
    if (!request.month) errors.month = "search.errors.requiredMonth"
    else if (request.month < currentMonthISO()) errors.month = "search.errors.pastDate"
  }

  if (request.type === "transfers") {
    if (!request.pickup) errors.pickup = "search.errors.requiredPickup"
    if (!request.dropoff) errors.dropoff = "search.errors.requiredDropoff"
    if (request.pickup && request.dropoff && request.pickup.id === request.dropoff.id) {
      errors.dropoff = "search.errors.sameTransfer"
    }
    if (!request.date) errors.date = "search.errors.requiredDate"
    else if (isPast(request.date)) errors.date = "search.errors.pastDate"
  }

  return errors
}
