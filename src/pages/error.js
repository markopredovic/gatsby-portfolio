import React from "react"
import SEO from "../components/seo"
import PageTitle from "../components/PageTitle"

const ErrorPage = () => (
  <React.Fragment>
    <SEO title="Contact" />
    <div className="l-main-content l-error-page">
      <PageTitle title="Error" />
      <p>Something went wrong</p>
    </div>
  </React.Fragment>
)

export default ErrorPage
