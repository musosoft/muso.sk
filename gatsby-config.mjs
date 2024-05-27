import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
  siteMetadata: {
    title: 'muso.sk',
    description: 'muso.sk Technology, Gaming, Website... news and services. Servers, Software, Hardware... here you get covered it all.',
    titleTemplate: ' · muso.sk',
    url: 'https://muso.sk',
    image: '/img/og-image.png',
    twitterUsername: '@muso.sk',
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-mdx-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1024,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `muso.sk`,
        short_name: `muso.sk`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#1992ff`,
        display: `standalone`,
        icon: `${__dirname}/static/img/icon.svg`,
      },
    },
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-decap-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
        enableIdentityWidget: false,
      },
    },
  ],
};
