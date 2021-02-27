import React from "react"
import styled from "styled-components"
import { Box } from "grommet"
import { Link } from "gatsby"

const MenuBox = styled(Box)`
  nav {
    &:focus {
      outline: unset;
    }
  }
  ul {
    list-style: none;
    margin: 0;
    flex-wrap: wrap;
    &:focus {
      outline: unset;
    }

    li {
      margin: 0 20px 10px 0;
    }
    a {
      color: #fff;
    }
  }
`

const Menu = ({ closeSideDrawer }) => {
  const handleClose = (e) => {
    setTimeout(closeSideDrawer, 300)
  }

  return (
    <MenuBox margin="0 0 20px 0">
      <Box as="nav">
        <Box as="ul" direction="row" wrap="true" onClick={handleClose}>
          <Box as="li">
            <Link to="/" activeClassName="is-active-link">
              Home
            </Link>
          </Box>
          <Box as="li">
            <Link to="/portfolio" activeClassName="is-active-link">
              Portfolio
            </Link>
          </Box>
          <Box as="li">
            <Link to="/services" activeClassName="is-active-link">
              Services
            </Link>
          </Box>
          <Box as="li">
            <Link to="/blog" activeClassName="is-active-link">
              Blog
            </Link>
          </Box>
          <Box as="li">
            <Link to="/contact" activeClassName="is-active-link">
              Contact
            </Link>
          </Box>
          <Box as="li">
            <Link to="/about" activeClassName="is-active-link">
              About
            </Link>
          </Box>
        </Box>
      </Box>
    </MenuBox>
  )
}

export default Menu
