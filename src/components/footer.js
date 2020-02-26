import React from "react"
import styles from "./footer.module.scss"

// Load p5 safe
import Loadable from "@loadable/component"
import BionicLogo from '../p5-sketches/bionic-logo'
const P5Wrapper = Loadable(() => import('../components/p5-wrapper'))

export default props => (
    <div className={styles.footer}>
        <p>Bionic AS - Org. NO-979 925 166</p>
        <p>Oslo, Norway</p>
        <a href="/contact">Contact sales</a>
    </div>
)