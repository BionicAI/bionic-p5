import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta property="og:title" content="Bionic Enterprise Search" />
        <meta property="og:description" content="Bionic - A new approach to search technology" />
        <meta property="og:image:height" content="506" />
        <meta property="og:image:width" content="970" />
        <meta property="og:image" content="https://bionicsearch.net/opengraph.png" />
        <meta property="og:url" content="https://bionicsearch.net/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Bionic Enterprise Search" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@bionicsearch" />
        <meta name="twitter:creator" content="@naero" />
        <meta name="twitter:title" content="Bionic Enterprise Search" />
        <meta name="twitter:url" content="https://bionicsearch.net/" />
        <meta name="twitter:description" content="Bionic - A new approach to search technology" />
        <meta name="twitter:image" content="https://bionicsearch.net/opengraph.png" />
        <meta name="twitter:label1" value="Book a demo" />
        <meta name="twitter:data1" value="at bionicsearch.net/contact" />

        <link rel="icon" href="/favicon.png"/>
        <link rel="apple-touch-icon" sizes="57x57" href="https://bionicsearch.net/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="https://bionicsearch.net/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="https://bionicsearch.net/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="https://bionicsearch.net/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="https://bionicsearch.net/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="https://bionicsearch.net/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="https://bionicsearch.net/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="https://bionicsearch.net/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://bionicsearch.net/apple-icon-180x180.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
