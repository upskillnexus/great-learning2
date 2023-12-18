import React from "react";
import { Box, Button, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { Carousel } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "../Slider.css";
const AboutBanner = ({ data }) => {
  return (
    <Box>
      <Carousel controls={false} style={{ border: "5px solid none" }}>
        {data.map((ele) => (
          <Carousel.Item key={ele.id}>
            <Flex flexDir={{ base: "column-reverse", md: "row" }} border="5px solid none" height="auto" width={"100%"}>
              <video
                className="homeSliderImage"
                style={{
                  width: "100%",
                  height: "auto",
                  maxWidth: "100%",
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
    </Box>
  );
};

export default AboutBanner;
