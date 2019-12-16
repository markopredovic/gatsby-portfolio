import React, { useState } from "react"
import styles from "./ContactForm.module.scss"
import axios from "axios"

const ContactForm = () => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [message, setMessage] = useState()

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleFormSubmit = e => {
    e.preventDefault()
    console.log("[SUBMIT FORM]")

    axios
      .post({
        url: "/",
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        data: encode({
          "form-name": "Contact Form",
          "contact-name": name,
          "contact-email": email,
          "contact-message": message,
        }),
      })
      .then(() => console.log("[SUCCESS]"))
      .catch(e => console.log("[ERROR]", e))
  }

  return (
    <div className="l-contact-form">
      <div className={styles.contact_form}>
        <p className={styles.intro}>Send me email</p>
        <form
          name="Contact Form"
          method="post"
          data-netlify="true"
          action="/thank-you/"
          onSubmit={handleFormSubmit}
        >
          <input type="hidden" name="form-name" value="Contact Form" />
          <div className={styles.l_field}>
            <label htmlFor="contact-name">Name:</label>
            <input
              type="text"
              name="contact-name"
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className={styles.l_field}>
            <label htmlFor="contact-email">Email:</label>
            <input
              type="email"
              name="contact-email"
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.l_field}>
            <label htmlFor="contact-message">Message:</label>
            <textarea
              name="contact-message"
              onChange={e => setMessage(e.target.value)}
            />
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
