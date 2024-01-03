import React from "react";

import { Box, Heading, Text, Button, Flex, Image } from "@chakra-ui/react";
import { FaPlay } from "react-icons/fa6";

const Reason_to_Join = () => {
  return (
    <>
     

      {/* Box 2 */}
      {/* Box with Image */}
      <Box p={4} mb={{ base: 4, md: 0 }}>
        <Heading as="h2" size="md" mb={4} bg="#b9292f" color="#fff" p="5" textAlign="center">
          Program Course Fee
        </Heading>

        {/* Box with Text Content */}
        <Flex gap="4">
          {/*  */}
          <Flex w="80%" p={4} shadow={"sm"} rounded={"sm"} borderWidth={"1"} border={"1px solid rgba(0,0,0,0.2)"} bg="white" gap="3">
            <Box h="full" w="30%">
              <Image src="https://didm.in/assets/upload/images/Digital%20Marketing%20Science%20Fees%20by%20DIDM.jpg" alt="Digital Marketing Science Fees by UpskillNexus" style={{ width: "100%", height: "auto" }} />
            </Box>
            <Box>
              <Text fontSize="md" mb={4}>
                Get in Touch with Our Team to Get more detail about Admission formalities and Fees!
              </Text>
              <Heading fontSize="lg" mb={4}>
                Rs. 1,00,000/- + 18,000/- (18% GST)
              </Heading>
              <Heading fontSize="lg" mb={4}>
                Total Rs 1,18,000/-
              </Heading>
              <Button colorScheme="red" bg="#b9292f">
                Enroll Now
              </Button>
            </Box>
          </Flex>
          {/*  */}
          <Flex flexDir={"column"} w="20%" p={4} shadow="sm" rounded="sm" borderWidth="1" border="1px solid rgba(0,0,0,0.2)" bg="white" gap="3" position="relative">
            <Box w="ful" position={"relative"}>
              <Image src="https://didm.in/assets/upload/images/Digital%20Marketing%20Science%20Fees%20by%20DIDM.jpg" alt="Digital Marketing Science Fees by UpskillNexus" style={{ width: "100%", height: "auto" }} />
              <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">
                <Button colorScheme="red" bg="#b9292f">
                  <FaPlay />
                </Button>
              </Box>
            </Box>
            <Heading size={"sm"}>150+ Reason to Join UpskillNexus</Heading>
          </Flex>
          {/*  */}
        </Flex>
      </Box>
    </>
  );
};

export default Reason_to_Join;
