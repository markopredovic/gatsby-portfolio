import React from "react"
import SEO from "../components/seo"
import Title from "../components/Modules/Title"
import { Box } from "grommet"
import Portfolio from "../components/Portfolio/Portfolio"

const PortfolioPage = () => (
  <React.Fragment>
    <SEO title="Portfolio" />
    <Box>
      <Title page fill={true}>
        Portfolio
      </Title>
      <Portfolio />
    </Box>
  </React.Fragment>
)

export default PortfolioPage
