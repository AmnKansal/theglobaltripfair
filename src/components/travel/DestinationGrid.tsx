import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"
import { destinations } from "../../data/destinations"
import { useTranslation } from "../../i18n"
import { SectionHeading } from "../common/SectionHeading"
import styles from "./DestinationGrid.module.css"

export function DestinationGrid() {
  const { t } = useTranslation()

  return (
    <section className={styles.section} id="destinations">
      <div className="container">
        <div className={styles.header}>
          <SectionHeading
            eyebrow={t("destinations.eyebrow")}
            title={t("destinations.title")}
            copy={t("destinations.copy")}
          />
        </div>
        <div className={styles.grid}>
          {destinations.map((destination) => {
            const name = t(`destinations.${destination.id}.name`)
            const country = t(`destinations.${destination.id}.country`)
            return (
              <Link key={destination.id} to={destination.to} className={styles.card}>
                <img
                  src={destination.image}
                  alt={`${name}, ${country}`}
                  width={800}
                  height={600}
                  loading="lazy"
                />
                <div className={styles.shade} />
                <div className={styles.body}>
                  <p className={styles.country}>{country}</p>
                  <h3>{name}</h3>
                  <span className={styles.cta}>
                    {t("common.explore")} <ArrowUpRight size={16} />
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
