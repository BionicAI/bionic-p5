import React from "react"
import styles from "./textbox.module.scss"

export default props => (
    <div className={styles.textbox}>

        {props.children}

    </div>
)