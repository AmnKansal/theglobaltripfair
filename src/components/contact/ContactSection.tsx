import { useRef, useState } from "react"
import { useLocation } from "react-router-dom"
import { Mail, MapPin, Phone, TrainFront } from "lucide-react"
import {
  contactCityLine,
  contactCountryName,
  contactInfo,
  contactMapsHref,
  hasTrainsPhone,
  mainPhoneFor,
} from "../../data/contact"
import { languageMeta, useTranslation } from "../../i18n"
import { SectionHeading } from "../common/SectionHeading"
import { ContactCard } from "./ContactCard"
import styles from "./ContactSection.module.css"

export function ContactSection() {
  const { t, locale } = useTranslation()
  const mainPhone = mainPhoneFor(useLocation().pathname)
  const gridRef = useRef<HTMLDivElement>(null)
  const [activeCard, setActiveCard] = useState(0)
  const cardCount = hasTrainsPhone ? 4 : 3

  // Mobile only: the grid becomes a swipe row, and the dots follow the card in view.
  const handleScroll = () => {
    const grid = gridRef.current
    const first = grid?.firstElementChild as HTMLElement | null
    if (!grid || !first) return
    const step = first.offsetWidth + parseFloat(getComputedStyle(grid).columnGap || "0")
    const atEnd = grid.scrollLeft + grid.clientWidth >= grid.scrollWidth - 2
    setActiveCard(atEnd ? cardCount - 1 : Math.round(grid.scrollLeft / step))
  }

  return (
    <section className={styles.section} id="how-to-reach-us" aria-labelledby="reach-title">
      <div className="container">
        <div className={styles.panel}>
          <SectionHeading
            eyebrow={t("reach.eyebrow")}
            title={t("reach.title")}
            titleId="reach-title"
            copy={t("reach.copy")}
            tone="inverse"
          />

          <div
            ref={gridRef}
            className={`${styles.grid} ${hasTrainsPhone ? styles.gridFour : ""}`}
            onScroll={handleScroll}
          >
            <ContactCard
              href={mainPhone.href}
              icon={<Phone size={20} strokeWidth={2.1} />}
              title={t("reach.call")}
              value={mainPhone.display}
              copy={t("reach.callCopy")}
              cta={t("reach.callCta")}
            />
            {hasTrainsPhone ? (
              <ContactCard
                href={contactInfo.trainsPhoneHref}
                icon={<TrainFront size={20} strokeWidth={2.1} />}
                title={t("reach.callTrains")}
                value={contactInfo.trainsPhoneDisplay}
                copy={t("reach.callTrainsCopy")}
                cta={t("reach.callTrainsCta")}
              />
            ) : null}
            <ContactCard
              href={contactInfo.emailHref}
              icon={<Mail size={20} strokeWidth={2.1} />}
              title={t("reach.email")}
              value={contactInfo.email}
              copy={t("reach.emailCopy")}
              cta={t("reach.emailCta")}
            />
            <ContactCard
              href={contactMapsHref}
              icon={<MapPin size={20} strokeWidth={2.1} />}
              title={t("reach.visit")}
              value={
                <>
                  {contactInfo.address.street}
                  <br />
                  {contactInfo.address.city}, {contactInfo.address.state} {contactInfo.address.zip}
                  <br />
                  {contactCountryName(languageMeta[locale].htmlLang)}
                </>
              }
              copy={t("reach.visitCopy")}
              cta={t("reach.visitCta")}
              external
            />
          </div>

          <div className={styles.dots} aria-hidden="true">
            {Array.from({ length: cardCount }, (_, i) => (
              <span key={i} className={i === activeCard ? styles.dotActive : undefined} />
            ))}
          </div>

          <a className={styles.location} href={contactMapsHref} target="_blank" rel="noopener noreferrer">
            <span className={styles.pin} aria-hidden="true">
              <MapPin size={18} strokeWidth={2.1} />
            </span>
            <span>
              <strong>{contactCityLine}</strong>
              <span>{contactInfo.address.street}</span>
            </span>
            <span className={styles.locationCta}>{t("reach.visitCta")}</span>
          </a>
        </div>
      </div>
    </section>
  )
}
