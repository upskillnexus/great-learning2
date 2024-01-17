import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Slider.css";
import { Link } from "react-router-dom";

const HomePageSlider = () => {
  const data = [
    {img: "/slider/img4.jpg",},
    {img: "/slider/img5.jpg",},
    {img: "/slider/img6.jpg",},
    {img: "/slider/ban1.jpeg",},
    {img: "/slider/ban2.jpeg",},
  ];

  return (
    <>
      <Flex align="center" flexDir={"column"} justify="center" border="3px solid none" minH={{ base: "10vh", md: "10vh" }}>
        <Carousel controls={false} style={{ border: "5px solid none" }}>
          {data.map((ele) => (
            <Carousel.Item key={ele.id}>
              <Flex flexDir={{ base: "column-reverse", md: "row" }} border="5px solid none" height="auto" width={"100%"}>
                {/* <Box textAlign={{ base: "center", md: "start" }} p={{ base: 2, md: 8 }} width={{ base: "100%", md: "50%" }}>
                  <Text lineHeight={0}>{ele?.title}</Text>
                  <Heading fontSize={{ base: "20px", md: "50px" }}>{ele?.heading}</Heading>
                  <Text>{ele?.pera}</Text>
                  <Link to={ele?.link}>
                    <Button style={{ background: "none", color: "#b9292f", border: "2px solid #b9292f" }}>{ele?.buttonText}</Button>
                  </Link>
                </Box> */}

                {/* <Image border="1px solid none" src={ele.img} style={{ width: "100%", height: "400px" }} /> */}
                {/* <video className="homeSliderImage" style={{ width: "100%", height: "420px", objectPosition: "center", objectFit: "cover" }} src={ele.img} autoPlay muted loop poster={ele?.img}></video> */}
                <video
                  className="homeSliderImage"
                  style={{
                    width: "100%",
                    height: "auto",
                    maxWidth: "100%",
                    // objectPosition: "center",
                    objectFit: "cover",
                  }}
                  src={ele.img}
                  autoPlay
                  muted
                  loop
                  poster={ele?.img}
                ></video>
              </Flex>
            </Carousel.Item>
          ))}
        </Carousel>
      </Flex>
    </>
  );
};

export default HomePageSlider;
