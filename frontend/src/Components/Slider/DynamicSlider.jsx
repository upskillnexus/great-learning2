// components/CardSlider.js
import React, { useRef } from "react";
import Slider from "react-slick";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DynamicSlider = ({ children, showPerPage, cards, title }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: showPerPage,
    slidesToScroll: 1,
    arrows: true,

    autoplay: true,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box>
      <Slider {...settings}>
        {cards?.map((ele, i) => (
          <Box key={i} p="2" position="relative">
            <Flex justify="center" align="center" p="5" rounded={"md"} shadow={"0 0 4px #cccc"}>
              <Image h="full" w="100%" src={ele?.img} objectFit={"cover"} />
            </Flex>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default DynamicSlider;
