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
    FormControl,
    FormLabel,
    Input,
    ModalFooter,
    Text,
    CheckboxGroup,
    Checkbox,
    VStack
} from "@chakra-ui/react"
import {Fragment} from "react"

const SubmitModal = () => {
    const {isOpen, onOpen, onClose} = useDisclosure()

    const initialRef = React.useRef()
    const finalRef = React.useRef()

    return (
        <Fragment>
            <Button colorScheme="blue" mt="1rem" onClick={onOpen}>Submit</Button>
            <Button mt="1rem" ml={4} ref={finalRef}>
                Close
            </Button>

            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
                isCentered
                colorScheme="blue">
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader>Geez, we have a small problem</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody pb={6}>
                        <Text fontSize="lg" mb="1rem">Our servers are on fire 🔥</Text>
                        <Text fontSize="md" mb=".5rem">If you leave us your email, we'll drop your
                            artwork once it's ready (~3 hours) 📨</Text>
                        <Text fontSize="md" mb=".5rem">We won't send anything else, unless you ask us to do so.</Text>
                        <Text fontSize="xs">More than a promise, this is a legal obligation 😊</Text>
                        <FormControl mt="1rem">
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" ref={initialRef} placeholder="Your email"/>
                        </FormControl>

                        <CheckboxGroup colorScheme="blue">
                            <VStack align="flex-start" mt="1rem">
                                <Checkbox value="terms and conditions" isRequired>I have read the terms and conditions and agree</Checkbox>
                                <Checkbox value="only artwork" isRequired>Send me my artwork</Checkbox>
                                <Checkbox value="newsletter">Subscribe to our newsletter and receive more cool stuff to make art and shit</Checkbox>
                            </VStack>
                        </CheckboxGroup>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" mr={3}>
                            Submit
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Fragment>
    )
}

export default SubmitModal