import React from "react"
import headerStyles from "./header.module.scss"

export default ({ children }) => (
  <div className={headerStyles.header}>{children}</div>
)