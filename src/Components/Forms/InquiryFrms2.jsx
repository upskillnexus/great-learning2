import React from "react";
import { Box, Button, Flex, FormControl, FormLabel, Heading, Image, Input, Select, Text, Textarea } from "@chakra-ui/react";

const InquiryFrms2 = () => {
  return (
    <>
      <Box mb={{ base: "5", lg: "0" }} w={{ base: "full", lg: "40%" }}>
        <Flex gap="2" py={6} h="full" flexDir={"column"} justify={"space-around"} border="1px solid #cccc" p="5" rounded={"lg"}>
          <Box textAlign={"center"} textTransform={"uppercase"}>
            <Heading color="#b9292f" fontSize={"28px"} as="h4">
              Talk To An Expert
            </Heading>
            <Text fontSize={"12px"} fontWeight={"medium"}>
              Book Your Free Counselling Now!
            </Text>
          </Box>
          <Box>
            <FormControl>
              <FormLabel>Full Name</FormLabel>
              <Input placeholder="Name" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input placeholder="abc@gmail.com" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Mobile No:</FormLabel>
              <Input placeholder="Mobile No." />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Course</FormLabel>
              <Select placeholder="--Select Course--">
                <option>Digital Marketing Science</option>
                <option>Data Science</option>
                <option>Cyber Security</option>
              </Select>
            </FormControl>
          </Box>
          <Flex justify={"center"}>
            <Button w="full" colorScheme="red" bg="#b9292f" mr={3}>
              Submit Your Request
            </Button>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default InquiryFrms2;
