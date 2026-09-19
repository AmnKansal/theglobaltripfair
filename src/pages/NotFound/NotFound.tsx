import { Button } from "../../components/common/Button"
import { useTranslation } from "../../i18n"
import styles from "./NotFound.module.css"

export function NotFound() {
  const { t } = useTranslation()

  return (
    <section className={styles.page}>
      <div className="container">
        <h1>{t("notFound.title")}</h1>
        <p>{t("notFound.copy")}</p>
        <div className={styles.actions}>
          <Button to="/" variant="primary">
            {t("common.backHome")}
          </Button>
          <Button to="/#destinations" variant="outline">
            {t("common.exploreDestinations")}
          </Button>
        </div>
      </div>
    </section>
  )
}
