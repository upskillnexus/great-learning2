import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import GetUpskillnexus from "../../Components/Text/GetUpskillnexus";

const pData = [
  {
    h: "",
    p: [
      {
        content: "All personal information in our possession or control must be kept confidential.",
      },
      {
        content:
          "In most cases, Upskill Nexus will explain why it is collecting personal information at the time of collection.",
      },
      {
        content:
          "Except where permitted or required by law, Upskill Nexus collects, uses and discloses personal information about you only with your consent.",
      },

      //

      {
        content: "Personal information collected by Upskill Nexus is limited in scope and type.",
      },
      {
        content:
          "The information you provide to Upskill Nexus will be used and disclosed only if you consent or as required by law. To accomplish these purposes, we will keep personal information only as long as necessary.",
      },
      {
        content: "Upskill Nexus is committed to maintaining accurate personal information.",
      },
      {
        content: "We safeguard your personal information appropriately based on its sensitivity.",
      },
      {
        content:
          "Upskill Nexus will be transparent about the procedure it uses to manage your personal information.",
      },
      {
        content:
          "Upskill Nexus will notify you of what personal information it has about you, what it is being used for, and to whom and why it has been disclosed at your request.",
      },
    ],
  },
];

const Privacy = () => {
  return (
    <Flex py="5" flexDir={"column"} align="center">
      <Text fontSize={"40px"} textAlign={"center"} fontWeight={"bold"}>
        Privacy Policy
      </Text>
      <Box w={{ base: "100%", md: "90%" }} m="auto" p="5">
        <Box textAlign={"center"}>
          <Text>
            As a company, <GetUpskillnexus text={"UpskillNexus"} /> respects the right to privacy of
            its clients and employees. Our commitment to protecting personal information under our
            control is steadfast. In order to fulfill our professional responsibilities and carry
            out our business, we have adopted this Privacy Policy that guides how we collect, use,
            and disclose personal information. The implications of this Privacy Policy apply to all
            subsidiaries and associates, as well as all partnerships in India of{" "}
            <GetUpskillnexus text={"UpskillNexus"} />.
          </Text>
          <Text>
            Our clients and personnel are very important to us, and we take your privacy very
            seriously. To ensure the privacy rights of our clients and team members, we have
            developed this Privacy Policy. Certain practices discussed in this Privacy Policy are
            governed by federal and/or provincial privacy legislation. As part of our policy,{" "}
            <GetUpskillnexus text={"UpskillNexus"} />
            adheres to all applicable laws, regulation, and professional responsibilities, and we
            respect and protect our clients' and personnel's privacy.
          </Text>
          <Text>
            This Privacy Policy applies to personal information about identifiable individuals as
            more specifically defined by federal and state privacy laws.
          </Text>
        </Box>

        <Flex flexDir="column" gap="20px" border="2px solid #b9292f" p="5" rounded={"md"}>
          {pData.map((ele, i) => (
            <Box key={i} p="3" borderRadius={"5px"}>
              <Text fontSize={{ base: "22px", md: "30px" }} color="#b9292f" fontWeight={"medium"}>
                {ele.h}
              </Text>
              <Box>
                {ele?.p.map((el, i) => (
                  <Box key={i}>
                    <Text fontSize={{ base: "21px", md: "25px" }}>{el?.heading}</Text>
                    <Text fontSize={{ base: "19px", md: "20px" }}>{el?.heading2}</Text>
                    <Flex gap="2" align={"center"}>
                      <Text fontSize={"25px"}>•</Text>
                      <Text>{el?.content}</Text>
                    </Flex>
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </Flex>
  );
};

export default Privacy;
