import React from "react"

const PortfolioProject = ({ node, showDescription, index }) => {
  return (
    <div className={`l-portfolio-project portfolio-project-${index}`}>
      <div className="l-img">
        <a href={node.liveUrl} target="_blank" rel="noopener noreferrer">
          <img src={node.projectImage.file.url} alt={node.title} />
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
