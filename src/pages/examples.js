import * as React from "react"
import {graphql} from 'gatsby'
import {GatsbyImage} from 'gatsby-plugin-image'
import {Box, VStack, Text} from "@chakra-ui/react"
import Layout from "../components/Layout"

const ExamplesPage = ({data}) => {
    const imagesArray = data.allFile.edges;
    console.log(data)
    return (

        <Layout showCta={true}>
            <Box pl="4" pr="4">
                <VStack spacing="16">

                    {imagesArray.map((image) => {
                        return (
                            <VStack spacing="4" align="flex-start" key={image.node.id}>
                                <GatsbyImage image={image.node.childImageSharp.gatsbyImageData} alt={`An image generated with our tool from the text prompt: ${image.node.name}`}/>
                                <Text fontSize="lg">{image.node.name}</Text>
                            </VStack>
                        )
                    })}

                </VStack>

            </Box>
        </Layout>

    )
}

export const query = graphql `
query {
    allFile(filter: {sourceInstanceName: {eq: "examples"}}) {
      edges {
        node {
          id
          name
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export default ExamplesPage