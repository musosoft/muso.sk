import path from 'path';
import { fileURLToPath } from 'url';

import { fileURLToPath } from 'url';

process.on('warning', (warning) => {
  if (warning.name === 'DeprecationWarning' && warning.message.includes('punycode')) {
    // Suppress the punycode deprecation warning
  } else {
    // Print all other warnings to the console
    console.warn(warning.name, warning.message, warning.stack);
  }
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  siteMetadata: {
    title: 'muso.sk',
    description:
      'muso.sk Technology, Gaming, Website... news and services. Servers, Software, Hardware... here you get covered it all.',
    titleTemplate: '%s · muso.sk',
    url: 'https://muso.sk',
    image: '/img/og-image.png',
    twitterUsername: '@muso.sk',
  },
  plugins: [
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
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
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
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
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`webp`, `auto`],
          quality: 90,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-decap-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
        enableIdentityWidget: false,
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
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-image`,
    'gatsby-plugin-postcss'
  ]
};
