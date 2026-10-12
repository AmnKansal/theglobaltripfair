import type { ReactNode } from "react"
import { classNames } from "../../utils/classNames"
import styles from "./Hero.module.css"

type PageHeroProps = {
  title: ReactNode
  copy: ReactNode
  image: string
  imageAlt: string
  actions?: ReactNode
  search?: ReactNode
  searchId?: string
  /** "home" keeps the largest headline; inner pages step down one size. */
  variant?: "home" | "page"
}

/**
 * The home-page hero stage, shared so every page opens with the same layout.
 * A string title may carry "\n" to set where the second line starts.
 */
export function PageHero({
  title,
  copy,
  image,
  imageAlt,
  actions,
  search,
  searchId,
  variant = "page",
}: PageHeroProps) {
  const heading =
    typeof title === "string" ? title.split("\n").map((line) => <span key={line}>{line}</span>) : title

  return (
    <section className={styles.hero}>
      <div className="container-wide">
        <div className={classNames(styles.stage, !search && styles.compact)}>
          <div className={styles.media}>
            <img
              className={styles.image}
              src={image}
              alt={imageAlt}
              width={1920}
              height={1080}
              fetchPriority="high"
              loading="eager"
            />
            <div className={styles.overlay} />
          </div>
          <div className={styles.content}>
            <h1 className={classNames(styles.title, variant === "page" && styles.pageTitle)}>{heading}</h1>
            <p className={styles.copy}>{copy}</p>
            {actions ? <div className={styles.actions}>{actions}</div> : null}
          </div>
          {search ? (
            <div className={styles.searchWrap} id={searchId}>
              {search}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
