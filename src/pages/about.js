//Modules
import React from "react"
import { graphql } from "gatsby"
//Components
import Layout from "../components/Layout/Layout"
import Hero from "../components/Hero/Hero"
import Info from "../components/Index/Info/Info"

const AboutPage = ({ data }) => {
  const heroImage = data.hero.childImageSharp.fluid

  return (
    <Layout>
      <Hero image={heroImage}>
        <h1>About Us</h1>
      </Hero>
      <Info />
    </Layout>
  )
}

export const query = graphql`
  {
    hero: file(relativePath: { eq: "soap2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1900) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default AboutPage
