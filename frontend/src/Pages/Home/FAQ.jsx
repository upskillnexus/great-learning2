// src/components/FAQ.js
import React from "react";
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, Box, Flex, Image, Heading } from "@chakra-ui/react";

export const FAQ = () => {
  // src/components/FAQData.js
  const FAQData = [
    {
      question: "What is Teckostar?",
      answer: "Teckostar is an IT training provider dedicated to preparing individuals for successful careers in the tech industry.",
    },
    {
      question: "What sets Teckostar apart from other training providers?",
      answer: "Our training programs are designed and led by industry experts, providing hands-on practical training, 100% placement assistance, and 24/7 career support.",
    },
    {
      question: "Do I need any prior tech experience to enroll in your courses?",
      answer: "Our courses cater to various skill levels, from beginners to those with some experience. Course prerequisites are specified on each course page.",
    },
    {
      question: "What courses does Teckostar offer?",
      answer: "Data Science and Analytics, Software Development, Cybersecurity, Cloud Computing, Artificial Intelligence, and Machine Learning are five of the courses we offer.",
    },
    {
      question: "What are the course durations and schedules?",
      answer: "Course durations and schedules vary. Details can be found on the specific course pages.",
    },
    {
      question: "Are your courses available online?",
      answer: "Yes, all our courses are available online, making them accessible to learners from around the world.",
    },
    {
      question: "What kind of support do you offer during the course?",
      answer: "We provide comprehensive support, including course materials, assignments, and a dedicated support team to address your queries.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods, including credit cards, debit cards, and digital wallets.",
    },
    {
      question: "Can I access course materials after completing a course?",
      answer: "Yes, course materials are accessible to trainees even after completing the course.",
    },
    {
      question: "Are certificates provided upon course completion?",
      answer: "We provide certificates of completion for all courses, which can be a valuable addition to your resume.",
    },
  ];

  return (
    <Flex m="auto" bg="gray.50" p="5" align={{ base: "center", md: "start" }} flexDir={{ base: "column", md: "row" }}>
      <Image maxH="500px" w={{ base: "90%", md: "50%" }} src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/4752/direct/1682563630832-1682563630832.png" alt="FAQ Image" />
      <Flex flexDir="column" align="center" w={{ base: "90%", md: "50%" }}>
        {/*  */}
        <Accordion allowToggle w={"90%"}>
          {FAQData.map((item, index) => (
            <AccordionItem key={index} p="1" mt="2" borderRadius={"5px"} bg="gray.100">
              <AccordionButton>
                <Heading size="sm">{item.question}</Heading>
              </AccordionButton>
              <AccordionPanel bg="gray.50">{item.answer}</AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
        {/*  */}
      </Flex>
    </Flex>
  );
};
