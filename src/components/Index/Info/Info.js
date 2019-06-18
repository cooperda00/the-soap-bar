import React from "react"
import { Link } from "gatsby"
import styles from "./Info.module.scss"

const Info = () => {
  return (
    <section className={styles.Info}>
      <h1>Our Story</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
        beatae hic, temporibus odio maiores quisquam est sed officia animi vero
        repudiandae corporis, quas ullam, praesentium officiis. Vel dolorum quae
        at, quibusdam temporibus tenetur iure placeat natus molestias neque?
        Numquam, nihil quaerat fuga ad unde est sed nemo illum adipisci
        quisquam.
      </p>
      <Link to="/about" className="btn-primary">
        About Us
      </Link>
    </section>
  )
}

export default Info
