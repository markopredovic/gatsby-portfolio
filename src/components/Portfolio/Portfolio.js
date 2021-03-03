import React, { useContext } from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import {
  Tabs,
  Tab,
  Box,
  Heading,
  ResponsiveContext,
  Anchor,
  defaultProps,
} from "grommet"
import Container from "../UI/Container"

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPortfolio(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            projectType
            liveUrl
            description {
              description
            }
            projectImage {
              fluid(quality: 9) {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  `)

  const size = useContext(ResponsiveContext)
  const isMobile = size === "small"

  let initialTabs = { all: [], magento: [], reactJs: [], other: [] }

  const projects = data.allContentfulPortfolio.edges.reduce((acc, current) => {
    acc["all"].push(current.node)
    if (current.node.projectType === "Magento") {
      acc["magento"].push(current.node)
    } else if (current.node.projectType === "React js") {
      acc["reactJs"].push(current.node)
    } else {
      acc["other"].push(current.node)
    }

    return acc
  }, initialTabs)

  console.log("projects", projects)

  const projectTypeInfo = {
    all: "All projects",
    magento: "Magento projects",
    reactJs: "Open source React js projects",
    other:
      "All other projects: Wordpress, Shopify, Vue js, Email template, PSD to HTML, Hybris",
  }

  return (
    <Box pad={{ top: "40px" }}>
      <Container>
        <Tabs>
          {Object.keys(projects).map((type, index) => {
            return (
              <Tab key={index} title={type}>
                <Heading level="3" margin={{ vertical: "60px" }}>
                  {projectTypeInfo[type]}
                </Heading>
                {projects[type].map((project, index) => (
                  <ProjectBox key={index}>
                    <ImageBox className="l-img">
                      <Img
                        fluid={project.projectImage.fluid}
                        alt={project.title}
                      />
                    </ImageBox>
                    <ContentBox className="l-content">
                      <Heading level="4">
                        <Anchor href={project.liveUrl}>{project.title}</Anchor>
                      </Heading>
                      <span className="type-tag">{project.projectType}</span>
                      {!isMobile && (
                        <Box
                          dangerouslySetInnerHTML={{
                            __html: project.description.description,
                          }}
                        />
                      )}
                    </ContentBox>
                  </ProjectBox>
                ))}
              </Tab>
            )
          })}
        </Tabs>
      </Container>
    </Box>
  )
}

export default Portfolio

const ProjectBox = styled(Box)`
  position: relative;
  margin-bottom: 40px;
  .l-img {
    order: 2;
  }
  .l-content {
    order: 1;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    margin-bottom: 60px;
    .l-img {
      order: 1;
      width: 48%;
      margin-right: auto;
    }
    .l-content {
      order: 2;
      width: 48%;
      .type-tag {
        position: static;
        margin-bottom: 15px;
        width: max-content;
      }
    }
  }
`

const ImageBox = styled(Box)`
  padding: 10px;
  box-shadow: 0 0 2px ${defaultProps.theme.global.colors["dark-6"]};
`

const ContentBox = styled(Box)`
  .type-tag {
    position: absolute;
    bottom: 20px;
    right: 0;
    z-index: 9;
    padding: 0 5px;
    font-size: 1.2rem;
    font-weight: 700;
    color: #fff;
    background-color: ${defaultProps.theme.global.colors["neutral-2"]};
    border-radius: 4px;
  }
`
