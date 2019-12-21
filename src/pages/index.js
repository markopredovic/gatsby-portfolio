import React from "react"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import Banner from "../components/Banner"
import MySkills from "../components/MySkills"
import LatestProjects from "../components/LatestProjects"
import Testimonials from "../components/Testimonials"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* banner: */}
    <Banner layoutCssClass="l-home-banner" />
    {/* my skils: */}
    <MySkills layoutCssClass="l-home-skills" />
    {/* latest projects: */}
    <LatestProjects layoutCssClass="l-latest-projects" />
    {/* testimonials: */}
    <Testimonials layoutCssClass="l-home-testimonials" />
  </Layout>
)

export default IndexPage

// TODO:
// 1. Portfolio page
// 2. Services page
// 3. Contact form
// 4.
