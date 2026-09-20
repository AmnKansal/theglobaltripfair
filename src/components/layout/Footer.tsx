import { Link } from "react-router-dom"
import { Mail, MapPin, Phone } from "lucide-react"
import { contactCityLine, contactInfo, contactMapsHref } from "../../data/contact"
import { Logo } from "../common/Logo"
import { moreNav, primaryNav } from "../../data/navigation"
import { useTranslation } from "../../i18n"
import styles from "./Footer.module.css"

export function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div className={styles.brandBlock}>
          <div className={styles.brand}>
            <Logo theme="light" />
          </div>
          <p className={styles.tagline}>{t("footer.tagline")}</p>
        </div>

        <div className={styles.column}>
          <p className={styles.heading}>{t("footer.company")}</p>
          <Link to="/about">{t("footer.about")}</Link>
          <Link to="/contact">{t("footer.contact")}</Link>
          <Link to="/careers">{t("footer.careers")}</Link>
          <Link to="/blog">{t("footer.blog")}</Link>
        </div>

        <div className={styles.column}>
          <p className={styles.heading}>{t("footer.travel")}</p>
          {primaryNav.map((item) => (
            <Link key={item.to} to={item.to}>
              {item.to === "/holidays" ? t("search.holidays") : t(item.labelKey)}
            </Link>
          ))}
          {moreNav
            .filter((item) => item.to === "/cruises")
            .map((item) => (
              <Link key={item.to} to={item.to}>
                {t(item.labelKey)}
              </Link>
            ))}
        </div>

        <div className={styles.column}>
          <p className={styles.heading}>{t("footer.support")}</p>
          <Link to="/help">{t("footer.help")}</Link>
          <Link to="/booking">{t("footer.manageBooking")}</Link>
          <Link to="/cancellation">{t("footer.cancellation")}</Link>
          <Link to="/terms">{t("footer.terms")}</Link>
          <Link to="/privacy">{t("footer.privacy")}</Link>
        </div>

        <div className={`${styles.column} ${styles.contactColumn}`}>
          <p className={styles.heading}>{t("footer.contactHeading")}</p>
          <a href={contactInfo.phoneHref}>
            <Phone size={14} strokeWidth={2.2} aria-hidden="true" />
            {contactInfo.phoneDisplay}
          </a>
          <a href={contactInfo.emailHref}>
            <Mail size={14} strokeWidth={2.2} aria-hidden="true" />
            {contactInfo.email}
          </a>
          <a href={contactMapsHref} target="_blank" rel="noopener noreferrer">
            <MapPin size={14} strokeWidth={2.2} aria-hidden="true" />
            <span>
              {contactInfo.address.street}
              <br />
              {contactCityLine} {contactInfo.address.zip}
              <br />
              {contactInfo.address.country}
            </span>
          </a>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p className={styles.copyright}>
          © {year} GlobalTripFair LLC. {t("footer.rights")}
        </p>
        {/* <p className={styles.credit}>
          <span>{t("footer.creditBy")}</span>
          <a href="https://amankansal.in/" target="_blank" rel="noopener noreferrer">
            amankansal.in
          </a>
          <span className={styles.sep} aria-hidden="true">
            ·
          </span>
          <span className={styles.creditLove}>
            {t("footer.creditLove")}
            <span className={styles.heart} aria-hidden="true">
              ❤️
            </span>
            <span className={styles.srOnly}>{t("footer.creditLoveWord")}</span>
          </span>
        </p> */}
      </div>
    </footer>
  )
}
