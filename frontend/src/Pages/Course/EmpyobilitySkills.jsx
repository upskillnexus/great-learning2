import React, { useRef } from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  Button,
  Image,
  Center,
  Grid,
  useDisclosure,
  ListItem,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import { GiTargetDummy } from "react-icons/gi";
import DynamicCard from "../../Components/Cards/DynamicCard";
import CourseInformation from "../../Components/Course/CourseInfo";
import ChatGPTComponent from "../../Components/Course/ChatGpt";
import { MdCheck } from "react-icons/md";
import { hoverStyle } from "../../style/button.style";
import { InquiryModal } from "../../Components/Modal/InquiryModal";
import { FAQ } from "../Home/FAQ";
import GetUpskillnexus from "../../Components/Text/GetUpskillnexus";
import TrendingBlogs from "../../Components/Course/Trending_Blog";

const EmpyobilitySkills = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const topData = {
    title: "Employability Skills/Soft Skills for Career Success",
    text: <>
        <Text>
            Are you a driven individual aspiring to get your dream career and accelerate its growth? Look no further! ",
        </Text>
        <Text>
            At <GetUpskillnexus text={"UpskillNexus"} />, we specialize in empowering entry-level and mid-career IT professionals with the essential hard skills and soft skills needed for professional expertise to land coveted jobs and secure promotions.
        </Text>
    </>,
    logo: [
      {
        // img: "https://didm.in Nexus.in/assets/upload/images/Untitled%20design.gif",
        img: "https://didm.in/assets/upload/images/Untitled%20design.gif",

        heading: "Offline/In-Person Training",
        text: "Mode",
      },
      {
        img: "https://didm.in/assets/upload/images/DIDM%20Successfuly%20Batch%20Closed.gif",
        heading: "Structured Modules, Practical exercises, Case Studies",
        text: "Delivery",
      },
      {
        img: "https://didm.in/assets/upload/images/Career_Transition.gif",
        heading: "100% Placement",
        text: "Assistance",
      },
      {
        img: "https://didm.in/assets/upload/images/Placement_Partners.gif",
        heading: "Professionals Instructor",
        text: "Instructors",
      },
    ],
  };

  const courseInfoData = [
        {
            content: <UnorderedList>
                <ListItem>
                    Industry-Relevant Curriculum
                    <UnorderedList>
                        <ListItem>
                            Gain practical knowledge and hands-on experience with cutting-edge frameworks and tools that are directly applicable in the workplace.
                        </ListItem>
                    </UnorderedList>
                </ListItem>
            </UnorderedList>,
        },
        {
            content: <UnorderedList>
            <ListItem>
                Employability Skills Mastery:
                    <UnorderedList>
                        <ListItem>
                            Hone crucial soft skills like effective communication, collaboration, teamwork, leadership, time management and adaptability that are essential for success in today's dynamic corporate landscape.
                        </ListItem>
                        <ListItem>
                            We will empower you with comprehensive skill sets using our  ‘12-Step Professional Competency Framework’ that will help you not only succeed professionally but grow personally as well.
                        </ListItem>
                    </UnorderedList>
            </ListItem>
            </UnorderedList>,
        },
        {
            content: <UnorderedList>
            <ListItem>
                Career Placement Support:
                    <UnorderedList>
                        <ListItem>
                            Benefit from our extensive network and personalized guidance in landing your dream job or securing a well-deserved promotion.
                        </ListItem>
                    </UnorderedList>
            </ListItem>
            </UnorderedList>,
        },     
        {
            content: <UnorderedList>
            <ListItem>
                In-person classroom experience for collaborative learning and practice
                    <UnorderedList>
                        <ListItem>
                            Learn from our industry experts face to face, clear doubts as and when you encounter challenges, and engage in live projects with your peers in labs to consolidate your learning.
                        </ListItem>
                    </UnorderedList>
            </ListItem>
            </UnorderedList>,
        },
        {content: <b>Invest in yourself. Become job-ready. Elevate your career. </b>},
        {content: <b>Join <GetUpskillnexus text='UpskillNexus' bold={600} /> today and unlock a world of opportunities!</b>}
  ];

  const chapterhighlights = [
    { content: "Module 1: Security Fundamentals [40 hours]" },
    { content: "Module 2: Programming [ 80 hours]" }, //
    { content: "Module 3: Infrastructure Security & Penetration Testing [70 hours]" },
    { content: "Module 4: Web Application Security [70 hours]" },
    { content: "Module 5: Mobile Application Security [80 hours]" },
    { content: "Module 6: Attack Surface Management [30 hours]" },

    {content: (
      <Box p='3' rounded={'md'} bg='#b52828' color={'#fff'} border="2px solid #b52828">  
        <Text> Module 7: Cloud Security [60 hours]</Text>
        <Text> Module 8: DevSecOps [50 hours]</Text>
        <Text> Module 9: Advanced Web Application Security [30 hours]</Text>
        <Text> Module 10: Advanced Infrastructure Security & Penetration Testing [30 hours]</Text>
        <Text> Module 11: Internship and Real-life Assignments and Projects.</Text>
      </Box>
    )},

    // { content: "Module 7: Cloud Security [60 hours]" },
    // { content: "Module 8: DevSecOps [50 hours]" },
    // { content: "Module 9: Advanced Web Application Security [30 hours]" },
    // { content: "Module 10: Advanced Infrastructure Security & Penetration Testing [30 hours]" },
    // { content: "Module 11: Internship and Real-life Assignments and Projects." },
  ];
  
  const digital_Course = [
    {
      title: "Holistic Skill Development:",
      arr: ['This course covers a wide range of soft skills, ensuring a well-rounded skill set for entry-level professionals.'],
      icon: <GiTargetDummy />,
    },
    {
      title: "Practical Application:",
      arr : ['Participants engage in hands-on activities, role-plays, and real-world simulations to apply the acquired skills in realistic workplace scenarios.'],
      icon: <GiTargetDummy />,
    },
    {
      title: "Customized Learning Path:",
      arr: ['The program is tailored to address the unique needs of entry-level professionals, providing targeted training to bridge the gap between academic learning and professional expectations.'],
      icon: <GiTargetDummy />,
    },
    {
      title: "Mentorship and Guidance:",
      arr: ['Our experienced instructors provide personalized feedback, mentorship, and career advice to support participants in their transition to the professional world.'],
      icon: <GiTargetDummy />,
    },
    {
      title: "Career Readiness Toolkit:",
      arr: ['Participants receive resources, tools and templates to help them create impactful resumes, cover letters, and portfolios, as well as prepare for interviews and networking events.'],
      icon: <GiTargetDummy />,
    },
    {
      title: "Interactive Workshops:",
      arr: ['We provide opportunities to engage in interactive workshops that foster teamwork, enhance communication skills, and encourage problem-solving in a collaborative environment.'],
      icon: <GiTargetDummy />,
    },
  ];

  const skillsData = [
    {
      title: 'Effective Communication',
      content: [
        'Verbal and written communication skills for professional interactions.',
        'Active listening techniques and clear speech articulation.',
        'Business correspondence and email etiquette.',
        'Report writing and presentation skills.',
        'Interview mastery and interpersonal skills.',
      ],
    },
    {
      title: 'Teamwork and Collaboration',
      content: [
        'Strategies for effective collaboration in diverse teams.',
        'Techniques for building positive professional relationships.',
      ],
    },
    {
      title: 'Time Management and Productivity',
      content: [
        'Time management techniques to prioritize tasks and meet deadlines.',
        'Strategies for increasing productivity and efficiency.',
      ],
    },
    {
      title: 'Critical Thinking and Problem Solving',
      content: [
        'Analytical thinking and decision-making skills.',
        'Creative problem-solving techniques for workplace challenges.',
      ],
    },
    {
      title: 'Professionalism and Business Etiquette',
      content: [
        'Developing a professional image and personal brand.',
        'Mastering meeting etiquette, professional attire, and workplace decorum.',
      ],
    },
  ];

  const skillsData2 = [
    {
      title: 'Effective Communication',
      content: [
        'Verbal and written communication skills for professional interactions.',
        'Active listening techniques and clear speech articulation.',
        'Business correspondence and email etiquette.',
        'Project proposals, reports, and presentation skills.',
        'Interview mastery and interpersonal skills.',
      ],
    },
    {
      title: 'Effective Leadership and Team Management',
      content: [
        'Develop leadership skills and strategies for effective team management.',
        'Understand the stages of team development and how to lead through each stage.',
      ],
    },
    {
      title: 'Problem-Solving and Decision-Making',
      content: [
        'Enhance critical thinking and decision-making abilities.',
        'Master techniques for root cause analysis and creative problem-solving.',
      ],
    },
    {
      title: 'Conflict Management in Leadership',
      content: [
        'Learn to adapt leadership styles in conflict situations.',
        'Develop negotiation and assertiveness skills for effective conflict resolution.',
      ],
    },
    {
      title: 'Time Management, Productivity and Stress Management',
      content: [
        'Implement time management strategies for enhanced productivity.',
        'Manage stress through stress assessment, coping techniques, and work-life balance.',
      ],
    },
    {
      title: 'Professional Presence and Business Etiquette',
      content: [
        'Build and maintain a professional image and personal brand.',
        'Master meeting and dining etiquette, and understand appropriate attire and grooming.',
      ],
    },
    {
      title: 'Adaptability and Resilience',
      content: [
        'Embrace change through effective change management.',
        'Develop personal resilience, adaptability, and continuous learning habits.',
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
      <Box>
        <Flex flexDir={"column"} alignItems={"center"}>
          <Box
            minH="60vh"
            width="100%" //
            backgroundImage="url('/course/banner2.png')"
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
          >
            <Flex position={"relative"} minH={"20vh"} maxW={{ base: "100%", md: "90%" }} mx="auto" py="40px" px="20px" direction={{ base: "column", md: "column" }} align={{ base: "center", md: "start" }}>
              <Box
                flex="1"
                border="4px solid none"
                w={{ base: "100%", lg: "65%" }}
                color="white"
                ml={{ base: "0", md: "20px" }}
              >
                <Heading fontSize="40px" fontWeight={"500"} color="#fff">
                  {topData?.title}
                </Heading>
                <Text fontSize="md" color="#fff">
                  {topData?.text}
                </Text>
                {/*  */}
                <OrderedList>
                  {topData?.points?.map((ele,i) => (
                    <ListItem fontWeight={900} key={i}>{ele}</ListItem>
                  ))}
                </OrderedList>
              
                <Flex mt="20px">
                  <Button
                    onClick={() => onOpen()}
                    bg="#e95454"
                    _hover={{ bg: "transparent", border: "1px solid #e95454" }}
                    color="white"
                    mr="10px"
                  >
                    Apply Now
                  </Button>
                  <Button
                    onClick={() => onOpen()}
                    _hover={hoverStyle}
                    variant="outline"
                    borderColor="#e95454"
                    color="#fff"
                  >
                    Enquire Now
                  </Button>
                </Flex>
                <Grid
                  gridTemplateColumns={{
                    base: "repeat(2,1fr)", //
                    sm: "repeat(2,1fr)",
                    md: "repeat(3,1fr)",
                    lg: "repeat(4,1fr)",
                  }}
                  mt="40px"
                  justify="start"
                  gap="4"
                  bg="none"
                  w="40px"
                >
                  {topData?.logo?.map((ele, i) => (
                    <Flex
                      w="150px"
                      rounded={"md"}
                      bg="white"
                      p="2"
                      textAlign={"center"}
                      justify={"center"}
                      flexDir={"column"}
                      align={"center"}
                      key={i}
                      border="2px solid white"
                    >
                      <Image src={ele?.img} alt="Company 1" boxSize="50px" mx="10px" />
                      <Heading fontSize={"12px"} color="black">
                        {ele?.heading}
                      </Heading>
                      <Text color="black" fontSize={"12px"}>
                        {ele?.text}
                      </Text>
                    </Flex>
                  ))}
                </Grid>
              </Box>
            </Flex>
          </Box>
          {/*  */}
          <Box w="full" py="8" bg="#f4f5f7">
            <CourseInformation //
              title={"Program Highlights"}
              data={courseInfoData}
              keyH="Highlights"
              subTitle={"The Our training program is designed by top industry experts.an be found below, which make it unique to any other Cybersecurity Course in the country."}
            />
          </Box>

          {/* Best Certification Course on Cybersecurity */}
          <Box w='full'>
            <DynamicCard //
              onOpen={onOpen}
              bg="#b9292f"
              borderRadius="none"
              button="Enquire Now"
              title={"Suggest me some title ma'ma "}
              text="Dummy content"
            />
          </Box>
        {/*  */}

          {/* Course 1: Foundational Employability Skills Program */}
          <Flex justify={'center'} w="full" bg="#fff" py="8">
            <ChatGPTComponent //
              onOpen={onOpen}
              data={digital_Course}
              button={false}
              title={"Course 1: Foundational Employability Skills Program"}
              subTitle={<>
                    <Text mb='0'>
                        Foundational Employability Skills Program” is a specialized training program designed to empower individuals entering the workforce with the essential skills and competencies needed to excel in their careers from day one of their jobs. This comprehensive course focuses on building a sound foundation in soft skills required to complement technical skills to succeed in today's competitive job arena.
                    </Text>
                    <b>
                        Duration: 4 Months (80 Hours)
                    </b>
              </>}
            />
          </Flex>
          {/* Course Content: */}
            <Flex w="full" justify={"center"} py="5">
                <Box w="90%">
                    <TrendingBlogs title={'Course Content:'} arr={skillsData} />
                </Box>
            </Flex>

           {/* Course 2: Advanced Employability Skills Mastery Program */}
           <Flex justify={'center'} w="full" bg="#fff" py="8">
            <ChatGPTComponent //
              onOpen={onOpen}
            //   data={digital_Course}
              title={"Course 2: Advanced Employability Skills Mastery Program"}
              subTitle={
                <>
                    <Text mb='0'>
                        "Advanced Soft Skills Mastery Program" is a specialized training program tailored to professionals at the mid-career stage. This course goes beyond the basics, equipping you with the advanced soft skills necessary to excel in leadership roles, foster teamwork, and navigate complex professional challenges.
                    </Text>
                    <b>Duration: 6 Months (120 hours)</b>
                </>
              }
            />
          </Flex>
          
          {/* Course Content2: */}
          <Flex w="full" justify={"center"} py="5">
                <Box w="90%">
                    <TrendingBlogs title={'Course Content:'} arr={skillsData2} />
                </Box>
            </Flex>

          {/* Eligibility Criteria */}
          <Box m="0" w="full">
            <DynamicCard //
              onOpen={onOpen}
              bg="#b9292f"
              borderRadius="none"
              button="Enquire Now"
              title={"Suggest some content here...."}
              text="dummy....."
            />
          </Box>
          {/*  */}

          {/*  */}
          <Flex justify={"center"} minH="70vh" py="8">
            <FAQ />
          </Flex>

          {/*  */}
        </Flex>
      </Box>
    </>
  );
};

export default EmpyobilitySkills;
