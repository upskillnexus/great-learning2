import { Box, Button, Container, Flex, Grid, Heading, Image, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { Carousel } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdOutlineWhatsapp } from "react-icons/md";
import { TestimonialContent } from "../../Components/TestiMonial";

const Testimonials = () => {
  const data = [
    {
      name: "Rajiv Dutt",
      title: "After graduating from college, I was unsure of how to begin my career in technology. UpskillNexu's Cyber Security ocurse could secure me a fantastic position in one of India’s leading technology companies. I can't thank them enough for what I got.",
      image: "https://akm-img-a-in.tosshub.com/sites/visualstory/stories/2022_09/story_9815/assets/2.jpeg?time=1664540733&size=*:900",
    },
    {
      name: "Anjana Sharma",
      title:
        "I was stuck in a boring job I didn't enjoy, and I needed a change. UpskillNexus's Data Science course transformed my career and I became a Business Intelligence Analyst in a highly reputed company. I now work in a field I'm passionate about. I'm finally excited to go to work every day",
      image: "https://wallpapers.com/images/hd/emraan-hashmi-black-tie-rza6029vsvgutk7c.jpg",
    },
    {
      name: "Akshit Bhatia",
      title: " I had been exploring online tech courses for a while, but UpskillNexus stood out. Their Digital Marketing Science program was an eye-opener. Learning became so much easier because they made complex ideas simple. I am now a confident SEO Specialist in an Advertising firm",
      image: "https://i.pinimg.com/originals/76/50/af/7650af844a898a0905e5f71bbf2d4d5f.jpg",
    },
  ];

  return (
    <Flex align="center" flexDir="column" mt={{ base: "5", md: "5" }} p={{ base: 0, md: 5 }} w="100%" bg="#f8f8f8">
      <Flex flexDir="column" textAlign={{ base: "center", md: "center" }} w={{ base: "100%", md: "80%" }}>
        <Heading color="#b9292f" as="h2" px={2}>
          Testimonials
        </Heading>
        <Text size="sm">Here are some words of praise from trainees of our pilot programs.</Text>
      </Flex>
      {/* <Carousel> */}
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={0}
        justifyContent="center"
        alignItems="center"
        // border="2px solid black"
      >
        {data.map((ele, index) => (
          <Container maxW={"full"} py={5} as={Stack} spacing={6}>
            <Stack direction={{ base: "column", md: "row" }} spacing={{ base: 10, md: 4, lg: 10 }}>
              <TestimonialContent
                key={index}
                heading={ele.name}
                text={ele.title}
                // avatar={{
                //   src: "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
                //   name: "Jane Cooper",
                //   title: "CEO at ABC Corporation",
                // }}
              />
            </Stack>
          </Container>
        ))}
      </Grid>
    </Flex>
  );
};

export default Testimonials;
