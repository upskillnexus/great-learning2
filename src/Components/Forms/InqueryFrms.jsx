import React from "react";
import { Box, Flex, Heading, Text, Input, Button, UnorderedList, ListItem, Image, Grid, Select } from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa6";

const InqueryFrms = () => {
  const course = [
    {
      title: "Digital Marketing Science",
    },
    {
      title: "Data Science & Business Analytics",
    },
    {
      title: "Cyber Security",
    },
  ];
  return (
    <Box width="100%" minH="550px" bg="#fff" display={{ base: "block", md: "flex" }} rounded={"md"}>
      {/* Left Part */}
      <Box width={{ base: "100%", md: "60%" }} py="0" bg="#e95454" color="#fff" roundedLeft={{ base: "none", md: "md" }}>
        <Image h="full" w="full" objectFit={"cover"} src="/inquery/form-image2.png" />
      </Box>

      {/* Right Part */}
      <Flex flexDir={"column"} justify={"center"} width={{ base: "100%", md: "60%" }} p={4}>
        <Heading size={{ base: "20px", md: "lg" }} fontWeight={"medium"} mb={4}>
          Confused? Why not let us help!
        </Heading>
        <Text>Get in touch with our Friendly Team. Speak to us for Batches, fee and curriculum.</Text>

        {/* Input and Button */}
        <Box mt={4} gap="5">
          {/* <Box w="50%"> */}
          <Grid gridTemplateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)" }} gap="3">
            <Box>
              <Text mb="8px">Your Name</Text>
              <Input placeholder="abcd" size="md" />
            </Box>

            <Box>
              <Text mb="8px">Phone Number</Text>
              <Input placeholder="123xxxx" size="md" />
            </Box>
            <Box>
              <Text mb="8px">Email</Text>
              <Input placeholder="xyz@gmail.com" size="md" />
            </Box>
            <Box>
              <Text mb="8px">Select Course</Text>
              <Select placeholder="Select Course" size="md">
                {course?.map((ele, i) => (
                  <option key={i} value={ele.title}>
                    {ele.title}
                  </option>
                ))}
              </Select>
            </Box>
          </Grid>
          {/* </Box> */}
          <Button bg="#e95454" _hover={{ bg: "#ed7f7f" }} color="white" my="8">
            Talk To Advisor
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default InqueryFrms;
