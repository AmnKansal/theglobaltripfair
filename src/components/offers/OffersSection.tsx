import { useEffect, useMemo, useRef, useState, type PointerEvent, type KeyboardEvent } from "react"
import { OFFER_AUTOPLAY_MS, offers } from "../../data/offers"
import { getLiveOffers } from "../../utils/offerStatus"
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion"
import { useTicker } from "../../hooks/useTicker"
import { useTranslation } from "../../i18n"
import { OfferControls } from "./OfferControls"
import { OfferProgress } from "./OfferProgress"
import { OfferSlide } from "./OfferSlide"
import styles from "./OffersSection.module.css"

const SWIPE_THRESHOLD = 56

export function OffersSection() {
  const { t } = useTranslation()
  const now = useTicker()
  const reducedMotion = usePrefersReducedMotion()
  const live = useMemo(() => getLiveOffers(offers, now), [now])
  const count = live.length
  const [index, setIndex] = useState(0)
  const [hovering, setHovering] = useState(false)
  const pointerStart = useRef<number | null>(null)
  const safeIndex = count ? index % count : 0
  const paused = hovering || reducedMotion || count < 2

  useEffect(() => {
    if (count && index >= count) setIndex(0)
  }, [count, index])

  useEffect(() => {
    if (paused) return
    const id = window.setInterval(() => {
      setIndex((current) => (count ? (current + 1) % count : 0))
    }, OFFER_AUTOPLAY_MS)
    return () => window.clearInterval(id)
  }, [paused, count, safeIndex])

  useEffect(() => {
    if (count < 2) return
    const next = live[(safeIndex + 1) % count]
    const img = new Image()
    img.src = next.image
  }, [count, live, safeIndex])

  const goTo = (next: number) => {
    if (!count) return
    setIndex((next + count) % count)
  }

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return
    if ((event.target as HTMLElement).closest("a, button")) return
    pointerStart.current = event.clientX
  }

  const onPointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (pointerStart.current == null) return
    const delta = event.clientX - pointerStart.current
    pointerStart.current = null
    if (delta > SWIPE_THRESHOLD) goTo(safeIndex - 1)
    else if (delta < -SWIPE_THRESHOLD) goTo(safeIndex + 1)
  }

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault()
      goTo(safeIndex - 1)
    }
    if (event.key === "ArrowRight") {
      event.preventDefault()
      goTo(safeIndex + 1)
    }
  }

  const canHoverPause = () => window.matchMedia("(hover: hover)").matches

  return (
    <section className={styles.section} id="live-offers" aria-labelledby="offers-title">
      <div className={`container-wide ${styles.inner}`}>
        <header className={styles.header}>
          <p className={styles.live}>
            <span className={styles.pulse} aria-hidden="true" />
            {t("offers.live")}
          </p>
          <p className={styles.eyebrow}>{t("offers.eyebrow")}</p>
          <h2 id="offers-title">{t("offers.title")}</h2>
          <p className={styles.copy}>{t("offers.copy")}</p>
        </header>

        {count ? (
          <div
            className={styles.campaign}
            onMouseEnter={() => {
              if (canHoverPause()) setHovering(true)
            }}
            onMouseLeave={() => setHovering(false)}
          >
            <div
              className={styles.stage}
              tabIndex={0}
              aria-roledescription="carousel"
              aria-label={t("offers.carouselLabel")}
              onPointerDown={onPointerDown}
              onPointerUp={onPointerUp}
              onPointerCancel={() => {
                pointerStart.current = null
              }}
              onKeyDown={onKeyDown}
            >
              {live.map((offer, i) => (
                <OfferSlide
                  key={offer.id}
                  offer={offer}
                  active={i === safeIndex}
                  now={now}
                  eager={i === safeIndex || i === (safeIndex + 1) % count}
                />
              ))}
            </div>

            <p className={styles.liveStatus} aria-live="polite">
              {t(live[safeIndex].titleKey)}
            </p>

            <div className={styles.controls}>
              <OfferControls
                index={safeIndex}
                count={count}
                onPrev={() => goTo(safeIndex - 1)}
                onNext={() => goTo(safeIndex + 1)}
              />
              <OfferProgress
                count={count}
                index={safeIndex}
                paused={paused}
                duration={OFFER_AUTOPLAY_MS}
                onSelect={goTo}
              />
            </div>
          </div>
        ) : (
          <p className={styles.empty}>{t("offers.empty")}</p>
        )}
      </div>
    </section>
  )
}
