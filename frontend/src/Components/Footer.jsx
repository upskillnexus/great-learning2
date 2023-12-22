import { VStack, Box, Flex, Text, Image, Input, Button, Heading, Grid } from "@chakra-ui/react";
import { BsSend } from "react-icons/bs";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";

import { Link, useNavigate } from "react-router-dom";
import logo from "/logo.png";
import { FaFacebookF, FaInstagram, FaPinterestP, FaYoutube } from "react-icons/fa6";
import GetUpskillnexus from "./Text/GetUpskillnexus";

const Footer = () => {
  // Data for popular online courses
  const popularCourses = [
    {
      name: "Digital Marketing Science",
      link: "/course/digital-marketing-science",
    },
    {
      name: "Data Science Course",
      link: "/course/data-science",
    },
    {
      name: "Cybersecurity Course",
      link: "/course/cyber-security",
    },
    {
      name: "Employability Skills",
      link: "#",
    },
  ];
  const navigate = useNavigate();
  // Data for useful links
  const usefulLinks = [
    { name: "About Us", path: "about" },
    { name: "Latest News", path: "#" },
    { name: "We Are Hiring", path: "#" },
    { name: "Contact us", path: "contact" },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms & Conditions", path: "/term-conditions" },
    { name: "Refund Policy", path: "/refund-policy" },
  ];

  return (
    <>
      <Flex
        flexDir={"column"}
        bg="#fff"
        align={"center"}
        color="black"
        borderTop={"2px solid #cccccc7a"}
        gap="3"
        pt={"40px"}
      >
        <Flex
          border="3px solid none"
          flexDir={{ base: "column", md: "row" }}
          alignItems={{ base: "center", md: "start" }}
          justify="space-between"
          w="85%"
          px={5}
        >
          <Flex
            width={{ base: "100%", md: "40%" }}
            mb={{ base: 4, md: 0 }}
            flexDir={{ base: "column-reverse", md: "row" }}
          >
            <Box>
              <Text fontSize={{ base: "sm", md: "md" }} mb={4}>
                <Image
                  src={logo}
                  alt="WsCube Tech Logo"
                  mb={{ base: "10px", md: "20px" }}
                  maxW={{ base: "60%", sm: "40%", md: "50%" }}
                />
                UpskillNexus provides training in the most significant and demanding areas of
                Information Technology, including Cybersecurity, Data Analytics and Science, and
                Digital Marketing Science.
              </Text>

              <Heading size="md">Stay up-to-date.</Heading>
              <Text fontSize={{ base: "sm", md: "md" }} mb={4}>
                Subscribe to our Newsletter to receive the latest updates and offers.
              </Text>

              <Heading size="md">Business Hours</Heading>
              <Text lineHeight={0.5}>Monday – Friday : 9am to 9pm</Text>
              <Text lineHeight={0.5}>Saturday & Sunday : 9am to 7pm</Text>

              <Flex align="center" gap={2}>
                <Input
                  type="email"
                  border={"1px solid #b9292f"}
                  _focus={{ border: "1px solid #b9292f", outline: "1px solid #b9292f" }}
                  placeholder="Enter your email"
                  bg="#fff"
                  color="black"
                  size="sm"
                />
                <Button
                  bg="#b9292f"
                  color="#fff"
                  _hover={{ bg: "white", color: "black" }}
                  size="sm"
                >
                  <BsSend />
                </Button>
              </Flex>
            </Box>
          </Flex>

          <Box width={{ base: "100%", md: "60%" }}>
            <Grid
              templateColumns={{
                base: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
              }}
              justifyContent="space-around"
              flexWrap="wrap"
            >
              <Box
                flex="1"
                maxW={{ base: "100%", md: "400px" }}
                p={{ base: 0, sm: 0, md: 5 }}
                mb={{ base: 8, md: 0 }}
              >
                <Text fontSize="lg" fontWeight="bold" mb={3}>
                  Popular Courses
                </Text>
                <VStack align="left" spacing={1}>
                  {popularCourses.map((course, index) => (
                    <Link key={index} to={course.link} fontSize={{ base: "sm", md: "md" }}>
                      {course.name}
                    </Link>
                  ))}
                </VStack>
              </Box>

              <Box flex="1" maxW={{ base: "100%", md: "400px" }} p={{ base: 0, sm: 0, md: 5 }}>
                <Text fontSize="lg" fontWeight="bold" mb={3}>
                  Important Links
                </Text>
                <VStack align="left" spacing={1}>
                  {usefulLinks.map((link, index) => (
                    <Link
                      key={index}
                      to={link.path}
                      onClick={() => navigate(link.path)}
                      fontSize={{ base: "sm", md: "md" }}
                    >
                      {link.name}
                    </Link>
                  ))}
                </VStack>
              </Box>

              <Box
                flex="1"
                maxW={{ base: "100%", md: "400px" }}
                p={{ base: 0, md: 5 }}
                mb={{ base: 8, md: 1, lg: 0 }}
              >
                <Text fontSize="lg" fontWeight="bold" mb={3}>
                  Corporate Office :
                </Text>
                <VStack align="left" spacing={1}>
                  <Flex gap="2" align={"start"}>
                    <Text color="#b9292f" mt="2">
                      <CiLocationOn />
                    </Text>
                    <Box>
                      <Text>A-11, 2nd floor, Opposite Balaji Mandir,</Text>
                      <Text>Near Metro Pillar No. 389, Rajouri Garden</Text>
                      <Text>New Delhi-110027</Text>
                    </Box>
                  </Flex>
                  <Flex gap="2" align={"start"}>
                    <Text color="#b9292f" lineHeight={1}>
                      <IoCallOutline />
                    </Text>
                    <Text lineHeight={1}>+91 9990952299</Text>
                  </Flex>

                  <Flex gap="2" align={"start"}>
                    <Text color="#b9292f">
                      <CiMail />
                    </Text>
                    <Box>
                      <Text lineHeight={1}>Do you have a question?</Text>
                      <Text lineHeight={1}>info@upskillnexus.com</Text>
                    </Box>
                  </Flex>
                </VStack>

                <Flex
                  gap={{ base: "2", md: "0px" }}
                  alignItems={{ base: "start", md: "start" }}
                  mt="5"
                  flexDir={"column"}
                >
                  <Heading size="sm">
                    Follow <GetUpskillnexus text={"UpskillNexus"} bold="auto" />
                  </Heading>

                  <Box>
                    <Link target="_blank" to="https://www.facebook.com/upskillnexus/">
                      <Button _hover={{ bg: "rgba(0,0,0,0.1)" }} bg="none" color="black" size="sm">
                        <FaFacebookF />
                      </Button>
                    </Link>

                    <Link target="_blank" to="https://www.instagram.com/upskillnexus/">
                      <Button _hover={{ bg: "rgba(0,0,0,0.1)" }} bg="none" color="black" size="sm">
                        <FaInstagram />
                      </Button>
                    </Link>

                    <Link target="_blank" to="https://www.youtube.com/@upskillnexus">
                      <Button _hover={{ bg: "rgba(0,0,0,0.1)" }} color="black" bg="md" size="sm">
                        <FaYoutube />
                      </Button>
                    </Link>

                    <Link target="_blank" to="https://in.pinterest.com/upskillnexus/">
                      <Button _hover={{ bg: "rgba(0,0,0,0.1)" }} color="black" bg="md" size="sm">
                        <FaPinterestP />
                      </Button>
                    </Link>
                  </Box>
                </Flex>
              </Box>
            </Grid>
          </Box>
        </Flex>

        <Box>
          <Text
            mt={{ base: 0, md: "0" }}
            py={{ base: 0, md: "0" }}
            fontSize={"12px"}
            textAlign={"center"}
          >
            Copyright ©2023 UpskillNexus. Entronika Private Limited. All rights reserved.
          </Text>
        </Box>
      </Flex>
    </>
  );
};

export default Footer;
