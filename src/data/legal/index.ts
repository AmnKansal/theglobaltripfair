import { advertisingDoc } from "./advertising"
import { cancellationDoc } from "./cancellation"
import { cookiesDoc } from "./cookies"
import { disclaimerDoc } from "./disclaimer"
import { privacyDoc } from "./privacy"
import { termsDoc } from "./terms"
import type { LegalDoc } from "./types"

export { aboutDoc } from "./about"
export { BRAND_DOMAIN, BRAND_NAME, COMPANY_NAME, LEGAL_UPDATED } from "./brand"
export type { AboutDoc, LegalDoc, LegalSection } from "./types"

export const legalDocs = {
  privacy: privacyDoc,
  terms: termsDoc,
  cancellation: cancellationDoc,
  cookies: cookiesDoc,
  advertising: advertisingDoc,
  disclaimer: disclaimerDoc,
} as const

export type LegalSlug = keyof typeof legalDocs

export const getLegalDoc = (slug: LegalSlug): LegalDoc => legalDocs[slug]

export const legalPageLinks: { slug: LegalSlug; to: string; labelKey: string }[] = [
  { slug: "privacy", to: "/privacy", labelKey: "footer.privacy" },
  { slug: "terms", to: "/terms", labelKey: "footer.terms" },
  { slug: "cancellation", to: "/cancellation", labelKey: "footer.cancellation" },
  { slug: "cookies", to: "/cookies", labelKey: "footer.cookies" },
  { slug: "disclaimer", to: "/disclaimer", labelKey: "footer.disclaimer" },
  { slug: "advertising", to: "/advertising", labelKey: "footer.advertising" },
]
