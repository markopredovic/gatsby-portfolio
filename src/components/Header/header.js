import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { FaBars } from "react-icons/fa"

import SideDrawer from "../SideDrawer"
import Backdrop from "../UI/Backdrop"
import Menu from "../UI/Menu"

const Header = ({ siteTitle, mode }) => {
  const [isOpened, setIsOpened] = useState(false)

  return (
    <header className={mode}>
      <div className="l-header">
        <div
          className="l-hide-desktop l-hamburger-menu m-hamburger-menu"
          onClick={() => setIsOpened(!isOpened)}
        >
          <FaBars />
        </div>
        <div className="l-title">
          <h1>
            <Link to="/">{siteTitle}</Link>
          </h1>
        </div>
        <div className="l-menu l-hide-mobile">
          <Menu />
        </div>
      </div>
      <div className="l-hide-desktop">
        <SideDrawer
          isOpened={isOpened}
          closeSideDrawer={() => setIsOpened(false)}
        />
      </div>
      <div className="l-hide-desktop">
        <Backdrop
          isOpened={isOpened}
          closeSideDrawer={() => setIsOpened(false)}
        />
      </div>
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
