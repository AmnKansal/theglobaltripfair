import { Mail, MapPin, Phone, TrainFront } from "lucide-react"
import { contactCityLine, contactInfo, contactMapsHref, hasTrainsPhone } from "../../data/contact"
import { useTranslation } from "../../i18n"
import { SectionHeading } from "../common/SectionHeading"
import { ContactCard } from "./ContactCard"
import styles from "./ContactSection.module.css"

export function ContactSection() {
  const { t } = useTranslation()

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

          <div className={`${styles.grid} ${hasTrainsPhone ? styles.gridFour : ""}`}>
            <ContactCard
              href={contactInfo.phoneHref}
              icon={<Phone size={20} strokeWidth={2.1} />}
              title={t("reach.call")}
              value={contactInfo.phoneDisplay}
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
                  {contactInfo.address.country}
                </>
              }
              copy={t("reach.visitCopy")}
              cta={t("reach.visitCta")}
              external
            />
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
