import { Box, Heading, Text, Grid, Flex, FormControl, FormLabel, Select, Button, Input } from "@chakra-ui/react";
import { FaRegCheckCircle } from "react-icons/fa";
import InquiryFrms2 from "../Forms/InquiryFrms2";

const CourseInformation = ({ title, subTitle, data, keyH }) => {
  return (
    <Flex flexDir={"column"} align="center" p="4" mt="0">
      <Box textAlign={"center"} w={{ base: "full", md: "80%", lg: "60%" }}>
        <Heading w="auto" fontSize="30px" color="#b9292f">
          {title}
        </Heading>
        <Text>{subTitle}</Text>
      </Box>
      {/*  */}
      <Flex flexDir={{ base: "column", lg: "row" }} justify={"space-between"} w={{ base: "full", md: "80%" }} mt="4" p={{ base: 0, md: "6" }} rounded={"md"} gap={{ base: "4", md: "0 50px" }}>
        <Box w={{ base: "full", lg: "50%" }}>
          <Heading bg="#b52828" p="3" color="white" rounded={"lg"} mb="2" fontSize={"22px"}>
            {keyH}
          </Heading>
          <Grid
            gridTemplateColumns={{
              base: "repeat(1, 1fr)", // On smaller screens, one column
              md: "repeat(1, 1fr)", // On medium screens, two columns
              lg: "repeat(1, 1fr)", // On large screens, three columns
              xl: "repeat(1, 1fr)", // On extra-large screens, four columns
            }}
            mt="5"
          >
            {data?.map((info, index) => (
              <Flex align={"start"} gap="2" px="2" rounded={"md"} key={index} m="0" textAlign="left">
                {/* <Text fontSize={"18px"} mt='2' color="#b52828">
                  <FaRegCheckCircle />
                </Text> */}
                <Text fontWeight={"medium"} fontSize="15px">
                  {info.content}
                </Text>
              </Flex>
            ))}
          </Grid>
        </Box>
        {/* Form */}
        <Box w={{base: 'full', lg:'50%'}}>
          <InquiryFrms2 />
        </Box>
      </Flex>
    </Flex>
  );
};

export default CourseInformation;
