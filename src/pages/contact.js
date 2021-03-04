import React from "react"
import loadable from "@loadable/component"

import SEO from "../components/seo"
import { Box } from "grommet"
import Title from "../components/Modules/Title"
import Container from "../components/UI/Container"
const ContactForm = loadable(() => import("../components/ContactForm"))

const ContactPage = () => (
  <React.Fragment>
    <SEO title="Contact" />
    <Box>
      <Title page fill={true}>
        Contact me
      </Title>
      <Container>
        <ContactForm />
      </Container>
    </Box>
  </React.Fragment>
)

export default ContactPage
