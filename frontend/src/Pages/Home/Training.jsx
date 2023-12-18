// src/components/TrainingPrograms.js

// import React, { useEffect } from 'react';
import { Box, Heading, Text, VStack, SimpleGrid, Button, Image, Flex, useDisclosure } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import VisibilitySensor from "react-visibility-sensor";
import { InquiryModal } from "../../Components/Modal/InquiryModal";

const programs = [
  {
    icon: "/training/data-science.png",
    title: "Data Science",
    description: "Learn to analyze data in depth. Discover the art of extracting insights and making data-driven decisions.",
  },
  {
    icon: "/training/cyber.png",
    title: "Cyber Security",
    description: "Develop cybersecurity skills to secure and protect organisations from digital threats.",
  },
  {
    icon: "/training/ai.png",
    title: "AI & Machine Learning",
    description: "Journey into the future with AI and ML. Create intelligent systems and predict trends in technology.",
  },
  // {
  //     title: 'Cloud Computing',
  //     description: 'Gain hands-on skills in cloud resource management and optimization.',
  // },
  // {
  //     title: 'Artificial Intelligence and Machine Learning',
  //     description: 'Journey into the future with AI and ML. Create intelligent systems and predict trends in technology.',
  // },
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
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} w="80%" spacing={6}>
          {programs.map((program, index) => (
            <VisibilitySensor key={index} onChange={handleVisibilityChange} partialVisibility>
              {({ isVisible }) => (
                <MotionBox p={4} textAlign="center" border="3px solid #b9292e14" borderRadius="lg" shadow="md" bg="white" whileHover={{ scale: 1.05 }} initial={{ opacity: 0, y: 30 }} animate={controls} transition={{ duration: 0.3 }} style={{ opacity: isVisible ? 1 : 0 }}>
                  <Flex justify="center" w="full">
                    <Image src={program.icon} />
                  </Flex>
                  <Heading as="h3" size="md" mb={2} color="#b9292f">
                    {program.title}
                  </Heading>
                  <Text>{program.description}</Text>
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