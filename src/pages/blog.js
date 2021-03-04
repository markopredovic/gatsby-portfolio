import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import Title from "../components/Modules/Title"
import { Box, defaultProps } from "grommet"
import Container from "../components/UI/Container"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
            featuredImage {
              fluid(quality: 9) {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  `)

  const blogPosts = data.allContentfulBlogPost.edges

  return (
    <Box>
      <Title page fill={true}>
        Blog
      </Title>
      <Container>
        <Box as="ui" pad={{ top: "40px" }}>
          {blogPosts.map((post) => {
            return (
              <Box as="li" key={post.node.slug} margin={{ bottom: "30px" }}>
                <PostItemBox>
                  <ImageBox>
                    <Link to={`/blog/${post.node.slug}`}>
                      <Img
                        fluid={post.node.featuredImage.fluid}
                        alt={post.node.title}
                      />
                    </Link>
                  </ImageBox>
                  <ContentBox>
                    <Link to={`/blog/${post.node.slug}`}>
                      <h3>{post.node.title}</h3>
                    </Link>
                    <p>{post.node.publishedDate}</p>
                  </ContentBox>
                </PostItemBox>
              </Box>
            )
          })}
        </Box>
      </Container>
    </Box>
  )
}

export default Blog

const PostItemBox = styled(Box)`
  flex-direction: row;
  align-items: flex-start;
`

const ImageBox = styled(Box)`
  width: 80px;
  min-width: 80px;
  height: 80px;
  margin-right: 20px;
  border-radius: 100%;

  a {
    display: block;
    height: 100%;
  }
  .gatsby-image-wrapper {
    height: 100%;
    border-radius: 80px;
    border: 1px solid ${defaultProps.theme.global.colors["dark-6"]};
  }

  img {
    display: inline-block;
    height: 100%;
    object-fit: cover;
    object-position: center;
    margin-bottom: 0;
  }

  @media (min-width: 992px) {
    width: 120px;
    min-width: 120px;
    height: 120px;
    margin-right: 30px;
  }
`

const ContentBox = styled(Box)`
  padding-top: 5px;
  h3 {
    margin-bottom: 5px;
    font-size: 2rem;
  }
  p {
    font-size: 1.3rem;
    font-style: italic;
  }

  @media (min-width: 992px) {
    padding-top: 10px;
    h3 {
      margin-bottom: 10px;
      font-size: 2.4rem;
    }
    p {
      font-size: 1.4rem;
    }
  }
`
