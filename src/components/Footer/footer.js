import React from "react"
import { Footer } from "grommet"
import FooterMenu from "./FooterMenu"
import FooterContact from "./FooterContact"
import Copyright from "./Copyright"

const footer = () => {
  return (
    <Footer pad="40px 0 0" background="dark-1" direction="column">
      <FooterMenu />
      <FooterContact />
      <Copyright />
    </Footer>
  )
}

export default footer
