import React from "react"
import SEO from "../components/seo"
import { Box } from "grommet"
import Title from "../components/Modules/Title"
import Container from "../components/UI/Container"
import ThankYou from "../components/ThankYou"

const SuccessPage = () => (
  <React.Fragment>
    <SEO title="Contact" />
    <Box>
      <Title page fill={true}>
        Thank You
      </Title>
      <Box pad={{ top: "40px" }}>
        <Container>
          <ThankYou />
        </Container>
      </Box>
    </Box>
  </React.Fragment>
)

export default SuccessPage
