import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import TermHeading from "../../Components/Terms/TermHeading";

const Term_condition = () => {
  const termsData = [
    {
      section: "Acceptance of Terms",
      content: ["By using our website and services, you acknowledge and agree to these Terms and our Privacy Policy. If you do not agree with any part of these Terms, please do not use our website or services."],
    },
    {
      section: "Use of Website and Services",
      content: [
        "<b>Eligibility: </b> You must be at least 18 years old to use our website and services. If you are under 18, you may only use our website and services with the consent of a parent or legal guardian.",
        "<b>User Account: </b> You may be required to create an account to access certain features of our services. You are responsible for maintaining the confidentiality of your account information.",
        "<b>User Content: </b> You are responsible for the content you post or submit through our services. Content must not violate any applicable laws or infringe upon the rights of others.", //
      ],
    },
    {
      section: "Payment and Fees",
      content: ["Course Fees: Some of our courses and services may require payment. Fees for courses are as described on the website. Payment is processed through trusted third-party payment providers.", "Refund Policy: Our refund policy, if applicable, is outlined on our website. Please review it carefully before making a payment."],
    },
    {
      section: "Intellectual Property",
      content: [
        "Content Ownership: Upskill Nexus retains all rights to the content, materials, and resources provided through our services, including but not limited to text, images, videos, and software.",
        "License: Upon payment of course fees, you are granted a limited, non-exclusive, and non-transferable license to access and use course materials for your personal, non-commercial use.", //
      ],
    },
    {
      section: "Limitation of Liability",
      content: ["Upskill Nexus makes every effort to provide accurate and reliable information and services. However, we are not responsible for any losses, damages, or consequences arising from the use or misuse of our website or services."],
    },
    {
      section: "Changes to Terms",
      content: ["We reserve the right to modify, amend, or update these Terms at our sole discretion. Any changes will be posted on our website, and your continued use of our services will constitute your acceptance of the revised Terms."],
    },
    {
      section: "Termination",
      content: ["Upskill Nexus may, at its discretion, terminate or suspend your account and access to our services at any time, with or without cause."],
    },
    {
      section: "Governing Law",
      content: ["These Terms are governed by the laws of our jurisdiction, and any disputes will be subject to the exclusive jurisdiction of the courts in that jurisdiction."],
    },
  ];

  return (
    <>
      <Flex p="5" gap={5} flexDir={"column"} align="center">
        <Heading textAlign={"center"}>Term & Conditions</Heading>

        <Text w={{ base: "full", md: "50%" }} textAlign={"center"}>
          Welcome to Upskill Nexus! These Terms and Conditions govern your use of our website, courses, and services. By accessing or using our website and services, you agree to be bound by these Terms.
        </Text>

        <Flex flexDir={"column"} gap="20px" p="5" w={{ base: "full", md: "90%" }} border={"2px solid #b9292f"} rounded={"md"}>
          {termsData.map((ele, i) => (
            <Box key={i} p="3" borderRadius={"10px"}>
              <Heading color="#b9292f" fontSize={"25px"}>
                {ele.section}
              </Heading>
              <Box>
                {ele.content.map((el, ind) => (
                  <Text key={ind} position="relative" left="10px" maxW="98%" dangerouslySetInnerHTML={{ __html: el }} />
                ))}
              </Box>
            </Box>
          ))}
        </Flex>
      </Flex>
      {/* hello */}
      {/* <Box>
        
      </Box> */}
    </>
  );
};

export default Term_condition;
