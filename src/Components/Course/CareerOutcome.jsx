import { Box, Button, Center, Flex, Heading, Image, Text } from "@chakra-ui/react";

const CareerOutcomesComponent = ({ cardData, title, subTitle, button, color }) => {
  return (
    <Box width="100%" py="10">
      {/* Heading and Paragraph */}
      <Flex flexDir={{ base: "column", md: "row" }} justify={"space-between"}>
        <Box>
          <Heading fontSize={{ base: "20px", md: "2xl" }} fontWeight="medium" mb="4" color={color}>
            {title}
          </Heading>
          <Text fontSize="lg" mb="4" color={color}>
            {subTitle}
          </Text>
        </Box>
        {button && (
          <Button bg="#e95454" m={{ base: "20px 0", md: "0" }} color="white" size={{ base: "sm", md: "lg" }} _hover={{ bg: "#e95454e8", color: "white" }}>
            {button}
          </Button>
        )}
      </Flex>

      {/* Boxes */}
      <Flex gap={{ base: "2", md: "5" }} alignItems="start" flexWrap="wrap" mb="8">
        {cardData.map((ele, i) => (
          <Box p="5" shadow={"0 0 3px #cccc"} bg="white" w={{ base: "100%", md: "220px" }} rounded={"md"} key={i} m="2" borderWidth="1" textAlign="center">
            <Flex gap="10px" alignItems={"center"}>
              <Image objectFit={"contain"} width="20px" src={ele.logoSrc} alt="Logo 1" />
              <Text fontSize="2xl" fontWeight="bold">
                {ele.percentage}
              </Text>
            </Flex>
            <Text>{ele.title}</Text>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default CareerOutcomesComponent;
