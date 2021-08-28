import * as React from "react"
import {Box, Flex, Heading, VStack} from "@chakra-ui/react"
import SentenceForm from "../components/SentenceForm"
import Layout from "../components/Layout"

const MakeArtPage = () => {
    return (
        <Layout showCta={false}>

            <VStack spacing="5rem" align="center">
                <Heading as="h1" size="3xl" textAlign="center" p="0 1rem">
                    It is time to{" "}
                    <Box as="span" color="blue.400">make some art</Box>
                </Heading>
                <SentenceForm/>
            </VStack>

        </Layout>
    )
}

export default MakeArtPage