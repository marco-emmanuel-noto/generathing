import * as React from "react"
import {Button, useColorMode} from "@chakra-ui/react"
import {MoonIcon, SunIcon} from '@chakra-ui/icons'

const ThemeToggle = () => {
    const {colorMode, toggleColorMode} = useColorMode()
    return (
        <header>
            <Button onClick={toggleColorMode} colorScheme="blue" variant="ghost" mr="1rem">
                {colorMode === "light"
                    ? <MoonIcon />
                    : <SunIcon />}
            </Button>
        </header>
    )
}

export default ThemeToggle