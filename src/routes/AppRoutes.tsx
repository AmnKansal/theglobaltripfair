import { useEffect } from "react"
import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import { Layout } from "../components/layout/Layout"
import { CarRentals } from "../pages/Cars/CarRentals"
import { Contact } from "../pages/Contact/Contact"
import { ContentPage } from "../pages/Content/ContentPage"
import { AboutPage } from "../pages/Legal/AboutPage"
import { LegalPage } from "../pages/Legal/LegalPage"
import { Flights } from "../pages/Flights/Flights"
import {
  destinationFlightPages,
  destinationFlightPath,
  flightTypePages,
  flightTypePath,
} from "../data/flightPages"
import { DestinationFlightsPage } from "../pages/FlightPages/DestinationFlightsPage"
import { FlightTypePage } from "../pages/FlightPages/FlightTypePage"
import { Holidays } from "../pages/Holidays/Holidays"
import { Home } from "../pages/Home/Home"
import { Hotels } from "../pages/Hotels/Hotels"
import { Transfers } from "../pages/Transfers/Transfers"
import { ServicePage } from "../pages/Services/ServicePage"
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
          {/* The Spanish homepage; LanguageProvider reads the language from this URL. */}
          <Route path="/es" element={<Home />} />
          <Route path="/flights" element={<Flights />} />
          {/* Keyed by slug so the quote form resets when moving between flight pages. */}
          {destinationFlightPages.map((doc) => (
            <Route
              key={doc.slug}
              path={destinationFlightPath(doc.slug)}
              element={<DestinationFlightsPage key={doc.slug} doc={doc} />}
            />
          ))}
          {flightTypePages.map((doc) => (
            <Route key={doc.slug} path={flightTypePath(doc.slug)} element={<FlightTypePage key={doc.slug} doc={doc} />} />
          ))}
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/cars" element={<CarRentals />} />
          <Route path="/holidays" element={<Holidays />} />
          <Route path="/transfers" element={<Transfers />} />
          <Route path="/cruises" element={<ServicePage slug="cruises" />} />
          <Route path="/trains" element={<ServicePage slug="trains" />} />
          <Route path="/cabs" element={<Navigate to="/cars" replace />} />
          <Route path="/activities" element={<ComingSoon kind="activities" />} />
          <Route path="/insurance" element={<ComingSoon kind="insurance" />} />
          <Route path="/search" element={<SearchMaintenance />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/careers" element={<ContentPage page="careers" />} />
          <Route path="/blog" element={<ContentPage page="blog" />} />
          <Route path="/help" element={<ContentPage page="help" />} />
          <Route path="/booking" element={<ContentPage page="booking" />} />
          <Route path="/cancellation" element={<LegalPage slug="cancellation" />} />
          <Route path="/destinations" element={<ContentPage page="destinations" />} />
          <Route path="/inspiration" element={<ContentPage page="inspiration" />} />
          <Route path="/guides" element={<ContentPage page="guides" />} />
          <Route path="/tips" element={<ContentPage page="tips" />} />
          <Route path="/offers" element={<ContentPage page="offers" />} />
          <Route path="/terms" element={<LegalPage slug="terms" />} />
          <Route path="/privacy" element={<LegalPage slug="privacy" />} />
          <Route path="/cookies" element={<LegalPage slug="cookies" />} />
          <Route path="/disclaimer" element={<LegalPage slug="disclaimer" />} />
          <Route path="/advertising" element={<LegalPage slug="advertising" />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}
