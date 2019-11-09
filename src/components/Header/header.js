import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { FaBars } from "react-icons/fa"

import SideDrawer from '../SideDrawer'
import Backdrop from "../UI/Backdrop"

const Header = ({ siteTitle }) => {

  const [isOpened, setIsOpened] = useState(false)

  return (
    <header>
      <div className="l-header">
        <div
          className="l-hamburger-menu m-hamburger-menu"
          onClick={() => setIsOpened(!isOpened)}
        >
          <FaBars />
        </div>
        <div className="l-title">
          <h1>
            <Link to="/">{siteTitle}</Link>
          </h1>
        </div>
      </div>
      <SideDrawer
        isOpened={isOpened}
        closeSideDrawer={() => setIsOpened(false)}
      />
      <Backdrop
        isOpened={isOpened}
        closeSideDrawer={() => setIsOpened(false)}
      />
    </header>
  )
}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
