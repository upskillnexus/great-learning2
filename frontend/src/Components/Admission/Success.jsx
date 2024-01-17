import React from 'react'
import { Box, Heading, Text, Button, Center, ChakraProvider } from '@chakra-ui/react';

const Success = () => {
  return (
    <Box p={5} maxW="md" mx="auto" mt={20}>
        <Center>
          <Box textAlign="center">
            <Heading mb={4} color="#b9292f">
              Admission Successful!
            </Heading>
            <Text fontSize="lg" color="gray.600">
              Congratulations! You have successfully completed the admission process.
            </Text>
            <Button
              mt={6}
              colorScheme="red"
              bg={'#b9292f'}
              onClick={() => {
                window.location.href = "/"
              }}
            >
              Go to Dashboard
            </Button>
          </Box>
        </Center>
      </Box>
  )
}

export default Success