import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Carousel } from "react-responsive-carousel"
import PortfolioProject from "../PortfolioProject"

const LatestProjects = ({ layoutCssClass }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPortfolio(
        sort: { fields: publishedDate, order: DESC }
        limit: 3
      ) {
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

  const projects = data.allContentfulPortfolio.edges.map((project, index) => (
    <PortfolioProject key={index} {...project} showDescription={false} />
  ))

  const options = {
    showArrows: false,
    showThumbs: false,
    showStatus: false,
  }

  return (
    <div className={layoutCssClass}>
      <h3 className="title-section">
        <span>Latest Projects</span>
      </h3>
      <Carousel {...options}>{projects}</Carousel>
    </div>
  )
}

export default LatestProjects
