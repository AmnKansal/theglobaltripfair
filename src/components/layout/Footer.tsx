import { Link } from "react-router-dom"
import { Mail, MapPin, Phone } from "lucide-react"
import { contactCityLine, contactCountryName, contactInfo, contactMapsHref, hasTrainsPhone } from "../../data/contact"
import { Logo } from "../common/Logo"
import { destinationFlightLinks, flightTypeLinks } from "../../data/flightPages"
import { footerTravelNav } from "../../data/navigation"
import { languageMeta, useTranslation } from "../../i18n"
import styles from "./Footer.module.css"

export function Footer() {
  const { t, locale, messages } = useTranslation()
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
          {footerTravelNav.map((item) => (
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
        </div>

        <div className={styles.column}>
          <p className={styles.heading}>{t("footer.legal")}</p>
          <Link to="/privacy">{t("footer.privacy")}</Link>
          <Link to="/terms">{t("footer.terms")}</Link>
          <Link to="/cookies">{t("footer.cookies")}</Link>
          <Link to="/disclaimer">{t("footer.disclaimer")}</Link>
          <Link to="/advertising">{t("footer.advertising")}</Link>
        </div>

        <div className={`${styles.column} ${styles.contactColumn}`}>
          <p className={styles.heading}>{t("footer.contactHeading")}</p>
          <a href={contactInfo.phoneHref} aria-label={`${t("a11y.callUs")} ${contactInfo.phoneDisplay}`}>
            <Phone size={14} strokeWidth={2.2} aria-hidden="true" />
            <span>
              <small>{t("common.reservations")}</small>
              {contactInfo.phoneDisplay}
            </span>
          </a>
          {hasTrainsPhone ? (
            <a
              href={contactInfo.trainsPhoneHref}
              aria-label={`${t("a11y.callTrains")} ${contactInfo.trainsPhoneDisplay}`}
            >
              <Phone size={14} strokeWidth={2.2} aria-hidden="true" />
              <span>
                <small>{t("common.trainReservations")}</small>
                {contactInfo.trainsPhoneDisplay}
              </span>
            </a>
          ) : null}
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
              {contactCountryName(languageMeta[locale].htmlLang)}
            </span>
          </a>
        </div>
      </div>

      <div className={`container ${styles.flightLinks}`}>
        <nav className={styles.flightGroup} aria-label={t("footer.flightDestinations")}>
          <p className={styles.heading}>{t("footer.flightDestinations")}</p>
          <ul>
            {destinationFlightLinks.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{messages.flightLinks?.cities[item.slug] ?? item.city}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav className={styles.flightGroup} aria-label={t("footer.flightTypes")}>
          <p className={styles.heading}>{t("footer.flightTypes")}</p>
          <ul>
            {flightTypeLinks.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{messages.flightLinks?.types[item.slug] ?? item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p className={styles.operator}>{t("footer.operatorNote")}</p>
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
