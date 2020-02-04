import React from "react"
import styled from 'styled-components'
import styles from "./container.module.scss"

// Load p5 safe
import Loadable from "@loadable/component"
const P5Wrapper = Loadable(() => import('../components/p5-wrapper'))


export default props => (
    <div className={styles.container} style={{background: `${props.backgroundClr}`}}>

        <div className={styles.textbox}>
            <h2 style={{color: `${props.headerClr}`}}>{props.headerText}</h2>
            {props.children}
        </div>

        <div className={styles.split} style={{float: `${props.floatSketch}`}}>
            <P5Wrapper sketch={props.sketch} />
        </div>

    </div>
)
