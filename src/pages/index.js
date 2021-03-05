import React from "react"
import SEO from "../components/seo"
import { Box } from "grommet"

import Banner from "../components/Banner"
import MySkills from "../components/MySkills"
import LatestProjects from "../components/LatestProjects"
import Testimonials from "../components/Testimonials"
import AboutMe from "../components/AboutMe"

const IndexPage = () => (
  <Box>
    <SEO title="Home" />
    <Banner />
    <MySkills />
    <LatestProjects />
    <Testimonials />
    <AboutMe />
  </Box>
)

export default IndexPage
