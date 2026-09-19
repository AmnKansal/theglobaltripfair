import { BrowserRouter } from "react-router-dom"
import { ErrorBoundary } from "./components/common/ErrorBoundary"
import { AppRoutes } from "./routes/AppRoutes"

export default function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <AppRoutes />
      </ErrorBoundary>
    </BrowserRouter>
  )
}
