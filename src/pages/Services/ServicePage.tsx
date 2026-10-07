import { useId, useState } from "react"
import { Check, ChevronDown, Phone, MapPin, Shield, Clock, Users } from "lucide-react"
import { Button } from "../../components/common/Button"
import { PhoneStrip } from "../../components/common/PhoneStrip"
import { SearchCard } from "../../components/travel/SearchCard"
import { contactInfo } from "../../data/contact"
import { getServicePage, servicePageLinks, type ServicePageSlug } from "../../data/servicePages"
import { useTranslation } from "../../i18n"
import { Link } from "react-router-dom"
import styles from "./ServicePage.module.css"

const extraIcons = [MapPin, Shield, Clock, Users]

type ServicePageProps = {
  slug: ServicePageSlug
}

export function ServicePage({ slug }: ServicePageProps) {
  const { t } = useTranslation()
  const doc = getServicePage(slug)
  const related = servicePageLinks.filter((item) => item.slug !== slug)

  return (
    <article className={styles.page}>
      <header className={styles.hero}>
        <img src={doc.heroImage} alt={doc.heroAlt} width={1920} height={1080} fetchPriority="high" />
        <div className={styles.heroShade} />
        <div className={`container ${styles.heroCopy}`}>
          <p className={styles.eyebrow}>
            <span className={styles.dot} />
            {doc.eyebrow}
          </p>
          <h1>{doc.title}</h1>
          <p className={styles.lead}>{doc.lead}</p>
          <div className={styles.actions}>
            {slug === "cars" ? (
              <PhoneStrip variant="hero" showCars />
            ) : (
              <a className={styles.call} href={contactInfo.phoneHref}>
                <Phone size={16} strokeWidth={2.2} aria-hidden="true" />
                {t("servicePage.callNow")} {contactInfo.phoneDisplay}
              </a>
            )}
            <Link to="/contact" className={styles.heroSecondary}>
              {t("servicePage.requestQuote")}
            </Link>
          </div>
        </div>
      </header>

      <div className={styles.body}>
        <div className="container">
          <ul className={styles.highlights}>
            {doc.highlights.map((item, index) => {
              const Icon = extraIcons[index] ?? MapPin
              return (
              <li key={item.title}>
                <span className={styles.highlightIcon}>
                  <Icon size={18} strokeWidth={2.1} aria-hidden="true" />
                </span>
                <h2>{item.title}</h2>
                <p>{item.copy}</p>
              </li>
              )
            })}
          </ul>

          <div className={styles.intro}>
            {doc.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
            {doc.notice ? <p className={styles.notice}>{doc.notice}</p> : null}
          </div>

          {doc.searchTab ? (
            <div className={styles.search}>
              <SearchCard defaultTab={doc.searchTab} />
              <p className={styles.searchNote}>
                <strong>{t("categories.bookingLead")}</strong> {t("categories.bookingBody", { service: t(`nav.${slug}`) })}
              </p>
            </div>
          ) : null}

          <section className={styles.picks} aria-labelledby={`${slug}-picks`}>
            <div className={styles.sectionHead}>
              <p className={styles.kicker}>{t("servicePage.featured")}</p>
              <h2 id={`${slug}-picks`}>{doc.picksTitle}</h2>
              <p>{doc.picksCopy}</p>
            </div>
            <div className={styles.pickGrid}>
              {doc.picks.map((pick) => (
                <article key={pick.title} className={styles.pick}>
                  <img src={pick.image} alt={pick.imageAlt} width={800} height={560} loading="lazy" />
                  <div>
                    <h3>{pick.title}</h3>
                    <p>{pick.copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <div className={styles.split}>
            <section className={styles.panel} aria-labelledby={`${slug}-included`}>
              <p className={styles.kicker}>{t("servicePage.included")}</p>
              <h2 id={`${slug}-included`}>{t("servicePage.includedTitle")}</h2>
              <ul className={styles.checklist}>
                {doc.included.map((item) => (
                  <li key={item}>
                    <span>
                      <Check size={16} strokeWidth={2.6} aria-hidden="true" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className={styles.panel} aria-labelledby={`${slug}-steps`}>
              <p className={styles.kicker}>{t("servicePage.howItWorks")}</p>
              <h2 id={`${slug}-steps`}>{t("servicePage.stepsTitle")}</h2>
              <ol className={styles.steps}>
                {doc.steps.map((step, index) => (
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
          </div>

          <section className={styles.know} aria-labelledby={`${slug}-know`}>
            <div className={styles.sectionHead}>
              <p className={styles.kicker}>{t("servicePage.goodToKnow")}</p>
              <h2 id={`${slug}-know`}>{doc.knowTitle}</h2>
            </div>
            <div className={styles.knowGrid}>
              {doc.knowItems.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
          </section>

          <FaqList slug={slug} faqs={doc.faqs} title={t("servicePage.faq")} />

          <section className={styles.cta}>
            <h2>{doc.ctaTitle}</h2>
            <p>{doc.ctaCopy}</p>
            <div className={styles.actions}>
              {slug === "cars" ? (
                <PhoneStrip variant="dark" showCars />
              ) : (
                <a className={styles.callLight} href={contactInfo.phoneHref}>
                  <Phone size={16} strokeWidth={2.2} aria-hidden="true" />
                  {contactInfo.phoneDisplay}
                </a>
              )}
              <Button to="/contact" variant="primary">
                {t("servicePage.requestQuote")}
              </Button>
            </div>
          </section>

          <nav className={styles.related} aria-label={t("servicePage.related")}>
            <p>{t("servicePage.related")}</p>
            <div>
              {related.map((item) => (
                <Link key={item.to} to={item.to}>
                  {t(item.labelKey)}
                </Link>
              ))}
              <Link to="/flights">{t("nav.flights")}</Link>
            </div>
          </nav>
        </div>
      </div>
    </article>
  )
}

function FaqList({
  slug,
  faqs,
  title,
}: {
  slug: string
  faqs: { question: string; answer: string }[]
  title: string
}) {
  const headingId = useId()
  const [open, setOpen] = useState(0)

  return (
    <section className={styles.faq} aria-labelledby={headingId}>
      <h2 id={headingId}>{title}</h2>
      <div className={styles.faqList}>
        {faqs.map((item, index) => {
          const isOpen = open === index
          const panelId = `${slug}-faq-${index}`
          return (
            <div key={item.question} className={isOpen ? styles.faqOpen : undefined}>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : index)}
              >
                {item.question}
                <ChevronDown size={18} aria-hidden="true" />
              </button>
              <div id={panelId} hidden={!isOpen} className={styles.faqAnswer}>
                <p>{item.answer}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
