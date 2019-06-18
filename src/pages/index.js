//Modules
import React from "react"
import { graphql } from "gatsby"
//Components
import Layout from "../components/Layout/Layout"
import Hero from "../components/Hero/Hero"
import Info from "../components/Index/Info/Info"
import Menu from "../components/Index/Menu/Menu"
import Bundles from "../components/Index/Bundles/Bundles"
import Contact from "../components/Index/Contact/Contact"

const IndexPage = ({ data }) => {
  const heroImage = data.hero.childImageSharp.fluid
  const menu = data.allSoap
  const bundles = data.bundles.edges

  return (
    <Layout>
      <Hero image={heroImage} type="home">
        <h1>Welcome to The Soap Bar</h1>
        <h2>Enjoy our finest alcohol-themed artisanal soaps</h2>
      </Hero>
      <Info />
      <Menu menu={menu} />
      <Bundles bundles={bundles} />
      <Contact />
    </Layout>
  )
}

export const query = graphql`
  {
    hero: file(relativePath: { eq: "soap1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1900) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    allSoap: allContentfulSoap {
      edges {
        node {
          id
          name
          price
          category
          description {
            description
          }
          image {
            fluid(maxWidth: 600) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
    bundles: allContentfulSoapBundle(sort: { order: ASC, fields: createdAt }) {
      edges {
        node {
          id
          title
          price
          image {
            fluid(maxWidth: 300) {
              ...GatsbyContentfulFluid_tracedSVG
            }
            fixed(height: 50, width: 50) {
              src
            }
          }
        }
      }
    }
  }
`

export default IndexPage
