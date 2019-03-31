require('dotenv').config({
    path: `.env.development`,
})

module.exports = {
    siteMetadata: {
        locale: `en_GB`, // Fallback
        title: `Robert Marshall Portfolio`,
        description: `A developer portfolio for Robert Marshall showing latest projects, technologies and contact details`,
        author: `@RobMarProd`,
        siteUrl: `https://robertmarshall.dev`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sitemap`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images/`,
            },
        },
        {
            resolve: `gatsby-plugin-favicon`,
            options: {
                logo: './src/favicon.png',

                // WebApp Manifest Configuration
                appName: 'Robert Marshall Developer Portfolio', // Inferred with your package.json
                appDescription:
                    'A developer portfolio for Robert Marshall showing latest projects, technologies and contact details',
                developerName: 'Robert Marshall',
                developerURL: 'robertmarshall.dev',
                dir: 'auto',
                lang: 'en-US',
                background: '#fff',
                theme_color: '#fff',
                display: 'standalone',
                orientation: 'any',
                start_url: '/?homescreen=1',
                version: '1.0',
                icons: {
                    android: true,
                    appleIcon: true,
                    appleStartup: true,
                    coast: false,
                    favicons: true,
                    firefox: true,
                    opengraph: false,
                    twitter: false,
                    yandex: false,
                    windows: false,
                },
            },
        },
        `gatsby-plugin-sass`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: 'gatsby-plugin-html-attributes',
            options: {
                lang: 'en',
            },
        },
        {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
                fonts: [
                    {
                        family: `Open Sans`,
                        variants: [`300`, `400`, `700`, `900`],
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: process.env.GOOGLE_TRACKING_ID || '',
                // Puts tracking script in the head instead of the body
                head: false,
                // Enables Google Optimize using your container Id
                optimizeId: process.env.GOOGLE_OPTIMIZE_ID || '',
                // Enables Google Optimize Experiment ID
                experimentId: process.env.GOOGLE_EXPERIMENT_ID || '',
                // Set Variation ID. 0 for original 1,2,3....
                variationId: process.env.GOOGLE_VARIATION_ID || '',
            },
        },
    ],
}
