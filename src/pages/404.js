import React from "react"

import SEO from "../components/seo"
import PageTitle from "../components/PageTitle"

const NotFoundPage = () => (
  <React.Fragment>
    <SEO title="404: Not found" />
    <PageTitle title="Not Found" />
    <div className="l-404">
      <div className="l-container">
        <p>You just hit a route that doesn&#39;t exist...</p>
      </div>
    </div>
  </React.Fragment>
)

export default NotFoundPage
