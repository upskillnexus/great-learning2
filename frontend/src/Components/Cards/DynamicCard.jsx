import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { hoverStyle } from "../../style/button.style";

const DynamicCard = ({ onOpen, subTitle, button, title, text, borderRadius, bg }) => {
  return (
    <Flex justify={"center"}>
      <Flex justify={"center"} borderRadius={borderRadius} border="5px solid none" bg={bg} mt="00px" p="5" py="10" w="100%">
        <Flex flexDir={{ base: "column", md: "row" }} justify={"space-between"} align={"center"} w={{ base: "100%", md: "90%" }}>
          <Box color="#fff" flexDir="column" align="space-between" justify={"center"} w="auto" maxW={{ base: "100%", md: "80%" }}>
            <Text>{subTitle}</Text>
            <Heading fontWeight={"medium"} fontSize={{ base: "22px", md: "30px" }}>
              {title}
            </Heading>
            <Text>{text}</Text>
          </Box>
          {button && (
            <Button onClick={() => onOpen()} _hover={hoverStyle} p="7" w="auto" border="1px solid #fff" color="#fff" bg="#b9292f">
              {button}
            </Button>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DynamicCard;
