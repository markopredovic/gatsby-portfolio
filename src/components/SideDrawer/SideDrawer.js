import React from 'react';
import { FaTimesCircle } from 'react-icons/fa'

import Menu from '../UI/Menu'
import Contact from '../Contact'

const SideDrawer = ({isOpened, closeSideDrawer}) => {
  return (
    <div className={`l-sidedrawer ${isOpened ? "is-opened" : ""}`}>
      <span className="l-close-sidedrawer" onClick={closeSideDrawer}>
        <FaTimesCircle />
      </span>
      <h3>Menu</h3>
      <Menu closeSideDrawer={closeSideDrawer} />
      <Contact />
    </div>
  )
}

export default SideDrawer;