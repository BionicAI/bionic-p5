import React from "react"
import styles from "./features.module.scss"

const IntroField = props => (
    <div className={styles.introField}>{props.children}</div>
)

const SplitSection = props => (
    <div className={styles.splitSection} style={{backgroundColor: `${props.bgColor}`}}>{props.children}</div>
)

const Split = props => (
    <div className={styles.split}>{props.children}</div>
)

const Feature = props => (
    <div className={styles.feature}>{props.children}</div>
)

const CompatibilityImg = props => (
    <div className={styles.compatibilityImage}></div>
)

export default props => (
    <div className={styles.features}>

        <IntroField>
            <h2>Learn more about Bionic Enterprise Search</h2>
            <a href="#">Schedule a demo</a>
        </IntroField>

        <SplitSection>

            <Split>
                <h1>Features</h1>

                <Feature>Easy to use</Feature>
                <Feature>Can run in the browser</Feature>
                <Feature>GDPR compliant</Feature>
                <Feature>Multi-platform</Feature>
                <Feature>Easy to use</Feature>
                <Feature>Can run in the browser</Feature>
                <Feature>GDPR compliant</Feature>
                <Feature>Multi-platform</Feature>
                <Feature>Easy to use</Feature>
                <Feature>Can run in the browser</Feature>
                <Feature>GDPR compliant</Feature>
                <Feature>Multi-platform</Feature>
                <Feature>Easy to use</Feature>
                <Feature>Can run in the browser</Feature>
                <Feature>GDPR compliant</Feature>
                <Feature>Multi-platform</Feature>
                <Feature>Easy to use</Feature>
                <Feature>Can run in the browser</Feature>
                <Feature>GDPR compliant</Feature>
                <Feature>Multi-platform</Feature>

            </Split>

            <Split>
                <h1>Compatibility</h1>
                <CompatibilityImg/>
                <p>Works with any system and any data source</p>
                <p>On-premise or cloud-based system configurations</p>
            </Split>

        </SplitSection>
    </div>
)