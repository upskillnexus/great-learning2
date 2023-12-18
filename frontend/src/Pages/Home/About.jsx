import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function About() {
  return (
    <Box
      bg="#fff"
      py={10}
      textAlign="center"
      mt={5}
      px={{ base: 5, md: 0 }}
      // bg='red'
    >
      <Box maxW="800px" mx="auto">
        <Heading fontSize="2xl" color="gray.800" mb={4}>
          About Us
        </Heading>

        <Text fontSize="lg" color="gray.600" lineHeight="1.6" textAlign={"justify"}>
          As the tech industry continues to change and revolutionize, the path to a successful career in Information Technology should also change. The IT training industry is set to be revolutionized by Cyber Wisdom as we provide people with the most practical and interactive IT training programs and make the hardest and the most challenging technical concepts easiest to learn.
        </Text>

        <Link to="/aboutus">
          <Button bg="#ff9b02" color="white" mt={4} size="lg" _hover={{ bg: "blue.600" }}>
            Learn More
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

export default About;
