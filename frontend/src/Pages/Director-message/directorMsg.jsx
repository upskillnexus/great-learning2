import React from "react";
import AboutBanner from "../../Components/About/Banner";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import GetUpskillnexus from "../../Components/Text/GetUpskillnexus";

const DirectorMsg = () => {
  const data = [
    {
      img: "/director/banner.png",
    },
  ];

  const contentArray1 = [
    {
      heading: "Dear Valued Students, Partners, and Supporters",
    },
    {
      content:
        "I am delighted to welcome you to UpskillNexus, a pioneering higher educational initiative committed to transforming lives through innovative upskilling programs in digital technology and employability skills.",
    },
    {
      content:
        "In today's rapidly developing world, the demand for digital expertise has never been higher. At UpskillNexus, we recognize the critical intersection of digital technology and employability, and our mission is to empower individuals with the knowledge and skills needed to thrive in the digital age.",
    },
    {
      content:
        "Our course programs have been designed to bridge the gap between traditional education and the dynamic needs of the modern workforce. We understand that success in the digital era requires not only technical proficiency but also a comprehensive set of employability skills. Therefore, our curriculum goes beyond technical and functional knowledge to encompass essential life skills such as communication, problem-solving, collaboration, personal leadership, adaptability, and a growth mindset.",
    },
  ];

  const contentArray = [
    {
      content:
        "As a pioneering institution, we are committed to fostering an environment where creativity, innovation and lifelong learning are at the core of our educational philosophy. Our dedicated trainers and industry experts bring real-world experience to the classroom, ensuring that our students are well-prepared to meet the challenges of the digitally enabled workspace.",
    },
    {
      content:
        "At UpskillNexus, we believe in the transformative power of education to unlock opportunities and drive personal and professional growth. Whether you are a recent graduate, a seasoned professional seeking to upskill, or an organization looking to invest in the development of your workforce, we have tailored programs to meet your unique needs.",
    },
    {
      content:
        "I invite you to explore our website, learn more about our programs, and discover how UpskillNexus can be a catalyst for your success. Join us on this exciting journey of learning, growth, and empowerment.",
    },
    {
      content:
        "Thank you for considering UpskillNexus as your partner in upskilling and shaping a future filled with limitless possibilities.",
    },
  ];

  return (
    <>
      <AboutBanner data={data} />

      <Flex bg="#fff" w="full" justify={"center"}>
        <Flex
          flexDir={"column"}
          justify={"center"}
          p={{ base: "0", md: "8" }}
          w={{ base: "95%", lg: "80%" }}
          gap={{ base: 0, md: "3" }}
        >
          <Flex
            flexDir={{ base: "column", lg: "row" }}
            gap="3"
            bg="#fff"
            rounded={{ base: "none", lg: "md" }}
            p="3"
            borderWidth={"2"}
          >
            <Box w={{ base: "full", lg: "50%" }}>
              <Image rounded={"md"} h="full" w="full" src={"/img5.jpg"} />
            </Box>
            <Box rounded={"md"} w={{ base: "full", lg: "50%" }} p="3" textAlign={"justify"}>
              {contentArray1.map((ele, i) => (
                <Box key={i}>
                  <Heading color="#b9292f" size={"md"}>
                    {ele?.heading}
                  </Heading>
                  <Text>{ele?.content}</Text>
                </Box>
              ))}
              {contentArray.map((ele, i) => (
                <Box key={i}>
                  <Heading color="#b9292f" size={"md"}>
                    {ele?.heading}
                  </Heading>
                  <Text>{ele?.content}</Text>
                </Box>
              ))}
              <Flex justify={"start"}>
                <Box w="auto">
                  <Text lineHeight={0} mt="9">
                    sincerely,
                  </Text>
                  <Image h="auto" w="100px" src="/director/signature.png" />
                  <Text lineHeight={1.2} fontWeight={"bold"}>
                    Deepa Nair
                  </Text>
                  <Text lineHeight={0}>Managing Director</Text>
                  <GetUpskillnexus text="UpskillNexus" bold="500" />
                </Box>
              </Flex>
            </Box>
          </Flex>
          {/*  */}
          {/*  */}
          <Box
            textAlign={"justify"}
            mt={{ base: "0", md: 3 }}
            // border={"2px solid #cccccc6e"}
            // shadow={"0 0 3px rgba(0,0,0,0.2)"}
            p="5"
            bg="#fff"
            rounded={{ base: "none", lg: "md" }}
          >
            {/* {contentArray?.map((ele, i) => (
              <Box key={i}>
                <Text>{ele?.content}</Text>
              </Box>
            ))} */}
            {/* <Box>
              <Text lineHeight={0} mt="9">
                sincerely,
              </Text>
              <Text lineHeight={1.2} fontWeight={"bold"}>
                Deepa Nair
              </Text>
              <Text lineHeight={0}>Managing Director</Text>
              <GetUpskillnexus text="UpskillNexus" bold="500" />
            </Box> */}
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default DirectorMsg;
