import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { Phone, TrainFront, X } from "lucide-react"
import { contactInfo, hasTrainsPhone, isTrainsPath } from "../../data/contact"
import { useTranslation } from "../../i18n"
import styles from "./FloatingCallButton.module.css"

const DISMISS_KEY = "tgtf-call-popup-dismissed"

export function FloatingCallButton() {
  const { t } = useTranslation()
  const { pathname } = useLocation()
  const [visible, setVisible] = useState(true)
  const trainsOnly = hasTrainsPhone && isTrainsPath(pathname)

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
        {trainsOnly ? (
          <a
            className={styles.bar}
            href={contactInfo.trainsPhoneHref}
            aria-label={`${t("a11y.callTrains")} ${contactInfo.trainsPhoneDisplay}`}
          >
            <span className={styles.icon} aria-hidden="true">
              <TrainFront size={18} strokeWidth={2.2} />
            </span>
            <span className={styles.copy}>
              <strong>{t("common.tapToCall")}</strong>
              <span>{contactInfo.trainsPhoneDisplay}</span>
            </span>
          </a>
        ) : (
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
        )}
        <button type="button" className={styles.close} onClick={dismiss} aria-label={t("a11y.close")}>
          <X size={16} strokeWidth={2.6} aria-hidden="true" />
        </button>
      </div>
    </>
  )
}
