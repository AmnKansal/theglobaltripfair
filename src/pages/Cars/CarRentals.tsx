import { useId } from "react"
import { CarFront, Check, ChevronDown, Mail } from "lucide-react"
import { Link } from "react-router-dom"
import { PhoneStrip } from "../../components/common/PhoneStrip"
import { carRentals as doc } from "../../data/carRentals"
import { contactInfo } from "../../data/contact"
import { servicePageLinks } from "../../data/servicePages"
import { useTranslation } from "../../i18n"
import styles from "./CarRentals.module.css"

const related = servicePageLinks.filter((item) => item.to !== "/cars")

export function CarRentals() {
  const { t } = useTranslation()
  const id = useId()
  const [pickup, dropoff] = doc.route

  return (
    <article className={styles.page}>
      <section className={styles.hero}>
        <div className="container-wide">
          <div className={styles.stage}>
            <div className={styles.media}>
              <img
                src={doc.heroImage}
                alt={doc.heroAlt}
                width={1600}
                height={1067}
                fetchPriority="high"
                loading="eager"
              />
            </div>
            <div className={styles.heroCopy}>
              <h1>
                {doc.title.split("\n").map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </h1>
              <p>{doc.lead}</p>
              <div className={styles.heroActions}>
                <PhoneStrip variant="hero" showCars showMain={false} />
                <Link to="/contact" className={styles.quoteLink}>
                  {t("servicePage.requestQuote")}
                </Link>
              </div>
            </div>

            <aside className={styles.slip} aria-labelledby={`${id}-slip`}>
              <h2 id={`${id}-slip`} className={styles.slipTitle}>
                <CarFront size={18} strokeWidth={2.1} aria-hidden="true" />
                {doc.slipTitle}
              </h2>
              <dl className={styles.slipGrid}>
                <div className={styles.route}>
                  <div>
                    <dt>{pickup.label}</dt>
                    <dd>{pickup.value}</dd>
                  </div>
                  <span className={styles.routeLine} aria-hidden="true" />
                  <div>
                    <dt>{dropoff.label}</dt>
                    <dd>{dropoff.value}</dd>
                  </div>
                </div>
                {doc.slip.map((item) => (
                  <div key={item.label} className={styles.slipItem}>
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </div>
      </section>

      <div className="container">
        <section className={styles.classes} aria-labelledby={`${id}-classes`}>
          <div className={styles.classesHead}>
            <h2 id={`${id}-classes`}>{doc.classesTitle}</h2>
            <p>{doc.classesLead}</p>
            <p className={styles.intro}>{doc.intro}</p>
          </div>
          <div className={styles.board}>
            <table>
              <thead>
                <tr>
                  <th scope="col">Class</th>
                  <th scope="col">Good for</th>
                  <th scope="col">Seats</th>
                  <th scope="col">Bags</th>
                </tr>
              </thead>
              <tbody>
                {doc.classes.map((item) => (
                  <tr key={item.name}>
                    <th scope="row">{item.name}</th>
                    <td data-label="Good for">{item.goodFor}</td>
                    <td data-label="Seats">{item.seats}</td>
                    <td data-label="Bags">{item.bags}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className={styles.boardNote}>{doc.classesNote}</p>
          </div>
        </section>

        <section className={styles.included} aria-labelledby={`${id}-included`}>
          <img src={doc.includedImage} alt={doc.includedAlt} width={1600} height={1067} loading="lazy" />
          <div>
            <h2 id={`${id}-included`}>{doc.includedTitle}</h2>
            <ul className={styles.checks}>
              {doc.included.map((item) => (
                <li key={item}>
                  <span>
                    <Check size={14} strokeWidth={2.6} aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.steps} aria-labelledby={`${id}-steps`}>
          <h2 id={`${id}-steps`}>{doc.stepsTitle}</h2>
          <ol>
            {doc.steps.map((step, index) => (
              <li key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.trips} aria-labelledby={`${id}-trips`}>
          <div className={styles.tripsHead}>
            <h2 id={`${id}-trips`}>{doc.tripsTitle}</h2>
            <p>{doc.tripsLead}</p>
          </div>
          <ul>
            {doc.trips.map((trip) => (
              <li key={trip.title}>
                <h3>{trip.title}</h3>
                <p>{trip.copy}</p>
              </li>
            ))}
          </ul>
        </section>

        <div className={styles.help}>
          <section className={styles.pickup} aria-labelledby={`${id}-pickup`}>
            <h2 id={`${id}-pickup`}>{doc.pickupTitle}</h2>
            <p>{doc.pickupLead}</p>
            <ul className={styles.checks}>
              {doc.pickup.map((item) => (
                <li key={item}>
                  <span>
                    <Check size={14} strokeWidth={2.6} aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
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
          <img src={doc.ctaImage} alt="" width={2000} height={1250} loading="lazy" />
          <div className={styles.ctaCopy}>
            <h2 id={`${id}-cta`}>{doc.ctaTitle}</h2>
            <p>{doc.ctaCopy}</p>
            <div className={styles.ctaActions}>
              <PhoneStrip variant="dark" showCars showMain={false} />
              <a className={styles.emailLink} href={contactInfo.emailHref}>
                <Mail size={16} strokeWidth={2.2} aria-hidden="true" />
                {contactInfo.email}
              </a>
            </div>
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
