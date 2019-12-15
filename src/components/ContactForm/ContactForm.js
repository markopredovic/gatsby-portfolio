import React from "react"

const ContactForm = () => {
  return (
    <div className="l-contact-form">
      <form name="contact" method="post" data-netlify="true">
        <div className="l-field">
          <label htmlFor="contact-name">Name:</label>
          <input type="text" name="contact-name" />
        </div>
        <div className="l-field">
          <label htmlFor="contact-email">Email:</label>
          <input type="email" name="contact-email" />
        </div>
        <div className="l-field">
          <label htmlFor="contact-message">Message:</label>
          <textarea name="contact-message" />
        </div>
        <div className="l-action">
          <input type="submit" />
        </div>
      </form>
    </div>
  )
}

export default ContactForm
