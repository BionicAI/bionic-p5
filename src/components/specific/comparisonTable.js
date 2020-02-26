import React from "react"
import { Link } from "gatsby"
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

        <div className={styles.responsiveTable}>
            <table>
                <tr className={styles.firstRow}>
                    <th className={styles.bionicCell}></th>
                    <th className={styles.bionicCell}>Bionic</th>
                    <th>Solr</th>
                    <th>Elastic</th>
                    <th>Algolia</th>
                </tr>
                <tr>
                    <th>Indexing time (1M posts)</th>
                    <td className={styles.green}>15 seconds</td>
                    <td className={styles.red}>124 minutes</td>
                    <td>57 minutes</td>
                    <td>102 minutes</td>
                </tr>
                <tr>
                    <th>Query time</th>
                    <td className={styles.green}>1 millisecond</td>
                    <td>100+ milliseconds</td>
                    <td>50-100+ milliseconds</td>
                    <td className={styles.red}>200+ milliseconds</td>
                </tr>
                <tr>
                    <th>Installation size</th>
                    <td className={styles.green}>500 KB</td>
                    <td className={styles.red}>73 MB</td>
                    <td>32 MB</td>
                    <td>Cloud only</td>
                </tr>
                <tr>
                    <th>Can run in the browser</th>
                    <td className={styles.green}>Yes, with up to 10.000 entries</td>
                    <td>No</td>
                    <td>No</td>
                    <td>No</td>
                </tr>
                <tr>
                    <th>Can run offline on mobile apps</th>
                    <td className={styles.green}>Yes, see <Link to="/native-app-search">Native App Search</Link></td>
                    <td>No</td>
                    <td>No</td>
                    <td>No</td>
                </tr>
                <tr>
                    <th>Spelling error correction</th>
                    <td className={styles.green}>Unlimited</td>
                    <td>Max 2 characters</td>
                    <td>Max 2 characters</td>
                    <td>Max 2 characters</td>
                </tr>
                <tr>
                    <th>Platforms</th>
                    <td className={styles.green}>C# .NET, C/C++, Java (Kotlin), Swift iOS, Typescript</td>
                    <td>Java</td>
                    <td>Java</td>
                    <td>N/A</td>
                </tr>
                <tr>
                    <th>Language handling</th>
                    <td>Supports all languages simultaneously</td>
                    <td>Needs special configuration and plugins</td>
                    <td>13 languages supported</td>
                    <td>Language-agnostic for basic use</td>
                </tr>
                <tr>
                    <th>Highly customizable</th>
                    <td>Yes</td>
                    <td>Yes, with special training</td>
                    <td>Yes, with special training</td>
                    <td>Yes</td>
                </tr>
            </table>
            <p>Do you want to compare us to another search system? <Link to="/contact">Contact us</Link></p>
        </div>
        
        
        

    </div>
)