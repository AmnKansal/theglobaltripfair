import { useTranslation } from "../../i18n"
import { classNames } from "../../utils/classNames"
import styles from "./OfferProgress.module.css"

type OfferProgressProps = {
  count: number
  index: number
  paused: boolean
  duration: number
  onSelect: (index: number) => void
}

export function OfferProgress({ count, index, paused, duration, onSelect }: OfferProgressProps) {
  const { t } = useTranslation()

  return (
    <div className={styles.row} role="tablist" aria-label={t("offers.carouselLabel")}>
      {Array.from({ length: count }, (_, i) => {
        const selected = i === index
        return (
          <button
            key={i}
            type="button"
            role="tab"
            className={classNames(styles.item, selected && styles.active, i < index && styles.passed)}
            aria-label={`${i + 1} / ${count}`}
            aria-selected={selected}
            onClick={() => onSelect(i)}
          >
            <span className={styles.track}>
              {selected ? (
                <span
                  key={index}
                  className={styles.fill}
                  style={{
                    animationDuration: `${duration}ms`,
                    animationPlayState: paused ? "paused" : "running",
                  }}
                />
              ) : null}
            </span>
          </button>
        )
      })}
    </div>
  )
}
