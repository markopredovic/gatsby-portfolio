import React from "react"
import styled, { css } from "styled-components"
import { Heading } from "grommet"

const TitleHeading = styled(Heading)`
  ${(props) =>
    props.section &&
    css`
      position: relative;
      font-size: 2.4rem;
      text-transform: uppercase;
      &:after {
        position: absolute;
        bottom: -10px;
        left: 0;
        content: "";
        height: 3px;
        width: 80px;
        background-color: #950740;
      }
    `}
`

const Title = (props) => {
  return (
    <TitleHeading {...props} level="3">
      {props.children}
    </TitleHeading>
  )
}

export default Title
