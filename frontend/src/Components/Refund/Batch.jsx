import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Batch = () => {
  return (
    <Flex flexDirection={"column"}>
      <Text fontSize={{base: "22px", md: '30px'}}>BATCH DEFERRAL POLICY</Text>
      <Box>
        <Text
        >
          Due to any reason you want to defer the batch or restart the classes
          in a new batch then you need to send the batch defer request on our
          email and only 1 time batch defer is allowed without any additional
          cost. Learner can request for batch deferral to any of the cohorts
          starting in the next 3-6 months from the start date of the initial
          batch in which the student was originally enrolled for. Batch deferral
          requests are accepted only once but you should not have completed more
          than 20% of the program. If you want to defer the batch 2nd time then
          you need to pay batch defer fees which is equal to 10% of the total
          course fees paid for the program + Taxes.
        </Text>
        <Text
        >
          No refund will be provided and access will be revoked. If anytime
          found course is been shared with others / multiple users or intention
          of course purchase is to copy the material / content and account will
          be blocked at the same time.
        </Text>
      </Box>

      <Box gap={4}>
        <Text>
          <p style={{color : "red"}}>
            Please Note —{" "}
          </p>
          Every dispute, difference, or question which may at any time arise
          between the parties hereto or any person claiming under them, touching
          or arising out of or in respect of this agreement or the subject
          matter thereof shall be referred to sole Arbitrator by the first party
          , the award passed by the arbitrator shall be final and binding on the
          parties hereto.
        </Text>
      </Box>
    </Flex>
  );
};

export default Batch;
