import React from "react"
import styles from "./fuzzy.module.scss"


const SplitSection = props => (
    <div className={styles.split} style={{backgroundColor: `${props.bgColor}`}}>{props.children}</div>
)
const FeatureSection = props => (
    <div className={styles.featureSection}>{props.children}</div>
)
const FeatureList = props => (
    <div className={styles.feature}>{props.children}</div>
)

const RelevancyRankImg = props => (
    <div className={styles.relevancyRankImage}></div>
)


export default props => (
        <div className={styles.fuzzy}>

            <SplitSection bgColor="#050F2D">
                <RelevancyRankImg />
            </SplitSection>

            <SplitSection bgColor="#050F2D">
                <h1>Not yet another fuzzy matcher</h1>
                <h2>Bionic's Relevancy Ranking™ algorithm features unprecedented spelling error tolerance</h2>
                <p>Bionic's neural network measures the mathematical distance between search strings, and matches the entire search string with each indexed reference. In contrast to our competitors, Bionic's relevancy ranking works without narrowing the users search range.</p>
                
                <FeatureSection>

                    <FeatureList>
                        <h3>Always-on relevancy algorithms</h3>
                        <p>Virtually limitless fault-tolerance allows for severe spelling errors, without performance drop or inconsistency</p>
                    </FeatureList>

                    <FeatureList>
                        <h3>Built-in Machine Learning</h3>
                        <p>Adapts to any pattern such as user behavior, typical entries, or common misspellings</p>
                    </FeatureList>

                    <FeatureList>
                        <h3>True autocomplete</h3>
                        <p>Real-time search results without using a 'Did you mean?' function</p>
                    </FeatureList>

                    <FeatureList>
                        <h3>Language agnostic semantic search capabilities</h3>
                        <p>Smart indexing identifies common phrases such as 'the', and supports word stemming without dictionary data</p>
                    </FeatureList>

                </FeatureSection>

            </SplitSection>

        </div>
)