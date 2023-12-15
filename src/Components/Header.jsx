import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay, Flex, FormControl, FormLabel, Heading, IconButton, Image, Input, ModalBody, ModalFooter, Select, Spacer, Stack, Text, background, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "/logo.jpg";
import { hoverStyle } from "../style/button.style";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP, FaYoutube } from "react-icons/fa6";
import { MdOutlineEmail, MdOutlineWhatsapp } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Footer from "./Footer";
import { DynamicModal } from "./Modal/DynamicModal";
import { InquiryModal } from "./Modal/InquiryModal";

export const Header = ({ children }) => {
  const [isSmallerThanMd] = useMediaQuery("(max-width: 1153px)");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const flexStyles = {
    // flexDirection: isSmallerThanMd ? "column" : "row",
    display: isSmallerThanMd ? "none" : "flex",
    // alignItems: "center",
  };

  // const textStyles = {
  //     display: isSmallerThanMd ? "none" : "flex",
  //     fontWeight: "bold",
  //     mt: isSmallerThanMd ? 2 : 0,
  // };

  // const buttonStyles = {
  //     size: "sm",
  //     borderRadius: 0,
  //     px: isSmallerThanMd ? 2 : 8,
  //     bg: "none",
  //     mt: isSmallerThanMd ? 2 : 0,
  // };

  return (
    <>
      {/*Modal  */}
      <InquiryModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} initialRef={initialRef} finalRef={finalRef} />
      {/*  */}

      {/* <Box bg="white" boxShadow={"0 0 5px gray"}> */}
      <Flex w="full" alignItems="center" justify={"center"} bg="#b9292f" h={{ base: "auto", md: "50px" }}>
        <Flex direction={{ base: "row", md: "row" }} w={{ base: "95%", md: "95%" }} justify={{ base: "space-between", md: "space-between" }} alignItems={{ base: "start", md: "center" }}>
          <Flex gap={{ base: "1", md: "0px" }} alignItems={{ base: "center", md: "center" }} color="white">
            <Link target="_blank" to="https://www.facebook.com/upskillnexus/">
              <Button _hover={{ bg: "rgba(0,0,0,0.1)" }} bg="none" color="white" size="sm">
                <FaFacebookF />
              </Button>
            </Link>

            <Link target="_blank" to="https://www.instagram.com/upskillnexus/">
              <Button _hover={{ bg: "rgba(0,0,0,0.1)" }} bg="none" color="white" size="sm">
                <FaInstagram />
              </Button>
            </Link>

            <Link target="_blank" to="https://www.youtube.com/@upskillnexus">
              <Button _hover={{ bg: "rgba(0,0,0,0.1)" }} color="white" bg="md" size="sm">
                <FaYoutube />
              </Button>
            </Link>

            <Link target="_blank" to="https://in.pinterest.com/upskillnexus/">
              <Button _hover={{ bg: "rgba(0,0,0,0.1)" }} color="white" bg="md" size="sm">
                <FaPinterestP />
              </Button>
            </Link>
          </Flex>

          <Flex fontSize={{ base: "10px", md: "18px" }} direction={{ base: "column", md: "row" }} gap={{ base: "0", md: "10px" }} alignItems={{ base: "start", md: "end" }} color="white">
            <Flex alignItems={"center"} gap={{ base: "2", md: "10px" }} px={{ base: "0", md: "3" }} borderRight={{ base: "none", md: "2px solid white" }}>
              <MdOutlineEmail /> info@upskillnexus.com
            </Flex>
            <Flex alignItems={"center"} gap={{ base: "2", md: "10px" }} px={{ base: "0", md: "3" }}>
              <FaPhoneAlt /> +91 9990952299
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Flex bg="white" zIndex={"999"} position={"sticky"} gap="20px" boxShadow={"0 0 5px gray"} top="-1px" as="header" align="center" justify="space-between" padding="10px" flexDirection={{ base: "row", md: "row" }}>
        <Flex gap={"15px"} w="100%">
          {/* <Box> */}
          <Link to="/">
            <Box>
              <Image width={{ base: "150px", md: "250px" }} src={logo} />
            </Box>
          </Link>
          {/* </Box> */}
          {/* <Spacer /> */}
          <Flex align="center" w="100%" fontWeight={"600"} justifyContent={"space-between"} textAlign="center" marginTop={{ base: "1rem", md: "0" }} style={flexStyles}>
            {/* <Link to=""> */}
            {/* <Button _hover={hoverStyle} border={"1px solid #b9292f"} w="160px" bg="none" color="#b9292f">
              Explore Programs
            </Button> */}

            <Select border={"1px solid #b9292f"} w="160px" bg="none" color="#b9292f">
              <option disabled selected>
                Explore Program
              </option>

              <option>Digital Marketing</option>
              <option>Data Science</option>
              <option>Cyber Security</option>
            </Select>
            {/* </Link> */}
            <Flex gap="15px">
              <Link style={{ border: "1px solid #cccc", borderRadius: "5px", padding: "5px 10px" }} _hover={{ background: "blue" }} to="/">
                Home
              </Link>
              <Link style={{ border: "1px solid #cccc", borderRadius: "5px", padding: "5px 10px" }} _hover={{ background: "blue" }} to="/about">
                About Us
              </Link>
              <Link style={{ border: "1px solid #cccc", borderRadius: "5px", padding: "5px 10px" }} _hover={{ background: "blue" }} to="/">
                Career Support
              </Link>
              <Link style={{ border: "1px solid #cccc", borderRadius: "5px", padding: "5px 10px" }} _hover={{ background: "blue" }} to="/">
                Admissions
              </Link>
              <Link style={{ border: "1px solid #cccc", borderRadius: "5px", padding: "5px 10px" }} _hover={{ background: "blue" }} to="/">
                Latest News
              </Link>
              <Link style={{ border: "1px solid #cccc", borderRadius: "5px", padding: "5px 10px" }} _hover={{ background: "blue" }} to="/contact">
                Contact Us
              </Link>
              {/* <Link _hover={{ background: "blue" }} to="/alumni-circle">
              Alumni Circle
            </Link> */}
            </Flex>
          </Flex>
        </Flex>

        <Box>
          <Button onClick={() => onOpen()} _hover={hoverStyle} border={"1px solid #b9292f"} bg="none" color="#b9292f" size="md" style={flexStyles} p="0 15px">
            Request Call Back
          </Button>
          {isSmallerThanMd &&
            (!isDrawerOpen ? (
              <IconButton
                borderRadius={0}
                bg="none"
                _focus={{ background: "none", boxShadow: "none" }}
                icon={<HamburgerIcon />}
                aria-label="Open Sidebar"
                onClick={() => setIsDrawerOpen(true)} // Open the sidebar
              />
            ) : null)}
        </Box>

        <Drawer placement="left" onClose={() => setIsDrawerOpen(false)} isOpen={isDrawerOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <Flex justify={"end"} m={3}>
              <Button size="sm" onClick={() => setIsDrawerOpen(false)} bg="red" color={"white"} borderRadius={0}>
                X
              </Button>
            </Flex>
            <DrawerBody>
              <Stack color="#b9292f" spacing={4}>
                {/* <Button _hover={hoverStyle} border={"1px solid #b9292f"} bg="none" color="#b9292f">
                  Explore Programs
                </Button> */}
                <Button onClick={() => onOpen()} border={"1px solid #b9292f"} bg="none" _hover={hoverStyle} color="#b9292f">
                  Request Call Back
                </Button>
                <Link style={{ border: "1px solid #cccc", borderRadius: "5px", padding: "5px 10px" }} _hover={{ background: "blue" }} to="/">
                  Home
                </Link>
                <Link style={{ border: "1px solid #cccc", borderRadius: "5px", padding: "5px 10px" }} _hover={{ background: "blue" }} to="/about">
                  About Us
                </Link>
                <Link style={{ border: "1px solid #cccc", borderRadius: "5px", padding: "5px 10px" }} _hover={{ background: "blue" }} to="/">
                  Career Support
                </Link>
                <Link style={{ border: "1px solid #cccc", borderRadius: "5px", padding: "5px 10px" }} _hover={{ background: "blue" }} to="/">
                  Admissions
                </Link>
                <Link style={{ border: "1px solid #cccc", borderRadius: "5px", padding: "5px 10px" }} _hover={{ background: "blue" }} to="/">
                  Latest News
                </Link>
                <Link style={{ border: "1px solid #cccc", borderRadius: "5px", padding: "5px 10px" }} _hover={{ background: "blue" }} to="/contact">
                  Contact Us
                </Link>
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
      <Box w="full">{children}</Box>
      <Box>
        <Footer />
      </Box>
      {/* </Box> */}
    </>
  );
};
