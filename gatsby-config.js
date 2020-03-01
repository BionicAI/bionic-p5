module.exports = {
  siteMetadata: {
    title: "Bionic",
    titleTemplate: "A new approach to search technology",
    description:
      "Bionic introduces a new approach to search. With our neural network vector models we take the guesswork out of the equation.",
    url: "https://www.bionic.as", // No trailing slash allowed!
    //image: `${__dirname}/assets/img/opengraph.png`, // Path to your image you placed in the 'static' folder
    image: "/assets/img/opengraph.png",
    twitterUsername: "@naero",
  },
  pathPrefix: '/',
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




