//Modules
import React, { useState, useEffect } from "react"
import Img from "gatsby-image"
//Sass
import styles from "./Menu.module.scss"

const Menu = ({ menu }) => {
  const [menuItems, setMenu] = useState([])
  const [filteredMenu, setFilteredMenu] = useState([])

  //On Mount
  useEffect(() => {
    const soapMenu = menu.edges
    setMenu(soapMenu)
    setFilteredMenu(soapMenu)
  }, [])

  const handleFilterChange = e => {
    const filter = e.target.value.toLowerCase()
    const arrayClone = menuItems
    const filteredArray = arrayClone.filter(({ node }) =>
      node.name.toLowerCase().includes(filter)
    )
    setFilteredMenu(filteredArray)
  }

  return (
    <section className={styles.Menu}>
      <h1 className={styles.Title}>Our Menu</h1>

      <div className={styles.Filter}>
        <label htmlFor="filter">Filter By Name:</label>
        <input type="text" onChange={handleFilterChange} id="filter" />
      </div>

      <div className={styles.MenuWrapper}>
        {filteredMenu &&
          filteredMenu.map(({ node }) => {
            const {
              name,
              description: { description },
              price,
              id,
              image: { fluid },
            } = node
            return (
              <article key={id} className={styles.MenuItem}>
                <div className={styles.ImageWrapper}>
                  <Img fluid={fluid} className={styles.Image} />
                </div>
                <div className={styles.Content}>
                  <div>
                    <h2>{name}</h2>
                    <p className={styles.Price}>${price}</p>
                  </div>

                  <p>{description}</p>
                </div>
              </article>
            )
          })}
      </div>
    </section>
  )
}

export default Menu
