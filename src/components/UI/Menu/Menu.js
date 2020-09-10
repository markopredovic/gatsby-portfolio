import React from "react"
import { Link } from "gatsby"

const Menu = ({ closeSideDrawer }) => {
  const handleClose = (e) => {
    setTimeout(closeSideDrawer, 300)
  }

  return (
    <div className="m-menu">
      <nav>
        <ul onClick={handleClose}>
          <li>
            <Link to="/" activeClassName="is-active-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/portfolio" activeClassName="is-active-link">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/services" activeClassName="is-active-link">
              Services
            </Link>
          </li>
          <li>
            <Link to="/blog" activeClassName="is-active-link">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contact" activeClassName="is-active-link">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/about" activeClassName="is-active-link">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Menu
