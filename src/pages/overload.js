import * as React from "react"
import {Heading, VStack, Text, Center} from "@chakra-ui/react"
import SentenceForm from "../components/SentenceForm"
import Layout from "../components/Layout"
import OverloadForm from "../components/OverloadForm"
import {Link} from 'gatsby'

const Overload = ({location}) => {
    const sentence = location.state.value
    return (
        <Layout showCta={false}>
            <VStack spacing="4" p="0 1rem">
                <Heading as="h1" size="3xl" textAlign="center" p="0 1rem" mb="4">Geez, we have a small problem</Heading>
                <VStack align="flex-start">

                    <Text fontSize="lg" mb="1rem">Our servers are overloaded 🔥</Text>
                    <Text fontSize="md" mb=".5rem">If you leave us your email, we'll drop your
                        artwork once it's ready (~3 hours) 📨</Text>

                    <OverloadForm sentence={sentence}/>
                </VStack>
            </VStack>

        </Layout>
    )
}

export default Overload