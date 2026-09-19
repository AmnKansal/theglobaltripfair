import { persistLastSearch, type SearchRequest } from "../data/search"
import { validateSearch } from "../utils/searchValidation"

export type SearchSubmission =
  | { ok: true; status: "maintenance"; request: SearchRequest }
  | { ok: false; errors: Record<string, string> }

/**
 * Validates and records a search. Live inventory is not connected yet.
 * Replace the body with a real API call when the booking engine is available.
 */
export async function submitSearch(request: SearchRequest): Promise<SearchSubmission> {
  const errors = validateSearch(request)
  if (Object.keys(errors).length) {
    return { ok: false, errors }
  }

  persistLastSearch(request)
  return { ok: true, status: "maintenance", request }
}
