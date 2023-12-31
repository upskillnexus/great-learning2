import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import AboutHead from "../../Components/About/AboutHead";
import OurVision from "../../Components/About/OurVision";
import OurMission from "../../Components/About/OurMission";
import AboutBanner from "../../Components/About/Banner";
import AboutCard from "../../Components/About/aboutCard";
import GetUpskillnexus from "../../Components/Text/GetUpskillnexus";

const About = () => {
  const data = [
    {
      title: "RISE ABOVE THE REST",
      heading: "Your Path To A Digitech-Driven Successful Career Starts Here",
      pera: "Our Mission: To Create the Digitech Leaders of Tomorrow",
      img: "/aboutus/about.png",
      buttonText: "Learn More",
      link: "/about",
    },
  ];

  const textArr = [
    {
      text: "Our vision at UpskillNexus is to equip individuals with not only the functional knowledge and digital technological skills required for success in their careers but also critical employability skills to enable them to lead and innovate in their respective fields. ",
    },
    {
      text: "We envision a world where our graduates are sought after by leading Corporates and are instrumental in driving a positive change, embracing challenges, and setting new standards of professional excellence. Through a commitment to continuous innovation, unwavering quality, and fostering a culture of lifelong learning, we aim to be the catalyst for transformative careers, creating a ripple effect of positive impact in workplaces and communities worldwide. ",
    },
    {
      text: "At UpskillNexus, our vision is to empower individuals not just with skills but with the mindset and resilience to thrive in an ever-evolving professional landscape.",
    },
  ];

  const textArr2 = [
    {
      text: "UpskillNexus is an organisation invested in providing growth-oriented individuals with high-quality authentic and practical training in the field of digital technology. With our courses, career aspirants can develop their critical digital technology skills along with employability skills for success in today's business world. ",
    },
    {
      text: "Through practical, innovative and personalized training, we aspire to bridge the gap between education and employment, fostering a community of empowered individuals ready to make a lasting impact on the global workforce. At UpskillNexus, we believe that by investing in the personal growth and employability of individuals, we contribute to building a brighter, more resilient future for both our learners and the industries they serve.",
    },
  ];

  return (
    <Flex align={"center"} flexDir={"column"} gap={0}>
      {/* heading  */}
      <AboutBanner data={data} />

      <Box mt="8" textAlign={"center"} p={{ base: 3, lg: "0" }} w={{ base: "full", lg: "80%" }}>
        <Text fontWeight={"medium"}>
          We are
          <GetUpskillnexus text="UpskillNexus" />, a team of dedicated corporate industry leaders
          with a commitment to skill and digitally empower professionals. We upskill people in
          digital technologies to help them become prosperous. We provide high-quality authentic and
          practical training to career aspirants to develop their critical technical and digital
          skills along with employability skills for success in today’s business world.
        </Text>
      </Box>

      <Flex flexDir={"column"} border="5px solid none" align={"center"} bg="#fff">
        <Box
          w={{ base: "full", lg: "80%" }}
          minH={"20vh"}
          rounded={"lg"}
          overflow={"hidden"}
          bg={"#fff"}
        >
          <AboutCard
            heading="Our Vision" //
            text={textArr}
            // img="/Upskill-Nexus-favicon.png"
            img="/aboutus/about2.png"
            imgSide="right"
          />
          {/* Card 2 */}
          <AboutCard
            heading="Our Mission" //
            text={textArr2}
            img="/aboutus/about3.png"
            imgSide="left"
          />

          <Box bg="white" p="8">
            <Text></Text>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default About;
