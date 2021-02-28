import React, { useContext } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import {
  Box,
  Grid,
  Carousel,
  defaultProps,
  Heading,
  ResponsiveContext,
} from "grommet"
import Container from "../UI/Container"
import Title from "../Modules/Title"
import styled from "styled-components"

const LatestProjects = () => {
  const size = useContext(ResponsiveContext)
  const isMobile = size === "small"
  const isDesktop = !isMobile

  const data = useStaticQuery(graphql`
    query {
      mobilePortfolioProjects: allContentfulPortfolio(
        sort: { fields: publishedDate, order: DESC }
        limit: 3
      ) {
        edges {
          node {
            title
            projectType
            liveUrl
            description {
              description
            }
            projectImage {
              file {
                url
              }
              fluid(quality: 9) {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
      desktopPortfolioProjects: allContentfulPortfolio(
        sort: { fields: publishedDate, order: DESC }
        limit: 5
      ) {
        edges {
          node {
            title
            projectType
            liveUrl
            description {
              description
            }
            projectImage {
              file {
                url
              }
              fluid(quality: 9) {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  `)

  let projects = isMobile
    ? data.mobilePortfolioProjects
    : data.desktopPortfolioProjects

  projects = projects.edges.map((project, index) => (
    <PortfolioProjectBox key={index}>
      <ImageBox>
        <Img fluid={project.node.projectImage.fluid} />
      </ImageBox>
      <ContentBox>
        <Link to={project.node.liveUrl}>
          <Heading level="4">{project.node.title}</Heading>
        </Link>
        <span>{project.node.projectType}</span>
      </ContentBox>
    </PortfolioProjectBox>
  ))

  return (
    <Box margin={{ bottom: "40px" }}>
      <Container>
        <Title section margin={{ bottom: "30px" }}>
          Latest Projects
        </Title>
        {isMobile && (
          <Carousel fill controls={false} play={2000}>
            {projects}
          </Carousel>
        )}
        {isDesktop && (
          <ProjectsGrid
            gap="medium"
            areas={[
              ["img1", "img1", "img1", "img1", "img2", "img2"],
              ["img1", "img1", "img1", "img1", "img3", "img3"],
              ["img4", "img4", "img4", "img5", "img5", "img5"],
            ]}
          >
            {projects}
          </ProjectsGrid>
        )}
      </Container>
    </Box>
  )
}

export default LatestProjects

const PortfolioProjectBox = styled(Box)`
  position: relative;
`

const ImageBox = styled(Box)`
  height: 300px;
  .gatsby-image-wrapper {
    height: 100%;
  }
`

const ContentBox = styled(Box)`
  padding-bottom: 50px;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 9;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  h4 {
    padding: 10px 20px;
    margin-bottom: 0;
    text-align: center;
    display: inline-block;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.5);

    a {
      color: #fff;
    }
  }

  span {
    display: inline-block;
    padding: 5px;
    position: absolute;
    top: 10px;
    right: 10px;
    color: #fff;
    background-color: ${defaultProps.theme.global.colors["accent-2"]};
    border-radius: 4px;
  }
`

const ProjectsGrid = styled(Grid)`
  > div:first-child {
    grid-area: img1;
  }
  > div:nth-child(2) {
    grid-area: img2;
  }
  > div:nth-child(3) {
    grid-area: img3;
  }
  > div:nth-child(4) {
    grid-area: img4;
  }
  > div:last-child {
    grid-area: img5;
  }
`
