import { Box, Button, Flex, Heading, Image, Text, useDisclosure } from "@chakra-ui/react";
import { hoverStyle } from "../../style/button.style";
import { InquiryModal } from "../../Components/Modal/InquiryModal";
import { useRef } from "react";

const Explore = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  return (
    <>
      <InquiryModal
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        initialRef={initialRef}
        finalRef={finalRef}
      />
      <Flex
        mt={{ base: "40px", md: "0" }}
        minH={"50vh"}
        flexDir={{ base: "column-reverse", lg: "row" }}
        justify={"space-between"}
        bg="#f8f8f8"
        p="2"
      >
        <Flex
          flexDir={"column"}
          align={{ base: "center", md: "start" }}
          justify={"center"}
          p={{ base: "0", md: "0 30px" }}
          maxW={{ base: "100%", lg: "50%" }}
        >
          <Heading mt={{ base: "5", md: 0 }} fontSize={{ base: "18px", sm: "22px", md: "40px" }}>
            Meet Our industry Experts
          </Heading>
          <Text textAlign={{ base: "justify", md: "start" }}>
            {/* Watch the video to know  */}
            Watch the introductory video.
          </Text>

          <Button
            onClick={() => onOpen()}
            border="1px solid #b9292f"
            bg="#b9292f"
            color="#fff"
            _hover={{ bg: "#fff", color: "#b9292f" }}
          >
            Find Out More
          </Button>
        </Flex>
        <Box height={"100%"} maxW={{ base: "100%", lg: "50%" }} bg="red">
          <Image src="/professional.jpg" height="100%" width={"100%"} />
        </Box>
      </Flex>
    </>
  );
};

export default Explore;

{
  /* <Flex flexDir={"column"} align={{ base: "center", md: "start" }} justify={"center"} p="0 30px" maxW={{ base: "100%", md: "50%" }}>
          <Heading>Meet Our Industry Experts</Heading>
          <Text textAlign={{ base: "justify", md: "start" }}>Start your online learning journey at Great Learning Academy for free with our short-term basic courses across various in-demand domains.</Text>
          <Button _hover={{ hoverStyle }} bg="#b9292f" color="#fff">
            Free Webinar
          </Button>
        </Flex> */
}
