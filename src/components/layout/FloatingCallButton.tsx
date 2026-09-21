import { useEffect, useState } from "react"
import { Phone, X } from "lucide-react"
import { contactInfo } from "../../data/contact"
import { useTranslation } from "../../i18n"
import styles from "./FloatingCallButton.module.css"

const DISMISS_KEY = "tgtf-call-popup-dismissed"

export function FloatingCallButton() {
  const { t } = useTranslation()
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    try {
      if (window.sessionStorage.getItem(DISMISS_KEY) === "1") {
        setVisible(false)
      }
    } catch {
      /* private mode */
    }
  }, [])

  if (!visible) return null

  const dismiss = () => {
    try {
      window.sessionStorage.setItem(DISMISS_KEY, "1")
    } catch {
      /* private mode */
    }
    setVisible(false)
  }

  return (
    <>
      <div className={styles.spacer} aria-hidden="true" />
      <div className={styles.wrap}>
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
        <button type="button" className={styles.close} onClick={dismiss} aria-label={t("a11y.close")}>
          <X size={16} strokeWidth={2.6} aria-hidden="true" />
        </button>
      </div>
    </>
  )
}
