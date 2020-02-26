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
                <h2>Bionic Relevancy Ranking™ algorithms brings spelling tolerance to a new level</h2>
                <p>Bionics Neural Network Vector measuring is a fundamentally different approach to searching. Bionic matches the entire search string with every indexed reference, and not just recognised words or predefined patterns.</p>
                <p>Your users will rarely know the data they are searching in. Other search engines will look for complete and recognized words, and hide all entries of its next-best guess. Bionic Search will not actively choose the search results presented to the user.</p>
                
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
                        <h3>Empowers the user with true autocomplete</h3>
                        <p>Relevancy Ranking allows for spelling errors without narrowing the users field of view</p>
                    </FeatureList>

                    <FeatureList>
                        <h3>Language agnostic semantic search capabilities</h3>
                        <p>Indexing identifies common phrases such as 'the', and identifies stemming without dictionary data</p>
                    </FeatureList>

                </FeatureSection>

            </SplitSection>

        </div>
)