import React from 'react'
import styled from 'styled-components'

// Components
import Header from "../components/header"
import Menu from "../components/menu"
import MainContainer from "../components/maincontainer"
import Container from "../components/container"

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
    <Container
      headerText="Extermely fast indexing and searching"
      backgroundClr="#EFEFEF"
      headerClr="black"
      floatSketch="left"
      sketch={Speed}
    >
      <p>Her kan jeg skrive noe faenskap om hvor raskt vi kan søke og indeksere. Skikkelig raskt</p>
    </Container>



  </>
  
)
