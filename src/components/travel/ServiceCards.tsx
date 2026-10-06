import { Link } from "react-router-dom"
import { ArrowUpRight, CarFront, Hotel, Palmtree, Plane, ShieldCheck, Ship, Ticket, TrainFront } from "lucide-react"
import { services, upcomingServices } from "../../data/services"
import { useTranslation } from "../../i18n"
import { Button } from "../common/Button"
import { SectionHeading } from "../common/SectionHeading"
import styles from "./ServiceCards.module.css"

const serviceIcons = {
  plane: Plane,
  hotel: Hotel,
  palm: Palmtree,
  car: CarFront,
  ship: Ship,
  train: TrainFront,
}

const upcomingIcons = {
  car: CarFront,
  ticket: Ticket,
  shield: ShieldCheck,
}

export function ServiceCards() {
  const { t } = useTranslation()

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <SectionHeading
            eyebrow={t("services.eyebrow")}
            title={t("services.title")}
            copy={t("services.copy")}
          />
          <Button to="/contact" variant="outline">
            {t("common.talkToUs")}
          </Button>
        </div>

        <div className={styles.grid}>
          {services.map((service) => {
            const Icon = serviceIcons[service.icon]
            return (
              <Link key={service.id} to={service.to} className={styles.card}>
                <img src={service.image} alt="" width={800} height={600} loading="lazy" />
                <div className={styles.shade} />
                <div className={styles.body}>
                  <div className={styles.icon}>
                    <Icon size={18} />
                  </div>
                  <h3>{t(`services.${service.id}.title`)}</h3>
                  <p>{t(`services.${service.id}.description`)}</p>
                </div>
              </Link>
            )
          })}
        </div>

        <div className={styles.upcoming}>
          {upcomingServices.map((service) => {
            const Icon = upcomingIcons[service.icon]
            return (
              <Link key={service.id} to={service.to} className={styles.chip}>
                <div className={styles.chipIcon}>
                  <Icon size={16} />
                </div>
                <div>
                  <h3>
                    {t(`services.${service.id}.title`)} <ArrowUpRight size={14} />
                  </h3>
                  <p>{t(`services.${service.id}.description`)}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
