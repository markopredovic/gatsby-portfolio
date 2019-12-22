import React, { useState } from "react"
import styles from "./ContactForm.module.scss"
import { navigate } from "gatsby"

const ContactForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [errors, setErrors] = useState({})

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const validate = () => {
    let errors = {}

    if (name === "") {
      errors.name = "Name is required"
    }
    if (message === "") {
      errors.message = "Message is empty"
    }

    setErrors(errors)

    return errors
  }

  const handleFormSubmit = e => {
    e.preventDefault()
    const errors = validate()

    if (Object.keys(errors).length === 0) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "Contact Form",
          "contact-name": name,
          "contact-email": email,
          "contact-message": message,
        }),
      })
        .then(() => {
          navigate("/thank-you/")
        })
        .catch(e => {
          navigate("/error/")
        })
    }
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
            <label htmlFor="contact-name">
              Name <span style={{ color: "#c3073f" }}>*</span>
            </label>
            <input
              type="text"
              name="contact-name"
              onChange={e => setName(e.target.value)}
              style={errors && errors.name && { border: "1px solid #c3073f" }}
            />
            {errors && errors.name && (
              <span className={styles.error}>{errors.name}</span>
            )}
          </div>
          <div className={styles.l_field}>
            <label htmlFor="contact-email">Email</label>
            <input
              type="email"
              name="contact-email"
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.l_field}>
            <label htmlFor="contact-message">
              Message <span style={{ color: "#c3073f" }}>*</span>
            </label>
            <textarea
              name="contact-message"
              onChange={e => setMessage(e.target.value)}
              style={errors && errors.message && { borderColor: "#c3073f" }}
            />
            {errors && errors.message && (
              <span className={styles.error}>{errors.message}</span>
            )}
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
