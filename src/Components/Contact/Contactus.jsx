import { Box, Button, Flex, FormControl, FormLabel, Heading, Image, Input, Select, Text, Textarea } from "@chakra-ui/react";
import React from "react";
import AboutBanner from "../About/Banner";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const ContactusComp = () => {
  const data = [
    {
      heading: "Head Office :",
      address: "A-11, 2nd floor, Near Balaji mandir, Near Rajouri Metro Gate No -5, Rajori Garden, New Delhi-110027",
      phone: "+919990952299",
      email: "info@upskillnexus.com",
    },
    {
      heading: "Corporate Office",
      address: "150, 1st floor, Kapil Vihar, Pitampura, North Delhi, Opp Metro Pillar No-353 & Gulab Sweets, New Delhi - 110034",
      phone: "+919990952299",
      email: "info@upskillnexus.com",
    },
  ];

  return (
    <>
      <Flex flexDir={"column"} align={"center"} minH={"100vh"} bg="#fff" mt={{ base: "8", lg: "0" }} p={{ base: 0, lg: "8" }}>
        <Heading color="#b9292f" textAlign={"center"} fontSize={{ base: "28px", lg: "30px" }}>
          Make Your Creer With Upskills Nexus
        </Heading>
        <Flex flexDir={{ base: "column", lg: "row" }} border="2px solid none" mt={{ base: 0, lg: "8" }} gap="3" justify={"space-between"} bg="white" w={{ base: "95%", lg: "80%" }} rounded={"lg"}>
          <Flex flexDir={"column"} w={{ base: "full", lg: "45%" }} gap={{ base: 0, lg: "3" }} p="2">
            {data.map((ele, i) => (
              <Box h="auto" border="1px solid none" rounded={"md"} p={{ base: 1, lg: "4" }}>
                <Heading color="#b9292f" fontSize={"25px"}>
                  {ele?.heading}
                </Heading>
                <Flex gap="3" align="center">
                  <Text>
                    <FaLocationDot color="#b9292f" />
                  </Text>
                  <Text>{ele?.address}</Text>
                </Flex>

                {/*  */}
                <Flex gap="3" align="center">
                  <Text>
                    <FaPhone color="#b9292f" />
                  </Text>
                  <Text>{ele?.phone}</Text>
                </Flex>
                <Flex gap="3" align="center">
                  <Text>
                    <MdEmail color="#b9292f" />
                  </Text>
                  <Text>{ele?.email}</Text>
                </Flex>
              </Box>
            ))}
          </Flex>

          <Box mb={{ base: "5", lg: "0" }} w={{ base: "full", lg: "40%" }}>
            {/*  */}
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
        </Flex>
      </Flex>
    </>
  );
};

export default ContactusComp;
