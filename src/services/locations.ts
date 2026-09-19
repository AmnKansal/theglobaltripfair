import type { Locale } from "../i18n/languages"
import type { PlaceKind, PlaceRef } from "../data/search"

type TravelpayoutsPlace = {
  id?: string | number
  type?: string
  code?: string
  name?: string
  city_name?: string
  city_code?: string
  country_name?: string
  country_code?: string
}

type OpenMeteoResult = {
  id?: number
  name?: string
  country?: string
  country_code?: string
  admin1?: string
}

export type LocationQuery = {
  query: string
  locale: Locale
  includeAirports: boolean
  signal?: AbortSignal
}

const TRAVELPAYOUTS = "https://autocomplete.travelpayouts.com/places2"
const OPEN_METEO = "https://geocoding-api.open-meteo.com/v1/search"

const localeForTravelpayouts = (locale: Locale) => (locale === "pt" ? "pt" : locale)

const toPlace = (item: TravelpayoutsPlace): PlaceRef | null => {
  const name = item.name?.trim()
  if (!name) return null
  const kind: PlaceKind = item.type === "airport" ? "airport" : "city"
  const subtitle = [item.city_name && item.city_name !== name ? item.city_name : null, item.country_name]
    .filter(Boolean)
    .join(", ")
  return {
    id: String(item.id ?? `${item.type ?? "place"}-${item.code ?? name}`),
    name,
    subtitle,
    code: item.code || item.city_code,
    kind,
    country: item.country_name,
    countryCode: item.country_code,
  }
}

const fromOpenMeteo = (item: OpenMeteoResult): PlaceRef | null => {
  const name = item.name?.trim()
  if (!name) return null
  const subtitle = [item.admin1, item.country].filter(Boolean).join(", ")
  return {
    id: `om-${item.id ?? name}`,
    name,
    subtitle,
    kind: "place",
    country: item.country,
    countryCode: item.country_code,
  }
}

const fetchTravelpayouts = async ({ query, locale, includeAirports, signal }: LocationQuery) => {
  const params = new URLSearchParams({
    locale: localeForTravelpayouts(locale),
    term: query,
  })
  params.append("types[]", "city")
  if (includeAirports) params.append("types[]", "airport")

  const response = await fetch(`${TRAVELPAYOUTS}?${params}`, { signal })
  if (!response.ok) throw new Error(`locations ${response.status}`)
  const rows = (await response.json()) as TravelpayoutsPlace[]
  if (!Array.isArray(rows)) return []
  return rows.map(toPlace).filter((place): place is PlaceRef => Boolean(place)).slice(0, 8)
}

const fetchOpenMeteo = async ({ query, locale, signal }: LocationQuery) => {
  const params = new URLSearchParams({
    name: query,
    count: "8",
    language: locale,
    format: "json",
  })
  const response = await fetch(`${OPEN_METEO}?${params}`, { signal })
  if (!response.ok) throw new Error(`geocode ${response.status}`)
  const data = (await response.json()) as { results?: OpenMeteoResult[] }
  return (data.results ?? []).map(fromOpenMeteo).filter((place): place is PlaceRef => Boolean(place))
}

export async function suggestLocations(options: LocationQuery): Promise<PlaceRef[]> {
  const query = options.query.trim()
  if (query.length < 2) return []

  try {
    const primary = await fetchTravelpayouts(options)
    if (primary.length) return primary
  } catch (error) {
    if (options.signal?.aborted) throw error
  }

  return fetchOpenMeteo(options)
}
