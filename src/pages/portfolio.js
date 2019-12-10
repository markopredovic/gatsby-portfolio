import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import PageTitle from "../components/PageTitle"
import Portfolio from "../components/Portfolio/Portfolio"

const PortfolioPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <div className="l-main-content l-portfolio">
      <PageTitle title="Portfolio" />
      <Portfolio />
    </div>
  </Layout>
)

export default PortfolioPage
