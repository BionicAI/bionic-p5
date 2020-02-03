import React from 'react'
import { Helmet } from 'react-helmet'


// import favicon from '../../assets/img/favicon.ico'
import './layout.scss'

const Layout = ({ children }) => (
  <>
    <Helmet>
      <title>Bionic</title>
      <meta name="description" content="A starter for Gatsby.js with p5.js" />
      {/* <link rel="icon" href={favicon} /> */}
    </Helmet>
    {children}
  </>
)

export default Layout
