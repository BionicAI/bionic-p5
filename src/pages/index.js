import React from 'react'
import styled from 'styled-components'

// Major Components
import Header from "../components/header"
import Menu from "../components/menu"
import Container from "../components/container"

// Minor Components
import Soloheading from "../components/soloheading"
import Textbox from "../components/textbox"

// Specific Components
import MainContainer from "../components/specific/maincontainer"
import Fuzzy from "../components/specific/fuzzy"

// Load p5 safe
import Loadable from "@loadable/component"
// p5 sketches
import TestSketch from '../p5-sketches/test-sketch'
import BionicLogo from '../p5-sketches/bionic-logo'
import PatternGrid from '../p5-sketches/pattern-grid'
import Relevance from '../p5-sketches/relevance'
import Speed from '../p5-sketches/speed'

const P5Wrapper = Loadable(() => import('../components/p5-wrapper'))

export default () => (
  <>
    <Header>
      <P5Wrapper sketch={BionicLogo} />
      <Menu />
    </Header>
    {/* Not needed yet
    <P5Wrapper sketch={PatternGrid} />
    */}
    <MainContainer 
      alternateText="-> Enterprise Search"
      headerText="Search with exceptional relevance and performance" 
      subHeaderText="Discover the world’s best performing
      critical search system"
    />
    <Container 
      headerText="Unique algorithms for unmatched search relevance"
      sketch={Relevance}
    >
      <p style={{color: "white"}}>
        Bionic takes on a fundamentally different approach to searching, with Neural Network Vector models.
        <br/><br/>
        Outperforms its competition. Does not make choices on behalf of the user.
        <br/><br/>
        Supports severe spelling errors.
      </p>
      </Container>


    <Soloheading align="right" text="Extremely fast indexing and searching"/>

    <P5Wrapper sketch={Speed} />
    <Textbox>
      <h1>Up to 1000 queries per second</h1>
      <h1>More than 750.000 entries indexed per second</h1>
      <p>1.5 million entries indexes in ~20 seconds</p>
      <p>1ms response time on a single instance</p>
    </Textbox>

    <Fuzzy />


  </>
  
)
