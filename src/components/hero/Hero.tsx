import { media } from "../../data/media"
import { useTranslation } from "../../i18n"
import { PhoneStrip } from "../common/PhoneStrip"
import { SearchCard } from "../travel/SearchCard"
import styles from "./Hero.module.css"

export function Hero() {
  const { t } = useTranslation()

  return (
    <section className={styles.hero}>
      <div className="container-wide">
        <div className={styles.stage}>
          <img
            className={styles.image}
            src={media.hero}
            alt={t("hero.imageAlt")}
            width={1920}
            height={1080}
            fetchPriority="high"
            loading="eager"
          />
          <div className={styles.overlay} />
          <div className={styles.content}>
            <p className={styles.eyebrow}>
              <span className={styles.dot} />
              {t("hero.eyebrow")}
            </p>
            <h1 className={styles.title}>
              <span>{t("hero.titleLine1")}</span>
              <span>{t("hero.titleLine2")}</span>
            </h1>
            <p className={styles.copy}>{t("hero.description")}</p>
            <div className={styles.meta}>
              <span>{t("hero.meta1")}</span>
              <span>{t("hero.meta2")}</span>
              <span>{t("hero.meta3")}</span>
            </div>
            <PhoneStrip variant="hero" className={styles.phones} />
          </div>
        </div>
        <div className={styles.searchWrap} id="plan">
          <SearchCard />
        </div>
      </div>
    </section>
  )
}
