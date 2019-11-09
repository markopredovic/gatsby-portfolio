import React from 'react';
import { checkPropTypes } from 'prop-types';

const PortfolioProject = ({node, showDescription}) => {
  return (
    <div className="l-portfolio-project">
      <div className="l-img">
        <img src={node.projectImage.file.url} alt={node.title} />
      </div>
      <div className="l-content">
        <h3>{node.title}</h3>
        {showDescription && <p>{node.description.description}</p>}
      </div>
    </div>
  )
}

export default PortfolioProject;