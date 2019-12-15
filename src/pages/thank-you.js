import React from "react"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import PageTitle from "../components/PageTitle"
import ThankYou from "../components/ThankYou"

const SuccessPage = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="l-main-content l-thank-you-page">
      <PageTitle title="Thank You" />
      <ThankYou />
    </div>
  </Layout>
)

export default SuccessPage
