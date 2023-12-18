// import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button } from "@chakra-ui/react";
import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Select, Spinner } from "@chakra-ui/react";
import { Controller, useForm } from "react-hook-form";
import InputError from "../Errors/InputError";
import useAddEnquiry from "../../Libs/Mutation/useCreateEnquiry";
import { coursename } from "../../../data/course";

export function InquiryModal({ isOpen, onClose, initialRef, finalRef }) {
  const { mutate: createEnquiry, isPending: loading, isSuccess } = useAddEnquiry();

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createEnquiry(data);
    if (isSuccess) {
      onClose();
      reset({
        fullname: "",
        email: "",
        phone: "",
        course: "",
      });
    }
  };

  return (
    <>
      {/* <Button onClick={onOpen}>Open Modal</Button>
      <Button ml={4} ref={finalRef}>
        I'll receive focus on close
      </Button> */}

      <Modal size="3xl" initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <ModalContent w="1200px">
          <ModalCloseButton />
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
                    <Controller
                      name="fullname"
                      control={control}
                      rules={{ required: "Name is required" }}
                      render={({ field: { onChange, value } }) => (
                        <>
                          <Input onChange={onChange} value={value} placeholder="Name" />
                          <InputError name="fullname" err={errors} />
                        </>
                      )}
                    />
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>Email</FormLabel>
                    <Controller
                      name="email"
                      control={control}
                      rules={{ required: "email is required" }}
                      render={({ field: { onChange, value } }) => (
                        <>
                          <Input onChange={onChange} value={value} placeholder="abc@gmail.com" />
                          <InputError name="email" err={errors} />
                        </>
                      )}
                    />
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>Mobile No:</FormLabel>
                    <Controller
                      name="phone"
                      control={control}
                      rules={{ required: "Mobile no. is required" }}
                      render={({ field: { onChange, value } }) => (
                        <>
                          <Input onChange={onChange} value={value} placeholder="Mobile No." />
                          <InputError name="phone" err={errors} />
                        </>
                      )}
                    />
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>Course</FormLabel>
                    <Controller
                      control={control}
                      name="course"
                      rules={{ required: "Please select any course." }}
                      render={({ field: { onChange, value } }) => (
                        <>
                          <Select onChange={onChange} value={value} placeholder="--Select Course--">
                            {coursename.map((ele, i) => (
                              <option key={i}>{ele.name}</option>
                            ))}
                          </Select>
                          <InputError err={errors} name="course" />
                        </>
                      )}
                    />
                  </FormControl>
                </Box>
                <Flex justify={"center"}>
                  <Button type="submit" w="full" colorScheme="red" bg="#b9292f" mr={3} onClick={handleSubmit(onSubmit)}>
                    {loading ? <Spinner /> : "Submit"}
                    {/* Submit */}
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
