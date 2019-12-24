import React from "react"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import PageTitle from "../components/PageTitle"
import About from "../components/About"

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="Services" />
      <div className="l-main-content l-about">
        <PageTitle title="About" />
        <About />
      </div>
    </Layout>
  )
}

export default AboutPage
