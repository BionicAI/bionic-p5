import React from 'react'
import styled from 'styled-components'

// Major Components
import Header from "../components/header"
import Menu from "../components/menu"
import MainContainer from "../components/maincontainer"
import Container from "../components/container"

// Minor Components
import Soloheading from "../components/soloheading"
import Textbox from "../components/textbox"

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
    <P5Wrapper sketch={PatternGrid} />
    <MainContainer 
      alternateText="-> Enterprise Search"
      headerText="Search with exceptional relevance and performance" 
      subHeaderText="Discover the world’s best performing
      critical search system"
    />
    <Container 
      headerText="Unique algorithms for unmatched search relevance"
      sketch={Relevance}
    />
    <Soloheading align="right" text="Extremely fast indexing and searching"/>

    <P5Wrapper sketch={Speed} />
    <Textbox>
      <h1>Up to 1000 queries per second</h1>
      <h1>More than 750.000 entries indexed per second</h1>
      <p>1.5 million entries indexes in ~20 seconds</p>
    </Textbox>

    <Soloheading align="left" margin={220} text="On-premise or cloud-based system configurations"/>


  </>
  
)
