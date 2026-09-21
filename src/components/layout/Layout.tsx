import { Outlet } from "react-router-dom"
import { useTranslation } from "../../i18n"
import { SeoHead } from "../seo/SeoHead"
import { Navbar } from "../navigation/Navbar"
import { FloatingCallButton } from "./FloatingCallButton"
import { Footer } from "./Footer"
import styles from "./Layout.module.css"

export function Layout() {
  const { t } = useTranslation()

  return (
    <div className={styles.shell}>
      <SeoHead />
      <a className="skip-link" href="#main">
        {t("a11y.skipToContent")}
      </a>
      <Navbar />
      <main id="main" className={styles.main}>
        <Outlet />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  )
}
