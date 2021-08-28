import React, {useEffect} from 'react'
import {
    FormControl,
    FormLabel,
    FormHelperText,
    Textarea,
    Button,
    Box
} from "@chakra-ui/react"
import {navigate} from "gatsby"

const SentenceForm = () => {
    let [value,
        setValue] = React.useState("")

    let [submitting,
        setSubmitting] = React.useState(false)

    let handleInputChange = (e) => {
        let inputValue = e.target.value
        setValue(inputValue)
    }

    const delayedNavigation = () => {
        setTimeout(() => {
            navigate("/overload/", 
            {
                state: {value}
              }
            
            );
        }, 3000);
    }

    const submitHandler = () => {
        setSubmitting(true)
        delayedNavigation()
    }

    return (
        <Box p="0 4">
            <FormControl id="text">
                <FormLabel>Magic sentence</FormLabel>
                <Textarea
                    value={value}
                    onChange={handleInputChange}
                    placeholder="Here goes your edgy sentence"
                    size="sm"/>
                <FormHelperText>Short sentences will give a better results</FormHelperText>
            </FormControl>
            <Button
                mt={4}
                colorScheme="blue"
                type="submit"
                onClick={submitHandler}
                isLoading={submitting}
                loadingText="Submitting"
                isDisabled={!value}>
                Submit
            </Button>

        </Box>

    )

}

export default SentenceForm;
