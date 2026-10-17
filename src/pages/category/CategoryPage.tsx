import { PhoneStrip } from "../../components/common/PhoneStrip"
import { PageHero } from "../../components/hero/PageHero"
import { SearchCard } from "../../components/travel/SearchCard"
import { categories, type CategoryKind } from "../../data/categories"
import { contactInfo } from "../../data/contact"
import { useTranslation } from "../../i18n"
import styles from "./CategoryPage.module.css"

type CategoryPageProps = {
  kind: CategoryKind
}

export function CategoryPage({ kind }: CategoryPageProps) {
  const { t } = useTranslation()
  const category = categories[kind]

  return (
    <div className={styles.page}>
      <PageHero
        title={t(`categories.${kind}Title`)}
        copy={t(`categories.${kind}Copy`)}
        image={category.image}
        imageAlt={t(`categories.${kind}ImageAlt`)}
        actions={<PhoneStrip variant="hero" />}
        search={<SearchCard defaultTab={category.tab} />}
      />
      <div className="container">
        <p className={styles.note}>
          <strong>{t("categories.bookingLead")}</strong>{" "}
          {t("categories.bookingBody", { service: t(`nav.${kind}`), phone: contactInfo.phoneDisplay })}
        </p>
      </div>
    </div>
  )
}
