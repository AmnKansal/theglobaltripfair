import type { TravelOffer } from "../data/offers"

export type TimeLeft = {
  total: number
  days: number
  hours: number
  minutes: number
  seconds: number
  expired: boolean
}

export type OfferStatus = "active" | "endingSoon" | "expired" | "soldOut"

const ENDING_SOON_MS = 24 * 60 * 60 * 1000
const COUNTDOWN_CYCLE_MS = 7 * 86_400_000

const splitTime = (total: number): TimeLeft => ({
  total,
  days: Math.floor(total / 86_400_000),
  hours: Math.floor((total % 86_400_000) / 3_600_000),
  minutes: Math.floor((total % 3_600_000) / 60_000),
  seconds: Math.floor((total % 60_000) / 1000),
  expired: false,
})

export function getTimeLeft(expiresAt: string, now = Date.now()): TimeLeft {
  const firstEnd = Date.parse(expiresAt)
  const cycle = COUNTDOWN_CYCLE_MS
  const end = Number.isNaN(firstEnd) ? now + cycle : firstEnd
  const elapsed = now - end

  if (elapsed < 0) {
    const remaining = -elapsed
    return splitTime(remaining < 1000 ? cycle : remaining)
  }

  const wrapped = elapsed % cycle
  return splitTime(wrapped === 0 ? cycle : cycle - wrapped)
}

export function getOfferStatus(offer: TravelOffer, now = Date.now()): OfferStatus {
  if (offer.availableSpots === 0) return "soldOut"
  const { total } = getTimeLeft(offer.expiresAt, now)
  if (total <= ENDING_SOON_MS) return "endingSoon"
  return "active"
}

export function isOfferLive(offer: TravelOffer, now = Date.now()) {
  return getOfferStatus(offer, now) !== "soldOut"
}

export function getLiveOffers(list: TravelOffer[], now = Date.now()) {
  return list.filter((offer) => isOfferLive(offer, now))
}

export function padTime(value: number) {
  return String(Math.max(0, value)).padStart(2, "0")
}
