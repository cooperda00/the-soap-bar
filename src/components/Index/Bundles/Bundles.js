//Modules
import React from "react"
import Img from "gatsby-image"
//Sass
import styles from "./Bundles.module.scss"

const Bundles = ({ bundles }) => {
  return (
    <section className={styles.Bundles}>
      <h1>Our Bundles</h1>
      <div className={styles.BundlesWrapper}>
        {bundles.map(({ node }) => {
          return (
            <article className={styles.Bundle} key={node.id}>
              <div className={styles.Border} />
              <div className={styles.ImageContainer}>
                <Img fluid={node.image.fluid} className={styles.Image} />
              </div>
              <div className={styles.Content}>
                <h2>{node.title}</h2>
                <p>$ {node.price}</p>
                <button
                  className="btn-primary snipcart-add-item"
                  data-item-id={node.id}
                  data-item-name={node.title}
                  data-item-price={node.price}
                  data-item-url="https://the-soap-bar.netlify.com"
                  data-item-image={node.image.fixed.src}
                >
                  Add To Cart
                </button>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Bundles
