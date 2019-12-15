import React from "react"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import PageTitle from "../components/PageTitle"
import ContactForm from "../components/ContactForm"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="l-main-content l-contact">
      <PageTitle title="Contact me" />
      <ContactForm />
    </div>
  </Layout>
)

export default ContactPage
