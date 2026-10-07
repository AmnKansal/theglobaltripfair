import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { CarFront, Phone, X } from "lucide-react"
import { contactInfo, hasCarsPhone, isCarsPath } from "../../data/contact"
import { useTranslation } from "../../i18n"
import { classNames } from "../../utils/classNames"
import styles from "./FloatingCallButton.module.css"

const DISMISS_KEY = "tgtf-call-popup-dismissed"

export function FloatingCallButton() {
  const { t } = useTranslation()
  const { pathname } = useLocation()
  const [visible, setVisible] = useState(true)
  const onHome = pathname === "/"
  const onCars = isCarsPath(pathname)
  const showBoth = hasCarsPhone && (onHome || onCars)

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
      className={classNames(styles.bar, showBoth && onCars && styles.secondary)}
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

  const carsBar = hasCarsPhone ? (
    <a
      className={classNames(styles.bar, showBoth && !onCars && styles.secondary)}
      href={contactInfo.carsPhoneHref}
      aria-label={`${t("a11y.callCarRentals")} ${contactInfo.carsPhoneDisplay}`}
    >
      <span className={styles.icon} aria-hidden="true">
        <CarFront size={18} strokeWidth={2.2} />
      </span>
      <span className={styles.copy}>
        <strong>{t("common.carRentals")}</strong>
        <span>{contactInfo.carsPhoneDisplay}</span>
      </span>
    </a>
  ) : null

  return (
    <>
      <div className={classNames(styles.spacer, showBoth && styles.spacerSplit)} aria-hidden="true" />
      <div className={classNames(styles.wrap, showBoth && styles.split)}>
        {showBoth && onCars ? (
          <>
            {carsBar}
            {mainBar}
          </>
        ) : showBoth ? (
          <>
            {mainBar}
            {carsBar}
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
