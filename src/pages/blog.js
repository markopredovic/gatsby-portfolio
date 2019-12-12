import React from "react"
import Layout from "../components/Layout/layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import PageTitle from "../components/PageTitle"

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
        <div className="l-main-content l-posts-list">
          <PageTitle title="Blog" />
          <div className="l-content">
            <ul>
              {blogPosts.map(post => {
                return (
                  <li key={post.node.slug}>
                    <div className="post-item">
                      <div className="l-img">
                        <Link to={`/blog/${post.node.slug}`}>
                          <img
                            src={post.node.featuredImage.file.url}
                            alt={post.node.title}
                          />
                        </Link>
                      </div>
                      <div className="l-desc">
                        <Link to={`/blog/${post.node.slug}`}>
                          <h3>{post.node.title}</h3>
                        </Link>
                        <p>{post.node.publishedDate}</p>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Blog
