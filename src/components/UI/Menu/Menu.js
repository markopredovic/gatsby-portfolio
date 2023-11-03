import React from "react"
import { Link } from "gatsby"

const SiteMenu = () => {
  return (
    <nav>
      <ul>
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
          <Link to="/cv" activeClassName="is-active-link">
            CV
          </Link>
        </li>
        <li>
          <Link to="/about" activeClassName="is-active-link">
            About
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default SiteMenu
