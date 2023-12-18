"use client";

import { Heading, Avatar, Box, Center, Text, Stack, Button, Link, Badge, useColorModeValue } from "@chakra-ui/react";

export default function SocialProfileSimple({ name, text, description, stats, button, imageSrc }) {
  return (
    // <Center py={3}>
    <Box fontFamily={"sans-serif"} w={"full"} bg={useColorModeValue("white", "gray.900")} boxShadow={"md"} borderWidth="2px" rounded={"lg"} p={6} textAlign={"center"}>
      <Avatar size={"xl"} src={imageSrc} mb={4} pos={"relative"} />
      <Heading fontSize={"2xl"} fontFamily={"body"}>
        {name}
      </Heading>
      <Text fontWeight={600} color={"gray.500"} mb={4}>
        {text}
      </Text>
      <Text textAlign={"justify"} color={useColorModeValue("gray.700", "gray.400")} px={3}>
        {description.substring(0, 120)}...
      </Text>

      <Stack align={"start"} justify={"start"} gap="6" direction={"row"} mt={6}>
        {stats.map((ele, ind) => (
          <Badge px={2} py={1} display="flex" fontSize={"14px"} gap="2" bg="none" fontWeight={"400"}>
            <Text>{ele.icon}</Text>
            <Text>{ele.count}</Text>
          </Badge>
        ))}
      </Stack>

      <Stack mt={8} direction={"row"}>
        <Button
          flex={1}
          fontSize={"sm"}
          rounded={"full"}
          // border="2px solid #b9292f"
          bg={"#b9292f"}
          color={"#fff"}
          _hover={{
            bg: "#b9292f",
            color: "white",
          }}
          _focus={{
            bg: "#b9292e95",
          }}
        >
          View Profile
        </Button>
      </Stack>
    </Box>
    // </Center>
  );
}
