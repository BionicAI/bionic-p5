import React from "react"
import styles from "./beta-badge.module.scss"

export default props => (
    <div className={styles.badge}>{props.children}
    </div>
)