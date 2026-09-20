import { trustMetrics } from "../../data/trustMetrics"
import { useInViewOnce } from "../../hooks/useInViewOnce"
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion"
import { useTranslation } from "../../i18n"
import { SectionHeading } from "../common/SectionHeading"
// import { AirlineMarquee } from "./AirlineMarquee"
import { AnimatedMetric } from "./AnimatedMetric"
import styles from "./WhyChooseUs.module.css"

export function WhyChooseUs() {
  const { t } = useTranslation()
  const reducedMotion = usePrefersReducedMotion()
  const { ref, visible } = useInViewOnce<HTMLDivElement>(0.2)

  return (
    <section className={styles.section} aria-labelledby="choose-title">
      <div className={`container ${styles.intro}`}>
        <SectionHeading
          eyebrow={t("choose.eyebrow")}
          title={t("choose.title")}
          titleId="choose-title"
          copy={t("choose.copy")}
        />

        <div className={`${styles.metrics} ${visible ? styles.metricsActive : ""}`} ref={ref}>
          {trustMetrics.map((metric, index) => (
            <AnimatedMetric
              key={metric.id}
              value={metric.value}
              prefix={metric.prefix}
              suffix={metric.suffix}
              displayValue={metric.displayValue}
              animate={metric.animate}
              delay={index * 120}
              active={visible}
              reducedMotion={reducedMotion}
              label={t(metric.labelKey)}
              description={t(metric.descriptionKey)}
            />
          ))}
        </div>

        <p className={styles.statement}>{t("choose.statement")}</p>
      </div>

      {/* <div className={styles.network}>
        <div className={`container ${styles.networkCopy}`}>
          <p className={styles.networkEyebrow}>{t("choose.networkEyebrow")}</p>
          <h3>{t("choose.networkTitle")}</h3>
          <p>{t("choose.networkCopy")}</p>
        </div>
        <AirlineMarquee />
      </div> */}
    </section>
  )
}
