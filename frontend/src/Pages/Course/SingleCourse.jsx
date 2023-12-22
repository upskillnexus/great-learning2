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
} from "@chakra-ui/react";
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
import { FAQ } from "../Home/FAQ";

const SingleCourse = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const accordianData = [
    {
      description:
        "You will get real-world experience in digital marketing by working with esteemed digital marketing agency professionals.",
      text: "We have collaborated with the top-notch digital marketing agencies in our country for our ‘Digital Marketing Science’ course so that the highly knowledgeable and esteemed digital marketing professionals working in these agencies could help our students learn real-world digital marketing concepts. These agencies have been chosen for their expertise and experience in the field. The agency professionals who will be teaching you this course are the ones who work for the most reputable Indian and foreign brands. They deliver consistent results for them on a daily basis.",
    },
    {
      description:
        "You will have the opportunity to get your hands on the latest tools and technologies in digital marketing, as well as those that will be most relevant in the future.",
      text: "At UpskillNexus digital marketing science course, you'll learn the latest digital marketing tools, technologies, and strategies. The agency professionals who will serve you as your trainers will show you how to effectively use these tools to reach your target audience and find success in your digital marketing efforts. You'll learn how to use the latest trends to maximize your impact and stay ahead of the competition. You'll also be taught how to measure and analyze your results, so that you can make adjustments as needed. Finally, you will be given an overview of the digital marketing landscape and how it is likely to evolve in the future, so that you can stay on top of the trends.",
    },
    {
      description: "You will work on client projects of established digital marketing agencies.",
      text: "As you know, those who will be teaching you in this course are esteemed digital marketing agency professionals. Not only will you gain valuable knowledge and insight from these experts, but you will also have the opportunity to participate in real-world projects. These projects will involve working with clients of the digital marketing agency, giving you a chance to apply your skills in a professional environment. This is an excellent opportunity for you to network, hone your digital marketing skills, and gain experience in the field.",
    },
    {
      description:
        "For every individual chapter of the course, you will learn from a specific 'specialized' trainer.",
      text: "At DIDM, we understand that every digital marketer has a different specialty, and that is why in our digital marketing science course, each individual chapter will be taught by a different trainer who has specialized skills in that field. This means that each student will benefit from the expertise of a wide range of professionals and gain a comprehensive understanding of digital marketing. From performance marketing to programmatic advertising, the digital marketing agency professionals who we have appointed as trainers will ensure that every student gets a well-rounded education in the field. With this unique approach, we are confident that our trainees will be equipped with the necessary skills and knowledge to succeed in the digital marketing industry.",
    },
    {
      description: "Any of the agencies your trainers work for can hire you.",
      text: "One of the most special aspects of our digital marketing science course is that it affords students the opportunity to network with experienced professionals in the field. Our trainers are all industry veterans, and they bring a wealth of knowledge and experience to our classes. They also maintain close relationships with many digital marketing agencies, which can provide our students with valuable connections and potential job opportunities. In fact, there is a higher chance that our students will be hired by one of their trainers' agencies to work in their digital marketing department.",
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
    {
      img: "https://www.upgrad.com/_next/image/?url=https%3A%2F%2Fik.imagekit.io%2Fupgrad1%2Fmarketing-platform-assets%2Fsprites%252Fimages%2FAdsManager_240X80_Color__1610623223234.png&w=256&q=75",
    },
    {
      img: "https://www.upgrad.com/_next/image/?url=https%3A%2F%2Fik.imagekit.io%2Fupgrad1%2Fmarketing-platform-assets%2Fsprites%252Fimages%2Ftwitter_ana_240X80__1610979088970.png&w=256&q=75",
    },
    {
      img: "https://www.upgrad.com/_next/image/?url=https%3A%2F%2Fik.imagekit.io%2Fupgrad1%2Fmarketing-platform-assets%2Fsprites%252Fimages%2Fbuzzsumo.png&w=256&q=75",
    }, //
    {
      img: "https://www.upgrad.com/_next/image/?url=https%3A%2F%2Fik.imagekit.io%2Fupgrad1%2Fmarketing-platform-assets%2Fsprites%252Fimages%2FAnsThePublic_240X80Color_With_BG__1610717179771.png&w=256&q=75",
    },
    {
      img: "https://www.upgrad.com/_next/image/?url=https%3A%2F%2Fik.imagekit.io%2Fupgrad1%2Fmarketing-platform-assets%2Fsprites%252Fimages%2FGTrends_240X80_Color_With_BG__1610717386040.png&w=256&q=75",
    },
    {
      img: "https://www.upgrad.com/_next/image/?url=https%3A%2F%2Fik.imagekit.io%2Fupgrad1%2Fmarketing-platform-assets%2Fsprites%252Fimages%2FSpyFu_240X80_BW_With_BG__1610721544937.png&w=256&q=75",
    },
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
      logoSrc:
        "https://www.upgrad.com/_next/image/?url=https%3A%2F%2Fik.imagekit.io%2Fupgrad1%2Fmarketing-platform-assets%2Fsprites%252Fimages%2FTransition_1__1680530410305.png&w=16&q=75",
      percentage: "300%",
      title: "Maximum Salary Hike",
    },
    {
      logoSrc:
        "https://www.upgrad.com/_next/image/?url=https%3A%2F%2Fik.imagekit.io%2Fupgrad1%2Fmarketing-platform-assets%2Fsprites%252Fimages%2FTransition_1__1680530410305.png&w=16&q=75",
      percentage: "36%",
      title: "Average Salary Hike",
    },
    {
      logoSrc:
        "https://www.upgrad.com/_next/image/?url=https%3A%2F%2Fik.imagekit.io%2Fupgrad1%2Fmarketing-platform-assets%2Fsprites%252Fimages%2FTransition_1__1680530410305.png&w=16&q=75",
      percentage: "300+",
      title: "Hiring Partners",
    },
  ];

  const creativityProjectsData = [
    {
      title: "Solve a range of industry-relevant projects",
      description:
        "In this online digital marketing course, you will work on a variety of industry-relevant projects, allowing you to apply theoretical knowledge to real-world scenarios.",
    },
    {
      title: "Run a 5-day social media marketing campaign and Google Ads campaign",
      description:
        "Gain hands-on real-world experience by running a 5-day social media marketing campaign and a 5-day Google Ads campaign. This practical experience is essential for working as a digital marketer.",
    },
    {
      title: "Create digital marketing strategies for different brands",
      description:
        "Participate in multiple case studies within the program, where you will develop digital marketing strategies for well-known brands such as Mamaearth, Zivame, cult.fit, and more.",
    },
  ];

  const topData = {
    title: "Digital Marketing Science Training Program in Delhi NCR",
    text: "Anyone who takes the DIDM Digital Marketing Science Course will be able to learn about the complete science of digital marketing..",
    logo: [
      {
        img: "https://didm.in/assets/upload/images/Untitled%20design.gif",
        heading: "Agency-Based",
        text: "Training",
      },
      {
        img: "https://didm.in/assets/upload/images/DIDM%20Successfuly%20Batch%20Closed.gif",
        heading: "Most Current & Updated Chapters on",
        text: "Digital Marketing",
      },
      {
        img: "https://didm.in/assets/upload/images/Career_Transition.gif",
        heading: "100% Placement",
        text: "Guarantee",
      },
      {
        img: "https://didm.in/assets/upload/images/Placement_Partners.gif",
        heading: "Partner with Reputable Agencies on their",
        text: "Client Projects",
      },
    ],
  };

  const careefBenifitData = [
    {
      point: "Career Advancement:",
      description:
        "By completing our 'Digital Marketing Science' course, participants will be able to acquire more challenging roles and responsibilities in their current jobs or advance in their careers.",
    },
    {
      point: "Enhanced Creativity:",
      description:
        "To stay ahead of the competition in digital marketing, participants attending the 'Digital Marketing Science' course will learn how to be more creative and innovative in their approach.",
    },
    {
      point: "Increased Job Opportunities:",
      description:
        "In the ever-growing field of digital marketing, completing our 'Digital Marketing Science' course can open up a whole new world of career opportunities for participants.",
    },
    {
      point: "Networking Opportunities:",
      description:
        "The 'Digital Marketing Science' course will also provide participants with the opportunity to network with other industry professionals, which can lead to new job opportunities and business collaborations.",
    },
    {
      point: "Great Earning Potential:",
      description:
        "Participants who have completed the 'Digital Marketing Science' course can negotiate higher salaries and better job benefits due to their updated skills and knowledge of digital marketing.",
    },
  ];

  const DigitalhighlightsData = [
    {
      heading: "Training Mode",
      text: "Hybrid",
      icon: <MdCheck />,
    },
    {
      heading: "Course Durations",
      text: "3 | 5 Months",
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
      text: "Agency Projects",
      icon: <MdCheck />,
    },
    {
      heading: "Certifications & Exams",
      text: "10+ Certifications",
      icon: <MdCheck />,
    },
  ];

  const courseInfoData = [
    {
      content:
        "Course created by professionals who work for some of the country's most reputable digital marketing agencies.",
    },
    {
      content: "Work on LIVE projects of agency clients and deliver results.",
    },
    {
      content:
        "Stand out from other digital marketers by learning the newest concepts of digital marketing.",
    },
    {
      content: "Get introduced to the latest digital marketing tools and technologies.",
    },
    {
      content: "Get hired by the country’s most established Digital Marketing Agencies.",
    },
    {
      content:
        "Learn every individual chapter of the course from a specific ‘specialized’ trainer.",
    },
  ];

  const chapterhighlights = [
    {
      content: "Chapter 1. Digital Marketing Planning & Strategy",
    },
    {
      content: "Chapter 2. Magnet Marketing",
    },
    {
      content: "Chapter 3. Performance Marketing",
    },
    {
      content: "Chapter 4. Funnel Marketing",
    },
    {
      content: "Chapter 5. Product Marketing",
    },
    {
      content: "Chapter 6. Media Buying",
    },
    {
      content: "Chapter 7. Analytical Strategy",
    },
    {
      content: "Chapter 8. Start Up Marketing",
    },
    {
      content: "Chapter 9. Programmatic Advertisement",
    },
    {
      content: "Chapter 10. Target Marketing",
    },
    {
      content: "Chapter 11. Organic Marketing",
    },
    {
      content: "Chapter 12. Get Hired",
    },
  ];
  const digital_Course = [
    {
      title: "Digital Marketing Course",
      arr: ["10+ Chapters", "100+ Hrs of Training"],
      icon: <IoIosAnalytics />,
    },
    {
      title: "Special Session",
      arr: ["Doubt-Clearing Sessions", "Personalized Sessions"],
      icon: <BiLogoGraphql />,
    },
    {
      title: "Tools & Software / LMS",
      arr: ["Latest Tools & Softwares Support", "LMS by Skill Shiksha"],
      icon: <TbSettingsCog />,
    },
    {
      title: "Live Projects Exposure",
      arr: ["Agency Clients Projects", "Result-Driven Approach"],
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
            backgroundImage="url('https://ik.imagekit.io/upgrad1/marketing-platform-assets/new-images%2Fprogram-backgrounds%2Funiversity/mica__1692276174998.png')"
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
          >
            <Flex
              position={"relative"}
              minH={"20vh"}
              maxW={{ base: "100%", md: "90%" }}
              mx="auto"
              py="40px"
              px="20px"
              direction={{ base: "column", md: "column" }}
              align={{ base: "center", md: "start" }}
            >
              <Box
                flex="1"
                border="1px solid none"
                maxW={{ base: "100%", md: "50%" }}
                color="white"
                ml={{ base: "0", md: "20px" }}
              >
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
          {/* Digital Marketing Course Highlights */}
          <Box mt="50px" w={{ base: "100%", md: "80%" }}>
            <DigitalMarketingHighlights
              data={DigitalhighlightsData}
              subTitle={
                "The Digital Marketing Science course offered by DIDM is unlike any other course you have ever heard of before. This digital marketing course in Delhi NCR has specifications that are unlike anything else you are likely to see in the digital marketing education world.."
              }
              title={"Digital Marketing Science Training Specification"}
            />
          </Box>

          <Box w="full" py="8" bg="#f4f5f7">
            <CourseInformation
              keyH="Key Highlights"
              data={courseInfoData}
              title={"Digital Marketing Science Key Highlights"}
              subTitle={
                "The key highlights of our Digital Marketing Science course can be found below, which make it unique to any other Digital Marketing Course in the country.."
              }
            />
          </Box>

          {/* Best Certification Course on Digital Marketing */}
          <Box>
            <DynamicCard
              onOpen={onOpen}
              bg="#b9292f"
              borderRadius="none"
              button="Enquiry Now"
              title={"Best Certification Course on Digital Marketing"}
              text="Best-in-class digital marketing course content taught by leading faculty and industry leaders in the form of online marketing classes, recorded video lectures, case studies and live projects. Now integrated with Generative AI modules."
            />
          </Box>

          {/* Only Image Slider */}
          {/* <Flex justify={"center"} alignItems={"center"} minH={"250px"} w="85%" bg="#ffff">
          <Box w={{ base: "100%", md: "90%" }} minH={"auto"} py="5">
            <DynamicSlider showPerPage={4} title={"Digital Marketing Platforms and Tools"} cards={cards} />
          </Box>
        </Flex> */}

          {/* Digital Marketing Science Course */}
          <Box w="full" bg="#fff" py="8">
            <ChatGPTComponent
              onOpen={onOpen}
              data={digital_Course}
              title={"Digital Marketing Science Course"}
              subTitle="In our digital marketing science course, we provide agency-based training to beginner and intermediate-level digital marketers in highly advanced concepts of digital marketing, so that they can become the most uniquely skilled digital marketers possible."
            />
          </Box>

          {/* Chapter Highlights */}
          <Box w="full" py="8" bg="#f4f5f7">
            <CourseInformation
              keyH="Chapters Highlights"
              data={chapterhighlights}
              title={"Chapter Highlights"}
              subTitle={
                "UpskillNexus Covers 10+ Chapters that you will learn in the Digital Marketing Science Program"
              }
            />
          </Box>

          {/* Reason to choose Upskill Digital Marketing science course */}
          <Flex w="full" justify={"center"} bg="#fff" py="8">
            <Box w="90%">
              <DynamicAccordians
                data={accordianData}
                title="Reasons To Choose UpskillNexus Digital Marketing Science Course"
                subTitle="Below are some reasons why you should choose our digital marketing science course."
              />
            </Box>
          </Flex>

          {/* Eligibility Criteria */}
          <Box m="0" w="full">
            <DynamicCard
              onOpen={onOpen}
              bg="#b9292f"
              borderRadius="none"
              button="Enquiry Now"
              title={"Eligibility Criteria"}
              text="The eligibility criteria for DIDM’s digital marketing science course is, the applicant must have at least one year of experience working in a digital marketing role."
            />
          </Box>
          {/*  */}

          {/* CAREER BENEFITS */}
          <Flex w="full" justify={"center"} py="5" bg="#f4f5f7">
            <Box w="90%">
              <CareerBenefits data={careefBenifitData} title={"CAREER BENEFITS"} />
            </Box>
          </Flex>

          {/* Still have question */}
          <Box w="full">
            <DynamicCard
              onOpen={onOpen}
              subTitle={""}
              bg="#b9292f"
              borderRadius="none"
              title={"Still have questions? Call @999-095-2299 for answers"}
              button={"Enquiry Now"}
            />
          </Box>

          {/* Explore our Learning Platform */}
          {/* <Box>
          <CardWithImg title="Explore our Learning Platform" button={"Explore Now"} img="/professional.jpg" text="Learn on an AI-powered & personalised platform with best-in-class content, live sessions & mentoring from leading industry experts." />
        </Box> */}
          {/*  */}

          {/* MICA Digital Marketing Course Instructors */}
          {/* <Flex justify={"center"} w="full" mt="0" bg="#f4f5f7">
          <Box w={{ base: "85%", md: "90%" }} px={{ base: "10px", md: "0" }} height={"auto"} py="50px">
            <DynamicTesti cards={speakersData} showPerPage={3} title="MICA Digital Marketing Course Instructors" subTitle="Learn from India’s top Digital Marketing faculty and industry leaders" />
          </Box>
        </Flex> */}

          {/* Program course fee */}
          {/* <Flex w="full" justify={"center"} py="5">
          <Box w="90%">
            <Reason_to_Join />
          </Box>
        </Flex> */}

          {/* Training Blogs */}
          {/* <Flex w="full" justify={"center"} py="5">
          <Box w="90%">
            <TrendingBlogs />
          </Box>
        </Flex> */}

          {/* MICA’s Digital Marketing Course Syllabus */}
          {/* <Flex justify={"center"}>
          <Box w={{ base: "100%", md: "80%" }}>
            <SyllabusComponent />
          </Box>
        </Flex> */}

          {/* Career Outcomes */}
          {/* <Flex justify={"center"} width={"100%"} bg="#f4f5f7">
          <Box width={"80%"}>
            <CareerOutcomesComponent cardData={cardData} title="Career Outcomes" subTitle="A quick summary of the placement support recieved by this program's alumni" />

            <Flex borderWidth={"1"} p="3" shadow={"0 0 5px #cccc"} rounded={"md"} height="280px" justifyContent={"end"} flexDir={"column"} background={"url(https://ik.imagekit.io/upgrad1/marketing-platform-assets/sprites%2Fimages/dWeb_Chart__1671013409789.svg)"} style={{ backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }} alignItems={"center"} mb="4">
              <Text fontSize="lg">To view more details, download our career transition report</Text>
              <Button bg="#e95454" color="white" size="lg" _hover={{ bg: "#e95454e8", color: "white" }}>
                Download Careers Report
              </Button>
            </Flex>
          </Box>
        </Flex> */}

          {/* Unleashing Creativity: Projects in this Digital Marketing Course */}
          {/* <Flex justify={"center"} flexDir={"column"} align={"center"} width={"100%"}>
          <Box width={{ base: "85%", md: "80%" }} py="50px">
            <CreativityProjects
              title="Unleashing Creativity: Projects in this Digital Marketing Course" //
              list={list1}
            />
            <DynamicLearMoreSlider showPerPage={3} cards={speakersData} />
          </Box>
        </Flex> */}

          {/* Unleashing Creativity: Projects in this Digital Marketing Course */}
          {/* <Flex justify={"center"} flexDir={"column"} align={"center"} width={"100%"} bg="#f4f5f7">
          <Box width={{ base: "85%", md: "80%" }} py="50px">
            <CreativityProjects
              title="Unleashing Creativity: Projects in this Digital Marketing Course" //
              list={list2}
            />
            <DynamicLearMoreSlider showPerPage={3} cards={speakersData} />
            <Box mt="8" shadow={"0 0 3px #cccc"} p="5" w={{ base: "90%", md: "80%" }} bg="#fff" rounded={"md"} ml="3">
              <Heading fontWeight={"medium"} size="md">
                Note
              </Heading>
              <Text>This is a non-exhaustive list. There are several additional projects included in this hands-on course giving you a real world exposure to digital marketing. To know more, please download the brochure or speak to an admission counselor.</Text>
            </Box>
          </Box>
        </Flex> */}

          {/* Admission Process */}
          {/* <Flex justify={"center"} flexDir={"column"} align={"center"} width={"100%"} py="10" gap="5">
          <Box width={"80%"}>
            <CreativityProjects
              title="Admission Process" //
              subTitle={"Please find below the detailed steps to be followed as a part of the admission process."}
              // list={list1}
            />
            <DynamicLearMoreSlider showPerPage={3} cards={speakersData} />
          </Box>
          <Button bg="#b9292f" color="white" fontSize={"sm"} rounded={"md"} _hover={{ bg: "#b9292e89", color: "white" }}>
            Apply Now
          </Button>
        </Flex> */}

          {/* Career Impact  */}
          {/* <Flex justify={"center"} minH="30vh" width={"100%"} py="8" bg="#f4f5f7">
          <Box width={"80%"}>
            <CareerOutcomesComponent color="black" button="CAREER TRANSITION HANDBOOK" cardData={cardData} title="Career Impact" subTitle="Learn more about successful career transitions in this program" />
            <Grid templateColumns={{ base: "repeat(1,1fr)", md: "repeat(3, 1fr)" }} p="0px" w="100%" position="relative" gap="20px" align="center">
              {creativityProjectsData?.map((ele, i) => (
                <Flex bg="#fff" p="4" shadow={"0 0 4px #cccc"} rounded={"md"} w="full" key={i} direction="column" minH="300px" align="center">
                  <Heading fontSize="18px">{ele.title}</Heading>
                  <Text fontSize="lg">{ele.description}</Text>
                  <Button color="#b9292f" bg="transparent" fontSize={"sm"} rounded={"full"}>
                    Learn More
                  </Button>
                </Flex>
              ))}
            </Grid>
          </Box>
        </Flex> */}

          {/* What's Included in the Price conver into inquery form */}
          <Flex justify={"center"} minH="70vh" width={"100%"} py="8" bg="#f4f5f7">
            <Box w={{ base: "90%", md: "80%" }}>
              {/* <PriceBoxComponent data={featuresBenefitsData} /> */}

              <InqueryFrms />
            </Box>
          </Flex>

          {/* Company Logos */}
          {/* <Flex justify={"center"} alignItems={"center"} minH={"250px"} w="full" bg="#ffff">
          <Box w="80%" minH={"auto"} py="5">
            <DynamicSlider showPerPage={4} title={"Digital Marketing Platforms and Tools"} cards={cards} />
          </Box>
        </Flex> */}

          {/* Refer someone and Earn upto INR 50,000 */}
          {/* <Flex justify={"center"} alignItems={"center"} minH={"250px"} w="full" py="10" bg="#f4f5f7">
          <Box w="80%" minH={"auto"}>
            <ReferAndEarnComponent />
          </Box>
        </Flex> */}
          {/*  */}

          <Flex justify={"center"} minH="70vh" py="8">
            <FAQ />
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default SingleCourse;
