import { Button } from "../../components/common/Button"
import { useTranslation } from "../../i18n"
import styles from "./ComingSoon.module.css"

type ComingSoonKind = "cruises" | "cabs" | "activities" | "insurance"

export function ComingSoon({ kind }: { kind: ComingSoonKind }) {
  const { t } = useTranslation()

  return (
    <section className={styles.page}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.eyebrow}>{t("comingSoon.eyebrow")}</p>
        <h1>{t(`comingSoon.${kind}Title`)}</h1>
        <p>{t(`comingSoon.${kind}Copy`)}</p>
        <div className={styles.actions}>
          <Button to="/#plan" variant="primary">
            {t("common.planJourney")}
          </Button>
          <Button to="/contact" variant="outline">
            {t("common.talkToUs")}
          </Button>
        </div>
      </div>
    </section>
  )
}
