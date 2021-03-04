import React from "react"

import SEO from "../components/seo"
import { Box, Paragraph } from "grommet"
import Container from "../components/UI/Container"
import Title from "../components/Modules/Title"

const NotFoundPage = () => (
  <React.Fragment>
    <SEO title="404: Not found" />
    <Title page fill={true}>
      Not Found
    </Title>
    <Box pad={{ top: "40px" }}>
      <Container>
        <Paragraph>You just hit a route that doesn&#39;t exist...</Paragraph>
      </Container>
    </Box>
  </React.Fragment>
)

export default NotFoundPage
