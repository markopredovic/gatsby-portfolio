import React, { useContext } from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { Box, Carousel, Paragraph, Heading, ResponsiveContext } from "grommet"
import { useStaticQuery, graphql } from "gatsby"

const Banner = () => {
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

  const size = useContext(ResponsiveContext)
  const isMobile = size === "small"

  const banners = data.allContentfulBannerSlider.edges.map((banner, index) => {
    const sources = [
      banner.node.mobileImage.fluid,
      {
        ...banner.node.desktopImage.fluid,
        media: `(min-width: 768px)`,
      },
    ]
    return (
      <BannerBox key={index}>
        <ImageBox>
          <Img fluid={sources} />
        </ImageBox>
        <ContentBox>
          <Box>
            <Heading level="3">{banner.node.title}</Heading>
            {!isMobile && <Paragraph>{banner.node.description}</Paragraph>}
          </Box>
        </ContentBox>
      </BannerBox>
    )
  })

  return (
    <Box margin={{ bottom: "60px" }}>
      <Carousel fill controls={true}>
        {banners}
      </Carousel>
    </Box>
  )
}

export default Banner

const BannerBox = styled(Box)`
  position: relative;
`

const ImageBox = styled(Box)`
  height: 400px;
  .gatsby-image-wrapper {
    height: 100%;
  }

  @media (min-width: 992px) {
    height: 350px;
  }

  @media (min-width: 1200px) {
    height: 400px;
  }

  @media (min-width: 1440px) {
    height: 450px;
  }

  @media (min-width: 1700px) {
    height: 500px;
  }
`

const ContentBox = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 0 10% 50px;
  justify-content: flex-end;
  > div {
    padding: 10px 20px;
    text-align: center;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.5);
  }
  h3 {
    max-width: 100%;
    margin-bottom: 0;
  }
  p {
    max-width: 100%;
  }

  @media (min-width: 768px) {
    padding: 0 10%;
    justify-content: center;
    align-items: flex-end;
    > div {
      width: 50%;
    }

    h3 {
      margin-bottom: 10px;
    }
  }

  @media (min-width: 1440px) {
    padding-bottom: 50px;
    justify-content: flex-end;
    align-items: center;
    > div {
      width: 50%;
    }

    h3 {
      margin-bottom: 10px;
    }
  }
`
