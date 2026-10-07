import { useTranslation } from "../../i18n"
import { Button } from "../common/Button"
import { PhoneStrip } from "../common/PhoneStrip"
import styles from "./CtaBand.module.css"

export function CtaBand() {
  const { t } = useTranslation()

  return (
    <section className={styles.band}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.copy}>
            <h2>{t("promotion.title")}</h2>
            <p>{t("promotion.copy")}</p>
          </div>
          <div className={styles.actions}>
            <PhoneStrip variant="dark" showTrains />
            <Button to="/contact" variant="primary" size="lg">
              {t("common.planTrip")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
