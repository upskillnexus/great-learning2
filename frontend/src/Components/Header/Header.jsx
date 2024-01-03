import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  ModalBody,
  ModalFooter,
  Select,
  Spacer,
  Stack,
  Text,
  background,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "/logo.png";
import { hoverStyle } from "../../style/button.style";
import {
  FaChevronDown,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa6";
import { MdOutlineEmail, MdOutlineWhatsapp } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Footer from "../Footer";
import { InquiryModal } from "../Modal/InquiryModal";
import { coursename } from "../../../data/course";

export const Header = ({ children }) => {
  const [isSmallerThanMd] = useMediaQuery("(max-width: 1385px)");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { pathname } = useLocation();

  const [selectedValue, setSelectedValue] = useState(null);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const flexStyles = {
    display: isSmallerThanMd ? "none" : "flex",
  };

  const navLinks = [
    { text: "Home", to: "/" },
    {
      text: "About Us",
      subMenu: [
        { text: "Who We Are", to: "/about" },
        { text: "Our Leadership Team", to: "#" },
        { text: "Director's Message", to: "/director" },
      ],
    },
    { text: "Career Support", to: "/career-support" },

    {
      text: "Admissions",
      subMenu: [
        { text: "Admission Process", to: "/admission/process" },
        { text: "Application Form", to: "/admission" },
      ],
    },
    { text: "Latest News", to: "#" },
    { text: "Contact Us", to: "/contact" },
  ];

  return (
    <>
      {/*Modal  */}
      <InquiryModal isOpen={isOpen} onClose={onClose} initialRef={initialRef} finalRef={finalRef} />
      {/*  */}
      {/* .prettierignore */}
      {/* <Box bg="white" boxShadow={"0 0 5px gray"}> */}
      <Flex
        w="full"
        alignItems="center"
        justify={"center"}
        bg="#b9292f"
        h={{ base: "auto", md: "50px" }}
      >
        <Flex
          direction={{ base: "row", md: "row" }}
          w={{ base: "95%", md: "95%" }}
          justify={{ base: "space-between", md: "space-between" }}
          alignItems={{ base: "start", md: "center" }}
        >
          <Flex
            gap={{ base: "1", md: "0px" }}
            alignItems={{ base: "center", md: "center" }}
            color="white"
          >
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

          <Flex
            fontSize={{ base: "10px", md: "18px" }}
            direction={{ base: "column", md: "row" }}
            gap={{ base: "0", md: "10px" }}
            alignItems={{ base: "start", md: "end" }}
            color="white"
          >
            <Flex
              alignItems={"center"}
              gap={{ base: "2", md: "10px" }}
              px={{ base: "0", md: "3" }}
              borderRight={{ base: "none", md: "2px solid white" }}
            >
              <MdOutlineEmail /> info@upskillnexus.com
            </Flex>
            <Flex alignItems={"center"} gap={{ base: "2", md: "10px" }} px={{ base: "0", md: "3" }}>
              <FaPhoneAlt /> +91 9990952299
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Flex
        bg="white"
        zIndex={"999"}
        position={"sticky"}
        gap="20px"
        boxShadow={"0 0 5px gray"}
        top="-1px"
        as="header"
        align="center"
        justify="space-between"
        padding="10px"
        flexDirection={{ base: "row", md: "row" }}
      >
        <Flex gap={"15px"} w="100%">
          {/* <Box> */}
          <Link to="/">
            <Box>
              <Image width={{ base: "150px", md: "250px" }} src={logo} />
            </Box>
          </Link>
          {/* </Box> */}
          {/* <Spacer /> */}
          <Flex
            align="center"
            w="100%"
            fontWeight={"600"}
            justifyContent={"space-between"}
            textAlign="center"
            marginTop={{ base: "1rem", md: "0" }}
            style={flexStyles || { display: "none" }}
          >
            {/*  */}

            <Menu>
              <MenuButton
                rounded={"md"}
                border="1px solid #cccc"
                p="5px 10px"
                fontWeight={"medium"}
              >
                <Box display={"flex"} as="span" gap="2" alignItems="center">
                  {selectedValue || "Explore Program"} <FaChevronDown />
                </Box>
              </MenuButton>
              <MenuList>
                <MenuItem to="/" as={Link} onClick={() => setSelectedValue(null)}>
                  Home
                </MenuItem>
                {coursename?.map((ele, i) => (
                  <MenuItem
                    key={i}
                    as={Link}
                    to={ele?.link}
                    onClick={() => setSelectedValue(ele.name)}
                  >
                    {ele.name}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>

            {/* </Link> */}
            <Flex gap="15px">
              {navLinks?.map((link, index) =>
                link.subMenu ? (
                  <Menu key={index}>
                    <MenuButton
                      rounded="md"
                      border="1px solid #cccc"
                      p="5px 10px"
                      fontWeight="medium"
                    >
                      <Box display={"flex"} as="span" gap="2" alignItems="center">
                        {link.text} <FaChevronDown />
                      </Box>
                    </MenuButton>

                    <MenuList>
                      {link.subMenu.map((subLink, subIndex) => (
                        <MenuItem
                          border={pathname === subLink?.to ? "2px solid #b9292f" : "2px solid none"}
                          color={pathname === subLink?.to ? "#b8292f" : "initial"}
                          as={Link}
                          to={subLink?.to}
                          key={subIndex}
                        >
                          {subLink?.text}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </Menu>
                ) : (
                  <Link
                    key={index}
                    style={{
                      border: "1px solid #cccc",
                      borderRadius: "5px",
                      padding: "5px 10px",
                      border: pathname === link?.to ? "2px solid #b9292f" : "1px solid #ccc",
                      color: pathname === link?.to ? "#b9292f" : "#000",
                    }}
                    _hover={{ background: "blue" }}
                    to={link.to}
                  >
                    {link.text}
                  </Link>
                )
              )}
              {/*  */}
            </Flex>
          </Flex>
        </Flex>

        <Box>
          <Button
            onClick={() => onOpen()}
            _hover={hoverStyle}
            border={"1px solid #b9292f"}
            bg="none"
            color="#b9292f"
            size="md"
            style={flexStyles}
            p="0 15px"
          >
            Request Call Back
          </Button>

          {/*  */}
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
              <Button
                size="sm"
                onClick={() => setIsDrawerOpen(false)}
                bg="red"
                color={"white"}
                borderRadius={0}
              >
                X
              </Button>
            </Flex>
            <DrawerBody>
              <Stack color="#b9292f" spacing={4}>
                {/* <Button _hover={hoverStyle} border={"1px solid #b9292f"} bg="none" color="#b9292f">
                  Explore Programs
                </Button> */}
                <Button
                  onClick={() => onOpen()}
                  border={"1px solid #b9292f"}
                  bg="none"
                  _hover={hoverStyle}
                  color="#b9292f"
                >
                  Request Call Back
                </Button>
                {/*  */}
                {navLinks.map((link, index) =>
                  link.subMenu ? (
                    <Menu key={index}>
                      <MenuButton
                        rounded={"md"}
                        border="1px solid #cccc"
                        p="5px 10px"
                        fontWeight={"medium"}
                      >
                        <Box display={"flex"} as="span" gap="2" alignItems="center">
                          {link.text} <FaChevronDown />
                        </Box>
                      </MenuButton>
                      <MenuList>
                        {link.subMenu.map((subLink, subIndex) => (
                          <MenuItem
                            border={
                              pathname === subLink?.to ? "2px solid #b9292f" : "2px solid none"
                            }
                            color={pathname === subLink?.to ? "#b8292f" : "initial"}
                            as={Link}
                            to={subLink.to}
                            key={subIndex}
                          >
                            {subLink.text}
                          </MenuItem>
                        ))}
                      </MenuList>
                    </Menu>
                  ) : (
                    <Link
                      key={index}
                      style={{
                        border: "1px solid #cccc",
                        borderRadius: "5px",
                        padding: "5px 10px",
                        border: pathname === link?.to ? "2px solid #b9292f" : "1px solid #ccc",
                        color: pathname === link?.to ? "#b9292f" : "#000",
                      }}
                      _hover={{ background: "blue" }}
                      to={link.to}
                    >
                      {link.text}
                    </Link>
                  )
                )}
                {/*  */}
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
