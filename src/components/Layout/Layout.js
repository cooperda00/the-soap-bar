//Modules
import React from "react"
//Sass
import "./base.scss"
import styles from "./Layout.module.scss"
//Components
import Header from "./Header/Header"
import Footer from "./Footer/Footer"

const Layout = ({ children }) => {
  return (
    <div className={styles.Layout}>
      <Header />
      <main className={styles.ContentWrapper}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
