import React from "react"
import SEO from "../components/seo"
import { Box, Paragraph } from "grommet"
import Container from "../components/UI/Container"
import Title from "../components/Modules/Title"

const ErrorPage = () => (
  <React.Fragment>
    <SEO title="Contact" />
    <Box>
      <Title page fill={true}>
        Error
      </Title>
      <Box pad={{ top: "40px" }}>
        <Container>
          <Paragraph>Something went wrong</Paragraph>
        </Container>
      </Box>
    </Box>
  </React.Fragment>
)

export default ErrorPage
