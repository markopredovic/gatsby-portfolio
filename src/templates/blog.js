import React from "react"
import { graphql, Link } from "gatsby"
import { BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../components/Layout/layout"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
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
        console.log("node", node)
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url

        return <img alt={alt} src={url} />
      },
    },
  }

  return (
    <Layout>
      <div className="l-main-content">
        <h1>{props.data.contentfulBlogPost.title}</h1>
        <p>{props.data.contentfulBlogPost.publishedDate}</p>
        {documentToReactComponents(
          props.data.contentfulBlogPost.body.json,
          options
        )}
        <Link to="/blog">back to blog</Link>
      </div>
    </Layout>
  )
}

export default blog
