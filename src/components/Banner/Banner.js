import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import { useStaticQuery, graphql } from "gatsby"

const Banner = ({ layoutCssClass }) => {
  const data = useStaticQuery(graphql`
    {
      allContentfulBannerSlider {
        edges {
          node {
            title
            desktopImage {
              file {
                url
              }
            }
            mobileImage {
              file {
                url
              }
            }
            description
          }
        }
      }
    }
  `)

  const banners = data.allContentfulBannerSlider.edges.map((banner, index) => {
    return (
      <div key={index} className="m-banner-slide">
        <div className="l-img">
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet={banner.node.mobileImage.file.url}
            />
            <source
              media="(min-width: 768px)"
              srcSet={banner.node.desktopImage.file.url}
            />
            <img
              src={banner.node.desktopImage.file.url}
              alt={banner.node.title}
            />
          </picture>
        </div>
        <div className="l-banner-content">
          <h3>{banner.node.title}</h3>
          <p>{banner.node.description}</p>
        </div>
      </div>
    )
  })

  const options = {
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
