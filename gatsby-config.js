/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Alexis Villaraza Web Dev Portfolio",
    description:
      "Alexis is a Full Stack Web Developer with entrepreneurial and leadership experience.",
    url: "https://www.alexisvillaraza.com",
    image: "/site-preview.png",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "React go",
        short_name: "Reactgo",
        start_url: "/",
        background_color: "#f7f0eb",
        theme_color: "#a2466c",
        display: "standalone",
        icon: "src/assets/favicon.png",
      },
    },
    "gatsby-plugin-react-helmet",
  ],
}
