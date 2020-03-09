import React from 'react'
import { Helmet } from 'react-helmet'

import './layout.scss'

const Layout = ({ children }) => (
  <>
    <Helmet>
      <title>Bionic</title>
      <meta name="description" content="Bionic - A new approach to search technology" />
      <meta name="title" content="Bionic Enterprise Search" />
    </Helmet>
      {children}
  </>
)

export default Layout