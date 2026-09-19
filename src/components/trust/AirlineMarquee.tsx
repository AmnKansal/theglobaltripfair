import { airlines } from "../../data/airlines"
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion"
import styles from "./AirlineMarquee.module.css"

const WEIGHTS = [700, 800, 600, 750]
const SIZES = [1.08, 1.28, 1, 1.18]

export function AirlineMarquee() {
  const reducedMotion = usePrefersReducedMotion()
  const names = [...airlines]

  return (
    <div className={styles.wrap}>
      <p className={styles.srOnly}>{names.join(", ")}</p>
      <div className={`${styles.viewport} ${reducedMotion ? styles.static : ""}`} aria-hidden="true">
        <div className={styles.track}>
          {[...names, ...names].map((name, index) => (
            <span
              key={`${name}-${index}`}
              className={styles.name}
              style={{
                fontWeight: WEIGHTS[index % WEIGHTS.length],
                fontSize: `${SIZES[index % SIZES.length]}rem`,
              }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
