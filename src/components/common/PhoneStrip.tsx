import { Phone, TrainFront } from "lucide-react"
import { contactInfo, hasTrainsPhone } from "../../data/contact"
import { useTranslation } from "../../i18n"
import { classNames } from "../../utils/classNames"
import styles from "./PhoneStrip.module.css"

type PhoneStripProps = {
  variant: "hero" | "dark" | "light"
  showTrains?: boolean
  showMain?: boolean
  className?: string
}

export function PhoneStrip({
  variant,
  showTrains = false,
  showMain = true,
  className,
}: PhoneStripProps) {
  const { t } = useTranslation()
  const trains = showTrains && hasTrainsPhone

  if (!showMain && !trains) return null

  return (
    <div className={classNames(styles.strip, styles[variant], className)}>
      {showMain ? (
        <a
          className={styles.line}
          href={contactInfo.phoneHref}
          aria-label={`${t("a11y.callUs")} ${contactInfo.phoneDisplay}`}
        >
          <Phone size={16} strokeWidth={2.2} aria-hidden="true" />
          <span>
            <small>{t("common.reservations")}</small>
            <strong>{contactInfo.phoneDisplay}</strong>
          </span>
        </a>
      ) : null}
      {trains ? (
        <a
          className={classNames(styles.line, styles.trains)}
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
    </div>
  )
}
