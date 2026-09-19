/** Configurable marketing metrics. Replace from the API when verified figures exist. */
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
    id: "satisfaction",
    value: 98,
    suffix: "%",
    labelKey: "choose.satisfaction",
    descriptionKey: "choose.satisfactionCopy",
  },
  {
    id: "destinations",
    value: 120,
    suffix: "+",
    labelKey: "choose.destinations",
    descriptionKey: "choose.destinationsCopy",
  },
  {
    id: "options",
    value: 150,
    suffix: "+",
    labelKey: "choose.options",
    descriptionKey: "choose.optionsCopy",
  },
  {
    id: "support",
    value: 24,
    suffix: "/7",
    labelKey: "choose.support",
    descriptionKey: "choose.supportCopy",
  },
]
