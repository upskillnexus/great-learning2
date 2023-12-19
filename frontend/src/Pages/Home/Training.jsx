// src/components/TrainingPrograms.js

// import React, { useEffect } from 'react';
import { Box, Heading, Text, VStack, SimpleGrid, Button, Image, Flex, useDisclosure } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import VisibilitySensor from "react-visibility-sensor";
import { InquiryModal } from "../../Components/Modal/InquiryModal";

const programs = [
  // {
  //   icon: "/training/data-science.png",
  //   title: "Data Science",
  //   description: "Learn to analyze data in depth. Discover the art of extracting insights and making data-driven decisions.",
  // },
  // {
  //   icon: "/training/cyber.png",
  //   title: "Cyber Security",
  //   description: "Develop cybersecurity skills to secure and protect organisations from digital threats.",
  // },
  // {
  //   icon: "/training/ai.png",
  //   title: "AI & Machine Learning",
  //   description: "Journey into the future with AI and ML. Create intelligent systems and predict trends in technology.",
  // },

  {
    id: "3",
    image: "/course/expert.png",
    name: "katill",
    programName: "Cybersecurity Expert Program",
    para: "Cybersecurity is a rapidly growing field that uses technology and processes to protect computer systems and data from online attacks. Cybersecurity courses equip students with the knowledge and skills necessary to thrive in this critical domain.",
    duration: "12 Months • Offline (In-Class Training)",
    badge: "DEDICATED CAREER SUPPORT",
    link: "cyber-security",
  },

  {
    id: "3",
    image: "/course/cyber1.png",
    name: "katill",
    programName: "Cybersecurity Professional Program",
    para: "Cybersecurity is a rapidly growing field that uses technology and processes to protect computer systems and data from online attacks. Cybersecurity courses equip students with the knowledge and skills necessary to thrive in this critical domain.",
    duration: "12 Months • Offline (In-Class Training)",
    badge: "DEDICATED CAREER SUPPORT",
    link: "cyber-security",
  },
  //

  {
    id: "2",
    image: "/course/foundation.png",
    name: "katill",
    programName: "Foundational Employability Skills Program ",
    para: "Anyone who takes the Digital Marketing Science Course will be able to learn about the complete science of digital marketing..",
    duration: "3 Months • Offline (In-Class Training)",

    badge: "DEDICATED CAREER SUPPORT",
    link: "digital-marketing-science",
  },
  {
    id: "1",
    image: "/course/data-science.png",
    programName: "Master In Data Science ",
    para: "Become a Data Scientist or Business Analyst. Learn Core Python, SQL, Tableau, Machine Learning, Predective Modeling and more from industry leaders and top faculty. Practical based traning.",
    duration: "11 Months • Online / Offline",

    badge: "DEDICATED CAREER SUPPORT",
    link: "data-science",
  },
  //

  {
    id: "3",
    image: "/course/advanced.png",
    name: "katill",
    programName: "Advanced Employability Skills Mastery Program",
    para: "Cybersecurity is a rapidly growing field that uses technology and processes to protect computer systems and data from online attacks. Cybersecurity courses equip students with the knowledge and skills necessary to thrive in this critical domain.",
    duration: "12 Months • Offline (In-Class Training)",
    badge: "DEDICATED CAREER SUPPORT",
    link: "cyber-security",
  },

  //
  {
    id: "2",
    image: "/course/digital-marketing.png",
    name: "katill",
    programName: "Digital Marketing Science ",
    para: "Anyone who takes the Digital Marketing Science Course will be able to learn about the complete science of digital marketing..",
    duration: "3 Months • Offline (In-Class Training)",

    badge: "DEDICATED CAREER SUPPORT",
    link: "digital-marketing-science",
  },
];

const MotionBox = motion(Box);

const TrainingPrograms = () => {
  const controls = useAnimation();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  useEffect(() => {
    // Start animations when the component has mounted
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  const handleVisibilityChange = () => {
    // You can keep this function if needed
  };

  return (
    <>
      <InquiryModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} initialRef={initialRef} finalRef={finalRef} />
      <VStack bg="#fff" spacing={2} align="center" id="training-programs" mt={{ base: "60px", md: "20px" }} p={{ base: 0, md: 3 }}>
        <Heading as="h1" fontSize={{ base: "2xl", md: "3xl" }} textAlign={"center"} color="#b9292f">
          Featured Training Programs
        </Heading>
        <Text textAlign={{ base: "justify", md: "center" }} w={{ base: "full", md: "80%" }}>
          Discover our best training programs, designed and built to launch your Digitech career.
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} w={{ base: "full", md: "80%" }} spacing={6}>
          {programs.map((ele, index) => (
            <VisibilitySensor key={index} onChange={handleVisibilityChange} partialVisibility>
              {({ isVisible }) => (
                <MotionBox p={3} textAlign="center" border="3px solid #b9292e14" borderRadius="lg" shadow="md" bg="white" whileHover={{ scale: 1.05 }} initial={{ opacity: 0, y: 30 }} animate={controls} transition={{ duration: 0.3 }} style={{ opacity: isVisible ? 1 : 0 }}>
                  <Flex justify="center" w="full">
                    <Image src={ele.image} />
                  </Flex>
                  <Heading as="h3" size={{ base: "sm", md: "md" }} m={2} color="#b9292f">
                    {ele.programName}
                  </Heading>
                  <Text>{ele.para.substring(0, 75)}...</Text>
                  <Button onClick={() => onOpen()} bg="#b9292f" color="white" _hover={{ bg: "none", color: "#b9292f", border: "1px solid #b9292f" }}>
                    Talk To Advisor
                  </Button>
                </MotionBox>
              )}
            </VisibilitySensor>
          ))}
        </SimpleGrid>
      </VStack>
    </>
  );
};

export default TrainingPrograms;
