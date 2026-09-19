import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react"
import { MapPin } from "lucide-react"
import type { PlaceRef } from "../../data/search"
import { useLocationSuggest } from "../../hooks/useLocationSuggest"
import { useOnClickOutside } from "../../hooks/useOnClickOutside"
import { useTranslation } from "../../i18n"
import { classNames } from "../../utils/classNames"
import styles from "./SearchCard.module.css"

type LocationFieldProps = {
  label: string
  placeholder: string
  value: PlaceRef | null
  query: string
  includeAirports?: boolean
  error?: string
  icon?: ReactNode
  onQueryChange: (value: string) => void
  onSelect: (place: PlaceRef) => void
}

export function LocationField({
  label,
  placeholder,
  value,
  query,
  includeAirports = false,
  error,
  icon,
  onQueryChange,
  onSelect,
}: LocationFieldProps) {
  const { t, locale } = useTranslation()
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(0)
  const wrapRef = useRef<HTMLLabelElement>(null)
  const listId = useId()
  const display = value ? (value.code ? `${value.name} (${value.code})` : value.name) : query
  const { items, loading } = useLocationSuggest(query, locale, includeAirports, open && !value)
  const showList = open && !value && query.trim().length >= 2

  useOnClickOutside(wrapRef, () => setOpen(false), open)

  const choose = (place: PlaceRef) => {
    onSelect(place)
    setOpen(false)
  }

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (!showList || !items.length) {
      if (event.key === "Escape") setOpen(false)
      return
    }
    if (event.key === "ArrowDown") {
      event.preventDefault()
      setActive((index) => (index + 1) % items.length)
    }
    if (event.key === "ArrowUp") {
      event.preventDefault()
      setActive((index) => (index - 1 + items.length) % items.length)
    }
    if (event.key === "Enter" && items[active]) {
      event.preventDefault()
      choose(items[active])
    }
    if (event.key === "Escape") {
      event.preventDefault()
      setOpen(false)
    }
  }

  return (
    <label className={classNames(styles.field, styles.suggestField)} ref={wrapRef}>
      <span>{label}</span>
      <div className={classNames(styles.input, error && styles.inputError)}>
        {icon ?? <MapPin size={16} />}
        <input
          type="text"
          autoComplete="off"
          spellCheck={false}
          placeholder={placeholder}
          value={display}
          aria-autocomplete="list"
          aria-expanded={showList}
          aria-controls={listId}
          aria-invalid={Boolean(error)}
          onFocus={() => setOpen(true)}
          onChange={(event) => {
            onQueryChange(event.target.value)
            setOpen(true)
            setActive(0)
          }}
          onKeyDown={onKeyDown}
        />
      </div>
      {error ? <p className={styles.fieldError}>{error}</p> : null}
      {showList ? (
        <ul className={styles.suggest} id={listId} role="listbox" aria-label={t("search.suggestions")}>
          {loading && !items.length ? <li className={styles.suggestStatus}>{t("search.searchingPlaces")}</li> : null}
          {!loading && !items.length ? <li className={styles.suggestStatus}>{t("search.noSuggestions")}</li> : null}
          {items.map((place, index) => (
            <li key={place.id} role="presentation">
              <button
                type="button"
                role="option"
                aria-selected={index === active}
                className={classNames(styles.suggestItem, index === active && styles.suggestActive)}
                onMouseEnter={() => setActive(index)}
                onClick={() => choose(place)}
              >
                <strong>
                  {place.name}
                  {place.code ? <span>{place.code}</span> : null}
                </strong>
                {place.subtitle ? <em>{place.subtitle}</em> : null}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </label>
  )
}
