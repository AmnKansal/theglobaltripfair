import type { ReactNode } from "react"
import { ArrowUpRight } from "lucide-react"
import styles from "./ContactCard.module.css"

type ContactCardProps = {
  href: string
  icon: ReactNode
  title: string
  value: ReactNode
  copy: string
  cta: string
  external?: boolean
}

export function ContactCard({ href, icon, title, value, copy, cta, external = false }: ContactCardProps) {
  return (
    <a
      className={styles.card}
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <span className={styles.icon} aria-hidden="true">
        {icon}
      </span>
      <h3>{title}</h3>
      <p className={styles.value}>{value}</p>
      <p className={styles.copy}>{copy}</p>
      <span className={styles.cta}>
        {cta}
        <ArrowUpRight size={15} />
      </span>
    </a>
  )
}
