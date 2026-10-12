import { Check, Lightbulb, Phone } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "../../components/common/Button"
import { PhoneStrip } from "../../components/common/PhoneStrip"
import { contactInfo } from "../../data/contact"
import {
  destinationFlightLinks,
  flightNotice,
  flightTypeLinks,
  type BookingStep,
} from "../../data/flightPages"
import { useTranslation } from "../../i18n"
import serviceStyles from "../Services/ServicePage.module.css"
import styles from "./FlightPages.module.css"

export function HeroActions() {
  const { t } = useTranslation()
  return (
    <>
      <PhoneStrip variant="hero" />
      <Link to="/contact" className={serviceStyles.heroSecondary}>
        {t("servicePage.requestQuote")}
      </Link>
    </>
  )
}

export function TipList({ items }: { items: string[] }) {
  return (
    <ul className={styles.tipList}>
      {items.map((item) => (
        <li key={item}>
          <Lightbulb size={16} strokeWidth={2.1} aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  )
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className={styles.checks}>
      {items.map((item) => (
        <li key={item}>
          <span>
            <Check size={14} strokeWidth={2.6} aria-hidden="true" />
          </span>
          {item}
        </li>
      ))}
    </ul>
  )
}

export function StepsPanel({ id, title, copy, steps }: { id: string; title: string; copy?: string; steps: BookingStep[] }) {
  return (
    <section className={serviceStyles.panel} aria-labelledby={id}>
      <h2 id={id}>{title}</h2>
      {copy ? <p className={styles.sectionLead}>{copy}</p> : null}
      <ol className={serviceStyles.steps}>
        {steps.map((step, index) => (
          <li key={step.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

export function FlightNotice() {
  return <p className={serviceStyles.notice}>{flightNotice}</p>
}

export function FlightCta({ title, copy }: { title: string; copy: string }) {
  const { t } = useTranslation()
  return (
    <section className={serviceStyles.cta}>
      <h2>{title}</h2>
      <p>{copy}</p>
      <div className={serviceStyles.actions}>
        <a className={serviceStyles.callLight} href={contactInfo.phoneHref}>
          <Phone size={16} strokeWidth={2.2} aria-hidden="true" />
          {contactInfo.phoneDisplay}
        </a>
        <Button to="/contact" variant="primary">
          {t("servicePage.requestQuote")}
        </Button>
      </div>
    </section>
  )
}

/** Cross-links to every other flight page, leaving out the one being shown. */
export function RelatedFlights({ current }: { current: string }) {
  const { t } = useTranslation()
  const destinations = destinationFlightLinks.filter((item) => item.to !== current)
  const types = flightTypeLinks.filter((item) => item.to !== current)

  return (
    <nav className={styles.related} aria-label="More flight guides">
      <div>
        <h2>{t("footer.flightDestinations")}</h2>
        <div className={styles.relatedLinks}>
          {destinations.map((item) => (
            <Link key={item.to} to={item.to}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div>
        <h2>{t("footer.flightTypes")}</h2>
        <div className={styles.relatedLinks}>
          {types.map((item) => (
            <Link key={item.to} to={item.to}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
