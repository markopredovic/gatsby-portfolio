import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { Box, defaultProps, Heading } from "grommet"
import Container from "../components/UI/Container"
import { Return } from "grommet-icons"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      subtitle
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        raw
        references {
          contentful_id
          ... on ContentfulAsset {
            contentful_id
            gatsbyImageData
            __typename
          }
        }
      }
      featuredImage {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`

const blog = (props) => {
  const Bold = ({ children }) => <span className="bold">{children}</span>
  const Text = ({ children }) => <p className="align-center">{children}</p>

  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { gatsbyImageData } = node.data.target
        if (!gatsbyImageData) {
          // asset is not an image
          return null
        }
        return <GatsbyImage image={gatsbyImageData} />
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
          <GatsbyImage
            image={getImage(props.data.contentfulBlogPost.featuredImage)}
            alt={props.data.contentfulBlogPost.title}
          />
        </ImageBox>
        <ContentBox>
          {renderRichText(props.data.contentfulBlogPost.body, options)}
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
