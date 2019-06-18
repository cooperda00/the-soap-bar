//Modules
import React, { useState } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import Fade from "react-reveal/Fade"
//Sass
import styles from "./Header.module.scss"
//Icons
import { IoIosCart, IoIosMenu } from "react-icons/io"
//Constants
import { links } from "../../../constants/links"

const Header = () => {
  const [menuOpen, toggleMenu] = useState(false)

  const {
    logo: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <header className={styles.Header}>
      <div className={styles.Title}>
        <Link to="/">
          <div className={styles.LogoContainer}>
            <Img fluid={fluid} className={styles.Logo} />
          </div>
        </Link>
        <Link to="/">
          <h1>The Soap Bar</h1>
        </Link>
      </div>

      <nav className={styles.Nav}>
        {links.map((link, i) => {
          return (
            <Link key={i} to={link.path}>
              {link.text}
            </Link>
          )
        })}
      </nav>

      <div className={styles.Cart}>
        <button>
          <Link className="snipcart-checkout">
            <IoIosCart />
          </Link>
        </button>
      </div>

      <div
        className={styles.Hamburger}
        onClick={() => {
          toggleMenu(!menuOpen)
        }}
      >
        <button>
          <IoIosMenu />
        </button>
      </div>

      <Fade right when={menuOpen} duration={300}>
        <nav className={styles.Menu}>
          {links.map((link, i) => {
            return (
              <Link key={i} to={link.path}>
                {link.text}
              </Link>
            )
          })}
          <Link className="snipcart-checkout">Cart</Link>
        </nav>
      </Fade>
    </header>
  )
}

const query = graphql`
  {
    logo: file(relativePath: { eq: "soap-bar.png" }) {
      childImageSharp {
        fluid(maxWidth: 80) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default Header
