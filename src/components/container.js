import React from "react"
import styles from "./container.module.scss"

// Load p5 safe
import Loadable from "@loadable/component"
const P5Wrapper = Loadable(() => import('../components/p5-wrapper'))

export default props => (
    <div className={styles.container}>
        <div className={styles.textbox}>
            <h2>{props.headerText}</h2>
        </div>
        <div className={styles.split}>
            <P5Wrapper sketch={props.sketch} />
        </div>
    </div>
)