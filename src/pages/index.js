import React from "react"
import loadable from "@loadable/component"
import SEO from "../components/seo"
import { Box } from "grommet"

const Banner = loadable(() => import("../components/Banner"))
const MySkills = loadable(() => import("../components/MySkills"))
const LatestProjects = loadable(() => import("../components/LatestProjects"))
const Testimonials = loadable(() => import("../components/Testimonials"))
const AboutMe = loadable(() => import("../components/AboutMe"))

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
