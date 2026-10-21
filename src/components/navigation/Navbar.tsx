import { useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { Menu, Phone } from "lucide-react"
import {
  contactInfo,
  hasCarsPhone,
  hasHotelsPhone,
  hasTrainsPhone,
  isCarsPath,
  isHotelsPath,
  isTrainsPath,
  mainPhoneFor,
  toInternationalDisplay,
} from "../../data/contact"
import { primaryNav } from "../../data/navigation"
import { useTranslation } from "../../i18n"
import { Logo } from "../common/Logo"
import { LanguageMenu } from "./LanguageMenu"
import { MobileMenu } from "./MobileMenu"
import styles from "./Navbar.module.css"

export function Navbar() {
  const { t } = useTranslation()
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const trainsPrimary = hasTrainsPhone && isTrainsPath(location.pathname)
  const carsPrimary = hasCarsPhone && isCarsPath(location.pathname)
  const hotelsPrimary = hasHotelsPhone && isHotelsPath(location.pathname)
  const headerPhone = trainsPrimary
    ? {
        href: contactInfo.trainsPhoneHref,
        display: contactInfo.trainsPhoneDisplay,
        a11y: t("a11y.callTrains"),
        label: t("nav.callForTrainReservations"),
      }
    : carsPrimary
      ? {
          href: contactInfo.carsPhoneHref,
          display: contactInfo.carsPhoneDisplay,
          a11y: t("a11y.callCarRentals"),
          label: t("nav.callForCarRentals"),
        }
      : hotelsPrimary
        ? {
            href: contactInfo.hotelsPhoneHref,
            display: contactInfo.hotelsPhoneDisplay,
            a11y: t("a11y.callHotels"),
            label: t("nav.callForHotelReservations"),
          }
        : {
            ...mainPhoneFor(location.pathname),
            a11y: t("a11y.callUs"),
            label: t("nav.callForReservations"),
          }
  const headerPhoneHref = headerPhone.href
  const headerPhoneDisplay = toInternationalDisplay(headerPhone.display)
  const headerPhoneLabel = `${headerPhone.a11y} ${headerPhoneDisplay}`

  return (
    <header className={styles.bar}>
      <div className={`container-wide ${styles.inner}`}>
        <Logo />

        <nav className={styles.center} aria-label={t("a11y.primaryNav")}>
          {primaryNav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ""}`}
            >
              {t(item.labelKey)}
            </NavLink>
          ))}
        </nav>

        <div className={styles.right}>
          <LanguageMenu />
          <div className={styles.desktopActions}>
            <a className={styles.phone} href={headerPhoneHref} aria-label={headerPhoneLabel}>
              <span className={styles.phoneBadge} aria-hidden="true">
                <Phone size={16} strokeWidth={2.2} />
              </span>
              <span className={styles.phoneText}>
                <span className={styles.phoneLabel}>{headerPhone.label}</span>
                <span className={styles.phoneNumber}>{headerPhoneDisplay}</span>
              </span>
            </a>
          </div>
          <a
            className={styles.phoneIcon}
            href={headerPhoneHref}
            aria-label={headerPhoneLabel}
          >
            <Phone size={18} strokeWidth={2.1} aria-hidden="true" />
          </a>
          <button
            type="button"
            className={styles.menuBtn}
            aria-label={t("a11y.openMenu")}
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  )
}
