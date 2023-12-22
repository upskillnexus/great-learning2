import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  ModalHeader,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { hoverStyle } from "../../style/button.style";
import SocialProfileSimple from "../../Components/whyChooseComp";
import GetUpskillnexus from "../../Components/Text/GetUpskillnexus";
import { DynamicModal } from "../../Components/Modal/DynamicModal";
import { useState } from "react";

const WhyChoose = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState({});

  const points = [
    {
      heading: "Robust Curriculum",
      icon: "/whychoose/icon1.png",
      content: [
        "We offer a robust curriculum that fits the practical requirements of today’s fast-changing industries and businesses. Our programs and courses have been thoughtfully designed by highly experienced and reputed industry leaders who know what it takes to overcome challenges in the real-world global workplace.",
      ],
    },
    {
      heading: "Hands-On Practical Training",
      icon: "/whychoose/handson.png",
      content: [
        "Our major focus will be on providing Hands-On Practical Training through Live Projects so that you don’t just understand the concepts but become proficient and skilled in applying them.",
      ],
    },
    {
      heading: "100% Placement Support",
      icon: "/whychoose/placement.png",
      content: [
        "Benefit from our extensive network and personalized guidance in landing your dream job or securing a well-deserved promotion.",
        "For our selected programs, we offer internships with our industrial partners, leading to assured placements in reputed organisations.",
      ],
    },
    {
      heading: "Customized Learning for Real-world Success",
      icon: "/whychoose/learn.png",
      content: [
        "Our course programs are meticulously designed to align with industry demands, ensuring you gain the skills employers are actively seeking to contribute to the role from day one of the employment.",
      ],
    },
    {
      heading: "Expert Instructors for Personalized Guidance",
      icon: "/whychoose/icon4.png",
      content: [
        "Learn in person from industry experts who bring a wealth of experience to provide practical insights and mentorship tailored to your career goals.",
        "Learn from our experts face-to-face, clear doubts as and when you encounter challenges, and engage in live projects to consolidate your learning.",
      ],
    },
    //

    {
      heading: "Targeted for Entry-Level and Mid-Career Professionals",
      icon: "/whychoose/target.png",
      content: [
        "Whether you are looking to start a job or seeking to advance your career, our programs are tailored to meet your unique needs and aspirations in the digital age.",
      ],
    },
    {
      heading: "Holistic Approach to Professional Development",
      icon: "/whychoose/holistic.png",
      content: [
        "Beyond technical and functional know-how, we focus on soft skills that set you apart in the competitive job market, including personal leadership, effective communication, collaboration, time management, critical thinking, problem-solving, adaptability, and a positive mindset.",
        "Employability skills, often referred to as soft skills or transferable skills, are a set of attributes and qualities that make individuals effective and successful in the workplace. These skills go beyond technical or job-specific knowledge and are highly valued by employers across various industries and domains. Employability skills are essential for career advancement, effective teamwork, and overall professional success. We offer employability skills bundled with our course programs for the holistic development of our students.",
      ],
    },

    //
    {
      heading: "Certifications",
      icon: "/whychoose/certifications.png",
      content: [
        "Students shall receive co-branded certifications from UpskillNexus and industry training partners on successful completion of the courses.",
      ],
    },

    {
      heading: "360-degree Assessment and Feedback",
      icon: "/whychoose/assesment.png",
      content: [
        "Assessments that align with the learning objectives. These include quizzes, assignments, labs, and final Project-Based Assesment.",
        "We use both formative assessments (for learning), summative assessments (of learning) and constructive feedback mechanisms to assess and guide student learning outcomes.",
      ],
    },
    {
      heading: "24/7 Career Support",
      icon: "/whychoose/support.png",
      content: [
        "No matter what stage of your career you are in, we are always available to help you with any issues pertaining to the training that you have taken from us.",
      ],
    },
  ];

  return (
    <Flex flexDir={{ base: "column", lg: "row" }} alignItems="center" gap={0} mt="80px" p="5">
      <DynamicModal isOpen={isOpen} onClose={onClose}>
        <ModalHeader></ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Heading size={"lg"} color="#b9292f">
            {data?.heading}
          </Heading>
          {data?.content?.map((el, ind) => (
            <Text key={ind}>⦿ {el}</Text>
          ))}
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="red" bg="#b9292f" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </DynamicModal>
      {/*  */}
      <Flex border="4px solid none" justify={"center"} h="full" w={{ base: "full", lg: "40%" }}>
        <Image h="full" objectFit={"cover"} src="/whychoose.png" />
      </Flex>

      <Flex
        w={{ base: "full", lg: "70%" }}
        flexDir="column"
        alignItems={{ base: "center", lg: "start" }}
        mb={2}
      >
        <Box>
          <Heading fontSize={{ base: "20px", sm: "28px", md: "40px" }}>
            Why Choose <GetUpskillnexus text="UpskillNexus" />?
          </Heading>
          <Text w={{ base: "full", md: "90%" }} textAlign={{ base: "justify", md: "start" }}>
            An individual’s success depends on all-round development. At{" "}
            <GetUpskillnexus text="UpskillNexus" />, we understand that a person should be able to
            apply their technical digital skills in a business domain to create opportunities and
            must hold the soft skills to manifest and maximize returns from the opportunity. So we
            offer you our carefully designed programs that match what employers are looking for and
            prepare you for success.
          </Text>
        </Box>
        {/*  */}
        <Flex
          p="0"
          flexWrap={"wrap"}
          gap="2"
          mb="3"
          border="4px solid none"
          mt={{ base: 3, md: "0" }}
          w={"full"}
        >
          {points?.map((ele, i) => (
            <Flex
              key={i}
              onClick={() => {
                setData(ele), onOpen();
              }}
              gap="3"
              align={"center"}
              border="1px solid #ccc"
              rounded={"md"}
              cursor={"pointer"}
              w={{ base: "full", md: "auto" }}
              p="2"
            >
              <Image w="50px" src={ele?.icon} />
              <Heading fontSize={"md"} as="h3" color="#b9292f">
                {ele?.heading}
              </Heading>
            </Flex>
          ))}
        </Flex>
        {/*  */}
      </Flex>
    </Flex>
  );
};

export default WhyChoose;
