import React from "react"
import styled, { css } from "styled-components"
import { defaultProps, Heading } from "grommet"

const TitleHeading = styled(Heading)`
  ${(props) =>
    (props.section &&
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
      `) ||
    (props.page &&
      css`
        margin-bottom: 0;
        padding: 20px 10px;
        font-size: 3rem;
        text-align: center;
        color: #fff;
        background-color: ${defaultProps.theme.global.colors.brand};
        @media (min-width: 768px) {
          padding: 30px 10px;
          font-size: 3.6rem;
        }
        @media (min-width: 1024px) {
          padding: 50px 10px;
          font-size: 4rem;
        }
        @media (min-width: 1200px) {
          padding: 50px 10px;
          font-size: 4.2rem;
        }
      `)}
`

const Title = (props) => {
  return (
    <>
      {props.section && (
        <TitleHeading {...props} level="3">
          {props.children}
        </TitleHeading>
      )}
      {props.page && (
        <TitleHeading {...props} level="1">
          {props.children}
        </TitleHeading>
      )}
    </>
  )
}

export default Title
