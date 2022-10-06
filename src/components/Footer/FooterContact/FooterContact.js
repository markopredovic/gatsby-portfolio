import React from "react"
import { Box } from "grommet"
import styled from "styled-components"
import Contact from "../../Contact"

const FooterContact = () => {
  return (
    <WrapperBox>
      <Contact />
    </WrapperBox>
  )
}

export default FooterContact

const WrapperBox = styled(Box)`
  padding: 0 20px;
  margin-bottom: 20px;
`
