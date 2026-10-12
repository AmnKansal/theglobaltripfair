/** Homepage metrics. Every figure must be checkable on the site itself — no unverified marketing numbers. */
export type TrustMetric = {
  id: string
  value: number
  prefix?: string
  suffix?: string
  displayValue?: string
  animate?: boolean
  labelKey: string
  descriptionKey: string
}

export const trustMetrics: TrustMetric[] = [
  {
    id: "services",
    value: 7,
    labelKey: "choose.services",
    descriptionKey: "choose.servicesCopy",
  },
  {
    id: "team",
    value: 1,
    labelKey: "choose.team",
    descriptionKey: "choose.teamCopy",
  },
  {
    id: "lines",
    value: 2,
    labelKey: "choose.lines",
    descriptionKey: "choose.linesCopy",
  },
  {
    id: "languages",
    value: 6,
    labelKey: "choose.languages",
    descriptionKey: "choose.languagesCopy",
  },
]
