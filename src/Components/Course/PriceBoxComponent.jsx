import React from "react";
import { Box, Flex, Heading, Text, Input, Button, UnorderedList, ListItem } from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa6";

const PriceBoxComponent = ({ data }) => {
  return (
    <Box width="100%" minH="550px" bg="#fff" display={{ base: "block", md: "flex" }} rounded={"md"}>
      {/* Left Part */}
      <Box width={{ base: "100%", md: "40%" }} py="50px" p="8" bg="#e95454" color="#fff" roundedLeft={{ base: "none", md: "md" }}>
        <Heading size={{ base: "20px", md: "lg" }} mt={{ base: "5", md: "10" }} fontWeight={"medium"}>
          {"What's Included in the Price"}
        </Heading>
        <Heading as="h3" fontWeight={"medium"} mt={{ base: "5", md: "10" }} fontSize="xl" mb={4}>
          Features/Benefits
        </Heading>

        <Box>
          {data?.map((ele, i) => (
            <Flex key={i} mb={{ base: "10px", md: "20px" }} gap={{ base: "2", md: "4" }} align={"center"}>
              <FaCheck />
              <Text fontSize={{ base: "18px", md: "20px" }}>{ele?.text}</Text>
            </Flex>
          ))}
        </Box>
      </Box>

      {/* Right Part */}
      <Flex flexDir={"column"} justify={"center"} width={{ base: "100%", md: "60%" }} p={4}>
        <Heading size={{ base: "20px", md: "lg" }} fontWeight={"medium"} mb={4}>
          Empowering learners of tomorrow
        </Heading>
        <Text>Over 2,300 students have completed this course and started working at their dream job, what's stopping you?</Text>

        {/* Input and Button */}
        <Flex mt={4} gap="5" flexDir={{ base: "column", md: "row" }}>
          <Input width={{ base: "100%", md: "70%" }} placeholder="Mobile Number" mr={2} />
          <Button bg="#e95454" color="white">
            START APPLICATION
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default PriceBoxComponent;
