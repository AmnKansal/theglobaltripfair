import { ChevronLeft, ChevronRight } from "lucide-react"
import { useTranslation } from "../../i18n"
import styles from "./OfferControls.module.css"

type OfferControlsProps = {
  index: number
  count: number
  onPrev: () => void
  onNext: () => void
}

const pad = (value: number) => String(value).padStart(2, "0")

export function OfferControls({ index, count, onPrev, onNext }: OfferControlsProps) {
  const { t } = useTranslation()

  return (
    <div className={styles.row}>
      <button type="button" className={styles.arrow} onClick={onPrev} aria-label={t("offers.prev")}>
        <ChevronLeft size={18} strokeWidth={2.2} />
      </button>
      <p className={styles.count} aria-hidden="true">
        {t("offers.slideOf", { current: pad(index + 1), total: pad(count) })}
      </p>
      <button type="button" className={styles.arrow} onClick={onNext} aria-label={t("offers.next")}>
        <ChevronRight size={18} strokeWidth={2.2} />
      </button>
    </div>
  )
}
