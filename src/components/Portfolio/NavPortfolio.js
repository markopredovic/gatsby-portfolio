import React from "react"

const NavPortfolio = ({ activeProjectType, setActiveProjectType, items }) => {
  return (
    <div className="l-nav-portfolio">
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            className={activeProjectType === item ? "active" : ""}
            onClick={() => setActiveProjectType(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NavPortfolio
