module.exports = {
  siteMetadata: {
    title: "gatsby workshop",
    description: "Simple MDX blog site created during gatsby conf 2021",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-mdx",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/blog/`
        ,
      },
    },
  ],
};
