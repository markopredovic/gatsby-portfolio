import React from "react"
import loadable from "@loadable/component"

import SEO from "../components/seo"
import Container from "../components/UI/Container"
import Title from "../components/Modules/Title"
const About = loadable(() => import("../components/About"))

const AboutPage = () => {
  return (
    <React.Fragment>
      <SEO title="Services" />
      <Title page fill={true}>
        About
      </Title>
      <Container>
        <About />
      </Container>
    </React.Fragment>
  )
}

export default AboutPage
