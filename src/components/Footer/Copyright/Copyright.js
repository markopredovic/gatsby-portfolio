import { Box, defaultProps } from "grommet"
import styled from "styled-components"
import React from "react"

const Copyright = () => {
  return (
    <CopyrightBox>
      Copyright &copy; {new Date().getFullYear()} by markoni512.dev
    </CopyrightBox>
  )
}

export default Copyright

const CopyrightBox = styled(Box)`
  width: 100%;
  padding: 10px 20px;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  background-color: ${defaultProps.theme.global.colors["dark-2"]};
`
