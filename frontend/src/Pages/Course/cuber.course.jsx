import React, { useRef } from "react";
import { Box, Heading, Text, Flex, Button, Image, Center, Grid, useDisclosure } from "@chakra-ui/react";
import DigitalMarketingHighlights from "../../Components/Course/DigitalMar";
import DynamicCard from "../../Components/Cards/DynamicCard";
import CourseInformation from "../../Components/Course/CourseInfo";
import DynamicSlider from "../../Components/Slider/DynamicSlider";
import ChatGPTComponent from "../../Components/Course/ChatGpt";
import CardWithImg from "../../Components/Cards/CardWithImg";
import DynamicTesti from "../../Components/Slider/DynamicTesti";
import SyllabusComponent from "../../Components/Course/SlyabusCon";
import CareerOutcomesComponent from "../../Components/Course/CareerOutcome";
import CreativityProjects from "../../Components/Course/CreativityProject";
import DynamicLearMoreSlider from "../../Components/Slider/DynamiLearMoreSlider";
import PriceBoxComponent from "../../Components/Course/PriceBoxComponent";
import ReferAndEarnComponent from "../../Components/Course/ReferAndEarn";
import DynamicAccordians from "../../Components/Accordians/DynamicAccordians";
import CareerBenefits from "../../Components/Course/CareerBenefits";
import Reason_to_Join from "../../Components/Course/Reason_to_Join";
import TrendingBlogs from "../../Components/Course/Trending_Blog";
import { FaFacebook } from "react-icons/fa6";
import { MdCheck } from "react-icons/md";

import { BiLogoGraphql } from "react-icons/bi";
import { TbSettingsCog } from "react-icons/tb";
import { CgLivePhoto } from "react-icons/cg";
import { IoIosAnalytics } from "react-icons/io";
import InqueryFrms from "../../Components/Forms/InqueryFrms";
import { hoverStyle } from "../../style/button.style";
import { InquiryModal } from "../../Components/Modal/InquiryModal";

const CyberSecurityCourse = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const topData = {
    title: "Mastering Cybersecurity Essentials",
    text: "Welcome to our comprehensive six-month Cybersecurity Training Course, designed to equip aspiring professionals with the knowledge and skills necessary to thrive in the ever-evolving field of cybersecurity.",
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

  const accordianData = [
    {
      description: "Course Journey",
      text: "Our training program is designed by industry experts and offers a holistic curriculum, combining theoretical knowledge with hands-on practical experience. Students will gain insights into the latest cybersecurity trends, tools, and best practices, ensuring they are well-prepared for a successful career in the field.",
    },
    {
      description: "Who Is This Course For?",
      text: "If you’ve got a passion for technology and a curiosity about cybersecurity, this is where you need to be. Our course is designed for: IT professionals aiming to specialize in cybersecurity.  - Graduates from computer science, information technology, or related fields. System administrators, network engineers, and other tech roles seeking to bolster their security knowledge. Self-taught tech whizzes looking to formalize and expand their expertise.",
    },
    {
      description: "Prerequisites:",
      text: "Before you jump in, here's what we expect you to know: -          Basic understanding of computer networks and how the internet works. -          Comfort with common operating systems, primarily Windows and Linux. -          Fundamentals of programming are a bonus but not a deal-breaker. -          Eagerness to learn and a commitment to tackle complex challenges head-on",
    },
  ];

  const data = [
    { number: "12,000+", text: "Learners" },
    { number: "2 Tracks, 5 Specialisations", text: "Outcome Oriented Curriculum" },
    { number: "5", text: "Live Projects" },
    { number: "31-51 Weeks", text: "Recommended 7-9 hrs/week" },
    { number: "Nov 30, 2023", text: "Batch Start Date" },
    { number: "Nov 30, 2023", text: "Last Date for Enrollment" },
    { number: "300+", text: "Hiring Partners" },
    { number: "3", text: "Seats Left" },
  ];

  const cards = [
    { img: "https://www.upgrad.com/_next/image/?url=https%3A%2F%2Fik.imagekit.io%2Fupgrad1%2Fmarketing-platform-assets%2Fsprites%252Fimages%2FAdsManager_240X80_Color__1610623223234.png&w=256&q=75" },
    { img: "https://www.upgrad.com/_next/image/?url=https%3A%2F%2Fik.imagekit.io%2Fupgrad1%2Fmarketing-platform-assets%2Fsprites%252Fimages%2Ftwitter_ana_240X80__1610979088970.png&w=256&q=75" },
    { img: "https://www.upgrad.com/_next/image/?url=https%3A%2F%2Fik.imagekit.io%2Fupgrad1%2Fmarketing-platform-assets%2Fsprites%252Fimages%2Fbuzzsumo.png&w=256&q=75" }, //
    { img: "https://www.upgrad.com/_next/image/?url=https%3A%2F%2Fik.imagekit.io%2Fupgrad1%2Fmarketing-platform-assets%2Fsprites%252Fimages%2FAnsThePublic_240X80Color_With_BG__1610717179771.png&w=256&q=75" },
    { img: "https://www.upgrad.com/_next/image/?url=https%3A%2F%2Fik.imagekit.io%2Fupgrad1%2Fmarketing-platform-assets%2Fsprites%252Fimages%2FGTrends_240X80_Color_With_BG__1610717386040.png&w=256&q=75" },
    { img: "https://www.upgrad.com/_next/image/?url=https%3A%2F%2Fik.imagekit.io%2Fupgrad1%2Fmarketing-platform-assets%2Fsprites%252Fimages%2FSpyFu_240X80_BW_With_BG__1610721544937.png&w=256&q=75" },
  ];

  const speakersData = [
    {
      name: "Michael Leander",
      role: "CEO, Markedu",
      company: "MARKEDU",
      bio: "An accomplished international marketing speaker, Michael Leander has spoken across 40 countries on his areas of expertise.",
      imageSrc: "URL_TO_MICHAEL_LEANDER_IMAGE",
    },
    {
      name: "Jessica MarketingExpert",
      role: "Marketing Specialist, TechCorp",
      company: "TechCorp",
      bio: "Jessica MarketingExpert is a renowned marketing specialist, known for her innovative strategies in the tech industry.",
      imageSrc: "URL_TO_JESSICA_IMAGE",
    },
    {
      name: "Michael Leander",
      role: "CEO, Markedu",
      company: "MARKEDU",
      bio: "An accomplished international marketing speaker, Michael Leander has spoken across 40 countries on his areas of expertise.",
      imageSrc: "URL_TO_MICHAEL_LEANDER_IMAGE",
    },
    {
      name: "John DigitalStrategist",
      role: "Digital Strategist, WebSolutions",
      company: "WebSolutions",
      bio: "John DigitalStrategist is a Cyber Security guru, bringing cutting-edge strategies to WebSolutions.",
      imageSrc: "URL_TO_JOHN_IMAGE",
    },
    {
      name: "Michael Leander",
      role: "CEO, Markedu",
      company: "MARKEDU",
      bio: "An accomplished international marketing speaker, Michael Leander has spoken across 40 countries on his areas of expertise.",
      imageSrc: "URL_TO_MICHAEL_LEANDER_IMAGE",
    },
    // Add more speakers as needed
  ];

  const list1 = [
    "Solve a range of industry-relevant projects in this online Cyber Security course", //
    "Run a 5-day social media marketing campaign, and a 5-day Google Ads campaign to gain hands-on real-world experience of working as a digital marketer",
    "Create Cyber Security strategies for different brands such as Mamaearth, Zivame, cult.fit, and more for the multiple case studies in the program",
  ];
  const list2 = [
    "Run live marketing campaigns",
    "Leverage Proof-of-Work during interviews", //
    "Get mentored by industry experts",
  ];

  const cardData = [
    {
      logoSrc: "https://www.upgrad.com/_next/image/?url=https%3A%2F%2Fik.imagekit.io%2Fupgrad1%2Fmarketing-platform-assets%2Fsprites%252Fimages%2FTransition_1__1680530410305.png&w=16&q=75",
      percentage: "300%",
      title: "Maximum Salary Hike",
    },
    {
      logoSrc: "https://www.upgrad.com/_next/image/?url=https%3A%2F%2Fik.imagekit.io%2Fupgrad1%2Fmarketing-platform-assets%2Fsprites%252Fimages%2FTransition_1__1680530410305.png&w=16&q=75",
      percentage: "36%",
      title: "Average Salary Hike",
    },
    {
      logoSrc: "https://www.upgrad.com/_next/image/?url=https%3A%2F%2Fik.imagekit.io%2Fupgrad1%2Fmarketing-platform-assets%2Fsprites%252Fimages%2FTransition_1__1680530410305.png&w=16&q=75",
      percentage: "300+",
      title: "Hiring Partners",
    },
  ];

  const creativityProjectsData = [
    {
      title: "Solve a range of industry-relevant projects",
      description: "In this online Cyber Security course, you will work on a variety of industry-relevant projects, allowing you to apply theoretical knowledge to real-world scenarios.",
    },
    {
      title: "Run a 5-day social media marketing campaign and Google Ads campaign",
      description: "Gain hands-on real-world experience by running a 5-day social media marketing campaign and a 5-day Google Ads campaign. This practical experience is essential for working as a digital marketer.",
    },
    {
      title: "Create Cyber Security strategies for different brands",
      description: "Participate in multiple case studies within the program, where you will develop Cyber Security strategies for well-known brands such as Mamaearth, Zivame, cult.fit, and more.",
    },
  ];

  const careefBenifitData = [
    {
      point: "Career Advancement:",
      description: "By completing our 'Cyber Security' course, participants will be able to acquire more challenging roles and responsibilities in their current jobs or advance in their careers.",
    },
    {
      point: "Enhanced Creativity:",
      description: "To stay ahead of the competition in Cyber Security, participants attending the 'Cyber Security' course will learn how to be more creative and innovative in their approach.",
    },
    {
      point: "Increased Job Opportunities:",
      description: "In the ever-growing field of Cyber Security, completing our 'Cyber Security' course can open up a whole new world of career opportunities for participants.",
    },
    {
      point: "Networking Opportunities:",
      description: "The 'Cyber Security' course will also provide participants with the opportunity to network with other industry professionals, which can lead to new job opportunities and business collaborations.",
    },
    {
      point: "Great Earning Potential:",
      description: "Participants who have completed the 'Cyber Security' course can negotiate higher salaries and better job benefits due to their updated skills and knowledge of Cyber Security.",
    },
  ];

  const DigitalhighlightsData = [
    {
      heading: "Training Mode",
      text: "Offline/In-Personal Training",
      icon: <MdCheck />,
    },
    {
      heading: "Course Durations",
      text: "6 Months",
      icon: <MdCheck />,
    },
    {
      heading: "Course Materials",
      text: "E-Notes",
      icon: <MdCheck />,
    },
    {
      heading: "Training Session",
      text: "Live Session",
      icon: <MdCheck />,
    },
    {
      heading: "Practical Learning",
      text: "Assignment | Case Studies",
      icon: <MdCheck />,
    },
    {
      heading: "Placement Session",
      text: "Job Preperation & Placements",
      icon: <MdCheck />,
    },
    {
      heading: "Market Exposure",
      text: "Live Projects",
      icon: <MdCheck />,
    },
    {
      heading: "Practical Exposure",
      text: "Experienced Cybersecurity Professionals from the industry",
      icon: <MdCheck />,
    },
    {
      heading: "Certifications",
      text: "Completion Certificate upon fulfilling course requirements",
      icon: <MdCheck />,
    },
  ];

  const courseInfoData = [
    {
      content: "Our training program is designed by industry experts.",
    },
    {
      content: "Work on LIVE projects of agency clients and deliver results.",
    },
    {
      content: "Stand out from other Cyber Security by learning the newest concepts of Cyber Security.",
    },
    {
      content: "Get introduced to the latest Cyber Security tools and technologies.",
    },
    {
      content: "Get hired by the country’s most established Cyber Security Agencies.",
    },
    {
      content: "Learn holistic curriculum, combining theoretical knowledge with hands-on practical experience.",
    },
  ];

  const chapterhighlights = [
    { content: "Chapter 1: Security Fundamentals" },
    { content: "Chapter 2: Infrastructure Security & Penetration Testing" }, //
    { content: "Chapter 3: Programming" },
    { content: "Chapter 4: Web Application Security" },
    { content: "Chapter 5: Mobile Application Security" },
    { content: "Chapter 6: DevSecOps" },
    { content: "Chapter 7: Cloud Security" },
    { content: "Chapter 8: Attack Surface Management" },
  ];
  const digital_Course = [
    {
      title: "Cyber Security",
      arr: ["8+ Chapters", "500+ Hrs of Training"],
      icon: <IoIosAnalytics />,
    },
    {
      title: "Special Session",
      arr: ["Doubt-Clearing Sessions", "Personalized Sessions"],
      icon: <BiLogoGraphql />,
    },
    {
      title: "Tools & Software / LMS",
      arr: ["Latest Tools & Softwares Support", "100% Placement Assistance"],
      icon: <TbSettingsCog />,
    },
    {
      title: "Highlights",
      arr: ["Structured Modules", "Professionals Instructor"],
      icon: <CgLivePhoto />,
    },
  ];

  const featuresBenefitsData = [
    {
      text: "Industry-updated curriculum with GenAI modules",
    },
    {
      text: "Advanced Certificate without Quitting Your Job",
    },
    {
      text: "Hands-on Experience with the Latest Tools",
    },
    {
      text: "Hiring Opportunity from Uber, Genpact, Microsoft, PwC and More",
    },
  ];

  return (
    <>
      <InquiryModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} initialRef={initialRef} finalRef={finalRef} />
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
              <Box flex="1" border="4px solid none" w={{ base: "100%", lg: "65%" }} color="white" ml={{ base: "0", md: "20px" }}>
                <Heading fontSize="40px" fontWeight={"500"} color="#fff">
                  {topData?.title}
                </Heading>
                <Text fontSize="md" color="#fff">
                  {topData?.text}
                </Text>
                {/* <Text mt="20px" fontSize="md" color="#fff">
                5 out of 6 learners get positive career growth
                <br />
                upGrad Results reviewed by Deloitte
              </Text> */}
                <Flex mt="20px">
                  <Button onClick={() => onOpen()} bg="#e95454" _hover={{ bg: "transparent", border: "1px solid #e95454" }} color="white" mr="10px">
                    Apply Now
                  </Button>
                  <Button onClick={() => onOpen()} _hover={hoverStyle} variant="outline" borderColor="#e95454" color="#fff">
                    Enquiry Now
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
                    <Flex w="150px" rounded={"md"} bg="white" p="2" textAlign={"center"} justify={"center"} flexDir={"column"} align={"center"} key={i} border="2px solid white">
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
          {/* Cyber Security Course Highlights */}
          <Box mt="50px" w={{ base: "100%", md: "80%" }}>
            <DigitalMarketingHighlights //
              data={DigitalhighlightsData}
              subTitle={"The Cyber Security course offered by Upskills Nexus is unlike any other course you have ever heard of before. This Cyber Security course in Delhi NCR has specifications that are unlike anything else you are likely to see in the Cyber Security education world.."}
              title={"Cyber Security Training Specification"}
            />
          </Box>

          <Box w="full" py="8" bg="#f4f5f7">
            <CourseInformation //
              keyH="Key Highlights"
              data={courseInfoData}
              title={"Cyber Security Key Highlights"}
              subTitle={"The key highlights of our Cyber Security course can be found below, which make it unique to any other Cyber Security Course in the country.."}
            />
          </Box>

          {/* Best Certification Course on Cyber Security */}
          <Box>
            <DynamicCard //
              onOpen={onOpen}
              bg="#b9292f"
              borderRadius="none"
              button="Enquiry Now"
              title={"Best Certification Course on Cyber Security"}
              text="Best-in-class Cyber Security course content taught by leading faculty and industry leaders in the form of online marketing classes, recorded video lectures, case studies and live projects. Now integrated with Generative AI modules."
            />
          </Box>

          {/* Only Image Slider */}
          {/* <Flex justify={"center"} alignItems={"center"} minH={"250px"} w="85%" bg="#ffff">
          <Box w={{ base: "100%", md: "90%" }} minH={"auto"} py="5">
            <DynamicSlider showPerPage={4} title={"Cyber Security Platforms and Tools"} cards={cards} />
          </Box>
        </Flex> */}

          {/* Cyber Security Course */}
          <Box w="full" bg="#fff" py="8">
            <ChatGPTComponent //
              onOpen={onOpen}
              data={digital_Course}
              title={"Cyber Security Course"}
              subTitle="In our Cyber Security course, we provide agency-based training to beginner and intermediate-level Cyber Security in highly advanced concepts of Cyber Security, so that they can become the most uniquely skilled Cyber Security possible."
            />
          </Box>

          {/* Chapter Highlights */}
          <Box w="full" py="8" bg="#f4f5f7">
            <CourseInformation //
              keyH="Chapters Highlights"
              data={chapterhighlights}
              title={"Chapter Highlights"}
              subTitle={"UpskillNexus Covers 8+ Chapters that you will learn in the Cyber Security Program"}
            />
          </Box>

          {/* Reason to choose Upskill Cyber Security course */}
          <Flex w="full" justify={"center"} bg="#fff" py="8">
            <Box w="90%">
              <DynamicAccordians //
                data={accordianData}
                title="Reasons To Choose UpskillNexus Cyber Security Course"
                subTitle="Welcome to our comprehensive six-month Cybersecurity Training Course, designed to equip aspiring professionals with the knowledge and skills necessary to thrive in the ever-evolving field of cybersecurity. This program covers a wide array of fundamental and advanced topics in cybersecurity, providing a structured learning path for individuals aiming to kickstart their career as cybersecurity analysts."
              />
            </Box>
          </Flex>

          {/* Eligibility Criteria */}
          <Box m="0" w="full">
            <DynamicCard //
              onOpen={onOpen}
              bg="#b9292f"
              borderRadius="none"
              button="Enquiry Now"
              title={"Our Most Popular Cyber Security Courses"}
              text="Explore our top Cyber Security Courses and take the first step towards career success."
            />
          </Box>
          {/*  */}

          {/* CAREER BENEFITS */}
          <Flex w="full" justify={"center"} py="5" bg="#f4f5f7">
            <Box w="90%">
              <CareerBenefits //
                data={careefBenifitData}
                title={"CAREER BENEFITS"}
              />
            </Box>
          </Flex>

          {/* Still have question */}
          <Box w="full">
            <DynamicCard //
              onOpen={onOpen}
              subTitle={""}
              bg="#b9292f"
              borderRadius="none"
              title={"Still have questions? Call @999-095-2299 for answers"}
              button={"Enquiry Now"}
            />
          </Box>

          {/* What's Included in the Price conver into inquery form */}
          <Flex justify={"center"} minH="70vh" width={"100%"} py="8" bg="#f4f5f7">
            <Box w={{ base: "90%", md: "80%" }}>
              <InqueryFrms />
            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default CyberSecurityCourse;
