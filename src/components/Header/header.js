import { Link } from "gatsby"
import {
  Box,
  Button,
  Header,
  Heading,
  ResponsiveContext,
  defaultProps,
} from "grommet"
import React, { useContext, useState, useEffect } from "react"
import { Menu as MenuIcon, Close as CloseIcon } from "grommet-icons"
import SiteMenu from "../UI/Menu"
import styled from "styled-components"

const MyHeader = ({ siteTitle }) => {
  const [isOpened, setIsOpened] = useState(false)

  const size = useContext(ResponsiveContext)
  const isMobile = size === "small"

  const toggleDrawer = () => setIsOpened(!isOpened)

  useEffect(() => {
    console.log("page ready")
  }, [])

  return (
    <FixedHeader>
      {isMobile && (
        <Button
          onClick={toggleDrawer}
          icon={<MenuIconLarge />}
          hoverIndicator
        />
      )}
      <Logo>
        <Link to="/">{siteTitle}</Link>
      </Logo>
      {!isMobile && (
        <HeaderMenu>
          <SiteMenu />
        </HeaderMenu>
      )}
      <SideDrawer isOpened={isOpened}>
        <Box justify="end" direction="row" margin={{ bottom: "20px" }}>
          <Button
            onClick={toggleDrawer}
            icon={<CloseIconLarge />}
            hoverIndicator
          />
        </Box>
        <SiteMenu />
      </SideDrawer>
    </FixedHeader>
  )
}

export default MyHeader

const FixedHeader = styled(Header)`
  position: fixed;
  z-index: 90;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: #fff;

  @media (min-width: 770px) {
    padding: 0 20px;
    height: 70px;
    justify-content: flex-start;
    align-items: center;
  }
  @media (min-width: 1024px) {
    height: 80px;
  }
`

const Logo = styled(Heading)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  margin-bottom: 0;
  a {
    color: ${defaultProps.theme.global.colors.brand};
  }

  @media (min-width: 770px) {
    margin-right: auto;
    a {
      font-size: 3.6rem;
    }
    position: static;
    transform: unset;
  }
`

const MenuIconLarge = styled(MenuIcon)`
  width: 36px;
  height: 36px;
`
const CloseIconLarge = styled(CloseIcon)`
  width: 36px;
  height: 36px;
`

const HeaderMenu = styled(Box)`
  margin-bottom: 0;
  display: none;

  ul {
    flex-direction: row;
    margin: 0;
  }

  @media (min-width: 770px) {
    display: block;

    nav {
      ul {
        list-style: none;
        display: flex;
        flex-direction: row;

        li {
          margin: 0 0 0 20px;
        }
        a {
          color: ${defaultProps.theme.global.colors["neutral-1"]};
          &:hover {
            color: ${defaultProps.theme.global.colors["neutral-2"]};
          }
        }
      }
    }
  }
`

const SideDrawer = styled(Box)`
  position: fixed;
  top: 0;
  left: ${(props) => (props.isOpened ? "0" : "-100%")};
  z-index: 100;
  width: 80%;
  max-width: 350px;
  height: 100vh;
  background-color: #fff;
  transition: left 0.5s ease-in-out;

  nav {
    ul {
      list-style: none;
      margin: 0;

      li {
        margin-bottom: 0;
        border-bottom: 1px solid ${defaultProps.theme.global.colors["light-3"]};
        &:first-child {
          border-top: 1px solid ${defaultProps.theme.global.colors["light-3"]};
        }
      }
      a {
        display: block;
        padding: 0 20px;
        line-height: 40px;
        width: 100%;
        color: ${defaultProps.theme.global.colors["neutral-1"]};
        &:hover {
          color: ${defaultProps.theme.global.colors["accent-1"]};
        }
      }
    }
  }
`
