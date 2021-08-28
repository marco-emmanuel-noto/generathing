require("dotenv").config({path: `.env.${process.env.NODE_ENV}`})

module.exports = {
    siteMetadata: {
        siteUrl: "https://www.yourdomain.tld",
        title: "generative"
    },
    plugins: [
        "gatsby-plugin-gatsby-cloud",
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp", {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/"
            },
            __key: "images"
        }, {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "examples",
                path: "./src/examples/"
            },
            __key: "examples"
        }, {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: "./src/pages/"
            },
            __key: "pages"
        }, {
            resolve: "@chakra-ui/gatsby-plugin",
            options: {
                resetCSS: true,
                isUsingColorMode: true,
                initialColorMode: "dark"
            }
        }, {
            resolve: `gatsby-source-formium`,
            options: {
                // Get your projectId from https://dashboard.formium.io
                projectId: process.env.GATSBY_FORMIUM_PROJECTID,
                // Generate a personal access token by going to
                // https://dashboard.formium.io/account#tokens
                accessToken: process.env.FORMIUM_TOKEN
            }
        }
    ]
};
