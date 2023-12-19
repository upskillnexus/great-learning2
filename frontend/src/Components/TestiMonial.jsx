import React from "react";
import { Box, Container, Heading, Text, Stack, Avatar, useColorModeValue } from "@chakra-ui/react";

export const TestimonialContent = ({ heading, text, avatar }) => (
  <Stack
    bg={useColorModeValue("white", "gray.800")}
    borderWidth={"2px"}
    borderColor={"#b9292e1a"}
    boxShadow={"lg"}
    p={{ base: 2, md: 8 }}
    rounded={"xl"}
    align={"center"}
    pos={"relative"}
    _after={{
      content: `""`,
      w: 0,
      h: 0,
      borderLeft: "solid transparent",
      borderLeftWidth: 16,
      borderRight: "solid transparent",
      borderRightWidth: 16,
      borderTop: "solid",
      borderTopWidth: 16,
      borderTopColor: useColorModeValue("#b9292f", "gray.800"),
      pos: "absolute",
      bottom: "-16px",
      left: "50%",
      transform: "translateX(-50%)",
      //   bg: "blue",
      //   boxShadow: "0 0 10px black",
    }}>
    <Heading as={"h3"} fontSize={"xl"}>
      {heading}
    </Heading>
    <Text textAlign={"center"} color={useColorModeValue("gray.600", "gray.400")} fontSize={"sm"}>
      {text}
    </Text>
    {/* <Stack align={"center"} direction={"column"}> */}
    {/* <Avatar src={avatar.src} mb={2} /> */}
    {/* <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{avatar.name}</Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>
          {avatar.title}
        </Text>
      </Stack> */}
    {/* </Stack> */}
  </Stack>
);
