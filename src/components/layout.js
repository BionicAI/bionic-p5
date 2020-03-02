import React from 'react'
import { Helmet } from 'react-helmet'

import favicon from '../../assets/img/favicon.png'
import './layout.scss'

const Layout = ({ children }) => (
  <>
    <Helmet>
      <title>Bionic</title>
      <meta name="description" content="Bionic - A new approach to search technology" />
      
      <meta property="og:title" content="Bionic Enterprise Search" />
      <meta property="og:description" content="Bionic - A new approach to search technology" />
      <meta property="og:image:height" content="506" />
      <meta property="og:image:width" content="970" />
      <meta property="og:image" content="/opengraph.png" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@bionicsearch" />
      <meta name="twitter:creator" content="@naero" />
      <meta name="twitter:title" content="Bionic Enterprise Search" />
      <meta name="twitter:description" content="Bionic - A new approach to search technology" />
      <meta name="twitter:image" content="https://bionic-p5.andersnaero.now.sh/opengraph.png" />
      
      {/*<meta property="og:url" content="https://bionic.as" />*/}
      {/* YOLO */}
      <link rel="icon" href={favicon} />
    </Helmet>
    {children}
  </>
)

export default Layout
