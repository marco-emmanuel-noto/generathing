import * as React from "react"
import {
    Box,
    Flex,
    Center,
    Heading,
    Text,
    VStack
} from "@chakra-ui/react"
import HorizontalScroll from "../components/HorizonalScroll"
import {StaticImage} from "gatsby-plugin-image"
import {EditIcon, TimeIcon} from '@chakra-ui/icons'
import StepList from "../components/StepList"
import Layout from "../components/Layout"
import Cta from "../components/Cta"

const IndexPage = () => {
    return (
        <Layout showCta={true}>
            <VStack spacing="12">
                {/* <Box as="spacer" h="10rem"/> */}

                <Center>

                    {/* Main heading */}
                    <Box>
                        <Heading as="h1" size="3xl" textAlign="center" p="0 1rem" mt="12">
                            Turn{" "}
                            <Box as="span" color="blue.400">words into art</Box>
                            {" "}in minutes
                        </Heading>
                    </Box>
                </Center>

                 
                {/* Horizontal scroll carousel */}
                <HorizontalScroll/>

                

                <Center>
                    <VStack spacing="12" p="0 1rem">
                        
                            <Text fontSize="xl" textAlign="center">We at generathing took care of the{" "}
                                <Box as="span" color="blue.400">artificial black magic shit™</Box>, you can take all the credit.</Text>

                            <Cta/>

                            <Box>
                                <Heading as="h2" size="xl" textAlign="center">Artificial intelligence is a complex topic
                                </Heading>
                                <Text fontSize="lg" textAlign="center">(and you are not going to learn it here)</Text>
                            </Box>

                            <StaticImage src="../images/no-code.png" placeholder="blurred"/>

                            <Box>

                                <VStack spacing="8">
                                    <Box>
                                        <Heading as="h3" size="lg" textAlign="center">We gave acid to the best engineers
                                        </Heading>
                                        <Text fontSize="lg" textAlign="center">(that's a joke if you are into law enforcement)</Text>
                                    </Box>

                                    <Heading as="h3" size="lg" textAlign="center">They gave us back a way to{" "}
                                        <Box as="span" color="blue.400">make art as simple as that:</Box>
                                    </Heading>
                                </VStack>
                            </Box>

                            <StepList icon={< EditIcon />} action="You write a sentence"/>
                            <StepList icon="⏎" action="You press enter"/>
                            <StepList icon={< TimeIcon />} action="You wait a bit"/>
                            <Heading as="h3" size="lg" textAlign="center">Oh, and I almost forgot:<br/>
                                <Box as="span" color="blue.400">it is free of charge</Box>
                            </Heading>
                            <Cta/>
                        
                    </VStack>
                </Center>
            </VStack>
        </Layout>

    )
}

export default IndexPage
