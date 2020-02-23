module.exports = {
  pathPrefix: '/gatsby-starter-p5',
  plugins: [`gatsby-plugin-react-helmet`, `gatsby-plugin-styled-components`, `gatsby-plugin-sass`,
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
],
}




