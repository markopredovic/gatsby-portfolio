import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import { useMediaQuery } from "react-responsive"

const Testimonials = ({ layoutCssClass }) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  })

  const isDesktop = useMediaQuery({
    query: "(min-width: 768px)",
  })

  const data = useStaticQuery(graphql`
    query {
      allContentfulTestimonial {
        edges {
          node {
            author
            description {
              description
            }
          }
        }
      }
    }
  `)

  const testimonials = data.allContentfulTestimonial.edges.map(
    (testimonial, index) => (
      <div key={index} className="l-testimonial m-testimonial">
        <p>{testimonial.node.description.description}</p>
        <span>{testimonial.node.author}</span>
      </div>
    )
  )

  const optionsMobile = {
    emulateTouch: true,
    showThumbs: false,
    showStatus: false,
    showArrows: false,
    interval: 6000,
    autoPlay: true,
    infiniteLoop: true,
  }

  const optionsDesktop = {
    emulateTouch: true,
    showThumbs: false,
    showStatus: false,
    showArrows: false,
    interval: 6000,
    autoPlay: true,
    infiniteLoop: true,
    centerMode: true,
    centerSlidePercentage: 33.33,
  }

  return (
    <div className={layoutCssClass}>
      <div className="l-container">
        <h3 className="title-section">My clients said ...</h3>
      </div>
      <div className="l-wrapper">
        <div className="l-container">
          {isMobile && <Carousel {...optionsMobile}>{testimonials}</Carousel>}
          {isDesktop && <Carousel {...optionsDesktop}>{testimonials}</Carousel>}
        </div>
      </div>
    </div>
  )
}

export default Testimonials
