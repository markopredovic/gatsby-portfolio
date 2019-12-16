import React from "react"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import PageTitle from "../components/PageTitle"

const ErrorPage = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="l-main-content l-error-page">
      <PageTitle title="Error" />
      <p>Something went wrong</p>
    </div>
  </Layout>
)

export default ErrorPage
