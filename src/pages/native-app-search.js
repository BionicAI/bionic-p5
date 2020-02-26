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
import Demo from "../components/specific/demo"

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
        alternateText="-> Native App Search"
        headerText="Bionic Search on iOS and Android" 
        subHeaderText="Single-file libraries for native apps. Installed in minutes."
        >
        </MainContainer>  

        <Demo />

        <Footer />
  
    </>
    
  )