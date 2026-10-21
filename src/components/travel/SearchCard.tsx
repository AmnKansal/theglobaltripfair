import { useEffect, useState, type FormEvent, type ReactNode } from "react"
import { useNavigate } from "react-router-dom"
import { ArrowLeftRight, ArrowRight, Building2, CalendarDays, CarFront, Palmtree, Plane } from "lucide-react"
import {
  currentMonthISO,
  emptyHoliday,
  emptyHotel,
  emptyFlight,
  emptyTransfer,
  todayISO,
  type FlightSearch,
  type HolidaySearch,
  type HotelSearch,
  type PlaceRef,
  type SearchRequest,
  type SearchTab,
  type TransferSearch,
} from "../../data/search"
import { submitSearch } from "../../services/search"
import { useTranslation } from "../../i18n"
import { classNames } from "../../utils/classNames"
import { Button } from "../common/Button"
import { LocationField } from "./LocationField"
import { TravellersField } from "./TravellersField"
import styles from "./SearchCard.module.css"

export type { SearchTab }

type SearchCardProps = {
  defaultTab?: SearchTab
  /** Prefills the flight "To" field, e.g. on a destination page. */
  flightTo?: PlaceRef
}

type Drafts = {
  flights: FlightSearch
  hotels: HotelSearch
  holidays: HolidaySearch
  transfers: TransferSearch
}

const tabs: { id: SearchTab; icon: ReactNode }[] = [
  { id: "flights", icon: <Plane size={16} /> },
  { id: "hotels", icon: <Building2 size={16} /> },
  { id: "holidays", icon: <Palmtree size={16} /> },
  { id: "transfers", icon: <CarFront size={16} /> },
]

export function SearchCard({ defaultTab = "flights", flightTo }: SearchCardProps) {
  const { t, messages } = useTranslation()
  const navigate = useNavigate()
  const [activeSearchType, setActiveSearchType] = useState<SearchTab>(defaultTab)
  const [drafts, setDrafts] = useState<Drafts>({
    flights: { ...emptyFlight(), to: flightTo ?? null },
    hotels: emptyHotel(),
    holidays: emptyHoliday(),
    transfers: emptyTransfer(),
  })
  const [queries, setQueries] = useState({
    from: "",
    to: "",
    hotel: "",
    holiday: "",
    pickup: "",
    dropoff: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitting, setSubmitting] = useState(false)
  const request = drafts[activeSearchType]
  const minDay = todayISO()
  const minMonth = currentMonthISO()

  useEffect(() => {
    setActiveSearchType(defaultTab)
    setErrors({})
  }, [defaultTab])

  const errorText = (key?: string) => (key ? t(key) : undefined)

  const patch = (next: SearchRequest) => {
    setDrafts((current) => ({ ...current, [next.type]: next }))
    setErrors({})
  }

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitting(true)
    const result = await submitSearch(request)
    setSubmitting(false)
    if (!result.ok) {
      setErrors(result.errors)
      return
    }
    navigate("/search")
  }

  return (
    <div className={styles.card}>
      <div className={styles.tabs} role="tablist" aria-label={t("a11y.travelSearch")}>
        {tabs.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={activeSearchType === item.id}
            className={classNames(styles.tab, activeSearchType === item.id && styles.tabActive)}
            onClick={() => {
              setActiveSearchType(item.id)
              setErrors({})
            }}
          >
            {item.icon}
            {t(`search.${item.id}`)}
          </button>
        ))}
      </div>

      <form className={styles.form} onSubmit={onSubmit} aria-label={t(`search.${activeSearchType}`)} noValidate>
        {request.type === "flights" ? (
          <>
            <LocationField
              label={t("search.from")}
              placeholder={messages.search.fromPlaceholder ?? t("search.cityOrAirport")}
              value={request.from}
              query={queries.from}
              includeAirports
              error={errorText(errors.from)}
              onQueryChange={(value) => {
                setQueries((current) => ({ ...current, from: value }))
                patch({ ...request, from: null })
              }}
              onSelect={(place) => {
                setQueries((current) => ({ ...current, from: "" }))
                patch({ ...request, from: place })
              }}
            />
            <button
              type="button"
              className={styles.swap}
              aria-label={t("search.swap")}
              onClick={() => {
                patch({ ...request, from: request.to, to: request.from })
                setQueries((current) => ({ ...current, from: current.to, to: current.from }))
              }}
            >
              <ArrowLeftRight size={16} />
            </button>
            <LocationField
              label={t("search.to")}
              placeholder={messages.search.toPlaceholder ?? t("search.cityOrAirport")}
              value={request.to}
              query={queries.to}
              includeAirports
              error={errorText(errors.to)}
              onQueryChange={(value) => {
                setQueries((current) => ({ ...current, to: value }))
                patch({ ...request, to: null })
              }}
              onSelect={(place) => {
                setQueries((current) => ({ ...current, to: "" }))
                patch({ ...request, to: place })
              }}
            />
            <label className={styles.field}>
              <span>{t("search.departure")}</span>
              <div className={classNames(styles.input, errors.departure && styles.inputError)}>
                <CalendarDays size={16} />
                <input
                  type="date"
                  min={minDay}
                  value={request.departure}
                  aria-invalid={Boolean(errors.departure)}
                  onChange={(event) => patch({ ...request, departure: event.target.value })}
                />
              </div>
              {errors.departure ? <p className={styles.fieldError}>{t(errors.departure)}</p> : null}
            </label>
            <label className={styles.field}>
              <span>
                {t("search.return")} <em>{t("search.optional")}</em>
              </span>
              <div className={classNames(styles.input, errors.returnDate && styles.inputError)}>
                <CalendarDays size={16} />
                <input
                  type="date"
                  min={request.departure || minDay}
                  value={request.returnDate}
                  aria-invalid={Boolean(errors.returnDate)}
                  onChange={(event) => patch({ ...request, returnDate: event.target.value })}
                />
              </div>
              {errors.returnDate ? <p className={styles.fieldError}>{t(errors.returnDate)}</p> : null}
            </label>
            <TravellersField
              label={t("search.travellers")}
              party={request.party}
              error={errorText(errors.party)}
              onChange={(party) => patch({ ...request, party })}
            />
          </>
        ) : null}

        {request.type === "hotels" ? (
          <>
            <LocationField
              label={t("search.destination")}
              placeholder={t("search.cityOrHotel")}
              value={request.destination}
              query={queries.hotel}
              error={errorText(errors.destination)}
              onQueryChange={(value) => {
                setQueries((current) => ({ ...current, hotel: value }))
                patch({ ...request, destination: null })
              }}
              onSelect={(place) => {
                setQueries((current) => ({ ...current, hotel: "" }))
                patch({ ...request, destination: place })
              }}
            />
            <label className={styles.field}>
              <span>{t("search.checkIn")}</span>
              <div className={classNames(styles.input, errors.checkIn && styles.inputError)}>
                <CalendarDays size={16} />
                <input
                  type="date"
                  min={minDay}
                  value={request.checkIn}
                  aria-invalid={Boolean(errors.checkIn)}
                  onChange={(event) => patch({ ...request, checkIn: event.target.value })}
                />
              </div>
              {errors.checkIn ? <p className={styles.fieldError}>{t(errors.checkIn)}</p> : null}
            </label>
            <label className={styles.field}>
              <span>{t("search.checkOut")}</span>
              <div className={classNames(styles.input, errors.checkOut && styles.inputError)}>
                <CalendarDays size={16} />
                <input
                  type="date"
                  min={request.checkIn || minDay}
                  value={request.checkOut}
                  aria-invalid={Boolean(errors.checkOut)}
                  onChange={(event) => patch({ ...request, checkOut: event.target.value })}
                />
              </div>
              {errors.checkOut ? <p className={styles.fieldError}>{t(errors.checkOut)}</p> : null}
            </label>
            <TravellersField
              label={t("search.guests")}
              party={request.party}
              error={errorText(errors.party)}
              onChange={(party) => patch({ ...request, party })}
            />
          </>
        ) : null}

        {request.type === "holidays" ? (
          <>
            <LocationField
              label={t("search.destination")}
              placeholder={t("search.whereTo")}
              value={request.destination}
              query={queries.holiday}
              error={errorText(errors.destination)}
              onQueryChange={(value) => {
                setQueries((current) => ({ ...current, holiday: value }))
                patch({ ...request, destination: null })
              }}
              onSelect={(place) => {
                setQueries((current) => ({ ...current, holiday: "" }))
                patch({ ...request, destination: place })
              }}
            />
            <label className={styles.field}>
              <span>{t("search.month")}</span>
              <div className={classNames(styles.input, errors.month && styles.inputError)}>
                <CalendarDays size={16} />
                <input
                  type="month"
                  min={minMonth}
                  value={request.month}
                  aria-invalid={Boolean(errors.month)}
                  onChange={(event) => patch({ ...request, month: event.target.value })}
                />
              </div>
              {errors.month ? <p className={styles.fieldError}>{t(errors.month)}</p> : null}
            </label>
            <label className={styles.field}>
              <span>{t("search.duration")}</span>
              <div className={styles.input}>
                <CalendarDays size={16} />
                <select
                  value={request.durationNights}
                  onChange={(event) => patch({ ...request, durationNights: Number(event.target.value) })}
                >
                  <option value={3}>{t("search.threeNights")}</option>
                  <option value={7}>{t("search.sevenNights")}</option>
                  <option value={10}>{t("search.tenNights")}</option>
                  <option value={14}>{t("search.fourteenNights")}</option>
                </select>
              </div>
            </label>
            <TravellersField
              label={t("search.travellers")}
              party={request.party}
              error={errorText(errors.party)}
              onChange={(party) => patch({ ...request, party })}
            />
          </>
        ) : null}

        {request.type === "transfers" ? (
          <>
            <LocationField
              label={t("search.pickup")}
              placeholder={t("search.pickupPlaceholder")}
              value={request.pickup}
              query={queries.pickup}
              includeAirports
              error={errorText(errors.pickup)}
              onQueryChange={(value) => {
                setQueries((current) => ({ ...current, pickup: value }))
                patch({ ...request, pickup: null })
              }}
              onSelect={(place) => {
                setQueries((current) => ({ ...current, pickup: "" }))
                patch({ ...request, pickup: place })
              }}
            />
            <LocationField
              label={t("search.dropoff")}
              placeholder={t("search.dropoffPlaceholder")}
              value={request.dropoff}
              query={queries.dropoff}
              includeAirports
              error={errorText(errors.dropoff)}
              onQueryChange={(value) => {
                setQueries((current) => ({ ...current, dropoff: value }))
                patch({ ...request, dropoff: null })
              }}
              onSelect={(place) => {
                setQueries((current) => ({ ...current, dropoff: "" }))
                patch({ ...request, dropoff: place })
              }}
            />
            <label className={styles.field}>
              <span>{t("search.date")}</span>
              <div className={classNames(styles.input, errors.date && styles.inputError)}>
                <CalendarDays size={16} />
                <input
                  type="date"
                  min={minDay}
                  value={request.date}
                  aria-invalid={Boolean(errors.date)}
                  onChange={(event) => patch({ ...request, date: event.target.value })}
                />
              </div>
              {errors.date ? <p className={styles.fieldError}>{t(errors.date)}</p> : null}
            </label>
            <TravellersField
              label={t("search.passengers")}
              party={request.party}
              error={errorText(errors.party)}
              onChange={(party) => patch({ ...request, party })}
            />
          </>
        ) : null}

        <Button type="submit" className={styles.searchBtn} variant="primary" disabled={submitting}>
          {t("search.submit")}
          <ArrowRight size={16} />
        </Button>
      </form>
    </div>
  )
}
