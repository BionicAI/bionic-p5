import React from "react"
import styles from "./textbox.module.scss"

export default props => (
    <div
    className={styles.textbox} 
    style={{
        background: `${props.backgroundClr}`,
        color: `${props.color}`,
        padding: `${props.padding}`
    }}>

        {props.children}

    </div>
)