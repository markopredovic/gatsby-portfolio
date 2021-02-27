import React from "react"
import { Footer } from "grommet"
import Container from "../UI/Container"
import FooterMenu from "./FooterMenu"
import FooterContact from "./FooterContact"
import Copyright from "./Copyright"

const footer = () => {
  return (
    <Footer pad="40px 0" background="dark-1">
      <Container>
        <FooterMenu />
        <FooterContact />
        <Copyright />
      </Container>
    </Footer>
  )
}

export default footer
