import React from "react"
import { Link } from "gatsby"

const PortfolioProject = ({ node, showDescription, index }) => {
  return (
    <div className={`l-portfolio-project portfolio-project-${index}`}>
      <div className="l-img">
        <a href={node.liveUrl} target="_blank">
          <img src={node.projectImage.file.url} alt={node.title} />
        </a>
      </div>
      <div className="l-content">
        <a href={node.liveUrl} target="_blank">
          <h3>{node.title}</h3>
          <h4>{node.projectType}</h4>
        </a>
        {showDescription && (
          <p className="l-description-project">
            {node.description.description}
          </p>
        )}
      </div>
    </div>
  )
}

export default PortfolioProject
