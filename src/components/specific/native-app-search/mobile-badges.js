import React from "react"
import styles from "./mobile-badges.module.scss"

const AndroidBadge = props => (
    <div className={[styles.badge, styles.android].join(' ')}></div>
)
const IOSBadge = props => (
    <div className={[styles.badge, styles.ios].join(' ')}></div>
)

export default props => (
    <div className={styles.wrapper}>
        <AndroidBadge />
        <IOSBadge />
    </div>
)