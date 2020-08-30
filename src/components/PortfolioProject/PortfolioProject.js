import React from "react"
import Img from "gatsby-image"

const PortfolioProject = ({ node, showDescription, index }) => {
  return (
    <div className={`l-portfolio-project portfolio-project-${index}`}>
      <div className="l-img">
        <a href={node.liveUrl} target="_blank" rel="noopener noreferrer">
          <Img fluid={node.projectImage.fluid} alt={node.title} />
        </a>
      </div>
      <div className="l-content">
        <a href={node.liveUrl} target="_blank" rel="noopener noreferrer">
          <h3>{node.title}</h3>
          <h4>{node.projectType}</h4>
        </a>
        {showDescription && (
          <div
            className="l-description-project"
            dangerouslySetInnerHTML={{ __html: node.description.description }}
          />
        )}
      </div>
    </div>
  )
}

export default PortfolioProject
