import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { Phone, TrainFront, X } from "lucide-react"
import { contactInfo, hasTrainsPhone, isTrainsPath } from "../../data/contact"
import { useTranslation } from "../../i18n"
import { classNames } from "../../utils/classNames"
import styles from "./FloatingCallButton.module.css"

const DISMISS_KEY = "tgtf-call-popup-dismissed"

export function FloatingCallButton() {
  const { t } = useTranslation()
  const { pathname } = useLocation()
  const [visible, setVisible] = useState(true)
  const onHome = pathname === "/"
  const onTrains = isTrainsPath(pathname)
  const showBoth = hasTrainsPhone && (onHome || onTrains)

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

  const mainBar = (
    <a
      className={classNames(styles.bar, showBoth && onTrains && styles.secondary)}
      href={contactInfo.phoneHref}
      aria-label={`${t("a11y.callUs")} ${contactInfo.phoneDisplay}`}
    >
      <span className={styles.icon} aria-hidden="true">
        <Phone size={18} strokeWidth={2.2} />
      </span>
      <span className={styles.copy}>
        <strong>{showBoth ? t("common.reservations") : t("common.tapToCall")}</strong>
        <span>{contactInfo.phoneDisplay}</span>
      </span>
    </a>
  )

  const trainsBar = hasTrainsPhone ? (
    <a
      className={classNames(styles.bar, showBoth && !onTrains && styles.secondary)}
      href={contactInfo.trainsPhoneHref}
      aria-label={`${t("a11y.callTrains")} ${contactInfo.trainsPhoneDisplay}`}
    >
      <span className={styles.icon} aria-hidden="true">
        <TrainFront size={18} strokeWidth={2.2} />
      </span>
      <span className={styles.copy}>
        <strong>{t("common.trainReservations")}</strong>
        <span>{contactInfo.trainsPhoneDisplay}</span>
      </span>
    </a>
  ) : null

  return (
    <>
      <div className={classNames(styles.spacer, showBoth && styles.spacerSplit)} aria-hidden="true" />
      <div className={classNames(styles.wrap, showBoth && styles.split)}>
        {showBoth && onTrains ? (
          <>
            {trainsBar}
            {mainBar}
          </>
        ) : showBoth ? (
          <>
            {mainBar}
            {trainsBar}
          </>
        ) : (
          mainBar
        )}
        <button type="button" className={styles.close} onClick={dismiss} aria-label={t("a11y.close")}>
          <X size={16} strokeWidth={2.6} aria-hidden="true" />
        </button>
      </div>
    </>
  )
}
