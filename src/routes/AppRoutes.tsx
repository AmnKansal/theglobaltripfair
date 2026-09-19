import { useEffect } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import { Layout } from "../components/layout/Layout"
import { Contact } from "../pages/Contact/Contact"
import { ContentPage } from "../pages/Content/ContentPage"
import { Flights } from "../pages/Flights/Flights"
import { Holidays } from "../pages/Holidays/Holidays"
import { Home } from "../pages/Home/Home"
import { Hotels } from "../pages/Hotels/Hotels"
import { Transfers } from "../pages/Transfers/Transfers"
import { ComingSoon } from "../pages/More/ComingSoon"
import { NotFound } from "../pages/NotFound/NotFound"
import { SearchMaintenance } from "../pages/Search/SearchMaintenance"

function ScrollManager() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash)
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" })
        return
      }
    }
    window.scrollTo({ top: 0, behavior: "auto" })
  }, [location.pathname, location.hash])

  return null
}

export function AppRoutes() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/holidays" element={<Holidays />} />
          <Route path="/transfers" element={<Transfers />} />
          <Route path="/cruises" element={<ComingSoon kind="cruises" />} />
          <Route path="/cabs" element={<ComingSoon kind="cabs" />} />
          <Route path="/activities" element={<ComingSoon kind="activities" />} />
          <Route path="/insurance" element={<ComingSoon kind="insurance" />} />
          <Route path="/search" element={<SearchMaintenance />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<ContentPage page="about" />} />
          <Route path="/careers" element={<ContentPage page="careers" />} />
          <Route path="/blog" element={<ContentPage page="blog" />} />
          <Route path="/help" element={<ContentPage page="help" />} />
          <Route path="/booking" element={<ContentPage page="booking" />} />
          <Route path="/cancellation" element={<ContentPage page="cancellation" />} />
          <Route path="/destinations" element={<ContentPage page="destinations" />} />
          <Route path="/inspiration" element={<ContentPage page="inspiration" />} />
          <Route path="/guides" element={<ContentPage page="guides" />} />
          <Route path="/tips" element={<ContentPage page="tips" />} />
          <Route path="/offers" element={<ContentPage page="offers" />} />
          <Route path="/terms" element={<ContentPage page="terms" />} />
          <Route path="/privacy" element={<ContentPage page="privacy" />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}
