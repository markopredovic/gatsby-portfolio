import React from "react"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import Banner from "../components/Banner"
import MySkills from "../components/MySkills"
import LatestProjects from "../components/LatestProjects"
import Testimonials from "../components/Testimonials"
import RandomQuote from "../components/RandomQuote"

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
    {/* quote of the day */}
    <RandomQuote />
  </Layout>
)

export default IndexPage

// TODO:
// 1. Banner images: Wordpress, Vue js
// 2. add About page: technology used
// 3. 404 page
// 4. add content to homepage bottom
