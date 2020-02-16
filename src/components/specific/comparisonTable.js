import React from "react"
import styles from "./comparisonTable.module.scss"

const Spec = props => (
    <div className={styles.spec}>{props.children}</div>
)
const SpecBox = props => (
    <div className={styles.specbox}>{props.children}</div>
)

export default props => (
    <div className={styles.wrapper}>
        <h1>Compared to conventional search engines</h1>

        <Spec>

            <SpecBox>
                <h2>50-100x faster response time</h2>
                <p>Bionic Search can repeat a search a thousand times in a second,  and will even outperform a computer monitors refresh rate</p>
            </SpecBox>

            <SpecBox>
                <h2>64x smaller installation</h2>
                <p>Bionic Search requires less than 500KB, compared to Elastic Search (32MB)</p>
            </SpecBox>

            <SpecBox>
                <h2>Vastly lower CPU usage</h2>
                <p>Keep running cost low with modern and lightweight software</p>
            </SpecBox>

            <SpecBox>
                <h2>No spelling error limits</h2>
                <p>Virtually unlimited faulty characters, compared to max 2 in other systems</p>
            </SpecBox>

        </Spec>

        

    </div>
)