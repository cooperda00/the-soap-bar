//Modules
import React from "react"
import BackgroundImage from "gatsby-background-image"
//Sass
import styles from "./Hero.module.scss"

const Hero = ({ image, children, type }) => {
  const sizeClass = type === "home" ? `${styles.Home}` : `${styles.Page}`
  return (
    <BackgroundImage fluid={image} className={`${styles.Hero} ${sizeClass}`}>
      <section className={styles.Copy}>{children}</section>
    </BackgroundImage>
  )
}

export default Hero
