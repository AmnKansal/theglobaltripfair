import { useId } from "react"
import { Flower2, Leaf, MapPin, PlaneLanding, Snowflake, Sun } from "lucide-react"
import { PageHero } from "../../components/hero/PageHero"
import { SearchCard } from "../../components/travel/SearchCard"
import {
  destinationFlightPath,
  onlineBookingSteps,
  whyBookWithUs,
  type DestinationFlightDoc,
  type FlightSeason,
} from "../../data/flightPages"
import { BRAND_NAME } from "../../data/legal/brand"
import { useTranslation } from "../../i18n"
import { FaqList } from "../Services/ServicePage"
import serviceStyles from "../Services/ServicePage.module.css"
import {
  CheckList,
  FlightCta,
  FlightNotice,
  HeroActions,
  RelatedFlights,
  StepsPanel,
  TipList,
} from "./FlightPageParts"
import styles from "./FlightPages.module.css"

function SeasonIcon({ when }: { when: string }) {
  const key = when.toLowerCase()
  const props = { size: 18, strokeWidth: 2.1, "aria-hidden": true } as const
  if (/^(spring|march|april)/.test(key)) return <Flower2 {...props} />
  if (/^(summer|june|july)/.test(key)) return <Sun {...props} />
  if (/^(fall|autumn|september|october)/.test(key)) return <Leaf {...props} />
  return <Snowflake {...props} />
}

function Season({ season }: { season: FlightSeason }) {
  const leads = season.text.startsWith(season.when)
  return (
    <li>
      <span className={styles.seasonIcon}>
        <SeasonIcon when={season.when} />
      </span>
      {leads ? (
        <p>
          <strong>{season.when}</strong>
          {season.text.slice(season.when.length)}
        </p>
      ) : (
        <p>
          <span className={styles.seasonLabel}>{season.when}</span>
          {season.text}
        </p>
      )}
    </li>
  )
}

export function DestinationFlightsPage({ doc }: { doc: DestinationFlightDoc }) {
  const { t } = useTranslation()
  const id = useId()
  const path = destinationFlightPath(doc.slug)

  return (
    <article className={styles.page}>
      <PageHero
        title={doc.title}
        copy={doc.lead}
        image={doc.heroImage}
        imageAlt={doc.heroAlt}
        actions={<HeroActions />}
        search={<SearchCard defaultTab="flights" flightTo={doc.place} />}
      />

      <div className={styles.body}>
        <div className="container">
          <section className={styles.opening} aria-label={`About flights to ${doc.city}`}>
            <div className={styles.prose}>
              {doc.intro.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
            <aside className={styles.ticket} aria-labelledby={`${id}-airports`}>
              <div className={styles.ticketHead}>
                <PlaneLanding size={20} strokeWidth={2.1} aria-hidden="true" />
                <h2 id={`${id}-airports`}>Airports serving {doc.city}</h2>
              </div>
              <p>{doc.airportsIntro}</p>
              <ul className={styles.airportList}>
                {doc.airports.map((airport) => (
                  <li key={airport.code}>
                    <span className={styles.code}>{airport.code}</span>
                    <span>
                      <strong>{airport.name}</strong>
                      {airport.note ? <small>{airport.note}</small> : null}
                    </span>
                  </li>
                ))}
              </ul>
            </aside>
          </section>

          <section className={`${styles.section} ${styles.editorial}`} aria-labelledby={`${id}-visit`}>
            <div className={styles.editorialHead}>
              <h2 id={`${id}-visit`} className={styles.sectionTitle}>
                Why visit {doc.city}?
              </h2>
            </div>
            <div className={styles.editorialBody}>
              {doc.whyVisit.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
              <h3 className={styles.subTitle}>Top attractions in {doc.city}</h3>
              <ul className={styles.placeList}>
                {doc.attractions.map((place) => (
                  <li key={place}>
                    <MapPin size={15} strokeWidth={2.1} aria-hidden="true" />
                    {place}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className={`${styles.section} ${styles.seasons}`} aria-labelledby={`${id}-seasons`}>
            <div className={styles.head}>
              <h2 id={`${id}-seasons`} className={styles.sectionTitle}>
                Best time to visit {doc.city}
              </h2>
              <p className={styles.sectionLead}>{doc.seasonsIntro}</p>
            </div>
            <ul className={styles.seasonList}>
              {doc.seasons.map((season) => (
                <Season key={season.when} season={season} />
              ))}
            </ul>
          </section>

          <section className={`${styles.section} ${styles.editorial}`} aria-labelledby={`${id}-tips`}>
            <div className={styles.editorialHead}>
              <h2 id={`${id}-tips`} className={styles.sectionTitle}>
                Tips to find cheap flights to {doc.city}
              </h2>
              <p className={styles.sectionLead}>{doc.tipsIntro}</p>
            </div>
            <TipList items={doc.tips} />
          </section>

          <div className={serviceStyles.split}>
            <section className={serviceStyles.panel} aria-labelledby={`${id}-why`}>
              <h2 id={`${id}-why`}>Why book with {BRAND_NAME}</h2>
              <CheckList items={whyBookWithUs} />
            </section>
            <StepsPanel id={`${id}-steps`} title="How booking works" steps={onlineBookingSteps("flight")} />
          </div>

          <div className={styles.noticeWrap}>
            <FlightNotice />
          </div>

          <FaqList slug={`flights-${doc.slug}`} faqs={doc.faqs} title={t("servicePage.faq")} />

          <FlightCta title={doc.ctaTitle} copy={doc.ctaCopy} />

          <RelatedFlights current={path} />
        </div>
      </div>
    </article>
  )
}
