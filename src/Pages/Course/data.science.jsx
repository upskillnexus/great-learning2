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

const DataScienceCourse = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const topData = {
    title: "Data Science & Machine Learning",
    text: "Learn the concept of Inspecting. Cleansing. Transforming & Modeling using Python with the goal of discovering useful information from Raw Data.",
    logo: [
      {
        img: "https://didm.in/assets/upload/images/Untitled%20design.gif",
        heading: "300+ hrs",
        text: "Training",
      },
      {
        img: "https://didm.in/assets/upload/images/DIDM%20Successfuly%20Batch%20Closed.gif",
        heading: "Python, SQL, Tabaleau etc",
        text: "Tools & Software",
      },
      {
        img: "https://didm.in/assets/upload/images/Career_Transition.gif",
        heading: "100% Placement",
        text: "Assistance",
      },
      {
        img: "https://didm.in/assets/upload/images/DIDM%20Successfuly%20Batch%20Closed.gif",
        heading: "Practical Training",
        text: "Capstone Projects",
      },
    ],
  };

  const accordianData = [
    {
      description: "What are the Prerequisites to become a Data Scientist?",
      text: "There aren't any prerequisites for enrollment to the Masters Program. Whether you're an experienced professional working within the IT industry, or an aspirant reaching to enter the planet of information Scientist, Masters Program is intended and developed to accommodate various professional backgrounds.",
    },
    {
      description: "Why should I learn Data Science?",
      text: "Data Science is surely the skill of the future. It can easily be said that those people who take the first step to learn the precious skill of Data Science today will thrive in the future.",
    },
    {
      description: "What are the various modes of coaching that Upskill Nexus provides?",
      text: "At Upskill Nexus, You'll enroll in either the instructor-led Online Training or Offline (Delhi-NCR) Training.",
    },
    {
      description: "What if I miss a live class?",
      text: "A Capstone Project is a final project that consolidates all of your master’s program learning. this can require you to know a business case and present an answer to resolve all the matter statements mentioned within the project.",
    },
    {
      description: "Do I want to complete the capstone project to get my Master's Certificate?",
      text: "Yes, additionally to the successful completion of all individual courses, you would like to aim and complete the capstone project to receive the certificate for Master’s Program.",
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
      bio: "John DigitalStrategist is a digital marketing guru, bringing cutting-edge strategies to WebSolutions.",
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
    "Solve a range of industry-relevant projects in this online digital marketing course", //
    "Run a 5-day social media marketing campaign, and a 5-day Google Ads campaign to gain hands-on real-world experience of working as a digital marketer",
    "Create digital marketing strategies for different brands such as Mamaearth, Zivame, cult.fit, and more for the multiple case studies in the program",
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
      description: "In this online digital marketing course, you will work on a variety of industry-relevant projects, allowing you to apply theoretical knowledge to real-world scenarios.",
    },
    {
      title: "Run a 5-day social media marketing campaign and Google Ads campaign",
      description: "Gain hands-on real-world experience by running a 5-day social media marketing campaign and a 5-day Google Ads campaign. This practical experience is essential for working as a digital marketer.",
    },
    {
      title: "Create digital marketing strategies for different brands",
      description: "Participate in multiple case studies within the program, where you will develop digital marketing strategies for well-known brands such as Mamaearth, Zivame, cult.fit, and more.",
    },
  ];

  const careefBenifitData = [
    {
      point: "What you will learn?",
      description: "Python, SQL, Statistics, Data Visualization, Data Mining, Predictive Analytics, Machine Learning and Modeling etc",
    },
    {
      point: "Who can Enroll in this Program?",
      description: "Anyone ready to devote their time in learning regardless of any specialization or background such as Engineers, Marketing & Sales Professionals, Fresher’s, Data Professionals, Domain Experts, Software & IT Professionals can opt for this Program.",
    },
    {
      point: "Job Opportunities",
      description: "You can apply Globally as a Data Analyst, Data Scientist, Data Engineer, Product Analyst, Machine Learning Engineer, Business Analyst.",
    },
    {
      point: "Minimum Eligibility",
      description: "Any experience (atleast 0 to 3 years), no coding knowledge required.",
    },
  ];

  const dataScience = [
    {
      heading: "Training Mode",
      text: "Hybrid",
      icon: <MdCheck />,
    },
    {
      heading: "Course Durations",
      text: "11 Months",
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
      text: "05 Specilizations",
      icon: <MdCheck />,
    },
    {
      heading: "Certifications & Exams",
      text: "5+ Certifications",
      icon: <MdCheck />,
    },
  ];

  const courseInfoData = [
    {
      content: "For working professionals / Full-time learners",
    },
    {
      content: "Worldwide Access to various job openings",
    },
    {
      content: "One on One interaction with Industry Mentors",
    },
    {
      content: "300+ Hours of Learning",
    },
    {
      content: "Certificate from Skillshiksha & IBM",
    },
    {
      content: "Over 20+ Case Studies & Capstone Projects",
    },
    {
      content: "Multiple Programming Tools & Languages",
    },
    {
      content: "Doubt Session on equal intervals",
    },
    {
      content: "Lifetime Career Support",
    },
    {
      content: "No Interest EMI Option",
    },
  ];

  const chapterhighlights = [
    {
      content: "Introduction To Data Science & Python",
    },
    {
      content: "SQL Database",
    },
    {
      content: "Data Visualization",
    },
    {
      content: "Statistical Methods For Decision Making (SMDM)",
    },
    {
      content: "Advanced Statistics",
    },
    {
      content: "Data Mining",
    },
    {
      content: "Predictive Modelling",
    },
    {
      content: "Machine Learning",
    },
    {
      content: "Capstone Project",
    },
  ];
  const digital_Course = [
    {
      title: "Data Science",
      arr: ["05 Specilizations", "300+ hrs of Training"],
      // icon: <IoIosAnalytics />,
      icon: <BiLogoGraphql />,
    },
    {
      title: "Tools & Software / LMS",
      arr: ["Python, SQL, Tabaleau etc.", "LMS by Skill Shiksha"],
      icon: <TbSettingsCog />,
    },
    {
      title: "Live Projects Exposure",
      arr: ["Practical Training", "Capstone Projects"],
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
            backgroundImage="url('/course/banner1.jpg')"
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
          {/* Digital Marketing Course Highlights */}
          <Box mt="50px" w={{ base: "100%", md: "80%" }}>
            <DigitalMarketingHighlights
              data={dataScience} //
              subTitle={"The Data Science & Machine Learning course offered by Upskill Nexus is unlike any other course you have ever heard of before. This Data Science & Machine Learning course in Delhi NCR has specifications that are unlike anything else you are likely to see in the Data Science & Machine Learning education world.."}
              title={"Data Science & Machine Learning Training Specification"}
            />
          </Box>

          <Box w="full" py="8" bg="#f4f5f7">
            <CourseInformation //
              keyH="Program Highlights"
              data={courseInfoData}
              title={"Data Science Program Highlights"}
              subTitle={"The key highlights of our Data Science & Machine Learning course can be found below, which make it unique to any other Data Science & Machine Learning Course in the country.."}
            />
          </Box>

          {/* CAREER BENEFITS */}
          <Flex w="full" justify={"center"} py="5" bg="#fff">
            <Box w={{ base: "full", md: "90%" }}>
              <CareerBenefits //
                data={careefBenifitData}
                // title={"CAREER BENEFITS"}
              />
            </Box>
          </Flex>

          {/* Best Certification Course on Data Science & Machine Learning */}
          <Box w={{ base: "95%", md: "full" }}>
            <DynamicCard
              onOpen={onOpen}
              bg="#b9292f" //
              borderRadius="none"
              button="Enquiry Now"
              title={"Best Certification Course on Data Science & Machine Learning"}
              text="Best-in-class content by leading faculty & industry experts in the form of industry projects, assignments & live sessions."
            />
          </Box>

          {/* Data Science & Machine Learning Course */}
          <Box w="full" bg="#fff" py="8">
            <ChatGPTComponent //
              onOpen={onOpen}
              data={digital_Course}
              title={"Data Science & Machine Learning Course"}
              subTitle="Become a Data Scientist or Business Analyst. Learn Core Python, SQL, Tableau, Machine Learning, Predective Modeling and more from industry leaders and top faculty. Practical based traning. Hands on applied Learning. Many Batches Launched. Top Faculty. 1000+ Career Transitions."
            />
          </Box>

          {/* Chapter Highlights */}
          <Box w="full" py="8" bg="#f4f5f7">
            <CourseInformation //
              keyH="Course Curriculum"
              data={chapterhighlights}
              title={"Our Course Curriculum"}
              subTitle={"Here is our Data Science & Machine Learning Course curriculum. Our course will walk you through all the essential topics in Data Science step by step so you can absorb each lesson without any hassle. Industry Relevant Curriculum, Top Faculty, Network with Domain Experts, Hands on Learning. Learn Python, SQL, Tableau and more from Industry Leaders and Top Faculty."}
            />
          </Box>

          {/* Become A Data Science Expert */}
          <Box m="0" w={{ base: "95%", md: "full" }}>
            <DynamicCard //
              onOpen={onOpen}
              bg="#b9292f"
              borderRadius="none"
              button="Enquiry Now"
              title={"Become a Data Science Expert"}
              text="Earn a verified Certificate after the completion of the Course covering the
              entire Data Science workflow. Novice or Expert, You'll gain vast
              knowledge in Data Manipulation, Data Visualization, Statistics, Machine Learning, and more."
            />
          </Box>
          {/*  */}

          {/* Language & Tools */}
          <Flex w="full" justify={"center"} bg="#fff" py="8">
            <Flex gap="3" align="center" flexDir={"column"} w="90%" border="2px solid none">
              <Heading color="#b9292f">Language & Tools</Heading>
              <Image w={{ base: "full", md: "80%" }} src="/course/language-tool.jpg" />
            </Flex>
          </Flex>

          {/* Data Science FAQ's */}
          <Flex w="full" justify={"center"} bg="#f4f5f7" py="8">
            <Box w={{ base: "95%", md: "90%" }}>
              <DynamicAccordians //
                data={accordianData}
                title="Data Science FAQ's"
                // subTitle="Below are some reasons why you should choose our Data Science & Machine Learning course."
              />
            </Box>
          </Flex>

          {/*  */}

          {/* Still have question */}
          <Box w={{ base: "95%", md: "full" }}>
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
              {/* <PriceBoxComponent data={featuresBenefitsData} /> */}

              <InqueryFrms />
            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default DataScienceCourse;
