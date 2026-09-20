import { useEffect, useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { Mail, MapPin, Phone } from "lucide-react"
import { contactCityLine, contactInfo, contactMapsHref } from "../../data/contact"
import { BRAND_NAME, COMPANY_NAME, LEGAL_UPDATED, getLegalDoc, legalPageLinks, type LegalSlug } from "../../data/legal"
import { useTranslation } from "../../i18n"
import { Button } from "../../components/common/Button"
import styles from "./LegalPage.module.css"

function ContactCard() {
  return (
    <div className={styles.contactCard}>
      <a href={contactInfo.phoneHref}>
        <span className={styles.contactIcon}>
          <Phone size={16} strokeWidth={2.2} aria-hidden="true" />
        </span>
        <span>
          <small>Phone</small>
          {contactInfo.phoneDisplay}
        </span>
      </a>
      <a href={contactInfo.emailHref}>
        <span className={styles.contactIcon}>
          <Mail size={16} strokeWidth={2.2} aria-hidden="true" />
        </span>
        <span>
          <small>Email</small>
          {contactInfo.email}
        </span>
      </a>
      <a href={contactMapsHref} target="_blank" rel="noopener noreferrer">
        <span className={styles.contactIcon}>
          <MapPin size={16} strokeWidth={2.2} aria-hidden="true" />
        </span>
        <span>
          <small>Address</small>
          {contactInfo.address.street}, {contactCityLine} {contactInfo.address.zip}, {contactInfo.address.country}
        </span>
      </a>
    </div>
  )
}

export function LegalPage({ slug }: { slug: LegalSlug }) {
  const { t } = useTranslation()
  const doc = getLegalDoc(slug)
  const [activeId, setActiveId] = useState(doc.sections[0]?.id ?? "")

  const sectionIds = useMemo(() => doc.sections.map((section) => section.id), [doc.sections])

  useEffect(() => {
    setActiveId(doc.sections[0]?.id ?? "")
    const nodes = sectionIds
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node))

    if (!nodes.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) setActiveId(visible.target.id)
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0.1, 0.25, 0.5] },
    )

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [doc.slug, sectionIds])

  const related = legalPageLinks.filter((item) => item.slug !== slug)

  return (
    <article className={styles.page}>
      <header className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <p className={styles.eyebrow}>{t("legal.eyebrow")}</p>
          <h1>{doc.title}</h1>
          <p className={styles.intro}>{doc.intro}</p>
          <div className={styles.meta}>
            <span>
              {t("legal.lastUpdated")} {LEGAL_UPDATED}
            </span>
            <span>
              {t("legal.operatedBy")} {COMPANY_NAME}
            </span>
          </div>
        </div>
      </header>

      <div className={`container ${styles.layout}`}>
        <aside className={styles.tocWrap}>
          <nav className={styles.toc} aria-label={t("legal.onThisPage")}>
            <p>{t("legal.onThisPage")}</p>
            <label className={styles.tocSelectLabel} htmlFor={`${slug}-toc`}>
              {t("legal.onThisPage")}
            </label>
            <select
              id={`${slug}-toc`}
              className={styles.tocSelect}
              value={activeId}
              onChange={(event) => {
                const id = event.target.value
                setActiveId(id)
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
              }}
            >
              {doc.sections.map((section) => (
                <option key={section.id} value={section.id}>
                  {section.title}
                </option>
              ))}
            </select>
            <ul>
              {doc.sections.map((section) => (
                <li key={section.id}>
                  <a className={activeId === section.id ? styles.active : undefined} href={`#${section.id}`}>
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <div className={styles.content}>
          {doc.sections.map((section, index) => (
            <section key={section.id} id={section.id} className={styles.section}>
              <div className={styles.sectionHead}>
                <span className={styles.index}>{String(index + 1).padStart(2, "0")}</span>
                <h2>{section.title}</h2>
              </div>
              {section.blocks.map((block, blockIndex) => {
                if (block.type === "p") return <p key={blockIndex}>{block.text}</p>
                if (block.type === "h3") return <h3 key={blockIndex}>{block.text}</h3>
                if (block.type === "ul") {
                  return (
                    <ul key={blockIndex} className={styles.list}>
                      {block.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )
                }
                if (block.type === "note") {
                  return (
                    <p key={blockIndex} className={styles.note}>
                      {block.text}
                    </p>
                  )
                }
                return <ContactCard key={blockIndex} />
              })}
            </section>
          ))}

          <aside className={styles.help}>
            <div>
              <p className={styles.eyebrow}>{BRAND_NAME}</p>
              <h2>{t("legal.questions")}</h2>
              <p>{t("legal.questionsCopy")}</p>
            </div>
            <div className={styles.helpActions}>
              <Button to="/contact" variant="primary">
                {t("common.talkToUs")}
              </Button>
              <a className={styles.callLink} href={contactInfo.phoneHref}>
                {t("reach.callCta")}
              </a>
            </div>
          </aside>

          <nav className={styles.related} aria-label={t("legal.related")}>
            <p>{t("legal.related")}</p>
            <div>
              {related.map((item) => (
                <Link key={item.to} to={item.to}>
                  {t(item.labelKey)}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </article>
  )
}
