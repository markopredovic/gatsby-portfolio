import React from "react"
import loadable from "@loadable/component"

import SEO from "../components/seo"
const PageTitle = loadable(() => import("../components/PageTitle"))

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
