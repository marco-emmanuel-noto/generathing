import * as React from "react"
import {
    useDisclosure,
    Button,
    Modal,
    ModalHeader,
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Image,
    Flex
} from "@chakra-ui/react"
import {Fragment} from "react"
import {StaticImage} from "gatsby-plugin-image"

const HorizontalScrollModal = (props) => {
    const {isOpen, onOpen, onClose} = useDisclosure()

    return (
        <Fragment>

            {props.image === "sarcophagus" && <StaticImage
                src={"../images/sarc.png"}
                alt="An image generated with our tool"
                placeholder="blurred"
                onClick={onOpen}/>}

            {props.image === "bunny" && <StaticImage
                src="../images/bunn.png"
                alt="An image generated with our tool"
                placeholder="blurred"
                onClick={onOpen}/>}

            {props.image === "kundera" && <StaticImage
                src="../images/kund.png"
                alt="An image generated with our tool"
                placeholder="blurred"
                onClick={onOpen}/>}

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay/>
                <ModalContent mt="32">
                    <ModalHeader>{props.title}</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody>
                        <Flex
                            justify="center"
                            align="center"
                            overflow="hidden"
                            borderRadius="10px"
                            p="4">

                            {props.image === "sarcophagus" && <StaticImage
                                src={"../images/sarcophagus.png"}
                                alt="An image generated with our tool"
                                placeholder="blurred"
                                onClick={onOpen}/>}

                            {props.image === "bunny" && <StaticImage
                                src="../images/bunny.png"
                                alt="An image generated with our tool"
                                placeholder="blurred"/>}

                            {props.image === "kundera" && <StaticImage
                                src="../images/kundera.png"
                                alt="An image generated with our tool"
                                placeholder="blurred"/>}
                        </Flex>

                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Fragment>
    )
}

export default HorizontalScrollModal