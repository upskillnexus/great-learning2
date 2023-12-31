import { Box, Flex, Heading, Text, Image, Icon, Button, useDisclosure } from "@chakra-ui/react";
import React, { useRef } from "react";
import { MdCheckCircleOutline } from "react-icons/md";
import { InquiryModal } from "../../Components/Modal/InquiryModal";
import GetUpskillnexus from "../../Components/Text/GetUpskillnexus";

function SetsUsApart() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const contentData = [
    {
      title: "Robust Curriculum",
      icon: MdCheckCircleOutline,
      content: [
        {
          text: "We offer a robust curriculum that fits the practical requirements of today’s fast-changing industries and businesses. Our programs and courses have been thoughtfully designed by highly experienced and reputed industry leaders who know what it takes to overcome challenges in the real-world global workplace.",
        },
      ],
    },
    {
      title: "Industry Leaders as Training Partners",
      icon: MdCheckCircleOutline,
      content: [
        {
          text: "You will be trained by industry leaders who have established successful careers in your chosen field and are willing to share their knowledge and wisdom with you.",
        },
      ],
    },
    {
      title: "Hands-On Practical Training",
      icon: MdCheckCircleOutline,
      content: [
        {
          text: "Our major focus while giving training is on providing Hands-On Practical Training so that you don’t just understand the concepts but become proficient in them.",
        },
      ],
    },
    {
      title: "360-degree Assessment and Feedback",
      icon: MdCheckCircleOutline,
      content: [
        {
          text: "Assessments that align with the learning objectives. These include quizzes, assignments, labs, and final Project-Based Assesment.",
        },
        {
          text: "We use both formative assessments (for learning), summative assessments (of learning), and constructive feedback mechanisms to assess and guide student learning outcomes.",
        },
      ],
    },
    {
      title: "100% Placement Assistance",
      icon: MdCheckCircleOutline,
      content: [
        {
          text: "After you complete your chosen training program with us, you will be able to perform the job role with expertise. In addition, we will connect you with reputable employment opportunities.",
        },
      ],
    },
    {
      title: "24/7 Career Support",
      icon: MdCheckCircleOutline,
      content: [
        {
          text: "No matter what stage of your career you are in, we are always available to help you with any issues pertaining to the training that you have taken from us.",
        },
      ],
    },
  ];

  return (
    <>
      <InquiryModal
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        initialRef={initialRef}
        finalRef={finalRef}
      />
      <Box mt={{ base: "50px", md: "60px" }} p={{ base: 0, md: 8 }} bg="#fff">
        <Flex flexDir="column" alignItems="center">
          <Heading
            fontSize={{ base: "25px", sm: "35px", md: "40px" }}
            textAlign={{ base: "start", md: "center" }}
            color="#b9292f"
            mb={4}
          >
            UpskillNexus Highlights
          </Heading>
          <Text w={{ base: "full", md: "70%" }} textAlign={{ base: "justify", md: "center" }}>
            Here are the standout features that make
            <GetUpskillnexus text="UpskillNexus" />
            unique. These are what set us apart and make us the go-to choice for upskilling.
          </Text>
        </Flex>

        <Flex flexDir="column" gap={{ base: "0", md: "0" }} align="center">
          <Flex
            w="full"
            flexDir={{ base: "column-reverse", md: "column-reverse", lg: "row" }}
            justify="space-between"
            alignItems="center"
            gap={5}
            p={{ base: 3, md: 4 }}
            // bg='blue'
            // border="4px solid black"
          >
            {/* Left Side (Content) */}
            <Box flex="1" py={4} textAlign={{ base: "start", md: "left" }} mb={{ base: 5, md: 0 }}>
              {contentData.map((content, index) => (
                <Flex key={index}>
                  <Box>
                    <Icon color="#b9292f" boxSize={6} mr={2} as={content.icon} />
                  </Box>
                  <Box>
                    <Heading
                      color="#000"
                      px={{ base: 1, md: 0 }}
                      fontSize={{ base: "md", md: "1xl" }}
                    >
                      {content.title}
                    </Heading>
                    <Flex flexDir={"column"} mb={4}>
                      {content?.content.map((item, itemIndex) => (
                        <Box key={itemIndex}>
                          <Text>{item.text}</Text>
                        </Box>
                      ))}
                    </Flex>
                  </Box>
                </Flex>
              ))}
            </Box>
            <Image
              src="/img5.jpg"
              alt="Training Image"
              boxShadow="0px 0px 10px rgba(0, 0, 0, 0.2)"
            />
          </Flex>

          <Button
            onClick={() => onOpen()}
            border="1px solid #b9292f"
            bg="#b9292f"
            color="#fff"
            _hover={{ bg: "#fff", color: "#b9292f" }}
          >
            Explore Our Courses
          </Button>
        </Flex>

        {/* <Flex flexDir="column" gap="20px" mt="5">
        <Heading textAlign={"center"} size="lg">
          Our trainees now work for big brands in 80% of cases.
        </Heading>
        <Box p="4" textAlign={"center"} border={"2px solid #b9292f"} borderRadius={8} mt="3">
          <Heading color="#b9292f" size="md">
            60% of our learners transformed their careers
          </Heading>
          <Text>Alumni Career Transitions in The Industry for degree & PG programs</Text>
        </Box>
      </Flex> */}
      </Box>
    </>
  );
}

export default SetsUsApart;
