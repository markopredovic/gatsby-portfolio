import React from "react"
import SEO from "../components/seo"
import Container from "../components/UI/Container"
import Title from "../components/Modules/Title"
import About from "../components/About"

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
