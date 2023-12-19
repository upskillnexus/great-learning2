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
import GetUpskillnexus from "../../Components/Text/GetUpskillnexus";
import { allCourses } from "../../../data/course";

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

  const [data, setData] = useState(allCourses);

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
      <Box
        px={{
          base: 1,
          md: "8",
        }}
        mt={{
          base: "0",
          md: "20px",
        }}>
        <Flex
          gap={8}
          mt={{
            base: "0px",
            md: 7,
          }}
          flexDir={{
            base: "column",
            md: "row",
          }}
          align={"start"}
          justify={"space-between"}>
          {/*  */}
          <Flex flexDir={"column"} alignItems="center" justify={"center"} textAlign={"center"}>
            <Flex
              mb={{
                base: "10px",
                md: 0,
              }}
              flexDir={{
                base: "column-reverse",
                md: "column",
              }}
              alignItems="center"
              textAlign={{
                base: "center",
                md: "center",
              }}>
              <Image h={{ base: "auto", md: "80px", lg: "80px" }} w={{ base: "70%", md: "80px", lg: "80px" }} src="/Upskill-Nexus-favicon.png" />
              <Flex flexDir={{ base: "column", lg: "row" }} align="center">
                <Heading fontSize={{ base: "35px", md: "40px" }} mb={0} textAlign={{ base: "center", md: "center" }}>
                  Get Upskilled
                </Heading>

                <Heading fontSize={{ base: "35px", md: "40px" }} lineHeight={8} as="span" m="2">
                  with
                </Heading>
                <Heading
                  fontSize={{ base: "35px", md: "40px" }}
                  color="#b9292f"
                  display={{
                    base: "none",
                    md: "block",
                  }}>
                  UpskillNexus
                </Heading>
              </Flex>
            </Flex>

            {/*  */}
            <Flex flexDir={"column"} align={"center"} textAlign={{ base: "justify", md: "center" }}>
              <Text w={{ base: "100%", md: "80%" }}>
                <GetUpskillnexus text="UpskillNexus" />
                is a higher education initiative invested in providing growth-oriented individuals with high-quality authentic and practical training in digital technology. With our courses, career aspirants can develop their critical digital technology skills along with employability skills for
                success in today’s business world.
              </Text>
              <Text w={{ base: "100%", md: "80%" }}>
                <GetUpskillnexus text="UpskillNexus" /> provides training in the most significant and demanding areas of Information Technology—<b>Cybersecurity, Data Science, and Digital Marketing Science.</b> Whether you are experienced in these fields already or just starting out, we are here to
                help. Our goal is to ensure that you have the skills and knowledge you need to succeed in the world of information technology.
              </Text>

              <Text w={{ base: "100%", md: "80%" }}>
                Get upskilled with <GetUpskillnexus text="UpskillNexus" /> and get ready for a rewarding IT career.
              </Text>
            </Flex>
          </Flex>
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
              w={{ base: "full", lg: "78%" }}
              // bg="blue"
              flexWrap={"wrap"}
              gridTemplateColumns={{
                base: "repeat(1, 1fr)", // On smaller screens, one column
                md: "repeat(2, 1fr)", // On medium screens, two columns
                lg: "repeat(3, 1fr)", // On large screens, three columns
                xl: "repeat(3, 1fr)", // On extra-large screens, four columns
              }}
              // width={{ base: "full", md: "80%" }}
              justify={"center"}
              gap={{
                base: "30px 15px",
                md: "30px 15px",
              }} // Adjust gap as needed
              // bg="red"
            >
              {data.map((ele, i) => (
                <Box key={i} borderRadius={"10px"} overflow={"hidden"} border="3px solid none" w={"350px"} minH={"10vh"} boxShadow="0 0 3px rgba(0,0,0,0.2)">
                  <Image w={"100%"} position="relative" objectFit={"cover"} src={ele.image} />

                  {/* <Link to={path}> */}
                  <Flex flexDir={"column"} justify={"space-between"} boxShadow={"inset -2px -5px 10px rgba(255,255,255,0.5)"} borderRadius="10px" minH={"250px"}>
                    <Box p="2">
                      <Link to={`/course/${ele?.link}`}>
                        <Heading textAlign={"center"} size="md">
                          {ele.programName}
                        </Heading>
                        <Text>
                          {ele.para.substring(0, 79)}
                          ...
                        </Text>
                      </Link>

                      <Text>{ele.duration}</Text>
                    </Box>
                    {/*  */}
                    <Flex mt="2" borderTop={"1px solid rgba(0,0,0,0.1)"} h="50px" alignItems="center" justify={"space-between"}>
                      <a
                        style={{
                          border: "4px solid none",
                        }}
                        href={`/course/${ele?.link}`}>
                        <Button
                          _hover={{
                            bg: "none",
                          }}
                          w="full"
                          h="full"
                          borderRadius={"0"}
                          border={"1px solid none"}
                          bg="none"
                          color="#b9292f">
                          View Program
                        </Button>
                      </a>
                      <Button d="flex" align={"center"} gap="3" onClick={() => onOpen()} _hover={hoverStyle} w="full" h="full" borderRadius={"0"} bg="#b9292f" color="#fff">
                        Enquire Now <FaArrowAltCircleRight />
                      </Button>
                    </Flex>
                  </Flex>
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

// Employability Skills
