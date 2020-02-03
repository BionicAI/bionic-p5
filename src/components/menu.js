import React from "react"
import menuStyles from "./menu.module.scss"

export default () => (
  <div className={menuStyles.menu}>

    <div>
    <ul>
      <li>Enterprise Search</li>
    </ul>
    </div>

    <div>
    <ul>
      <li>Anti-Money Laundry (beta)</li>
      <li>Native App Search</li>
      <li>Data Quality Assistant (beta)</li>
    </ul>
    </div>

  <div>
    <ul>
      <li>Contact sales</li>
    </ul>
  </div>

  </div>
)