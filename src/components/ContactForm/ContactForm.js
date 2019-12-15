import React from "react"
import styles from "./ContactForm.module.scss"

const ContactForm = () => {
  return (
    <div className="l-contact-form">
      <div className={styles.contact_form}>
        <p className={styles.intro}>Send me email</p>
        <form
          name="Contact Form"
          method="post"
          data-netlify="true"
          action="/thank-you/"
        >
          <input type="hidden" name="form-name" value="Contact Form" />
          <div className={styles.l_field}>
            <label htmlFor="contact-name">Name:</label>
            <input type="text" name="contact-name" />
          </div>
          <div className={styles.l_field}>
            <label htmlFor="contact-email">Email:</label>
            <input type="email" name="contact-email" />
          </div>
          <div className={styles.l_field}>
            <label htmlFor="contact-message">Message:</label>
            <textarea name="contact-message" />
          </div>
          <div className={styles.l_action}>
            <input type="submit" value="Send" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
