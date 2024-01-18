// src/components/FAQ.js
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  Flex,
  Image,
  Heading,
} from "@chakra-ui/react";

export const FAQ = () => {
  const FAQData = [
    {
      question: "What is UpskillNexus?",
      answer:
        "UpskillNexus is an IT training provider dedicated to preparing individuals for successful careers in the tech industry.",
    },
    {
      question: "What sets UpskillNexus apart from other training providers?",
      answer:
        "Our training programs are designed and led by industry experts, providing hands-on practical training, 100% placement assistance, and 24/7 career support.",
    },
    {
      question: "Do I need any prior tech experience to enroll in your courses?",
      answer:
        "Our courses cater to various skill levels, from beginners to those with some experience. Course prerequisites are specified on each course page.",
    },
    {
      question: "What courses do UpskillNexus offer?",
      answer:
        "Data Science and Analytics, Cybersecurity, Digital Marketing Science and Employability Skills are the four courses we currently offer.",
    },
    {
      question: "What are the Course durations and schedules?",
      answer:
        "Course durations and schedules vary. Details can be found on the specific course pages.",
    },
    {
      question: "What kind of support do you offer during the course?",
      answer:
        "We provide comprehensive support, including course materials, assignments, and a dedicated support team to address your queries.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept various payment methods, including credit cards, debit cards, and digital wallets. We also offer loan assistance.",
    },
    {
      question: "Can I access course materials after completing a course?",
      answer: "Yes, course materials are accessible to trainees even after completing the course.",
    },
    {
      question: "Are certificates provided upon course completion?",
      answer:
        "We provide certificates of completion for all courses upon meeting the graduation requirements of the respective courses. ",
    },
  ];

  return (
    <Flex m="auto" gap="3" flexDir={{ base: "column", md: "row" }} align={{ base: "center", md: "start" }} w={{ base: "full", md: "90%" }}>
      <Image
        w={{ base: "full", md: "50%" }}
        src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/4752/direct/1682563630832-1682563630832.png"
        alt="FAQ Image"
      />
      <Flex flexDir="column" align="center" w={{ base: "full", md: "full" }}>
        {/*  */}
        <Accordion defaultIndex={[0]} w='full' textAlign={"start"}>
          {FAQData.map((item, index) => (
            <AccordionItem color="#fff" bg="#b9292f" key={index} p="1" mt="2" borderRadius={"5px"}>
              <AccordionButton>
                <Heading size="sm">{item.question}</Heading>
              </AccordionButton>
              <AccordionPanel bg="#b9292e68">{item.answer}</AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
        {/*  */}
      </Flex>
    </Flex>
  );
};
