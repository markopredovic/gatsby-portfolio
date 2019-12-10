import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import PortfolioProject from "../PortfolioProject"
import NavPortfolio from "../Portfolio/NavPortfolio"

const Portfolio = () => {
  const [activeProjectType, setActiveProjectType] = useState("All")

  const items = [
    "All",
    "Magento 2",
    "Magento 1",
    "Wordpress",
    "Email template",
    "PSD to HTML",
    "Hybris",
  ]

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
              file {
                url
              }
            }
          }
        }
      }
    }
  `)

  const projects = data.allContentfulPortfolio.edges
    .filter(project => {
      if (activeProjectType === null || activeProjectType === "All")
        return project
      else return activeProjectType === project.node.projectType
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
      {projects}
    </div>
  )
}

export default Portfolio
