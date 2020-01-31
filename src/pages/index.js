import React from 'react'
import styled from 'styled-components'

import P5Wrapper from '../components/p5-wrapper'
import TestSketch from '../p5-sketches/test-sketch'

const HomePage = () => {
  return (
    <Wrapper>
      <P5Wrapper sketch={TestSketch} />
    </Wrapper>
  )
}

const Wrapper = styled.div``

export default HomePage
