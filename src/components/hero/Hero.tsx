import { media } from "../../data/media"
import { useTranslation } from "../../i18n"
import { PhoneStrip } from "../common/PhoneStrip"
import { SearchCard } from "../travel/SearchCard"
import { PageHero } from "./PageHero"

export function Hero() {
  const { t } = useTranslation()

  return (
    <PageHero
      title={
        <>
          <span>{t("hero.titleLine1")}</span>
          <span>{t("hero.titleLine2")}</span>
        </>
      }
      copy={t("hero.description")}
      image={media.hero}
      imageAlt={t("hero.imageAlt")}
      actions={<PhoneStrip variant="hero" />}
      search={<SearchCard />}
      searchId="plan"
      variant="home"
    />
  )
}
