import { classNames } from "../../utils/classNames"
import { padTime } from "../../utils/offerStatus"
import { useCountdown } from "../../hooks/useCountdown"
import { useTranslation } from "../../i18n"
import styles from "./CountdownTimer.module.css"

type CountdownTimerProps = {
  expiresAt: string
  now?: number
  compact?: boolean
  light?: boolean
}

export function CountdownTimer({ expiresAt, now, compact = false, light = false }: CountdownTimerProps) {
  const { t } = useTranslation()
  const remaining = useCountdown(expiresAt, now)
  const urgent = remaining.total <= 6 * 60 * 60 * 1000
  const showDays = remaining.days > 0
  const first = padTime(showDays ? remaining.days : remaining.hours)
  const second = padTime(showDays ? remaining.hours : remaining.minutes)
  const third = padTime(showDays ? remaining.minutes : remaining.seconds)
  const firstLabel = showDays ? t("offers.days") : t("offers.hours")
  const secondLabel = showDays ? t("offers.hours") : t("offers.minutes")
  const thirdLabel = showDays ? t("offers.minutes") : t("offers.seconds")
  const aria = showDays
    ? `${t("offers.endsIn")} ${remaining.days} ${t("offers.days")}, ${remaining.hours} ${t("offers.hours")}, ${remaining.minutes} ${t("offers.minutes")}`
    : `${t("offers.endsIn")} ${remaining.hours} ${t("offers.hours")}, ${remaining.minutes} ${t("offers.minutes")}, ${remaining.seconds} ${t("offers.seconds")}`

  return (
    <div
      className={classNames(
        styles.timer,
        light && styles.light,
        compact && styles.compact,
        urgent && styles.urgent,
      )}
      role="timer"
      aria-label={aria}
    >
      {compact ? null : <p className={styles.label}>{t("offers.endsIn")}</p>}
      <div className={styles.digits} aria-hidden="true">
        <span>{first}</span>
        <span className={styles.colon}>:</span>
        <span>{second}</span>
        <span className={styles.colon}>:</span>
        <span>{third}</span>
      </div>
      {compact ? null : (
        <div className={styles.units} aria-hidden="true">
          <span>{firstLabel}</span>
          <span>{secondLabel}</span>
          <span>{thirdLabel}</span>
        </div>
      )}
    </div>
  )
}
