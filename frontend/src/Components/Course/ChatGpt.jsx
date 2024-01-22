import { Box, Button, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import { MdCheck } from "react-icons/md";

const ChatGPTComponent = ({ onOpen, title, subTitle, data, button=true }) => {
  return (
    <Flex justify={'center'} align="center" width={{ base: "full", md: "90%" }} mx="auto">
      <Flex flexDir={"column"} align={"center"} gap="5" p={{ base: 0, md: "10px" }}>
        <Flex flexDir={"column"} align={"center"} textAlign={"center"}>
          <Heading color="#b9292f" fontWeight="medium" mb="4" fontSize={{ base: "20px", md: "30px" }}>
            {title}
          </Heading>
          <Text w={{ base: "95%", md: "80%" }}>{subTitle}</Text>
        </Flex>
        {/*  */}
        {data &&
          <Grid p={'3'} w='full' gridTemplateColumns={{lg:'repeat(4,1fr)', md: 'repeat(3,1fr)', sm: 'repeat(2,1fr)', base: 'repeat(1,1fr)'}} placeItems={'center'} gap={{ base: "20px", md: "3" }} border="3px solid none">
            {data?.map((ele, i) => (
              <Flex key={i} flexDir={'column'} w='full' h='full' align="center" p={"3"} rounded={"md"} shadow={"sm"} border={'1px solid #ccc'}>
                <Text color="#b9292f" fontSize={"40px"}>
                  {ele?.icon}
                </Text>
                <Heading mb="5" size={"sm"}>
                  {ele?.title}
                </Heading>
                {ele?.arr?.map((el, ind) => (
                  <Flex gap="2" w="full" align={"start"} as="span">
                    <Text fontSize={"12px"} mt={'2'} color="#b9292f">
                      <FaCheckCircle />
                    </Text>
                    <Text lineHeight={"20px"} key={ind}>
                      {el}
                    </Text>
                  </Flex>
                ))}
              </Flex>
            ))}
          </Grid>
        }
        
        {button &&
          <Button onClick={() => onOpen()} border="1px solid #b9292f" bg="transparent" color="#b9292f" _hover={{ bg: "#b9292f", color: "#fff" }}>
            Enquire Now
          </Button>
        }
      </Flex>
    </Flex>
  );
};

export default ChatGPTComponent;
