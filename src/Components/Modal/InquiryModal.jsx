// import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button } from "@chakra-ui/react";
import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay, Flex, FormControl, FormLabel, Heading, IconButton, Image, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalOverlay, Select, Spacer, Stack, Text, background, useDisclosure, useMediaQuery } from "@chakra-ui/react";

export function InquiryModal({ isOpen, onOpen, onClose, initialRef, finalRef }) {
  return (
    <>
      {/* <Button onClick={onOpen}>Open Modal</Button>
      <Button ml={4} ref={finalRef}>
        I'll receive focus on close
      </Button> */}

      <Modal size="3xl" initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <ModalContent w="1200px">
          <Flex minH="80vh">
            <Box w={{ base: 0, sm: "50%", md: "50%" }} bgImage="/inquery/form-image.png" backgroundSize="cover" />
            <ModalBody bg="#fff">
              <Flex py={6} h="full" flexDir={"column"} justify={"space-around"}>
                <Heading color="#b9292f" fontSize={"22px"} textAlign={"center"} textTransform={"uppercase"} as="h4">
                  Book a Free Counselling
                </Heading>
                <Box>
                  <FormControl>
                    <FormLabel>Full Name</FormLabel>
                    <Input placeholder="Name" />
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>Email</FormLabel>
                    <Input placeholder="abc@gmail.com" />
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>Mobile No:</FormLabel>
                    <Input placeholder="Mobile No." />
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>Course</FormLabel>
                    <Select placeholder="--Select Course--">
                      <option>Digital Marketing Science</option>
                      <option>Data Science</option>
                      <option>Cyber Security</option>
                    </Select>
                  </FormControl>
                </Box>
                <Flex justify={"center"}>
                  <Button w="full" colorScheme="red" bg="#b9292f" mr={3}>
                    Submit
                  </Button>
                </Flex>
              </Flex>
            </ModalBody>
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
}
