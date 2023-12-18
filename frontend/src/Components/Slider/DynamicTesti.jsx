// components/CardSlider.js
import React from "react";
import Slider from "react-slick";
import { AiOutlineUser } from "react-icons/ai";

import { Avatar, Badge, Box, Button, Center, Flex, Heading, Image, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DynamicTesti = ({ showPerPage, cards, title, subTitle }) => {
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
    <>
      <Box textAlign={"start"}>
        {title && (
          <Heading fontSize={{ base: "20px", md: "25px" }} fontWeight={"bold"}>
            {title}
          </Heading>
        )}
        {subTitle && (
          <Text fontSize={{ base: "18px", md: "20px" }} color="gray.500" fontWeight={"none"}>
            {subTitle}
          </Text>
        )}
        <Box w="full">
          <Slider {...settings}>
            {cards?.map((ele, i) => (
              <Box key={i} p="2" position="relative" minH="400px">
                <Flex flexDir={"column"} justifyContent={"space-between"} maxW={"450px"} minH="420px" w={"full"} bg={useColorModeValue("white", "gray.900")} borderWidth={"1"} shadow={"0 0 3px #cccc"} rounded={"md"} p={6} textAlign={"center"}>
                  <Box>
                    <Avatar size={"xl"} icon={<AiOutlineUser fontSize="1.5rem" />} name={ele.name} src={ele.imageSrc} mb={4} pos={"relative"} />
                  </Box>
                  <Box>
                    <Heading fontSize={"2xl"} fontFamily={"body"}>
                      {ele?.name}
                    </Heading>
                    <Text fontWeight={600} color={"gray.600"} mb={0}>
                      {ele?.role}
                    </Text>
                    <Text fontWeight={600} color="gray.500">
                      {ele?.company}
                    </Text>
                    <Text textAlign={"center"} color={useColorModeValue("gray.700", "gray.400")} px={3}>
                      {ele?.bio}
                    </Text>
                  </Box>

                  <Stack mt={8} direction={"row"} spacing={4}>
                    <Button bg="#b9292f" color="white" flex={1} fontSize={"sm"} rounded={"full"} _hover={{ bg: "#b9292e89", color: "white" }}>
                      Explore More
                    </Button>
                  </Stack>
                </Flex>
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
    </>
  );
};

export default DynamicTesti;
