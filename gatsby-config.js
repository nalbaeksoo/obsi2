module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        contentPath: `${__dirname}/src/site/notes`,
        rootNote: `https://github.com/nalbaeksoo/obsi2/tree/master/src/site/notes/start_index.md`,
      },
    },
    `gatsby-plugin-netlify`
  ],
  siteMetadata: {
    title: process.env.SITE_NAME,
  },
}
