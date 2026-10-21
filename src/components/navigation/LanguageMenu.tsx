import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react"
import { Check, ChevronDown } from "lucide-react"
import { languageMeta, useTranslation, type Locale } from "../../i18n"
import { useOnClickOutside } from "../../hooks/useOnClickOutside"
import { classNames } from "../../utils/classNames"
import { LanguageFlag } from "./LanguageFlag"
import styles from "./LanguageMenu.module.css"

const initials = (code: Locale) => code.toUpperCase()

/** Header language button: the current flag and initials, opening the list of languages. */
export function LanguageMenu() {
  const { locale, setLocale, t, languages } = useTranslation()
  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(() => languages.indexOf(locale))
  const wrapRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const optionRefs = useRef<Array<HTMLButtonElement | null>>([])
  const listId = useId()

  useOnClickOutside(wrapRef, () => setOpen(false), open)

  useEffect(() => {
    if (!open) return
    optionRefs.current[activeIndex]?.focus()
  }, [open, activeIndex])

  // Opens on the current language, so arrow keys start from it.
  const openMenu = () => {
    setActiveIndex(Math.max(0, languages.indexOf(locale)))
    setOpen(true)
  }

  const selectLocale = (next: Locale) => {
    setLocale(next)
    setOpen(false)
    triggerRef.current?.focus()
  }

  const onTriggerKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "ArrowDown" || event.key === "ArrowUp" || event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      openMenu()
    }
  }

  const onListKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      event.preventDefault()
      setOpen(false)
      triggerRef.current?.focus()
      return
    }
    if (event.key === "Tab") {
      setOpen(false)
      return
    }
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      selectLocale(languages[activeIndex])
      return
    }
    if (event.key === "ArrowDown") {
      event.preventDefault()
      setActiveIndex((index) => (index + 1) % languages.length)
    }
    if (event.key === "ArrowUp") {
      event.preventDefault()
      setActiveIndex((index) => (index - 1 + languages.length) % languages.length)
    }
    if (event.key === "Home") {
      event.preventDefault()
      setActiveIndex(0)
    }
    if (event.key === "End") {
      event.preventDefault()
      setActiveIndex(languages.length - 1)
    }
  }

  return (
    <div className={styles.wrap} ref={wrapRef}>
      <button
        ref={triggerRef}
        type="button"
        className={classNames(styles.trigger, open && styles.open)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={open ? listId : undefined}
        aria-label={`${t("a11y.selectLanguage")}: ${languageMeta[locale].nativeName} (${initials(locale)})`}
        onClick={() => (open ? setOpen(false) : openMenu())}
        onKeyDown={onTriggerKeyDown}
      >
        <LanguageFlag code={locale} />
        <span className={styles.code}>{initials(locale)}</span>
        <ChevronDown size={14} strokeWidth={2.4} className={styles.chevron} aria-hidden="true" />
      </button>

      {open ? (
        <div
          id={listId}
          className={styles.menu}
          role="listbox"
          aria-label={t("a11y.selectLanguage")}
          onKeyDown={onListKeyDown}
        >
          {languages.map((code, index) => (
            <button
              key={code}
              ref={(node) => {
                optionRefs.current[index] = node
              }}
              type="button"
              role="option"
              aria-selected={code === locale}
              className={classNames(styles.option, code === locale && styles.selected)}
              tabIndex={index === activeIndex ? 0 : -1}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => selectLocale(code)}
            >
              <LanguageFlag code={code} />
              <span className={styles.code} aria-hidden="true">
                {initials(code)}
              </span>
              <span className={styles.name} lang={languageMeta[code].htmlLang}>
                {languageMeta[code].nativeName}
              </span>
              {code === locale ? <Check size={16} strokeWidth={2.4} className={styles.check} aria-hidden="true" /> : null}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  )
}

/** Mobile menu version: every language visible at once, one tap to switch. */
export function LanguageList({ onSelect }: { onSelect?: () => void }) {
  const { locale, setLocale, t, languages } = useTranslation()
  const labelId = useId()

  return (
    <div className={styles.list}>
      <p id={labelId} className={styles.listLabel}>
        {t("a11y.selectLanguage")}
      </p>
      <div className={styles.listGrid} role="group" aria-labelledby={labelId}>
        {languages.map((code) => (
          <button
            key={code}
            type="button"
            aria-pressed={code === locale}
            className={classNames(styles.chip, code === locale && styles.chipActive)}
            onClick={() => {
              setLocale(code)
              onSelect?.()
            }}
          >
            <LanguageFlag code={code} />
            <span className={styles.code} aria-hidden="true">
              {initials(code)}
            </span>
            <span className={styles.name} lang={languageMeta[code].htmlLang}>
              {languageMeta[code].nativeName}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
