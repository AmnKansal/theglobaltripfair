import { useEffect, useState } from "react"
import styles from "./AnimatedMetric.module.css"

type AnimatedMetricProps = {
  value: number
  prefix?: string
  suffix?: string
  displayValue?: string
  animate?: boolean
  delay?: number
  active: boolean
  reducedMotion: boolean
  label: string
  description: string
}

const DURATION_MS = 1600

const easeOutCubic = (progress: number) => 1 - (1 - progress) ** 3

const formatMetric = (value: number, prefix = "", suffix = "") => `${prefix}${value}${suffix}`

export function AnimatedMetric({
  value,
  prefix = "",
  suffix = "",
  displayValue,
  animate = true,
  delay = 0,
  active,
  reducedMotion,
  label,
  description,
}: AnimatedMetricProps) {
  const finalDisplay = displayValue ?? formatMetric(value, prefix, suffix)
  const shouldAnimate = animate !== false && !reducedMotion
  const [display, setDisplay] = useState(shouldAnimate ? formatMetric(0, prefix, suffix) : finalDisplay)

  useEffect(() => {
    if (!active) return

    if (!shouldAnimate) {
      setDisplay(finalDisplay)
      return
    }

    let frame = 0
    let timeout = 0
    const startedAt = performance.now() + delay

    const tick = (now: number) => {
      const progress = Math.min(1, Math.max(0, (now - startedAt) / DURATION_MS))
      setDisplay(formatMetric(Math.round(value * easeOutCubic(progress)), prefix, suffix))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    timeout = window.setTimeout(() => {
      frame = requestAnimationFrame(tick)
    }, delay)

    return () => {
      window.clearTimeout(timeout)
      cancelAnimationFrame(frame)
    }
  }, [active, delay, displayValue, finalDisplay, prefix, shouldAnimate, suffix, value])

  return (
    <article
      className={`${styles.metric} ${active ? styles.visible : ""}`}
      aria-label={`${finalDisplay}, ${label}. ${description}`}
    >
      <p className={styles.value} aria-hidden="true">
        {display}
      </p>
      <span className={styles.rule} aria-hidden="true" />
      <h3>{label}</h3>
      <p className={styles.copy}>{description}</p>
    </article>
  )
}
