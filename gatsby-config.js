module.exports = {
  siteMetadata: {
    title: `Bionic`,
    siteUrl: `https://bionicsearch.net`,
    description: `Bionic - A new approach to search`,
  },
  pathPrefix: '/',
  plugins: [`gatsby-plugin-react-helmet`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `fonts`,
      path: `${__dirname}/src/fonts/`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/assets/img/`,
    },
  },
  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: "UA-115175787-1",
    },
  },
  `gatsby-plugin-sass`, 
],
}




