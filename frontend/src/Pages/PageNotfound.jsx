// NotFound.js
import React from 'react';
import { Flex, Heading, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      h="80vh"
      bg="gray.100"
    >
      <Heading fontSize="6xl" mb={4}>
        404 - Not Found
      </Heading>
      <Text fontSize="xl" mb={8}>
        Oops! Looks like the page you're trying to visit doesn't exist.
      </Text>
      <Button as={Link} to="/" colorScheme="red" background={'#b9292f'} size="lg">
        Go Home
      </Button>
    </Flex>
  );
};

export default NotFound;
