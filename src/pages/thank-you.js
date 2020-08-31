import React from "react"
import loadable from "@loadable/component"

import SEO from "../components/seo"
const PageTitle = loadable(() => import("../components/PageTitle"))
const ThankYou = loadable(() => import("../components/ThankYou"))

const SuccessPage = () => (
  <React.Fragment>
    <SEO title="Contact" />
    <div className="l-main-content l-thank-you-page">
      <PageTitle title="Thank You" />
      <ThankYou />
    </div>
  </React.Fragment>
)

export default SuccessPage
