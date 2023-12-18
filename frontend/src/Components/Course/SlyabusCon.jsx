import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Button, Flex, Heading, Text } from "@chakra-ui/react";

const SyllabusComponent = () => {
  const digitalMarketingCourse = [
    {
      title: "Digital Marketing Landscape",
      duration: "3 Weeks",
      numberOfAssignment: "5",
      assignments: 1,
      topics: ["Fundamentals of Marketing: Journey from Traditional Marketing to Digital Marketing", "Digital Marketing Metrics and Channels", "Customer Centricity"],
    },
    {
      title: "Case Studies",
      duration: "4 Weeks",
      numberOfAssignment: "5",
      topics: ["1 case study on a leading multinational food products company.", "Build a digital branding strategy to help the brand establish itself as a new product in the market."],
    },
    {
      title: "Case Studies",
      duration: "4 Weeks",
      numberOfAssignment: "5",
      topics: ["1 case study on a leading multinational food products company.", "Build a digital branding strategy to help the brand establish itself as a new product in the market."],
    },
    {
      title: "Case Studies",
      duration: "4 Weeks",
      numberOfAssignment: "5",
      topics: ["1 case study on a leading multinational food products company.", "Build a digital branding strategy to help the brand establish itself as a new product in the market."],
    },
    {
      title: "Case Studies",
      duration: "4 Weeks",
      numberOfAssignment: "5",
      topics: ["1 case study on a leading multinational food products company.", "Build a digital branding strategy to help the brand establish itself as a new product in the market."],
    },
  ];

  return (
    <Flex flexDirection="column" alignItems="start" textAlign="center" py="8">
      {/* Heading and Button */}
      <Flex flexDirection="row" alignItems="center" mb="4">
        <Box flex="1" textAlign="left">
          <Heading fontSize="2xl" fontWeight="bold">
            {"MICA’s Digital Marketing Course Syllabus"}
          </Heading>
          <Text fontSize="lg" color="gray.500">
            Best-in-class digital marketing course content taught by leading faculty and industry leaders in the form of online marketing classes, recorded video lectures, case studies, and live projects. Now integrated with Generative AI modules.
          </Text>
        </Box>
        <Button bg="#b9292f" color="#fff" size="md">
          DOWNLOAD BROCHURE
        </Button>
      </Flex>

      {/* Row with Key Highlights */}
      <Flex w={{ base: "full", md: "80%" }} justifyContent="space-between" p="2" alignItems={{ base: "center", md: "start" }} gap="8" mb="8">
        <Box textAlign="center" mb={{ base: "4", md: "0" }}>
          <Heading fontSize="xl" fontWeight="bold">
            200+
          </Heading>
          <Text>Hours of Learning</Text>
        </Box>
        <Box textAlign="center" mb={{ base: "4", md: "0" }}>
          <Heading fontSize="xl" fontWeight="bold">
            15+
          </Heading>
          <Text>Case Studies and Live Projects</Text>
        </Box>
        <Box textAlign="center" mb={{ base: "4", md: "0" }}>
          <Heading fontSize="xl" fontWeight="bold">
            90+
          </Heading>
          <Text>Tools</Text>
        </Box>
        <Box textAlign="center" mb={{ base: "4", md: "0" }}>
          <Heading fontSize="xl" fontWeight="bold">
            5
          </Heading>
          <Text>Specialisations</Text>
        </Box>
        <Box textAlign="center">
          <Heading fontSize="xl" fontWeight="bold">
            2
          </Heading>
          <Text>Tracks</Text>
        </Box>
      </Flex>

      {/* Accordion with Dummy Data */}
      <Accordion allowMultiple width={{ base: "full", md: "85%" }}>
        {digitalMarketingCourse?.map((ele, i) => (
          <AccordionItem key={i} borderWidth={"1"} mb="3" borderRadius={"md"} bg="#fff" boxShadow={"md"} textAlign={"start"}>
            {/* <h2> */}
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Heading fontSize={"15px"}>{ele?.title}</Heading>
                <Flex gap="0 30px">
                  <Text>{ele?.duration}</Text>
                  <Text>Assignment {ele?.numberOfAssignment}</Text>
                </Flex>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            {/* </h2> */}
            {ele?.topics.map((el, ind) => (
              <AccordionPanel key={ind} pb={4} borderTop={"1px solid #cccc"}>
                {el}
              </AccordionPanel>
            ))}
          </AccordionItem>
        ))}
        {/* Add more accordion items as needed */}
      </Accordion>
    </Flex>
  );
};

export default SyllabusComponent;
