import React from 'react';
import { Link } from 'gatsby'

const Menu = () => {
  return (
    <div className="m-menu">
      <nav>
        <ul>
          <li>
            <Link to="/" activeClassName="is-active-link">Home</Link>
          </li>
          <li>
            <Link to="/blog" activeClassName="is-active-link">Blog</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Menu;