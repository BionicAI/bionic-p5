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

const P5Wrapper = Loadable(() => import('../components/p5-wrapper'))
//const BionicLogo = Loadable(() => import('../p5-sketches/bionic-logo'))

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



  </>
  
)
