import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { CarFront, Headset, Hotel, Phone, TrainFront, X } from "lucide-react"
import {
  contactInfo,
  hasCarsPhone,
  hasHotelsPhone,
  hasTrainsPhone,
  isCarsPath,
  isHotelsPath,
  isTrainsPath,
  mainPhoneFor,
} from "../../data/contact"
import { useTranslation } from "../../i18n"
import styles from "./FloatingCallButton.module.css"

const DISMISS_KEY = "tgtf-call-popup-dismissed"

export function FloatingCallButton() {
  const { t } = useTranslation()
  const { pathname } = useLocation()
  const [visible, setVisible] = useState(true)
  const trainsOnly = hasTrainsPhone && isTrainsPath(pathname)
  const carsOnly = hasCarsPhone && isCarsPath(pathname)
  const hotelsOnly = hasHotelsPhone && isHotelsPath(pathname)

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

  const line = trainsOnly
    ? {
        href: contactInfo.trainsPhoneHref,
        display: contactInfo.trainsPhoneDisplay,
        label: t("a11y.callTrains"),
        tag: t("common.trainReservations"),
        tagIcon: <TrainFront size={14} strokeWidth={2.2} />,
      }
    : carsOnly
      ? {
          href: contactInfo.carsPhoneHref,
          display: contactInfo.carsPhoneDisplay,
          label: t("a11y.callCarRentals"),
          tag: t("common.carRentals"),
          tagIcon: <CarFront size={14} strokeWidth={2.2} />,
        }
      : hotelsOnly
        ? {
            href: contactInfo.hotelsPhoneHref,
            display: contactInfo.hotelsPhoneDisplay,
            label: t("a11y.callHotels"),
            tag: t("common.hotelReservations"),
            tagIcon: <Hotel size={14} strokeWidth={2.2} />,
          }
        : {
            ...mainPhoneFor(pathname),
            label: t("a11y.callUs"),
            tag: t("common.travelHelp"),
            tagIcon: <Headset size={14} strokeWidth={2.2} />,
          }

  return (
    <>
      {/* Keeps the end of the footer clear of the bar; painted like the footer. */}
      <div className={styles.spacer} aria-hidden="true" />
      <div className={styles.wrap}>
        <a className={styles.card} href={line.href} aria-label={`${line.label} ${line.display}`}>
          <span className={styles.tag} aria-hidden="true">
            {line.tagIcon}
            {line.tag}
          </span>
          <span className={styles.avatar} aria-hidden="true">
            <img src="/icon.png" alt="" width={24} height={24} />
          </span>
          <span className={styles.copy}>
            <small>{t("common.talkToSpecialist")}</small>
            <strong>{line.display}</strong>
          </span>
          <span className={styles.call} aria-hidden="true">
            <Phone size={18} strokeWidth={2.2} />
          </span>
        </a>
        <button type="button" className={styles.close} onClick={dismiss} aria-label={t("a11y.close")}>
          <X size={14} strokeWidth={2.8} aria-hidden="true" />
        </button>
      </div>
    </>
  )
}
