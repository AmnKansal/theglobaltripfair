import { Check, Compass, FileText, HeartHandshake, Headphones, Search } from "lucide-react"
import { Button } from "../../components/common/Button"
import { contactInfo } from "../../data/contact"
import { aboutDoc, BRAND_NAME, COMPANY_NAME, legalPageLinks } from "../../data/legal"
import { useTranslation } from "../../i18n"
import { Link } from "react-router-dom"
import styles from "./AboutPage.module.css"

const whyIcons = [Compass, Search, Headphones, FileText, HeartHandshake]

export function AboutPage() {
  const { t } = useTranslation()

  return (
    <article className={styles.page}>
      <header className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <p className={styles.eyebrow}>{COMPANY_NAME}</p>
          <h1>{aboutDoc.title}</h1>
          {aboutDoc.intro.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
          <div className={styles.actions}>
            <Button to="/contact" variant="primary">
              {t("common.talkToUs")}
            </Button>
            <a className={styles.callLink} href={contactInfo.phoneHref}>
              {t("reach.callCta")} {contactInfo.phoneDisplay}
            </a>
          </div>
        </div>
      </header>

      <div className={`container ${styles.stack}`}>
        {aboutDoc.sections.map((section) => (
          <section key={section.id} id={section.id} className={styles.block}>
            <h2>{section.title}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </section>
        ))}

        <section className={styles.block}>
          <h2>What We Do</h2>
          <p>
            {BRAND_NAME} helps travelers spend more time looking forward to the journey and less time managing a
            complicated booking process.
          </p>
          <ul className={styles.checklist}>
            {aboutDoc.whatWeDo.map((item) => (
              <li key={item}>
                <span>
                  <Check size={16} strokeWidth={2.6} aria-hidden="true" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.why}>
          <div className={styles.whyIntro}>
            <p className={styles.eyebrow}>Why choose us</p>
            <h2>Why Choose {BRAND_NAME}?</h2>
          </div>
          <div className={styles.whyGrid}>
            {aboutDoc.whyChoose.map((item, index) => {
              const Icon = whyIcons[index] ?? Compass
              return (
                <article key={item.title} className={styles.whyCard}>
                  <span className={styles.whyIcon}>
                    <Icon size={20} strokeWidth={2.1} aria-hidden="true" />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              )
            })}
          </div>
        </section>

        <section className={styles.promise}>
          <p className={styles.eyebrow}>Our promise</p>
          <h2>A calmer start to every journey.</h2>
          {aboutDoc.promise.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
          <div className={styles.actions}>
            <Button to="/flights" variant="primary">
              {t("common.planTrip")}
            </Button>
            <Button to="/contact" variant="soft">
              {t("common.talkToUs")}
            </Button>
          </div>
        </section>

        <nav className={styles.related} aria-label={t("legal.related")}>
          <p>{t("legal.related")}</p>
          <div>
            {legalPageLinks.map((item) => (
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
