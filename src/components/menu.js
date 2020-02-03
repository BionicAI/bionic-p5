import React from "react"
import menuStyles from "./menu.module.scss"

export default props => (
  <div className={menuStyles.menu}>

    <ul>
      <li className={menuStyles.current}>Enterprise Search</li>
    </ul>

    <ul>
      <li>Anti-Money Laundry</li>
      <li>Native App Search</li>
      <li>Data Quality Assistant</li>
    </ul>

    <ul className={menuStyles.contact}>
      <li>Contact sales</li>
    </ul>

  </div>
)