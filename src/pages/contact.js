import React from "react"

import SEO from "../components/seo"
import { Box } from "grommet"
import Title from "../components/Modules/Title"
import Container from "../components/UI/Container"
import ContactForm from "../components/ContactForm"

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
