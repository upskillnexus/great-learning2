import { Box, Button, Flex, Heading, Text, useDisclosure } from "@chakra-ui/react";
import React, { useRef } from "react";
import { hoverStyle } from "../../style/button.style";
import { InquiryModal } from "../../Components/Modal/InquiryModal";

const TalkToOurTema = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  return (
    <>
      <InquiryModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} initialRef={initialRef} finalRef={finalRef} />
      <Flex justify={"center"}>
        <Flex justify={"center"} borderRadius={"md"} border="1px solid #b9292f" bg="#b9292f" my="50px" p="5" w="95%">
          <Flex flexDir={{ base: "column", md: "row" }} justify={"space-between"} alignItems={{ base: "center", md: "center" }} w="90%">
            <Box color="#fff" flexDir="column" align="space-between" justify={"center"}>
              <Text>Got more questions?</Text>
              <Heading fontSize={{ base: "22px", md: "40px" }} fontWeight={"bold"}>
                Get in touch with us today!
              </Heading>
              <Text>We are happy to answer any questions you may have about a successful career in Information Technology.</Text>
            </Box>
            <Button onClick={() => onOpen()} px="8" _hover={hoverStyle} border="1px solid #fff" color="#fff" bg="#b9292f">
              Get In Touch
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default TalkToOurTema;
