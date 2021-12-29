import React, { useContext } from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import SEO from "../components/seo"
import Title from "../components/Modules/Title"
import {
  Accordion,
  AccordionPanel,
  Box,
  Tabs,
  Tab,
  ResponsiveContext,
} from "grommet"
import Container from "../components/UI/Container"

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

  const size = useContext(ResponsiveContext)
  const isMobile = size === "small"

  const services = data.allContentfulService.edges

  return (
    <React.Fragment>
      <SEO title="Services" />
      <Box>
        <Title page fill={true}>
          Services
        </Title>
        <Container>
          {isMobile && (
            <Accordion pad={{ top: "40px" }}>
              {services.map((service) => (
                <ServiceAccordionPanel
                  key={service.node.id}
                  label={service.node.title}
                >
                  <Box pad="20px 10px">
                    <p>{service.node.description.description}</p>
                  </Box>
                </ServiceAccordionPanel>
              ))}
            </Accordion>
          )}
          {!isMobile && (
            <Tabs pad={{ top: "40px" }}>
              {services.map((service, index) => (
                <Tab key={service.node.id} title={service.node.title}>
                  <Box pad="20px 10px">
                    <p>{service.node.description.description}</p>
                  </Box>
                </Tab>
              ))}
            </Tabs>
          )}
        </Container>
      </Box>
    </React.Fragment>
  )
}

export default ServicesPage

const ServiceAccordionPanel = styled(AccordionPanel)`
  h4 {
    margin-bottom: 0;
    padding: 5px 0;
  }
`
