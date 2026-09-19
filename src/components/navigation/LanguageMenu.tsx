import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react"
import { Check, ChevronDown, Globe } from "lucide-react"
import { languageMeta, type Locale } from "../../i18n"
import { useTranslation } from "../../i18n"
import { useOnClickOutside } from "../../hooks/useOnClickOutside"
import styles from "./LanguageMenu.module.css"

type LanguageMenuProps = {
  variant?: "header" | "panel"
}

export function LanguageMenu({ variant = "header" }: LanguageMenuProps) {
  const { locale, setLocale, t, languages } = useTranslation()
  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(() => languages.indexOf(locale))
  const wrapRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const optionRefs = useRef<Array<HTMLButtonElement | null>>([])
  const listId = useId()

  useOnClickOutside(wrapRef, () => setOpen(false), open)

  useEffect(() => {
    setActiveIndex(Math.max(0, languages.indexOf(locale)))
  }, [locale, languages])

  useEffect(() => {
    if (!open) return
    optionRefs.current[activeIndex]?.focus()
  }, [open, activeIndex])

  const selectLocale = (next: Locale) => {
    setLocale(next)
    setOpen(false)
    triggerRef.current?.focus()
  }

  const onTriggerKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "ArrowDown" || event.key === "ArrowUp" || event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      setOpen(true)
    }
  }

  const onListKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      event.preventDefault()
      setOpen(false)
      triggerRef.current?.focus()
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
    <div className={`${styles.wrap} ${variant === "panel" ? styles.panel : ""}`} ref={wrapRef}>
      <button
        ref={triggerRef}
        type="button"
        className={`${styles.trigger} ${open ? styles.open : ""}`}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-label={t("a11y.selectLanguage")}
        onClick={() => setOpen((value) => !value)}
        onKeyDown={onTriggerKeyDown}
      >
        <Globe size={16} strokeWidth={2} aria-hidden="true" />
        <span>{languageMeta[locale].nativeName}</span>
        <ChevronDown size={14} className={styles.chevron} aria-hidden="true" />
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
              className={`${styles.option} ${code === locale ? styles.selected : ""}`}
              tabIndex={index === activeIndex ? 0 : -1}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => selectLocale(code)}
            >
              <span>{languageMeta[code].nativeName}</span>
              {code === locale ? <Check size={16} strokeWidth={2.4} aria-hidden="true" /> : null}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  )
}
