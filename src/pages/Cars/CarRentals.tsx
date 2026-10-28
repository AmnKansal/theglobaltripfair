import { useId, useState } from "react"
import { Check, ChevronDown, Mail, Phone } from "lucide-react"
import { Link } from "react-router-dom"
import { carRentals as doc } from "../../data/carRentals"
import { contactInfo } from "../../data/contact"
import { servicePageLinks } from "../../data/servicePages"
import { useTranslation } from "../../i18n"
import styles from "./CarRentals.module.css"

const related = servicePageLinks.filter((item) => item.to !== "/car-rentals")

function CallLink({ className }: { className: string }) {
  const { t } = useTranslation()
  return (
    <a
      className={className}
      href={contactInfo.carsPhoneHref}
      aria-label={`${t("a11y.callCarRentals")} ${contactInfo.carsPhoneDisplay}`}
    >
      <small>{t("nav.callForCarRentals")}</small>
      <strong>
        <Phone size={18} strokeWidth={2.4} aria-hidden="true" />
        {contactInfo.carsPhoneDisplay}
      </strong>
    </a>
  )
}

/** Shows seats, bags and best use for one car class at a time, with a call link to reserve it. */
function ClassPicker() {
  const id = useId()
  const [active, setActive] = useState(0)
  const current = doc.classes[active]

  return (
    <section className={styles.picker} aria-labelledby={`${id}-title`}>
      <div>
        <h2 id={`${id}-title`} className={styles.pickerTitle}>
          {doc.classesTitle}
        </h2>
        <div className={styles.pickerTabs} role="group" aria-labelledby={`${id}-title`}>
          {doc.classes.map((item, index) => (
            <button
              key={item.label}
              type="button"
              aria-pressed={index === active}
              onClick={() => setActive(index)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <p className={styles.pickerNote}>{doc.classesNote}</p>
      </div>

      <div aria-live="polite">
        {/* Keyed so each class change replays the short fade-in. */}
        <div key={current.label} className={styles.pickerPanel}>
          <p className={styles.pickerName}>{current.name}</p>
          <dl>
            <div>
              <dt>Seats</dt>
              <dd className={styles.spec}>{current.seats}</dd>
            </div>
            <div>
              <dt>Bags</dt>
              <dd className={styles.spec}>{current.bags}</dd>
            </div>
            <div>
              <dt>Good for</dt>
              <dd>{current.goodFor}</dd>
            </div>
          </dl>
          <a className={styles.reserve} href={contactInfo.carsPhoneHref}>
            <Phone size={16} strokeWidth={2.2} aria-hidden="true" />
            Call to reserve
          </a>
        </div>
      </div>
    </section>
  )
}

export function CarRentals() {
  const { t } = useTranslation()
  const id = useId()

  return (
    <article className={styles.page}>
      <section className={styles.hero}>
        <div className="container-wide">
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <h1>
                {doc.title.split("\n").map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </h1>
              <p className={styles.lead}>{doc.lead}</p>
              <CallLink className={styles.heroCall} />
              <Link to="/contact" className={styles.quoteLink}>
                {t("servicePage.requestQuote")}
              </Link>
            </div>
            <div className={styles.heroCar}>
              <img
                src={doc.heroImage}
                alt={doc.heroAlt}
                width={2000}
                height={1250}
                fetchPriority="high"
                loading="eager"
              />
            </div>
          </div>

          <ul className={styles.facts}>
            {doc.heroFacts.map((fact) => (
              <li key={fact}>
                <Check size={16} strokeWidth={2.6} aria-hidden="true" />
                {fact}
              </li>
            ))}
          </ul>

          <ClassPicker />
        </div>
      </section>

      <div className="container">
        <section className={styles.steps} aria-labelledby={`${id}-steps`}>
          <h2 id={`${id}-steps`}>{doc.stepsTitle}</h2>
          <ol>
            {doc.steps.map((step, index) => (
              <li key={step.title}>
                <span aria-hidden="true">{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.included} aria-labelledby={`${id}-included`}>
          <div className={styles.includedHead}>
            <h2 id={`${id}-included`}>{doc.includedTitle}</h2>
            <p>{doc.intro}</p>
            <img src={doc.includedImage} alt={doc.includedAlt} width={1600} height={1067} loading="lazy" />
          </div>
          <ul>
            {doc.included.map((item) => (
              <li key={item}>
                <Check size={18} strokeWidth={2.6} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.trips} aria-labelledby={`${id}-trips`}>
          <div className={styles.tripsHead}>
            <h2 id={`${id}-trips`}>{doc.tripsTitle}</h2>
            <p>{doc.tripsLead}</p>
          </div>
          <ul>
            {doc.trips.map((trip) => (
              <li key={trip.title}>
                <img src={trip.image} alt={trip.imageAlt} width={800} height={600} loading="lazy" />
                <div>
                  <h3>{trip.title}</h3>
                  <p>{trip.copy}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <div className={styles.help}>
          <section className={styles.pickup} aria-labelledby={`${id}-pickup`}>
            <h2 id={`${id}-pickup`}>{doc.pickupTitle}</h2>
            <ol>
              {doc.pickup.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </section>

          <section className={styles.faq} aria-labelledby={`${id}-faq`}>
            <h2 id={`${id}-faq`}>{doc.faqTitle}</h2>
            <div className={styles.faqList}>
              {doc.faqs.map((item, index) => (
                <details key={item.question} open={index === 0}>
                  <summary>
                    {item.question}
                    <ChevronDown size={18} aria-hidden="true" />
                  </summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </section>
        </div>

        <p className={styles.notice}>{doc.notice}</p>

        <section className={styles.cta} aria-labelledby={`${id}-cta`}>
          <div>
            <h2 id={`${id}-cta`}>{doc.ctaTitle}</h2>
            <p>{doc.ctaCopy}</p>
          </div>
          <div className={styles.ctaActions}>
            <CallLink className={styles.ctaCall} />
            <a className={styles.emailLink} href={contactInfo.emailHref}>
              <Mail size={16} strokeWidth={2.2} aria-hidden="true" />
              {contactInfo.email}
            </a>
          </div>
        </section>

        <nav className={styles.related} aria-label={t("servicePage.related")}>
          <p>{t("servicePage.related")}</p>
          <div>
            <Link to="/flights">{t("nav.flights")}</Link>
            {related.map((item) => (
              <Link key={item.to} to={item.to}>
                {t(item.labelKey)}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </article>
  )
}
