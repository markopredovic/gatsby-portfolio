import React from "react"
import loadable from "@loadable/component"
import SEO from "../components/seo"

const Banner = loadable(() => import("../components/Banner"))
const MySkills = loadable(() => import("../components/MySkills"))
const LatestProjects = loadable(() => import("../components/LatestProjects"))
const Testimonials = loadable(() => import("../components/Testimonials"))
const AboutMe = loadable(() => import("../components/AboutMe"))

const IndexPage = () => (
  <React.Fragment>
    <SEO title="Home" />
    <Banner layoutCssClass="l-home-banner" />
    <MySkills layoutCssClass="l-home-skills" />
    <LatestProjects layoutCssClass="l-latest-projects" />
    <Testimonials layoutCssClass="l-home-testimonials" />
    <AboutMe />
  </React.Fragment>
)

export default IndexPage
