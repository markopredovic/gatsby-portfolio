import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

const Testimonials = ({layoutCssClass}) => {
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

  const options = {
    showThumbs: false,
    showStatus: false,
    showArrows: false,
    interval: 6000,
    autoPlay: true,
    infiniteLoop: true
  }

  return (
    <div className={layoutCssClass}>
      <h3 className="title-section">
        My clients said ...
      </h3>
      <Carousel {...options}>{testimonials}</Carousel>
    </div>
  )
}

export default Testimonials
