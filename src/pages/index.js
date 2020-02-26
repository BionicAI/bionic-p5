import React from 'react'
import styled from 'styled-components'

// Major Components
import Header from "../components/header"
import Menu from "../components/menu/menu"
import MainContainer from "../components/maincontainer"
import Container from "../components/container"
import Footer from "../components/footer"

// Minor Components
import Soloheading from "../components/soloheading"
import Textbox from "../components/textbox"

// Specific Components
import Fuzzy from "../components/specific/fuzzy"
import Features from "../components/specific/features"
import ComparisonTable from "../components/specific/comparisonTable"
import Demo from "../components/specific/demo"

// Load p5 safe
import Loadable from "@loadable/component"
// p5 sketches
import BionicLogo from '../p5-sketches/bionic-logo'
import Relevance from '../p5-sketches/relevance'
import Speed from '../p5-sketches/speed'

const P5Wrapper = Loadable(() => import('../components/p5-wrapper')) //required
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
      alternateText="-> Enterprise Search"
      headerText="Search with exceptional relevance and performance" 
      subHeaderText="Discover the world’s best performing
      critical search system"
    />
    <Container 
      headerText="Unique algorithms for outstanding search relevance"
      sketch={Relevance}
    >
      <h3>Take the guesswork out of the equation</h3>
      <p style={{color: "white"}}>
        Bionic takes on a fundamentally different approach to searching, with Neural Network Vector models.
      </p>
      </Container>


    <Soloheading flex="flex-end" text="Unmatched index and response time"/>

    <P5Wrapper sketch={Speed} />
    <Textbox>
      <h1>Searches faster than 1.000 times per second</h1>
      <h1>More than 750.000 entries indexed per second</h1>
      <p>1.5 million entries indexes in ~20 seconds</p>
      <p>1ms response time on a single instance</p>
    </Textbox>
    

    <Fuzzy />

    <Features />

    <ComparisonTable />

    <Demo />

    <Footer />

  </>
  
)
