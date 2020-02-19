import React from "react"
import styles from "./soloheading.module.scss"

export default (props) => (
  <div className={styles.header} style={{justifyContent: `${props.flex}`}}>
    <h1>{props.text}</h1>
  </div>
)