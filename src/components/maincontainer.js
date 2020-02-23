import React from "react"
import styles from "./maincontainer.module.scss"

export default props => (
    <div className={styles.container}>
        <p>{props.alternateText}</p>
        <div className={styles.textbox}>
            <h1>{props.headerText}</h1>
            <h2>{props.subHeaderText}</h2>
            {props.children}
        </div>
    </div>
)