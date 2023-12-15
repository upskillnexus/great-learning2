import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { hoverStyle } from "../../style/button.style";

const CardWithImg = ({ title, text, button, img }) => {
  return (
    <>
      <Flex minH={"60vh"} bg="#fff" p="2" py="8" flexDir={{ base: "column", md: "row" }} gap={{ base: "10px", md: "0" }}>
        <Flex flexDir={"column"} align={{ base: "center", md: "start" }} justify={"center"} p={{ base: "0 10px", md: "0 30px" }} maxW={{ base: "100%", md: "50%" }}>
          <Heading fontSize={{ base: "20px", md: "30px" }}>{title}</Heading>
          <Text textAlign={{ base: "justify", md: "start" }}>{text}</Text>
          <Button _hover={{ hoverStyle }} bg="#b9292f" color="#fff">
            {button}
          </Button>
        </Flex>
        <Box height={"100%"} width={{ base: "100%", md: "50%" }} bg="red">
          <Image src={img} height="100%" width={"100%"} />
        </Box>
      </Flex>
    </>
  );
};

export default CardWithImg;

{
  /* <Flex flexDir={"column"} align={{ base: "center", md: "start" }} justify={"center"} p="0 30px" maxW={{ base: "100%", md: "50%" }}>
          <Heading>Meet Our Industry Experts</Heading>
          <Text textAlign={{ base: "justify", md: "start" }}>Start your online learning journey at Great Learning Academy for free with our short-term basic courses across various in-demand domains.</Text>
          <Button _hover={{ hoverStyle }} bg="#b9292f" color="#fff">
            Free Webinar
          </Button>
        </Flex> */
}
