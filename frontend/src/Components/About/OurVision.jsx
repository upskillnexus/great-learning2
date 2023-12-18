import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import GetUpskillnexus from "../Text/GetUpskillnexus";

const OurVision = () => {
  return (
    <Flex justifyContent={"center"} paddingX={{ base: "20px", sm: "60px", md: "70px", lg: "80px" }} flexDirection={"column"}>
      <Text textAlign={"center"} fontSize={["24px", "27px", "30px", "33px"]} fontWeight={700} textColor={"red.600"}>
        Our Vision
      </Text>
      <Text
        fontSize={["15px", "17px", "19px", "21px"]}
        // textAlign={"center"}

        textAlign={"justify"}
        // fontWeight={500}
        textColor={"gray.600"}>
        Our vision at <GetUpskillnexus text="UpskillNexus" /> is to equip individuals with not only the functional knowledge and digital technological skills required for success in their careers but also critical employability skills to enable them to lead and innovate in their respective fields.
        We envision a world where our graduates are sought after by leading Corporates and are instrumental in driving a positive change, embracing challenges, and setting new standards of professional excellence. Through a commitment to continuous innovation, unwavering quality, and fostering a
        culture of lifelong learning, we aim to be the catalyst for transformative careers, creating a ripple effect of positive impact in workplaces and communities worldwide. At <GetUpskillnexus text="UpskillNexus" />, our vision is to empower individuals not just with skills but with the mindset
        and resilience to thrive in an ever-evolving professional landscape.
      </Text>
    </Flex>
  );
};

export default OurVision;
