import * as React from "react"
import {
    Flex,
    VStack,
    Button
} from "@chakra-ui/react"
import { Link } from "gatsby"

const Cta = () => {
    return (
        <Flex direction="column">
            <VStack spacing="1rem">
                <Button colorScheme="blue" variant="solid" width="200px">
                    <Link to="/makeart">MAKE ART NOW</Link>
                </Button>

                <Button colorScheme="blue" variant="outline" width="200px">
                <Link to="/examples">SEE MORE EXAMPLES</Link>
                </Button>
            </VStack>
        </Flex>
    )
}

export default Cta