import React from "react"
import SEO from "../components/seo"
import PageTitle from "../components/PageTitle"
import ContactForm from "../components/ContactForm"

const ContactPage = () => (
  <React.Fragment>
    <SEO title="Contact" />
    <div className="l-main-content l-contact">
      <PageTitle title="Contact me" />
      <ContactForm />
    </div>
  </React.Fragment>
)

export default ContactPage
