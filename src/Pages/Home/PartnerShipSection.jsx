import { Box, Flex, Grid, Image, Heading } from "@chakra-ui/react";

function PartnershipsSection() {
  // Dummy data for logos (replace with actual logos or URLs)
  const logos = ["https://via.placeholder.com/100x100", "https://via.placeholder.com/100x100", "https://via.placeholder.com/100x100", "https://via.placeholder.com/100x100", "https://via.placeholder.com/100x100", "https://via.placeholder.com/100x100"];

  return (
    <Box bg="#fff" py={10} mt={5}>
      <Flex justify="center" direction="column" alignItems="center">
        <Heading as="h2" size="xl" mb={6} textAlign={"center"}>
          Our Placement Partners
        </Heading>
        <Box maxW="1200px">
          <Grid
            templateColumns={{
              base: "repeat(2, 1fr)", // On smaller screens, two columns
              md: "repeat(4, 1fr)", // On medium screens, four columns
              lg: "repeat(6, 1fr)", // On large screens, six columns
            }}
            gap={4}
            justifyContent="center"
            alignItems="center"
            mx="auto"
            p={4}
          >
            {logos.map((logo, index) => (
              <Image
                key={index}
                src={logo}
                alt={`Partner Logo ${index}`}
                maxH="100px" // Set the maximum height for the logos
                mx="auto" // Center the logos horizontally
              />
            ))}
          </Grid>
        </Box>
      </Flex>
    </Box>
  );
}

export default PartnershipsSection;
