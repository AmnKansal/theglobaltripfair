import { Component, type ErrorInfo, type ReactNode } from "react"
import { SITE_NAME } from "../../config/seo"
import { contactInfo } from "../../data/contact"
import styles from "../../pages/NotFound/NotFound.module.css"
import { Button } from "./Button"

type ErrorBoundaryProps = {
  children: ReactNode
}

type ErrorBoundaryState = {
  failed: boolean
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { failed: false }

  static getDerivedStateFromError() {
    return { failed: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("TheGlobalTripFair.com runtime error", error, info.componentStack)
  }

  render() {
    if (!this.state.failed) return this.props.children

    return (
      <section className={styles.page}>
        <div className="container">
          <h1>Something went off course.</h1>
          <p>
            {SITE_NAME} hit an unexpected error. Return home, or call {contactInfo.phoneDisplay} if you need help
            planning a journey.
          </p>
          <div className={styles.actions}>
            <Button to="/" variant="primary">
              Back to home
            </Button>
          </div>
        </div>
      </section>
    )
  }
}
