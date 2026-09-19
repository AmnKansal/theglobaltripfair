import { Globe2, Layers3, Sparkles, Headphones } from "lucide-react"
import { journeySteps, trustPoints } from "../../data/trust"
import { useTranslation } from "../../i18n"
import { SectionHeading } from "../common/SectionHeading"
import styles from "./TrustSection.module.css"

const icons = {
  layers: Layers3,
  globe: Globe2,
  spark: Sparkles,
  support: Headphones,
}

export function TrustSection() {
  const { t } = useTranslation()

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.panel}>
          <SectionHeading
            eyebrow={t("whyUs.eyebrow")}
            title={t("whyUs.title")}
            copy={t("whyUs.copy")}
          />

          <div className={styles.grid}>
            {trustPoints.map((point) => {
              const Icon = icons[point.icon]
              return (
                <article key={point.id} className={styles.item}>
                  <div className={styles.icon}>
                    <Icon size={20} />
                  </div>
                  <h3>{t(`whyUs.${point.id}.title`)}</h3>
                  <p>{t(`whyUs.${point.id}.description`)}</p>
                </article>
              )
            })}
          </div>

          <div className={styles.steps}>
            {journeySteps.map((item) => (
              <article key={item.id} className={styles.step}>
                <p className={styles.stepNumber}>{item.step}</p>
                <h3>{t(`whyUs.${item.id}.title`)}</h3>
                <p>{t(`whyUs.${item.id}.description`)}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
