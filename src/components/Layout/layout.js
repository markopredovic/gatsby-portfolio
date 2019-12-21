/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../Header"
import Footer from "../Footer"
import "../../styles/styles.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [headerMode, setHeaderMode] = useState("")

  const handleScroll = evt => {
    console.log("scroll event", evt)
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop

    if (scrollTop > 10) {
      setHeaderMode("l-dark")
    } else setHeaderMode("")
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", () => {})
    }
  }, [])

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} mode={headerMode} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
