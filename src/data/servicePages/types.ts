export type ServicePageSlug = "hotels" | "cars" | "cruises" | "trains"

export type ServiceHighlight = {
  title: string
  copy: string
}

export type ServiceStep = {
  title: string
  copy: string
}

export type ServicePick = {
  title: string
  copy: string
  image: string
  imageAlt: string
}

export type ServiceFaq = {
  question: string
  answer: string
}

export type ServiceKnowItem = {
  title: string
  copy: string
}

export type ServiceDoc = {
  slug: ServicePageSlug
  eyebrow: string
  title: string
  lead: string
  intro: string[]
  heroImage: string
  heroAlt: string
  searchTab?: "hotels" | "transfers"
  highlights: ServiceHighlight[]
  included: string[]
  steps: ServiceStep[]
  picksTitle: string
  picksCopy: string
  picks: ServicePick[]
  knowTitle: string
  knowItems: ServiceKnowItem[]
  faqs: ServiceFaq[]
  ctaTitle: string
  ctaCopy: string
  notice?: string
}
