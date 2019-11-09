import React from "react"

const Backdrop = ({ isOpened, closeSideDrawer }) => {
  return <>{isOpened && <div id="backdrop" onClick={closeSideDrawer}></div>}</>
}

export default Backdrop
