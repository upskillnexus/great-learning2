import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Cancel2 = () => {
  return (
    <Flex flexDirection={"column"}>
      <Text fontSize={{base: "22px", md: '30px'}}>
        CANCELLATION AND REFUNDS: SELF PACED LEARNING
      </Text>
      <Box>
        <Text
        >
          No refund will be done for self-paced courses.
        </Text>
        <Text
        >
          No refund will be provided and access will be revoked. If anytime
          found course is been shared with others / multiple users or intention
          of course purchase is to copy the material / content and account will
          be blocked at the same time.
        </Text>
      </Box>
    </Flex>
  );
};

export default Cancel2;
