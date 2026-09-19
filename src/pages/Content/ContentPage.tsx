import { Button } from "../../components/common/Button"
import { useTranslation } from "../../i18n"
import styles from "../More/ComingSoon.module.css"

type ContentPageKind =
  | "about"
  | "careers"
  | "blog"
  | "help"
  | "booking"
  | "cancellation"
  | "destinations"
  | "inspiration"
  | "guides"
  | "tips"
  | "offers"
  | "terms"
  | "privacy"

export function ContentPage({ page }: { page: ContentPageKind }) {
  const { t } = useTranslation()

  return (
    <section className={styles.page}>
      <div className={`container ${styles.inner}`}>
        <h1>{t(`pages.${page}Title`)}</h1>
        <p>{t(`pages.${page}Copy`)}</p>
        <div className={styles.actions}>
          <Button to="/contact" variant="primary">
            {t("common.talkToUs")}
          </Button>
          <Button to="/" variant="outline">
            {t("common.backHome")}
          </Button>
        </div>
      </div>
    </section>
  )
}
