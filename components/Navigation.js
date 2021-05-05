import { useContext } from 'react'
import { Box, Flex, Spacer } from "@chakra-ui/react"
import { ThemeContext } from '../Context/ThemeContext';

const Navigation = () => {
    const { lightTheme, darkTheme, isDarkMode } = useContext(ThemeContext)
    return (
        <Box bg={isDarkMode ? lightTheme.colors.backgroundColor : darkTheme.colors.backgroundColor} w="100%" p={4} color={isDarkMode ? lightTheme.colors.textColor : darkTheme.colors.textColor} >
            <Flex>
                <Box w="100px" h="10">Link 1</Box>
                <Spacer />
                <Box w="100px" h="10">Link 2</Box>
                <Spacer />
                <Box w="100px" h="10">Link 3</Box>
            </Flex>
        </Box>
    )
}

export default Navigation;