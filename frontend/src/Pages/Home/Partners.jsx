import { Box, Flex, Grid, Image, Heading, Text, Button, useDisclosure } from "@chakra-ui/react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { InquiryModal } from "../../Components/Modal/InquiryModal";
// import VisibilitySensor from "react-visibility-sensor";

const Partners = () => {
  // Define an array of partner logos

  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const logos = [
    {
      img: "/didm.png",
      comp: "DIDM",
      color: "#be0002",
      content:
        "The Delhi Institute of Digital Marketing is a premier partner of Google and has become a leading company for digital marketing and data analytics training. Founded in 2015 as a subsidiary of Dayitwa Consultancy Services Pvt Ltd, DIDM is now India's No. 1 Digital Marketing Training Brand.",
      link: "https://www.didm.in/",
    },
    {
      img: "/partners/xbiz.png", //
      comp: "NEXUS",
      color: "#ffca04",
      content:
        "A transformational fintech company since 2012 of financial services by delivering the best of practices in fintech software development for a decade now.  We've been helping banks & businesses with the digital transformation.",
      link: "https://www.xbizventures.com/SecureNexus-ISS",
    },
    // {
    //   img: "/skill.png", //
    //   comp: "SKILLS SHIKSHA",
    //   color: "blue",
    //   content:
    //     "Skillshiksha is India’s best online learning platform where you can have blended modules and learn at your own pace. Master the recent trends in the market to stay competitive as change occurs at a rapid pace.",
    //   link: "https://www.skillshiksha.com/",
    // },
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
      <Box bg="#f8f8f8" p={5} mt="40px">
        <Flex justify="center" direction="column" alignItems="center">
          <Flex flexDir="column" textAlign={"center"} alignItems="center" mb={3}>
            <Heading as="h2" size={{ base: "lg", md: "xl" }} mb={6} color="#b9292f">
              Our Training Partners
            </Heading>
            <Text w={{ base: "full", md: "80%" }} textAlign={{ base: "justify", md: "center" }}>
              We're building promising futures with our valued partners — together, we're building a
              legacy of shared achievement and growth. These are the top brands with which we have
              formed a partnership.
            </Text>
          </Flex>

          <Flex flexDir="column" gap="5" align="center" justify="center" maxW="1200px">
            <Grid
              templateColumns={{
                base: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(2, 1fr)",
              }}
              gap={4}
              justifyContent="center"
              mx="auto"
              p={4}
            >
              {logos?.map((logo, index) => (
                <Flex
                  flexDir={"column"}
                  p={"3"}
                  // w={{ base: "250px", md: "400px" }}
                  alignItems="center"
                  key={index}
                  borderRadius={"10px"}
                  overflow={"hidden"}
                  bg="#fff"
                  boxShadow="0 0 3px rgba(0,0,0,0.2)"
                >
                  <Image width={"50%"} position="relative" objectFit={"cover"} src={logo?.img} />

                  <Box p="4" textAlign={"center"}>
                    {/* <Heading style={{ color: `${logo.color}` }} size="md">
                      {logo.comp}
                    </Heading> */}
                    <Text textAlign={"center"}>{logo.content}</Text>
                  </Box>
                  <Link to={logo?.link} target="_blank">
                    <Button
                      size="sm"
                      _hover={{ bg: "#fff", border: "2px solid #b9292f", color: "#b9292f" }}
                      bg="#b9292f"
                      border="2px solid #b9292f"
                      color="#fff"
                      p="2"
                    >
                      Read More
                    </Button>
                  </Link>
                  {/*  */}
                </Flex>
              ))}
            </Grid>
            <Button onClick={() => onOpen()} border="1px solid #b9292f" bg="#b9292f" color="#fff" _hover={{ bg: "#fff", color: "#b9292f" }}>
              Explore Our Courses
            </Button>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Partners;
