module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        contentPath: `${__dirname}/src/site/notes`,
        rootNote: `/start_index`,
      },
    },
    `gatsby-plugin-netlify`
  ],
  siteMetadata: {
    title: process.env.SITE_NAME,
  },
}
