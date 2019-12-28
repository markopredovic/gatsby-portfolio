import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Carousel } from "react-responsive-carousel"
import PortfolioProject from "../PortfolioProject"
import useMediaQuery from "@material-ui/core/useMediaQuery"

const LatestProjects = ({ layoutCssClass }) => {
  const isMobile = useMediaQuery("(max-width: 991px)")
  const isDesktop = !isMobile

  const data = useStaticQuery(graphql`
    query {
      mobilePortfolioProjects: allContentfulPortfolio(
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
      desktopPortfolioProjects: allContentfulPortfolio(
        sort: { fields: publishedDate, order: DESC }
        limit: 5
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

  let projects = isMobile
    ? data.mobilePortfolioProjects
    : data.desktopPortfolioProjects

  projects = projects.edges.map((project, index) => (
    <PortfolioProject
      key={index}
      {...project}
      index={index}
      showDescription={false}
    />
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
      {isMobile && <Carousel {...options}>{projects}</Carousel>}
      {isDesktop && <div className="l-home-projects">{projects}</div>}
    </div>
  )
}

export default LatestProjects
