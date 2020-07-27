import React from "react"
import SEO from "../components/seo"
import PageTitle from "../components/PageTitle"
import About from "../components/About"

const AboutPage = () => {
  return (
    <React.Fragment>
      <SEO title="Services" />
      <div className="l-main-content l-about">
        <PageTitle title="About" />
        <About />
      </div>
    </React.Fragment>
  )
}

export default AboutPage
