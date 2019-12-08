import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import PageTitle from "../components/PageTitle"

const ServicesPage = () => (
  <Layout>
    <SEO title="Services" />
    <div className="l-main-content l-services">
      <PageTitle title="Services" />
    </div>
  </Layout>
)

export default ServicesPage
