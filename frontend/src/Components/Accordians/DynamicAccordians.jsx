import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Flex, Heading, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";
import { FaQuestionCircle } from "react-icons/fa";
import InquiryFrms2 from "../Forms/InquiryFrms2";
import SecurityService from "../Course/SecurityService";

const DynamicAccordians = ({ data, title, subTitle, headComp }) => {
  return (
    <>
      <Box textAlign={"center"} mb="8">
        {title && (
          <Heading color="#b9292f" fontSize={"30px"}>
            {title}
          </Heading>
        )}
        {subTitle && <Text>{subTitle}</Text>}
      </Box>
      {/* Head component  */}
        {headComp}
      {/* Head component  */}
      <Flex flexDir={{ base: "column", lg: "row" }} justify={"space-between"} gap="3">
        <Box w={{ base: "full", lg: "70%" }}>
          <Accordion allowToggle border={"none"}>
            {data?.map((ele, i) => (
              <AccordionItem mt={{ base: "2", md: "4" }} border={"none"} key={i}>
                {({ isExpanded }) => (
                  <>
                    <Flex flexDir={"column"} bg="#b9292f" p="0" rounded={"md"}>
                      <AccordionButton>
                        <Flex w="full" gap="3" as="h6" align={"start"} color="white">
                          {/* <Box> */}
                          <Text mt={{ base: "1", md: "2" }}>
                            <FaQuestionCircle />
                          </Text>
                          <Text textAlign={"start"} lineHeight={"25px"}>
                            {ele.description}
                          </Text>
                          {/* </Box> */}
                        </Flex>
                        {isExpanded ? <MinusIcon fontSize="12px" /> : <AddIcon color="white" fontSize="12px" />}
                      </AccordionButton>
                      <AccordionPanel color="white" pb={4}>
                            {ele?.text}
                      </AccordionPanel>
                    </Flex>
                  </>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </Box>
        <Box w={{base: 'full', lg:'50%'}}>
          <InquiryFrms2 />
        </Box>
      </Flex>
    </>
  );
};

export default DynamicAccordians;
