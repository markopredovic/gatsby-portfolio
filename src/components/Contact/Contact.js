import React from "react"
import styled from "styled-components"
import { Box } from "grommet"
import { Github, Mail } from "grommet-icons"

const Contact = () => {
  return (
    <ContactBox>
      <Box direction="row" align="center" margin={{ bottom: "10px" }}>
        <Mail /> &nbsp;<span>mpredovic@gmail.com</span>
      </Box>
      <Box direction="row" align="center">
        <Github /> &nbsp;<span>markopredovic</span>
      </Box>
    </ContactBox>
  )
}

export default Contact

const ContactBox = styled(Box)`
  p {
    display: inline-flex;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  }
`
