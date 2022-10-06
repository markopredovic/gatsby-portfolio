import React, { useContext } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

import { Box, Paragraph, ResponsiveContext, defaultProps } from "grommet"
import Container from "../UI/Container"
import Title from "../Modules/Title"

const Testimonials = () => {
  const size = useContext(ResponsiveContext)

  const isMobile = size === "small"

  const isDesktop = !isMobile

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
      <TestimonialBox key={index} background="brand">
        <Paragraph>{testimonial.node.description.description}</Paragraph>
        <span>{testimonial.node.author}</span>
      </TestimonialBox>
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
    <Box margin={{ bottom: "60px" }}>
      <Container>
        <Title section margin={{ bottom: "30px" }}>
          My clients said ...
        </Title>
      </Container>
      <TestimonialsBox background="brand">
        <Container>
          {isMobile && <Carousel {...optionsMobile}>{testimonials}</Carousel>}
          {isDesktop && <Carousel {...optionsDesktop}>{testimonials}</Carousel>}
        </Container>
      </TestimonialsBox>
    </Box>
  )
}

export default Testimonials

const TestimonialsBox = styled(Box)`
  .carousel .slide {
    background-color: ${defaultProps.theme.global.colors.brand};
  }
`

const TestimonialBox = styled(Box)`
  padding: 40px 20px;
  p {
    max-width: 100%;
  }
  span {
    color: ${defaultProps.theme.global.colors["accent-2"]};
  }
`
