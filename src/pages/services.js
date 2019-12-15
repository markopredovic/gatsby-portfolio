import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import PageTitle from "../components/PageTitle"

const ServicesPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulService(sort: { fields: position, order: ASC }) {
        edges {
          node {
            id
            title
            position
            description {
              description
            }
          }
        }
      }
    }
  `)

  const services = data.allContentfulService.edges

  console.log("[SERVICES]", services)

  return (
    <Layout>
      <SEO title="Services" />
      <div className="l-main-content l-services">
        <PageTitle title="Services" />
        <ul className="l-content">
          {services.map((service, index) => (
            <li key={service.node.id}>
              <div className="m-service">
                <h3>{service.node.title}</h3>
                <p>{service.node.description.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export default ServicesPage
