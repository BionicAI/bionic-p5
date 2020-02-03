import React from 'react'
import styled from 'styled-components'

// Components
import Header from "../components/header"
import Menu from "../components/menu"

// Load p5 safe
import Loadable from "@loadable/component"
// p5 sketches
import TestSketch from '../p5-sketches/test-sketch'
import BionicLogo from '../p5-sketches/bionic-logo'

const P5Wrapper = Loadable(() => import('../components/p5-wrapper'))
//const BionicLogo = Loadable(() => import('../p5-sketches/bionic-logo'))

export default () => (
  <>
    <Header>
      <P5Wrapper sketch={BionicLogo} />
      <Menu />
    </Header>
    <div className="content">
      <P5Wrapper sketch={TestSketch} />
    </div>
  </>
  
)
