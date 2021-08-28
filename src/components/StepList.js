import * as React from "react"
import {
    Flex,
    Spacer,
    Heading,
    Circle,
} from "@chakra-ui/react"

const StepList = (props) => {
    return (
        <Flex p="0 2rem" direction="column" justify="center" borderRadius="5px" w="100%" h="20" p="0 1rem" bgGradient="linear(to-r, green.200, blue.500)">
            <Flex justify="center" align="center" >
                <Circle size="55px" fontSize="1.8rem">
                    {props.icon}
                </Circle>
                <Spacer/>
                <Heading as="h3" size="lg" textAlign="left" w="70%">{props.action}</Heading>
            </Flex>
        </Flex>
    )
}

export default StepList;