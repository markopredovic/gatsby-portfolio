import React from "react"
import loadable from "@loadable/component"

import SEO from "../components/seo"
const PageTitle = loadable(() => import("../components/PageTitle"))
const ContactForm = loadable(() => import("../components/ContactForm"))

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
