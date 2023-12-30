import { Box, Flex, Heading, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";

const CareerSupport = () => {
  const careerSupportServices = [
    {
      id: 1,
      service: "Self-Assessment and goal-setting",
    },
    {
      id: 2,
      service: "Profile Building and Professional Branding",
    },
    {
      id: 3,
      service: "Resume and Cover Letter Review",
    },
    {
      id: 4,
      service: "Interview Preparation",
    },
    {
      id: 5,
      service: "Career Transition Support",
    },
  ];

  return (
    <>
      <Flex w="full" justify={"center"} align={"center"} minH={"80vh"}>
        <Box
          w={{ base: "full", md: "80%", lg: "70%" }}
          m="5"
          border="2px solid #b9292f"
          rounded={"md"}
          p={{ base: 5, md: "8" }}
        >
          {/*  */}
          <Box textAlign={"center"}>
            <Heading color="#b9292f">Career Support</Heading>
            <Text fontWeight={"medium"}>
              We provide career coaching and offer support services to help individuals manage and
              advance in their careers. These include:
            </Text>
          </Box>
          {/*  */}
          <UnorderedList>
            {careerSupportServices.map((ele, i) => (
              <Box key={i}>
                <ListItem m="1">{ele?.service}</ListItem>
                {ele?.arr &&
                  ele?.arr.map((el, ind) => (
                    <ListItem w="full" position={"relative"} left="40px" key={ind}>
                      {el}
                    </ListItem>
                  ))}
              </Box>
            ))}
          </UnorderedList>

          <Box>
            <Heading size="lg" color="#b9292f">
              100% Career Placement Support
            </Heading>
            <Text>
              Benefit from our extensive network and personalized guidance in landing your dream job
              or securing a well-deserved promotion.
            </Text>
            <Text>
              For our selected programs, we offer internship programs leading to placements in
              reputed organisations.
            </Text>
          </Box>

          <Box>
            <Heading size="lg" color="#b9292f">
              24/7 Career Support
            </Heading>
            <Text>
              No matter what stage of your career you are in, we are always available to help you
              with any issues pertaining to the training that you have taken from us.
            </Text>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default CareerSupport;
