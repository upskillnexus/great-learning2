import React from "react";
import { Box, Heading, Text, Flex, Button, Image, Center, Grid } from "@chakra-ui/react";
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
import InqueryFrms from "../../Components/Forms/InqueryFrms";

const DataScienceCourse = () => {
  const topData = {
    title: "Data / Business Analytics Certificate Program",
    text: "Learn the concept of Inspecting, Cleansing, Transforming & Modeling using Python with the goal of discovering useful information from Raw Data.",
    logo: [
      {
        img: "https://www.shutterstock.com/image-vector/hours-time-duration-clock-vector-260nw-1641609259.jpg",
        heading: "05 Months Duration",
      },
      {
        img: "https://static.vecteezy.com/system/resources/thumbnails/002/197/571/small/lamp-idea-tekhnology-ilustration-abstract-logo-design-free-vector.jpg",
        heading: "Capstone Projects",
      },
      {
        img: "https://didm.in/assets/upload/images/Career_Transition.gif",
        heading: "02+ Certifications",
      },
    ],
  };

  const accordianData = [
    {
      description: "Preparatory Course",
      text: "* Introduction to Business Analytics , * Why Business Analytics",
    },
    {
      description: "Python For Business Analytics",
      text: "* Introduction to Python , * \n Features of Python , * \n Operators in Python , * \n Data Types in Python , * \n Flow Chart , * \n Data Manipulation , * \n Data Exploration , * \n EDA",
    },
    {
      description: "Database",
      text: "* \n What is Database & DBMS , * \n Structured Query Language , * \n MySQL & MySQL Workbench , * \n Entity Relationship Diagram , * \n Normalization , * \n SQL Operations & Commands",
    },
    {
      description: "Statistics",
      text: "* \n Category of Data , * \n What is Statistics , * \n Types of Statistics",
    },
    {
      description: "Data Visualization",
      text: "* \n Data Visualization in Tableau , * \n Dashboard Creation & Reporting",
    },
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

  const careefBenifitData = [
    {
      point: "Career Advancement:",
      description: "By completing our 'Digital Marketing Science' course, participants will be able to acquire more challenging roles and responsibilities in their current jobs or advance in their careers.",
    },
    {
      point: "Enhanced Creativity:",
      description: "To stay ahead of the competition in digital marketing, participants attending the 'Digital Marketing Science' course will learn how to be more creative and innovative in their approach.",
    },
    {
      point: "Increased Job Opportunities:",
      description: "In the ever-growing field of digital marketing, completing our 'Digital Marketing Science' course can open up a whole new world of career opportunities for participants.",
    },
    {
      point: "Networking Opportunities:",
      description: "The 'Digital Marketing Science' course will also provide participants with the opportunity to network with other industry professionals, which can lead to new job opportunities and business collaborations.",
    },
    {
      point: "Great Earning Potential:",
      description: "Participants who have completed the 'Digital Marketing Science' course can negotiate higher salaries and better job benefits due to their updated skills and knowledge of digital marketing.",
    },
  ];

  const DigitalhighlightsData = [
    {
      text: "Programmers or Non-Programmers determined to learn to program.",
      icon: <MdCheck />,
    },
    {
      text: "Possessing excellent Analytical Skills.",
      icon: <MdCheck />,
    },
    {
      text: "Passionate problem solver.",
      icon: <MdCheck />,
    },
    {
      text: "Ready to devote 30 hrs/Month for 04 Months of Training.",
      icon: <MdCheck />,
    },
  ];

  const courseInfoData = [
    {
      content: "Designed for working professional",
    },
    {
      content: "Worldwide Access to various job openings",
    },
    {
      content: "One on One interaction with Industry Mentors ",
    },
    {
      content: "150+ Hours of Learning",
    },
    {
      content: "Certificate from Skillshiksha and IBM",
    },
    {
      content: "Over 10+ Case Studies & Capstone Projects",
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
  //
  const digital_Course = [
    {
      title: "Data / Business Analytics",
      arr: ["02 Specilizations", "100+ hrs Training"],
    },
    {
      title: "Tools & Software / LMS",
      arr: ["Multiple Tools", "LMS by Skill Shiksha"],
    },
    {
      title: "Live Projects Exposure",
      arr: ["Practical Training", "Capstone Projects"],
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
          <Flex position={"relative"} minH={"20vh"} maxW={{ base: "100%", md: "90%" }} mx="auto" py="40px" px="20px" direction={{ base: "column", md: "column" }} align={{ base: "center", md: "start" }}>
            <Box flex="1" border="1px solid none" maxW={{ base: "100%", md: "50%" }} color="white" ml={{ base: "0", md: "20px" }}>
              <Heading fontSize="40px" fontWeight={"500"} color="#fff">
                {topData?.title}
              </Heading>
              <Text fontSize="md" color="#fff">
                {topData?.text}
              </Text>

              <Flex mt="20px">
                <Button bg="#e95454" color="white" mr="10px">
                  Apply Now
                </Button>
                <Button variant="outline" borderColor="#e95454" color="#e95454">
                  Download
                </Button>
              </Flex>
              <Flex mt="40px" justify="start" gap="4">
                {topData?.logo?.map((ele, i) => (
                  <Flex w="150px" rounded={"md"} bg="white" p="2" textAlign={"center"} justify={"center"} flexDir={"column"} align={"center"} key={i} border="2px solid white">
                    <Image src={ele?.img} objectFit={"cover"} alt="Company 1" boxSize="50px" mx="10px" />
                    <Heading fontSize={"12px"} color="black">
                      {ele?.heading}
                    </Heading>
                    <Text color="black" fontSize={"12px"}>
                      {ele?.text}
                    </Text>
                  </Flex>
                ))}
              </Flex>
            </Box>
          </Flex>
        </Box>

        {/* Business Analytics Course */}
        <Box w="full">
          <DynamicCard bg="#b9292f" borderRadius="none" text={"Business Analytics Course"} title="India's Most Demanding ANALYTICS Program" />
        </Box>

        {/* Digital Marketing Course Highlights */}
        <Box mt="50px" w={{ base: "100%", md: "80%" }}>
          <DigitalMarketingHighlights data={DigitalhighlightsData} title={"Apply to learn Business Analytics?"} subTitle={"Anyone can opt for the Course whether Student or an Experienced Professional if you can fulfil the below conditions you can become Business Analytics."} />
        </Box>

        {/* Digital Marketing Science Key Highlights */}
        <Box w="full" py="8" bg="#f4f5f7">
          <CourseInformation data={courseInfoData} title={"Data Science"} subTitle={"-----Major Highlights-----"} />
        </Box>

        {/* Only Image Slider */}
        {/* <Flex justify={"center"} alignItems={"center"} minH={"250px"} w="85%" bg="#ffff">
          <Box w={{ base: "100%", md: "90%" }} minH={"auto"} py="5">
            <DynamicSlider showPerPage={4} title={"Digital Marketing Platforms and Tools"} cards={cards} />
          </Box>
        </Flex> */}

        {/* Business Analytics */}
        <Box w="full" bg="#f4f5f7" py="8">
          <ChatGPTComponent
            data={digital_Course}
            title={"Business Analytics"}
            subTitle="Become a Certified Business Analyst with Learning Python, SQL, Tableau, Statistics and more from industry leaders and top faculty. Practical based
                      Traning. Hands on applied Learning. Many Batches Launched. Top Faculty. 1000+ Career Transitions."
          />
        </Box>

        {/* Reason to choose didm's Digital Marketing science course */}
        <Flex w="full" justify={"center"} bg="#fff" py="8">
          <Box w="90%">
            <DynamicAccordians data={accordianData} title="Business Analytics Course Curriculum" subTitle="Industry Relevant Curriculum, Top Faculty, Network with Domain Experts, Hands on Learning. Learn Python, SQL, Tableau and more from Industry Leaders and Top Faculty." />
          </Box>
        </Flex>

        <Box w="full">
          <DynamicCard subTitle={""} bg="#b9292f" borderRadius="none" title={"Still have questions? Call @8800-50-5151 for answers"} button={"Download Brochure"} />
        </Box>

        {/* CAREER BENEFITS */}
        <Flex w="full" justify={"center"} py="5">
          <Box w="90%">
            <CareerBenefits data={careefBenifitData} title={"CAREER BENEFITS"} />
          </Box>
        </Flex>

        {/* MICA Digital Marketing Course Instructors */}
        <Flex justify={"center"} w="full" mt="0" bg="#f4f5f7">
          <Box w={{ base: "85%", md: "90%" }} px={{ base: "10px", md: "0" }} height={"auto"} py="50px">
            <DynamicTesti cards={speakersData} showPerPage={3} title="MICA Digital Marketing Course Instructors" subTitle="Learn from India’s top Digital Marketing faculty and industry leaders" />
          </Box>
        </Flex>

        {/* Reason to join */}
        <Flex w="full" justify={"center"} py="5">
          <Box w="90%">
            <Reason_to_Join />
          </Box>
        </Flex>

        {/* What's Included in the Price conver into inquery form */}
        <Flex justify={"center"} minH="70vh" width={"100%"} py="8" bg="#f4f5f7">
          <Box w={{ base: "90%", md: "80%" }}>
            {/* <PriceBoxComponent data={featuresBenefitsData} /> */}
            <InqueryFrms />
          </Box>
        </Flex>

        {/* Company Logos */}
        <Flex justify={"center"} alignItems={"center"} minH={"250px"} w="full" bg="#ffff">
          <Box w="80%" minH={"auto"} py="5">
            <DynamicSlider showPerPage={4} title={"Digital Marketing Platforms and Tools"} cards={cards} />
          </Box>
        </Flex>

        {/* Refer someone and Earn upto INR 50,000 */}
        <Flex justify={"center"} alignItems={"center"} minH={"250px"} w="full" py="10" bg="#f4f5f7">
          <Box w="80%" minH={"auto"}>
            <ReferAndEarnComponent />
          </Box>
        </Flex>
        {/*  */}
      </Flex>
    </Box>
  );
};

export default DataScienceCourse;

{
  /* <CgLivePhoto /> */
}
{
  /* <TbSettingsCog /> */
}
{
  /* <BiLogoGraphql /> */
}
{
  /* <IoIosAnalytics /> */
}
