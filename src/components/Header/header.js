import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { FaBars } from "react-icons/fa"

import SideDrawer from "../SideDrawer"
import Backdrop from "../UI/Backdrop"
import Menu from "../UI/Menu"

const Header = ({ siteTitle, mode }) => {
  const isMobile = useMediaQuery("(max-width:991px)")
  const [isOpened, setIsOpened] = useState(false)

  return (
    <header className={mode}>
      <div className="l-header">
        {isMobile && (
          <div
            className="l-hamburger-menu m-hamburger-menu"
            onClick={() => setIsOpened(!isOpened)}
          >
            <FaBars />
          </div>
        )}
        <div className="l-title">
          <h1>
            <Link to="/">{siteTitle}</Link>
          </h1>
        </div>
        {!isMobile && (
          <div className="l-menu">
            <Menu />
          </div>
        )}
      </div>
      {isMobile && (
        <SideDrawer
          isOpened={isOpened}
          closeSideDrawer={() => setIsOpened(false)}
        />
      )}
      {isMobile && (
        <Backdrop
          isOpened={isOpened}
          closeSideDrawer={() => setIsOpened(false)}
        />
      )}
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
