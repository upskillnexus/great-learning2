import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import React from "react";

const AdmissionProcess = () => {
  const process = [
    {
      stepNumber: 1,
      stepName: "Fill in Application Form",
      description: "To apply, candidates need to fill out the application form.",
    },
    {
      stepNumber: 2,
      stepName: "Screening Of Candidates",
      description:
        "There will be a screening of candidates. Candidates will get the opportunity to participate in counselling sessions.",
    },
    {
      stepNumber: 3,
      stepName: "Diagnostic Assessment",
      description:
        "The candidates will undergo a diagnostic assessment and an interview. (Applies to some courses).",
    },
    {
      stepNumber: 4,
      stepName: "Confirmation Of Acceptance",
      description:
        "Once the candidates meet the requirements, they will get a confirmation of acceptance.",
    },
    {
      stepNumber: 5,
      stepName: "Documents & Fees Submission",
      description: "In order to enroll, candidates will need to submit their documents and fees.",
    },
    {
      stepNumber: 6,
      stepName: "Start Of Classes",
      description: "Classes will begin for the selected course as per the scheduled start date.",
    },
  ];
  return (
    <Flex justify={"center"} flexDir={"column"} minH={"80vh"} align={"center"}>
      <Box w={{ base: "full", lg: "80%" }} p={{ base: 5, md: 0 }} mb="2">
        <Text>
          We are excited to guide you through our admission process, where your journey begins to
          unfold new opportunities and possibilities. Our goal is to make the application process
          seamless and transparent, ensuring that you have all the information and support you need
          to embark on this exciting upskilling journey.
        </Text>
      </Box>
      <Grid
        w="80%"
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
          xl: "repeat(3, 1fr)",
        }}
        gap="3"
        textAlign={"center"}
      >
        {process.map((ele, i) => (
          <Box key={i} px="2" border="2px solid #b9292f" rounded={"md"}>
            <Heading fontSize={"50px"} textAlign={"center"}>
              {ele.stepNumber}
            </Heading>
            <Heading size="md" color="#b9292f">
              {" "}
              {ele.stepName}
            </Heading>
            <Text>{ele.description}</Text>
          </Box>
        ))}
      </Grid>
    </Flex>
  );
};

export default AdmissionProcess;
