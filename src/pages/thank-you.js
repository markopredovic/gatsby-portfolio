import React from "react"
import SEO from "../components/seo"
import PageTitle from "../components/PageTitle"
import ThankYou from "../components/ThankYou"

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
