import React from "react"
import FooterMenu from "./FooterMenu"
import FooterContact from "./FooterContact"
import Copyright from "./Copyright"
// import BackToTop from "../BackToTop/BackToTop"

const footer = () => {
  return (
    <footer className="l-footer m-footer">
      <div className="l-container">
        <FooterMenu />
        <FooterContact />
        <Copyright />
      </div>
    </footer>
  )
}

export default footer
