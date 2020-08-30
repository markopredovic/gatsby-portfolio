import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import PortfolioProject from "../PortfolioProject"
import NavPortfolio from "../Portfolio/NavPortfolio"
import PortfolioIntro from "./PortfolioIntro"

const Portfolio = () => {
  const [activeProjectType, setActiveProjectType] = useState("All")

  const items = ["All", "Magento", "React js", "Vue js", "Wordpress", "Other"]

  const data = useStaticQuery(graphql`
    query {
      allContentfulPortfolio(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            projectType
            liveUrl
            description {
              description
            }
            projectImage {
              fluid(quality: 9) {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  `)

  const projects = data.allContentfulPortfolio.edges
    .filter((project) => {
      if (activeProjectType === null || activeProjectType === "All")
        return project
      else if (activeProjectType === "Other") {
        return ["Email template", "PSD to HTML", "Hybris"].includes(
          project.node.projectType
        )
      } else {
        return activeProjectType === project.node.projectType
      }
    })
    .map((project, index) => (
      <PortfolioProject
        key={index}
        {...project}
        showDescription={true}
        activeProjectType={activeProjectType}
        setActiveProjectType={setActiveProjectType}
      />
    ))

  return (
    <div className="l-portfolio">
      <NavPortfolio
        activeProjectType={activeProjectType}
        setActiveProjectType={setActiveProjectType}
        items={items}
      />
      <PortfolioIntro type={activeProjectType} />
      {projects}
    </div>
  )
}

export default Portfolio
