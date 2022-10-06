import React from "react"
import styled from "styled-components"
import { Box } from "grommet"
import Menu from "../../UI/Menu"

const FooterMenu = () => {
  return (
    <MenuWrapper>
      <Menu />
    </MenuWrapper>
  )
}

export default FooterMenu

const MenuWrapper = styled(Box)`
  padding: 0 20px;
  margin-bottom: 40px;
  ul {
    list-style: none;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    li {
      margin-right: 20px;
      &:last-child {
        margin-right: 0;
      }
    }

    a {
      color: #fff;
    }
  }
`
