import { Phone } from "lucide-react"
import { contactInfo } from "../../data/contact"
import { useTranslation } from "../../i18n"
import styles from "./FloatingCallButton.module.css"

export function FloatingCallButton() {
  const { t } = useTranslation()

  return (
    <a
      className={styles.bar}
      href={contactInfo.phoneHref}
      aria-label={`${t("a11y.callUs")} ${contactInfo.phoneDisplay}`}
    >
      <span className={styles.icon} aria-hidden="true">
        <Phone size={18} strokeWidth={2.2} />
      </span>
      <span className={styles.copy}>
        <strong>{t("common.tapToCall")}</strong>
        <span>{contactInfo.phoneDisplay}</span>
      </span>
    </a>
  )
}
