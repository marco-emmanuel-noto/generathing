import React, {Fragment} from 'react';
import './HorizontalScroll.css';
import {Flex, VStack, Text, useDisclosure} from "@chakra-ui/react"
import HorizontalScrollModal from "./HorizontalScrollModal"

const HorizontalScroll = (props) => {

    const images = {
        sarcophagus: "A Sarcophagus in Outer Space",
        kundera: "The Unbearable Lightness of Being",
        bunny: "A Bunny Enters the 4th Dimension"
    }

    return (
        <Fragment>
            <Flex direction="row" justify="center" align="center" width="100%" h="300px">
                <div className={`Cards__container`}>
                    {Object
                        .keys(images)
                        .map((image) => {
                            return (
                                <Flex direction="column" w="250px">
                                    <VStack spacing="10px">
                                        <HorizontalScrollModal image={image} title={images[image]}/>
                                        <Text fontSize="xs">{images[image]}</Text>
                                    </VStack>
                                </Flex>
                            )
                        })}

                </div>
            </Flex>
        </Fragment>
    )
}

export default HorizontalScroll;