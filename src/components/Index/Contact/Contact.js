//Modules
import React, { useState } from "react"
//Sass
import styles from "./Contact.module.scss"

const Contact = () => {
  const [submitted, toggleSubmitted] = useState(false)

  return (
    <section className={styles.Contact}>
      <h1>Contact Us</h1>
      {submitted ? (
        <p className={styles.Submitted}>Thanks for reaching out!</p>
      ) : (
        <form
          className={styles.ContactForm}
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={e => {
            e.preventDefault()
            toggleSubmitted(true)
          }}
        >
          <div className={styles.InputGroup}>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              placeholder="John Smith"
              name="name"
              id="name"
              onFocus={e => {
                e.target.placeholder = ""
              }}
              onBlur={e => {
                e.target.placeholder = "John Smith"
              }}
              required
            />
          </div>

          <div className={styles.InputGroup}>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              placeholder="smith_jo@example.com"
              name="email"
              id="email"
              onFocus={e => {
                e.target.placeholder = ""
              }}
              onBlur={e => {
                e.target.placeholder = "smith_jo@example.com"
              }}
              required
            />
          </div>

          <div className={styles.InputGroup}>
            <label htmlFor="message">Message: </label>
            <textarea
              placeholder="Dear Sir/Madame... "
              name="message"
              id="message"
              onFocus={e => {
                e.target.placeholder = ""
              }}
              onBlur={e => {
                e.target.placeholder = "Dear Sir/Madame... "
              }}
              required
            ></textarea>
          </div>

          <div className={styles.SubmitGroup}>
            <input type="submit" value="Submit" className="btn-primary" />
          </div>

          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
        </form>
      )}
    </section>
  )
}

export default Contact
