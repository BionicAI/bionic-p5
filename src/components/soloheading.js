import React from "react"
import styles from "./soloheading.module.scss"

export default (props) => (
  <h1 
  className={styles.header}
  style={{
      float: `${props.align}`,
      marginTop: 120,
      textAlign: `${props.align}`
  }}
  >{props.text}</h1>
)