import React from "react"
import SEO from "../components/seo"
import PageTitle from "../components/PageTitle"
import Portfolio from "../components/Portfolio/Portfolio"

const PortfolioPage = () => (
  <React.Fragment>
    <SEO title="Portfolio" />
    <div className="l-main-content l-portfolio">
      <PageTitle title="Portfolio" />
      <Portfolio />
    </div>
  </React.Fragment>
)

export default PortfolioPage
