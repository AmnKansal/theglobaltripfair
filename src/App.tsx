import { BrowserRouter } from "react-router-dom"
import { ErrorBoundary } from "./components/common/ErrorBoundary"
import { LanguageProvider } from "./i18n"
import { AppRoutes } from "./routes/AppRoutes"

export default function App() {
  return (
    <BrowserRouter>
      {/* Inside the router: the URL picks the language on /es. */}
      <LanguageProvider>
        <ErrorBoundary>
          <AppRoutes />
        </ErrorBoundary>
      </LanguageProvider>
    </BrowserRouter>
  )
}
