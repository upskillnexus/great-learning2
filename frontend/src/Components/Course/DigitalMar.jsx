import { Box, Heading, Text, Flex, Icon, Grid } from "@chakra-ui/react";

const DigitalMarketingHighlights = ({ title, subTitle, data }) => {
  return (
    <Box p="4">
      <Box textAlign={"center"}>
        <Heading color={"#b52828"} fontSize="30px" mb="4" textAlign={"center"}>
          {title}
        </Heading>
        <Text>{subTitle}</Text>
      </Box>
      <Grid width={"100%"} templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={{ base: "4", md: "0 50px" }}>
        {data.map((highlight, index) => (
          <Box key={index} m="2" display="flex" alignItems="center">
            <Box as="span" fontSize="18px" fontWeight="bold" color="green.500" mr="2">
              {highlight.icon}
            </Box>
            <Box>
              {highlight.heading && <Heading fontSize="18px">{highlight?.heading}</Heading>}
              {highlight?.text && <Text>{highlight?.text}</Text>}
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default DigitalMarketingHighlights;
