import type { Locale } from "./languages"
import type { Messages } from "./types"
import { de } from "./translations/de"
import { en } from "./translations/en"
import { es } from "./translations/es"
import { fr } from "./translations/fr"
import { it } from "./translations/it"
import { pt } from "./translations/pt"

export const dictionaries: Record<Locale, Messages> = {
  en,
  fr,
  de,
  es,
  it,
  pt,
}
