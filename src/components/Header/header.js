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
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Mail,
  Github,
} from "grommet-icons"
import SiteMenu from "../UI/Menu"
import styled from "styled-components"

const MyHeader = ({ siteTitle }) => {
  const [isOpened, setIsOpened] = useState(false)
  const [tBackground, setTBackground] = useState("white")

  const size = useContext(ResponsiveContext)
  const isMobile = size === "small"

  const toggleDrawer = () => setIsOpened(!isOpened)

  const toggleHeaderBackground = () => {
    let scrollY = window.scrollY

    if (scrollY >= 200) {
      setTBackground("dark")
    } else {
      setTBackground("white")
    }
  }

  useEffect(() => {
    document.addEventListener("scroll", toggleHeaderBackground)

    return () => {
      document.removeEventListener("scroll", toggleHeaderBackground)
    }
  }, [])

  return (
    <FixedHeader tBackground={tBackground}>
      {isMobile && (
        <Button
          onClick={toggleDrawer}
          icon={<MenuIconLarge tBackground={tBackground} />}
          hoverIndicator
        />
      )}
      <Logo tBackground={tBackground}>
        <Link to="/">{siteTitle}</Link>
      </Logo>
      {!isMobile && (
        <HeaderMenu tBackground={tBackground}>
          <SiteMenu />
        </HeaderMenu>
      )}
      <Backdrop
        isOpened={isOpened}
        animation={{
          type: "fadeIn",
          delay: 300,
          duration: 500,
        }}
        onClick={toggleDrawer}
      />
      <SideDrawer isOpened={isOpened}>
        <Box justify="end" direction="row" margin={{ bottom: "20px" }}>
          <Button
            onClick={toggleDrawer}
            icon={<CloseIconLarge />}
            hoverIndicator
          />
        </Box>
        <SiteMenu />
        <HeaderContacts>
          <ul>
            <li>
              <Mail /> <span>mpredovic@gmail.com</span>
            </li>
            <li>
              <Github /> <span>markopredovic</span>
            </li>
          </ul>
        </HeaderContacts>
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
  background-color: ${(props) =>
    props.tBackground === "white" ? "#fff" : "#000"};
  transition: background-color 0.5s linear;

  @media (min-width: 770px) {
    padding: 0 20px;
    height: 70px;
    justify-content: flex-start;
    align-items: center;
  }
  @media (min-width: 1024px) {
    height: 80px;
  }
  @media (min-width: 1200px) {
    padding: 0 calc(50% - 580px);
  }
`

const Logo = styled(Heading)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  margin-bottom: 0;
  a {
    color: ${(props) =>
      props.tBackground === "white"
        ? defaultProps.theme.global.colors.brand
        : defaultProps.theme.global.colors["light-1"]};
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

  stroke: ${(props) =>
    props.tBackground === "white"
      ? defaultProps.theme.global.colors["dark-1"]
      : defaultProps.theme.global.colors["light-1"]};
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
          color: ${(props) =>
            props.tBackground === "white"
              ? defaultProps.theme.global.colors["neutral-1"]
              : defaultProps.theme.global.colors["light-3"]};
          &:hover {
            color: ${(props) =>
              props.tBackground === "white"
                ? defaultProps.theme.global.colors["neutral-2"]
                : defaultProps.theme.global.colors["light-4"]};
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
  transition: left 0.5s linear;

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

const HeaderContacts = styled(Box)`
  margin-top: auto;
  padding: 0 20px 20px;

  ul {
    list-style: none;
    margin: 0;

    li {
      display: inline-flex;
      align-items: center;

      svg {
        margin-right: 10px;
      }
    }
  }
`

const Backdrop = styled(Box)`
  display: ${(props) => (props.isOpened ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.5s linear;
`
