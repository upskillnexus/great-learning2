import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import { MdCheck } from "react-icons/md";

const ChatGPTComponent = ({ onOpen, title, subTitle, data }) => {
  return (
    <Flex alignItems="center" width={{ base: "full", md: "90%" }} mx="auto">
      <Flex flexDir={"column"} align={"center"} gap="5" p={{ base: 0, md: "10px" }}>
        <Flex flexDir={"column"} align={"center"} textAlign={"center"}>
          <Heading color="#b9292f" fontWeight="medium" mb="4" fontSize={{ base: "20px", md: "30px" }}>
            {title}
          </Heading>
          <Text w={{ base: "95%", md: "80%" }}>{subTitle}</Text>
        </Flex>
        {/*  */}
        <Flex textAlign={"center"} justify={"center"} align={"center"} flexDir={{ base: "column", md: "row" }} gap={{ base: "20px", md: "3" }} border="3px solid none">
          {data?.map((ele, i) => (
            <Flex w={{ base: "90%", md: "full" }} flexWrap={"wrap"} align="center" p={"3"} rounded={"md"} key={i} shadow={"md"} borderWidth={"1"}>
              <Text color="#b9292f" fontSize={"40px"}>
                {ele?.icon}
              </Text>
              <Heading mb="5" size={"sm"}>
                {ele?.title}
              </Heading>
              {ele?.arr?.map((el, ind) => (
                <Flex gap="2" w="full" align={"center"} as="span">
                  <Text fontSize={"12px"} color="#b9292f">
                    <FaCheckCircle />
                  </Text>
                  <Text lineHeight={"10px"} key={ind}>
                    {el}
                  </Text>
                </Flex>
              ))}
            </Flex>
          ))}
        </Flex>
        <Button onClick={() => onOpen()} border="1px solid #b9292f" bg="transparent" color="#b9292f" _hover={{ bg: "#b9292f", color: "#fff" }}>
        Enquire Now
        </Button>
      </Flex>
    </Flex>
  );
};

export default ChatGPTComponent;
