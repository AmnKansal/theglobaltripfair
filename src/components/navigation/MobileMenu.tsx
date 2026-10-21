import { createPortal } from "react-dom"
import { NavLink, useLocation } from "react-router-dom"
import { Phone, X } from "lucide-react"
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
import { primaryNav } from "../../data/navigation"
import { useTranslation } from "../../i18n"
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll"
import { Logo } from "../common/Logo"
import { LanguageList } from "./LanguageMenu"
import styles from "./MobileMenu.module.css"

type MobileMenuProps = {
  open: boolean
  onClose: () => void
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const { t } = useTranslation()
  const { pathname } = useLocation()
  const trainsPrimary = hasTrainsPhone && isTrainsPath(pathname)
  const carsPrimary = hasCarsPhone && isCarsPath(pathname)
  const hotelsPrimary = hasHotelsPhone && isHotelsPath(pathname)
  const mainPhone = mainPhoneFor(pathname)
  useLockBodyScroll(open)
  if (!open) return null

  return createPortal(
    <div className={styles.overlay} onClick={onClose} role="presentation">
      <aside
        className={styles.panel}
        role="dialog"
        aria-modal="true"
        aria-label={t("a11y.menu")}
        onClick={(event) => event.stopPropagation()}
      >
        <div className={styles.header}>
          <Logo compact />
          <button type="button" className={styles.close} onClick={onClose} aria-label={t("a11y.closeMenu")}>
            <X size={18} />
          </button>
        </div>

        <nav className={styles.links}>
          {primaryNav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => (isActive ? styles.active : "")}
              onClick={onClose}
            >
              {t(item.labelKey)}
            </NavLink>
          ))}
        </nav>

        <div className={styles.actions}>
          {trainsPrimary ? (
            <a className={styles.call} href={contactInfo.trainsPhoneHref} onClick={onClose}>
              <span className={styles.callLabel}>
                <Phone size={16} strokeWidth={2.2} aria-hidden="true" />
                {t("common.trainReservations")}
              </span>
              <strong>{contactInfo.trainsPhoneDisplay}</strong>
            </a>
          ) : carsPrimary ? (
            <a className={styles.call} href={contactInfo.carsPhoneHref} onClick={onClose}>
              <span className={styles.callLabel}>
                <Phone size={16} strokeWidth={2.2} aria-hidden="true" />
                {t("common.carRentals")}
              </span>
              <strong>{contactInfo.carsPhoneDisplay}</strong>
            </a>
          ) : hotelsPrimary ? (
            <a className={styles.call} href={contactInfo.hotelsPhoneHref} onClick={onClose}>
              <span className={styles.callLabel}>
                <Phone size={16} strokeWidth={2.2} aria-hidden="true" />
                {t("common.hotelReservations")}
              </span>
              <strong>{contactInfo.hotelsPhoneDisplay}</strong>
            </a>
          ) : (
            <a className={styles.call} href={mainPhone.href} onClick={onClose}>
              <span className={styles.callLabel}>
                <Phone size={16} strokeWidth={2.2} aria-hidden="true" />
                {t("a11y.callUs")}
              </span>
              <strong>{mainPhone.display}</strong>
            </a>
          )}
        </div>

        <div className={styles.language}>
          <LanguageList onSelect={onClose} />
        </div>
      </aside>
    </div>,
    document.body,
  )
}
