import { useState, type FormEvent } from "react"
import { Button } from "../../components/common/Button"
import { contactCityLine, contactInfo, contactMapsHref, hasTrainsPhone } from "../../data/contact"
import { useTranslation } from "../../i18n"
import styles from "./Contact.module.css"

export function Contact() {
  const { t } = useTranslation()
  const [sent, setSent] = useState(false)

  // No backend inbox yet: hand the message to the visitor's email app so it really reaches us.
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const field = (name: string) => String(data.get(name) ?? "").trim()
    const interest = form.elements.namedItem("interest") as HTMLSelectElement | null
    const topic = interest?.selectedOptions[0]?.text ?? ""
    const subject = `${topic} — ${field("name")}`
    const body = `${field("message")}\n\n${field("name")}\n${field("email")}`
    window.location.href = `${contactInfo.emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <section className={styles.page}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <h1>{t("contact.title")}</h1>
          <p>{t("contact.copy")}</p>
          <div className={styles.details}>
            <a href={contactInfo.phoneHref}>
              {t("common.reservations")}: {contactInfo.phoneDisplay}
            </a>
            {hasTrainsPhone ? (
              <a href={contactInfo.trainsPhoneHref}>
                {t("common.trainReservations")}: {contactInfo.trainsPhoneDisplay}
              </a>
            ) : null}
            <a href={contactInfo.emailHref}>{contactInfo.email}</a>
            <a href={contactMapsHref} target="_blank" rel="noopener noreferrer">
              {contactInfo.address.street}
              <br />
              {contactCityLine} {contactInfo.address.zip}
              <br />
              {contactInfo.address.country}
            </a>
          </div>
        </div>

        {sent ? (
          <div className={styles.success}>
            <h2>{t("contact.successTitle")}</h2>
            <p>{t("contact.successCopy")}</p>
          </div>
        ) : (
          <form className={styles.form} onSubmit={onSubmit}>
            <label>
              {t("contact.name")}
              <input name="name" required placeholder={t("contact.namePlaceholder")} />
            </label>
            <label>
              {t("contact.email")}
              <input type="email" name="email" required placeholder={t("contact.emailPlaceholder")} />
            </label>
            <label>
              {t("contact.interest")}
              <select name="interest" defaultValue="hotels">
                <option value="flights">{t("nav.flights")}</option>
                <option value="hotels">{t("nav.hotels")}</option>
                <option value="cars">{t("nav.cars")}</option>
                <option value="cruises">{t("nav.cruises")}</option>
                <option value="trains">{t("nav.trains")}</option>
                <option value="holidays">{t("search.holidays")}</option>
                <option value="transfers">{t("nav.transfers")}</option>
                <option value="other">{t("contact.other")}</option>
              </select>
            </label>
            <label>
              {t("contact.message")}
              <textarea name="message" required placeholder={t("contact.messagePlaceholder")} />
            </label>
            <Button type="submit" variant="primary">
              {t("common.sendMessage")}
            </Button>
          </form>
        )}
      </div>
    </section>
  )
}
