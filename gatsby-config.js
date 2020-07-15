'use strict'

module.exports = {
  pathPrefix: "/blog",
  siteMetadata: {
    title: 'Aaron McMahan.',
    tagline: 'I build things for the web',
    description:
      'I am a software engineer based in San Diego, CA specializing in building exceptional websites, applications and everything in between.',
    keywords: 'gatsbyjs, gatsby, javascript, aaron, mcmahan, software',
    siteUrl: 'https://aaronmcmahan.com',
    author: {
      name: 'Aaron McMahan',
      url: 'https://twitter.com/awmcmahan',
      email: 'awmcmahan@outlook.com'
    }
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem'
            }
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://gatsby-starter-typescript-plus.netlify.com'
      }
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet'
  ]
}
