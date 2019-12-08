import React from "react"
import { graphql, Link } from "gatsby"
import { BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../components/Layout/layout"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      subtitle
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`

const blog = props => {
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url

        return <img alt={alt} src={url} />
      },
    },
  }

  return (
    <Layout>
      <div className="l-main-content l-post">
        <div className="l-header">
          <h3 className="m-post-title">
            {props.data.contentfulBlogPost.title}
          </h3>
          <h4 className="m-post-subtitle">
            {props.data.contentfulBlogPost.subtitle}
          </h4>
        </div>
        <div className="l-content">
          {documentToReactComponents(
            props.data.contentfulBlogPost.body.json,
            options
          )}
          <p className="m-post-date">
            {props.data.contentfulBlogPost.publishedDate}
          </p>
          <Link to="/blog">back to blog</Link>
        </div>
      </div>
    </Layout>
  )
}

export default blog
