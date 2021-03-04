import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import { BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Box, defaultProps, Heading } from "grommet"
import Container from "../components/UI/Container"
import { Return } from "grommet-icons"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      subtitle
      featuredImage {
        fluid(quality: 9) {
          ...GatsbyContentfulFluid
        }
      }
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`

const blog = (props) => {
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url

        return <img alt={alt} src={url} />
      },
    },
  }

  return (
    <Box>
      <TitleBox>
        <Heading level="3" fill={true}>
          {props.data.contentfulBlogPost.title}
        </Heading>
        <Heading level="4" fill={true}>
          {props.data.contentfulBlogPost.subtitle}
        </Heading>
      </TitleBox>
      <Container>
        <ImageBox>
          <Img
            fluid={props.data.contentfulBlogPost.featuredImage.fluid}
            alt={props.data.contentfulBlogPost.title}
          />
        </ImageBox>
        <ContentBox>
          {documentToReactComponents(
            props.data.contentfulBlogPost.body.json,
            options
          )}
        </ContentBox>
        <BackBox>
          <Link to="/blog">
            <Return /> back to blog
          </Link>
        </BackBox>
      </Container>
    </Box>
  )
}

export default blog

const TitleBox = styled(Box)`
  padding: 30px 10px;
  margin-bottom: 20px;
  text-align: center;
  color: #fff;
  background-color: ${defaultProps.theme.global.colors["brand"]};

  h3 {
    margin-bottom: 20px;
    font-size: 2.4rem;
  }
  h4 {
    margin-bottom: 0;
    font-size: 1.8rem;
  }

  @media (min-width: 992px) {
    margin-bottom: 40px;

    h3 {
      font-size: 2.8rem;
    }
    h4 {
      font-size: 2rem;
    }
  }
`

const ImageBox = styled(Box)`
  margin-bottom: 40px;
`

const ContentBox = styled(Box)``

const BackBox = styled(Box)`
  a {
    display: inline-flex;
    align-items: center;

    svg {
      margin-right: 4px;
    }
  }
`
