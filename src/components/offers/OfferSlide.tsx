import { ArrowUpRight, Check } from "lucide-react"
import type { TravelOffer } from "../../data/offers"
import { getOfferStatus } from "../../utils/offerStatus"
import { classNames } from "../../utils/classNames"
import { useTranslation } from "../../i18n"
import { Button } from "../common/Button"
import { CountdownTimer } from "./CountdownTimer"
import styles from "./OfferSlide.module.css"

type OfferSlideProps = {
  offer: TravelOffer
  active: boolean
  now: number
  eager?: boolean
}

export function OfferSlide({ offer, active, now, eager = false }: OfferSlideProps) {
  const { t } = useTranslation()
  const status = getOfferStatus(offer, now)
  const imageStyle = { objectPosition: offer.imagePosition }

  return (
    <article
      className={classNames(styles.slide, active && styles.active)}
      aria-hidden={!active}
      inert={active ? undefined : true}
    >
      <div className={styles.visual}>
        <img
          className={styles.atmosphere}
          src={offer.image}
          alt=""
          aria-hidden="true"
          style={imageStyle}
        />
        <img
          className={classNames(styles.photo, offer.imageFit === "contain" && styles.contain)}
          src={offer.image}
          alt={active ? t(offer.altKey) : ""}
          width={2400}
          height={1350}
          style={imageStyle}
          loading={eager ? "eager" : "lazy"}
          fetchPriority={eager ? "high" : "low"}
          decoding="async"
        />
      </div>
      <div className={styles.gradient} />
      <div className={styles.frame}>
        <div className={styles.top}>
          <span className={classNames(styles.badge, status === "endingSoon" && styles.badgeUrgent)}>
            {status === "endingSoon" ? t("offers.endingSoon") : t(`offers.badges.${offer.badge}`)}
          </span>
          <CountdownTimer expiresAt={offer.expiresAt} now={now} />
        </div>
        <div className={styles.body}>
          <p className={styles.location}>{t(offer.locationKey)}</p>
          <h3>{t(offer.titleKey)}</h3>
          <p className={styles.copy}>{t(offer.descriptionKey)}</p>
          {offer.availableSpots != null && offer.availableSpots > 0 ? (
            <p className={styles.spots}>
              <span className={styles.dot} aria-hidden="true" />
              {t("offers.onlyLeft", { n: offer.availableSpots })}
            </p>
          ) : (
            <p className={styles.spots}>
              <span className={styles.dot} aria-hidden="true" />
              {t("offers.limitedAvailability")}
            </p>
          )}
          <div className={styles.actions}>
            <Button to={offer.to} variant="primary" className={styles.cta}>
              {t("offers.explore")}
              <ArrowUpRight size={16} />
            </Button>
            <ul className={styles.trust}>
              <li>
                <Check size={13} strokeWidth={2.6} aria-hidden="true" />
                {t("offers.trust.secure")}
              </li>
              <li>
                <Check size={13} strokeWidth={2.6} aria-hidden="true" />
                {t("offers.trust.flexible")}
              </li>
              <li>
                <Check size={13} strokeWidth={2.6} aria-hidden="true" />
                {t("offers.trust.support")}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  )
}
