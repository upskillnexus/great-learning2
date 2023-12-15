import "./course.css";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Button, Grid, Image, Text, Badge, calc, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Input, ModalFooter, useDisclosure } from "@chakra-ui/react";
import $ from "jquery";
import { BsClipboard2Data, BsClipboardData, BsFilter } from "react-icons/bs";
import { MdDownload, MdSecurity } from "react-icons/md";

import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { hoverStyle } from "../../style/button.style";
import { DynamicModal } from "../../Components/Modal/DynamicModal";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { InquiryModal } from "../../Components/Modal/InquiryModal";

const hoverEff = {
  background: "#dfdfdf",
  color: "white",
  cursor: "pointer",
};

const Courses = () => {
  const [activeMen, setActiveMen] = useState("dataScience");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [path, setPath] = useState("/data-science");

  const dataScience = [
    {
      id: "1",
      image: "/course/data-science.png",
      programName: "Master In Data Science ",
      para: "Become a Data Scientist or Business Analyst. Learn Core Python, SQL, Tableau, Machine Learning, Predective Modeling and more from industry leaders and top faculty. Practical based traning.",
      duration: "11 Months • Online / Offline",

      badge: "DEDICATED CAREER SUPPORT",
      link: "data-science",
    },
    {
      id: "2",
      image: "/course/digital-marketing.png",
      name: "katill",
      programName: "Digital Marketing Science ",
      para: "Anyone who takes the Digital Marketing Science Course will be able to learn about the complete science of digital marketing..",
      duration: "3 Months • Offline (In-Class Training)",

      badge: "DEDICATED CAREER SUPPORT",
      link: "digital-marketing-science",
    },
    {
      id: "3",
      image: "/course/cyber1.png",
      name: "katill",
      programName: "Mastering Cybersecurity Essentials",
      para: "Cybersecurity is a rapidly growing field that uses technology and processes to protect computer systems and data from online attacks. Cybersecurity courses equip students with the knowledge and skills necessary to thrive in this critical domain.",
      duration: "12 Months • Offline (In-Class Training)",
      badge: "DEDICATED CAREER SUPPORT",
      link: "cyber-security",
    },
    // {
    //   id: "1",
    //   image: "/course/business.png",
    //   programName: "Business Analytics Course",
    //   para: "Become a Certified Business Analyst with Learning Python, SQL, Tableau, Statistics and more from industry leaders and top faculty. Practical based Traning. Hands on applied Learning. Many Batches Launched.",
    //   duration: "5 Months Training • Offline",
    //   badge: "DEDICATED CAREER SUPPORT",
    //   link: "data-science",
    // },
  ];

  const digitalMarket = [
    {
      id: "2",
      image: "/course/digital-marketing.png",
      name: "katill",
      programName: "Digital Marketing Science",
      para: "Anyone who takes the Digital Marketing Science Course will be able to learn about the complete science of digital marketing..",
      duration: "3 Months • Offline",
      badge: "DEDICATED CAREER SUPPORT",
      link: "digital-marketing-science",
    },
  ];

  const cyberSec = [
    {
      id: "3",
      image: "/course/cyber1.png",
      name: "katill",
      programName: "Cyber Security Training Program",
      para: "Cybersecurity is a rapidly growing field that uses technology and processes to protect computer systems and data from online attacks. Cybersecurity courses equip students with the knowledge and skills necessary to thrive in this critical domain.",
      duration: "12 Months • Online",
      badge: "DEDICATED CAREER SUPPORT",
      link: "cyber-security",
    },
    {
      id: "3",
      image: "/course/cyber2.png",
      name: "katill",
      programName: "Cyber Security Training Program",
      para: "Cybersecurity is a rapidly growing field that uses technology and processes to protect computer systems and data from online attacks. Cybersecurity courses equip students with the knowledge and skills necessary to thrive in this critical domain.",
      duration: "12 Months • Online",
      badge: "DEDICATED CAREER SUPPORT",
      link: "cyber-security",
    },
  ];

  const [data, setData] = useState(dataScience);

  const sideIcon = [
    {
      title: "Data Science",
      icon: <BsClipboard2Data />,
      type: "dataScience",
    },
    {
      title: "Digital Marketing",
      icon: <BsClipboardData />,
      type: "digital-market",
    },
    {
      title: "Cyber Security",
      icon: <MdSecurity />,
      type: "cyberSec",
    },
  ];

  const checkType = (type) => {
    setActiveMen(type);

    if (type == "digital-market") {
      setData(digitalMarket);
    } else if (type == "cyberSec") {
      setData(cyberSec);
    } else if (type == "dataScience") {
      setData(dataScience);
    } else {
      setData(dataScience);
    }
  };

  return (
    <>
      <InquiryModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} initialRef={initialRef} finalRef={finalRef} />
      {/*  */}
      <Box px={{ base: 1, md: "8" }} mt={{ base: "0", md: "20px" }}>
        <Flex gap={8} mt={{ base: "0px", md: 7 }} flexDir={{ base: "column", md: "row" }} align={"start"} justify={"space-between"}>
          <Flex flexDir="column" alignItems="center" textAlign={{ base: "center", md: "center" }}>
            <Image height={{ base: "60px", md: "80px" }} width={{ base: "60px", md: "80px" }} src="/Upskill-Nexus-favicon.png" />
            <Heading color="#b9292f" fontSize={{ base: "35px", md: "40px" }} textAlign={{ base: "center", md: "center" }}>
              Get Upskilled <span style={{ color: "black" }}> with</span> UpskillNexus
            </Heading>
            <Text w={{ base: "100%", md: "80%" }}>UpskillNexus provides training in the most significant and demanding areas of Information Technology, including Cybersecurity, Data Analytics and Science, and Digital Marketing Science. Whether you are experienced in these fields already or just starting out, we are here to help. Our goal is to ensure that you have the skills and knowledge you need to succeed in the world of information technology. Get upskilled with UpskillNexus and get ready for a rewarding IT career!</Text>
          </Flex>
          {/* <Button color="#b9292f" d="flex" gap="3" alignItems="center">
            Filter <BsFilter />
          </Button> */}
        </Flex>

        {/* Courses and siderbar */}
        <Flex mt={"10"} gap={3} flexDir={{ base: "column", md: "row" }}>
          {/* Sider Bar Filters */}
          {/* <Flex
            zIndex={"10"}
            transition="width 0.5s ease"
            bg="#fff"
            flexDir={{ base: "row", md: "column" }}
            gap="0px"
            w={{ base: isSidebarOpen ? "100%" : "100%", md: "20%" }}
            overflow={{ base: "hidden", md: "visible" }}
            onMouseLeave={() => {
              if (window.innerWidth <= 768) {
                setSidebarOpen(false);
              }
            }}
          >
            {sideIcon.map((ele, i) => (
              <Flex border="2px solid none" onClick={() => checkType(ele.type)} key={i} className={`sideItem ${ele.type == activeMen ? "active" : null}`} align="center" justify="space-between" p={2} _hover={hoverEff}>
                <Flex position={"relative"} gap={5} cursor={"pointer"} border="2px solid none" align={"center"}>
                  <Text fontSize={{ base: "20px", md: "15px" }} display={{ base: "none", md: "block" }}>
                    {ele.icon}
                  </Text>
                  <Text fontSize={{ base: "15px", md: "15px" }} display={{ base: isSidebarOpen ? "flex" : "flex", md: "flex" }}>
                    {ele.title}
                  </Text>
                </Flex>
                <ChevronRightIcon />
              </Flex>
            ))}
          </Flex> */}

          {/* Courses */}
          <Flex w="full" justify={"center"}>
            <Flex
              w="full"
              flexWrap={"wrap"}
              gridTemplateColumns={{
                base: "repeat(1, 1fr)", // On smaller screens, one column
                md: "repeat(2, 1fr)", // On medium screens, two columns
                lg: "repeat(3, 1fr)", // On large screens, three columns
                xl: "repeat(3, 1fr)", // On extra-large screens, four columns
              }}
              // width={{ base: "full", md: "80%" }}
              justify={"center"}
              gap={{ base: "30px 15px", md: "30px 15px" }} // Adjust gap as needed
              // bg="red"
            >
              {data.map((ele, i) => (
                <Box key={i} borderRadius={"10px"} overflow={"hidden"} border="3px solid none" width={"320px"} minH={"10vh"} boxShadow="0 0 3px rgba(0,0,0,0.2)">
                  <Image width={"100%"} position="relative" objectFit={"cover"} src={ele.image} />

                  {/* <Link to={path}> */}
                  <Box boxShadow={"inset -2px -5px 10px rgba(255,255,255,0.5)"} borderRadius="10px" height={calc("55%") + "20px"} position="relative" top="-0px" flexDir={"column"}>
                    <Box p="2">
                      <Link to={`/course/${ele?.link}`}>
                        <Heading textAlign={"center"} size="md">
                          {ele.programName}
                        </Heading>
                        <Text>{ele.para.substring(0, 79)}...</Text>
                      </Link>

                      <Text>{ele.duration}</Text>
                    </Box>
                    {/*  */}
                    <Flex mt="2" borderTop={"1px solid rgba(0,0,0,0.1)"} height="50px" alignItems="center" justify={"space-between"}>
                      <a style={{ border: "4px solid none" }} href={`/course/${ele?.link}`}>
                        <Button _hover={{ bg: "none" }} w="full" h="full" borderRadius={"0"} border={"1px solid none"} bg="none" color="#b9292f">
                          View Program
                        </Button>
                      </a>
                      <Button d="flex" align={"center"} gap="3" onClick={() => onOpen()} _hover={hoverStyle} w="full" h="full" borderRadius={"0"} bg="#b9292f" color="#fff">
                        Enquiry Now <FaArrowAltCircleRight />
                      </Button>
                    </Flex>
                    {/* <Badge bg="#00a84927" mt={1} py={1} px={3}>
                      {ele.badge}
                    </Badge> */}
                  </Box>
                  {/* </Link> */}
                </Box>
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Courses;
