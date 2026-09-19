import { useRef, useState } from "react"
import { Minus, Plus, Users } from "lucide-react"
import type { Party } from "../../data/search"
import { partyTotal } from "../../data/search"
import { useOnClickOutside } from "../../hooks/useOnClickOutside"
import { useTranslation } from "../../i18n"
import { classNames } from "../../utils/classNames"
import styles from "./SearchCard.module.css"

type TravellersFieldProps = {
  label: string
  party: Party
  error?: string
  onChange: (party: Party) => void
}

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value))

export function TravellersField({ label, party, error, onChange }: TravellersFieldProps) {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const wrapRef = useRef<HTMLDivElement>(null)
  const total = partyTotal(party)

  useOnClickOutside(wrapRef, () => setOpen(false), open)

  const summary =
    party.children === 0 && total === 1
      ? t("search.oneAdult")
      : party.children === 0 && total === 2
        ? t("search.twoTravellers")
        : t("search.partySummary", { count: total })

  return (
    <div className={classNames(styles.field, styles.suggestField)} ref={wrapRef}>
      <span>{label}</span>
      <button
        type="button"
        className={classNames(styles.input, styles.travellersTrigger, error && styles.inputError)}
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-invalid={Boolean(error)}
        onClick={() => setOpen((value) => !value)}
      >
        <Users size={16} />
        <span>{summary}</span>
      </button>
      {error ? <p className={styles.fieldError}>{error}</p> : null}
      {open ? (
        <div className={styles.party} role="dialog" aria-label={label}>
          <Stepper
            label={t("search.adults")}
            hint={t("search.adultsHint")}
            value={party.adults}
            min={1}
            max={9}
            onChange={(adults) => onChange({ ...party, adults })}
          />
          <Stepper
            label={t("search.children")}
            hint={t("search.childrenHint")}
            value={party.children}
            min={0}
            max={8}
            onChange={(children) => onChange({ ...party, children })}
          />
          <button type="button" className={styles.partyDone} onClick={() => setOpen(false)}>
            {t("search.done")}
          </button>
        </div>
      ) : null}
    </div>
  )
}

function Stepper({
  label,
  hint,
  value,
  min,
  max,
  onChange,
}: {
  label: string
  hint: string
  value: number
  min: number
  max: number
  onChange: (value: number) => void
}) {
  const { t } = useTranslation()

  return (
    <div className={styles.stepper}>
      <span>
        <strong>{label}</strong>
        <em>{hint}</em>
      </span>
      <span className={styles.stepperControls}>
        <button
          type="button"
          aria-label={t("search.decrease", { label })}
          disabled={value <= min}
          onClick={() => onChange(clamp(value - 1, min, max))}
        >
          <Minus size={14} />
        </button>
        <span>{value}</span>
        <button
          type="button"
          aria-label={t("search.increase", { label })}
          disabled={value >= max}
          onClick={() => onChange(clamp(value + 1, min, max))}
        >
          <Plus size={14} />
        </button>
      </span>
    </div>
  )
}
