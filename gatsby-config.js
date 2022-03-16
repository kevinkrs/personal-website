module.exports = {
  siteMetadata: {
    title: `Kevin Kraus | Full-Stack Developer and Graphic Design`,
    siteUrl: `https://www.kevinkrs.com`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss',
    `gatsby-plugin-image`,
    'gatsby-transformer-sharp',
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`],
          quality: 95,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-next-seo',
      options: {
        openGraph: {
          type: 'website',
          locale: 'de_DE',
          url: 'kevinkrs.com',
          site_name: 'kevinkrs',
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kevin Kraus IT Services`,
        short_name: `IT Services`,
        start_url: `/`,
        background_color: `#7dd3fc`,
        theme_color: `#7dd3fc`,
        display: `standalone`,
        icon: 'src/images/icon.png',
      },
    },
  ],
};
