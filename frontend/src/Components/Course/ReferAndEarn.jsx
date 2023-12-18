import { Box, Heading, Text, Button, Image, Flex } from "@chakra-ui/react";

const ReferAndEarnComponent = () => {
  return (
    <Box>
      {/* Image */}
      <Flex align={"center"} gap="20px" flexDir={{ base: "column", md: "row" }}>
        <Box>
          <Image src="https://www.upgrad.com/_next/image/?url=https%3A%2F%2Fik.imagekit.io%2Fupgrad1%2Fmarketing-platform-assets%2Fnew-images%252Frefer-and-earn%2Frefer-and-earn-section1.png&w=256&q=75" alt="Refer and Earn" />
        </Box>

        {/* Heading and Text */}
        <Box mt={4} textAlign={"start"}>
          <Heading fontWeight={"medium"} as="h2" fontSize="2xl" mb={2}>
            Refer someone and Earn upto INR 50,000 Cashback/Vouchers, on every successful enrollment
          </Heading>
          <Text>Your friend also gets an instant scholarship!</Text>
        </Box>

        {/* Button */}
        <Button p="8" mt={4} bg="#e95454" color="white">
          START REFERRING
        </Button>
      </Flex>
    </Box>
  );
};

export default ReferAndEarnComponent;
