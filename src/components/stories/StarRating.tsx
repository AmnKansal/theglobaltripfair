import { Star } from "lucide-react"
import { useTranslation } from "../../i18n"
import styles from "./StarRating.module.css"

type StarRatingProps = {
  rating: number
  max?: number
}

export function StarRating({ rating, max = 5 }: StarRatingProps) {
  const { t } = useTranslation()
  const display = rating.toFixed(1)
  const filled = Math.round(Math.min(max, Math.max(0, rating)))

  return (
    <div className={styles.rating} aria-label={t("stories.ratingLabel", { rating: display })}>
      <span className={styles.stars} aria-hidden="true">
        {Array.from({ length: max }, (_, index) => (
          <Star
            key={index}
            size={15}
            strokeWidth={0}
            fill="currentColor"
            className={index < filled ? styles.filled : styles.empty}
          />
        ))}
      </span>
      <span className={styles.score}>{display}</span>
    </div>
  )
}
