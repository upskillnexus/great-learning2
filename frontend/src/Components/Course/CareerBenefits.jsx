import React from "react";

import { Box, Heading, Text, Button, Grid, Flex } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

const CareerBenefits = ({ title, data }) => {
  return (
    <>
      <Box p={6}>
        <Box mb="9">
          {title && (
            <Heading color="#b9292f" as="h2" size="lg" mb={4} textAlign={"center"}>
              {title}
            </Heading>
          )}
        </Box>

        <Grid gridTemplateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)" }} gap="0">
          {data.map((ele, i) => (
            <Box w={{ base: "100%", md: "full" }} p="3" rounded={"lg"}>
              {/* <Text fontSize="md" mb={4}></Text> */}
              <Flex align={"center"} gap="2" as="strong" color="#b9292f">
                <Text>
                  <FaCheckCircle />
                </Text>
                <Text>{ele.point}</Text>
              </Flex>
              <Text>{ele.description}</Text>
            </Box>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default CareerBenefits;
