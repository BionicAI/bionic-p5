import React from 'react'

// Major Components
import Header from "../components/header"
import Menu from "../components/menu/menu"

import Footer from "../components/footer"

// Minor Components
import Soloheading from "../components/soloheading"
import Textbox from "../components/textbox"
import MainContainer from "../components/maincontainer"

// Specific Components
import ContactForm from "../components/specific/contact-form"

// Load p5 safe
import Loadable from "@loadable/component"
// p5 sketches
import BionicLogo from '../p5-sketches/bionic-logo'

const P5Wrapper = Loadable(() => import('../components/p5-wrapper')) // required
export default () => (
    <>
        <Header>
        <Menu mobilemenu={true} />
        <div style={{width: "150px", height: "48px"}}>
            <a href="/">
            <div id="p5_loading" style={{width: "150px", height: "48px"}} class="loadingclass"></div> {/* Remove loading screen */}
            <P5Wrapper sketch={BionicLogo} />
            </a>
        </div>
        <Menu />
        </Header>

        <MainContainer 
        alternateText="-> Get in touch"
        headerText="Find out how Bionic can help grow your business" 
        subHeaderText="Our team is happy to give you a demo. Fill out the form below to reach us."
        >
            <ContactForm />
        </MainContainer>  
        

        <Footer />
  
    </>
    
  )