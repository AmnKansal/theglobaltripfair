export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "note"; text: string }
  | { type: "contact" }

export type LegalSection = {
  id: string
  title: string
  blocks: LegalBlock[]
}

export type LegalDoc = {
  slug: string
  title: string
  intro: string
  sections: LegalSection[]
}

export type AboutHighlight = {
  title: string
  copy: string
}

export type AboutDoc = {
  title: string
  intro: string[]
  sections: {
    id: string
    title: string
    paragraphs: string[]
    bullets?: string[]
  }[]
  whatWeDo: string[]
  whyChoose: AboutHighlight[]
  promise: string[]
}
