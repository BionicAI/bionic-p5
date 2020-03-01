import React from 'react'

// Major Components
import Header from "../components/header"
import Menu from "../components/menu/menu"
import Footer from "../components/footer"

// Minor Components
import Textbox from "../components/textbox"
import MainContainer from "../components/maincontainer"

// Specific Components
import Demo from "../components/specific/demo"
import Features from '../components/specific/features'
import MobileBadges from '../components/specific/native-app-search/mobile-badges'

// Load p5 safe
import Loadable from "@loadable/component"
// p5 sketches
import BionicLogo from '../p5-sketches/bionic-logo'
import { Link } from 'gatsby'

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
            headerText="Uncompromised search experiences on mobile apps" 
            subHeaderText="Single-file libraries for offline native apps. Installed in minutes."
        >
            <div style={{marginBottom: '-260px'}}>
            <Textbox>
                <MobileBadges />
                <h3>
                    Low hardware requirements make Bionic Native App Search run smoothly on mainstream mobile devices.
                </h3>
                <h3>
                    10.000 entries indexes in ~1 second.
                </h3>
            </Textbox>
            </div>
        </MainContainer>  

        <Textbox>
            <h1>Syncs between cloud and device</h1>
            <p>Add or remove entries on devices, and sync between devices in the cloud.</p>
            <br/>
            <h1>Bionic Search software requires no specially trained engineers or complex configuration files.</h1>
            <p>Just install, load your data, and go.</p>
        </Textbox>

        <Features />

        <Demo />

        <Footer />
  
    </>
    
  )