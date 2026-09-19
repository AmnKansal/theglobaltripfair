import { useEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { TESTIMONIAL_AUTOPLAY_MS, testimonials } from "../../data/testimonials"
import { useInView } from "../../hooks/useInView"
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion"
import { useTranslation } from "../../i18n"
import { classNames } from "../../utils/classNames"
import { SectionHeading } from "../common/SectionHeading"
import { TestimonialCard } from "./TestimonialCard"
import styles from "./StoriesSection.module.css"

const SWIPE_THRESHOLD = 48
const pad = (value: number) => String(value).padStart(2, "0")

export function StoriesSection() {
  const { t } = useTranslation()
  const reducedMotion = usePrefersReducedMotion()
  const { ref, visible } = useInView<HTMLElement>(0.22)
  const count = testimonials.length
  const [index, setIndex] = useState(0)
  const [hovering, setHovering] = useState(false)
  const pointerStart = useRef<number | null>(null)
  const safeIndex = count ? index % count : 0
  const paused = hovering || reducedMotion || !visible || count < 2
  const previous = testimonials[(safeIndex - 1 + count) % count]
  const current = testimonials[safeIndex]
  const next = testimonials[(safeIndex + 1) % count]

  useEffect(() => {
    if (paused) return
    const id = window.setInterval(() => {
      setIndex((currentIndex) => (currentIndex + 1) % count)
    }, TESTIMONIAL_AUTOPLAY_MS)
    return () => window.clearInterval(id)
  }, [paused, count, safeIndex])

  const goTo = (nextIndex: number) => {
    if (!count) return
    setIndex((nextIndex + count) % count)
  }

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return
    if ((event.target as HTMLElement).closest("button")) return
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
    <section ref={ref} className={styles.section} aria-labelledby="stories-title">
      <div className={`container ${styles.inner}`}>
        <SectionHeading
          align="center"
          eyebrow={t("stories.eyebrow")}
          title={t("stories.title")}
          titleId="stories-title"
          copy={t("stories.copy")}
        />

        <div
          className={styles.frame}
          onMouseEnter={() => {
            if (canHoverPause()) setHovering(true)
          }}
          onMouseLeave={() => setHovering(false)}
        >
          <button
            type="button"
            className={classNames(styles.peek, styles.peekPrev)}
            onClick={() => goTo(safeIndex - 1)}
            tabIndex={-1}
            aria-hidden="true"
          >
            <TestimonialCard testimonial={previous} variant="peek" />
          </button>

          <div
            className={styles.stage}
            tabIndex={0}
            aria-roledescription="carousel"
            aria-label={t("stories.carouselLabel")}
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
            onPointerCancel={() => {
              pointerStart.current = null
            }}
            onKeyDown={onKeyDown}
          >
            {testimonials.map((item, itemIndex) => (
              <div
                key={item.id}
                className={classNames(styles.slide, itemIndex === safeIndex && styles.active)}
              >
                <TestimonialCard testimonial={item} active={itemIndex === safeIndex} />
              </div>
            ))}
          </div>

          <button
            type="button"
            className={classNames(styles.peek, styles.peekNext)}
            onClick={() => goTo(safeIndex + 1)}
            tabIndex={-1}
            aria-hidden="true"
          >
            <TestimonialCard testimonial={next} variant="peek" />
          </button>
        </div>

        <p className={styles.liveStatus} aria-live="polite">
          {t(current.textKey)}
        </p>

        <div className={styles.controls}>
          <div className={styles.nav}>
            <button type="button" className={styles.arrow} onClick={() => goTo(safeIndex - 1)} aria-label={t("stories.prev")}>
              <ChevronLeft size={18} strokeWidth={2.2} />
            </button>
            <p className={styles.count} aria-hidden="true">
              {t("stories.slideOf", { current: pad(safeIndex + 1), total: pad(count) })}
            </p>
            <button type="button" className={styles.arrow} onClick={() => goTo(safeIndex + 1)} aria-label={t("stories.next")}>
              <ChevronRight size={18} strokeWidth={2.2} />
            </button>
          </div>

          <div className={styles.progress} role="tablist" aria-label={t("stories.carouselLabel")}>
            {testimonials.map((item, itemIndex) => {
              const selected = itemIndex === safeIndex
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  className={classNames(styles.dot, selected && styles.dotActive)}
                  aria-label={t("stories.goTo", { current: itemIndex + 1, total: count })}
                  aria-selected={selected}
                  onClick={() => goTo(itemIndex)}
                >
                  <span className={styles.track}>
                    {selected ? (
                      <span
                        key={safeIndex}
                        className={styles.fill}
                        style={{
                          animationDuration: `${TESTIMONIAL_AUTOPLAY_MS}ms`,
                          animationPlayState: paused ? "paused" : "running",
                        }}
                      />
                    ) : null}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
