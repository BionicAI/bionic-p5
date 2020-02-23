import React from "react"
import styles from "./contact-form.module.scss"

const TextField = props => (
    <div className={styles.textfield}>{props.children}</div>
)
const Flex = props => (
    <div className={styles.flex}>{props.children}</div>
)

export default props => (
    <div className={styles.contactform}>
        
        <form method="post" action="https://getform.io/f/817208fe-e2f8-4d45-96ca-daefdc51393d">
            <label>
                Name
                <input type="text" name="name" id="name" required/>
            </label>
            <label>
                Email
                <input type="email" name="email" id="email" required/>
            </label>
            <label>
                Phone
                <input type="tel" name="tel" id="tel" />
            </label>
            <label>
                Company website
                <input type="text" name="companywebsite" id="companywebsite"/>
            </label>
            <label>
                Inquiry type
                <select name="requestType">
                    <option value="General Question">General</option>
                    <option value="Advertise">Demonstration</option>
                    <option value="Partnership">Partnership</option>
                </select>
            </label>
            <label>
                Company size
                <select name="companySize">
                    <option value="1-10">1-10</option>
                    <option value="11-100">11-100</option>
                    <option value="101-1000">101-1000</option>
                    <option value="1000+">1000+</option>
                </select>
            </label>

            <label>
                Tell us what we can help you with
            </label>

            <TextField>
                <textarea name="message" id="message" rows="5" required/>
                <Flex>
                    <button type="submit">Send</button>
                    <input type="reset" value="Clear" />
                </Flex>
            </TextField>

        </form>
    </div>
)