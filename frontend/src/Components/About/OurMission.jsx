import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import GetUpskillnexus from "../Text/GetUpskillnexus";

const OurMission = () => {
  return (
    <Box>
      <Text textAlign={"center"} fontSize={["24px", "27px", "30px", "33px"]} fontWeight={700} textColor={"red.600"}>
        Our Mission
      </Text>
      <Flex gap={["40px", "20px", "20px", "20px"]} flexDirection={{ base: "column", md: "row", lg: "row" }} justifyContent={"space-around"}>
        {/* one  */}
        <Flex mt={10} paddingX={{ base: "15px", sm: "15px", md: "10px", lg: "5px" }} flexDirection={"column"} w={["auto", "auto", "600px"]}>
          <Text fontSize={"18px"} textColor={"gray.500"} fontWeight={600}>
            Empowering Digitech Futures, Shaping Success
          </Text>
          <Text
            fontSize={["16px", "18px", "22px"]}
            textColor={"gray.600"}
            textAlign={"justify"}
            // fontWeight={600}
          >
            Our mission at <GetUpskillnexus text="UpskillNexus" /> is to be the beacon of transformation in the realm of digital technology and employability skills training. We are committed to cultivating a dynamic learning environment where individuals, regardless of their background or current
            career stage, can acquire the essential digital technological skills and employability skills, strategic insights, and unwavering confidence needed to not only secure employment but to thrive and excel in their chosen professional journeys.
          </Text>
          {/* <Button
          mt={5}
          rounded={"4"}
          bgColor={"red.500"}
          width={"fit-content"}
          colorScheme="teal"
          size="md"
          paddingY="15px"
          paddingX={20}
        >
          Sign Up for Free
        </Button> */}
        </Flex>
        {/* two  */}
        <Box
          height={["300px", "300px", "400px"]}
          borderRadius={"71% 29% 70% 30% / 53% 62% 38% 47%"}
          width={["300px", "300px", "400px"]}
          bgColor={"red"}
          backgroundImage="url('https://i.pinimg.com/564x/c7/71/92/c771926a82d18208ac80eebfef4de3be.jpg')"
          backgroundPosition="cover"
          // backgroundRepeat="no-repeat"
        ></Box>
      </Flex>
      <Box paddingX={{ base: "20px", sm: "60px", md: "70px", lg: "95px" }} mt={3} mb={20}>
        <Text
          fontSize={["16px", "18px", "22px"]}
          textColor={"gray.600"}
          textAlign={"justify"} //
          //   fontWeight={600}
        >
          Through practical, innovative and personalized training, we aspire to bridge the gap between education and employment, fostering a community of empowered individuals ready to make a lasting impact on the global workforce. At <GetUpskillnexus text="UpskillNexus" />, we believe that by
          investing in the personal growth and employability of individuals, we contribute to building a brighter, more resilient future for both our learners and the industries they serve.
        </Text>
      </Box>
    </Box>
  );
};

export default OurMission;
