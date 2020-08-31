import React from "react"
import loadable from "@loadable/component"
import SEO from "../components/seo"

const PageTitle = loadable(() => import("../components/PageTitle"))
const Portfolio = loadable(() => import("../components/Portfolio/Portfolio"))

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
