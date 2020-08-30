import React from "react"
import Img from 'gatsby-image'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import { useStaticQuery, graphql } from "gatsby"

const Banner = ({ layoutCssClass }) => {
  const data = useStaticQuery(graphql`
    {
      allContentfulBannerSlider(sort: { fields: position, order: ASC }) {
        edges {
          node {
            title
            desktopImage {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
            mobileImage {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
            description
          }
        }
      }
    }
  `)

  const banners = data.allContentfulBannerSlider.edges.map((banner, index) => {
    const sources = [
      banner.node.mobileImage.fluid,
      {
        ...banner.node.desktopImage.fluid,
        media: `(min-width: 768px)`
      }
    ]
    return (
      <div key={index} className="m-banner-slide">
        <div className="l-img">
        <Img fluid={sources} />
        </div>
        <div className="l-banner-content">
          <h3>{banner.node.title}</h3>
          <p>{banner.node.description}</p>
        </div>
      </div>
    )
  })

  const options = {
    autoPlay: true,
    interval: 3000,
    infiniteLoop: true,
    stopOnHover: true,
    showArrows: false,
    showThumbs: false,
    showStatus: false,
    onClickItem: () => {},
  }

  return (
    <div className={layoutCssClass}>
      <div className="m-banner">
        <Carousel {...options}>{banners}</Carousel>
      </div>
    </div>
  )
}

export default Banner
