import { Link } from "react-router-dom"
import { useTranslation } from "../../i18n"
import styles from "./Logo.module.css"

type LogoProps = {
  compact?: boolean
  theme?: "dark" | "light"
}

export function Logo({ compact = false, theme = "dark" }: LogoProps) {
  const { t } = useTranslation()
  const light = theme === "light"
  const src = compact ? "/icon.png" : light ? "/logo-white.png" : "/logo.png"

  return (
    <Link
      to="/"
      className={`${styles.brand} ${compact ? styles.compact : ""} ${light ? styles.light : ""}`}
      aria-label={t("a11y.home")}
    >
      <img
        src={src}
        alt=""
        className={compact ? styles.icon : styles.logo}
        height={compact ? 40 : 48}
        width={compact ? 40 : 173}
      />
    </Link>
  )
}
