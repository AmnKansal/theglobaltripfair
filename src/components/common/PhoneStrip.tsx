import { useLocation } from "react-router-dom"
import { CarFront, Hotel, Phone, TrainFront } from "lucide-react"
import { contactInfo, hasCarsPhone, hasHotelsPhone, hasTrainsPhone, mainPhoneFor } from "../../data/contact"
import { useTranslation } from "../../i18n"
import { classNames } from "../../utils/classNames"
import styles from "./PhoneStrip.module.css"

type PhoneStripProps = {
  variant: "hero" | "dark" | "light"
  showTrains?: boolean
  showCars?: boolean
  showHotels?: boolean
  showMain?: boolean
  className?: string
}

export function PhoneStrip({
  variant,
  showTrains = false,
  showCars = false,
  showHotels = false,
  showMain = true,
  className,
}: PhoneStripProps) {
  const { t } = useTranslation()
  const mainPhone = mainPhoneFor(useLocation().pathname)
  const trains = showTrains && hasTrainsPhone
  const cars = showCars && hasCarsPhone
  const hotels = showHotels && hasHotelsPhone

  if (!showMain && !trains && !cars && !hotels) return null

  return (
    <div className={classNames(styles.strip, styles[variant], className)}>
      {showMain ? (
        <a
          className={styles.line}
          href={mainPhone.href}
          aria-label={`${t("a11y.callUs")} ${mainPhone.display}`}
        >
          <Phone size={16} strokeWidth={2.2} aria-hidden="true" />
          <span>
            <small>{t("common.reservations")}</small>
            <strong>{mainPhone.display}</strong>
          </span>
        </a>
      ) : null}
      {trains ? (
        <a
          className={classNames(styles.line, showMain && styles.trains)}
          href={contactInfo.trainsPhoneHref}
          aria-label={`${t("a11y.callTrains")} ${contactInfo.trainsPhoneDisplay}`}
        >
          <TrainFront size={16} strokeWidth={2.2} aria-hidden="true" />
          <span>
            <small>{t("common.trainReservations")}</small>
            <strong>{contactInfo.trainsPhoneDisplay}</strong>
          </span>
        </a>
      ) : null}
      {cars ? (
        <a
          className={styles.line}
          href={contactInfo.carsPhoneHref}
          aria-label={`${t("a11y.callCarRentals")} ${contactInfo.carsPhoneDisplay}`}
        >
          <CarFront size={16} strokeWidth={2.2} aria-hidden="true" />
          <span>
            <small>{t("common.carRentals")}</small>
            <strong>{contactInfo.carsPhoneDisplay}</strong>
          </span>
        </a>
      ) : null}
      {hotels ? (
        <a
          className={styles.line}
          href={contactInfo.hotelsPhoneHref}
          aria-label={`${t("a11y.callHotels")} ${contactInfo.hotelsPhoneDisplay}`}
        >
          <Hotel size={16} strokeWidth={2.2} aria-hidden="true" />
          <span>
            <small>{t("common.hotelReservations")}</small>
            <strong>{contactInfo.hotelsPhoneDisplay}</strong>
          </span>
        </a>
      ) : null}
    </div>
  )
}
