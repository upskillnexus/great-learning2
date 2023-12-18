import { Box, Button, Center, Flex, Grid, Heading, Image } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const Universities = () => {
  const data = useSelector((state) => state.university);

  return (
    <Box pt="50px" bg="gray.50" mt="3">
      <Flex flexDir="column" align={"center"}>
        <Heading size="md">In partnership with</Heading>
        <Heading size="lg">Worlds Top Universities</Heading>
      </Flex>

      <Grid border="1px solid non" gap="20px" gridTemplateColumns={{ base: "repeat(2,1fr)", md: "repeat(3,1fr)", lg: "repeat(4,1fr)" }}>
        {data.map((ele) => (
          <Box border="1px solid none" key={ele.id}>
            <Center>
              <Image width={"150px"} objectFit={"cover"} src={ele.img} />
            </Center>
          </Box>
        ))}
      </Grid>
      <Flex p={5} justify={"center"}>
        <Button size="md">View More Universities</Button>
      </Flex>
    </Box>
  );
};

export default Universities;
