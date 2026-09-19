import type { Testimonial } from "../../data/testimonials"
import { classNames } from "../../utils/classNames"
import { useTranslation } from "../../i18n"
import { StarRating } from "./StarRating"
import styles from "./TestimonialCard.module.css"

type TestimonialCardProps = {
  testimonial: Testimonial
  active?: boolean
  variant?: "feature" | "peek"
}

export function TestimonialCard({
  testimonial,
  active = false,
  variant = "feature",
}: TestimonialCardProps) {
  const { t } = useTranslation()
  const quote = t(testimonial.textKey)
  const tripType = t(testimonial.tripTypeKey)

  return (
    <article
      className={classNames(
        styles.card,
        styles[variant],
        styles[testimonial.tone],
        active && styles.active,
      )}
      aria-hidden={variant === "feature" ? !active : true}
    >
      <p className={styles.mark} aria-hidden="true">
        “
      </p>
      {variant === "feature" ? <StarRating rating={testimonial.rating} /> : null}
      <blockquote className={styles.quote}>
        <p>{quote}</p>
      </blockquote>
      <footer className={styles.identity}>
        <span className={styles.avatar} aria-hidden="true">
          {testimonial.initials}
        </span>
        <span>
          <strong>{testimonial.name}</strong>
          <span className={styles.location}>{testimonial.location}</span>
          <span className={styles.trip}>{tripType}</span>
        </span>
      </footer>
    </article>
  )
}
