import type { ReactNode } from "react"
import styles from "./SectionHeading.module.css"

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  titleId?: string
  copy?: ReactNode
  align?: "left" | "center"
  tone?: "default" | "inverse"
}

export function SectionHeading({
  eyebrow,
  title,
  titleId,
  copy,
  align = "left",
  tone = "default",
}: SectionHeadingProps) {
  return (
    <div
      className={`${styles.heading} ${align === "center" ? styles.alignCenter : ""} ${tone === "inverse" ? styles.inverse : ""}`}
    >
      {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
      <h2 id={titleId} className={styles.title}>
        {title}
      </h2>
      {copy ? <p className={styles.copy}>{copy}</p> : null}
    </div>
  )
}
