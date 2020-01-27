import React from "react"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import PageTitle from "../components/PageTitle"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <PageTitle title="Not Found" />
    <div className="l-404">
      <div className="l-container">
        <p>You just hit a route that doesn&#39;t exist...</p>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
