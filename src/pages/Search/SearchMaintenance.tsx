import { Mail, Phone } from "lucide-react"
import { contactInfo } from "../../data/contact"
import { formatPlace, partyTotal, readLastSearch, type SearchRequest } from "../../data/search"
import { useTranslation } from "../../i18n"
import { Button } from "../../components/common/Button"
import styles from "./SearchMaintenance.module.css"

const formatDay = (iso: string, locale: string) => {
  if (!iso) return ""
  const date = new Date(`${iso}T12:00:00`)
  if (Number.isNaN(date.getTime())) return iso
  return new Intl.DateTimeFormat(locale, { day: "numeric", month: "short", year: "numeric" }).format(date)
}

const formatMonth = (iso: string, locale: string) => {
  if (!iso) return ""
  const date = new Date(`${iso}-01T12:00:00`)
  if (Number.isNaN(date.getTime())) return iso
  return new Intl.DateTimeFormat(locale, { month: "long", year: "numeric" }).format(date)
}

function summaryFor(request: SearchRequest, locale: string, t: (key: string, vars?: Record<string, string | number>) => string) {
  const people = t("search.partySummary", { count: partyTotal(request.party) })

  if (request.type === "flights" && request.from && request.to) {
    const dates = [formatDay(request.departure, locale), formatDay(request.returnDate, locale)].filter(Boolean).join(" – ")
    return `${formatPlace(request.from)} → ${formatPlace(request.to)} · ${dates} · ${people}`
  }
  if (request.type === "hotels" && request.destination) {
    return `${formatPlace(request.destination)} · ${formatDay(request.checkIn, locale)} – ${formatDay(request.checkOut, locale)} · ${people}`
  }
  if (request.type === "holidays" && request.destination) {
    return `${formatPlace(request.destination)} · ${formatMonth(request.month, locale)} · ${t(`search.${request.durationNights === 3 ? "threeNights" : request.durationNights === 10 ? "tenNights" : request.durationNights === 14 ? "fourteenNights" : "sevenNights"}`)} · ${people}`
  }
  if (request.type === "transfers" && request.pickup && request.dropoff) {
    return `${formatPlace(request.pickup)} → ${formatPlace(request.dropoff)} · ${formatDay(request.date, locale)} · ${people}`
  }
  return ""
}

export function SearchMaintenance() {
  const { t, locale } = useTranslation()
  const request = readLastSearch()
  const summary = request ? summaryFor(request, locale, t) : ""

  return (
    <section className={styles.page}>
      <div className="container">
        <div className={styles.panel}>
          <p className={styles.eyebrow}>{t("maintenance.eyebrow")}</p>
          <h1>{t("maintenance.title")}</h1>
          <p className={styles.copy}>{t("maintenance.copy")}</p>

          {summary ? (
            <div className={styles.summary}>
              <p>{t("maintenance.received")}</p>
              <strong>{summary}</strong>
            </div>
          ) : null}

          <div className={styles.contacts}>
            <a className={styles.contact} href={contactInfo.phoneHref}>
              <Phone size={18} strokeWidth={2.1} />
              <span>
                <strong>{contactInfo.phoneDisplay}</strong>
                <em>{t("maintenance.callCta")}</em>
              </span>
            </a>
            <a className={styles.contact} href={contactInfo.emailHref}>
              <Mail size={18} strokeWidth={2.1} />
              <span>
                <strong>{contactInfo.email}</strong>
                <em>{t("maintenance.emailCta")}</em>
              </span>
            </a>
          </div>

          <div className={styles.actions}>
            <Button to="/#plan" variant="soft">
              {t("maintenance.adjust")}
            </Button>
            <Button to="/contact" variant="primary">
              {t("common.talkToUs")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
