import { SearchCard } from "../../components/travel/SearchCard"
import { categories, type CategoryKind } from "../../data/categories"
import { useTranslation } from "../../i18n"
import styles from "./CategoryPage.module.css"

type CategoryPageProps = {
  kind: CategoryKind
}

export function CategoryPage({ kind }: CategoryPageProps) {
  const { t } = useTranslation()
  const category = categories[kind]

  return (
    <section className={styles.page}>
      <div className="container">
        <div className={styles.intro}>
          <div className={styles.copy}>
            <h1>{t(`categories.${kind}Title`)}</h1>
            <p>{t(`categories.${kind}Copy`)}</p>
          </div>
          <div className={styles.visual}>
            <img
              src={category.image}
              alt={t(`categories.${kind}ImageAlt`)}
              width={960}
              height={640}
              loading="eager"
            />
          </div>
        </div>
        <div className={styles.search}>
          <SearchCard defaultTab={category.tab} />
        </div>
        <p className={styles.note}>
          <strong>{t("categories.bookingLead")}</strong>{" "}
          {t("categories.bookingBody", { service: t(`nav.${kind}`) })}
        </p>
      </div>
    </section>
  )
}
