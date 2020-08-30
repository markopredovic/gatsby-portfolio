import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../components/Layout/layout"
import { FaArrowAltCircleLeft } from "react-icons/fa"

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
    <Layout bodyClass={props.pageContext.bodyClass}>
      <div className="l-main-content l-post">
        <div className="l-header">
          <h3 className="m-post-title">
            {props.data.contentfulBlogPost.title}
          </h3>
          <h4 className="m-post-subtitle">
            {props.data.contentfulBlogPost.subtitle}
          </h4>
        </div>
        <div className="l-img">
          <Img
            fluid={props.data.contentfulBlogPost.featuredImage.fluid}
            alt={props.data.contentfulBlogPost.title}
          />
        </div>
        <div className="l-content">
          {documentToReactComponents(
            props.data.contentfulBlogPost.body.json,
            options
          )}
        </div>
        <div className="l-back">
          <Link to="/blog">
            <FaArrowAltCircleLeft /> back to blog
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default blog
