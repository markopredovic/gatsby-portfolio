import React from "react"
import SEO from "../components/seo"
import Container from "../components/UI/Container"
import Title from "../components/Modules/Title"
import Cv from "../components/CV/"

const CVPage = () => {
  return (
    <React.Fragment>
      <SEO title="CV" />
      <Title page fill={true}>
        CV
      </Title>
      <Container>
        <Cv />
      </Container>
    </React.Fragment>
  )
}

export default CVPage