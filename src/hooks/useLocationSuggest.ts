import { useEffect, useState } from "react"
import type { PlaceRef } from "../data/search"
import type { Locale } from "../i18n/languages"
import { suggestLocations } from "../services/locations"
import { useDebouncedValue } from "./useDebouncedValue"

export const LOCATION_SUGGEST_DELAY_MS = 400

export function useLocationSuggest(query: string, locale: Locale, includeAirports: boolean, enabled: boolean) {
  const trimmed = query.trim()
  const debounced = useDebouncedValue(trimmed, LOCATION_SUGGEST_DELAY_MS)
  const pending = enabled && trimmed.length >= 2 && trimmed !== debounced
  const [items, setItems] = useState<PlaceRef[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!enabled || debounced.length < 2) {
      setItems([])
      setLoading(false)
      return
    }

    const controller = new AbortController()
    setLoading(true)

    suggestLocations({
      query: debounced,
      locale,
      includeAirports,
      signal: controller.signal,
    })
      .then((places) => {
        if (!controller.signal.aborted) setItems(places)
      })
      .catch((error: unknown) => {
        if (controller.signal.aborted) return
        setItems([])
        if (error instanceof DOMException && error.name === "AbortError") return
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false)
      })

    return () => controller.abort()
  }, [debounced, enabled, includeAirports, locale])

  return {
    items: pending ? [] : items,
    loading: pending || loading,
  }
}
