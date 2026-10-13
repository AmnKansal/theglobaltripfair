import { Fragment, useId } from "react"
import { ArrowRight, Plane } from "lucide-react"
import { Link } from "react-router-dom"
import { PageHero } from "../../components/hero/PageHero"
import { SearchCard } from "../../components/travel/SearchCard"
import {
  cityCode,
  cityFlightPath,
  flightTypePath,
  onlineBookingSteps,
  phoneBookingSteps,
  type FlightTypeDoc,
} from "../../data/flightPages"
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

function Route({ stops }: { stops: string[] }) {
  const label = stops.join(" to ")
  const to = cityFlightPath(stops[stops.length - 1])
  const content = (
    <>
      <span className={styles.routeCodes} aria-hidden="true">
        {stops.map((stop, index) => (
          <Fragment key={`${stop}-${index}`}>
            {index > 0 ? (
              <span className={styles.leg}>
                <Plane size={17} strokeWidth={2} />
              </span>
            ) : null}
            <span className={styles.code}>{cityCode(stop)}</span>
          </Fragment>
        ))}
      </span>
      <span className={styles.routeCities}>
        {label}
        {to ? <ArrowRight size={14} strokeWidth={2.2} aria-hidden="true" /> : null}
      </span>
    </>
  )

  return (
    <li className={styles.route}>
      {to ? (
        <Link to={to} className={styles.routeInner} aria-label={`${label} flights`}>
          {content}
        </Link>
      ) : (
        <div className={styles.routeInner}>{content}</div>
      )}
    </li>
  )
}

export function FlightTypePage({ doc }: { doc: FlightTypeDoc }) {
  const { t } = useTranslation()
  const id = useId()
  const path = flightTypePath(doc.slug)

  return (
    <article className={styles.page}>
      <PageHero
        title={doc.title}
        copy={doc.lead}
        image={doc.heroImage}
        imageAlt={doc.heroAlt}
        actions={<HeroActions />}
        search={<SearchCard defaultTab="flights" />}
      />

      <div className={styles.body}>
        <div className="container">
          <section className={styles.opening} aria-label={doc.name}>
            <div className={styles.prose}>
              {doc.intro.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
            <aside className={styles.whyPanel} aria-labelledby={`${id}-why`}>
              <h2 id={`${id}-why`}>{doc.whyTitle}</h2>
              <p>{doc.whyCopy}</p>
              <CheckList items={doc.why} />
            </aside>
          </section>

          <section className={styles.section} aria-labelledby={`${id}-deals`}>
            <div className={styles.head}>
              <h2 id={`${id}-deals`} className={styles.sectionTitle}>
                {doc.dealsTitle}
              </h2>
              <p className={styles.sectionLead}>{doc.dealsCopy}</p>
            </div>
            <div className={styles.deals}>
              {doc.deals.map((deal) => (
                <article key={deal.title} className={styles.deal}>
                  <h3>{deal.title}</h3>
                  <p>{deal.copy}</p>
                  {deal.to ? (
                    <Link to={deal.to} className={styles.dealLink} aria-label={`More about ${deal.title.toLowerCase()}`}>
                      Learn more
                      <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                    </Link>
                  ) : null}
                </article>
              ))}
            </div>
          </section>

          <section className={styles.section} aria-labelledby={`${id}-routes`}>
            <div className={styles.head}>
              <h2 id={`${id}-routes`} className={styles.sectionTitle}>
                {doc.routesTitle}
              </h2>
              <p className={styles.sectionLead}>{doc.routesCopy}</p>
            </div>
            <ul className={styles.board}>
              {doc.routes.map((stops) => (
                <Route key={stops.join("-")} stops={stops} />
              ))}
            </ul>
          </section>

          <section className={`${styles.section} ${styles.editorial}`} aria-labelledby={`${id}-places`}>
            <div className={styles.editorialHead}>
              <h2 id={`${id}-places`} className={styles.sectionTitle}>
                {doc.destinationsTitle}
              </h2>
              <p className={styles.sectionLead}>{doc.destinationsCopy}</p>
            </div>
            <ul className={styles.chips}>
              {doc.destinations.map((city) => {
                const to = cityFlightPath(city)
                return (
                  <li key={city}>
                    {to ? (
                      <Link to={to} className={styles.chip}>
                        <span className={styles.chipCode}>{cityCode(city)}</span>
                        {city}
                        <ArrowRight size={14} strokeWidth={2.2} aria-hidden="true" />
                      </Link>
                    ) : (
                      <span className={styles.chip}>
                        <span className={styles.chipCode}>{cityCode(city)}</span>
                        {city}
                      </span>
                    )}
                  </li>
                )
              })}
            </ul>
          </section>

          <section className={`${styles.section} ${styles.twoLists}`} aria-label="Tips for better fares">
            <div>
              <h2 className={styles.sectionTitle}>{doc.findTitle}</h2>
              <p className={styles.sectionLead}>{doc.findCopy}</p>
              <TipList items={doc.findTips} />
            </div>
            <div>
              <h2 className={styles.sectionTitle}>{doc.bestTimeTitle}</h2>
              <p className={styles.sectionLead}>{doc.bestTimeCopy}</p>
              <TipList items={doc.bestTime} />
            </div>
          </section>

          <div className={serviceStyles.split}>
            <StepsPanel
              id={`${id}-online`}
              title="Start online"
              copy="Send your trip details through the quote form and finish with an advisor."
              steps={onlineBookingSteps(doc.noun)}
            />
            <StepsPanel
              id={`${id}-phone`}
              title="Book by phone"
              copy="Prefer to talk it through? One call covers the search and the booking."
              steps={phoneBookingSteps}
            />
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
