import React from "react"

const PortfolioIntro = ({ type }) => {
  const intro = {
    All: "All projects",
    Magento: "All magento 2 and magento 1 projects",
    "React js": "My open source React js projects",
    "Vue js": "My Vue js open source projects",
    Wordpress: "Wordpress custom development",
    Other: "Other projects: Email template, PSD to HTML, Hybris",
  }

  const getProjectIntro = type => {
    return intro[type]
  }

  const projectIntro = getProjectIntro(type)

  return (
    <div className="l-portfolio-intro">
      <p className="lead">{projectIntro}</p>
    </div>
  )
}

export default PortfolioIntro
