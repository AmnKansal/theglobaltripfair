import type { ReactNode } from "react"
import type { Locale } from "../../i18n"
import styles from "./LanguageFlag.module.css"

/** Drawn in a 24×24 square; the round crop comes from CSS. */
const flags: Record<Locale, ReactNode> = {
  en: (
    <>
      <rect width="24" height="24" fill="#FFFFFF" />
      <path fill="#B22234" d="M0 0h24v3.43H0zM0 6.86h24v3.43H0zM0 13.71h24v3.43H0zM0 20.57h24V24H0z" />
      <rect width="13" height="13.71" fill="#3C3B6E" />
      <g fill="#FFFFFF">
        <circle cx="5.6" cy="4.2" r="0.85" />
        <circle cx="9.2" cy="4.2" r="0.85" />
        <circle cx="3.8" cy="7.5" r="0.85" />
        <circle cx="7.4" cy="7.5" r="0.85" />
        <circle cx="11" cy="7.5" r="0.85" />
        <circle cx="5.6" cy="10.8" r="0.85" />
        <circle cx="9.2" cy="10.8" r="0.85" />
      </g>
    </>
  ),
  es: (
    <>
      <rect width="24" height="24" fill="#AA151B" />
      <rect y="6" width="24" height="12" fill="#F1BF00" />
    </>
  ),
  fr: (
    <>
      <rect width="8" height="24" fill="#0055A4" />
      <rect x="8" width="8" height="24" fill="#FFFFFF" />
      <rect x="16" width="8" height="24" fill="#EF4135" />
    </>
  ),
  de: (
    <>
      <rect width="24" height="8" fill="#000000" />
      <rect y="8" width="24" height="8" fill="#DD0000" />
      <rect y="16" width="24" height="8" fill="#FFCE00" />
    </>
  ),
  it: (
    <>
      <rect width="8" height="24" fill="#009246" />
      <rect x="8" width="8" height="24" fill="#FFFFFF" />
      <rect x="16" width="8" height="24" fill="#CE2B37" />
    </>
  ),
  pt: (
    <>
      <rect width="24" height="24" fill="#DA291C" />
      <rect width="9.6" height="24" fill="#046A38" />
      <circle cx="9.6" cy="12" r="4.4" fill="#FFE000" />
      <rect x="8.1" y="9.9" width="3" height="3.9" rx="1" fill="#FFFFFF" />
      <rect x="8.75" y="10.55" width="1.7" height="2.6" rx="0.5" fill="#DA291C" />
    </>
  ),
}

/** Round SVG flag: emoji flags show as two letters on Windows, so they are drawn here instead. */
export function LanguageFlag({ code }: { code: Locale }) {
  return (
    <span className={styles.flag} aria-hidden="true">
      <svg viewBox="0 0 24 24" focusable="false">
        {flags[code]}
      </svg>
    </span>
  )
}
