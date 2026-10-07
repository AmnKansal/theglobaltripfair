import { useRef, useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { ChevronDown, Menu, Phone } from "lucide-react"
import { contactInfo, hasCarsPhone, isCarsPath } from "../../data/contact"
import { moreNav, primaryNav } from "../../data/navigation"
import { useTranslation } from "../../i18n"
import { useOnClickOutside } from "../../hooks/useOnClickOutside"
import { Logo } from "../common/Logo"
import { LanguageMenu } from "./LanguageMenu"
import { MobileMenu } from "./MobileMenu"
import styles from "./Navbar.module.css"

export function Navbar() {
  const { t } = useTranslation()
  const location = useLocation()
  const [moreOpen, setMoreOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const moreRef = useRef<HTMLDivElement>(null)
  const moreActive = moreNav.some((item) => location.pathname === item.to)
  const carsPrimary = hasCarsPhone && isCarsPath(location.pathname)
  const headerPhoneHref = carsPrimary ? contactInfo.carsPhoneHref : contactInfo.phoneHref
  const headerPhoneDisplay = carsPrimary ? contactInfo.carsPhoneDisplay : contactInfo.phoneDisplay
  const headerPhoneLabel = carsPrimary
    ? `${t("a11y.callCarRentals")} ${headerPhoneDisplay}`
    : `${t("a11y.callUs")} ${headerPhoneDisplay}`

  useOnClickOutside(moreRef, () => setMoreOpen(false), moreOpen)

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

          <div className={styles.moreWrap} ref={moreRef}>
            <button
              type="button"
              className={`${styles.link} ${moreOpen || moreActive ? styles.active : ""}`}
              aria-haspopup="menu"
              aria-expanded={moreOpen}
              onClick={() => setMoreOpen((value) => !value)}
            >
              {t("nav.more")} <ChevronDown size={14} />
            </button>
            {moreOpen ? (
              <div className={styles.moreMenu}>
                {moreNav.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) => (isActive ? styles.moreActive : "")}
                    onClick={() => setMoreOpen(false)}
                  >
                    {t(item.labelKey)}
                  </NavLink>
                ))}
              </div>
            ) : null}
          </div>
        </nav>

        <div className={styles.right}>
          <div className={styles.desktopActions}>
            <LanguageMenu />
            <div className={hasCarsPhone ? styles.phoneStack : undefined}>
              <a
                className={styles.phone}
                href={contactInfo.phoneHref}
                aria-label={`${t("a11y.callUs")} ${contactInfo.phoneDisplay}`}
              >
                <Phone size={15} strokeWidth={2.2} aria-hidden="true" />
                <span>
                  {hasCarsPhone ? <small>{t("common.reservations")}</small> : null}
                  {contactInfo.phoneDisplay}
                </span>
              </a>
              {hasCarsPhone ? (
                <a
                  className={styles.phone}
                  href={contactInfo.carsPhoneHref}
                  aria-label={`${t("a11y.callCarRentals")} ${contactInfo.carsPhoneDisplay}`}
                >
                  <Phone size={15} strokeWidth={2.2} aria-hidden="true" />
                  <span>
                    <small>{t("common.carRentals")}</small>
                    {contactInfo.carsPhoneDisplay}
                  </span>
                </a>
              ) : null}
            </div>
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
