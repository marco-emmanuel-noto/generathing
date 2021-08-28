import React, {useState} from 'react';
import {useStaticQuery, graphql} from "gatsby"
import {FormiumForm, defaultComponents} from '@formium/react';
import {
    Box,
    Checkbox as ChakraCheckbox,
    CheckboxGroup,
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Button,
    VStack
} from "@chakra-ui/react"
import {formium} from '../lib/formium'

const OverloadForm = (props) => {
    
    

    const data = useStaticQuery(graphql `
    query FormQuery {
        formiumForm(slug: {eq: "subscribe-form"}) {
            id
            createAt
            name
            projectId
            schema
            slug
            updateAt
            version
        }
      } 
  `)

    function TextInput(props) {
        const {
            id,
            label,
            description,
            type,
            ...rest
        } = props

        // Email

        return (
            <FormControl id={id} mb="4">
                <FormLabel>{label}</FormLabel>
                <Input {...rest}/>
                <FormHelperText>{description}</FormHelperText>
            </FormControl>
        )

    }

    function Checkbox(props) {
        const {
            id,
            value,
            description,
            required,
            ...rest
        } = props
        return (
            <CheckboxGroup colorScheme="blue">
                <VStack align="flex-start">
                    <ChakraCheckbox isRequired={required} value={value} {...rest}>{value}</ChakraCheckbox>
                </VStack>
            </CheckboxGroup>
        )
    }

    function SubmitButton(props) {
        return (<Button mt="4" colorScheme="blue" type="submit" {...props}/>)
    }

    const myComponents = {
        ...defaultComponents,
        TextInput,
        Checkbox,
        SubmitButton
    }

    const [success,
        setSuccess] = React.useState(false);
    if (success) {
        return <div>Thank you! Your response has been recorded.</div>;
    }

    async function handleSubmit(values) {
        const completeValues = {
            ...values,
            sentence: props.sentence
        }

        await formium.submitForm('subscribe-form', completeValues);
        setSuccess(true);
    }

    return (
        <Box>

            <FormiumForm
                data={data.formiumForm}
                components={myComponents}
                onSubmit={handleSubmit}/>
        </Box>
    )
}

export default OverloadForm