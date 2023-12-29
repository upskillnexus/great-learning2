import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const AboutCard = ({ heading, text, img, imgSide }) => {
  return (
    <Flex
      p={{ base: 0, lg: 4 }}
      border="4px solid none"
      w="full"
      direction={{
        base: imgSide == "right" ? "column-reverse" : "column",
        lg: imgSide == "right" ? "row" : "row-reverse",
      }}
      align="center"
      justify="center"
      rounded={"none"}
      bg="#fff"
    >
      <Box
        maxW={{ base: "100%", lg: "60%" }}
        textAlign={"justify"}
        color="#000"
        p={{ base: 3, md: "5" }}
        h="full"
      >
        <Heading color="#b9292f" textAlign={"start"} fontSize="3xl" fontWeight="bold" mb={4}>
          {heading}
        </Heading>
        {text?.map((ele, i) => (
          <Text key={i}>{ele?.text}</Text>
        ))}
      </Box>

      <Box maxW={{ base: "100%", lg: "40%" }} mb={{ base: 4, lg: 0 }}>
        <Image src={img} alt="Description" height="auto" />
      </Box>
    </Flex>
  );
};

export default AboutCard;
