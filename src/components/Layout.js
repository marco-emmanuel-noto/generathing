import * as React from "react"
import {
    Box,
    Center,
    Flex,
    Spacer,
    Text,
    useColorModeValue,
    Button
} from "@chakra-ui/react"
import {StaticImage} from "gatsby-plugin-image"
import ThemeToggle from './ThemeToggle'
import {Link} from "gatsby"

const Layout = (props) => {
    const navBg = useColorModeValue("white", "gray.800")
    return (
        <Box>
            <Box
                pt="4"
                w="100%"
                position="fixed"
                top="0"
                zIndex="999"
                as="nav"
                bg={navBg}
                pb="4">
                <Flex justify="center" align="center">
                    <Box ml="1rem" width="3rem">
                        <Link to="/"><StaticImage src="../images/gen-logo.png"/></Link>

                    </Box>

                    <Spacer/>

                    {props.showCta && <Button colorScheme="blue" variant="outline" mr="4" >
                        <Link to="/makeart">TRY IT NOW</Link>
                    </Button>}

                    <ThemeToggle/>

                </Flex>
            </Box>
            <Box mt="32">{props.children}</Box>
            <Box as="footer" mt="12" mb="4">
                <Center>
                    <Text fontSize="xs">Made with ❤️ etc.</Text>
                </Center>

            </Box>
        </Box>

    )
}

export default Layout