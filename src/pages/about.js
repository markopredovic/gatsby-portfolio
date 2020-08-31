import React from "react"
import loadable from "@loadable/component"

import SEO from "../components/seo"
const PageTitle = loadable(() => import("../components/PageTitle"))
const About = loadable(() => import("../components/About"))

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
