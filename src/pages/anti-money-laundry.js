import React from 'react'
import { Link } from 'gatsby'

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
import Fuzzy from '../components/specific/fuzzy'
import BetaBadge from '../components/specific/identity-search/beta-badge'

// Load p5 safe
import Loadable from "@loadable/component"
// p5 sketches
import BionicLogo from '../p5-sketches/bionic-logo'
import fuzzy from '../components/specific/fuzzy'

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
        alternateText="-> Anti Money Laundry and Terrorism Compliance software"
        headerText="Verify identities and addresses with artificial intelligence" 
        subHeaderText="Bionic Anti Money Laundry comes pre-indexed with international sanctions lists"
        >
            <Textbox>
                <div style={{margin: '0 auto', marginBottom: '-250px', textAlign: "center", maxWidth: '600px'}}>
                    <BetaBadge>Pre-release software</BetaBadge> 
                    <h3>Bionic is currently building this solution, and we are actively seeking business partners within the financing and compliance market</h3>
                    <h3>Please <Link to='/contact'>contact</Link> us for more information on the development of this product</h3>
                </div>
            </Textbox>
        </MainContainer>  

        <Fuzzy />

        <Demo />

        <Footer />
  
    </>
    
  )