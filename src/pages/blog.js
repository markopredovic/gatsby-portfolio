import React from "react"
import Layout from "../components/Layout/layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import PageTitle from "../components/PageTitle"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: ASC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
            featuredImage {
              file {
                url
              }
            }
          }
        }
      }
    }
  `)

  const blogPosts = data.allContentfulBlogPost.edges

  return (
    <div>
      <Layout>
        <div className="l-main-content">
          <PageTitle title="Blog" />
          <ul>
            {blogPosts.map(post => {
              return (
                <li key={post.node.slug}>
                  <div className="post-item">
                    <Link to={`/blog/${post.node.slug}`}>
                      <img src={post.node.featuredImage.file.url} alt={post.node.title} />
                      {post.node.title}
                    </Link>
                  </div>

                  <p>{post.node.publishedDate}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </Layout>
    </div>
  )
}

export default Blog
